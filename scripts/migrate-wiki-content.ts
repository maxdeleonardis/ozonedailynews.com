/**
 * migrate-wiki-content.ts
 *
 * Step 1 of the wiki migration.
 * Reads every static page.tsx that uses <NewsArticleSchema>, extracts the
 * grid content (main + aside), converts JSX to HTML, and upserts it into
 * Supabase as a single `html` block.
 *
 * Run BEFORE trim-wiki-pages.ts so content is in Supabase before the
 * static page bodies are removed.
 *
 * Usage:
 *   npm run wiki:migrate              ΓÇö migrate all pages
 *   npm run wiki:migrate -- --dry-run ΓÇö preview without writing
 *   npm run wiki:migrate -- --file app/crypto/xrp/page.tsx ΓÇö single file
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const APP_DIR = path.resolve(process.cwd(), 'app');

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Γ¥î  Missing Supabase env vars in .env.local');
  process.exit(1);
}

if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.log('≡ƒöæ  Using service_role key (bypasses RLS)');
} else {
  console.warn('ΓÜá∩╕Å   No SUPABASE_SERVICE_ROLE_KEY found ΓÇö using anon key.\n    jack_articles inserts may fail due to RLS. Add SUPABASE_SERVICE_ROLE_KEY to .env.local to fix.');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ΓöÇΓöÇ CLI flags ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const singleFile = (() => {
  const i = args.indexOf('--file');
  return i !== -1 ? args[i + 1] : null;
})();

// ΓöÇΓöÇ Directories that are never content pages ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const SYSTEM_DIRS = new Set([
  'node_modules', '.next',
  '(admin)',            // admin dashboard
  'api',               // Next.js API routes
  'feeds',             // RSS/Atom feed routes
  'rss.xml',           // RSS XML route
  'news-sitemap.xml',  // news sitemap route
  'saved',             // saved-articles UI
  'history',           // article-history UI
  'search',            // search UI
]);

// ΓöÇΓöÇ Find every content page that still needs migrating ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// Covers: NewsArticleSchema, wiki-grid, AND any raw-JSX page with metadata
function findNewsArticlePages(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SYSTEM_DIRS.has(entry.name)) continue;
      results.push(...findNewsArticlePages(full));
    } else if (entry.name === 'page.tsx') {
      // Never process app/page.tsx (home page)
      if (path.dirname(full) === APP_DIR) continue;
      const source = fs.readFileSync(full, 'utf-8');
      // Skip already-trimmed pages
      if (source.includes('WikiArticle')) continue;
      if (source.includes('NewsArticleDB')) continue;
      if (source.includes('JackArticleDB')) continue;
      if (source.includes("from '@/components/ArticlePageDB'")) continue;
      // Skip interactive client components
      if (/^['"](use client)['"]/.test(source.trimStart())) continue;
      // Skip hub/listing pages that dynamically aggregate articles
      const HUB_PATTERNS = ['scanAllContent', 'NewsLibrary', '<Hub ', 'getLatestArticles', 'getAllArticles'];
      if (HUB_PATTERNS.some(p => source.includes(p))) continue;
      // Only pages with a metadata export are content pages
      if (!source.includes('export const metadata')) continue;
      results.push(full);
    }
  }
  return results;
}

// ΓöÇΓöÇ Derive Supabase slug from file path ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// app/crypto/xrp/page.tsx ΓåÆ crypto-xrp
function slugFromPath(filePath: string): string {
  const rel = path.relative(APP_DIR, path.dirname(filePath));
  return rel.replace(/\\/g, '/').replace(/\//g, '-');
}

// ΓöÇΓöÇ Balanced tag extractor ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// Finds the first <tagName> that contains `marker` and extracts the full element.
function extractTagContaining(source: string, marker: string, tagName: string): string {
  const markerIdx = source.indexOf(marker);
  if (markerIdx === -1) return '';

  // Walk backward to find the opening <tagName tag
  let tagStart = markerIdx;
  while (tagStart > 0) {
    if (source[tagStart] === '<') {
      const ahead = source.substring(tagStart, tagStart + tagName.length + 1);
      if (ahead === `<${tagName}`) {
        const charAfter = source[tagStart + 1 + tagName.length];
        if (charAfter === ' ' || charAfter === '>' || charAfter === '\n') break;
      }
    }
    tagStart--;
  }
  if (tagStart <= 0) return '';

  return extractBalancedTag(source, tagStart, tagName);
}

function extractBalancedTag(source: string, startIdx: number, tagName: string): string {
  const openTag = `<${tagName}`;
  const closeTag = `</${tagName}>`;

  // Skip to end of the opening tag
  let i = startIdx + openTag.length;
  while (i < source.length && source[i] !== '>') i++;
  i++;

  let depth = 1;
  let pos = i;

  while (depth > 0 && pos < source.length) {
    // Find next opening or closing tag (must be followed by space or >)
    const nextOpen = findTag(source, openTag, pos);
    const nextClose = source.indexOf(closeTag, pos);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + openTag.length;
    } else {
      depth--;
      if (depth === 0) {
        return source.substring(startIdx, nextClose + closeTag.length);
      }
      pos = nextClose + closeTag.length;
    }
  }

  return source.substring(startIdx);
}

// Find next occurrence of tagName that is a valid HTML/JSX opening tag
function findTag(source: string, openTag: string, fromIdx: number): number {
  let idx = fromIdx;
  while (true) {
    const found = source.indexOf(openTag, idx);
    if (found === -1) return -1;
    const charAfter = source[found + openTag.length];
    if (charAfter === ' ' || charAfter === '>' || charAfter === '\n' || charAfter === '\t' || charAfter === '\r') {
      return found;
    }
    idx = found + 1;
  }
}

// ΓöÇΓöÇ JSX ΓåÆ HTML converter ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
function jsxToHtml(jsx: string): string {
  return jsx
    // Remove JSX block comments {/* ... */}
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    // {' '} and {" "} ΓåÆ space
    .replace(/\{\s*'\s*'\s*\}/g, ' ')
    .replace(/\{\s*"\s*"\s*\}/g, ' ')
    // className= ΓåÆ class=
    .replace(/\bclassName=/g, 'class=')
    // htmlFor= ΓåÆ for=
    .replace(/\bhtmlFor=/g, 'for=')
    // <Link href="..."> ΓåÆ <a href="...">  (handles multi-attribute Link tags too)
    .replace(/<Link\b([^>]*?)>/g, '<a$1>')
    // </Link> ΓåÆ </a>
    .replace(/<\/Link>/g, '</a>')
    // &apos; ΓåÆ '
    .replace(/&apos;/g, "'")
    // Remove key={...} JSX prop
    .replace(/\s+key=\{[^}]*\}/g, '')
    // Remove React-specific internal props
    .replace(/\s+suppressHydrationWarning=\{[^}]*\}/g, '')
    // {"text"} ΓåÆ text  (simple string expressions)
    .replace(/\{["']([^"'{}]+)["']\}/g, '$1')
    // Collapse excessive newlines
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ΓöÇΓöÇ Extract h1 from the page header ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
function extractH1(source: string): string {
  const match = source.match(/<h1[^>]*class(?:Name)?="[^"]*text-4xl[^"]*"[^>]*>([\s\S]*?)<\/h1>/);
  if (!match) return '';
  // Strip JSX/HTML tags from the h1 content
  return match[1].replace(/<[^>]+>/g, '').replace(/\{[^}]+\}/g, '').trim();
}

