#!/usr/bin/env ts-node
/**
 * scripts/mint-thumbnails.ts
 *
 * Calls the Satori Media Factory API to generate (mint) OG thumbnails
 * for one or all published articles, then writes the returned imageUrl
 * back into the article's JSON file and content_registry.json.
 *
 * Usage:
 *   npm run mint:thumbnails                          — all published articles
 *   npm run mint:thumbnails -- --slug tech-blazar-talon-1-5x-...
 *   npm run mint:thumbnails -- --dry                 — print what would run, no writes
 *   npm run mint:thumbnails -- --force               — overwrite existing thumbnail_src
 *
 * The Satori API (https://satori-neon.vercel.app/api/v1/fetch-article):
 *   POST { url: "https://www.ozonedailynews.com/category/slug" }
 *   → { title, subtitle, imageUrl, slug, brandSlug }
 *
 * imageUrl is the canonical /api/og?slug=... URL for this site. We store it
 * in thumbnail_src so the article JSON, OG tags, and Twitter card all resolve
 * correctly through the existing /api/og route.
 */

import * as fs from 'fs';
import * as path from 'path';

// ── Config ─────────────────────────────────────────────────────────────────

const SATORI_API    = 'https://satori-neon.vercel.app/api/v1/fetch-article';
const SITE_URL      = 'https://www.ozonedailynews.com';
const STATIC_BASE   = path.join(process.cwd(), 'content', 'static');
const REGISTRY_PATH = path.join(STATIC_BASE, 'content_registry.json');

const STORES = [
  'articles',
  'jack_articles',
  'sterling_articles',
  'article_pages',
  'creator_articles',
  'wiki_articles',
] as const;

// ── Arg parsing ────────────────────────────────────────────────────────────

const args          = process.argv.slice(2);
const DRY_RUN       = args.includes('--dry');
const FORCE         = args.includes('--force');
const slugArg       = args.find((a, i) => args[i - 1] === '--slug') ?? undefined;

// ── Types ──────────────────────────────────────────────────────────────────

interface SatoriResponse {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  slug?: string;
  brandSlug?: string;
  error?: string;
}

interface ArticleFile {
  slug: string;
  url?: string;
  article_url?: string;
  thumbnail_src?: string;
  status?: string;
  [key: string]: unknown;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function findArticleFile(slug: string): { filePath: string; data: ArticleFile } | null {
  for (const store of STORES) {
    const fp = path.join(STATIC_BASE, store, `${slug}.json`);
    if (fs.existsSync(fp)) {
      try {
        const data = JSON.parse(fs.readFileSync(fp, 'utf8')) as ArticleFile;
        return { filePath: fp, data };
      } catch {
        return null;
      }
    }
  }
  return null;
}

function getAllArticleSlugs(): string[] {
  const slugs: string[] = [];
  for (const store of STORES) {
    const dir = path.join(STATIC_BASE, store);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.json') && f !== '_index.json') {
        slugs.push(f.replace(/\.json$/, ''));
      }
    }
  }
  return slugs;
}

function getArticleUrl(article: ArticleFile): string | null {
  const raw = article.url ?? article.article_url ?? '';
  if (raw.startsWith('http')) return raw;
  if (raw.startsWith('/')) return `${SITE_URL}${raw}`;
  return null;
}

async function callSatoriAPI(articleUrl: string): Promise<SatoriResponse> {
  const res = await fetch(SATORI_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'OzoneNews-ThumbnailMinter/1.0',
    },
    body: JSON.stringify({ url: articleUrl }),
    signal: AbortSignal.timeout(15_000),
  });

  if (!res.ok) {
    return { error: `HTTP ${res.status}` };
  }

  return res.json() as Promise<SatoriResponse>;
}

function writeBackThumbnail(filePath: string, imageUrl: string): void {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw) as Record<string, unknown>;

  data.thumbnail_src = imageUrl;

  // Also update hero_image and OG images if present
  if (data.hero_image && typeof data.hero_image === 'object') {
    (data.hero_image as Record<string, unknown>).src = imageUrl;
  }

  const metadata = data.metadata as Record<string, unknown> | undefined;
  if (metadata?.openGraph) {
    const og = metadata.openGraph as Record<string, unknown>;
    const images = og.images as Array<Record<string, unknown>> | undefined;
    if (images?.[0]) images[0].url = imageUrl;
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function updateRegistry(slug: string, imageUrl: string): void {
  if (!fs.existsSync(REGISTRY_PATH)) return;
  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8')) as Array<Record<string, unknown>>;
  let updated = false;
  for (const entry of registry) {
    if (entry.slug === slug || String(entry.slug).endsWith(`/${slug}`)) {
      entry.thumbnail_src = imageUrl;
      updated = true;
      break;
    }
  }
  if (updated) {
    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2), 'utf8');
  }
}

// ── Main ───────────────────────────────────────────────────────────────────

async function mintOne(slug: string): Promise<'minted' | 'skipped' | 'error'> {
  const found = findArticleFile(slug);
  if (!found) {
    console.error(`  ✗ ${slug} — file not found`);
    return 'error';
  }

  const { filePath, data } = found;

  // Skip if already has a thumbnail and --force not set
  if (data.thumbnail_src && !FORCE) {
    console.log(`  ○ ${slug} — already has thumbnail_src (use --force to overwrite)`);
    return 'skipped';
  }

  const articleUrl = getArticleUrl(data);
  if (!articleUrl) {
    console.error(`  ✗ ${slug} — no url field`);
    return 'error';
  }

  process.stdout.write(`  ⚡ ${slug} … `);

  if (DRY_RUN) {
    console.log(`[dry] would POST ${articleUrl}`);
    return 'skipped';
  }

  try {
    const result = await callSatoriAPI(articleUrl);

    if (result.error || !result.imageUrl) {
      console.log(`✗ API error: ${result.error ?? 'no imageUrl'}`);
      return 'error';
    }

    writeBackThumbnail(filePath, result.imageUrl);
    updateRegistry(slug, result.imageUrl);

    console.log(`✓ ${result.imageUrl}`);
    return 'minted';
  } catch (err) {
    console.log(`✗ ${err instanceof Error ? err.message : String(err)}`);
    return 'error';
  }
}

async function main() {
  console.log('\n🎨 OzoneNews Thumbnail Minter');
  console.log(`   Satori API: ${SATORI_API}`);
  if (DRY_RUN) console.log('   Mode: DRY RUN (no writes)');
  if (FORCE)   console.log('   Mode: FORCE (overwrite existing thumbnails)');
  console.log('');

  const slugs = slugArg ? [slugArg] : getAllArticleSlugs();

  console.log(`Processing ${slugs.length} article(s)...\n`);

  const counts = { minted: 0, skipped: 0, error: 0 };

  for (const slug of slugs) {
    const result = await mintOne(slug);
    counts[result]++;
  }

  console.log(`\n✅ Done.`);
  console.log(`   Minted:  ${counts.minted}`);
  console.log(`   Skipped: ${counts.skipped}`);
  if (counts.error > 0) console.log(`   Errors:  ${counts.error}`);
  console.log('');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
