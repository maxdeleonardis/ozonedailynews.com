/**
 * inject-og-twitter.ts
 * Injects openGraph + twitter blocks into page.tsx files that have metadata
 * but no openGraph block. Derives values from existing title/description.
 *
 * Usage:
 *   npx tsx scripts/inject-og-twitter.ts           (dry run)
 *   npx tsx scripts/inject-og-twitter.ts --write   (apply changes)
 */

import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const WRITE = process.argv.includes('--write');
const ROOT = path.resolve(__dirname, '..');

function extractField(content: string, field: 'title' | 'description'): string {
  // Match: title: "...", or title: `...`,  (possibly multiline for description)
  const singleLine = new RegExp(`${field}:\\s*['"\`]([^'"\`]+)['"\`]`);
  const multiLine = new RegExp(`${field}:\\s*\\n?\\s*['"\`]([\\s\\S]+?)['"\`]\\s*,`);
  const m = content.match(singleLine) || content.match(multiLine);
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
}

function extractCanonical(content: string): string {
  const m = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
  return m ? m[1] : '';
}

function inferSection(filePath: string): string {
  const parts = filePath.replace(/\\/g, '/').split('/');
  // parts[0] is 'app', parts[1] is the top-level folder
  const top = parts[1] || '';
  const sectionMap: Record<string, string> = {
    'video-games': 'Gaming', gaming: 'Gaming', crypto: 'Crypto',
    finance: 'Finance', tech: 'Tech', technology: 'Tech',
    entertainment: 'Entertainment', politics: 'Politics',
    world: 'World', sports: 'Sports', science: 'Science',
    culture: 'Culture', influencer: 'Influencer',
    news: 'News', about: 'About', authors: 'About',
    'winter-olympics': 'Sports', 'world-cup': 'Sports',
    'open-ai': 'Tech', nvidia: 'Tech', google: 'Tech',
    apple: 'Tech', microsoft: 'Tech', meta: 'Tech',
    amazon: 'Tech', github: 'Tech',
  };
  return sectionMap[top] || 'News';
}

function buildOGBlock(title: string, description: string, canonical: string, section: string): string {
  // Truncate description to ~160 chars for OG
  let ogDesc = description;
  if (ogDesc.length > 160) {
    const cut = ogDesc.slice(0, 160);
    const last = cut.lastIndexOf(' ');
    ogDesc = last > 120 ? cut.slice(0, last) : cut;
    ogDesc = ogDesc.replace(/\s*[,;]\s*$/, '');
  }

  const twitterTitle = title.length <= 70 ? title : (() => {
    const cut = title.slice(0, 70);
    const last = cut.lastIndexOf(' ');
    return last > 50 ? cut.slice(0, last) : cut;
  })();

  const twitterDesc = ogDesc.length <= 200 ? ogDesc : ogDesc.slice(0, 197) + '...';

  return `  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(ogDesc)},
    type: 'article',
    url: ${canonical ? JSON.stringify(canonical) : "'https://www.objectwire.org'"},
    siteName: 'ObjectWire',
    section: ${JSON.stringify(section)},
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(twitterTitle)},
    description: ${JSON.stringify(twitterDesc)},
  },`;
}

function processFile(filePath: string): { changed: boolean; reason?: string } {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');

  // Skip if already has openGraph or uses generateArticleMetadata
  if (content.includes('openGraph:') || content.includes('generateArticleMetadata')) {
    return { changed: false };
  }

  // Must have metadata export
  if (!content.includes('export const metadata')) {
    return { changed: false };
  }

  const title = extractField(content, 'title');
  const description = extractField(content, 'description');
  const canonical = extractCanonical(content);
  const section = inferSection(relPath);

  if (!title || !description) {
    return { changed: false, reason: `no title/description found in ${relPath}` };
  }

  const ogBlock = buildOGBlock(title, description, canonical, section);

  // Insert before the closing }; of the metadata block
  // Strategy: find the last `};` that closes metadata — insert OG block before it
  // We look for `alternates: { ... },` or `keywords: [ ... ],` as the last field before `};`
  // Simplest: find the `};` that ends the metadata Metadata = { block

  // Find position of closing `};` of metadata
  const metaStart = content.indexOf('export const metadata');
  if (metaStart === -1) return { changed: false };

  // Find the matching closing `};` after metaStart
  let depth = 0;
  let metaEnd = -1;
  let inString = false;
  let stringChar = '';
  for (let i = metaStart; i < content.length; i++) {
    const ch = content[i];
    if (!inString) {
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          // Check if next non-whitespace is `;`
          let j = i + 1;
          while (j < content.length && (content[j] === ' ' || content[j] === '\r')) j++;
          if (content[j] === ';' || content[j] === '\n') {
            metaEnd = i;
            break;
          }
        }
      } else if (ch === '"' || ch === "'" || ch === '`') {
        inString = true;
        stringChar = ch;
      }
    } else {
      if (ch === stringChar && content[i - 1] !== '\\') {
        inString = false;
      }
    }
  }

  if (metaEnd === -1) {
    return { changed: false, reason: `could not find metadata end in ${relPath}` };
  }

  // Get indentation of closing brace
  const lineStart = content.lastIndexOf('\n', metaEnd);
  const indent = content.slice(lineStart + 1, metaEnd);

  // Insert OG block before the closing brace
  const newContent = content.slice(0, metaEnd) + ogBlock + '\n' + indent + content.slice(metaEnd);

  if (WRITE) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }

  return { changed: true };
}

function main() {
  const files = globSync('app/**/page.tsx', { cwd: ROOT });
  let fixed = 0;
  let skipped = 0;
  let errors: string[] = [];

  for (const relFile of files) {
    const fullPath = path.join(ROOT, relFile);
    const result = processFile(fullPath);
    if (result.changed) {
      fixed++;
      if (!WRITE) console.log(`  [DRY] Would add openGraph+twitter: ${relFile}`);
    } else if (result.reason) {
      errors.push(result.reason);
    } else {
      skipped++;
    }
  }

  console.log(`\n${WRITE ? 'Applied' : 'Would apply'}: ${fixed} files`);
  console.log(`Skipped (already has OG): ${skipped}`);
  if (errors.length > 0) {
    console.log(`Warnings: ${errors.length}`);
    errors.forEach(e => console.log(`  - ${e}`));
  }
}

main();
