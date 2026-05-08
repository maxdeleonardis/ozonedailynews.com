// Fill missing thumbnail images in the on-prem content registry using Unsplash.
//
// Usage:
//   npx tsx --env-file=.env.local scripts/unsplash-fill-images.ts
//
// Optional env vars:
//   BATCH_LIMIT=50       — max articles to process per run (default: all missing)
//   UNSPLASH_ACCESS_KEY  — from https://unsplash.com/developers (required)
//
// What it does:
//   1. Reads content/static/content_registry.json
//   2. For each entry missing image_url, queries Unsplash by article keywords
//   3. Writes image_url, image_width, image_height, image_alt back into the registry
//   4. Also back-fills image_url / thumbnail_src into the matching static article JSON
//      in content/static/{articles,jack_articles,creator_articles}/ if one exists

import fs from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!UNSPLASH_KEY || UNSPLASH_KEY === 'your_unsplash_access_key_here') {
  console.error('❌  UNSPLASH_ACCESS_KEY not set in .env.local');
  console.error('    Get a free key at https://unsplash.com/developers');
  process.exit(1);
}

const BATCH_LIMIT = process.env.BATCH_LIMIT ? Number(process.env.BATCH_LIMIT) : Infinity;
// Unsplash demo apps: 50 req/hr. Production apps (approved): 5000/hr.
// 1.2 s sleep keeps demo key within limits.
const RATE_LIMIT_MS = 1200;

const STATIC_BASE   = path.join(process.cwd(), 'content', 'static');
const REGISTRY_PATH = path.join(STATIC_BASE, 'content_registry.json');

// Article stores that hold static JSON files we can back-fill
const ARTICLE_STORES = ['articles', 'jack_articles', 'creator_articles', 'article_pages', 'alysa_articles'];

// ---------------------------------------------------------------------------
// Category → Unsplash search term mapping
// ---------------------------------------------------------------------------
const CATEGORY_QUERIES: Record<string, string> = {
  Tech:          'technology computer innovation',
  Technology:    'technology computer innovation',
  Gaming:        'gaming esports controller',
  'Video Games': 'video game console controller',
  Finance:       'stock market finance charts',
  Crypto:        'cryptocurrency bitcoin blockchain',
  Entertainment: 'cinema film entertainment',
  Politics:      'government politics capitol',
  Sports:        'stadium sports athlete',
  Science:       'laboratory science research',
  News:          'newspaper journalism press',
  YouTube:       'video streaming content creator',
  Investigations:'detective investigation document',
  World:         'globe international diplomacy',
  Culture:       'culture art city',
  Influencer:    'social media creator lifestyle',
  Creator:       'content creator studio',
  Anime:         'japan animation art',
  Crypto:        'bitcoin cryptocurrency digital',
  Gaming:        'gaming esports controller',
};

