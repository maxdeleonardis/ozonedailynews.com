/**
 * fix-metadata.ts
 *
 * Systematically applies mechanical OStandard metadata fixes across all
 * app/**\/page.tsx files. Designed for Organic Search + AI SEO compliance.
 *
 * Fixes applied:
 *   1. Strip "| ObjectWire" brand suffix from ALL title fields
 *   2. Replace " - " separator with " | " in title values
 *   3. Replace em/en dashes (— –) with " | " in title values
 *   4. Trim description > 155 chars to nearest word boundary ≤ 155
 *   5. Add twitter card block (derived from openGraph) when missing
 *   6. Add alternates.canonical (derived from file path) when missing
 *
 * NOT auto-fixed (requires human judgment):
 *   - Description too short (< 130 chars) — needs content writing
 *   - Title still too long after brand suffix removal
 *
 * Usage:
 *   npm run fix:meta          → dry-run, shows what would change
 *   npm run fix:meta:write    → applies all fixes
 *   npx tsx scripts/fix-metadata.ts --limit 20          → dry-run first 20 files
 *   npx tsx scripts/fix-metadata.ts --write --limit 20  → write first 20
 *   npx tsx scripts/fix-metadata.ts --write --path app/tech  → target directory
 */

import fs from 'fs';
import path from 'path';

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────

const WRITE_MODE = process.argv.includes('--write');
const VERBOSE    = process.argv.includes('--verbose');

const LIMIT = (() => {
  const idx = process.argv.indexOf('--limit');
  return idx >= 0 ? parseInt(process.argv[idx + 1], 10) : Infinity;
})();

const TARGET_ARG = (() => {
  const idx = process.argv.indexOf('--path');
  return idx >= 0 ? process.argv[idx + 1] : null;
})();

const APP_DIR  = path.join(process.cwd(), 'app');
const BASE_URL = 'https://www.objectwire.org';

const SKIP_DIRS = new Set([
  '(admin)', 'api', 'auth', 'account', 'saved', 'search',
  'login', 'profile', '_components', 'feeds', 'rss.xml', 'news-sitemap.xml',
]);

// ─────────────────────────────────────────────────────────────────────────────
// ANSI COLORS
// ─────────────────────────────────────────────────────────────────────────────

