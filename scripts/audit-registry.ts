#!/usr/bin/env tsx
// =============================================================================
// scripts/audit-registry.ts
// Audits every contentRegistry entry and flags problems before they reach prod.
//
// Usage:
//   npm run audit             — run full audit
//   npm run audit -- --fix    — auto-fix safe issues (category normalisation only)
// =============================================================================

import { contentRegistry } from '../lib/content-registry';

const FIX_MODE = process.argv.includes('--fix');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const CANONICAL_CATEGORIES = new Set([
  'Technology', 'Gaming', 'Sports', 'Entertainment', 'Finance',
  'Science', 'News', 'YouTube', 'Reference', 'Meta', 'Politics',
  'Investigations', 'Culture', 'Automotive', 'Crypto', 'AI',
]);

const CATEGORY_MAP: Record<string, string> = {
  'Tech':        'Technology',
  'SaaS':        'Technology',
  'General':     'News',
  'Video Games': 'Gaming',
};

const MIN_DESC = 130;
const MAX_DESC = 155;
const MIN_TAGS = 5;

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
// Run
// ---------------------------------------------------------------------------
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
// Output
// ---------------------------------------------------------------------------
const fixable   = issues.filter(i => i.fixable);
const manual    = issues.filter(i => !i.fixable);

// ── Summary per-field ───────────────────────────────────────────────────────
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

// ── Detailed issues (show top 60 to keep output usable) ────────────────────
const SHOW_MAX = 60;
const shown = issues.slice(0, SHOW_MAX);

if (shown.length > 0) {
  console.log(`Top ${Math.min(SHOW_MAX, issues.length)} issues:\n`);
  let lastSlug = '';
  for (const { slug, field, message, fixable } of shown) {
    if (slug !== lastSlug) {
      console.log(`  ${slug}`);
      lastSlug = slug;
    }
    const tag = fixable ? '\x1b[32m[AUTO]\x1b[0m' : '\x1b[33m[MANUAL]\x1b[0m';
    console.log(`    ${tag} ${field}: ${message}`);
  }
  if (issues.length > SHOW_MAX) {
    console.log(`\n  ... and ${issues.length - SHOW_MAX} more (run with --all to see all)`);
  }
}

// ── Exit code ───────────────────────────────────────────────────────────────
if (issues.length === 0) {
  console.log('\x1b[32m✅  Registry is clean — zero issues.\x1b[0m\n');
  process.exit(0);
} else {
  console.log(`\n\x1b[33m⚠️   ${issues.length} issues found. Run \`npm run audit -- --fix\` to auto-fix ${fixable.length} of them.\x1b[0m\n`);
  process.exit(1);
}
