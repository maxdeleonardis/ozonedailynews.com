#!/usr/bin/env tsx
// =============================================================================
// scripts/fix-jack-article-urls.ts
//
// Scans all app/**/page.tsx files that use JackArticleDB, extracts the slug,
// derives the canonical URL from the file path, and updates jack_articles
// where article_url is null.
//
// Usage:
//   npx tsx --env-file=.env.local scripts/fix-jack-article-urls.ts [--dry-run]
// =============================================================================

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

// Recursively find all page.tsx files
function findPageFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPageFiles(full));
    } else if (entry.name === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

// Extract slug from JackArticleDB slug="..." prop
function extractJackSlug(content: string): string | null {
  const match = content.match(/JackArticleDB[^>]*slug=["']([^"']+)["']/);
  return match ? match[1] : null;
}

// Derive canonical URL path from file path
// e.g. app/amazon/news/andy-jassy-.../page.tsx → /amazon/news/andy-jassy-...
function filePathToUrl(filePath: string): string {
  const rel = path.relative(APP_DIR, filePath);           // amazon/news/andy.../page.tsx
  const dir = path.dirname(rel);                           // amazon/news/andy...
  return '/' + dir.replace(/\\/g, '/');                    // /amazon/news/andy...
}

async function run() {
  console.log('\n🔍  Scanning page.tsx files for JackArticleDB stubs…\n');

  const pages = findPageFiles(APP_DIR);
  const slugToUrl: Record<string, string> = {};

  for (const filePath of pages) {
    const content = fs.readFileSync(filePath, 'utf8');
    const slug = extractJackSlug(content);
    if (slug) {
      const url = filePathToUrl(filePath);
      slugToUrl[slug] = url;
    }
  }

  console.log(`    Found ${Object.keys(slugToUrl).length} JackArticleDB stubs\n`);

  // Fetch all jack_articles with null article_url
  const { data, error } = await supabase
    .from('jack_articles')
    .select('slug,article_url,title')
    .is('article_url', null);

  if (error) {
    console.error(`❌  DB query failed: ${error.message}`);
    process.exit(1);
  }

  const rows = data || [];
  console.log(`    ${rows.length} jack_articles have null article_url\n`);

  let updated = 0;
  let missing = 0;

  for (const row of rows) {
    const url = slugToUrl[row.slug];
    if (!url) {
      console.log(`  ⚪  No page.tsx found for: ${row.slug}`);
      missing++;
      continue;
    }

    if (DRY_RUN) {
      console.log(`  🔵  [dry-run] would set ${row.slug} → ${url}`);
    } else {
      const { error: updateErr } = await supabase
        .from('jack_articles')
        .update({ article_url: url })
        .eq('slug', row.slug);

      if (updateErr) {
        console.error(`  ❌  ${row.slug}: ${updateErr.message}`);
      } else {
        console.log(`  ✅  ${row.slug} → ${url}`);
        updated++;
      }
    }
  }

  console.log(`\n────────────────────────────────────────────────────────────`);
  if (DRY_RUN) {
    console.log(`    Dry run complete. Would update ${rows.length - missing} rows.`);
  } else {
    console.log(`    Updated: ${updated}  |  No page.tsx found: ${missing}`);
  }
  if (missing > 0) {
    console.log(`\n    ⚠️  ${missing} jack_articles have no page.tsx — they need routes created before they can be in the sitemap.`);
  }
}

run().catch(e => { console.error(e); process.exit(1); });
