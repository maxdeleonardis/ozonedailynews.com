#!/usr/bin/env tsx
/**
 * migrate-main-articles.ts
 *
 * Migrates the 14 new pages from main branch into Supabase and
 * replaces their bodies with thin WikiArticle loaders.
 *
 * Handles:
 *  - const SLUG / const CANONICAL / const AUTHOR_NAME variable patterns
 *  - NewsArticle component (children = body)
 *  - NewsArticleSchema pages (also use NewsArticle as body wrapper)
 *  - NewsArticleSchema attribute-based pages (youtube/spanish etc.)
 *
 * Usage:
 *   npm run wiki:migrate-main              — migrate all pages live
 *   npm run wiki:migrate-main -- --dry-run — preview without writing
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
  process.exit(1);
}

const supabase = (!isDryRun) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null as any;

// ── Pages to migrate ─────────────────────────────────────────────────────────
const TARGET_FILES = [
  // Hub pages (no NewsArticle body — just JSX hub content)
  'app/events/gdc-2026/page.tsx',
  // Article pages — batch 1
  'app/events/gdc-2026/valve-steam-machine-steam-frame-compatibility-gdc-2026/page.tsx',
  'app/google/news/gemini-embedding-2-multimodal-embedding-model/page.tsx',
  'app/video-games/new/crimson-desert/console-footage-pushback/page.tsx',
  'app/video-games/new/crimson-desert/page.tsx',
  'app/video-games/new/slay-the-spire-2/page.tsx',
  'app/video-games/new/windrose/page.tsx',
  'app/video-games/new/windrose/release-date-holdoff/page.tsx',
  'app/video-games/news/arc-raiders-discord-plaintext-security/page.tsx',
  'app/video-games/news/epic-games-sues-fortnite-leaks-contractor/page.tsx',
  'app/video-games/news/rockstar-gta6-psn-profile-exploit/page.tsx',
  'app/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players/page.tsx',
  'app/youtube/spanish/page.tsx',
  'app/youtube/thefellas/page.tsx',
  'app/youtube/thefellas/punchin/page.tsx',
  // Article pages — batch 2
  'app/entertainment/news/fortnite-moves-into-movies/page.tsx',
  'app/tech/news/anthropic-court-filings-disclose-5-billion-in-total-revenue/page.tsx',
  'app/video-games/game-of-the-year-2026-Clair-Obscur/page.tsx',
  'app/video-games/news/marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes/page.tsx',
  'app/video-games/news/outersloth-rejects-ai/page.tsx',
  'app/video-games/nintendo/donkey-kong-bananza/page.tsx',
  'app/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2/page.tsx',
  'app/video-games/toxic-comando/page.tsx',
  'app/fortnite/page.tsx',
];

// ── Derive slug from file path ───────────────────────────────────────────────
function slugFromPath(filePath: string): string {
  const rel = path.relative(path.join(process.cwd(), 'app'), path.dirname(filePath));
  return '/' + rel.replace(/\\/g, '/');
}

// ── Resolve variable references in source ───────────────────────────────────
// Evaluates simple const SLUG, CANONICAL, AUTHOR_NAME, PUBLISH_ISO patterns
function resolveVars(source: string): Map<string, string> {
  const vars = new Map<string, string>();
  // const SLUG = '/some/path'  or  const SLUG = 'slug-only'
  const slugMatch = source.match(/const\s+SLUG\s*=\s*['"`]([^'"`\n]+)['"`]/);
  if (slugMatch) vars.set('SLUG', slugMatch[1]);

  // const AUTHOR_NAME = 'Foo'
  const authorMatch = source.match(/const\s+AUTHOR_NAME\s*=\s*['"`]([^'"`\n]+)['"`]/);
  if (authorMatch) vars.set('AUTHOR_NAME', authorMatch[1]);

  // const PUBLISH_ISO = '2026-...'
  const publishMatch = source.match(/const\s+PUBLISH_ISO\s*=\s*['"`]([^'"`\n]+)['"`]/);
  if (publishMatch) vars.set('PUBLISH_ISO', publishMatch[1]);

  // Derive CANONICAL from SLUG if present
  if (vars.has('SLUG')) {
    const slug = vars.get('SLUG')!;
    const canonical = slug.startsWith('/')
      ? `https://www.objectwire.org${slug}`
      : `https://www.objectwire.org/events/gdc-2026/${slug}`;
    vars.set('CANONICAL', canonical);
    vars.set('ARTICLE_URL', canonical);
    vars.set('ARTICLE_CANONICAL', canonical);
    vars.set('PAGE_URL', canonical);
  }

  return vars;
}

// ── Extract metadata values ──────────────────────────────────────────────────
function extractMeta(source: string, vars: Map<string, string>) {
  const titleMatch = source.match(/title:\s*['"`]([\s\S]*?)['"`]\s*,/);
  const descMatch = source.match(/description:\s*\n?\s*['"`]([\s\S]*?)['"`]\s*,/);
  // Author: try const AUTHOR_NAME, then authors array, then author attribute
  let author =
    vars.get('AUTHOR_NAME') ||
    (source.match(/authors:\s*\[\s*['"`]([^'"`]+)['"`]/) || [])[1] ||
    (source.match(/author=\s*['"{]([^'"}\n]+)['"}]/) || [])[1] ||
    'ObjectWire Staff';
  // Published time: try PUBLISH_ISO const, then publishedTime prop, then publishedTime attr
  let publishedTime =
    vars.get('PUBLISH_ISO') ||
    (source.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/) || [])[1] ||
    (source.match(/publishedTime=\s*['"`]([^'"`]+)['"`]/) || [])[1] ||
    '2026-03-11T00:00:00Z';

  // Slug: try const SLUG (prefer path-style), else derive from file
  let slug = vars.get('SLUG') || '';
  if (slug && !slug.startsWith('/')) {
    // Short slug like 'valve-steam-...' — prepend the directory path
    slug = '';  // will be filled from filePath in caller
  }

  return {
    title: titleMatch ? titleMatch[1].replace(/\\n\s*/g, ' ').trim() : '',
    description: descMatch ? descMatch[1].replace(/\\n\s*/g, ' ').trim() : '',
    author,
    publishedTime,
    slug,
  };
}

