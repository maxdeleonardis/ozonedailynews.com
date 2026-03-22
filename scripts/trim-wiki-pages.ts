/**
 * trim-wiki-pages.ts
 *
 * Step 2 of the wiki migration.
 * Replaces the body of each static wiki page.tsx (~500 lines) with a thin
 * 15-line loader that calls <WikiArticle slug="..." />.
 *
 * Run AFTER wiki:migrate has successfully pushed HTML content to Supabase.
 * The metadata export in each file is kept exactly as-is (SEO unchanged).
 * Everything else is replaced with:
 *
 *   import type { Metadata } from 'next';
 *   import { WikiArticle } from '@/components/WikiArticle';
 *   export const dynamic = 'force-dynamic';
 *   export const metadata: Metadata = { ...original metadata... };
 *   export default function [Name]() {
 *     return <WikiArticle slug="[slug]" />;
 *   }
 *
 * Usage:
 *   npm run wiki:trim              — trim all pages
 *   npm run wiki:trim -- --dry-run — preview (print new content, no writes)
 *   npm run wiki:trim -- --file app/crypto/xrp/page.tsx — single file
 */

import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.resolve(process.cwd(), 'app');

// ── CLI flags ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const singleFile = (() => {
  const i = args.indexOf('--file');
  return i !== -1 ? args[i + 1] : null;
})();

// ── Directories that are never content pages ─────────────────────────────────
const SYSTEM_DIRS = new Set([
  'node_modules', '.next',
  '(admin)',
  'api',
  'feeds',
  'rss.xml',
  'news-sitemap.xml',
  'saved',
  'history',
  'search',
]);

// ── Find every content page that should become a WikiArticle loader ───────────
function findNewsArticlePages(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SYSTEM_DIRS.has(entry.name)) continue;
      results.push(...findNewsArticlePages(full));
    } else if (entry.name === 'page.tsx') {
      if (path.dirname(full) === APP_DIR) continue; // skip root home page
      const source = fs.readFileSync(full, 'utf-8');
      if (source.includes('WikiArticle')) continue; // already trimmed
      if (source.includes('NewsArticleDB')) continue; // already using NewsArticleDB
      if (source.includes('JackArticleDB')) continue; // already using JackArticleDB
      if (source.includes("from '@/components/ArticlePageDB'")) continue; // already using ArticlePageDB
      if (/^['"](use client)['"]/.test(source.trimStart())) continue;
      if (!source.includes('export const metadata')) continue;
      results.push(full);
    }
  }
  return results;
}

