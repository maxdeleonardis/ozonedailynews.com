#!/usr/bin/env tsx
// =============================================================================
// scripts/audit-registry.ts
// Audits every contentRegistry entry and flags problems before they reach prod.
//
// Usage:
//   npx tsx scripts/audit-registry.ts              — full audit report
//   npx tsx scripts/audit-registry.ts --fix        — auto-fix safe issues (category renames)
//   npx tsx scripts/audit-registry.ts --backfill   — pull imageUrl from Supabase articles table
//                                                     and write it into content-registry.ts
//   npx tsx scripts/audit-registry.ts --all        — show all issues (not just top 60)
// =============================================================================

import * as fs   from 'fs';
import * as path from 'path';
import { contentRegistry } from '../lib/content-registry';

const FIX_MODE      = process.argv.includes('--fix');
const BACKFILL_MODE = process.argv.includes('--backfill');
const SHOW_ALL      = process.argv.includes('--all');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const CANONICAL_CATEGORIES = new Set([
  'Technology', 'Gaming', 'Sports', 'Entertainment', 'Finance',
  'Science', 'News', 'YouTube', 'Reference', 'Meta', 'Politics',
  'Investigations', 'Culture', 'Automotive', 'Crypto', 'AI',
]);

const CATEGORY_MAP: Record<string, string> = {
  'Tech':         'Technology',
  'SaaS':         'Technology',
  'General':      'News',
  'Blog':         'News',
  'Video Games':  'Gaming',
  'Social Media': 'Technology',
};

const MIN_DESC = 130;
const MAX_DESC = 155;
const MIN_TAGS = 5;
const REGISTRY_PATH = path.resolve(process.cwd(), 'lib/content-registry.ts');

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Issue {
  slug:    string;
  field:   string;
  message: string;
  fixable: boolean;
}