// ΓöÇΓöÇ Extract metadata title ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
function extractMetaTitle(source: string): string {
  const match = source.match(/title:\s*['"`](.*?)['"`]\s*,/);
  return match ? match[1] : '';
}

// ΓöÇΓöÇ Extract category from metadata openGraph section ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
function extractCategory(source: string): string {
  const match = source.match(/section:\s*['"`]([^'"`]+)['"`]/);
  return match ? match[1] : '';
}

// ΓöÇΓöÇ Extract publishedTime ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
function extractPublishedTime(source: string): string | null {
  const match = source.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/);
  return match ? match[1] : null;
}

// ΓöÇΓöÇ Simple string prop extractor (JSX attribute) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// Matches: propName="value"  propName='value'  propName={`value`}
function extractStrProp(jsx: string, propName: string): string {
  const md = jsx.match(new RegExp(`\\b${propName}="([^"]*)"`));
  if (md) return md[1];
  const ms = jsx.match(new RegExp(`\\b${propName}='([^']*)'`));
  if (ms) return ms[1];
  const me = jsx.match(new RegExp(`\\b${propName}=\\{[\`'"]([^\`'"]+)[\`'"]\\}`));
  return me ? me[1] : '';
}

// ΓöÇΓöÇ JS expression prop extractor (array / object props) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// Handles: propName={[...]}  propName={{ ... }}
function extractExprProp(jsx: string, propName: string): any {
  const idx = jsx.indexOf(`${propName}={`);
  if (idx === -1) return null;
  let i = idx + propName.length + 1; // position at outer {
  let depth = 0;
  while (i < jsx.length) {
    if (jsx[i] === '{') depth++;
    else if (jsx[i] === '}') { depth--; if (depth === 0) { i++; break; } }
    i++;
  }
  const exprStr = jsx.substring(idx + propName.length + 2, i - 1).trim();
  try { return new Function(`"use strict"; return (${exprStr})`)(); } // eslint-disable-line no-new-func
  catch { return null; }
}

// ΓöÇΓöÇ Convert DynamicNewsArticle sub-components ΓåÆ HTML ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
function convertSubComponents(jsx: string): string {
  let h = jsx;

  // ΓöÇΓöÇ ArticlePage sub-components ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

  // TableOfContents ΓåÆ strip (stored separately as db column; ArticlePageDB renders it)
  h = h.replace(/<TableOfContents[\s\S]*?\/>/g, '');

  // Section ΓåÆ <section id="..."><hN class="...">title</hN>...</section>
  h = h.replace(/<Section\b([^>]*?)>/g, (_m, attrStr) => {
    const id    = extractStrProp(attrStr, 'id');
    const title = extractStrProp(attrStr, 'title');
    const levelMatch = attrStr.match(/\blevel=\{(\d)\}/);
    const level = levelMatch ? parseInt(levelMatch[1], 10) : 2;
    const hClass = level === 2
      ? 'text-2xl font-serif border-b border-gray-200 pb-2 mb-4'
      : 'text-lg font-semibold mb-3';
    return `<section id="${id}" class="mb-10 scroll-mt-20"><h${level} class="${hClass}">${title}</h${level}>`;
  });
  h = h.replace(/<\/Section>/g, '</section>');

  // References ΓåÆ styled section wrapper
  h = h.replace(/<References>/g,
    '<section class="mt-8 pt-6 border-t border-gray-300">' +
    '<h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>' +
    '<div class="text-sm text-gray-700">');
  h = h.replace(/<\/References>/g, '</div></section>');

  // VideoEmbed ΓåÆ responsive iframe  (YouTube / Vimeo)
  h = h.replace(/<VideoEmbed([\s\S]*?)\/>/g, (_m, p) => {
    const videoId = extractStrProp(p, 'videoId');
    const title   = extractStrProp(p, 'title') || 'Video';
    const caption = extractStrProp(p, 'caption');
    const prov    = extractStrProp(p, 'provider') || 'youtube';
    const src = prov === 'vimeo'
      ? `https://player.vimeo.com/video/${videoId}`
      : `https://www.youtube.com/embed/${videoId}`;
    return (
      `<div class="video-embed my-12">` +
      `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">` +
      `<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="${src}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` +
      `</div>` +
      (caption ? `<p class="text-center text-sm mt-2 text-gray-600 italic">${caption}</p>` : '') +
      `</div>`
    );
  });

  // ArticleQuote ΓåÆ blockquote
  h = h.replace(/<ArticleQuote([\s\S]*?)\/>/g, (_m, p) => {
    const quote   = extractStrProp(p, 'quote');
    const author  = extractStrProp(p, 'author');
    const atitle  = extractStrProp(p, 'title');
    return (
      `<blockquote class="border-l-4 border-black pl-6 italic my-8 text-xl">${quote}` +
      ((author || atitle) ? `<footer class="text-sm text-gray-500 mt-2 not-italic">${author ? `ΓÇö ${author}` : ''}${atitle ? `, ${atitle}` : ''}</footer>` : '') +
      `</blockquote>`
    );
  });

  // ArticleImage ΓåÆ figure
  h = h.replace(/<ArticleImage([\s\S]*?)\/>/g, (_m, p) => {
    const src     = extractStrProp(p, 'src');
    const alt     = extractStrProp(p, 'alt') || '';
    const caption = extractStrProp(p, 'caption');
    const credit  = extractStrProp(p, 'credit');
    return (
      `<figure class="my-8">` +
      `<img src="${src}" alt="${alt}" class="w-full" />` +
      ((caption || credit)
        ? `<figcaption class="text-center text-sm mt-2 text-gray-600">${caption ? `<span class="italic">${caption}</span>` : ''}${credit ? `<span class="block text-xs text-gray-500 mt-1">Credit: ${credit}</span>` : ''}</figcaption>`
        : '') +
      `</figure>`
    );
  });

  // CaseOverview ΓåÆ key facts box
  h = h.replace(/<CaseOverview([\s\S]*?)\/>/g, (_m, p) => {
    const title = extractStrProp(p, 'title') || 'KEY FACTS';
    const color = extractStrProp(p, 'color') || 'red';
    const items: Array<{label: string; value: string}> = extractExprProp(p, 'items') || [];
    const rows = items.map(it =>
      `<li class="flex items-start gap-2"><span class="text-${color}-600 font-bold">ΓÇó</span><span><strong>${it.label}</strong> ${it.value}</span></li>`
    ).join('');
    return (
      `<aside class="bg-${color}-50 border-l-4 border-${color}-600 p-6 my-8">` +
      `<h3 class="font-bold text-sm tracking-wider mb-3">${title}</h3>` +
      `<ul class="space-y-2 text-sm">${rows}</ul>` +
      `</aside>`
    );
  });

  // ProcessDiagram ΓåÆ numbered steps
  h = h.replace(/<ProcessDiagram([\s\S]*?)\/>/g, (_m, p) => {
    const title = extractStrProp(p, 'title') || '';
    const color = extractStrProp(p, 'color') || 'red';
    const steps: Array<{title: string; description: string}> = extractExprProp(p, 'steps') || [];
    const rows = steps.map((s, i) =>
      `<div class="flex items-start gap-4">` +
      `<div class="bg-${color}-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">${i + 1}</div>` +
      `<div><p class="font-semibold">${s.title}</p><p class="text-sm text-gray-600">${s.description}</p></div>` +
      `</div>`
    ).join('');
    return (
      `<div class="bg-gray-50 p-6 my-8">` +
      `<h4 class="font-bold text-sm mb-4">${title}</h4>` +
      `<div class="space-y-4">${rows}</div>` +
      `</div>`
    );
  });

  // StatisticsBox ΓåÆ stats grid
  h = h.replace(/<StatisticsBox([\s\S]*?)\/>/g, (_m, p) => {
    const title = extractStrProp(p, 'title') || 'BY THE NUMBERS';
    const color = extractStrProp(p, 'color') || 'red';
    const stats: Array<{value: string; label: string}> = extractExprProp(p, 'stats') || [];
    const cols  = stats.length > 2 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2';
    const rows  = stats.map(s =>
      `<div><p class="text-3xl font-black text-${color}-600">${s.value}</p><p class="text-xs text-gray-500">${s.label}</p></div>`
    ).join('');
    return (
      `<div class="bg-${color}-50 border border-${color}-200 p-6 my-8">` +
      `<h4 class="font-bold text-sm mb-3">≡ƒôè ${title}</h4>` +
      `<div class="grid ${cols} gap-4 text-center">${rows}</div>` +
      `</div>`
    );
  });

  // KeyFigures ΓåÆ person cards
  h = h.replace(/<KeyFigures([\s\S]*?)\/>/g, (_m, p) => {
    const figs: Array<{name: string; role: string; description: string; status?: string}> = extractExprProp(p, 'figures') || [];
    const cards = figs.map(f =>
      `<div class="border-2 border-black p-6">` +
      `<h4 class="font-bold mb-2">${f.name}</h4>` +
      `<p class="text-sm text-gray-500 mb-2">${f.role}</p>` +
      `<p class="text-sm text-gray-600">${f.description}</p>` +
      (f.status ? `<div class="mt-3 pt-3 border-t border-gray-200"><span class="text-xs font-bold text-red-600 uppercase">Status: ${f.status}</span></div>` : '') +
      `</div>`
    ).join('');
    return `<div class="grid md:grid-cols-2 gap-6 my-8">${cards}</div>`;
  });

  return h;
}

// ΓöÇΓöÇ Extract module-level const array definitions (e.g. const items = [...]) ΓöÇΓöÇ
// Returns a map of variable name ΓåÆ raw serialized array string
function extractModuleConsts(source: string): Map<string, string> {
  const consts = new Map<string, string>();
  const rx = /^const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(\[)/gm;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(source)) !== null) {
    const name = m[1];
    const startIdx = m.index + m[0].length - 1; // position of '['
    let depth = 0;
    let i = startIdx;
    let inStr: string | null = null;
    while (i < source.length) {
      const ch = source[i];
      if (inStr) {
        if (ch === inStr && source[i - 1] !== '\\') inStr = null;
      } else if (ch === '"' || ch === "'" || ch === '`') {
        inStr = ch;
      } else if (ch === '[' || ch === '{') {
        depth++;
      } else if (ch === ']' || ch === '}') {
        depth--;
        if (depth === 0 && ch === ']') { i++; break; }
      }
      i++;
    }
    consts.set(name, source.substring(startIdx, i));
  }
  return consts;
}

// ΓöÇΓöÇ Find end position of a JSX opening tag (first > outside braces/strings) ΓöÇΓöÇ
function findOpenTagEnd(source: string, startAt: number): number {
  let i = startAt;
  let braceDepth = 0;
  let inDouble = false;
  let inSingle = false;
  while (i < source.length) {
    const ch = source[i];
    const prev = i > 0 ? source[i - 1] : '';
    if (inDouble) { if (ch === '"'  && prev !== '\\') inDouble = false; }
    else if (inSingle) { if (ch === "'" && prev !== '\\') inSingle = false; }
    else if (ch === '"')  { inDouble = true; }
    else if (ch === "'")  { inSingle = true; }
    else if (ch === '{')  { braceDepth++; }
    else if (ch === '}')  { braceDepth--; }
    else if (ch === '>' && braceDepth === 0) { return i; }
    i++;
  }
  return -1;
}

// ΓöÇΓöÇ Extract DynamicNewsArticle content ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
function extractDynamicNewsArticleContent(source: string): {
  title: string;
  subtitle: string;
  authorName: string;
  authorRole: string;
  readTime: string;
  category: string;
  tags: string[];
  publishedAt: string | null;
  breaking: boolean;
  bodyHtml: string;
} | null {
  const match = source.match(/<DynamicNewsArticle[\s]/);
  if (!match || match.index === undefined) return null;
  const dnaStart = match.index;

  const dnaFull = extractBalancedTag(source, dnaStart, 'DynamicNewsArticle');
  if (!dnaFull) return null;

  // Find where the opening tag's > is (outside all braces)
  const tagEndPos = findOpenTagEnd(dnaFull, '<DynamicNewsArticle'.length);
  if (tagEndPos === -1) return null;

  // Props string = opening tag content (used for prop extraction)
  const propsStr = dnaFull.substring(0, tagEndPos);

  // Children = between > and </DynamicNewsArticle>
  const closingTag = '</DynamicNewsArticle>';
  const closingIdx = dnaFull.lastIndexOf(closingTag);
  const bodyJsx = closingIdx > tagEndPos
    ? dnaFull.substring(tagEndPos + 1, closingIdx).trim()
    : '';

  // ΓöÇΓöÇ Extract fields ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  // Title: prefer the component's own title prop (no " | Site Name" suffix)
  const rawTitle = extractStrProp(propsStr, 'title');
  const title = rawTitle || extractMetaTitle(source).replace(/\s*[|ΓÇöΓÇô\-].*$/, '').trim() || 'Untitled';

  const subtitle = extractStrProp(propsStr, 'subtitle');

  // Author from author={{ name, department }}
  const authorObj: any = extractExprProp(propsStr, 'author');
  const authorName = authorObj?.name   || 'OzoneNews';
  const authorRole = authorObj?.department || '';

  const readTime = extractStrProp(propsStr, 'readTime');

  // Category from openGraph.section in metadata (most reliable)
  const category = extractCategory(source);

  // Tags from openGraph.tags or metadata keywords
  const tagsMatch = source.match(/tags=\{(\[[\s\S]*?\])\}/);
  let tags: string[] = [];
  if (tagsMatch) {
    try { tags = JSON.parse(tagsMatch[1].replace(/'/g, '"')); } catch { tags = []; }
  }

  const publishedAt = extractPublishedTime(source);

  // Breaking: any category badge with label BREAKING
  const cats: any[] = extractExprProp(propsStr, 'categories') || [];
  const breaking = cats.some((c: any) => c?.label?.toUpperCase() === 'BREAKING');

  // Hero image ΓåÆ prepended HTML
  const heroImg: any = extractExprProp(propsStr, 'heroImage');
  let heroImageHtml = '';
  if (heroImg?.src) {
    heroImageHtml = `<figure class="hero-image mb-8">` +
      `<img src="${heroImg.src}" alt="${heroImg.alt || ''}" class="w-full h-auto object-cover" />`;
    if (heroImg.caption || heroImg.credit) {
      heroImageHtml +=
        `<figcaption class="text-sm text-gray-600 italic mt-2">${heroImg.caption || ''}` +
        (heroImg.credit ? ` <span class="text-xs text-gray-500">Credit: ${heroImg.credit}</span>` : '') +
        `</figcaption>`;
    }
    heroImageHtml += '</figure>';
  }

  // Convert sub-components then apply standard JSXΓåÆHTML transforms
  const htmlBody = jsxToHtml(convertSubComponents(bodyJsx));
  const bodyHtml = heroImageHtml + (htmlBody ? (heroImageHtml ? '\n' : '') + htmlBody : '');

  return { title, subtitle, authorName, authorRole, readTime, category, tags, publishedAt, breaking, bodyHtml };
}

// ΓöÇΓöÇ Extract <NewsArticle> children JSX ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// Returns { meta, bodyJsx } for pages using the <NewsArticle> component pattern.
function extractNewsArticleContent(source: string): {
  bodyJsx: string;
  title: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  topicTag: string;
  authorName: string;
  authorRole: string;
  authorSlug: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  breaking: boolean;
} | null {
  // Match <NewsArticle followed by whitespace ΓÇö avoids matching <NewsArticleSchema
  const naMatch = source.match(/<NewsArticle[\s]/);
  if (!naMatch || naMatch.index === undefined) return null;
  const openTag = naMatch.index;
  if (openTag === -1) return null;

  // Find the end of the opening tag (could be multiline)
  let tagEnd = openTag;
  let depth = 0;
  while (tagEnd < source.length) {
    if (source[tagEnd] === '<') depth++;
    if (source[tagEnd] === '>') {
      depth--;
      if (depth === 0) break;
    }
    tagEnd++;
  }

  // Extract props string
  const propsStr = source.substring(openTag, tagEnd + 1);

  // Extract children ΓÇö everything between closing > of opening tag and </NewsArticle>
  const childrenStart = tagEnd + 1;
  const childrenEnd = source.lastIndexOf('</NewsArticle>');
  const bodyJsx = childrenEnd > childrenStart
    ? source.substring(childrenStart, childrenEnd).trim()
    : '';

  const prop = (name: string): string => {
    // title='...' or title="..."
    const re1 = new RegExp(`${name}=['"]([^'"]+)['"]`);
    const m1 = propsStr.match(re1);
    if (m1) return m1[1];
    // Multi-line: title={\n  '...'\n}
    const re2 = new RegExp(`${name}=\\{\\s*['"\`]([^'"\`]+)['"\`]\\s*\\}`);
    const m2 = propsStr.match(re2);
    return m2 ? m2[1] : '';
  };

  const authorMatch = propsStr.match(/author=\{\{[\s\S]*?name:\s*['"`]([^'"`]+)['"`]/);
  const authorRoleMatch = propsStr.match(/author=\{\{[\s\S]*?role:\s*['"`]([^'"`]+)['"`]/);
  const authorSlugMatch = propsStr.match(/authorSlug:\s*['"`]([^'"`]+)['"`]/);
  const tagsMatch = source.match(/tags=\{(\[[\s\S]*?\])\}/);
  let tags: string[] = [];
  if (tagsMatch) {
    try {
      tags = JSON.parse(tagsMatch[1].replace(/'/g, '"'));
    } catch { tags = []; }
  }

  return {
    bodyJsx,
    title: prop('title'),
    subtitle: prop('subtitle'),
    category: prop('category'),
    categoryColor: prop('categoryColor'),
    topicTag: prop('topicTag'),
    authorName: authorMatch ? authorMatch[1] : '',
    authorRole: authorRoleMatch ? authorRoleMatch[1] : '',
    authorSlug: authorSlugMatch ? authorSlugMatch[1] : '',
    publishDate: prop('publishDate'),
    readTime: prop('readTime'),
    tags,
    breaking: /\bbreaking\b/.test(propsStr),
  };
}

// ΓöÇΓöÇ Parse a freeform publishDate string ΓåÆ ISO timestamp ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
function parsePublishDate(dateStr: string): string | null {
  if (!dateStr) return null;
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d.toISOString();
  } catch { /* ignore */ }
  return null;
}

// ΓöÇΓöÇ Unified wiki content extractor ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// Handles DynamicNewsArticle pages, wiki grid layouts, and raw-JSX pages.
// All three route to the `wiki_articles` table.
interface WikiExtractResult {
  title: string;
  subtitle?: string;
  category?: string;
  author_name?: string;
  author_role?: string;
  read_time?: string;
  tags?: string[];
  breaking?: boolean;
  published_at?: string;
  content_html: string;
}

function extractWikiContent(source: string): WikiExtractResult | null {
  // DynamicNewsArticle component
  const dynData = extractDynamicNewsArticleContent(source);
  if (dynData) {
    return {
      title: dynData.title,
      subtitle: dynData.subtitle || undefined,
      category: dynData.category || undefined,
      author_name: dynData.authorName || undefined,
      author_role: dynData.authorRole || undefined,
      read_time: dynData.readTime || undefined,
      tags: dynData.tags.length ? dynData.tags : undefined,
      breaking: dynData.breaking,
      published_at: dynData.publishedAt ?? extractPublishedTime(source) ?? undefined,
      content_html: dynData.bodyHtml,
    };
  }

  // Wiki grid layout (lg:grid-cols-12)
  const gridJsx = extractTagContaining(source, 'lg:grid-cols-12', 'div');
  if (gridJsx) {
    const htmlContent = jsxToHtml(gridJsx);
    const h1Title = extractH1(source);
    const metaTitle = extractMetaTitle(source);
    return {
      title: metaTitle || h1Title || '',
      subtitle: h1Title || undefined,
      category: extractCategory(source) || undefined,
      published_at: extractPublishedTime(source) ?? undefined,
      content_html: htmlContent,
    };
  }

  // Raw JSX fallback
  const returnIdx = source.search(/\breturn\s*\(/);
  if (returnIdx === -1) return null;
  const parenStart = source.indexOf('(', returnIdx);
  let depth = 0;
  let parenEnd = -1;
  for (let i = parenStart; i < source.length; i++) {
    if (source[i] === '(') depth++;
    else if (source[i] === ')') { depth--; if (depth === 0) { parenEnd = i; break; } }
  }
  if (parenEnd === -1) return null;

  let bodyJsx = source.substring(parenStart + 1, parenEnd).trim();
  if (bodyJsx.startsWith('<>') && bodyJsx.endsWith('</>')) bodyJsx = bodyJsx.slice(2, -3).trim();
  bodyJsx = bodyJsx.replace(/<NewsArticleSchema[\s\S]*?\/>/g, '').trim();
  bodyJsx = bodyJsx.replace(/^\s*<>\s*|\s*<\/>\s*$/g, '').trim();
  const htmlBody = jsxToHtml(bodyJsx);
  if (htmlBody.length < 200) return null;

  const metaTitle = extractMetaTitle(source).replace(/\s*[|ΓÇöΓÇô\-].*$/, '').trim();
  const authorMatch = source.match(/authors[:\s]*\[\s*\{[^}]*name[:\s]*['"\`]([^'"\`]+)['"\`]/);
  return {
    title: metaTitle,
    category: extractCategory(source) || undefined,
    author_name: authorMatch ? authorMatch[1] : undefined,
    published_at: extractPublishedTime(source) ?? undefined,
    content_html: htmlBody,
  };
}

// ΓöÇΓöÇ Process one page ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// Routes to the correct Supabase table based on which SEO component the page uses:
//   NewsArticle   ΓåÆ articles
//   JackArticle   ΓåÆ jack_articles
//   everything else (DynamicNewsArticle, wiki grid, raw JSX) ΓåÆ wiki_articles
async function processPage(filePath: string): Promise<'ok' | 'skip' | 'fail'> {
  const slug = slugFromPath(filePath);
  const relPath = path.relative(process.cwd(), filePath);
  const source = fs.readFileSync(filePath, 'utf-8');

  // ΓöÇΓöÇ NewsArticle component ΓåÆ articles ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  const newsData = extractNewsArticleContent(source);
  if (newsData) {
    const htmlBody = jsxToHtml(newsData.bodyJsx);
    const publishedAt = parsePublishDate(newsData.publishDate) ?? extractPublishedTime(source);

    if (isDryRun) {
      console.log(`  Γ£ô  ${relPath} [news article]`);
      console.log(`     slug: ${slug} | title: "${newsData.title}"`);
      console.log(`     author: ${newsData.authorName} | breaking: ${newsData.breaking}`);
      console.log(`     HTML body length: ${htmlBody.length} chars`);
      return 'ok';
    }

    const { error } = await supabase
      .from('articles')
      .upsert({
        slug,
        title: newsData.title,
        subtitle: newsData.subtitle ?? undefined,
        category: newsData.category ?? undefined,
        category_color: newsData.categoryColor ?? undefined,
        topic_tag: newsData.topicTag ?? undefined,
        publish_date: newsData.publishDate ?? undefined,
        author_name: newsData.authorName ?? undefined,
        author_role: newsData.authorRole ?? undefined,
        author_slug: newsData.authorSlug ?? undefined,
        read_time: newsData.readTime ?? undefined,
        tags: newsData.tags.length ? newsData.tags : undefined,
        breaking: newsData.breaking,
        published_at: publishedAt ?? undefined,
        status: 'published',
        content: [{ id: 'html-body', type: 'html', content: htmlBody }],
        content_html: htmlBody,
      }, { onConflict: 'slug' });

    if (error) { console.error(`  Γ¥î  ${relPath} ΓÇö ${error.message}`); return 'fail'; }
    console.log(`  Γ£ô  ${relPath} [NewsArticle] ΓåÆ articles/${slug}`);
    return 'ok';
  }

  // ΓöÇΓöÇ JackArticle component ΓåÆ jack_articles ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  const jackMatch = source.match(/<JackArticle[\s]/);
  if (jackMatch && jackMatch.index !== undefined) {
    const jaStart = jackMatch.index;
    const jaTagEnd = findOpenTagEnd(source, jaStart + '<JackArticle'.length);
    if (jaTagEnd !== -1) {
      const propsStr = source.substring(jaStart, jaTagEnd + 1);
      const childrenStart = jaTagEnd + 1;
      const childrenEnd = source.lastIndexOf('</JackArticle>');
      const bodyJsx = childrenEnd > childrenStart
        ? source.substring(childrenStart, childrenEnd).trim()
        : '';

      const prop = (name: string): string => extractStrProp(propsStr, name);

      // convert JackArticle sub-components to HTML
      let h = bodyJsx;

      // ΓöÇΓöÇ STEP 1: substitute module-level const variable references so
      //   extractExprProp can evaluate them (e.g. stats={divideStats} ΓåÆ stats={[...]})
      const moduleConsts = extractModuleConsts(source);
      for (const [varName, valStr] of moduleConsts.entries()) {
        const rx = new RegExp(`(items|stats|data)=\\{${varName}\\}`, 'g');
        h = h.replace(rx, `$1={${valStr}}`);
      }

      // ΓöÇΓöÇ STEP 2: convert wrapper components (non-self-closing)
      h = h.replace(/<JackSection[^>]*title="([^"]*)"[^>]*>/g, (_m: string, title: string) =>
        `<section><h2 style="font-size:1.125rem;font-weight:900;text-transform:uppercase;letter-spacing:0.05em;border-left:4px solid #111;padding-left:0.75rem;margin-bottom:1.5rem">${title}</h2>`
      ).replace(/<\/JackSection>/g, '</section>');
      h = h.replace(/<JackSubheading[^>]*>/g, '<h3 style="font-size:1.125rem;font-weight:900;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1.25rem">').replace(/<\/JackSubheading>/g, '</h3>');
      h = h.replace(/<JackCallout[^>]*label="([^"]*)"[^>]*>/g, (_m: string, label: string) =>
        `<div style="border-left:12px solid #111;padding:1rem 1.5rem;margin:2rem 0;background:#f9fafb"><strong style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em">${label}</strong><br/>`
      ).replace(/<\/JackCallout>/g, '</div>');
      h = h.replace(/<JackSideBlock[^>]*title="([^"]*)"[^>]*>/g, (_m: string, title: string) =>
        `<div style="border-left:4px solid #d1d5db;padding-left:1.5rem;margin-bottom:2rem"><h4 style="font-weight:900;text-transform:uppercase">${title}</h4>`
      ).replace(/<\/JackSideBlock>/g, '</div>');

      // ΓöÇΓöÇ STEP 3: convert self-closing components
      h = h.replace(/<JackStats([\s\S]*?)\/>/g, (_m: string, p: string) => {
        const stats: Array<{value: string; label: string}> = extractExprProp(p, 'stats') || [];
        const rows = stats.map((s: {value: string; label: string}) =>
          `<div style="text-align:center"><p style="font-size:2rem;font-weight:900;margin:0">${s.value}</p><p style="font-size:0.75rem;color:#6b7280;margin:0">${s.label}</p></div>`
        ).join('');
        return `<div style="display:grid;grid-template-columns:repeat(${Math.min(Math.max(stats.length,1),4)},1fr);gap:1.5rem;background:#f9fafb;border:1px solid #e5e7eb;padding:1.5rem;margin:2rem 0">${rows}</div>`;
      });
      h = h.replace(/<JackCaseOverview([\s\S]*?)\/>/g, (_m: string, p: string) => {
        const items: Array<{label: string; value: string}> = extractExprProp(p, 'items') || [];
        const overviewTitle = extractStrProp(p, 'title') || 'KEY FACTS';
        const rows = items.map((it: {label: string; value: string}) =>
          `<li style="padding:0.375rem 0;border-bottom:1px solid #e5e7eb"><strong>${it.label}</strong> ΓÇö ${it.value}</li>`
        ).join('');
        return `<aside style="background:#f9fafb;border-left:4px solid #111;padding:1.5rem;margin:2rem 0"><h3 style="font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.75rem">${overviewTitle}</h3><ul style="list-style:none;padding:0;margin:0;font-size:0.875rem;line-height:1.75">${rows}</ul></aside>`;
      });

      const bodyHtml = jsxToHtml(convertSubComponents(h));
      const publishDateISO = prop('publishDateISO') || extractPublishedTime(source);
      const authorObj: any = extractExprProp(propsStr, 'author');
      const categories: any[] = extractExprProp(propsStr, 'categories') || [];
      const relatedArticles: any[] = extractExprProp(propsStr, 'relatedArticles') || [];
      const timeline: any[] = extractExprProp(propsStr, 'timeline') || [];
      const documents: any[] = extractExprProp(propsStr, 'documents') || [];
      const sources: any[] = extractExprProp(propsStr, 'sources') || [];
      const footerLinks: any[] = extractExprProp(propsStr, 'footerLinks') || [];
      const breadcrumbs: any[] = extractExprProp(propsStr, 'breadcrumbs') || [];
      const heroImage: any = extractExprProp(propsStr, 'heroImage') || null;
      const keywordsRaw: any[] = extractExprProp(propsStr, 'keywords') || [];

      const section = prop('section') || extractCategory(source);
      const accentRaw = prop('accentColor');
      const validAccents = ['gray','blue','green','orange','red','purple','black'];
      const accent_color = validAccents.includes(accentRaw) ? accentRaw : 'gray';

      if (isDryRun) {
        console.log(`  Γ£ô  ${relPath} [jack article]`);
        console.log(`     slug: ${slug} | title: "${prop('title')}" | layout: ${prop('layout') || 'report'}`);
        console.log(`     HTML body length: ${bodyHtml.length} chars`);
        return 'ok';
      }

      const { error } = await supabase
        .from('jack_articles')
        .upsert({
          slug,
          layout: (prop('layout') || 'report') as 'report' | 'news',
          title: prop('title') || extractMetaTitle(source).replace(/\s*[|ΓÇöΓÇô\-].*$/, '').trim() || slug,
          subtitle: prop('subtitle') || null,
          subject: prop('subject') || null,
          description: prop('description') || null,
          category_label: prop('categoryLabel') || null,
          categories,
          publish_date: prop('publishDate') || null,
          publish_date_iso: publishDateISO || null,
          modified_date_iso: prop('modifiedDateISO') || publishDateISO || null,
          read_time: prop('readTime') || null,
          hero_image: heroImage,
          breadcrumbs,
          author: authorObj || null,
          content_html: bodyHtml,
          related_articles: relatedArticles,
          timeline,
          documents,
          sources,
          show_newsletter: /\bshowNewsletter\b/.test(propsStr),
          accent_color,
          article_url: prop('articleUrl') || null,
          section: section || null,
          keywords: keywordsRaw.length ? keywordsRaw : [],
          footer_tagline: prop('footerTagline') || null,
          footer_links: footerLinks,
        }, { onConflict: 'slug' });

      if (error) {
        console.error(`  Γ¥î  ${relPath} [jack] ΓÇö ${error.message}`);
        return 'fail';
      }
      console.log(`  Γ£ô  ${relPath} [jack] ΓåÆ jack_articles/${slug}`);
      return 'ok';
    }
  }

  // ΓöÇΓöÇ PATH 3: ArticlePage component ΓåÆ article_pages ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  const apMatch = source.match(/<ArticlePage[\s]/);
  const isAlreadyArticlePageDB = source.includes("from '@/components/ArticlePageDB'") || source.includes('import ArticlePageDB');
  if (apMatch && apMatch.index !== undefined && !isAlreadyArticlePageDB) {
    const apStart = apMatch.index;
    const apTagEnd = findOpenTagEnd(source, apStart + '<ArticlePage'.length);
    if (apTagEnd !== -1) {
      const propsStr = source.substring(apStart, apTagEnd + 1);
      const childrenStart = apTagEnd + 1;
      const childrenEnd = source.lastIndexOf('</ArticlePage>');
      const bodyJsx = childrenEnd > childrenStart
        ? source.substring(childrenStart, childrenEnd).trim()
        : '';

      const title = extractStrProp(propsStr, 'title')
        || extractMetaTitle(source).replace(/\s*[|\u2014\u2013\-].*$/, '').trim();

      if (!title) {
        console.error(`  Γ¥î  ${relPath} [article page] ΓÇö could not extract title, skipping to avoid bad data`);
        return 'fail';
      }

      const bodyHtml = jsxToHtml(convertSubComponents(bodyJsx));
      const infoBox = extractExprProp(propsStr, 'infoBox') || null;
      const tableOfContents = extractExprProp(propsStr, 'tableOfContents') || [];
      const relatedLinks = extractExprProp(propsStr, 'relatedLinks') || [];
      const backLink = extractExprProp(propsStr, 'backLink') || null;

      if (isDryRun) {
        console.log(`  Γ£ô  ${relPath} [article page]`);
        console.log(`     slug: ${slug} | title: "${title}"`);
        console.log(`     category: ${extractStrProp(propsStr, 'category') || 'ΓÇö'} | infoBox items: ${infoBox?.items?.length ?? 0} | TOC: ${Array.isArray(tableOfContents) ? tableOfContents.length : 0} entries`);
        console.log(`     HTML body length: ${bodyHtml.length} chars`);
        return 'ok';
      }

      const { error } = await supabase
        .from('article_pages')
        .upsert({
          slug,
          title,
          subtitle: extractStrProp(propsStr, 'subtitle') || null,
          category: extractStrProp(propsStr, 'category') || extractCategory(source) || null,
          last_updated: extractStrProp(propsStr, 'lastUpdated') || null,
          url: extractStrProp(propsStr, 'url') || null,
          info_box: infoBox,
          table_of_contents: tableOfContents,
          content_html: bodyHtml,
          related_links: relatedLinks,
          back_link: backLink,
        }, { onConflict: 'slug' });

      if (error) {
        console.error(`  Γ¥î  ${relPath} [article page] ΓÇö ${error.message}`);
        return 'fail';
      }
      console.log(`  Γ£ô  ${relPath} [article page] ΓåÆ article_pages/${slug}`);
      return 'ok';
    }
  }

  // ΓöÇΓöÇ PATH 4: DynamicNewsArticle component ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

  const dynData = extractDynamicNewsArticleContent(source);
  if (dynData) {
    const publishedAt = dynData.publishedAt ?? extractPublishedTime(source) ?? undefined;

    if (isDryRun) {
      console.log(`  Γ£ô  ${relPath} [dynamic news article]`);
      console.log(`     slug: ${slug} | title: "${dynData.title}"`);
      console.log(`     author: ${dynData.authorName} | breaking: ${dynData.breaking} | category: ${dynData.category}`);
      console.log(`     HTML body length: ${dynData.bodyHtml.length} chars`);
      return 'ok';
    }

    const { error } = await supabase
      .from('wiki_articles')
      .upsert(
        {
          slug,
          title: dynData.title,
          subtitle: dynData.subtitle || undefined,
          category: dynData.category || undefined,
          author_name: dynData.authorName || undefined,
          author_role: dynData.authorRole || undefined,
          read_time: dynData.readTime || undefined,
          tags: dynData.tags.length ? dynData.tags : undefined,
          breaking: dynData.breaking,
          published_at: publishedAt || undefined,
          content: [{ id: 'html-body', type: 'html', content: dynData.bodyHtml }],
        },
        { onConflict: 'slug' }
      );

    if (error) {
      console.error(`  Γ¥î  ${relPath} ΓÇö ${error.message}`);
      return 'fail';
    }

    console.log(`  Γ£ô  ${relPath} [dynamic news] ΓåÆ wiki_articles/${slug}`);
    return 'ok';
  }

  // ΓöÇΓöÇ PATH 4: Raw JSX layout (SEOWrapper / JackArticle / Hub / bare layout) ΓöÇ
  // These pages use NewsArticleSchema for JSON-LD but have their own raw JSX
  // layout. We extract the entire return() body, strip <NewsArticleSchema/>,
  // and convert the rest directly to HTML.
  {
    // Find `return (` position
    const returnIdx = source.search(/\breturn\s*\(/);
    if (returnIdx !== -1) {
      // Find the opening ( of return
      const parenStart = source.indexOf('(', returnIdx);
      // Find the matching closing )
      let depth = 0;
      let parenEnd = -1;
      for (let i = parenStart; i < source.length; i++) {
        if (source[i] === '(') depth++;
        else if (source[i] === ')') {
          depth--;
          if (depth === 0) { parenEnd = i; break; }
        }
      }

      if (parenEnd !== -1) {
        let bodyJsx = source.substring(parenStart + 1, parenEnd).trim();

        // Strip the outer <> fragment wrapper if present
        if (bodyJsx.startsWith('<>') && bodyJsx.endsWith('</>')) {
          bodyJsx = bodyJsx.slice(2, -3).trim();
        }

        // Remove <NewsArticleSchema .../> block (self-closing, multi-line)
        bodyJsx = bodyJsx.replace(/<NewsArticleSchema[\s\S]*?\/>/g, '').trim();

        // Remove any remaining empty fragment wrappers
        bodyJsx = bodyJsx.replace(/^\s*<>\s*|\s*<\/>\s*$/g, '').trim();

        const htmlBody = jsxToHtml(bodyJsx);

        if (htmlBody.length < 200) {
          // Too short ΓÇö likely a stub page, skip
          console.warn(`  ΓÜá∩╕Å  ${relPath} ΓÇö raw JSX body too short (${htmlBody.length} chars), skipping`);
          return 'skip';
        }

        const metaTitle = extractMetaTitle(source).replace(/\s*[|ΓÇöΓÇô\-].*$/, '').trim() || slug;
        const category = extractCategory(source);
        const publishedAt = extractPublishedTime(source);

        // Author from `authors: [{ name: '...' }]` or metadata.authors
        const authorMatch = source.match(/authors[:\s]*\[\s*\{[^}]*name[:\s]*['"`]([^'"`]+)['"`]/);
        const authorName = authorMatch ? authorMatch[1] : undefined;

        if (isDryRun) {
          console.log(`  Γ£ô  ${relPath} [raw JSX]`);
          console.log(`     slug: ${slug} | title: "${metaTitle}" | author: ${authorName || 'ΓÇö'} | category: ${category}`);
          console.log(`     HTML body length: ${htmlBody.length} chars`);
          return 'ok';
        }

        const { error } = await supabase
          .from('wiki_articles')
          .upsert(
            {
              slug,
              title: metaTitle,
              category: category || undefined,
              author_name: authorName || undefined,
              published_at: publishedAt || undefined,
              content: [{ id: 'html-body', type: 'html', content: htmlBody }],
            },
            { onConflict: 'slug' }
          );

        if (error) {
          console.error(`  Γ¥î  ${relPath} ΓÇö ${error.message}`);
          return 'fail';
        }

        console.log(`  Γ£ô  ${relPath} [raw JSX] ΓåÆ wiki_articles/${slug}`);
        return 'ok';
      }
    }
  }

  // ΓöÇΓöÇ No pattern matched ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  console.warn(`  ΓÜá∩╕Å  ${relPath} ΓÇö no grid or NewsArticle found, skipping`);
  return 'skip';
}

// ΓöÇΓöÇ Main ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
async function main() {
  let files: string[];

  if (singleFile) {
    const resolved = path.resolve(process.cwd(), singleFile);
    if (!fs.existsSync(resolved)) {
      console.error(`Γ¥î  File not found: ${resolved}`);
      process.exit(1);
    }
    files = [resolved];
  } else {
    files = findNewsArticlePages(APP_DIR);
  }

  if (files.length === 0) {
    console.log('ΓÜá∩╕Å  No NewsArticleSchema pages found.');
    return;
  }

  const modeLabel = isDryRun ? '[DRY RUN] ' : '';
  console.log(`\n${modeLabel}Found ${files.length} wiki page(s) to migrate\n`);

  let ok = 0, skipped = 0, failed = 0;

  for (const f of files) {
    const result = await processPage(f);
    if (result === 'ok') ok++;
    else if (result === 'skip') skipped++;
    else failed++;
  }

  console.log(`\n${'ΓöÇ'.repeat(50)}`);
  console.log(`${modeLabel}Done ΓÇö ${ok} migrated, ${skipped} skipped, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
