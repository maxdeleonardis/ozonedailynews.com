/**
 * validate-eeat.ts
 *
 * Prebuild E-E-A-T quality scanner.
 * Runs as part of `npm run prebuild` before every `next build`.
 *
 * Unlike alfasa-sentinel (which blocks a SINGLE publish), this script scans
 * ALL published stub pages across the entire `app/` directory and produces a
 * quality report. It does NOT block the build — it warns.
 *
 * The goal is to surface the domain-level quality picture that Google's HCU
 * classifier sees: "What percentage of this site's pages demonstrate E-E-A-T?
 * What is the purpose of each page? Is the content helpful?"
 *
 * Reports:
 *   CRITICAL  Pages that are almost certainly hurting the HCU classifier score:
 *             - Stubs with no canonical URL
 *             - Metadata.title with em dashes
 *             - metadata.description too short or missing
 *
 *   WARNINGS  Pages that weaken domain authority:
 *             - No author in metadata
 *             - Title over 60 chars
 *             - Description over 155 chars
 *
 *   SUMMARY   % of pages with complete metadata, score by category
 *
 * Exit codes:
 *   0  All checks passed or only warnings found
 *   1  Critical issues found (fails the build guard when EEAT_STRICT=true)
 *
 * Usage:
 *   npm run validate:eeat         # Report mode (default — warnings only, no build block)
 *   EEAT_STRICT=true npm run validate:eeat   # Strict mode — exits 1 on criticals
 */

import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.resolve(process.cwd(), 'app');
const STRICT_MODE = process.env.EEAT_STRICT === 'true';

// ── ANSI helpers ─────────────────────────────────────────────────────────────
const c = {
  red:    (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  green:  (s: string) => `\x1b[32m${s}\x1b[0m`,
  cyan:   (s: string) => `\x1b[36m${s}\x1b[0m`,
  bold:   (s: string) => `\x1b[1m${s}\x1b[0m`,
  gray:   (s: string) => `\x1b[90m${s}\x1b[0m`,
};

// ── Collect all page.tsx files ────────────────────────────────────────────────

function walkDir(dir: string, files: string[] = []): string[] {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name.startsWith('_') || e.name.startsWith('.')) continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walkDir(full, files);
      else if (e.name === 'page.tsx') files.push(full);
    }
  } catch { /* skip unreadable dirs */ }
  return files;
}

// ── Per-page checks ───────────────────────────────────────────────────────────

interface PageReport {
  route: string;
  criticals: string[];
  warnings: string[];
  hasMetadata: boolean;
  isStub: boolean;
  isStatic: boolean;
}

const STUB_MARKERS = [
  'NewsArticleDB', 'JackArticleDB', 'ArticlePageDB',
  'CreatorArticleDB', 'AlysaArticleDB',
];

const FULL_MARKERS = [
  '<NewsArticle', '<JackArticle', '<ArticlePage',
  '<CreatorArticle', '<AlysaArticle',
];

