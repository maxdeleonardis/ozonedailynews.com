#!/usr/bin/env ts-node
// scripts/lifecycle-manager.ts
// Content lifecycle management: news → review → feature | pruned
// Usage:
//   npx ts-node scripts/lifecycle-manager.ts --check    (flag news → review after 48h)
//   npx ts-node scripts/lifecycle-manager.ts --promote  (feature ranked articles)
//   npx ts-node scripts/lifecycle-manager.ts --prune    (delete lifecycle:"pruned" articles)

import fs from 'fs';
import path from 'path';
import type { ContentEntry, Lifecycle } from '../lib/types';

const REGISTRY_PATH = path.join(process.cwd(), 'content', 'static', 'content_registry.json');
const STATIC_BASE   = path.join(process.cwd(), 'content', 'static');
const STORE_MAP: Record<string, string> = {
  NewsArticle:    'articles',
  JackArticle:    'jack_articles',
  ArticlePage:    'article_pages',
  CreatorArticle: 'creator_articles',
  WikiArticle:    'wiki_articles',
};

const args = process.argv.slice(2);
const CHECK   = args.includes('--check');
const PROMOTE = args.includes('--promote');
const PRUNE   = args.includes('--prune');

if (!CHECK && !PROMOTE && !PRUNE) {
  console.error('Usage: npx ts-node scripts/lifecycle-manager.ts [--check | --promote | --prune]');
  process.exit(1);
}

function loadRegistry(): ContentEntry[] {
  if (!fs.existsSync(REGISTRY_PATH)) return [];
  return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
}

function saveRegistry(entries: ContentEntry[]) {
  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(entries, null, 2) + '\n');
}

// ─── --check: flag news → review after 48h ───────────────────────────────────

if (CHECK) {
  const registry = loadRegistry();
  const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000);
  let changed = 0;

  for (const entry of registry) {
    if (entry.lifecycle === 'news' && new Date(entry.publishDate) < cutoff) {
      entry.lifecycle = 'review';
      changed++;
    }
  }

  if (changed > 0) {
    saveRegistry(registry);
    console.log(`\n  lifecycle:check — ${changed} article(s) moved news → review.`);
    console.log('  Run --promote to feature ranked articles or set lifecycle manually.\n');
  } else {
    console.log('\n  lifecycle:check — No articles ready for review transition.\n');
  }
}

// ─── --promote: feature ranked articles via GSC API ──────────────────────────

if (PROMOTE) {
  const GSC_SITE_URL    = process.env.GSC_SITE_URL;
  const GOOGLE_SA_EMAIL = process.env.GOOGLE_SA_EMAIL;
  const GOOGLE_SA_KEY   = process.env.GOOGLE_SA_PRIVATE_KEY;

  const registry    = loadRegistry();
  const reviewItems = registry.filter((e) => e.lifecycle === 'review');

  if (reviewItems.length === 0) {
    console.log('\n  lifecycle:promote — No articles in review state.\n');
    process.exit(0);
  }

  // ── Manual mode: no GSC credentials ──────────────────────────────────────
  if (!GSC_SITE_URL || !GOOGLE_SA_EMAIL || !GOOGLE_SA_KEY) {
    console.log('\n  lifecycle:promote — GSC env vars not set. Running in manual mode.');
    console.log('  Set GOOGLE_SA_EMAIL + GOOGLE_SA_PRIVATE_KEY + GSC_SITE_URL to enable auto-promotion.');
    console.log('\n  Articles in review (promote manually by setting lifecycle: "feature" in JSON):');
    reviewItems.forEach((e) => console.log(`    • ${e.slug}  (published: ${e.publishDate})`));
    console.log('');
    process.exit(0);
  }

  // ── Auto mode: GSC Search Analytics ──────────────────────────────────────
  console.log(`\n  lifecycle:promote — Querying GSC for rank data (last 7 days)...`);

  const { querySearchAnalytics } = await import('./gsc-client');

  let gscRows;
  try {
    // Pass full article URLs so GSC filters to only our review items
    const reviewUrls = reviewItems.map((e) => e.slug);
    gscRows = await querySearchAnalytics(GSC_SITE_URL, 7, reviewUrls);
  } catch (err) {
    console.error(`  GSC query failed: ${err instanceof Error ? err.message : String(err)}`);
    console.log('  Falling back to manual mode — set lifecycle manually in JSON files.\n');
    process.exit(1);
  }

  // Build a lookup map: full URL → GSC row
  const gscMap = new Map(gscRows.map((r) => [r.slug, r]));

  let promoted = 0;
  let noData   = 0;

  for (const entry of registry) {
    if (entry.lifecycle !== 'review') continue;

    const row = gscMap.get(entry.slug);

    if (!row) {
      noData++;
      continue; // no GSC data yet — too new or not yet crawled
    }

    const shouldFeature =
      row.clicks      >= 5   ||
      row.impressions >= 100 ||
      row.position    <= 30;

    if (shouldFeature) {
      entry.lifecycle = 'feature' as Lifecycle;
      promoted++;
      console.log(
        `    ✔ FEATURE  ${entry.slug}` +
        `  clicks:${row.clicks}  impressions:${row.impressions}  pos:${row.position.toFixed(1)}`
      );
    } else {
      console.log(
        `    –  review   ${entry.slug}` +
        `  clicks:${row.clicks}  impressions:${row.impressions}  pos:${row.position.toFixed(1)}`
      );
    }
  }

  if (promoted > 0) {
    saveRegistry(registry);
    console.log(`\n  ✔ Promoted ${promoted} article(s) to feature. Registry saved.`);
    console.log('  Run: git add -A && git commit -m "lifecycle: promote featured articles" && git push\n');
  } else {
    console.log(`\n  No articles met promotion thresholds yet.`);
    if (noData > 0) console.log(`  ${noData} article(s) have no GSC data yet (may be too new).\n`);
  }
}

// ─── --prune: delete lifecycle:"pruned" articles ─────────────────────────────

if (PRUNE) {
  const registry = loadRegistry();
  const toPrune = registry.filter((e) => e.lifecycle === 'pruned');

  if (toPrune.length === 0) {
    console.log('\n  lifecycle:prune — No articles marked lifecycle:"pruned".\n');
    process.exit(0);
  }

  console.log(`\n  lifecycle:prune — Deleting ${toPrune.length} pruned article(s):`);
  let deleted = 0;

  for (const entry of toPrune) {
    const storeKey = entry.articleType ?? 'NewsArticle';
    const store = STORE_MAP[storeKey] ?? 'articles';
    const slug = entry.slug.replace(/\//g, '-').replace(/^-/, '');
    const jsonPath = path.join(STATIC_BASE, store, `${slug}.json`);

    if (fs.existsSync(jsonPath)) {
      fs.unlinkSync(jsonPath);
      console.log(`    - Deleted: ${jsonPath}`);
      deleted++;
    }

    // Update _index.json
    const indexPath = path.join(STATIC_BASE, store, '_index.json');
    if (fs.existsSync(indexPath)) {
      try {
        const index: string[] = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
        const updated = index.filter((s: string) => s !== slug && s !== entry.slug);
        fs.writeFileSync(indexPath, JSON.stringify(updated, null, 2) + '\n');
      } catch {
        // Index not an array, skip
      }
    }
  }

  const cleaned = registry.filter((e) => e.lifecycle !== 'pruned');
  saveRegistry(cleaned);

  console.log(`\n  ✔ Pruned ${deleted} file(s). Registry updated: ${cleaned.length} entries remain.`);
  console.log('  Run: git add -A && git commit -m "prune: removed low-value articles" && git push\n');
}
