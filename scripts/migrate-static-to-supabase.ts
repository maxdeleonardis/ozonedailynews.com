#!/usr/bin/env tsx
// =============================================================================
// scripts/migrate-static-to-supabase.ts
// =============================================================================
// Reads every entry in lib/content-registry.ts that has a corresponding
// static page.tsx using NewsArticleSchema, then generates SQL INSERT statements
// ready to paste into the Supabase SQL Editor.
//
// IMPORTANT: Existing static pages are NOT deleted or modified.
// All inserts use status = 'draft' so nothing goes live at /blog/* until
// you review and publish each article in /admin/dashboard.
//
// Usage:
//   npx tsx scripts/migrate-static-to-supabase.ts > supabase/static-migration.sql
//   npx tsx scripts/migrate-static-to-supabase.ts --dry-run    (print count only)
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';
import { contentRegistry } from '../lib/content-registry';

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.resolve(__dirname, '../app');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Check if the page.tsx for this registry slug uses NewsArticleSchema */
function hasNewsArticleSchema(registrySlug: string): boolean {
  // registry slugs start with '/', e.g. /trump/kristi-noem
  const relativePath = registrySlug.replace(/^\//, ''); // trump/kristi-noem
  const pagePath = path.join(APP_DIR, relativePath, 'page.tsx');
  if (!fs.existsSync(pagePath)) return false;
  const content = fs.readFileSync(pagePath, 'utf-8');
  return content.includes('NewsArticleSchema');
}

/**
 * Convert registry slug to a flat Supabase slug.
 * /trump/kristi-noem → trump-kristi-noem
 * This becomes the article URL at /blog/trump-kristi-noem
 */
function toSupabaseSlug(registrySlug: string): string {
  return registrySlug
    .replace(/^\//, '')   // strip leading /
    .replace(/\//g, '-'); // replace remaining / with -
}

/** Safely escape a value for a SQL string literal */
function sq(value: string | null | undefined): string {
  if (value == null || value === '') return 'NULL';
  return `'${value.replace(/'/g, "''")}'`;
}

/** Map category label to a badge color for the articles table */
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
    General: 'blue',
  };
  return map[category] ?? 'blue';
}

// ---------------------------------------------------------------------------
// Filter registry to only NewsArticleSchema pages
// ---------------------------------------------------------------------------

const toMigrate = contentRegistry.filter(entry => hasNewsArticleSchema(entry.slug));

if (DRY_RUN) {
  console.log(`\nFound ${toMigrate.length} static pages with NewsArticleSchema to migrate.\n`);
  toMigrate.forEach(e => console.log(`  ${e.slug}`));
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Generate SQL
// ---------------------------------------------------------------------------

const lines: string[] = [];

lines.push(`-- =============================================================================`);
lines.push(`-- ObjectWire — Static Article Migration to Supabase`);
lines.push(`-- Generated: ${new Date().toISOString()}`);
lines.push(`-- Total articles: ${toMigrate.length}`);
lines.push(`-- =============================================================================`);
lines.push(`-- All articles are inserted with status = 'draft'.`);
lines.push(`-- NO existing static pages are modified by this script.`);
lines.push(`-- /blog/[new-slug] URLs only go live once you flip status to 'published'`);
lines.push(`-- in /admin/dashboard.`);
lines.push(`--`);
lines.push(`-- After migration, the full migration flow for each article is:`);
lines.push(`--   1. Open /admin/dashboard → find the draft`);
lines.push(`--   2. Edit → add/verify content blocks`);
lines.push(`--   3. Publish → live at /blog/[slug]`);
lines.push(`--   4. (Optional) Add 301 redirect in middleware.ts`);
lines.push(`-- =============================================================================`);
lines.push(``);

for (const entry of toMigrate) {
  const supabaseSlug = toSupabaseSlug(entry.slug);
  const originalPath = entry.slug; // e.g. /trump/kristi-noem

  // Placeholder content: one summary block + a link block back to the original URL
  const placeholderContent = JSON.stringify([
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
  ]);

  const tagsArray = `ARRAY[${entry.tags.map(t => `'${t.replace(/'/g, "''")}'`).join(', ')}]`;
  const publishedAt = new Date(`${entry.publishDate}T12:00:00Z`).toISOString();

  lines.push(`-- ${originalPath}`);
  lines.push(`INSERT INTO articles (`);
  lines.push(`  slug, title, excerpt, content, category, category_color,`);
  lines.push(`  author_name, image_url, image_alt, tags, featured, status, published_at`);
  lines.push(`) VALUES (`);
  lines.push(`  ${sq(supabaseSlug)},`);
  lines.push(`  ${sq(entry.title)},`);
  lines.push(`  ${sq(entry.description)},`);
  lines.push(`  ${sq(placeholderContent)}::jsonb,`);
  lines.push(`  ${sq(entry.category)},`);
  lines.push(`  ${sq(categoryColor(entry.category))},`);
  lines.push(`  ${sq(entry.author)},`);
  lines.push(`  ${sq(entry.imageUrl ?? null)},`);
  lines.push(`  ${sq(entry.imageAlt ?? null)},`);
  lines.push(`  ${tagsArray},`);
  lines.push(`  ${entry.featured ? 'true' : 'false'},`);
  lines.push(`  'draft',`);
  lines.push(`  '${publishedAt}'`);
  lines.push(`) ON CONFLICT (slug) DO NOTHING;`);
  lines.push(``);
}

lines.push(`-- Verify`);
lines.push(`SELECT COUNT(*) as total_drafts_created FROM articles WHERE status = 'draft';`);

console.log(lines.join('\n'));
