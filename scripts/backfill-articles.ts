#!/usr/bin/env ts-node
// scripts/backfill-articles.ts
// Reads all existing static article JSON files and upserts them into Supabase
// articles table with status='published'.  Safe to re-run (upsert on slug).
//
// Usage:
//   npx ts-node --project tsconfig.scripts.json scripts/backfill-articles.ts

import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// ─── Supabase (service role, bypasses RLS) ────────────────────────────────────
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('ERROR: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set.');
  console.error('       Run: npx dotenv-cli -e .env -- ts-node --project tsconfig.scripts.json scripts/backfill-articles.ts');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

// ─── Paths ────────────────────────────────────────────────────────────────────
const ARTICLES_DIR = path.join(process.cwd(), 'content', 'static', 'articles');

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const files = fs.readdirSync(ARTICLES_DIR).filter(
    (f) => f.endsWith('.json') && f !== '_index.json'
  );

  console.log(`Found ${files.length} article JSON files.\n`);

  let ok = 0;
  let failed = 0;

  for (const file of files) {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
    let article: Record<string, unknown>;

    try {
      article = JSON.parse(raw);
    } catch (e) {
      console.error(`  SKIP  ${file} — invalid JSON: ${e}`);
      failed++;
      continue;
    }

    const slug = (article.slug as string) || file.replace('.json', '');

    // Map JSON fields → articles table columns
    const row = {
      slug,
      url:          article.url           ?? `https://www.ozonenetwork.news/${slug}`,
      title:        article.title         ?? '',
      subtitle:     article.subtitle      ?? null,
      category:     article.category      ?? 'News',
      status:       'published',
      brand_slug:   (article.brand_slug as string) ?? 'ozone',
      breaking:     article.breaking      ?? false,
      trending:     article.trending      ?? false,
      exclusive:    article.exclusive     ?? false,
      topic_tag:    article.topic_tag     ?? null,
      content_html: article.content_html  ?? '',
      publish_date: article.publish_date  ?? '',
      published_at: article.published_at  ?? new Date().toISOString(),
      author_name:  article.author_name   ?? 'OzoneNews Editorial Team',
      author_slug:  article.author_slug   ?? 'ozonedailynews-editorial-team',
      read_time:    article.read_time     ?? null,
      thumbnail_src: article.thumbnail_src ?? null,
      thumbnail_alt: article.thumbnail_alt ?? null,
      tags:         Array.isArray(article.tags) ? article.tags : [],
      lifecycle:    article.lifecycle     ?? 'news',
      metadata:     article.metadata      ?? null,
    };

    const { error } = await supabase
      .from('articles')
      .upsert(row, { onConflict: 'slug' });

    if (error) {
      console.error(`  FAIL  ${slug}`);
      console.error(`        ${error.message}`);
      failed++;
    } else {
      console.log(`  OK    ${slug}`);
      ok++;
    }
  }

  console.log(`\n─────────────────────────────────`);
  console.log(`  Imported : ${ok}`);
  console.log(`  Failed   : ${failed}`);
  console.log(`─────────────────────────────────`);

  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