// ── JSX → HTML ──────────────────────────────────────────────────────────────
function jsxToHtml(jsx: string): string {
  return jsx
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\{\s*['"][ ]['"]?\s*\}/g, ' ')
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

// ── Extract body HTML from the page ─────────────────────────────────────────
function extractReturnBody(source: string): string {
  const returnIdx = source.lastIndexOf('return (');
  if (returnIdx === -1) return '';

  // Find <NewsArticle (the body wrapper)
  const naStart =
    source.indexOf('<NewsArticle\n', returnIdx) !== -1
      ? source.indexOf('<NewsArticle\n', returnIdx)
      : source.indexOf('<NewsArticle ', returnIdx);

  if (naStart === -1) {
    // Fallback: grab full return body
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

  // Skip past the opening props to the first >
  const propsEnd = source.indexOf('>', naStart);
  if (propsEnd === -1) return '';

  const closeTag = '</NewsArticle>';
  const closeIdx = source.lastIndexOf(closeTag);
  if (closeIdx === -1) return '';

  const children = source.slice(propsEnd + 1, closeIdx).trim();
  return jsxToHtml(children);
}

// ── Extract the metadata block (export const metadata = {...}) ───────────────
function extractMetadataBlock(source: string): string {
  const start = source.indexOf('export const metadata');
  if (start === -1) return '';
  let depth = 0;
  let inObj = false;
  let end = start;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') { depth++; inObj = true; }
    else if (source[i] === '}') {
      depth--;
      if (inObj && depth === 0) {
        end = i + 1;
        if (source[end] === ';') end++;
        if (source[end] === '\n') end++;
        break;
      }
    }
  }
  return source.slice(start, end);
}

// ── Inline variable references in the metadata block ────────────────────────
function inlineVarsInMetadata(metadataBlock: string, vars: Map<string, string>): string {
  let result = metadataBlock;
  // Replace CANONICAL (backtick template or plain ref)
  if (vars.has('CANONICAL')) {
    const canonical = vars.get('CANONICAL')!;
    result = result
      .replace(/`https:\/\/www\.objectwire\.org\$\{SLUG\}`/g, `'${canonical}'`)
      .replace(/`https:\/\/www\.objectwire\.org\/events\/gdc-2026\/\$\{SLUG\}`/g, `'${canonical}'`)
      .replace(/\bCANONICAL\b/g, `'${canonical}'`);
  }
  if (vars.has('AUTHOR_NAME')) {
    result = result.replace(/\bAUTHOR_NAME\b/g, `'${vars.get('AUTHOR_NAME')}'`);
  }
  if (vars.has('PUBLISH_ISO')) {
    result = result.replace(/\bPUBLISH_ISO\b/g, `'${vars.get('PUBLISH_ISO')}'`);
  }
  if (vars.has('ARTICLE_URL')) {
    result = result.replace(/\bARTICLE_URL\b/g, `'${vars.get('ARTICLE_URL')}'`);
  }
  if (vars.has('ARTICLE_CANONICAL')) {
    result = result.replace(/\bARTICLE_CANONICAL\b/g, `'${vars.get('ARTICLE_CANONICAL')}'`);
  }
  if (vars.has('PAGE_URL')) {
    result = result.replace(/\bPAGE_URL\b/g, `'${vars.get('PAGE_URL')}'`);
  }
  return result;
}

// ── Derive component name from directory ─────────────────────────────────────
function componentName(filePath: string): string {
  const parts = path.dirname(filePath).split(path.sep);
  const segment = parts[parts.length - 1];
  return (
    segment
      .split(/[-_]/)
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join('') + 'Page'
  );
}

// ── Build thin WikiArticle loader ────────────────────────────────────────────
function buildThinLoader(filePath: string, slug: string, metadataBlock: string): string {
  const compName = componentName(filePath);
  return `import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

${metadataBlock}
export default function ${compName}() {
  return <WikiArticle slug="${slug}" />;
}
`;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`🚀  migrate-main-articles${isDryRun ? ' (DRY RUN)' : ''}\n`);

  let skipped = 0;
  let migrated = 0;
  let failed = 0;

  for (const rel of TARGET_FILES) {
    const filePath = path.join(process.cwd(), rel);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Not found (skipping): ${rel}`);
      skipped++;
      continue;
    }

    const source = fs.readFileSync(filePath, 'utf-8');

    if (source.includes('WikiArticle')) {
      console.log(`  ✓ already migrated: ${rel}`);
      skipped++;
      continue;
    }

    const vars = resolveVars(source);
    const meta = extractMeta(source, vars);

    // Determine the canonical slug
    let slug = meta.slug || slugFromPath(filePath);
    // If SLUG was short (no leading /), use file-derived slug
    if (!slug.startsWith('/')) slug = slugFromPath(filePath);

    const htmlBody = extractReturnBody(source);
    let metadataBlock = extractMetadataBlock(source);
    metadataBlock = inlineVarsInMetadata(metadataBlock, vars);

    const isHubPage = !source.includes('<NewsArticle') && !source.includes('NewsArticle ');

    console.log(`\n📄  ${rel}`);
    console.log(`    slug:    ${slug}`);
    console.log(`    title:   ${meta.title.substring(0, 72)}`);
    console.log(`    author:  ${meta.author}`);
    console.log(`    time:    ${meta.publishedTime}`);
    console.log(`    html:    ${htmlBody.length} chars${isHubPage ? ' (hub page — JSX only)' : ''}`);

    if (isDryRun) {
      console.log('    [dry run] — would upsert + write thin loader');
      continue;
    }

    // Hub pages: skip Supabase upsert (they're navigation pages, not articles)
    if (isHubPage) {
      console.log(`    ⏭  Hub page — no Supabase upsert needed`);
      skipped++;
      continue;
    }

    // ── Upsert to Supabase ────────────────────────────────────────────────
    const { error } = await supabase
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

    if (error) {
      console.error(`    ❌ Supabase error: ${error.message}`);
      failed++;
      continue;
    }

    console.log(`    ✅ upserted to Supabase`);

    // ── Write thin loader ─────────────────────────────────────────────────
    const thinLoader = buildThinLoader(filePath, slug, metadataBlock);
    fs.writeFileSync(filePath, thinLoader, 'utf-8');
    console.log(`    ✅ page.tsx → thin WikiArticle loader`);
    migrated++;
  }

  console.log(`\n✨  Done — ${migrated} migrated, ${skipped} skipped, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
