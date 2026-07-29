#!/usr/bin/env ts-node
/**
 * scripts/validate-static-articles.ts
 *
 * Scans EVERY static JSON article in content/static/ (all stores) and checks
 * content quality rules that apply to JSON articles specifically — word count,
 * internal/external links, heading structure, banned patterns, etc.
 *
 * Usage:
 *   npx ts-node --project tsconfig.scripts.json scripts/validate-static-articles.ts
 *
 * This is designed to be incorporated into prebuild.ts or run standalone.
 */

import fs from 'fs';
import path from 'path';

// ── Configuration ─────────────────────────────────────────────────────────────

const CWD = process.cwd();
const STATIC_BASE = path.join(CWD, 'content', 'static');

const STORES = [
  'articles',
  'jack_articles',
  'wiki_articles',
  'creator_articles',
  'article_pages',
  'sterling_articles',
] as const;

/** AI boilerplate phrases that trigger Google's HCU classifier. Build should fail on any occurrence. */
const BANNED_PHRASES = [
  'In conclusion',
  'It is important to note',
  'It is important to remember',
  'Furthermore, it is crucial',
  "In today's fast-paced world",
  'In the ever-evolving landscape',
  'It is worth noting that',
  'Moreover, it should be noted',
  'Navigating the complex',
  'Delve into',
  'In summary',
  'delve into',
  'Delve deeper',
];

/** Valid author slugs from lib/authors.ts — single source of truth */
const KNOWN_AUTHOR_SLUGS = new Set([
  'max-deleonardis',
  'simon-minter',
  'ozonedailynews-editorial-team',
  'kaustubh-madiraju',
  'josh-donnelly',
]);

const BANNED_EM_DASH = /[—–]/;

// ── Helpers ───────────────────────────────────────────────────────────────────

function findJsonFilesRecursive(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findJsonFilesRecursive(full));
    } else if (entry.name.endsWith('.json') && entry.name !== '_index.json' && entry.name !== 'content_registry.json') {
      results.push(full);
    }
  }
  return results;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

interface ArticleIssue {
  field: string;
  severity: 'error' | 'warning';
  message: string;
}

