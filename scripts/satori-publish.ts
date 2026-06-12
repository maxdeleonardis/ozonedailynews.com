#!/usr/bin/env ts-node
/**
 * scripts/satori-publish.ts
 * Calls Satori POST /api/v1/publish to mint a stored PNG thumbnail,
 * then writes the returned generated_url back into the article JSON.
 *
 * Usage:
 *   npx ts-node --project tsconfig.scripts.json scripts/satori-publish.ts \
 *     --slug  science-galaxy-killing-wind-cristal-02-jwst-early-universe-2026 \
 *     --table jack_articles
 *
 *   --slug    article slug (required)
 *   --table   articles | jack_articles | wiki_articles | article_pages (default: articles)
 *   --layout  standard | minimal | bold | cinematic (default: standard)
 *   --dry     Print payload, do not call API
 */

import * as fs   from 'fs';
import * as path from 'path';

const SATORI_PUBLISH       = 'https://satori-neon.vercel.app/api/v1/publish';
const SATORI_QUICK         = 'https://satori-neon.vercel.app/api/v1/quick-generate';
const SATORI_FETCH_ARTICLE = 'https://satori-neon.vercel.app/api/v1/fetch-article';
const STATIC_BASE    = path.join(process.cwd(), 'content', 'static');
const REGISTRY_PATH  = path.join(STATIC_BASE, 'content_registry.json');

const STORES = [
  'articles', 'jack_articles', 'wiki_articles',
  'creator_articles', 'article_pages', 'sterling_articles',
] as const;

// ── Args ──────────────────────────────────────────────────────────────────────

const argv    = process.argv.slice(2);
const DRY     = argv.includes('--dry');

function getFlag(flag: string): string | undefined {
  const i = argv.indexOf(flag);
  return i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : undefined;
}

const slugArg   = getFlag('--slug');
const tableArg  = getFlag('--table') ?? 'articles';
const layoutArg = getFlag('--layout') ?? 'standard';
const imageArg  = getFlag('--image');
const modeArg   = getFlag('--mode') ?? 'publish'; // publish | quick | fetch

// ── Helpers ───────────────────────────────────────────────────────────────────

function findJsonFilesRecursive(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findJsonFilesRecursive(fp));
    else if (entry.name.endsWith('.json') && entry.name !== '_index.json') results.push(fp);
  }
  return results;
}

function findArticleFile(slug: string): { filePath: string; data: Record<string, unknown> } | null {
  for (const store of STORES) {
    // Flat path first (legacy)
    const flat = path.join(STATIC_BASE, store, `${slug}.json`);
    if (fs.existsSync(flat)) {
      return { filePath: flat, data: JSON.parse(fs.readFileSync(flat, 'utf8')) };
    }
    // Recursive scan (sharded)
    for (const fp of findJsonFilesRecursive(path.join(STATIC_BASE, store))) {
      if (path.basename(fp) === `${slug}.json`) {
        return { filePath: fp, data: JSON.parse(fs.readFileSync(fp, 'utf8')) };
      }
    }
  }
  return null;
}