// ── Derive slug from path ─────────────────────────────────────────────────────
function slugFromPath(filePath: string): string {
  const rel = path.relative(APP_DIR, path.dirname(filePath));
  return rel.replace(/\\/g, '/').replace(/\//g, '-');
}

// ── Extract the metadata export block ────────────────────────────────────────
// Handles both:
//   export const metadata: Metadata = { ... };       (bare object)
//   export const metadata: Metadata = fn({ ... });   (function call)
function extractMetadataBlock(source: string): string {
  const startMarker = 'export const metadata';
  const start = source.indexOf(startMarker);
  if (start === -1) return '';

  // Find the first { after the = sign
  const eqIdx = source.indexOf('=', start);
  if (eqIdx === -1) return '';

  // Track balanced braces from the first { encountered
  let depth = 0;
  let firstBrace = -1;
  let i = eqIdx + 1;
  while (i < source.length) {
    if (source[i] === '{') {
      if (firstBrace === -1) firstBrace = i;
      depth++;
    } else if (source[i] === '}') {
      depth--;
      if (depth === 0) {
        // Include trailing ); or ; if present
        let end = i + 1;
        while (end < source.length && (source[end] === ')' || source[end] === ';' || source[end] === ' ')) {
          if (source[end] === ';') { end++; break; }
          end++;
        }
        return source.substring(start, end);
      }
    }
    i++;
  }
  return '';
}

// ── Extract component function name ──────────────────────────────────────────
// e.g. "export default function XrpPage()" → "XrpPage"
function extractComponentName(source: string): string {
  const match = source.match(/export default function\s+(\w+)\s*\(/);
  return match ? match[1] : 'WikiPage';
}

// ── Build the thin replacement file ──────────────────────────────────────────
function buildThinFile(metadata: string, componentName: string, slug: string, source: string): string {
  // Keep generateArticleMetadata import when the metadata uses it
  const needsGenerate = metadata.includes('generateArticleMetadata');

  // Priority: JackArticle → ArticlePage → NewsArticle → WikiArticle (fallback)
  const isJackArticle = source.includes("from '@/components/JackArticle'") ||
    source.includes('from "@/components/JackArticle"');
  const isArticlePageComp = source.includes("from '@/components/ArticlePage'") ||
    source.includes('from "@/components/ArticlePage"');
  const isNewsArticle = source.includes("from '@/components/NewsArticle'") ||
    source.includes('from "@/components/NewsArticle"') ||
    source.includes("import NewsArticle");

  const dbImport = isJackArticle
    ? `import { JackArticleDB } from '@/components/JackArticleDB';`
    : isArticlePageComp
    ? `import { ArticlePageDB } from '@/components/ArticlePageDB';`
    : isNewsArticle
    ? `import { NewsArticleDB } from '@/components/NewsArticleDB';`
    : `import { WikiArticle } from '@/components/WikiArticle';`;

  const returnJsx = isJackArticle
    ? `return <JackArticleDB slug="${slug}" />;`
    : isArticlePageComp
    ? `return <ArticlePageDB slug="${slug}" />;`
    : isNewsArticle
    ? `return <NewsArticleDB slug="${slug}" />;`
    : `return <WikiArticle slug="${slug}" />;`;

  // Extract any const SLUG / FULL_URL / IMAGE_URL / ARTICLE_URL declarations
  // that the original file defined and the metadata still references by name.
  const constLines: string[] = [];
  const constPattern = /^(?:export\s+)?const\s+(SLUG|FULL_URL|IMAGE_URL|ARTICLE_URL|PAGE_URL|CANONICAL|ARTICLE_CANONICAL)\s*=\s*.+$/gm;
  let m: RegExpExecArray | null;
  while ((m = constPattern.exec(source)) !== null) {
    constLines.push(m[0]);
  }

  return [
    `import type { Metadata } from 'next';`,
    dbImport,
    ...(needsGenerate ? [`import { generateArticleMetadata } from '@/lib/seo-utils';`] : []),
    ``,
    `// Page renders dynamically — content fetched from Supabase at request time.`,
    `// Run 'npm run wiki:migrate' to update content in Supabase.`,
    `export const dynamic = 'force-dynamic';`,
    ...(constLines.length ? [``, ...constLines] : []),
    ``,
    metadata,
    ``,
    `export default function ${componentName}() {`,
    `  ${returnJsx}`,
    `}`,
    ``,
  ].join('\n');
}

// ── Check if a page should be trimmed to a WikiArticle loader ───────────────
// Any page that has a metadata export and isn't already a WikiArticle.
// Hub/listing pages that dynamically scan or list articles — never trim these
const HUB_PATTERNS = ['scanAllContent', 'NewsLibrary', '<Hub ', 'getLatestArticles', 'getAllArticles'];

function isArticlePage(source: string): boolean {
  if (!source.includes('export const metadata')) return false;
  if (source.includes('WikiArticle')) return false;
  // Skip hub/listing pages that aggregate dynamic content
  if (HUB_PATTERNS.some(p => source.includes(p))) return false;
  return true;
}

// ── Process one page ─────────────────────────────────────────────────────────
function processPage(filePath: string, forceSingleFile = false): 'ok' | 'skip' | 'fail' {
  const relPath = path.relative(process.cwd(), filePath);
  const slug = slugFromPath(filePath);
  const source = fs.readFileSync(filePath, 'utf-8');

  // Skip any page that doesn't qualify (already trimmed, client component, no metadata)
  if (!forceSingleFile && !isArticlePage(source)) {
    return 'skip';
  }

  const metadata = extractMetadataBlock(source);
  if (!metadata) {
    console.warn(`  ⚠️  ${relPath} — could not extract metadata block, skipping`);
    return 'skip';
  }

  const componentName = extractComponentName(source);
  const newContent = buildThinFile(metadata, componentName, slug, source);

  if (isDryRun) {
    console.log(`\n  ✓  ${relPath} (${source.split('\n').length} → ${newContent.split('\n').length} lines)`);
    console.log(`     slug: ${slug} | component: ${componentName}`);
    return 'ok';
  }

  // Write the backup alongside the file before overwriting
  const backupPath = filePath.replace('page.tsx', 'page.tsx.bak');
  fs.writeFileSync(backupPath, source, 'utf-8');

  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`  ✓  ${relPath} (${source.split('\n').length} → ${newContent.split('\n').length} lines) [backup: page.tsx.bak]`);
  return 'ok';
}

// ── Main ──────────────────────────────────────────────────────────────────────
function main() {
  let files: string[];

  if (singleFile) {
    const resolved = path.resolve(process.cwd(), singleFile);
    if (!fs.existsSync(resolved)) {
      console.error(`❌  File not found: ${resolved}`);
      process.exit(1);
    }
    files = [resolved];
  } else {
    // Batch mode: only process NewsArticle / DynamicNewsArticle pages (not wiki grids)
    files = findNewsArticlePages(APP_DIR);
  }

  if (files.length === 0) {
    console.log('⚠️  No wiki pages found.');
    return;
  }

  const modeLabel = isDryRun ? '[DRY RUN] ' : '';
  console.log(`\n${modeLabel}Found ${files.length} wiki page(s) to trim\n`);

  let ok = 0, skipped = 0, failed = 0;

  for (const f of files) {
    const result = processPage(f, Boolean(singleFile));
    if (result === 'ok') ok++;
    else if (result === 'skip') skipped++;
    else failed++;
  }

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`${modeLabel}Done — ${ok} trimmed, ${skipped} skipped, ${failed} failed`);

  if (!isDryRun && ok > 0) {
    console.log(`\nNext steps:`);
    console.log(`  1. Run: npm run build  (should be much faster now)`);
    console.log(`  2. Run: npm run dev — verify pages still render correctly`);
    console.log(`  3. If something looks wrong, restore a backup: cp app/path/page.tsx.bak app/path/page.tsx`);
    console.log(`  4. When satisfied, delete .bak files: Get-ChildItem -Recurse *.bak | Remove-Item`);
  }

  if (failed > 0) process.exit(1);
}

main();
