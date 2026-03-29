/**
 * wiki-status.ts
 *
 * Diagnostic dashboard — shows the sync state of every content page across
 * three systems: file system, content-registry, and Supabase.
 *
 * Usage:
 *   npm run wiki:status
 *   npm run wiki:status -- --stubs-only      (only show STUB pages)
 *   npm run wiki:status -- --missing-only    (only show pages with gaps)
 *   npm run wiki:status -- --section trump   (filter by route section)
 */

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const APP_DIR = path.resolve(process.cwd(), 'app');

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing Supabase env vars in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── CLI flags ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const stubsOnly = args.includes('--stubs-only');
const missingOnly = args.includes('--missing-only');
const sectionFilter = (() => {
  const i = args.indexOf('--section');
  return i !== -1 ? args[i + 1]?.toLowerCase() : null;
})();

// ── Directories that are never content pages ──────────────────────────────────
const SYSTEM_DIRS = new Set([
  'node_modules', '.next',
  '(admin)', 'api', 'feeds',
  'rss.xml', 'news-sitemap.xml',
  'saved', 'history', 'search',
]);

// ── Patterns that mean a page is already a DB-backed stub ────────────────────
const STUB_MARKERS = [
  'WikiArticle', 'NewsArticleDB', 'JackArticleDB', 'ArticlePageDB',
];

// ── Scan all content page.tsx files ──────────────────────────────────────────
function scanPages(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SYSTEM_DIRS.has(entry.name)) continue;
      results.push(...scanPages(full));
    } else if (entry.name === 'page.tsx') {
      if (path.dirname(full) === APP_DIR) continue; // skip home page
      const source = fs.readFileSync(full, 'utf-8');
      if (!source.includes('export const metadata') && !STUB_MARKERS.some(m => source.includes(m))) continue;
      results.push(full);
    }
  }
  return results;
}

