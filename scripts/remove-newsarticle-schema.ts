#!/usr/bin/env tsx
/**
 * remove-newsarticle-schema.ts
 *
 * Removes <NewsArticleSchema ... /> JSX blocks from hub pages that don't
 * need them (Hub pages, not article pages). These pages have no article
 * content to describe — they're category/topic index pages.
 *
 * Usage:
 *   npx tsx scripts/remove-newsarticle-schema.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const FILES = [
  'app/bio-hacking/page.tsx',
  'app/microsoft/xbox/page.tsx',
  'app/microsoft/page.tsx',
  'app/rocket-league/page.tsx',
  'app/video-games/rainbow-6-siege/page.tsx',
  'app/video-games/page.tsx',
  'app/fortnite/page.tsx',
];

const ROOT = path.resolve(process.cwd());

function removeNewsArticleSchemaBlock(source: string): string {
  // Find <NewsArticleSchema and remove the whole self-closing tag
  let result = source;

  // Pattern: <NewsArticleSchema\n...optional whitespace + props...\n      />
  // We use a balanced-tag approach: find the opening tag, walk to />
  while (result.includes('<NewsArticleSchema')) {
    const start = result.indexOf('<NewsArticleSchema');
    if (start === -1) break;

    // Find the self-closing end />
    let end = result.indexOf('/>', start);
    if (end === -1) break;
    end += 2; // include the />

    // Also eat a trailing newline if present
    if (result[end] === '\n') end++;

    result = result.slice(0, start) + result.slice(end);
  }

  return result;
}

let changed = 0;

for (const rel of FILES) {
  const filePath = path.join(ROOT, rel);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Not found: ${rel}`);
    continue;
  }

  const original = fs.readFileSync(filePath, 'utf-8');

  // Skip already-clean files
  if (!original.includes('NewsArticleSchema')) {
    console.log(`  ✓ already clean: ${rel}`);
    continue;
  }

  const cleaned = removeNewsArticleSchemaBlock(original);

  if (cleaned === original) {
    console.warn(`  ⚠️  no change made to: ${rel}`);
    continue;
  }

  fs.writeFileSync(filePath, cleaned, 'utf-8');
  console.log(`  ✅ cleaned: ${rel}`);
  changed++;
}

console.log(`\nDone. ${changed} file(s) updated.`);
