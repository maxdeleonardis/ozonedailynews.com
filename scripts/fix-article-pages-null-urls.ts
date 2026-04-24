#!/usr/bin/env tsx
// Scans all app/**/page.tsx files that use ArticlePageDB, extracts the slug,
// derives the canonical URL from the file path, and updates article_pages
// where url is null.

import path from 'path';
import fs from 'fs';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.resolve(__dirname, '../app');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

function findPageFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findPageFiles(full));
    else if (entry.name === 'page.tsx') results.push(full);
  }
  return results;
}

function extractArticlePageSlug(content: string): string | null {
  const match = content.match(/ArticlePageDB[^>]*slug=["']([^"']+)["']/);
  return match ? match[1] : null;
}

function filePathToUrl(filePath: string): string {
  const rel = path.relative(APP_DIR, filePath);
  const dir = path.dirname(rel);
  return '/' + dir.replace(/\\/g, '/');
}

async function run() {
  console.log('\n🔍  Scanning page.tsx files for ArticlePageDB stubs…\n');

  const slugToUrl: Record<string, string> = {};
  for (const filePath of findPageFiles(APP_DIR)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const slug = extractArticlePageSlug(content);
    if (slug) slugToUrl[slug] = filePathToUrl(filePath);
  }

  console.log(`    Found ${Object.keys(slugToUrl).length} ArticlePageDB stubs\n`);

  const { data, error } = await supabase
    .from('article_pages')
    .select('slug,url,title')
    .is('url', null);

  if (error) { console.error(`❌  ${error.message}`); process.exit(1); }

  const rows = data || [];
  console.log(`    ${rows.length} article_pages have null url\n`);

  let updated = 0, missing = 0;
  for (const row of rows) {
    const url = slugToUrl[row.slug];
    if (!url) { console.log(`  ⚪  No page.tsx for: ${row.slug}`); missing++; continue; }

    if (DRY_RUN) {
      console.log(`  🔵  [dry-run] ${row.slug} → ${url}`);
    } else {
      const { error: e } = await supabase.from('article_pages').update({ url }).eq('slug', row.slug);
      if (e) console.error(`  ❌  ${row.slug}: ${e.message}`);
      else { console.log(`  ✅  ${row.slug} → ${url}`); updated++; }
    }
  }

  console.log(`\n────────────────────────────────────────────────────────────`);
  DRY_RUN
    ? console.log(`    Dry run. Would update ${rows.length - missing}.`)
    : console.log(`    Updated: ${updated}  |  No page.tsx: ${missing}`);
}

run().catch(e => { console.error(e); process.exit(1); });