// ---------------------------------------------------------------------------
// ── BACKFILL MODE ────────────────────────────────────────────────────────────
// Queries Supabase for hero_image_src on every articles / jack_articles /
// article_pages / creator_articles row and patches content-registry.ts
// ---------------------------------------------------------------------------
async function runBackfill(): Promise<void> {
  const { createClient } = await import('@supabase/supabase-js');
  const dotenv = await import('dotenv');
  dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error('❌  Missing Supabase env vars in .env.local');
    process.exit(1);
  }
  const supabase = createClient(url, key);

  // Pull image data from all four article tables
  const queries = await Promise.all([
    supabase.from('articles')
      .select('slug, hero_image_src, hero_image_alt'),
    supabase.from('jack_articles')
      .select('slug, hero_image'),
    supabase.from('article_pages')
      .select('slug'),
    supabase.from('creator_articles')
      .select('slug, hero_image_src, hero_image_alt'),
  ]);

  // Build slug → imageUrl map
  const imageMap = new Map<string, string>();

  for (const row of (queries[0].data ?? [])) {
    if (row.hero_image_src) imageMap.set(row.slug, row.hero_image_src as string);
  }
  for (const row of (queries[1].data ?? [])) {
    const img = (row.hero_image as { src?: string } | null)?.src;
    if (img) imageMap.set(row.slug, img);
  }
  for (const row of (queries[3].data ?? [])) {
    if (row.hero_image_src) imageMap.set(row.slug, row.hero_image_src as string);
  }

  console.log(`\n🔍  Supabase image map built: ${imageMap.size} rows with images`);

  // Find registry entries that are missing imageUrl but have a Supabase match
  // Registry slugs start with '/', Supabase slugs don't — normalise
  let patchCount = 0;
  let registrySource = fs.readFileSync(REGISTRY_PATH, 'utf-8');

  for (const entry of contentRegistry) {
    if (entry.imageUrl) continue; // already has one

    // Normalise: strip leading slash for Supabase lookup
    const dbSlugDirect = entry.slug.replace(/^\//, '');
    // Also try the dash-joined version (e.g. /google/news/foo → google-news-foo)
    const dbSlugDashed = dbSlugDirect.replace(/\//g, '-');

    const imageUrl = imageMap.get(dbSlugDirect) ?? imageMap.get(dbSlugDashed);
    if (!imageUrl) continue;

    // Patch the registry source: find the entry block by slug and inject imageUrl
    // Registry file stores slug WITH leading slash: slug: "/foo/bar"
    const escapedSlug = entry.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const slugPattern = new RegExp(
      `(slug:\\s*["']${escapedSlug}["'][,\\s]*\\n)`,
      'g'
    );

    const newSource = registrySource.replace(slugPattern, (match) => {
      return `${match}    imageUrl: "${imageUrl}",\n    imageWidth: 1200,\n    imageHeight: 675,\n`;
    });

    if (newSource !== registrySource) {
      registrySource = newSource;
      patchCount++;
      console.log(`  ✅  ${entry.slug} → ${imageUrl}`);
    }
  }

  if (patchCount > 0) {
    fs.writeFileSync(REGISTRY_PATH, registrySource, 'utf-8');
    console.log(`\n✅  Patched ${patchCount} registry entries with imageUrl from Supabase.`);
    console.log(`   Run \`npm run audit\` again to see the updated issue count.\n`);
  } else {
    console.log('\n⚠️  No new images found to backfill. Check that your Supabase tables have hero_image_src populated.\n');
  }
}

// ---------------------------------------------------------------------------
// ── AUDIT RUN ────────────────────────────────────────────────────────────────
// ---------------------------------------------------------------------------
function runAudit(): void {
const issues: Issue[] = [];
const slugsSeen = new Set<string>();

for (const entry of contentRegistry) {

  // Duplicate slugs
  if (slugsSeen.has(entry.slug)) {
    issues.push({ slug: entry.slug, field: 'slug', message: 'DUPLICATE slug', fixable: false });
  }
  slugsSeen.add(entry.slug);

  // Slug format
  if (!entry.slug.startsWith('/')) {
    issues.push({ slug: entry.slug, field: 'slug', message: 'slug must start with /', fixable: false });
  }

  // Title
  if (!entry.title || entry.title.trim() === '') {
    issues.push({ slug: entry.slug, field: 'title', message: 'Empty title', fixable: false });
  }

  // Description length
  const descLen = (entry.description || '').length;
  if (descLen < MIN_DESC) {
    issues.push({ slug: entry.slug, field: 'description', message: `Too short (${descLen} chars, min ${MIN_DESC})`, fixable: false });
  } else if (descLen > MAX_DESC) {
    issues.push({ slug: entry.slug, field: 'description', message: `Too long (${descLen} chars, max ${MAX_DESC})`, fixable: false });
  }

  // Generic description
  if (entry.description?.includes('ObjectWire coverage of') || entry.description?.startsWith('ObjectWire ')) {
    issues.push({ slug: entry.slug, field: 'description', message: 'Generic stub description — needs rewrite', fixable: false });
  }

  // Category
  if (!CANONICAL_CATEGORIES.has(entry.category)) {
    const mapped = CATEGORY_MAP[entry.category];
    issues.push({
      slug: entry.slug,
      field: 'category',
      message: `Non-canonical category "${entry.category}"${mapped ? ` → should be "${mapped}"` : ''}`,
      fixable: !!mapped,
    });
  }

  // Tags
  const tagCount = (entry.tags || []).length;
  if (tagCount < MIN_TAGS) {
    issues.push({ slug: entry.slug, field: 'tags', message: `Only ${tagCount} tags (min ${MIN_TAGS})`, fixable: false });
  }

  // Images — only flag real articles (not hub/index pages)
  const parts = entry.slug.split('/').filter(Boolean);
  const isArticle = parts.length >= 2;
  if (isArticle) {
    if (!entry.imageUrl) {
      issues.push({ slug: entry.slug, field: 'imageUrl', message: 'Missing imageUrl', fixable: false });
    }
    if (!entry.imageWidth || entry.imageWidth < 1200) {
      issues.push({ slug: entry.slug, field: 'imageWidth', message: `imageWidth ${entry.imageWidth ?? 'missing'} — min 1200`, fixable: false });
    }
    if (!entry.imageHeight || entry.imageHeight < 675) {
      issues.push({ slug: entry.slug, field: 'imageHeight', message: `imageHeight ${entry.imageHeight ?? 'missing'} — min 675`, fixable: false });
    }
  }

  // Author — flag generic on News/Tech articles
  if (entry.author === 'ObjectWire Editorial' && isArticle &&
      ['News', 'Technology', 'Finance', 'Investigations'].includes(entry.category)) {
    issues.push({ slug: entry.slug, field: 'author', message: 'Generic author on news article — weakens E-E-A-T', fixable: false });
  }

  // Dates
  if (!entry.publishDate) {
    issues.push({ slug: entry.slug, field: 'publishDate', message: 'Missing publishDate', fixable: false });
  }
}

// ---------------------------------------------------------------------------
// ── FIX MODE — apply category renames directly to content-registry.ts ────────
// ---------------------------------------------------------------------------
if (FIX_MODE) {
  const fixableIssues = issues.filter(i => i.fixable && i.field === 'category');
  if (fixableIssues.length === 0) {
    console.log('\n✅  No auto-fixable category issues found.\n');
    process.exit(0);
  }

  let source = fs.readFileSync(REGISTRY_PATH, 'utf-8');
  let fixCount = 0;

  // Build a deduplicated map of from → to replacements
  const renames = new Map<string, string>();
  for (const issue of fixableIssues) {
    const m = issue.message.match(/Non-canonical category "([^"]+)".*should be "([^"]+)"/);
    if (!m) continue;
    renames.set(m[1], m[2]);
  }

  for (const [from, to] of renames) {
    // Match both single-quoted and double-quoted category values
    const pattern = new RegExp(`(category:\\s*['"])${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(['"])`, 'g');
    const before = source;
    source = source.replace(pattern, `$1${to}$2`);
    // Count how many were replaced
    const changed = (before.match(pattern) || []).length;
    if (changed > 0) {
      fixCount += changed;
      console.log(`  ✅  "${from}" → "${to}"  (${changed} entries)`);
    }
  }

  if (fixCount > 0) {
    fs.writeFileSync(REGISTRY_PATH, source, 'utf-8');
    console.log(`\n✅  Applied ${fixCount} category fixes to lib/content-registry.ts`);
    console.log('   Run `npm run audit` again to verify.\n');
  } else {
    console.log('\n⚠️  FIX_MODE: patterns matched 0 entries. Check registry format.\n');
  }
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------
const fixable   = issues.filter(i => i.fixable);
const manual    = issues.filter(i => !i.fixable);

const byField: Record<string, number> = {};
for (const issue of issues) {
  byField[issue.field] = (byField[issue.field] || 0) + 1;
}

console.log('\n══════════════════════════════════════════════════════');
console.log('  ObjectWire Registry Audit');
console.log('══════════════════════════════════════════════════════');
console.log(`  Entries scanned   : ${contentRegistry.length}`);
console.log(`  Total issues      : ${issues.length} (${fixable.length} auto-fixable, ${manual.length} manual)`);
console.log('\n  Issues by field:');
for (const [field, count] of Object.entries(byField).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${field.padEnd(20)} ${count}`);
}
console.log('══════════════════════════════════════════════════════\n');

const SHOW_MAX = SHOW_ALL ? issues.length : 60;
const shown = issues.slice(0, SHOW_MAX);

if (shown.length > 0) {
  console.log(`Top ${Math.min(SHOW_MAX, issues.length)} issues:\n`);
  let lastSlug = '';
  for (const { slug, field, message, fixable: f } of shown) {
    if (slug !== lastSlug) { console.log(`  ${slug}`); lastSlug = slug; }
    const tag = f ? '\x1b[32m[AUTO]\x1b[0m' : '\x1b[33m[MANUAL]\x1b[0m';
    console.log(`    ${tag} ${field}: ${message}`);
  }
  if (issues.length > SHOW_MAX) {
    console.log(`\n  ... and ${issues.length - SHOW_MAX} more (run with --all to see all)`);
  }
}

if (issues.length === 0) {
  console.log('\x1b[32m✅  Registry is clean — zero issues.\x1b[0m\n');
  process.exit(0);
} else {
  console.log(`\n\x1b[33m⚠️   ${issues.length} issues found.\x1b[0m`);
  console.log(`  Run \`npx tsx scripts/audit-registry.ts --fix\`      to auto-fix ${fixable.length} category renames`);
  console.log(`  Run \`npx tsx scripts/audit-registry.ts --backfill\` to pull imageUrl from Supabase\n`);
  process.exit(1);
}
} // end runAudit()

// ---------------------------------------------------------------------------
// ── Entry Point
// ---------------------------------------------------------------------------
async function main(): Promise<void> {
  if (BACKFILL_MODE) {
    await runBackfill();
  } else {
    runAudit();
  }
}

main().catch((err) => {
  console.error('❌  Unhandled error:', err);
  process.exit(1);
});