// Brand names / proper nouns Unsplash won't have editorial photos for.
// Title words matching these fall back to category query.
const BRAND_WORDS = new Set([
  'anthropic', 'openai', 'perplexity', 'pokémon', 'pokemon', 'pokopia',
  'tenstorrent', 'outersloth', 'sidemen', 'bungie', 'marathon', 'cursor',
  'crowdstrike', 'fortnite', 'youtube', 'tiktok', 'instagram', 'snapchat',
  'discord', 'twitch', 'valkyrae', 'pokimane', 'objectwire', 'rockstar',
  'take-two', 'taketwo', 'ubisoft', 'nintendo', 'playstation', 'xbox',
  'microsoft', 'google', 'apple', 'nvidia', 'meta', 'bytedance',
  'hugging', 'gemini', 'claude', 'gpt', 'chatgpt', 'copilot',
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function titleToQueries(title: string, category: string): [string, string] {
  const fallback = CATEGORY_QUERIES[category] ?? category.toLowerCase();
  const words = title
    .replace(/[|—–\-:$'"]/g, ' ')
    .replace(/objectwire/gi, '')
    .split(/\s+/)
    .filter(w => w.length > 3 && !BRAND_WORDS.has(w.toLowerCase()))
    .slice(0, 4)
    .join(' ');
  return [words || fallback, fallback];
}

interface UnsplashPhoto {
  urls: { raw: string };
  alt_description?: string;
  description?: string;
}

async function searchUnsplash(query: string): Promise<{ url: string; alt: string } | null> {
  const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape&client_id=${UNSPLASH_KEY}`;
  try {
    const res = await fetch(endpoint);
    if (res.status === 403) {
      console.error('  ❌  Unsplash 403 — check your UNSPLASH_ACCESS_KEY');
      process.exit(1);
    }
    if (!res.ok) {
      console.warn(`  ⚠️  Unsplash HTTP ${res.status} for "${query}"`);
      return null;
    }
    const data = await res.json() as { results: UnsplashPhoto[] };
    if (!data.results?.length) return null;
    const photo = data.results.find(p => p.alt_description) ?? data.results[0];
    const rawUrl = photo.urls.raw;
    return {
      url: `${rawUrl}&w=1200&h=675&fit=crop&crop=entropy&q=85&fm=jpg`,
      alt: String(photo.alt_description ?? photo.description ?? query),
    };
  } catch (e) {
    console.warn(`  ⚠️  Unsplash fetch error: ${e}`);
    return null;
  }
}

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

// Build a slug→filepath map for all article stores
function buildArticleFileMap(): Map<string, string> {
  const map = new Map<string, string>();
  for (const store of ARTICLE_STORES) {
    const dir = path.join(STATIC_BASE, store);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.json') || file === '_index.json') continue;
      const slug = file.replace(/\.json$/, '');
      map.set(slug, path.join(dir, file));
    }
  }
  return map;
}

// Derive file slug from registry slug ("/video-games/gta-6/article" → "video-games-gta-6-article")
function registrySlugToFileSlug(slug: string): string {
  return slug.replace(/^\//, '').replace(/\//g, '-');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  // Load registry
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error(`❌  Registry not found: ${REGISTRY_PATH}`);
    process.exit(1);
  }
  const registry: Record<string, unknown>[] = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));

  // Filter: missing image_url, skip hub pages (< 2 path segments), skip dynamic routes
  const missing = registry.filter(e => {
    const slug = String(e.slug ?? '');
    if (!slug || slug.includes('[')) return false;
    if (slug.split('/').filter(Boolean).length < 2) return false;
    if (e.image_url) return false;
    return true;
  });

  const toProcess = BATCH_LIMIT < Infinity ? missing.slice(0, BATCH_LIMIT) : missing;

  console.log(`\n📷  Unsplash image fill`);
  console.log(`    Registry: ${registry.length} entries`);
  console.log(`    Missing images: ${missing.length}`);
  console.log(`    Processing: ${toProcess.length}${BATCH_LIMIT < Infinity ? ` (limit ${BATCH_LIMIT})` : ''}\n`);

  // Build article file map for back-filling
  const articleFiles = buildArticleFileMap();

  let updated = 0;
  let failed  = 0;

  for (let i = 0; i < toProcess.length; i++) {
    const entry   = toProcess[i];
    const slug    = String(entry.slug ?? '');
    const title   = String(entry.title ?? '');
    const category = String(entry.category ?? 'News');

    console.log(`[${i + 1}/${toProcess.length}] ${slug}`);

    const [primaryQ, fallbackQ] = titleToQueries(title, category);
    console.log(`  🔍 "${primaryQ}"`);

    let photo = await searchUnsplash(primaryQ);
    await sleep(RATE_LIMIT_MS);

    if (!photo && primaryQ !== fallbackQ) {
      console.log(`  🔁 fallback: "${fallbackQ}"`);
      photo = await searchUnsplash(fallbackQ);
      await sleep(RATE_LIMIT_MS);
    }

    if (!photo) {
      console.log(`  ⚠️  No result`);
      failed++;
      continue;
    }

    const altText = `${photo.alt} — ${title.replace(/\s*\|\s*ObjectWire/gi, '')}`.slice(0, 255);

    // Update registry entry in-memory
    entry.image_url    = photo.url;
    entry.image_width  = 1200;
    entry.image_height = 675;
    entry.image_alt    = altText;

    // Back-fill the article's own static JSON if it exists
    const fileSlug = registrySlugToFileSlug(slug);
    const articlePath = articleFiles.get(fileSlug);
    if (articlePath) {
      try {
        const article: Record<string, unknown> = JSON.parse(fs.readFileSync(articlePath, 'utf8'));
        if (!article.image_url)     article.image_url     = photo.url;
        if (!article.thumbnail_src) article.thumbnail_src = photo.url;
        if (!article.thumbnail_alt) article.thumbnail_alt = altText;
        if (!article.image_alt)     article.image_alt     = altText;
        article.image_width  = 1200;
        article.image_height = 675;
        fs.writeFileSync(articlePath, JSON.stringify(article, null, 2));
        console.log(`  📝 article JSON updated`);
      } catch (e) {
        console.warn(`  ⚠️  Could not update article JSON: ${e}`);
      }
    }

    console.log(`  ✅ ${photo.url.slice(0, 70)}…`);
    updated++;

    // Write registry to disk every 10 updates (crash-safe checkpoint)
    if (updated % 10 === 0) {
      fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2));
      console.log(`  💾 Registry saved (checkpoint at ${updated} updates)`);
    }
  }

  // Final write
  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2));
  console.log(`\n✅  Done. Updated: ${updated}, No result: ${failed}`);
  console.log(`    Registry written to ${REGISTRY_PATH}`);
  console.log(`\n    Run 'git add -A && git commit -m "feat: add Unsplash thumbnails to registry"' to commit.`);
}

main().catch(e => { console.error(e); process.exit(1); });
