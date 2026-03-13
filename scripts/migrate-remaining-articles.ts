#!/usr/bin/env tsx
/**
 * migrate-remaining-articles.ts
 *
 * Migrates the 5 remaining static NewsArticle pages to Supabase and
 * replaces their bodies with thin WikiArticle loaders.
 *
 * Steps per file:
 *  1. Read the page.tsx source
 *  2. Extract metadata (title, description, slug, author, publishedTime)
 *  3. Convert the JSX body to HTML
 *  4. Upsert to Supabase articles table
 *  5. Replace page.tsx body with thin WikiArticle loader (keeps metadata intact)
 *
 * Usage:
 *   npm run wiki:migrate-remaining             — migrate all 5 pages
 *   npm run wiki:migrate-remaining -- --dry-run — preview without writing
 */

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const isDryRun = process.argv.includes('--dry-run');

if (!isDryRun && (!SUPABASE_URL || !SUPABASE_KEY || SUPABASE_URL.includes('your-project'))) {
  console.error('❌  Missing real Supabase credentials in .env.local');
  console.error('    Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = (!isDryRun) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null as any;

// ── Pages to migrate ─────────────────────────────────────────────────────────
const TARGET_FILES = [
  'app/crypto/hbar/rba-cbdc-hashsphere-hedera-project-acacia/page.tsx',
  'app/crypto/news/florida-hb175-stablecoin-law-payment-regulation/page.tsx',
  'app/nvidia/news/nvidia-4-billion-photonics-lumentum-coherent-ai-bottleneck/page.tsx',
  'app/winter-olympics/final-ceremony/page.tsx',
  'app/tech/real-estate/page.tsx',
];

// ── Derive slug from file path ───────────────────────────────────────────────
function slugFromPath(filePath: string): string {
  const rel = path.relative(path.join(process.cwd(), 'app'), path.dirname(filePath));
  return '/' + rel.replace(/\\/g, '/');
}

// ── Extract string from source code ─────────────────────────────────────────
function extractStr(source: string, key: string): string {
  // Match: key = 'value'  key = "value"  key: 'value'  key: "value"
  const pattern = new RegExp(`${key}[\\s:=]+['"\`]([^'"\`\\n]+)['"\`]`);
  const m = source.match(pattern);
  return m ? m[1] : '';
}

// ── Extract metadata object values ──────────────────────────────────────────
function extractMeta(source: string): {
  title: string;
  description: string;
  author: string;
  publishedTime: string;
  slug: string;
} {
  const titleMatch = source.match(/title:\s*['"]([^'"]+)['"]/);
  const descMatch = source.match(/description:\s*\n?\s*['"`]([\s\S]*?)['"`]\s*,/);
  const authorMatch = source.match(/AUTHOR_NAME\s*=\s*['"`]([^'"`]+)['"`]/) ||
                      source.match(/author:\s*['"`]([^'"`]+)['"`]/);
  const timeMatch = source.match(/PUBLISH_ISO\s*=\s*['"`]([^'"`]+)['"`]/) ||
                    source.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/);
  const slugMatch = source.match(/(?:const\s+SLUG|slug)\s*=\s*['"`](\/[^'"`]+)['"`]/);

  return {
    title: titleMatch ? titleMatch[1] : '',
    description: descMatch ? descMatch[1].replace(/\s+/g, ' ').trim() : '',
    author: authorMatch ? authorMatch[1] : 'ObjectWire Editorial',
    publishedTime: timeMatch ? timeMatch[1] : new Date().toISOString(),
    slug: slugMatch ? slugMatch[1] : '',
  };
}

// ── JSX → HTML converter ─────────────────────────────────────────────────────
function jsxToHtml(jsx: string): string {
  return jsx
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')           // {/* comments */}
    .replace(/\{\s*['"][ ]['"]?\s*\}/g, ' ')         // {' '}
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\bclassName=/g, 'class=')
    .replace(/\bhtmlFor=/g, 'for=')
    .replace(/<Link\b([^>]*?)>/g, '<a$1>')
    .replace(/<\/Link>/g, '</a>')
    .replace(/\s+key=\{[^}]*\}/g, '')
    .replace(/\s+suppressHydrationWarning=\{[^}]*\}/g, '')
    .replace(/\{"([^"{}]+)"\}/g, '$1')
    .replace(/\{'([^'{}]+)'\}/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ── Extract the return body of the default export ───────────────────────────
// Returns everything inside the outermost <SEOWrapper> or <> or first div
function extractReturnBody(source: string): string {
  // Find the opening of the JSX return
  const returnIdx = source.lastIndexOf('return (');
  if (returnIdx === -1) return '';

  // Find the content of NewsArticle component
  const newsArticleStart = source.indexOf('<NewsArticle\n', returnIdx) !== -1
    ? source.indexOf('<NewsArticle\n', returnIdx)
    : source.indexOf('<NewsArticle ', returnIdx);

  if (newsArticleStart === -1) {
    // Fall back: grab everything from return ( to last );
    const start = source.indexOf('(', returnIdx) + 1;
    let depth = 0;
    let i = start;
    while (i < source.length) {
      if (source[i] === '(') depth++;
      else if (source[i] === ')') {
        if (depth === 0) break;
        depth--;
      }
      i++;
    }
    return jsxToHtml(source.slice(start, i).trim());
  }

  // Find the children of NewsArticle (between > and </NewsArticle>)
  const propsEnd = source.indexOf('>', newsArticleStart);
  if (propsEnd === -1) return '';

  // Find closing </NewsArticle>
  const closeTag = '</NewsArticle>';
  const closeIdx = source.lastIndexOf(closeTag);
  if (closeIdx === -1) return '';

  const children = source.slice(propsEnd + 1, closeIdx).trim();
  return jsxToHtml(children);
}

// ── Extract meta tags kept in page for SEO ───────────────────────────────────
function extractMetadataBlock(source: string): string {
  const start = source.indexOf('export const metadata');
  if (start === -1) return '';

  // Find the closing }; of the metadata object
  let depth = 0;
  let inObj = false;
  let end = start;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') { depth++; inObj = true; }
    else if (source[i] === '}') {
      depth--;
      if (inObj && depth === 0) {
        end = i + 1;
        // Consume trailing semicolon and newline
        if (source[end] === ';') end++;
        if (source[end] === '\n') end++;
        break;
      }
    }
  }
  return source.slice(start, end);
}

// ── Derive component name from file path ─────────────────────────────────────
function componentName(filePath: string): string {
  const parts = path.dirname(filePath).split(path.sep);
  const segment = parts[parts.length - 1];
  return segment
    .split(/[-_]/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('') + 'Page';
}

// ── Build thin WikiArticle loader ────────────────────────────────────────────
function buildThinLoader(filePath: string, meta: ReturnType<typeof extractMeta>, metadataBlock: string): string {
  const compName = componentName(filePath);
  const slug = meta.slug || slugFromPath(filePath);

  return `import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate-remaining' to update content in Supabase.
export const dynamic = 'force-dynamic';
${metadataBlock}
export default function ${compName}() {
  return <WikiArticle slug="${slug}" />;
}
`;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`🚀  migrate-remaining-articles${isDryRun ? ' (DRY RUN)' : ''}\n`);

  for (const rel of TARGET_FILES) {
    const filePath = path.join(process.cwd(), rel);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Not found: ${rel}`);
      continue;
    }

    const source = fs.readFileSync(filePath, 'utf-8');

    // Skip already-trimmed pages
    if (source.includes('WikiArticle')) {
      console.log(`  ✓ already migrated: ${rel}`);
      continue;
    }

    const meta = extractMeta(source);
    const slug = meta.slug || slugFromPath(filePath);
    const htmlBody = extractReturnBody(source);
    const metadataBlock = extractMetadataBlock(source);

    console.log(`\n📄  ${rel}`);
    console.log(`    slug:    ${slug}`);
    console.log(`    title:   ${meta.title.substring(0, 70)}...`);
    console.log(`    author:  ${meta.author}`);
    console.log(`    time:    ${meta.publishedTime}`);
    console.log(`    html:    ${htmlBody.length} chars`);

    if (isDryRun) {
      console.log('    [dry run] would upsert to Supabase + write thin loader');
      continue;
    }

    // ── 1. Upsert to Supabase ──────────────────────────────────────────────
    const { error: upsertError } = await supabase
      .from('articles')
      .upsert(
        {
          slug,
          title: meta.title,
          excerpt: meta.description,
          content: [{ type: 'html', content: htmlBody }],
          author_name: meta.author,
          published_at: meta.publishedTime,
          status: 'published',
        },
        { onConflict: 'slug' }
      );

    if (upsertError) {
      console.error(`    ❌ Supabase error: ${upsertError.message}`);
      // Try with 'html' block in different shape
      const { error: e2 } = await supabase
        .from('articles')
        .upsert(
          {
            slug,
            title: meta.title,
            excerpt: meta.description,
            content: [{ id: '1', type: 'html', content: htmlBody }],
            author: meta.author,
            published_at: meta.publishedTime,
          },
          { onConflict: 'slug' }
        );
      if (e2) {
        console.error(`    ❌ Second attempt also failed: ${e2.message}`);
        continue;
      }
    }

    console.log(`    ✅ upserted to Supabase`);

    // ── 2. Write thin loader ───────────────────────────────────────────────
    const thinLoader = buildThinLoader(filePath, meta, metadataBlock);
    fs.writeFileSync(filePath, thinLoader, 'utf-8');
    console.log(`    ✅ page.tsx replaced with thin WikiArticle loader`);
  }

  console.log('\n✨  Migration complete.');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
