#!/usr/bin/env ts-node
// scripts/clean-foreign-articles.ts
// Trust-layer cleanup: removes articles that do NOT belong to this domain.
//
// A news network's authority depends on a clean registry. If this site's sitemap,
// RSS feed, or registry references content whose canonical URL lives on ANOTHER
// domain (e.g. flagship ozonenetwork.news articles sitting in ozonedailynews.com),
// Google reads it as a duplicate/wrong-canonical spam signal.
//
// This script enforces one rule:
//   An article belongs here ONLY if its canonical URL host == this site's host.
//
// It cleans four surfaces so they can never drift apart:
//   1. content/static/<store>/<slug>.json   — foreign article files (deleted)
//   2. content/articles/<uuid>.json          — UUID mirrors of foreign files (deleted)
//   3. content/static/content_registry.json  — foreign + orphan entries (removed)
//   4. Supabase articles + content_registry   — foreign rows (deleted, if service key set)
//
// Usage:
//   npx dotenv-cli -e .env -- npx ts-node --project tsconfig.scripts.json scripts/clean-foreign-articles.ts
//   (dry run — prints what would change; add --write to apply)

import fs from 'fs';
import path from 'path';

const WRITE = process.argv.includes('--write');

const OWN_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ozonedailynews.com';
const OWN_HOST = new URL(OWN_URL).host; // e.g. www.ozonedailynews.com

const STATIC_BASE = path.join(process.cwd(), 'content', 'static');
const UUID_MIRROR_DIR = path.join(process.cwd(), 'content', 'articles');
const REGISTRY_PATH = path.join(STATIC_BASE, 'content_registry.json');

const STORES = ['articles', 'jack_articles', 'sterling_articles', 'article_pages', 'creator_articles', 'wiki_articles'];

type Json = Record<string, unknown>;

function hostOf(rawUrl: string): string | null {
  if (!rawUrl) return null;
  try {
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) return new URL(rawUrl).host;
    return OWN_HOST; // relative URL → belongs to this site
  } catch {
    return null;
  }
}

function pathnameOf(rawUrl: string): string {
  try {
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) return new URL(rawUrl).pathname;
  } catch { /* fall through */ }
  return rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`;
}

// ─── 1. Scan static stores: classify each article as OWN or FOREIGN ────────────

const foreignFiles: Array<{ file: string; store: string; id?: string; url: string }> = [];
const validPathnames = new Set<string>(); // pathnames of OWN-domain articles that survive

for (const store of STORES) {
  const dir = path.join(STATIC_BASE, store);
  if (!fs.existsSync(dir)) continue;

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.json') || file === '_index.json') continue;
    const full = path.join(dir, file);
    let article: Json;
    try {
      article = JSON.parse(fs.readFileSync(full, 'utf8'));
    } catch {
      console.warn(`  WARN  unparseable: ${path.relative(process.cwd(), full)}`);
      continue;
    }

    const rawUrl = (article.url as string) ?? (article.slug as string) ?? '';
    const host = hostOf(rawUrl);

    if (host && host !== OWN_HOST) {
      foreignFiles.push({ file: full, store, id: article.id as string | undefined, url: rawUrl });
    } else {
      validPathnames.add(pathnameOf(rawUrl));
    }
  }
}

// ─── 2. Load registry, split into KEEP vs REMOVE ───────────────────────────────

let registry: Array<{ slug: string; title?: string }> = [];
try {
  registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
} catch {
  registry = [];
}

const registryKeep: typeof registry = [];
const registryRemove: typeof registry = [];

for (const entry of registry) {
  const pn = pathnameOf(entry.slug);
  // Keep only entries backed by a surviving OWN-domain static file.
  // This drops both foreign articles AND orphan registry entries (no backing file).
  if (validPathnames.has(pn)) registryKeep.push(entry);
  else registryRemove.push(entry);
}

// ─── Report ────────────────────────────────────────────────────────────────────

console.log(`\n  Own host: ${OWN_HOST}\n`);

console.log(`  Foreign static files to delete (${foreignFiles.length}):`);
for (const f of foreignFiles) {
  console.log(`    - ${path.relative(process.cwd(), f.file)}`);
  console.log(`        canonical: ${f.url}`);
}

console.log(`\n  Registry entries to remove (${registryRemove.length}) [foreign + orphans]:`);
for (const e of registryRemove) console.log(`    - ${e.slug}  ${e.title ? `(${e.title})` : ''}`);

console.log(`\n  Registry: ${registry.length} → ${registryKeep.length} entries after cleanup.`);

if (!WRITE) {
  console.log('\n  Dry run. Re-run with --write to apply:\n');
  console.log('  npx dotenv-cli -e .env -- npx ts-node --project tsconfig.scripts.json scripts/clean-foreign-articles.ts --write\n');
  process.exit(0);
}

// ─── 3. Apply: delete files + UUID mirrors ──────────────────────────────────────

let deletedFiles = 0;
let deletedMirrors = 0;
for (const f of foreignFiles) {
  try { fs.unlinkSync(f.file); deletedFiles++; } catch { /* already gone */ }
  if (f.id) {
    const mirror = path.join(UUID_MIRROR_DIR, `${f.id}.json`);
    if (fs.existsSync(mirror)) { try { fs.unlinkSync(mirror); deletedMirrors++; } catch { /* noop */ } }
  }
}

// ─── 4. Rewrite registry ────────────────────────────────────────────────────────

fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registryKeep, null, 2) + '\n', 'utf8');

console.log(`\n  ✔ Deleted ${deletedFiles} static file(s), ${deletedMirrors} UUID mirror(s).`);
console.log(`  ✔ Registry rewritten: ${registryKeep.length} entries.`);

// ─── 5. Clean Supabase (articles + content_registry) ────────────────────────────

async function cleanSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.log('\n  Supabase: env vars not set — skipping DB cleanup.');
    console.log('  (Filesystem is clean; run again with Supabase keys to purge DB rows.)\n');
    return;
  }

  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(url, key, { auth: { persistSession: false } });

  const removeSlugsAbsolute = registryRemove.map((e) => e.slug);                 // registry slug form
  const removePathnames = registryRemove.map((e) => pathnameOf(e.slug));         // pathname form
  const removeFileSlugs = foreignFiles.map((f) => path.basename(f.file, '.json')); // articles.slug form

  // articles table is keyed by the file slug (e.g. "google-news-turboquant-...")
  if (removeFileSlugs.length > 0) {
    const { error, count } = await supabase
      .from('articles')
      .delete({ count: 'exact' })
      .in('slug', removeFileSlugs);
    if (error) console.error(`  Supabase articles delete error: ${error.message}`);
    else console.log(`  ✔ Supabase articles: deleted ${count ?? 0} row(s).`);
  }

  // content_registry is keyed by the public slug (pathname, possibly absolute legacy form)
  const allRegistrySlugs = Array.from(new Set([...removeSlugsAbsolute, ...removePathnames]));
  if (allRegistrySlugs.length > 0) {
    const { error, count } = await supabase
      .from('content_registry')
      .delete({ count: 'exact' })
      .in('slug', allRegistrySlugs);
    if (error) console.error(`  Supabase content_registry delete error: ${error.message}`);
    else console.log(`  ✔ Supabase content_registry: deleted ${count ?? 0} row(s).`);
  }
}

await cleanSupabase();
console.log('\n  Done.\n');
