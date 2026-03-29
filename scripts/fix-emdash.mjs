#!/usr/bin/env node
// =============================================================================
// scripts/fix-emdash.mjs
// =============================================================================
// Removes all em dashes (—) from TypeScript/TSX, Markdown, and SQL files.
// Replacement rules:
//   • Title / meta_title fields / headings  →  " — " becomes " | "
//   • SQL comment lines (--)               →  " — " becomes " - "
//   • Everything else (prose, body)        →  " — " becomes ", "
//
// Skips: node_modules, .next, .git, public, scripts/
//
// Usage:
//   node scripts/fix-emdash.mjs              -- live run
//   node scripts/fix-emdash.mjs --dry-run    -- show changed files, don't write
// =============================================================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DRY_RUN = process.argv.includes('--dry-run');

const SKIP_DIRS = new Set([
  'node_modules', '.next', '.git', 'public', 'scripts',
  '.github', 'Docs', 'data',
]);

// ─── File walker ─────────────────────────────────────────────────────────────

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name), results);
    } else if (entry.isFile() && /\.(ts|tsx|md|sql)$/.test(entry.name)) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

// ─── Line processor ──────────────────────────────────────────────────────────

const EM = '—';
const TITLE_KEY  = /['"]?(title|meta_title)['"]?\s*:/;
const MD_HEADING = /^#{1,6}\s/;
const COMMENT    = /^\s*(\/\/|\/?\*|\{\/\*)/;
const SQL_COMMENT = /^\s*--/;
const REGEX_PAT  = /\/[^/\n]+—[^/\n]+\//; // line contains a JS regex with em dash

function processLine(line, ext) {
  if (!line.includes(EM)) return line;

  // SQL comment lines → single dash (dev comments, not user-facing)
  if (ext === '.sql' && SQL_COMMENT.test(line)) {
    return line.replace(/ — /g, ' - ').replace(/—/g, '-');
  }

  // Never touch JS/TS comment lines or lines containing regex patterns
  if (COMMENT.test(line) || REGEX_PAT.test(line)) return line;

  // Markdown headings → pipe separator
  if (ext === '.md' && MD_HEADING.test(line)) {
    return line.replace(/ — /g, ' | ').replace(/—/g, ' | ');
  }

  // Title-type keys in TS/TSX → use pipe separator
  if (TITLE_KEY.test(line)) {
    return line.replace(/ — /g, ' | ').replace(/—/g, ' | ');
  }

  // Prose / description / body → use comma
  return line.replace(/ — /g, ', ').replace(/—/g, ', ');
}

// ─── File fixer ──────────────────────────────────────────────────────────────

function fixFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  if (!original.includes(EM)) return false;

  const ext = path.extname(filePath);
  const fixed = original.split('\n').map(line => processLine(line, ext)).join('\n');
  if (fixed === original) return false;

  if (!DRY_RUN) fs.writeFileSync(filePath, fixed, 'utf8');
  return true;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const files = walk(ROOT);
let changed = 0;

for (const f of files) {
  if (fixFile(f)) {
    changed++;
    const rel = path.relative(ROOT, f);
    console.log(`  ${DRY_RUN ? '[DRY] ' : ''}✓  ${rel}`);
  }
}

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Fixed em dashes in ${changed} file(s).`);
