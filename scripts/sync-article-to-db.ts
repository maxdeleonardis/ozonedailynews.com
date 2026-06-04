#!/usr/bin/env tsx
// =============================================================================
// scripts/sync-article-to-db.ts
// =============================================================================
// Reads a single article JSON from content/static/{store}/{slug}.json and
// upserts it into:
//   1. Supabase `jack_articles` (or `articles` / `article_pages`) table
//   2. Supabase `content_registry` table (for OG lookup + sitemap)
//
// Usage:
//   npx tsx scripts/sync-article-to-db.ts jack_articles anime-hunter-x-hunter-new-season-2026
//   npx tsx scripts/sync-article-to-db.ts articles some-other-slug
//
// Requires .env.local with NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const dotenv = require('dotenv') as { config: (opts: { path: string }) => void };
  dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });
} catch { /* env vars set externally */ }

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_KEY   = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌  NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local');
  process.exit(1);
}

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

const TABLE = (process.argv[2] ?? 'jack_articles') as 'jack_articles' | 'articles' | 'article_pages';
const SLUG  = process.argv[3];

if (!SLUG) {
  console.error('Usage: npx tsx scripts/sync-article-to-db.ts <table> <slug>');
  process.exit(1);
}

const ROOT       = path.resolve(__dirname, '..');
const STORE_MAP: Record<string, string> = {
  jack_articles:   'jack_articles',
  articles:        'articles',
  article_pages:   'article_pages',
  wiki_articles:   'wiki_articles',
  creator_articles:'creator_articles',
};

const store    = STORE_MAP[TABLE] ?? TABLE;
const jsonPath = path.join(ROOT, 'content', 'static', store, `${SLUG}.json`);

if (!fs.existsSync(jsonPath)) {
  console.error(`❌  File not found: ${jsonPath}`);
  process.exit(1);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const article = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as Record<string, any>;

console.log(`\n📄  Syncing: ${jsonPath}`);
console.log(`   Table : ${TABLE}`);
console.log(`   Slug  : ${article.slug}`);
console.log(`   Title : ${article.title}`);
console.log(`   ID    : ${article.id ?? '(none — will be auto-assigned)'}\n`);

// ── 1. Upsert into the article table ─────────────────────────────────────────
const { data: articleRow, error: articleErr } = await sb
  .from(TABLE)
  .upsert(article, { onConflict: 'slug' })
  .select('id, slug')
  .single();

if (articleErr) {
  console.error(`❌  Failed to upsert into ${TABLE}:`, articleErr.message);
  process.exit(1);
}
console.log(`✅  ${TABLE} row upserted — id: ${articleRow.id}`);

// ── 2. Build content_registry row ────────────────────────────────────────────
const urlPath = article.url ?? `/${store.replace('_', '-')}/${SLUG}`;

const registryRow = {
  slug:         article.slug,
  title:        article.title,
  description:  article.subtitle ?? null,
  category:     article.category ?? null,
  image_url:    article.thumbnail_src ?? null,
  author:       article.author_name ?? null,
  publish_date: article.publish_date ?? null,
  url:          urlPath,
  tags:         article.tags ?? [],
};

const { error: regErr } = await sb
  .from('content_registry')
  .upsert(registryRow, { onConflict: 'slug' });

if (regErr) {
  console.error('❌  Failed to upsert content_registry:', regErr.message);
  process.exit(1);
}
console.log(`✅  content_registry row upserted — slug: ${article.slug}`);

console.log(`\n🎉  Done. Article is now live in Supabase.`);
console.log(`   OG image URL: /api/og?slug=${article.slug}`);
console.log(`   Media Factory deep link:`);
console.log(`   http://localhost:3001/?articleId=${articleRow.id}&slug=${article.slug}&title=${encodeURIComponent(article.title)}&imageUrl=${encodeURIComponent(article.thumbnail_src ?? '')}&network=ozone&layout=breaking&sourceTable=${TABLE}\n`);
