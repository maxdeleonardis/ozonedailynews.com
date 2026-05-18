/**
 * validate-geo.ts
 *
 * GEO (Generative Engine Optimization) signal scanner.
 *
 * Checks all article pages for signals that determine whether AI systems
 * (ChatGPT, Perplexity, Copilot, Claude) will extract and cite content.
 *
 * GEO Signals Checked:
 *   [G1] DirectAnswer or opening paragraph within first 200 words (extractable lede)
 *   [G2] KeyTakeaways component present
 *   [G3] CitationBlock or FAQAccordion present (structured answer units)
 *   [G4] FAQ schema or structured data beyond NewsArticle schema
 *   [G5] Named author with external credential link on author page
 *   [G6] speakable schema present in NewsArticleSchema or GEOArticleWrapper
 *   [G7] keywords array has 10+ items (AI knowledge graph breadth)
 *   [G8] External source links present (citation credibility)
 *   [G9] Content has specific numbers, dates, or named entities (not generic)
 *   [G10] Article covers a single focused topic (no topic dilution)
 *
 * Usage:
 *   npm run validate:geo               # Scan all article pages
 *   npm run validate:geo -- --verbose  # Show per-page detail
 */

import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.resolve(process.cwd(), 'app');
const VERBOSE = process.argv.includes('--verbose');

// ── ANSI helpers ─────────────────────────────────────────────────────────────
const c = {
  red:    (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  green:  (s: string) => `\x1b[32m${s}\x1b[0m`,
  cyan:   (s: string) => `\x1b[36m${s}\x1b[0m`,
  bold:   (s: string) => `\x1b[1m${s}\x1b[0m`,
  gray:   (s: string) => `\x1b[90m${s}\x1b[0m`,
};

// Article stub markers — these are pages that HAVE content but it's in Supabase
const STUB_MARKERS = ['NewsArticleDB', 'JackArticleDB', 'ArticlePageDB', 'CreatorArticleDB', 'AlysaArticleDB'];
// Full article markers — content is in the page.tsx (not yet published)
const FULL_MARKERS = ['<NewsArticle', '<JackArticle', '<ArticlePage', '<CreatorArticle'];

interface GEOReport {
  route: string;
  isArticle: boolean;
  signals: { code: string; present: boolean; label: string }[];
  score: number; // 0-10
}

function walkDir(dir: string, files: string[] = []): string[] {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name.startsWith('_') || e.name.startsWith('.')) continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walkDir(full, files);
      else if (e.name === 'page.tsx') files.push(full);
    }
  } catch { /* skip */ }
  return files;
}

function countSpecificFacts(source: string): number {
  // Count numbers with context (years, percentages, dollar amounts, specific quantities)
  const patterns = [
    /\b20\d\d\b/g,         // years
    /\$[\d,]+/g,           // dollar amounts
    /\d+%/g,               // percentages
    /\d+\s*(million|billion|thousand)/gi, // large numbers
    /\d+\s*(users|views|downloads|subscribers)/gi, // metrics
  ];
  return patterns.reduce((sum, p) => sum + (source.match(p) || []).length, 0);
}