const C = {
  reset:  '\x1b[0m',
  red:    '\x1b[31m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
  green:  '\x1b[32m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  blue:   '\x1b[34m',
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE COLLECTION
// ─────────────────────────────────────────────────────────────────────────────

function collectPages(dir: string, pages: string[] = []): string[] {
  let entries: fs.Dirent[];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch { return pages; }

  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectPages(full, pages);
    else if (entry.name === 'page.tsx' || entry.name === 'page.ts') pages.push(full);
  }
  return pages;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Trim text to ≤ maxLen chars at the last word boundary. */
function trimAtWord(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const cut  = text.slice(0, maxLen);
  const last = cut.lastIndexOf(' ');
  // Only trim at word boundary if it keeps ≥ 75% of the text
  return last > maxLen * 0.75 ? cut.slice(0, last) : cut;
}

/** Derive canonical URL from the page.tsx absolute path. */
function toCanonical(filePath: string): string {
  const rel = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  // Remove page.tsx, remove route groups like (public)/
  const route = rel
    .replace(/\/page\.tsx?$/, '')
    .replace(/\([^)]+\)\//g, '');
  return `${BASE_URL}/${route}`;
}

/**
 * Extract the inner content of a named block like `openGraph: { ... }` or
 * `twitter: { ... }` using brace-counting (handles nesting correctly).
 * Returns null if the block is not found.
 */
function extractBlock(content: string, key: string): string | null {
  const keyRe = new RegExp(`\\b${key}:\\s*\\{`);
  const m = content.match(keyRe);
  if (!m || m.index === undefined) return null;

  let start = content.indexOf(m[0], m.index) + m[0].length - 1; // opening {
  let depth = 0;
  let end   = -1;

  for (let i = start; i < content.length; i++) {
    const ch = content[i];
    // Skip string literals to avoid counting braces inside them
    if (ch === '"' || ch === "'" || ch === '`') {
      const q = ch;
      i++;
      while (i < content.length && !(content[i] === q && content[i - 1] !== '\\')) i++;
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }

  return end !== -1 ? content.slice(start + 1, end) : null;
}

/** Extract a string field value from a block of metadata text.  
 * Handles apostrophes in possessives (YouTube's, don't, etc.). */
function extractStringField(block: string, field: string): string {
  const fieldRe = new RegExp(`\\b${field}:\\s*(['"\`])`);
  const fieldMatch = block.match(fieldRe);
  if (!fieldMatch || fieldMatch.index === undefined) return '';

  const quoteChar = fieldMatch[1];
  const valueStart = fieldMatch.index + fieldMatch[0].length;

  let i = valueStart;
  while (i < block.length) {
    const ch = block[i];
    if (ch === '\\') {
      i += 2;
    } else if (ch === quoteChar) {
      if (quoteChar === "'" && i + 1 < block.length && /[a-zA-Z0-9_]/.test(block[i + 1])) {
        i++; // possessive/contraction apostrophe, keep scanning
      } else {
        break; // actual closing quote
      }
    } else if ((ch === '\n' || ch === '\r') && quoteChar !== '`') {
      break; // single/double-quoted strings can't span lines
    } else {
      i++;
    }
  }

  return block.slice(valueStart, i);
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA BLOCK ISOLATION
// Finds the export const metadata = { ... } block and returns its boundaries.
// ─────────────────────────────────────────────────────────────────────────────

function findMetadataBlock(content: string): { start: number; end: number } | null {
  const openRe = /export const metadata[^=]*=\s*\{/;
  const m = content.match(openRe);
  if (!m || m.index === undefined) return null;

  const openBrace = content.indexOf('{', m.index + m[0].indexOf('{'));
  let depth = 0;
  let end   = -1;

  for (let i = openBrace; i < content.length; i++) {
    const ch = content[i];
    if (ch === '"' || ch === "'" || ch === '`') {
      const q = ch;
      i++;
      while (i < content.length && !(content[i] === q && content[i - 1] !== '\\')) {
        // Handle template literal interpolations
        if (content[i] === '$' && content[i + 1] === '{') i += 2;
        else i++;
      }
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }

  return end !== -1 ? { start: m.index, end: end + 1 } : null;
}

// ─────────────────────────────────────────────────────────────────────────────
// FIX FUNCTIONS — each mutates metaBlock in place (via string replacement)
// ─────────────────────────────────────────────────────────────────────────────

/** Fix 1: Strip " | ObjectWire" brand suffix from all title: fields */
function fixBrandSuffix(metaBlock: string, changes: string[]): string {
  return metaBlock.replace(
    /(^\s*title:\s*)(["'])(.*?)\s*\|\s*ObjectWire\2/gm,
    (_match, prefix, quote, value) => {
      changes.push(`BRAND: removed "| ObjectWire" → title is now "${value}"`);
      return `${prefix}${quote}${value}${quote}`;
    }
  );
}

/** Fix 2: Replace " - " separator with " | " in title: values */
function fixDashSeparator(metaBlock: string, changes: string[]): string {
  return metaBlock.replace(
    /(^\s*title:\s*)(["'])([^"'\n]+)\2/gm,
    (_match, prefix, quote, value) => {
      if (!value.includes(' - ')) return _match;
      const fixed = value.replace(/ - /g, ' | ');
      changes.push(`SEPARATOR: " - " → " | "  in "${value.slice(0, 60)}..."`);
      return `${prefix}${quote}${fixed}${quote}`;
    }
  );
}

/** Fix 3: Replace em-dash (—) and en-dash (–) with " | " in title: values */
function fixEmDash(metaBlock: string, changes: string[]): string {
  return metaBlock.replace(
    /(^\s*title:\s*)(["'])([^"'\n]+)\2/gm,
    (_match, prefix, quote, value) => {
      if (!/[—–]/.test(value)) return _match;
      const fixed = value
        .replace(/(\d)\s*–\s*(\d)/g, '$1-$2')   // date/number ranges: 2–4 → 2-4
        .replace(/\s*[—–]\s*/g, ' | ');          // separator context: — or – → ' | '
      changes.push(`DASH: em/en dash removed in "${value.slice(0, 60)}..."`);
      return `${prefix}${quote}${fixed}${quote}`;
    }
  );
}

/** Fix 4: Trim description > 155 chars at word boundary.
 * Uses character-by-character scanning to correctly handle apostrophes
 * inside possessives (YouTube's, don't, etc.) without breaking string literals.
 */
function fixDescriptionLength(metaBlock: string, changes: string[]): string {
  let result = metaBlock;

  // Find each `description:` field and fix it
  const descRe = /\bdescription:\s*(?:\n[ \t]*)?(["'])/g;
  let match: RegExpExecArray | null;

  while ((match = descRe.exec(result)) !== null) {
    const quoteChar = match[1];
    const valueStart = match.index + match[0].length; // position right after opening quote

    // Scan forward to find the actual closing quote (apostrophe-aware)
    let i = valueStart;
    while (i < result.length) {
      const ch = result[i];
      if (ch === '\\') {
        i += 2; // skip escaped character
      } else if (ch === quoteChar) {
        // For single quotes: `'` followed by a word char is a possessive, not a closer
        if (quoteChar === "'" && i + 1 < result.length && /[a-zA-Z0-9_]/.test(result[i + 1])) {
          i++; // skip possessive apostrophe (e.g. YouTube's, don't)
        } else {
          break; // actual closing quote
        }
      } else if ((ch === '\n' || ch === '\r') && quoteChar !== '`') {
        break; // single/double-quoted strings can't span lines
      } else {
        i++;
      }
    }

    const value = result.slice(valueStart, i);
    const closingPos = i; // index of the closing quote character

    if (value.length > 155) {
      const trimmed = trimAtWord(value, 155);
      changes.push(`DESC: ${value.length}→${trimmed.length} chars  "${trimmed.slice(-30)}"`);
      const replacement = trimmed + quoteChar;
      result = result.slice(0, valueStart) + replacement + result.slice(closingPos + 1);
      // Advance regex past the newly written value to avoid re-matching
      descRe.lastIndex = valueStart + replacement.length;
    }
  }

  return result;
}

/**
 * Fix 5: Add twitter card block when missing but openGraph block exists.
 * Derives twitter title + description from the openGraph block.
 */
function fixMissingTwitter(metaBlock: string, changes: string[]): string {
  if (/\btwitter:\s*\{/.test(metaBlock)) return metaBlock;
  if (!/\bopenGraph:\s*\{/.test(metaBlock)) return metaBlock;

  const ogBlock = extractBlock(metaBlock, 'openGraph');
  if (!ogBlock) return metaBlock;

  let twitterTitle = extractStringField(ogBlock, 'title')
    .replace(/\s*\|\s*ObjectWire$/, ''); // strip brand if present in OG title
  const twitterDesc = trimAtWord(extractStringField(ogBlock, 'description'), 155);

  // Fallback: use metadata-level title
  if (!twitterTitle) {
    const topTitleM = metaBlock.match(/^\s*title:\s*["']([^"'\n]+)["']/m);
    if (topTitleM) twitterTitle = topTitleM[1].replace(/\s*\|\s*ObjectWire$/, '');
  }

  if (!twitterTitle) return metaBlock;

  // Use double-quotes to avoid apostrophe/escaping issues in twitter values
  const safeTitle = twitterTitle.replace(/"/g, "'"); // swap any rare double-quotes to single
  const safeDesc  = twitterDesc.replace(/"/g, "'");

  const twitterBlock = [
    `  twitter: {`,
    `    card: 'summary_large_image',`,
    `    title: "${safeTitle}",`,
    twitterDesc ? `    description: "${safeDesc}",` : null,
    `  },`,
  ].filter(Boolean).join('\n');

  // Insert just before the closing `}` of the metadata block
  const insertAt = metaBlock.lastIndexOf('\n}');
  if (insertAt === -1) return metaBlock;

  // Ensure the last property before insertion has a trailing comma
  const beforeInsert = metaBlock.slice(0, insertAt);
  const lastNonWS = beforeInsert.trimEnd();
  const needsComma = lastNonWS[lastNonWS.length - 1] !== ',';
  const prefix = needsComma ? lastNonWS + ',' + beforeInsert.slice(lastNonWS.length) : beforeInsert;

  changes.push(`TWITTER: added twitter card  title="${twitterTitle.slice(0, 50)}"`);
  return prefix + '\n' + twitterBlock + '\n' + metaBlock.slice(insertAt + 1);
}

/**
 * Fix 6: Add alternates.canonical when missing entirely.
 * URL is derived from the file path.
 */
function fixMissingCanonical(metaBlock: string, filePath: string, changes: string[]): string {
  if (/\balternates:\s*\{/.test(metaBlock)) return metaBlock;

  const canonical = toCanonical(filePath);
  const canonicalBlock = `  alternates: {\n    canonical: '${canonical}',\n  },`;

  const insertAt = metaBlock.lastIndexOf('\n}');
  if (insertAt === -1) return metaBlock;

  // Ensure the last property before insertion has a trailing comma
  const beforeInsert = metaBlock.slice(0, insertAt);
  const lastNonWS = beforeInsert.trimEnd();
  const needsComma = lastNonWS[lastNonWS.length - 1] !== ',';
  const prefix = needsComma ? lastNonWS + ',' + beforeInsert.slice(lastNonWS.length) : beforeInsert;

  changes.push(`CANONICAL: added alternates.canonical: "${canonical}"`);
  return prefix + '\n' + canonicalBlock + '\n' + metaBlock.slice(insertAt + 1);
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN FIX PIPELINE
// ─────────────────────────────────────────────────────────────────────────────

interface FixResult {
  file: string;
  changes: string[];
  newContent: string;
  hadChanges: boolean;
}

function processFile(filePath: string): FixResult {
  const relFile = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf-8');
  const changes: string[] = [];

  if (!content.includes('export const metadata')) {
    return { file: relFile, changes, newContent: content, hadChanges: false };
  }

  const bounds = findMetadataBlock(content);
  if (!bounds) {
    return { file: relFile, changes, newContent: content, hadChanges: false };
  }

  const beforeMeta = content.slice(0, bounds.start);
  let   metaBlock  = content.slice(bounds.start, bounds.end);
  const afterMeta  = content.slice(bounds.end);

  // Apply fixes in order
  metaBlock = fixBrandSuffix(metaBlock, changes);
  metaBlock = fixDashSeparator(metaBlock, changes);
  metaBlock = fixEmDash(metaBlock, changes);
  metaBlock = fixDescriptionLength(metaBlock, changes);
  metaBlock = fixMissingTwitter(metaBlock, changes);
  metaBlock = fixMissingCanonical(metaBlock, filePath, changes);

  const newContent = beforeMeta + metaBlock + afterMeta;
  return { file: relFile, changes, newContent, hadChanges: changes.length > 0 };
}

// ─────────────────────────────────────────────────────────────────────────────
// ENTRY POINT
// ─────────────────────────────────────────────────────────────────────────────

function run() {
  const scanDir = TARGET_ARG
    ? path.resolve(process.cwd(), TARGET_ARG)
    : APP_DIR;

  const pages = collectPages(scanDir);
  const toProcess = LIMIT < Infinity ? pages.slice(0, LIMIT) : pages;

  const modeLabel = WRITE_MODE ? `${C.yellow}WRITE MODE${C.reset}` : `${C.cyan}DRY-RUN${C.reset} (pass --write to apply changes)`;
  console.log(`\n${C.bold}ObjectWire Metadata Fixer${C.reset}  |  ${modeLabel}`);
  console.log(`${C.dim}Scanning ${toProcess.length} of ${pages.length} pages...${C.reset}\n`);

  const fixCounts: Record<string, number> = {
    BRAND: 0, SEPARATOR: 0, DASH: 0, DESC: 0, TWITTER: 0, CANONICAL: 0,
  };

  let filesFixed   = 0;
  let totalChanges = 0;

  for (const absPath of toProcess) {
    const result = processFile(absPath);

    if (!result.hadChanges) continue;

    filesFixed++;
    totalChanges += result.changes.length;

    if (WRITE_MODE) {
      fs.writeFileSync(absPath, result.newContent, 'utf-8');
    }

    // Count by type
    for (const c of result.changes) {
      const key = c.split(':')[0];
      fixCounts[key] = (fixCounts[key] ?? 0) + 1;
    }

    if (VERBOSE || !WRITE_MODE) {
      console.log(`  ${C.dim}${result.file}${C.reset}`);
      for (const c of result.changes) {
        const color = c.startsWith('BRAND') ? C.yellow
          : c.startsWith('DESC')    ? C.blue
          : c.startsWith('TWITTER') ? C.green
          : c.startsWith('CANON')   ? C.cyan
          : C.red;
        console.log(`    ${color}${c}${C.reset}`);
      }
    }
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log(`\n${C.bold}${'─'.repeat(68)}${C.reset}`);
  console.log(`${C.bold}  Summary  —  ${WRITE_MODE ? 'APPLIED' : 'DRY-RUN'}${C.reset}`);
  console.log(`${'─'.repeat(68)}`);
  console.log(`  Files processed : ${C.cyan}${toProcess.length}${C.reset}`);
  console.log(`  Files changed   : ${C.yellow}${filesFixed}${C.reset}`);
  console.log(`  Total fixes     : ${C.green}${totalChanges}${C.reset}\n`);

  const typeRows: [string, number, string][] = [
    ['BRAND suffix removed',      fixCounts.BRAND     ?? 0, C.yellow],
    ['SEPARATOR fixed (" - "→"|")',fixCounts.SEPARATOR ?? 0, C.red],
    ['DASH replaced (—/– → "|")', fixCounts.DASH      ?? 0, C.red],
    ['DESC trimmed (>155)',        fixCounts.DESC      ?? 0, C.blue],
    ['TWITTER card added',         fixCounts.TWITTER   ?? 0, C.green],
    ['CANONICAL added',            fixCounts.CANONICAL ?? 0, C.cyan],
  ];

  for (const [label, count, color] of typeRows) {
    if (count === 0) continue;
    console.log(`  ${color}${label.padEnd(34)}${C.reset}  ${String(count).padStart(4)}`);
  }

  if (!WRITE_MODE && filesFixed > 0) {
    console.log(`\n${C.bold}  → Run with --write to apply all ${totalChanges} fixes to ${filesFixed} files.${C.reset}`);
  }
  if (WRITE_MODE && filesFixed > 0) {
    console.log(`\n${C.green}  ✓ ${totalChanges} fixes written to ${filesFixed} files.${C.reset}`);
    console.log(`  Run ${C.cyan}npm run audit:meta${C.reset} to verify remaining violations.`);
  }

  console.log(`${'─'.repeat(68)}\n`);
}

run();
