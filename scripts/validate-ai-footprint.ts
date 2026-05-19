/**
 * validate-ai-footprint.ts
 *
 * Prebuild AI-generated content lint guard.
 * Runs as part of `npm run prebuild` after validate-eeat.ts.
 *
 * Scans ALL published article content for banned LLM-generated phrases that
 * Google's Helpful Content classifier uses as negative signals. These phrases
 * are listed publicly in OzoneNews editorial standards (/editorial-standards).
 *
 * Scan targets:
 *   content/static/**\/*.json  — searches all fields (catches content_html, subtitle, etc.)
 *   app/**\/*.tsx               — searches article JSX body prose strings
 *
 * Exit codes:
 *   0  No banned phrases found
 *   1  One or more banned phrases found (fails the build)
 *
 * Override (emergency deploys only — never bypass for content reasons):
 *   OZONENEWS_OVERRIDE=true npm run build
 *
 * Usage:
 *   npm run validate:ai-footprint        # Manual run
 *   (also runs automatically via prebuild)
 */

import * as fs from 'fs';
import * as path from 'path';
import { globSync } from 'glob';

// ── Config ────────────────────────────────────────────────────────────────────

const OVERRIDE = process.env.OZONENEWS_OVERRIDE === 'true';

/**
 * Banned LLM-generated phrases. Case-insensitive match.
 * Source: /editorial-standards Section 0 — Information Gain requirement.
 * Any of these in published content = automatic build failure.
 */
const BANNED_PHRASES: string[] = [
  'In conclusion',
  'It is important to note',
  'It is important to remember',
  'Furthermore, it is crucial',
  'Furthermore, it is important',
  "In today's fast-paced world",
  'In the ever-evolving landscape',
  'It is worth noting that',
  'Moreover, it should be noted',
  'Navigating the complex',
  'Delve into',
  'In summary',
];

// Build a single case-insensitive regex that matches any banned phrase.
// Using alternation is faster than running 12 separate regex passes per file.
const BANNED_RE = new RegExp(
  BANNED_PHRASES.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
  'gi',
);

// ── ANSI helpers ─────────────────────────────────────────────────────────────
const c = {
  red:    (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  green:  (s: string) => `\x1b[32m${s}\x1b[0m`,
  cyan:   (s: string) => `\x1b[36m${s}\x1b[0m`,
  bold:   (s: string) => `\x1b[1m${s}\x1b[0m`,
  gray:   (s: string) => `\x1b[90m${s}\x1b[0m`,
};

// ── Types ─────────────────────────────────────────────────────────────────────

interface Hit {
  file: string;
  line: number;
  phrase: string;
  context: string;
}

/**
 * Files excluded from AI footprint scanning.
 * These are policy/trust pages that deliberately quote the banned phrases
 * in order to document them — not article content.
 */
const EXCLUDED_PATHS: string[] = [
  'app/editorial-standards',
  'app/corrections',
  'app/about',
  'app/contact',
  'scripts/',
];

/**
 * Returns true if this file path should be skipped.
 */
function isExcluded(filePath: string): boolean {
  const rel = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
  return EXCLUDED_PATHS.some((ex) => rel.startsWith(ex));
}

// ── Scan helpers ──────────────────────────────────────────────────────────────

/**
 * Scan a single file's raw text for banned phrases.
 * Returns one Hit per match (multiple matches per line are each reported).
 */
function scanFile(filePath: string): Hit[] {
  const hits: Hit[] = [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  const lines = raw.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Reset lastIndex before each line (global flag retains state)
    BANNED_RE.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = BANNED_RE.exec(line)) !== null) {
      const start = Math.max(0, match.index - 40);
      const end = Math.min(line.length, match.index + match[0].length + 40);
      const snippet = line.slice(start, end).trim().replace(/\s+/g, ' ');
      hits.push({
        file: filePath,
        line: i + 1,
        phrase: match[0],
        context: `...${snippet}...`,
      });
    }
  }
  return hits;
}

/**
 * Resolve glob patterns relative to the project root.
 * Uses posix-style forward slashes for glob compatibility on Windows.
 */
function resolveGlob(pattern: string): string[] {
  const root = process.cwd();
  // globSync requires forward slashes on Windows
  const abs = path.join(root, pattern).replace(/\\/g, '/');
  return globSync(abs, { nodir: true });
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main(): void {
  console.log(c.bold('\n── OzoneNews AI Footprint Validator ──────────────────────────'));
  console.log(c.gray(`Scanning for ${BANNED_PHRASES.length} banned LLM phrases in article content...\n`));

  if (OVERRIDE) {
    console.log(c.yellow('⚠  OZONENEWS_OVERRIDE=true — skipping AI footprint check (emergency override active)\n'));
    process.exit(0);
  }

  const allHits: Hit[] = [];
  let filesScanned = 0;

  // 1. Static JSON content store
  const jsonFiles = resolveGlob('content/static/**/*.json');
  for (const file of jsonFiles) {
    if (isExcluded(file)) continue;
    const hits = scanFile(file);
    allHits.push(...hits);
    filesScanned++;
  }

  // 2. App TSX files (article page JSX prose, not just metadata)
  const tsxFiles = resolveGlob('app/**/*.tsx');
  for (const file of tsxFiles) {
    if (isExcluded(file)) continue;
    const hits = scanFile(file);
    allHits.push(...hits);
    filesScanned++;
  }

  console.log(c.gray(`Scanned ${filesScanned} files (${jsonFiles.length} JSON + ${tsxFiles.length} TSX)\n`));

  if (allHits.length === 0) {
    console.log(c.green('✓  No banned LLM phrases found. AI footprint clean.\n'));
    process.exit(0);
  }

  // Group hits by file for readable output
  const byFile = new Map<string, Hit[]>();
  for (const hit of allHits) {
    const rel = path.relative(process.cwd(), hit.file);
    if (!byFile.has(rel)) byFile.set(rel, []);
    byFile.get(rel)!.push(hit);
  }

  console.log(c.red(c.bold(`✗  ${allHits.length} banned LLM phrase(s) found in ${byFile.size} file(s):`)));
  console.log(c.gray('──────────────────────────────────────────────────────────────\n'));

  for (const [file, hits] of byFile.entries()) {
    console.log(c.cyan(c.bold(`  ${file}`)));
    for (const hit of hits) {
      console.log(`    ${c.gray(`L${hit.line}`)}  ${c.red(`"${hit.phrase}"`)}`);
      console.log(`          ${c.gray(hit.context)}`);
    }
    console.log();
  }

  console.log(c.red(c.bold('BUILD BLOCKED — Remove the phrases above before publishing.')));
  console.log(c.gray('These phrases are listed in /editorial-standards Section 0.'));
  console.log(c.gray('Emergency override: OZONENEWS_OVERRIDE=true npm run build\n'));

  process.exit(1);
}

main();
