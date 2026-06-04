/**
 * audit-metadata.ts
 *
 * Scans all app/**\/page.tsx files and reports OStandard metadata violations.
 * Read-only — no files are modified.
 *
 * Usage: npm run audit:meta
 */

import fs from 'fs';
import path from 'path';

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────

const APP_DIR = path.join(process.cwd(), 'app');

/** Directories to skip entirely */
const SKIP_DIRS = new Set([
  '(admin)',
  'api',
  'auth',
  'account',
  'saved',
  'search',
  'login',
  'profile',
  '_components',
  'feeds',
  'rss.xml',
  'news-sitemap.xml',
  'robots.ts',
  'sitemap.ts',
]);

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface PageViolation {
  file: string;         // relative path from app/
  violations: string[];
  title: string;
  description: string;
  titleLength: number;
  descLength: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// FILE COLLECTION
// ─────────────────────────────────────────────────────────────────────────────

function collectPages(dir: string, pages: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    if (entry.isDirectory()) {
      collectPages(path.join(dir, entry.name), pages);
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      pages.push(path.join(dir, entry.name));
    }
  }
  return pages;
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA EXTRACTION
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Extract the value of a single-line string field from a metadata block.
 * Handles: 'value', "value", `value`
 */
function extractField(content: string, field: string): string {
  // Match: field: 'value' or field: "value" or field: `value` (single line)
  const regex = new RegExp(`${field}:\\s*['"\`]([^'"\`\\n]+)['"\`]`);
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

/**
 * Extract the top-level metadata description field only.
 * Limits search to the section of the file between `export const metadata`
 * and the first `openGraph:` or `twitter:` nested block, so that OG/twitter
 * `description:` fields (which are shorter by design) are never mistaken for
 * the canonical top-level description.
 *
 * Handles: inline double-quoted, inline single-quoted, inline backtick,
 * multi-line double-quoted, multi-line single-quoted, multi-line backtick.
 * Escape-aware: \'  and \" inside strings don't truncate extraction.
 */
function extractDescription(content: string): string {
  // --- Isolate top-level section (before openGraph/twitter nested blocks) ---
  const metaIdx = content.search(/export\s+const\s+metadata/);
  const searchStart = metaIdx >= 0 ? metaIdx : 0;

  const ogIdx = content.indexOf('openGraph:', searchStart);
  const twIdx = content.indexOf('twitter:', searchStart);
  const endIdx = Math.min(
    ogIdx > searchStart ? ogIdx : content.length,
    twIdx > searchStart ? twIdx : content.length,
  );
  const topSection = content.slice(searchStart, endIdx);

  function runExtract(src: string): string {
    // Inline double-quoted
    const dq = src.match(/description:\s*"((?:[^"\\]|\\.)*)"/);
    if (dq) return dq[1].replace(/\\'/g, "'").replace(/\\"/g, '"').trim();

    // Inline single-quoted (handles escaped apostrophes \')
    const sq = src.match(/description:\s*'((?:[^'\\]|\\.)*)'/);
    if (sq) return sq[1].replace(/\\'/g, "'").replace(/\\"/g, '"').trim();

    // Inline backtick (single line)
    const bq = src.match(/description:\s*`([^`\n]+)`/);
    if (bq) return bq[1].trim();

    // Multi-line double-quoted: description:\n    "text..."
    const mdq = src.match(/description:\s*\n\s*"((?:[^"\\]|\\.)*)"\s*[,\n]/);
    if (mdq) return mdq[1].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\s+/g, ' ').trim();

    // Multi-line single-quoted: description:\n    'text...'
    const msq = src.match(/description:\s*\n\s*'((?:[^'\\]|\\.)*)'\s*[,\n]/);
    if (msq) return msq[1].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\s+/g, ' ').trim();

    // Multi-line backtick: description:\n    `text...`
    const mbq = src.match(/description:\s*\n\s*`([\s\S]*?)`\s*[,\n]/);
    if (mbq) return mbq[1].replace(/\s+/g, ' ').trim();

    return '';
  }

  // Try top-level section first; fall back to full content if nothing found
  return runExtract(topSection) || runExtract(content);
}

// ─────────────────────────────────────────────────────────────────────────────
// VIOLATION DETECTION
// ─────────────────────────────────────────────────────────────────────────────

function checkViolations(content: string, relPath: string): PageViolation | null {
  // Skip files with no metadata export at all (pure layout pages etc.)
  if (!content.includes('export const metadata')) return null;

  const title = extractField(content, 'title');
  const description = extractDescription(content);

  const violations: string[] = [];

  // 1. Title ends with brand suffix
  if (/\|\s*OzoneNews\s*$/.test(title)) {
    violations.push(`BRAND SUFFIX: title ends with "| OzoneNews" (wastes ~12 chars) → "${title}"`);
  }

  // 2. Title length
  if (title.length > 60) {
    violations.push(`TITLE TOO LONG: ${title.length} chars (max 60) → "${title}"`);
  }

  // 3. Em dash or en dash in title
  if (/[—–]/.test(title)) {
    violations.push(`EM/EN DASH: title contains — or – (use | instead) → "${title}"`);
  }

  // 4. Hyphen separator " - " used instead of " | "
  if (/ - /.test(title)) {
    violations.push(`WRONG SEPARATOR: title uses " - " (use " | " instead) → "${title}"`);
  }

  // 5. Description length
  if (description) {
    if (description.length < 130) {
      violations.push(`DESC TOO SHORT: ${description.length} chars (min 130)`);
    } else if (description.length > 155) {
      violations.push(`DESC TOO LONG: ${description.length} chars (max 155)`);
    }
  } else {
    violations.push(`MISSING DESC: no description field detected`);
  }

  // 6. Missing twitter card
  if (!content.includes('twitter:')) {
    violations.push(`MISSING TWITTER: no twitter card block`);
  }

  // 7. Missing canonical
  if (!content.includes('canonical:') && !content.includes("alternates:")) {
    violations.push(`MISSING CANONICAL: no alternates.canonical`);
  }

  if (violations.length === 0) return null;

  return {
    file: relPath,
    violations,
    title,
    description,
    titleLength: title.length,
    descLength: description.length,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// REPORTING
// ─────────────────────────────────────────────────────────────────────────────

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
};

function run() {
  const pages = collectPages(APP_DIR);
  const results: PageViolation[] = [];

  for (const absPath of pages) {
    const content = fs.readFileSync(absPath, 'utf-8');
    const relPath = path.relative(APP_DIR, absPath).replace(/\\/g, '/');
    const violation = checkViolations(content, relPath);
    if (violation) results.push(violation);
  }

  if (results.length === 0) {
    console.log(`${COLORS.green}✓ No violations found across ${pages.length} pages.${COLORS.reset}`);
    return;
  }

  // Group violations by type for summary
  const byType: Record<string, number> = {};
  for (const r of results) {
    for (const v of r.violations) {
      const key = v.split(':')[0];
      byType[key] = (byType[key] ?? 0) + 1;
    }
  }

  // ── Summary banner ────────────────────────────────────────────────────────
  console.log('');
  console.log(`${COLORS.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
  console.log(`${COLORS.bold}  OzoneNews Metadata Audit  |  ${new Date().toDateString()}${COLORS.reset}`);
  console.log(`${COLORS.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
  console.log(`  Pages scanned : ${COLORS.cyan}${pages.length}${COLORS.reset}`);
  console.log(`  Pages with violations : ${COLORS.red}${results.length}${COLORS.reset}`);
  console.log(`  Clean pages : ${COLORS.green}${pages.length - results.length}${COLORS.reset}`);
  console.log('');
  console.log(`${COLORS.bold}  Violation breakdown:${COLORS.reset}`);
  for (const [type, count] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
    const bar = '█'.repeat(Math.min(count, 40));
    console.log(`  ${COLORS.yellow}${type.padEnd(22)}${COLORS.reset} ${String(count).padStart(4)}  ${COLORS.dim}${bar}${COLORS.reset}`);
  }
  console.log(`${COLORS.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
  console.log('');

  // ── Per-file violations ───────────────────────────────────────────────────
  // Sort by number of violations descending
  results.sort((a, b) => b.violations.length - a.violations.length);

  // Group by violation type for targeted output
  const brandSuffix    = results.filter(r => r.violations.some(v => v.startsWith('BRAND SUFFIX')));
  const titleTooLong   = results.filter(r => r.violations.some(v => v.startsWith('TITLE TOO LONG')));
  const dashViolations = results.filter(r => r.violations.some(v => v.startsWith('EM/EN DASH') || v.startsWith('WRONG SEPARATOR')));
  const descIssues     = results.filter(r => r.violations.some(v => v.startsWith('DESC')));
  const missingTwitter = results.filter(r => r.violations.some(v => v.startsWith('MISSING TWITTER')));
  const missingCanon   = results.filter(r => r.violations.some(v => v.startsWith('MISSING CANONICAL')));

  function printGroup(label: string, items: PageViolation[], violationType: string) {
    if (items.length === 0) return;
    console.log(`${COLORS.bold}${COLORS.yellow}── ${label} (${items.length} pages) ─────────────────────────────────────────${COLORS.reset}`);
    for (const r of items) {
      const v = r.violations.find(x => x.startsWith(violationType));
      if (!v) continue;
      console.log(`  ${COLORS.dim}${r.file}${COLORS.reset}`);
      console.log(`    ${COLORS.red}${v}${COLORS.reset}`);
    }
    console.log('');
  }

  printGroup('BRAND SUFFIX  — strip "| OzoneNews" from title', brandSuffix, 'BRAND SUFFIX');
  printGroup('TITLE TOO LONG  — trim to 60 chars', titleTooLong, 'TITLE TOO LONG');
  printGroup('DASH VIOLATIONS  — replace — / – / " - " with |', dashViolations, 'EM/EN DASH');
  printGroup('WRONG SEPARATOR  — replace " - " with " | "', dashViolations, 'WRONG SEPARATOR');
  printGroup('DESCRIPTION ISSUES  — adjust to 130–155 chars', descIssues, 'DESC');
  printGroup('MISSING TWITTER CARD  — add twitter block', missingTwitter, 'MISSING TWITTER');
  printGroup('MISSING CANONICAL  — add alternates.canonical', missingCanon, 'MISSING CANONICAL');

  console.log(`${COLORS.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
  console.log(`  Total violation instances: ${COLORS.red}${results.reduce((n, r) => n + r.violations.length, 0)}${COLORS.reset} across ${COLORS.red}${results.length}${COLORS.reset} pages`);
  console.log(`${COLORS.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
}

run();