function validateArticle(filePath: string): ArticleIssue[] {
  const issues: ArticleIssue[] = [];
  let raw: Record<string, unknown>;

  try {
    raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    issues.push({ field: 'file', severity: 'error', message: 'Invalid JSON — file cannot be parsed' });
    return issues;
  }

  const relPath = path.relative(CWD, filePath);
  const title = (raw.title as string) ?? '';
  const contentHtml = (raw.content_html as string) ?? '';
  const authorSlug = (raw.author_slug as string) ?? '';
  const metadata = (raw.metadata ?? {}) as Record<string, unknown>;
  const description = (metadata.description as string) ?? '';
  const subtitle = (raw.subtitle as string) ?? '';

  // ── 1. Word count ──────────────────────────────────────────────────────────
  const cleanText = stripHtml(contentHtml);
  const wordCount = cleanText ? cleanText.split(/\s+/).length : 0;
  if (wordCount < 300) {
    issues.push({ field: 'content_html', severity: 'error', message: `Word count is ${wordCount} (minimum 300)` });
  } else if (wordCount < 600) {
    issues.push({ field: 'content_html', severity: 'warning', message: `Word count is ${wordCount} (target 600+)` });
  }

  // ── 2. Internal links (4+) ─────────────────────────────────────────────────
  const internalLinkRegex = /<a\s[^>]*href\s*=\s*"(?:\/(?!\/)[^"]*|[^"http][^"]*)"/gi;
  const internalLinks = contentHtml.match(internalLinkRegex);
  const internalCount = internalLinks ? internalLinks.length : 0;
  if (internalCount < 4) {
    issues.push({ field: 'content_html', severity: 'error', message: `Found ${internalCount} internal link(s) (minimum 4)` });
  }

  // ── 3. External source link (1+) ───────────────────────────────────────────
  const externalLinkRegex = /<a\s[^>]*href\s*=\s*"https?:\/\/(?!.*ozonedailynews\.com)[^"]*"/gi;
  const externalLinks = contentHtml.match(externalLinkRegex);
  const externalCount = externalLinks ? externalLinks.length : 0;
  if (externalCount < 1) {
    issues.push({ field: 'content_html', severity: 'error', message: `Found ${externalCount} external source link(s) (minimum 1)` });
  }

  // ── 4. H2 heading (1+) ─────────────────────────────────────────────────────
  const h2Regex = /<h2\b[^>]*>/gi;
  const h2Matches = contentHtml.match(h2Regex);
  const h2Count = h2Matches ? h2Matches.length : 0;
  if (h2Count < 1) {
    issues.push({ field: 'content_html', severity: 'error', message: `Found ${h2Count} <h2> heading(s) (minimum 1)` });
  }

  // ── 5. Em / en dashes in title ─────────────────────────────────────────────
  if (BANNED_EM_DASH.test(title)) {
    issues.push({ field: 'title', severity: 'error', message: `Title contains banned em/en dash: "${title}"` });
  }

  // ── 6. Em / en dashes in content_html ──────────────────────────────────────
  if (BANNED_EM_DASH.test(contentHtml)) {
    // Find context around the first occurrence
    const idx = contentHtml.search(BANNED_EM_DASH);
    const snippet = contentHtml.slice(Math.max(0, idx - 30), idx + 30).replace(/\n/g, ' ');
    issues.push({ field: 'content_html', severity: 'error', message: `Banned em/en dash found near: "...${snippet}..."` });
  }

  // ── 7. Valid author_slug ───────────────────────────────────────────────────
  if (!authorSlug || !KNOWN_AUTHOR_SLUGS.has(authorSlug)) {
    const suggestions = [...KNOWN_AUTHOR_SLUGS].join(', ');
    issues.push({ field: 'author_slug', severity: 'error', message: `Unknown author_slug "${authorSlug}" — valid slugs: ${suggestions}` });
  }

  // ── 8. AI boilerplate phrases ──────────────────────────────────────────────
  const lowerBody = (contentHtml + ' ' + subtitle + ' ' + description).toLowerCase();
  for (const phrase of BANNED_PHRASES) {
    if (lowerBody.includes(phrase.toLowerCase())) {
      issues.push({ field: 'content_html', severity: 'error', message: `Banned AI phrase found: "${phrase}"` });
    }
  }

  // ── 9. Meta description length (130-155) ───────────────────────────────────
  if (description && description.length > 155) {
    issues.push({ field: 'metadata.description', severity: 'warning', message: `Description is ${description.length} chars (max 155)` });
  } else if (description && description.length > 0 && description.length < 130) {
    issues.push({ field: 'metadata.description', severity: 'warning', message: `Description is ${description.length} chars (target 130-155)` });
  }

  // ── 10. Metadata title max 60 chars ────────────────────────────────────────
  const metaTitle = (metadata.title as string) ?? '';
  if (metaTitle && metaTitle.length > 60) {
    issues.push({ field: 'metadata.title', severity: 'warning', message: `Metadata title is ${metaTitle.length} chars (max 60)` });
  }

  return issues;
}

// ── Run ───────────────────────────────────────────────────────────────────────

const START = Date.now();
const allFiles: string[] = [];

for (const store of STORES) {
  const storeDir = path.join(STATIC_BASE, store);
  allFiles.push(...findJsonFilesRecursive(storeDir));
}

console.log('\n╔══════════════════════════════════════════════════╗');
console.log('║    VALIDATE STATIC ARTICLES — CONTENT SCAN      ║');
console.log('╚══════════════════════════════════════════════════╝\n');
console.log(`  Scanning ${allFiles.length} article file(s)...\n`);

let totalErrors = 0;
let totalWarnings = 0;
const fileResults: Array<{ file: string; errors: number; warnings: number }> = [];

for (const fp of allFiles) {
  const issues = validateArticle(fp);
  if (issues.length === 0) continue;

  const relPath = path.relative(CWD, fp);
  const errCount = issues.filter((i) => i.severity === 'error').length;
  const warnCount = issues.filter((i) => i.severity === 'warning').length;
  totalErrors += errCount;
  totalWarnings += warnCount;
  fileResults.push({ file: relPath, errors: errCount, warnings: warnCount });

  console.log(`  ${relPath}`);
  for (const issue of issues) {
    const icon = issue.severity === 'error' ? '✖' : '⚠';
    console.log(`    ${icon} [${issue.field}] ${issue.message}`);
  }
  console.log('');
}

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`  ─────────────────────────────────────────`);
console.log(`  Total files with issues: ${fileResults.length} / ${allFiles.length}`);
console.log(`  Errors:   ${totalErrors}`);
console.log(`  Warnings: ${totalWarnings}`);
console.log(`  Time:     ${((Date.now() - START) / 1000).toFixed(1)}s\n`);

if (totalErrors > 0) {
  console.error('  ❌ Static article validation FAILED — errors must be resolved.\n');
  process.exit(1);
}

console.log('  ✅ All static articles pass quality checks.\n');
