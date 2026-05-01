/**
 * migrate-to-static.mjs
 *
 * Fetches all article content from Supabase (articles, jack_articles, wiki_articles)
 * and writes each row as a JSON file under content/static/[table]/[slug].json.
 *
 * After running this script, the DB components (NewsArticleDB, JackArticleDB,
 * WikiArticle) will prefer the local JSON files and skip Supabase fetches entirely,
 * making the site fully static and independent of Supabase for page rendering.
 *
 * Usage:
 *   node scripts/migrate-to-static.mjs             # migrate all tables
 *   node scripts/migrate-to-static.mjs --dry-run   # print counts, no writes
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load env vars from .env.local
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
dotenv.config({ path: path.join(root, '.env.local') });

const DRY_RUN = process.argv.includes('--dry-run');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const TABLES = [
  { table: 'articles',        slugCol: 'slug' },
  { table: 'jack_articles',   slugCol: 'slug' },
  { table: 'wiki_articles',   slugCol: 'slug' },
  { table: 'article_pages',   slugCol: 'slug' },
  { table: 'creator_articles',slugCol: 'slug' },
];

async function fetchAll(table, slugCol) {
  let all = [];
  let from = 0;
  const batch = 500;
  while (true) {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .range(from, from + batch - 1);
    if (error) {
      console.error(`  ⚠️  Error fetching ${table} at offset ${from}:`, error.message);
      break;
    }
    if (!data || data.length === 0) break;
    all = all.concat(data);
    if (data.length < batch) break;
    from += batch;
  }
  return all;
}

async function main() {
  console.log(`\n🚀  Supabase → Static migration  ${DRY_RUN ? '(DRY RUN)' : ''}\n`);

  let totalWritten = 0;
  let totalSkipped = 0;

  for (const { table, slugCol } of TABLES) {
    console.log(`📦  Fetching ${table}…`);
    const rows = await fetchAll(table, slugCol);
    console.log(`    Found ${rows.length} rows`);

    const outDir = path.join(root, 'content', 'static', table);
    if (!DRY_RUN) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    for (const row of rows) {
      const slug = row[slugCol];
      if (!slug) {
        console.warn(`    ⚠️  Row without slug in ${table}, skipping`);
        totalSkipped++;
        continue;
      }

      // Slugs may contain '/' (full path slugs). Replace with '__' for filename safety.
      const safeFilename = slug.replace(/\//g, '__');
      const outFile = path.join(outDir, `${safeFilename}.json`);
      if (!DRY_RUN) {
        fs.writeFileSync(outFile, JSON.stringify(row, null, 2), 'utf8');
      }
      totalWritten++;
    }

    console.log(`    ✅  ${DRY_RUN ? 'Would write' : 'Wrote'} ${rows.length} files to content/static/${table}/\n`);

    // Write a lightweight index for related-article queries (no content_html)
    const indexData = rows.map((r) => ({
      slug: r[slugCol],
      title: r.title,
      url: r.url ?? null,
      category: r.category ?? null,
      publish_date: r.publish_date ?? null,
      published_at: r.published_at ?? null,
      thumbnail_src: r.thumbnail_src ?? null,
      status: r.status ?? null,
    }));
    const indexFile = path.join(outDir, '_index.json');
    if (!DRY_RUN) {
      fs.writeFileSync(indexFile, JSON.stringify(indexData, null, 2), 'utf8');
      console.log(`    📋  Wrote _index.json (${indexData.length} entries)\n`);
    } else {
      console.log(`    📋  Would write _index.json (${indexData.length} entries)\n`);
    }
  }

  console.log(`\n✅  Done. ${totalWritten} files ${DRY_RUN ? 'would be' : ''} written, ${totalSkipped} rows skipped.\n`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