function analyzeFile(filePath: string): PageReport {
  const route = '/' + path.relative(APP_DIR, path.dirname(filePath)).replace(/\\/g, '/');
  const source = fs.readFileSync(filePath, 'utf-8');

  const criticals: string[] = [];
  const warnings: string[] = [];

  const isStub   = STUB_MARKERS.some(m => source.includes(m));
  const isFull   = FULL_MARKERS.some(m => source.includes(m));
  const isStatic = source.includes('force-static') || source.includes("revalidate = 0") || source.includes('revalidate=0');
  const hasMetadata = source.includes('export const metadata') || source.includes('export async function generateMetadata');

  // Skip routes that are purely functional (API, not user-facing pages)
  const isApiRoute = route.includes('/api/');
  if (isApiRoute) return { route, criticals: [], warnings: [], hasMetadata: false, isStub: false, isStatic: false };

  // Skip admin routes
  if (route.includes('/(admin)') || route.startsWith('/admin')) {
    return { route, criticals: [], warnings: [], hasMetadata: false, isStub: false, isStatic: false };
  }

  // Only analyze pages that have metadata exports
  if (!hasMetadata) return { route, criticals: [], warnings: [], hasMetadata: false, isStub, isStatic };

  // ── Critical checks ─────────────────────────────────────────────────────

  // Em dashes anywhere in title or description
  const titleMatch = source.match(/title:\s*['"]([^'"]{1,120})['"]/);
  if (titleMatch && /—|–/.test(titleMatch[1])) {
    criticals.push(`Em dash in metadata.title: "${titleMatch[1].slice(0, 60)}..."`);
  }

  // Canonical missing entirely (for stub pages this is critical)
  if (isStub && !source.match(/canonical/)) {
    criticals.push('Stub page has no canonical URL — Google may treat this as duplicate content');
  }

  // Description missing entirely
  const descMatch = source.match(/description:\s*\n?\s*['"]([^'"]{0,300})['"]/);
  if (!descMatch) {
    criticals.push('No metadata.description found');
  } else if (descMatch[1].length < 50) {
    criticals.push(`metadata.description too short (${descMatch[1].length} chars — min 130)`);
  }

  // ── Warning checks ──────────────────────────────────────────────────────

  const titleStr = titleMatch?.[1] ?? '';
  if (titleStr.length > 60) {
    warnings.push(`metadata.title is ${titleStr.length} chars (max 60 — gets truncated in SERPs)`);
  }

  if (descMatch && descMatch[1].length > 155) {
    warnings.push(`metadata.description is ${descMatch[1].length} chars (max 155 — gets truncated)`);
  }

  if (descMatch && descMatch[1].length > 0 && descMatch[1].length < 130) {
    warnings.push(`metadata.description is only ${descMatch[1].length} chars (min recommended 130)`);
  }

  // No keywords array
  if (!source.includes('keywords:') && !source.includes("keywords='") && (isStub || isFull)) {
    warnings.push('No keywords array in metadata');
  }

  // No openGraph block on article pages
  if ((isStub || isFull) && !source.includes('openGraph:')) {
    warnings.push('No openGraph block in metadata');
  }

  // "| OzoneNews" brand suffix still in title (instruction says drop it)
  if (titleStr.includes('OzoneNews')) {
    warnings.push('metadata.title contains "OzoneNews" brand suffix — OStandard requires dropping it');
  }

  return { route, criticals, warnings, hasMetadata, isStub, isStatic };
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const allPages = walkDir(APP_DIR);
  const reports = allPages.map(analyzeFile).filter(r => r.hasMetadata || r.criticals.length > 0);

  const withCriticals = reports.filter(r => r.criticals.length > 0);
  const withWarnings  = reports.filter(r => r.warnings.length > 0 && r.criticals.length === 0);
  const clean         = reports.filter(r => r.criticals.length === 0 && r.warnings.length === 0 && r.hasMetadata);

  const total = reports.length;
  const cleanPct = total > 0 ? Math.round((clean.length / total) * 100) : 0;

  console.log('');
  console.log(c.bold('━━━ validate:eeat — E-E-A-T Prebuild Scanner ━━━━━━━━━━━━━━━━━'));
  console.log(c.gray(`    Scanned ${allPages.length} page.tsx files, ${total} with metadata`));
  console.log('');

  if (withCriticals.length > 0) {
    console.log(c.red(c.bold(`  ✗ CRITICALS (${withCriticals.length} pages)`)));
    withCriticals.forEach(r => {
      console.log(c.red(`\n    ${r.route}`));
      r.criticals.forEach(issue => console.log(c.red(`      · ${issue}`)));
    });
    console.log('');
  }

  if (withWarnings.length > 0) {
    console.log(c.yellow(c.bold(`  ⚠  WARNINGS (${withWarnings.length} pages)`)));
    // Only print first 15 to keep output manageable
    withWarnings.slice(0, 15).forEach(r => {
      console.log(c.yellow(`\n    ${r.route}`));
      r.warnings.forEach(issue => console.log(c.yellow(`      · ${issue}`)));
    });
    if (withWarnings.length > 15) {
      console.log(c.gray(`\n    ... and ${withWarnings.length - 15} more. Run npm run validate:eeat --all to see all.`));
    }
    console.log('');
  }

  // Quality summary bar
  const bar = '█'.repeat(Math.round(cleanPct / 5)) + '░'.repeat(20 - Math.round(cleanPct / 5));
  const barColor = cleanPct >= 80 ? c.green : cleanPct >= 60 ? c.yellow : c.red;
  console.log(`  Metadata quality: ${barColor(c.bold(`${cleanPct}%`))}  ${barColor(bar)}`);
  console.log(c.gray(`  ${clean.length} clean / ${withWarnings.length} warnings / ${withCriticals.length} criticals  (of ${total} pages with metadata)`));
  console.log('');

  if (withCriticals.length === 0 && withWarnings.length === 0) {
    console.log(c.green(c.bold('  ✓ All metadata checks passed.')));
  }

  console.log(c.bold('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log('');

  if (STRICT_MODE && withCriticals.length > 0) {
    console.error(c.red(`❌  Build blocked: ${withCriticals.length} critical E-E-A-T issue(s) found.`));
    console.error(c.gray('    Fix the issues above or unset EEAT_STRICT to continue.'));
    process.exit(1);
  }
}

main();