// ── Derive Supabase slug from file path ───────────────────────────────────────
// app/trump/foo/page.tsx → trump-foo
function slugFromPath(filePath: string): string {
  const rel = path.relative(APP_DIR, path.dirname(filePath));
  return rel.replace(/\\/g, '/').replace(/\//g, '-');
}

// ── Derive route path from file path ─────────────────────────────────────────
// app/trump/foo/page.tsx → /trump/foo
function routeFromPath(filePath: string): string {
  const rel = path.relative(APP_DIR, path.dirname(filePath));
  return '/' + rel.replace(/\\/g, '/');
}

// ── Detect file type ──────────────────────────────────────────────────────────
function detectFileState(filePath: string): {
  isStub: boolean;
  component: string;
  lineCount: number;
} {
  const source = fs.readFileSync(filePath, 'utf-8');
  const lines = source.split('\n').length;
  const isStub = STUB_MARKERS.some(m => source.includes(m)) || lines < 80;

  let component = 'Unknown';
  if (source.includes('JackArticleDB') || source.includes('JackArticle')) component = 'JackArticle';
  else if (source.includes('NewsArticleDB') || (source.includes('NewsArticle') && !source.includes('NewsArticleSchema'))) component = 'NewsArticle';
  else if (source.includes('ArticlePageDB') || source.includes('ArticlePage')) component = 'ArticlePage';
  else if (source.includes('WikiArticle')) component = 'WikiArticle (legacy)';
  else if (source.includes('BlogSeoAtx')) component = 'BlogSeoAtx';

  return { isStub, component, lineCount: lines };
}

// ── ANSI color helpers ────────────────────────────────────────────────────────
const c = {
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  red:   (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow:(s: string) => `\x1b[33m${s}\x1b[0m`,
  cyan:  (s: string) => `\x1b[36m${s}\x1b[0m`,
  gray:  (s: string) => `\x1b[90m${s}\x1b[0m`,
  bold:  (s: string) => `\x1b[1m${s}\x1b[0m`,
  dim:   (s: string) => `\x1b[2m${s}\x1b[0m`,
};

async function main() {
  console.log(c.bold('\n📊  ObjectWire — Content Sync Status\n'));
  console.log(c.gray('   Scanning pages, registry, and Supabase...\n'));

  // 1. Scan all pages
  const allPages = scanPages(APP_DIR);

  // 2. Load content-registry slugs
  const registryPath = path.resolve(process.cwd(), 'lib/content-registry.ts');
  const registrySource = fs.readFileSync(registryPath, 'utf-8');
  const registrySlugs = new Set<string>();
  // Match both slug formats: "/trump/foo" and "trump-foo"
  const slugMatches = registrySource.matchAll(/slug:\s*["'`](\/[^"'`]+)["'`]/g);
  for (const m of slugMatches) {
    registrySlugs.add(m[1]); // e.g. "/trump/foo"
    // Also add dash format for cross-matching
    registrySlugs.add(m[1].replace(/^\//, '').replace(/\//g, '-')); // "trump-foo"
  }

  // 3. Query Supabase — all three tables
  const [jacksRes, articlesRes, pagesRes] = await Promise.all([
    supabase.from('jack_articles').select('slug'),
    supabase.from('articles').select('slug'),
    supabase.from('article_pages').select('slug'),
  ]);

  const supabaseSlugs = new Set<string>();
  for (const row of jacksRes.data ?? []) supabaseSlugs.add(row.slug);
  for (const row of articlesRes.data ?? []) supabaseSlugs.add(row.slug);
  for (const row of pagesRes.data ?? []) supabaseSlugs.add(row.slug);

  if (jacksRes.error) console.error(c.red('  jack_articles error: ' + jacksRes.error.message));
  if (articlesRes.error) console.error(c.red('  articles error: ' + articlesRes.error.message));
  if (pagesRes.error) console.error(c.red('  article_pages error: ' + pagesRes.error.message));

  // 4. Build rows
  type Row = {
    filePath: string;
    route: string;
    slug: string;
    isStub: boolean;
    component: string;
    lineCount: number;
    inRegistry: boolean;
    inSupabase: boolean;
  };

  const rows: Row[] = [];
  for (const filePath of allPages) {
    const route = routeFromPath(filePath);
    const slug = slugFromPath(filePath);

    // Apply CLI filters
    if (sectionFilter && !route.startsWith(`/${sectionFilter}`)) continue;

    const { isStub, component, lineCount } = detectFileState(filePath);

    const inRegistry =
      registrySlugs.has(route) ||
      registrySlugs.has(slug);

    const inSupabase = supabaseSlugs.has(slug);

    rows.push({ filePath, route, slug, isStub, component, lineCount, inRegistry, inSupabase });
  }

  // Apply --stubs-only / --missing-only filters
  const filtered = rows.filter(r => {
    if (stubsOnly && !r.isStub) return false;
    if (missingOnly && r.inRegistry && r.inSupabase) return false;
    return true;
  });

  // 5. Print table header
  const COL_PATH = 58;
  const COL_FILE = 7;
  const COL_LINES = 6;
  const COL_COMP = 14;
  const COL_REG  = 10;
  const COL_SB   = 10;

  const header = [
    'ROUTE'.padEnd(COL_PATH),
    'FILE'.padEnd(COL_FILE),
    'LINES'.padEnd(COL_LINES),
    'COMPONENT'.padEnd(COL_COMP),
    'REGISTRY'.padEnd(COL_REG),
    'SUPABASE'.padEnd(COL_SB),
  ].join('  ');

  console.log(c.bold(header));
  console.log(c.gray('─'.repeat(header.length)));

  let countStubs = 0, countFull = 0, countUnregistered = 0, countNoSupabase = 0;

  for (const r of filtered) {
    const fileLabel = r.isStub ? c.cyan('STUB') : c.yellow('FULL');
    const regLabel  = r.inRegistry ? c.green('✅') : c.red('❌ missing');
    // Supabase only matters for stubs (full files haven't been migrated yet)
    const sbLabel   = r.isStub
      ? (r.inSupabase ? c.green('✅') : c.red('❌ missing'))
      : c.gray('—');

    const routeTrunc = r.route.length > COL_PATH
      ? '...' + r.route.slice(-(COL_PATH - 3))
      : r.route;

    console.log([
      routeTrunc.padEnd(COL_PATH),
      fileLabel.padEnd(COL_FILE + 10), // +10 for ANSI escape codes
      String(r.lineCount).padEnd(COL_LINES),
      r.component.padEnd(COL_COMP),
      regLabel.padEnd(COL_REG + 10),
      sbLabel.padEnd(COL_SB + 10),
    ].join('  '));

    if (r.isStub) countStubs++; else countFull++;
    if (!r.inRegistry) countUnregistered++;
    if (r.isStub && !r.inSupabase) countNoSupabase++;
  }

  // 6. Summary
  console.log(c.gray('\n' + '─'.repeat(header.length)));
  console.log(c.bold(`\n  Total pages scanned : ${rows.length}`));
  console.log(`  STUB  (DB-backed)   : ${c.cyan(String(countStubs))}`);
  console.log(`  FULL  (inline)      : ${c.yellow(String(countFull))}`);
  console.log(`  ❌ Unregistered     : ${countUnregistered > 0 ? c.red(String(countUnregistered)) : c.green('0')}`);
  console.log(`  ❌ Missing Supabase : ${countNoSupabase > 0 ? c.red(String(countNoSupabase)) : c.green('0')}`);

  if (countUnregistered > 0) {
    console.log(c.yellow('\n  ⚠️  Run: npx tsx --env-file=.env.local scripts/sync-registry.ts --write'));
  }
  if (countNoSupabase > 0) {
    console.log(c.yellow('  ⚠️  Run: npm run wiki:migrate -- --file <path> for each missing stub'));
  }
  if (countUnregistered === 0 && countNoSupabase === 0) {
    console.log(c.green('\n  ✅  All systems in sync!\n'));
  } else {
    console.log('');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
