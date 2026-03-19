#!/usr/bin/env tsx
// =============================================================================
// scripts/push-articles-to-supabase.ts
// =============================================================================
// Reads all static pages in the content registry that use NewsArticleSchema
// and upserts them into the Supabase `articles` table as drafts.
//
// Existing static pages are NOT modified. Articles land in Supabase as drafts
// so nothing goes live at /blog/* until you publish in /admin/dashboard.
//
// Usage:
//   npx tsx scripts/push-articles-to-supabase.ts              -- push all
//   npx tsx scripts/push-articles-to-supabase.ts --dry-run    -- preview only
//   npx tsx scripts/push-articles-to-supabase.ts --slug /crypto/xrp  -- one article
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { contentRegistry } from '../lib/content-registry';

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const DRY_RUN = process.argv.includes('--dry-run');
const SINGLE_SLUG = (() => {
  const idx = process.argv.indexOf('--slug');
  return idx !== -1 ? process.argv[idx + 1] : null;
})();
const APP_DIR = path.resolve(__dirname, '../app');

// ---------------------------------------------------------------------------
// Supabase client
// ---------------------------------------------------------------------------
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('\n❌  Missing env vars. Ensure .env.local has:');
  console.error('    NEXT_PUBLIC_SUPABASE_URL');
  console.error('    NEXT_PUBLIC_SUPABASE_ANON_KEY\n');
  process.exit(1);
}

const supabase = createClient(url, key);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function hasNewsArticleSchema(registrySlug: string): boolean {
  const relativePath = registrySlug.replace(/^\//, '');
  const pagePath = path.join(APP_DIR, relativePath, 'page.tsx');
  if (!fs.existsSync(pagePath)) return false;
  const content = fs.readFileSync(pagePath, 'utf-8');
  return content.includes('NewsArticleSchema');
}

function toSupabaseSlug(registrySlug: string): string {
  return registrySlug
    .replace(/^\//, '')
    .replace(/\//g, '-');
}

function categoryColor(category: string): string {
  const map: Record<string, string> = {
    Sports: 'green',
    Technology: 'blue',
    Science: 'purple',
    Finance: 'yellow',
    Politics: 'red',
    Gaming: 'orange',
    YouTube: 'red',
    Entertainment: 'purple',
    Business: 'blue',
    News: 'blue',
    Investigations: 'orange',
    Research: 'purple',
    'Social Media': 'blue',
    'World Affairs': 'blue',
    Automotive: 'orange',
    Lifestyle: 'purple',
    Legal: 'blue',
    Reference: 'blue',
    Media: 'blue',
    Events: 'green',
    Education: 'green',
    Meta: 'blue',
  };
  return map[category] ?? 'blue';
}

function buildRow(entry: (typeof contentRegistry)[0]) {
  const supabaseSlug = toSupabaseSlug(entry.slug);
  const originalPath = entry.slug;

  const placeholderContent = [
    {
      id: '1',
      type: 'summary',
      content: entry.description,
    },
    {
      id: '2',
      type: 'paragraph',
      content: `[MIGRATION NOTE] This article was imported from the static page at ${originalPath}. Open the admin editor to add full content blocks before publishing.`,
    },
  ];

  return {
    slug: supabaseSlug,
    title: entry.title,
    excerpt: entry.description,
    content: placeholderContent,
    category: entry.category,
    category_color: categoryColor(entry.category),
    author_name: entry.author,
    author_slug: entry.authorSlug ?? null,
    image_url: entry.imageUrl ?? null,
    image_alt: entry.imageAlt ?? null,
    image_credit: entry.imageCredit ?? null,
    tags: entry.tags,
    featured: entry.featured ?? false,
    status: 'draft' as const,
    published_at: new Date(`${entry.publishDate}T12:00:00Z`).toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  let toMigrate = contentRegistry.filter(entry => hasNewsArticleSchema(entry.slug));

  if (SINGLE_SLUG) {
    toMigrate = toMigrate.filter(e => e.slug === SINGLE_SLUG);
    if (toMigrate.length === 0) {
      console.error(`\n❌  No registry entry found for slug: ${SINGLE_SLUG}`);
      process.exit(1);
    }
  }

  console.log(`\n📋  Found ${toMigrate.length} articles to push to Supabase`);
  if (DRY_RUN) {
    console.log('\n🔍  Dry run — no changes will be made:\n');
    toMigrate.forEach(e => console.log(`  ${e.slug}  →  /blog/${toSupabaseSlug(e.slug)}`));
    console.log('\nRun without --dry-run to push.\n');
    return;
  }

  console.log('\n🚀  Pushing articles...\n');

  let inserted = 0;
  let skipped = 0;
  let failed = 0;

  // Push in batches of 20 to avoid rate limits
  const BATCH_SIZE = 20;
  for (let i = 0; i < toMigrate.length; i += BATCH_SIZE) {
    const batch = toMigrate.slice(i, i + BATCH_SIZE);
    const rows = batch.map(buildRow);

    const { data, error } = await supabase
      .from('articles')
      .upsert(rows, {
        onConflict: 'slug',        // skip if slug already exists
        ignoreDuplicates: true,    // don't overwrite articles you've already edited
      })
      .select('slug');

    if (error) {
      console.error(`  ❌  Batch ${i / BATCH_SIZE + 1} error: ${error.message}`);
      failed += batch.length;
    } else {
      const insertedCount = data?.length ?? 0;
      const skippedCount = batch.length - insertedCount;
      inserted += insertedCount;
      skipped += skippedCount;

      batch.forEach(entry => {
        const slug = toSupabaseSlug(entry.slug);
        const wasInserted = data?.some(d => d.slug === slug);
        const icon = wasInserted ? '✅' : '⏭️ ';
        const note = wasInserted ? '' : ' (already exists — skipped)';
        console.log(`  ${icon}  ${entry.slug}${note}`);
      });
    }
  }

  console.log('\n─────────────────────────────────────────');
  console.log(`✅  Inserted: ${inserted}`);
  console.log(`⏭️   Skipped (already exist): ${skipped}`);
  if (failed > 0) console.log(`❌  Failed:   ${failed}`);
  console.log('\nAll drafts are now visible in /admin/dashboard.');
  console.log('Status is "draft" — nothing is live at /blog/* until you publish.\n');
}

main().catch(err => {
  console.error('\n❌  Unexpected error:', err);
  process.exit(1);
});