function writeBackThumbnail(filePath: string, imageUrl: string): void {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Record<string, unknown>;
  data.thumbnail_src = imageUrl;
  if (data.hero_image && typeof data.hero_image === 'object') {
    (data.hero_image as Record<string, unknown>).src = imageUrl;
  }
  const meta = data.metadata as Record<string, unknown> | undefined;
  if (meta?.openGraph) {
    const og  = meta.openGraph as Record<string, unknown>;
    const imgs = og.images as Array<Record<string, unknown>> | undefined;
    if (imgs?.[0]) imgs[0].url = imageUrl;
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function updateRegistry(slug: string, imageUrl: string): void {
  if (!fs.existsSync(REGISTRY_PATH)) return;
  const reg = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8')) as Array<Record<string, unknown>>;
  let hit = false;
  for (const e of reg) {
    if (e.slug === slug || String(e.slug).endsWith(`/${slug}`)) {
      e.thumbnail_src = imageUrl; hit = true; break;
    }
  }
  if (hit) fs.writeFileSync(REGISTRY_PATH, JSON.stringify(reg, null, 2), 'utf8');
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function mintOne(slug: string) {
  console.log(`\n  📸  Minting thumbnail for: ${slug}  [mode: ${modeArg}]`);

  const found = findArticleFile(slug);
  if (!found) {
    console.error(`  ✗  File not found for slug: ${slug}`);
    process.exit(1);
  }

  const { filePath, data } = found;
  const title      = (data.title    as string) ?? '';
  const subtitle   = (data.subtitle as string) ?? '';
  const articleUrl = (data.url ?? data.article_url) as string ?? '';

  const rawImageUrl    = (data.hero_image as Record<string, unknown>)?.src as string
                      ?? data.thumbnail_src as string ?? '';
  const isGeneratedUrl = rawImageUrl.includes('/api/og') || rawImageUrl.includes('satori-neon');
  const backgroundUrl  = imageArg ?? (isGeneratedUrl ? '' : rawImageUrl);

  let endpoint = SATORI_PUBLISH;
  let payload: Record<string, unknown>;

  if (modeArg === 'quick') {
    // ── Mode: quick-generate (scrapes live URL, AI photo, full mint) ──────
    if (!articleUrl) {
      console.error('  ✗  Article has no url field. Cannot use quick mode.');
      process.exit(1);
    }
    endpoint = SATORI_QUICK;
    payload  = { url: articleUrl };

  } else if (modeArg === 'fetch') {
    // ── Mode: fetch-article (dynamic /api/og preview, no storage) ─────────
    if (!articleUrl) {
      console.error('  ✗  Article has no url field. Cannot use fetch mode.');
      process.exit(1);
    }
    endpoint = SATORI_FETCH_ARTICLE;
    payload  = { url: articleUrl };

  } else {
    // ── Mode: publish (stored PNG → Supabase Storage) ─────────────────────
    if (!backgroundUrl) {
      console.error(`  ✗  No background image URL found.`);
      console.error(`     Pass a real image with: --image https://images.unsplash.com/photo-XXX?w=1200&h=675&fit=crop\n`);
      process.exit(1);
    }
    payload = {
      article_id:   slug,
      source_slug:  slug,
      source_table: tableArg,
      brand_slug:   (data.brand_slug as string) ?? 'ozone',
      title,
      subtitle:     subtitle.substring(0, 200), // truncate to avoid Satori limits
      image_url:    backgroundUrl,
      layout:       layoutArg,
    };
  }

  console.log(`\n  Endpoint : ${endpoint}`);
  console.log(`  Payload  :`, JSON.stringify(payload, null, 4));

  if (DRY) {
    console.log('\n  [dry run — API not called]\n');
    return;
  }

  console.log('\n  ⟳ Calling Satori...');

  const res = await fetch(endpoint, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload),
    signal:  AbortSignal.timeout(30_000),
  });

  const raw = await res.text();
  console.log(`  HTTP ${res.status}`);

  if (!res.ok) {
    console.error(`  ✗  Satori error (${res.status}): ${raw.slice(0, 400)}`);
    process.exit(1);
  }

  let result: Record<string, unknown>;
  try { result = JSON.parse(raw); }
  catch { console.error(`  ✗  Non-JSON response: ${raw.slice(0, 300)}`); process.exit(1); }

  console.log('  Response :', JSON.stringify(result, null, 4));

  // Field name varies by endpoint
  const generatedUrl = (
    result.generated_url ?? result.imageUrl ?? result.url ?? result.image_url
  ) as string | undefined;

  if (!generatedUrl) {
    console.error(`  ✗  No image URL in response. Keys: ${Object.keys(result).join(', ')}`);
    process.exit(1);
  }

  console.log(`\n  ✓  Thumbnail URL: ${generatedUrl}`);

  writeBackThumbnail(filePath, generatedUrl);
  updateRegistry(slug, generatedUrl);

  console.log(`  ✓  Written to: ${path.relative(process.cwd(), filePath)}`);
  console.log(`  ✓  Registry updated`);
  console.log(`\n  Next: npm run backfill && git add -A && git commit -m "chore: update thumbnail ${slug}" && git push\n`);
}

async function main() {
  console.log('\n  🎨  Satori Publish — OzoneNews Thumbnail Minter (stored PNG)\n');

  if (!slugArg) {
    console.error('  Usage: npx ts-node scripts/satori-publish.ts --slug <slug> [--table jack_articles] [--layout standard] [--dry]');
    process.exit(1);
  }

  await mintOne(slugArg);
}

main().catch(err => {
  console.error('\n  ✗  Error:', err.message ?? err);
  process.exit(1);
});
