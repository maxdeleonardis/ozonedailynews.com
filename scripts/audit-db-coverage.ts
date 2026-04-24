#!/usr/bin/env tsx
// =============================================================================
// scripts/audit-db-coverage.ts
// Finds articles in the 5 Supabase article tables that have no entry in
// content_registry — meaning they are invisible to the sitemap + Google.
//
// Usage:
//   npx tsx --env-file=.env.local scripts/audit-db-coverage.ts
// =============================================================================

import path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(url, key);

const TABLES = [
  // urlField: the column holding the canonical URL path (e.g. /amazon/news/xyz)
  // titleField: the column holding the display title (varies per table)
  // All compared directly against content_registry.slug
  { table: 'articles',         urlField: 'url',                titleField: 'title' },
  { table: 'jack_articles',    urlField: 'article_url',        titleField: 'title' },
  { table: 'article_pages',    urlField: 'url',                titleField: 'title' },
  { table: 'creator_articles', urlField: 'schema_article_url', titleField: 'hero_name' },
  { table: 'alysa_articles',   urlField: 'schema_article_url', titleField: 'hero_name' },
] as const;

async function run() {
  console.log('\n🔍  Fetching content_registry slugs…');
  const { data: regRows, error: regErr } = await supabase
    .from('content_registry')
    .select('slug');

  if (regErr) {
    console.error(`❌  content_registry query failed: ${regErr.message}`);
    process.exit(1);
  }

  const registered = new Set((regRows || []).map(r => r.slug as string));
  console.log(`    Registry has ${registered.size} entries\n`);

  let totalMissing = 0;

  for (const { table, urlField, titleField } of TABLES) {
    const fields = `slug,${titleField},${urlField}`;

    const { data, error } = await supabase
      .from(table)
      .select(fields)
      .order('slug', { ascending: true });

    if (error) {
      console.warn(`⚠️   Could not query ${table}: ${error.message}`);
      continue;
    }

    const rows = data || [];

    // Rows with no URL field set — they literally have no canonical path
    const nullUrl = rows.filter(row => !row[urlField]);

    // Rows with a URL but not in content_registry
    const missing = rows.filter(row => {
      const rawUrl = row[urlField] as string | null;
      if (!rawUrl) return false;
      // Normalize: strip full origin (https://www.objectwire.org) if present
      const urlPath = rawUrl.replace(/^https?:\/\/[^/]+/, '');
      const registrySlug = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
      return !registered.has(registrySlug);
    });

    const issues = [...nullUrl, ...missing];

    if (issues.length === 0) {
      console.log(`  ✅  ${table}: all ${rows.length} articles are in registry`);
    } else {
      if (nullUrl.length > 0) {
        console.log(`\n  🔴  ${table}: ${nullUrl.length} of ${rows.length} articles have NO url/article_url set (invisible to sitemap):`);
        for (const row of nullUrl) {
          console.log(`       - slug: ${row.slug}  "${(row as Record<string,unknown>)[titleField] ?? ''}"`);
        }
      }
      if (missing.length > 0) {
        console.log(`\n  🟡  ${table}: ${missing.length} of ${rows.length} articles have a url but NO content_registry entry:`);
        for (const row of missing) {
          console.log(`       - ${row[urlField]}  "${(row as Record<string,unknown>)[titleField] ?? ''}"`);
        }
      }
      totalMissing += issues.length;
    }
  }

  console.log('\n' + '─'.repeat(60));
  if (totalMissing === 0) {
    console.log('✅  All DB articles are covered in content_registry.');
  } else {
    console.log(`⚠️   ${totalMissing} article(s) missing from content_registry.`);
    console.log('    These articles have no sitemap entry — Google cannot discover them.');
    console.log('\n    Options:');
    console.log('    1. Create the corresponding page.tsx file and run wiki:publish');
    console.log('    2. Manually insert into content_registry with correct slug/url');
  }
  console.log('');
}

run().catch(err => { console.error(err); process.exit(1); });