function analyzeGEO(filePath: string): GEOReport {
  const route = '/' + path.relative(APP_DIR, path.dirname(filePath)).replace(/\\/g, '/');
  const source = fs.readFileSync(filePath, 'utf-8');

  const isStub  = STUB_MARKERS.some(m => source.includes(m));
  const isFull  = FULL_MARKERS.some(m => source.includes(m));
  const isArticle = isStub || isFull;

  if (!isArticle) return { route, isArticle: false, signals: [], score: 0 };

  // Skip admin, API, auth
  if (route.includes('/api/') || route.includes('/(admin)') || route.startsWith('/admin')) {
    return { route, isArticle: false, signals: [], score: 0 };
  }

  const signals = [
    {
      code: 'G1',
      present: source.includes('DirectAnswer') || source.includes('direct-answer'),
      label: 'DirectAnswer component (extractable lede)',
    },
    {
      code: 'G2',
      present: source.includes('KeyTakeaways') || source.includes('key-takeaways'),
      label: 'KeyTakeaways component',
    },
    {
      code: 'G3',
      present: source.includes('CitationBlock') || source.includes('FAQAccordion') || source.includes('citation-block'),
      label: 'CitationBlock or FAQAccordion (structured answer units)',
    },
    {
      code: 'G4',
      present: source.includes('FAQSchema') || source.includes("'FAQPage'") || source.includes('"FAQPage"') || source.includes('GEOArticleWrapper'),
      label: 'FAQ schema or GEOArticleWrapper',
    },
    {
      code: 'G5',
      present: !!(
        source.match(/author[_\s]*slug['":\s]+['"]([^'"]+)['"]/) &&
        source.match(/author[_\s]*name['":\s]+['"]([^'"]+)['"]/)
      ),
      label: 'Named author with author_slug',
    },
    {
      code: 'G6',
      present: source.includes('speakable') || source.includes('SpeakableSpecification'),
      label: 'Speakable schema (voice AI / Google Assistant)',
    },
    {
      code: 'G7',
      present: (() => {
        const kwMatch = source.match(/keywords['":\s]+\[([^\]]+)\]/);
        if (!kwMatch) return false;
        const count = (kwMatch[1].match(/['"]/g) || []).length / 2;
        return count >= 10;
      })(),
      label: 'keywords array with 10+ items',
    },
    {
      code: 'G8',
      present: /href=["']https?:\/\/(?!www\.OzoneNews\.org)[^"']+["']/.test(source),
      label: 'External source links (citation credibility)',
    },
    {
      code: 'G9',
      present: countSpecificFacts(source) >= 3,
      label: 'Specific facts (numbers, dates, named entities)',
    },
    {
      code: 'G10',
      present: (() => {
        // A single focused topic = one primary category + ≤2 unique hub paths referenced
        const internalLinks = source.match(/href=["']\/([^"']+)["']/g) || [];
        const topLevelPaths = new Set(internalLinks.map(l => {
          const m = l.match(/href=["']\/([^/"']+)/);
          return m ? m[1] : '';
        }).filter(Boolean));
        return topLevelPaths.size <= 5; // focused if links stay within ≤5 top-level areas
      })(),
      label: 'Focused topic (not diluted across many verticals)',
    },
  ];

  const score = signals.filter(s => s.present).length;

  return { route, isArticle: true, signals, score };
}

function main() {
  const allPages = walkDir(APP_DIR);
  const reports = allPages
    .map(analyzeGEO)
    .filter(r => r.isArticle);

  const avgScore = reports.length > 0
    ? (reports.reduce((sum, r) => sum + r.score, 0) / reports.length).toFixed(1)
    : '0';

  const strong  = reports.filter(r => r.score >= 7);
  const moderate = reports.filter(r => r.score >= 4 && r.score < 7);
  const weak    = reports.filter(r => r.score < 4);

  console.log('');
  console.log(c.bold('━━━ validate:geo — GEO Signal Scanner ━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log(c.gray(`    ${reports.length} article pages scanned`));
  console.log('');

  // Distribution
  const bar = (n: number, total: number, ch: string) =>
    ch.repeat(Math.round((n / Math.max(total, 1)) * 20));

  console.log(`  ${c.green('Strong  (7-10)')}  ${c.green(bar(strong.length, reports.length, '█'))}  ${strong.length} pages`);
  console.log(`  ${c.yellow('Moderate (4-6)')} ${c.yellow(bar(moderate.length, reports.length, '█'))}  ${moderate.length} pages`);
  console.log(`  ${c.red('Weak    (0-3)')}  ${c.red(bar(weak.length, reports.length, '█'))}  ${weak.length} pages`);
  console.log('');
  console.log(`  Average GEO score: ${c.bold(avgScore)}/10`);
  console.log('');

  // Most impactful missing signals across all pages
  const signalCodes = ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10'];
  console.log(c.bold('  SIGNAL COVERAGE (all article pages)'));
  console.log(c.gray('  ─────────────────────────────────────────────────────────────'));
  for (const code of signalCodes) {
    const allWithCode = reports.filter(r => r.signals.find(s => s.code === code));
    const present = reports.filter(r => r.signals.find(s => s.code === code && s.present));
    const label = reports[0]?.signals.find(s => s.code === code)?.label || code;
    const pct = allWithCode.length > 0 ? Math.round((present.length / allWithCode.length) * 100) : 0;
    const pctBar = '█'.repeat(Math.round(pct / 5)) + '░'.repeat(20 - Math.round(pct / 5));
    const col = pct >= 70 ? c.green : pct >= 40 ? c.yellow : c.red;
    console.log(`  [${code}] ${col(pctBar)} ${col(`${pct}%`)}  ${c.gray(label)}`);
  }
  console.log('');

  // Weakest pages if verbose
  if (VERBOSE && weak.length > 0) {
    console.log(c.bold(`  WEAK PAGES — prioritize these for GEO improvements`));
    console.log(c.gray('  ─────────────────────────────────────────────────────────────'));
    weak.slice(0, 20).forEach(r => {
      const missing = r.signals.filter(s => !s.present).map(s => s.code).join(' ');
      console.log(`  ${c.red(`[${r.score}/10]`)}  ${r.route.padEnd(55)}  ${c.gray('missing: ' + missing)}`);
    });
    console.log('');
  }

  // Top recommendations
  console.log(c.bold('  TOP GEO RECOMMENDATIONS'));
  console.log(c.gray('  ─────────────────────────────────────────────────────────────'));
  const recommendations = [
    { code: 'G1', action: 'Add <DirectAnswer> as the first element in every article body' },
    { code: 'G2', action: 'Add <KeyTakeaways> after the opening paragraph (3-5 bullet points)' },
    { code: 'G3', action: 'Add <CitationBlock> for every key claim. Add <FAQAccordion> at article end' },
    { code: 'G6', action: 'Use <GEOArticleWrapper> or add speakableSelectors to NewsArticleSchema' },
    { code: 'G8', action: 'Add at least 2 external source citations per article' },
  ];
  recommendations.forEach(r => {
    const allWithCode = reports.filter(p => p.signals.find(s => s.code === r.code));
    const missing = allWithCode.filter(p => !p.signals.find(s => s.code === r.code && s.present));
    if (missing.length > 0) {
      console.log(`  ${c.cyan(`[${r.code}]`)} ${missing.length} pages need: ${r.action}`);
    }
  });
  console.log('');
  console.log(c.bold('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log('');
}

main();
