/**
 * wiki-publish.ts
 *
 * Unified publish pipeline for ALL article component types.
 *
 * Supported components → Supabase tables:
 *   <JackArticle>     → jack_articles
 *   <NewsArticle>     → articles
 *   <ArticlePage>     → article_pages
 *   <CreatorArticle>  → creator_articles
 *   <AlysaArticle>    → alysa_articles
 *
 * Usage:
 *   npm run wiki:publish -- --file app/trump/my-article/page.tsx
 *   npm run wiki:publish -- --file app/trump/my-article/page.tsx --dry-run
 *
 * Pipeline order (CRITICAL — do not reorder):
 *   1. Parse & validate (no writes yet)
 *   2. Validate thumbnail exists on disk
 *   3. Upsert to correct Supabase table
 *   4. Add/update content-registry entry
 *   5. Trim file to stub
 *   6. Verify Supabase row + print confirmation
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
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.warn('⚠️  No SUPABASE_SERVICE_ROLE_KEY — using anon key. RLS may block writes.');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── CLI ───────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const fileArg = (() => {
  const i = args.indexOf('--file');
  return i !== -1 ? args[i + 1] : null;
})();

if (!fileArg) {
  console.error('❌  Usage: npm run wiki:publish -- --file app/trump/my-article/page.tsx');
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), fileArg);
if (!fs.existsSync(filePath)) {
  console.error(`❌  File not found: ${filePath}`);
  process.exit(1);
}

// ── ANSI helpers ──────────────────────────────────────────────────────────────
const c = {
  green:  (s: string) => `\x1b[32m${s}\x1b[0m`,
  red:    (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  cyan:   (s: string) => `\x1b[36m${s}\x1b[0m`,
  bold:   (s: string) => `\x1b[1m${s}\x1b[0m`,
  gray:   (s: string) => `\x1b[90m${s}\x1b[0m`,
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function slugFromPath(p: string): string {
  const rel = path.relative(APP_DIR, path.dirname(p));
  return rel.replace(/\\/g, '/').replace(/\//g, '-');
}
function routeFromPath(p: string): string {
  const rel = path.relative(APP_DIR, path.dirname(p));
  return '/' + rel.replace(/\\/g, '/');
}

// Extract a string prop value from JSX source (handles single/double/template quotes)
function extractProp(source: string, propName: string): string | null {
  const re = new RegExp(`${propName}=\\{?["\`']([^"'\`]+)["\`']\\}?`);
  const m = source.match(re);
  return m ? m[1] : null;
}

// Extract a multiline string prop (title / description in metadata object)
function extractMetaProp(source: string, propName: string): string | null {
  const re = new RegExp(`${propName}:\\s*['"]((?:[^'"\\\\]|\\\\.)*)['"]`);
  const m = source.match(re);
  return m ? m[1].replace(/\\'/g, "'").replace(/\\"/g, '"') : null;
}

// ── JSX → HTML (minimal, handles the common patterns) ────────────────────────
function jsxToHtml(jsx: string): string {
  return jsx
    // Self-closing → empty tags
    .replace(/<br\s*\/>/gi, '<br>')
    .replace(/<hr\s*\/>/gi, '<hr>')
    // Strip JSX expressions in className etc
    .replace(/\s+className="[^"]*"/g, '')
    .replace(/\s+className=\{[^}]*\}/g, '')
    // <p>, headings, lists
    .replace(/<(p|h[1-6]|ul|ol|li|strong|em|blockquote|a|span|div|section|article)(\s[^>]*)?\s*\/?>/gi, (m) => m.replace(/\/>/g, '>'))
    .replace(/<\/(p|h[1-6]|ul|ol|li|strong|em|blockquote|a|span|div|section|article)>/gi, '</$1>')
    // JSX comments
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    // JSX expressions {variable} → leave as-is (best-effort)
    .replace(/\{`([^`]*)`\}/g, '$1')
    .replace(/\{'([^']*)'\}/g, '$1')
    .trim();
}

// ── Extract content from a full JackArticle page ──────────────────────────────
function extractJackContent(source: string): Record<string, unknown> {
  const row: Record<string, unknown> = {};

  // title — from metadata
  row.title = extractMetaProp(source, 'title') ?? '';
  // Clean off " | ObjectWire" suffix if present
  if (typeof row.title === 'string') {
    row.title = (row.title as string).replace(/\s*\|\s*ObjectWire\s*$/, '');
  }

  row.description   = extractMetaProp(source, 'description') ?? '';
  row.publish_date  = extractMetaProp(source, 'publishDate') ?? new Date().toISOString().split('T')[0];
  row.read_time     = extractProp(source, 'readTime') ?? null;
  row.category_label= extractProp(source, 'categoryLabel') ?? null;
  row.layout        = extractProp(source, 'layout') ?? 'news';
  row.accent_color  = extractProp(source, 'accentColor') ?? 'blue';
  row.section       = extractProp(source, 'section') ?? null;

  // Extract author name
  const authorMatch = source.match(/name:\s*["']([^"']+)["']/);
  if (authorMatch) {
    row.author = { name: authorMatch[1] };
  }

  // Hero image
  const heroSrc = extractProp(source, 'heroImage');
  const heroBlock = source.match(/heroImage=\{\{[\s\S]*?src:\s*["']([^"']+)["'][\s\S]*?alt:\s*["']([^"']+)["']/);
  if (heroBlock) {
    row.hero_image = { src: heroBlock[1], alt: heroBlock[2] };
  }

  // Thumbnail
  const thumbBlock = source.match(/thumbnail=\{\{[\s\S]*?src:\s*["']([^"']+)["'][\s\S]*?alt:\s*["']([^"']+)["']/);
  if (thumbBlock) {
    row.thumbnail = { src: thumbBlock[1], alt: thumbBlock[2] };
  }

  // Extract body HTML — content between <JackArticle ...> children and </JackArticle>
  const bodyMatch = source.match(/<JackArticle[\s\S]*?>\s*([\s\S]*?)\s*<\/JackArticle>/);
  row.content_html = bodyMatch ? jsxToHtml(bodyMatch[1]) : '';

  return row;
}

// ── Extract content from a full NewsArticle page ──────────────────────────────
function extractNewsContent(source: string): Record<string, unknown> {
  const row: Record<string, unknown> = {};

  row.title = extractProp(source, 'title') ?? '';

  row.subtitle       = extractProp(source, 'subtitle') ?? null;
  row.category       = extractProp(source, 'category') ?? 'News';
  row.category_color = extractProp(source, 'categoryColor') ?? 'blue';
  row.publish_date   = extractProp(source, 'publishDate') ?? new Date().toISOString().split('T')[0];
  row.read_time      = extractProp(source, 'readTime') ?? null;
  row.trending       = source.includes('trending={true}') || source.includes('trending:true');
  row.breaking       = source.includes('breaking={true}') || source.includes('breaking:true');
  row.status         = 'published';

  const authorMatch = source.match(/author=\{\{\s*name:\s*["']([^"']+)["']/);
  if (authorMatch) row.author_name = authorMatch[1];

  const tagsMatch = source.match(/tags=\{(\[[^\]]+\])\}/);
  if (tagsMatch) {
    try { row.tags = JSON.parse(tagsMatch[1].replace(/'/g, '"')); } catch { /* ignore */ }
  }

  const thumbBlock = source.match(/thumbnail=\{\{[\s\S]*?src:\s*["']([^"']+)["'][\s\S]*?alt:\s*["']([^"']+)["']/);
  if (thumbBlock) {
    row.thumbnail_src = thumbBlock[1];
    row.thumbnail_alt = thumbBlock[2];
  }

  const heroBlock = source.match(/heroImage=\{\{[\s\S]*?src:\s*["']([^"']+)["'][\s\S]*?alt:\s*["']([^"']+)["']/);
  if (heroBlock) {
    row.hero_image_src = heroBlock[1];
    row.hero_image_alt = heroBlock[2];
  }

  const bodyMatch = source.match(/<NewsArticle[\s\S]*?>\s*([\s\S]*?)\s*<\/NewsArticle>/);
  row.content_html = bodyMatch ? jsxToHtml(bodyMatch[1]) : '';

  return row;
}

// ── Extract content from a full ArticlePage page ──────────────────────────────
function extractPageContent(source: string): Record<string, unknown> {
  const row: Record<string, unknown> = {};

  row.title       = extractMetaProp(source, 'title') ?? '';
  if (typeof row.title === 'string') {
    row.title = (row.title as string).replace(/\s*\|\s*ObjectWire\s*$/, '');
  }
  // article_pages has no description column — omit it
  row.category    = extractProp(source, 'category') ?? null;
  row.last_updated= extractProp(source, 'lastUpdated') ?? new Date().toISOString().split('T')[0];

  // subtitle — from subtitle="..." prop on <ArticlePage>
  const subtitleMatch = source.match(/subtitle=["']([^"']+)["']/);
  if (subtitleMatch) row.subtitle = subtitleMatch[1];

  // url — from the canonical alternates in metadata
  const canonicalMatch = source.match(/canonical:\s*['"`]https:\/\/www\.objectwire\.org([^'"`]+)['"`]/);
  if (canonicalMatch) row.url = canonicalMatch[1];

  // back_link — backLink={{ href: '...', label: '...' }}
  const backLinkMatch = source.match(/backLink=\{\{\s*href:\s*['"]([^'"]+)['"]\s*,\s*label:\s*['"]([^'"]+)['"]/);
  if (backLinkMatch) row.back_link = { href: backLinkMatch[1], label: backLinkMatch[2] };

  // table_of_contents — extract items array from tableOfContents={[ { id: '...', label: '...' }, ... ]}
  const tocMatch = source.match(/tableOfContents=\{(\[[\s\S]*?\])\}/);
  if (tocMatch) {
    try {
      const normalized = tocMatch[1]
        .replace(/'/g, '"')
        .replace(/(\w+):/g, '"$1":')
        .replace(/,\s*\]/g, ']')
        .replace(/,\s*\}/g, '}');
      row.table_of_contents = JSON.parse(normalized);
    } catch { row.table_of_contents = []; }
  } else {
    row.table_of_contents = [];
  }

  // related_links — extract from relatedLinks={[ { href: '...', label: '...', description: '...' } ]}
  const relatedMatch = source.match(/relatedLinks=\{(\[[\s\S]*?\])\}/);
  if (relatedMatch) {
    try {
      const normalized = relatedMatch[1]
        .replace(/'/g, '"')
        .replace(/(\w+):/g, '"$1":')
        .replace(/,\s*\]/g, ']')
        .replace(/,\s*\}/g, '}');
      row.related_links = JSON.parse(normalized);
    } catch { row.related_links = []; }
  } else {
    row.related_links = [];
  }

  // info_box — extract the full infoBox={{ ... }} object as JSON
  // This handles the nested sections structure used by ArticlePage
  const infoBoxMatch = source.match(/infoBox=\{(\{[\s\S]*?\})\}\s*(?:tableOfContents|relatedLinks|backLink|lastUpdated|category|>)/);
  if (infoBoxMatch) {
    try {
      // Best-effort: convert JSX object literal to valid JSON
      const raw = infoBoxMatch[1]
        .replace(/'/g, '"')
        .replace(/(\b(?:title|image|src|alt|caption|sections|heading|items|list|links|label|value|href|description)\b)\s*:/g, '"$1":')
        .replace(/,\s*\}/g, '}')
        .replace(/,\s*\]/g, ']');
      row.info_box = JSON.parse(raw);
    } catch { row.info_box = null; }
  }

  // content_html — extract <section> tags from inside <ArticlePage>
  // We capture everything inside the JSX body and convert to proper HTML
  const bodyMatch = source.match(/<ArticlePage[\s\S]*?>\s*([\s\S]*?)\s*<\/ArticlePage>/);
  if (bodyMatch) {
    // Strip JSX component wrappers (TableOfContents, Quote, Section) — keep inner HTML
    let html = bodyMatch[1];
    // Remove <TableOfContents ... /> self-closing (it's rendered by the component from the DB field)
    html = html.replace(/<TableOfContents[\s\S]*?\/>/g, '');
    // Unwrap <Section id="..." title="..."> → <section id="..." class="mb-10 scroll-mt-20"><h2 ...>title</h2>
    html = html.replace(/<Section\s+id=["']([^"']+)["']\s+title=["']([^"']+)["']\s*>/g,
      '<section id="$1" class="mb-10 scroll-mt-20"><h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">$2</h2>');
    html = html.replace(/<\/Section>/g, '</section>');
    // Unwrap <Quote> → blockquote
    html = html.replace(/<Quote\s+text=["']([^"']+)["']\s+attribution=["']([^"']+)["']\s*\/>/g,
      '<blockquote class="border-l-4 border-gray-300 pl-4 italic my-6"><p>$1</p><footer class="text-sm text-gray-500 mt-2">$2</footer></blockquote>');
    row.content_html = jsxToHtml(html).trim();
  } else {
    row.content_html = '';
  }

  return row;
}

// ── Extract content from a full CreatorArticle / AlysaArticle page ────────────
// Both component names write the same column shape — only the target table differs.
function extractCreatorContent(source: string, componentTag: string): Record<string, unknown> {
  const row: Record<string, unknown> = {};

  // Status defaults to published when migrating from JSX
  row.status = 'published';

  // ── Schema fields — scoped to the schema={{ ... }} prop block ─────────────
  // Extract the raw schema={{ ... }} block first so inner keys don't cross-match
  const schemaPropMatch = source.match(/schema=\{\{([\s\S]*?)\}\}/);
  const schemaBlock = schemaPropMatch ? schemaPropMatch[1] : source;

  const schemaTitleMatch = schemaBlock.match(/title:\s*["'`]([^"'`]+)["'`]/);
  row.schema_title = schemaTitleMatch ? schemaTitleMatch[1] : (extractMetaProp(source, 'title') ?? '');
  if (typeof row.schema_title === 'string') {
    row.schema_title = (row.schema_title as string).replace(/\s*\|\s*ObjectWire\s*$/, '');
  }

  const schemaDescMatch = schemaBlock.match(/description:\s*["'`]([^"'`]+)["'`]/);
  row.schema_description = schemaDescMatch ? schemaDescMatch[1] : (extractMetaProp(source, 'description') ?? '');

  const schemaAuthorMatch = schemaBlock.match(/author:\s*["'`]([^"'`]+)["'`]/);
  row.schema_author = schemaAuthorMatch ? schemaAuthorMatch[1] : 'ObjectWire';

  const schemaSectionMatch = schemaBlock.match(/section:\s*["'`]([^"'`]+)["'`]/);
  row.schema_section = schemaSectionMatch ? schemaSectionMatch[1] : '';

  const schemaUrlMatch = schemaBlock.match(/articleUrl:\s*["'`]([^"'`]+)["'`]/);
  if (schemaUrlMatch) row.schema_article_url = schemaUrlMatch[1];

  const schemaImgMatch = schemaBlock.match(/imageUrl:\s*["'`]([^"'`]+)["'`]/);
  if (schemaImgMatch) row.schema_image_url = schemaImgMatch[1];

  const pubTimeMatch = schemaBlock.match(/publishedTime:\s*["'`]([^"'`]+)["'`]/);
  if (pubTimeMatch) row.schema_published_time = pubTimeMatch[1];

  const modTimeMatch = schemaBlock.match(/modifiedTime:\s*["'`]([^"'`]+)["'`]/);
  if (modTimeMatch) row.schema_modified_time = modTimeMatch[1];

  // ── Hero fields — scoped to the hero={{ ... }} prop block ─────────────────
  const heroPropMatch = source.match(/hero=\{\{([\s\S]*?)\}\}/);
  const heroBlock = heroPropMatch ? heroPropMatch[1] : '';

  const heroImgSrcMatch = heroBlock.match(/src:\s*["'`]([^"'`]+)["'`]/);
  if (heroImgSrcMatch) row.hero_image_src = heroImgSrcMatch[1];

  const heroImgAltMatch = heroBlock.match(/alt:\s*["'`]([^"'`]+)["'`]/);
  if (heroImgAltMatch) row.hero_image_alt = heroImgAltMatch[1];

  const heroNameMatch = heroBlock.match(/name:\s*["'`]([^"'`]+)["'`]/);
  if (heroNameMatch) row.hero_name = heroNameMatch[1];

  const heroSubMatch = heroBlock.match(/subtitle:\s*["'`]([^"'`]+)["'`]/);
  if (heroSubMatch) row.hero_subtitle = heroSubMatch[1];

  const heroDescMatch = heroBlock.match(/description:\s*["'`]([^"'`]+)["'`]/);
  if (heroDescMatch) row.hero_description = heroDescMatch[1];

  const heroGradientMatch = heroBlock.match(/gradient:\s*["'`]([^"'`]+)["'`]/);
  if (heroGradientMatch) row.hero_gradient = heroGradientMatch[1];

  // ── Sidebar fields — scoped to sidebar={{ ... }} prop block ───────────────
  const sidebarPropMatch = source.match(/sidebar=\{\{([\s\S]*?)\}\}/);
  const sidebarBlock = sidebarPropMatch ? sidebarPropMatch[1] : '';

  // Infobox sub-block
  const infoboxBlock = sidebarBlock.match(/infobox:\s*\{([\s\S]*?)(?:,\s*(?:callout|timeline|relatedLinks|meta):|\}$)/)?.[1] ?? sidebarBlock;

  const infoImgSrcMatch = infoboxBlock.match(/src:\s*["'`]([^"'`]+)["'`]/);
  if (infoImgSrcMatch) row.sidebar_infobox_image_src = infoImgSrcMatch[1];

  const infoImgAltMatch = infoboxBlock.match(/alt:\s*["'`]([^"'`]+)["'`]/);
  if (infoImgAltMatch) row.sidebar_infobox_image_alt = infoImgAltMatch[1];

  const infoNameMatch = infoboxBlock.match(/name:\s*["'`]([^"'`]+)["'`]/);
  if (infoNameMatch) row.sidebar_infobox_name = infoNameMatch[1];

  const infoSubMatch = infoboxBlock.match(/subtitle:\s*["'`]([^"'`]+)["'`]/);
  if (infoSubMatch) row.sidebar_infobox_subtitle = infoSubMatch[1];

  // Meta sub-block
  const metaBlock = sidebarBlock.match(/meta:\s*\{([\s\S]*?)(?:\}|$)/)?.[1] ?? '';

  const pubDateMatch = metaBlock.match(/publishedDate:\s*["'`]([^"'`]+)["'`]/) ?? sidebarBlock.match(/publishedDate:\s*["'`]([^"'`]+)["'`]/);
  if (pubDateMatch) row.sidebar_meta_published_date = pubDateMatch[1];

  const updatedDateMatch = metaBlock.match(/updatedDate:\s*["'`]([^"'`]+)["'`]/);
  if (updatedDateMatch) row.sidebar_meta_updated_date = updatedDateMatch[1];

  const sidebarAuthorMatch = metaBlock.match(/author:\s*["'`]([^"'`]+)["'`]/) ?? sidebarBlock.match(/author:\s*["'`]([^"'`]+)["'`]/);
  if (sidebarAuthorMatch) row.sidebar_meta_author = sidebarAuthorMatch[1];

  const sidebarCategoryMatch = metaBlock.match(/category:\s*["'`]([^"'`]+)["'`]/) ?? sidebarBlock.match(/category:\s*["'`]([^"'`]+)["'`]/);
  if (sidebarCategoryMatch) row.sidebar_meta_category = sidebarCategoryMatch[1];

  // ── Body HTML ─────────────────────────────────────────────────────────────
  const bodyMatch = source.match(new RegExp(`<${componentTag}[\\s\\S]*?>\\s*([\\s\\S]*?)\\s*<\\/${componentTag}>`));
  row.content_html = bodyMatch ? jsxToHtml(bodyMatch[1]) : '';

  // ── Defaults for required NOT NULL columns ────────────────────────────────
  row.schema_title          = row.schema_title          || '';
  row.schema_description    = row.schema_description    || '';
  row.schema_author         = row.schema_author         || 'ObjectWire';
  row.schema_article_url    = row.schema_article_url    || '';
  row.schema_section        = row.schema_section        || '';
  row.schema_published_time = row.schema_published_time || new Date().toISOString();
  row.schema_modified_time  = row.schema_modified_time  || new Date().toISOString();
  row.breadcrumbs           = row.breadcrumbs           ?? [];
  row.hero_image_src        = row.hero_image_src        || '';
  row.hero_image_alt        = row.hero_image_alt        || '';
  row.hero_name             = row.hero_name             || '';
  row.hero_subtitle         = row.hero_subtitle         || '';
  row.hero_description      = row.hero_description      || '';
  row.hero_badges           = row.hero_badges           ?? [];
  row.hero_cta_buttons      = row.hero_cta_buttons      ?? [];
  row.sidebar_infobox_image_src  = row.sidebar_infobox_image_src  || '';
  row.sidebar_infobox_image_alt  = row.sidebar_infobox_image_alt  || '';
  row.sidebar_infobox_name       = row.sidebar_infobox_name       || '';
  row.sidebar_infobox_subtitle   = row.sidebar_infobox_subtitle   || '';
  row.sidebar_infobox_rows       = row.sidebar_infobox_rows       ?? [];
  row.sidebar_timeline           = row.sidebar_timeline           ?? [];
  row.sidebar_related_links      = row.sidebar_related_links      ?? [];
  row.sidebar_meta_published_date= row.sidebar_meta_published_date|| '';
  row.sidebar_meta_author        = row.sidebar_meta_author        || 'ObjectWire';
  row.sidebar_meta_category      = row.sidebar_meta_category      || '';
  row.tiktok_embed               = row.tiktok_embed               ?? false;

  return row;
}

// ── Build the stub replacement file ──────────────────────────────────────────
function buildStub(
  source: string,
  slug: string,
  component: 'JackArticle' | 'NewsArticle' | 'ArticlePage' | 'CreatorArticle' | 'AlysaArticle'
): string {
  // Keep the metadata export exactly as-is
  const metaMatch = source.match(/(export const metadata[\s\S]*?^};)/m);
  const metadata = metaMatch ? metaMatch[0] : '';

  // Preserve const SLUG and const OG_IMAGE so metadata template literals don't break
  const slugConstMatch   = source.match(/^const SLUG\s*=\s*.+;/m);
  const ogImageConstMatch = source.match(/^const OG_IMAGE\s*=\s*.+;/m);
  const slugConst   = slugConstMatch   ? slugConstMatch[0]   : `const SLUG = '/${slug.replace(/-/g, '/')}';`;
  const ogImageConst = ogImageConstMatch ? ogImageConstMatch[0] : `const OG_IMAGE = '';`;

  const imports: Record<string, string> = {
    JackArticle:    "import { JackArticleDB } from '@/components/JackArticleDB';",
    NewsArticle:    "import { NewsArticleDB } from '@/components/NewsArticleDB';",
    ArticlePage:    "import { ArticlePageDB } from '@/components/ArticlePageDB';",
    CreatorArticle: "import { CreatorArticleDB } from '@/components/CreatorArticleDB';",
    AlysaArticle:   "import { AlysaArticleDB } from '@/components/AlysaArticleDB';",
  };

  const returns: Record<string, string> = {
    JackArticle:    `  return <JackArticleDB slug="${slug}" />;`,
    NewsArticle:    `  return <NewsArticleDB slug="${slug}" />;`,
    ArticlePage:    `  return <ArticlePageDB slug="${slug}" />;`,
    CreatorArticle: `  return <CreatorArticleDB slug="${slug}" />;`,
    AlysaArticle:   `  return <AlysaArticleDB slug="${slug}" />;`,
  };

  // Derive a function name from the slug
  const fnName = slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('') + 'Page';

  return `import type { Metadata } from 'next';
${imports[component]}

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

${slugConst}
${ogImageConst}

${metadata}

export default function ${fnName}() {
${returns[component]}
}
`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(c.bold(`\n🚀  wiki:publish${isDryRun ? c.yellow(' [DRY RUN]') : ''}`));
  console.log(c.gray(`   File: ${fileArg}\n`));

  const source = fs.readFileSync(filePath, 'utf-8');
  const slug   = slugFromPath(filePath);
  const route  = routeFromPath(filePath);

  // ── Detect if already a stub ──────────────────────────────────────────────
  const isAlreadyStub = [
    'WikiArticle', 'NewsArticleDB', 'JackArticleDB', 'ArticlePageDB',
    'CreatorArticleDB', 'AlysaArticleDB',
  ].some(m => source.includes(m));

  if (isAlreadyStub) {
    console.log(c.yellow('⚠️  This file is already a stub. Nothing to publish.'));
    console.log(c.gray(`   Slug: ${slug}`));
    process.exit(0);
  }

  // ── Step 1: Detect component type ────────────────────────────────────────
  let component: 'JackArticle' | 'NewsArticle' | 'ArticlePage' | 'CreatorArticle' | 'AlysaArticle';
  let table: string;

  if (source.includes('<JackArticle')) {
    component = 'JackArticle';
    table = 'jack_articles';
  } else if (source.includes('<NewsArticle') || source.includes('NewsArticleSchema')) {
    component = 'NewsArticle';
    table = 'articles';
  } else if (source.includes('<ArticlePage')) {
    component = 'ArticlePage';
    table = 'article_pages';
  } else if (source.includes('<AlysaArticle')) {
    component = 'AlysaArticle';
    table = 'alysa_articles';
  } else if (source.includes('<CreatorArticle')) {
    component = 'CreatorArticle';
    table = 'creator_articles';
  } else {
    console.error(c.red('❌  Could not detect component type.'));
    console.error(c.gray('   Expected one of: JackArticle, NewsArticle, ArticlePage, CreatorArticle, AlysaArticle'));
    process.exit(1);
  }

  console.log(`  Component : ${c.cyan(component)}`);
  console.log(`  Table     : ${c.cyan(table)}`);
  console.log(`  Slug      : ${c.cyan(slug)}`);
  console.log(`  Route     : ${c.cyan(route)}\n`);

  // ── Step 2: Extract content ───────────────────────────────────────────────
  let row: Record<string, unknown>;
  if (component === 'JackArticle')      row = extractJackContent(source);
  else if (component === 'NewsArticle') row = extractNewsContent(source);
  else if (component === 'CreatorArticle') row = extractCreatorContent(source, 'CreatorArticle');
  else if (component === 'AlysaArticle')   row = extractCreatorContent(source, 'AlysaArticle');
  else                                  row = extractPageContent(source);

  row.slug = slug;
  console.log(`  Title     : ${c.bold(String(row.title || '(empty — check metadata)'))}`);

  // ── Step 3: Validate thumbnail ────────────────────────────────────────────
  const thumbSrc = (row.thumbnail_src ?? (row.thumbnail as Record<string,string>)?.src ?? row.hero_image_src ?? (row.hero_image as Record<string,string>)?.src) as string | undefined;
  if (thumbSrc) {
    const thumbAbs = path.join(process.cwd(), 'public', thumbSrc.replace(/^\//, ''));
    if (!fs.existsSync(thumbAbs)) {
      console.error(c.red(`\n❌  Thumbnail not found on disk:`));
      console.error(c.red(`   public/${thumbSrc.replace(/^\//, '')}`));
      console.error(c.yellow('   Fix the image path in page.tsx before publishing.\n'));
      process.exit(1);
    } else {
      console.log(`  Thumbnail : ${c.green('✅')} ${thumbSrc}`);
    }
  } else {
    console.log(`  Thumbnail : ${c.yellow('⚠️  none detected')}`);
  }

  if (isDryRun) {
    console.log(c.yellow('\n  [DRY RUN] — no writes performed.'));
    console.log(c.gray('  Row to upsert:'));
    console.log(JSON.stringify(row, null, 4).split('\n').map(l => '    ' + l).join('\n'));
    return;
  }

  // ── Step 4: Upsert to Supabase ────────────────────────────────────────────
  console.log(`\n  ${c.bold('Step 3/5')} Upserting to Supabase (${table})...`);
  const { error: upsertErr } = await supabase
    .from(table)
    .upsert(row, { onConflict: 'slug' });

  if (upsertErr) {
    console.error(c.red(`\n❌  Supabase upsert failed: ${upsertErr.message}`));
    process.exit(1);
  }
  console.log(c.green('     ✅ Supabase row upserted.'));

  // ── Step 5: Update content-registry ──────────────────────────────────────
  console.log(`\n  ${c.bold('Step 4/5')} Updating content-registry...`);
  const registryPath = path.resolve(process.cwd(), 'lib/content-registry.ts');
  const registrySource = fs.readFileSync(registryPath, 'utf-8');

  const alreadyRegistered = registrySource.includes(`"${route}"`) || registrySource.includes(`'${route}'`);
  if (alreadyRegistered) {
    console.log(c.gray('     (already in registry — skipping)'));
  } else {
    // Find the closing bracket of the contentRegistry array
    const insertBefore = '// =============================================================================\n// HELPER FUNCTIONS';
    const newEntry = `
  // --- Auto-added by wiki:publish ${new Date().toISOString().split('T')[0]} ---
  {
    slug: "${route}",
    title: ${JSON.stringify(String(row.title || ''))},
    description: ${JSON.stringify(String(row.subtitle ?? row.description ?? ''))},
    publishDate: ${JSON.stringify(String(row.publish_date || new Date().toISOString().split('T')[0]))},
    modifiedDate: ${JSON.stringify(new Date().toISOString().split('T')[0])},
    category: ${JSON.stringify(String(row.category_label ?? row.category ?? 'General'))},
    tags: [],
    author: "ObjectWire Editorial",
    priority: 0.7,
    changeFrequency: "weekly",
  },

`;

    if (registrySource.includes(insertBefore)) {
      const updated = registrySource.replace(insertBefore, newEntry + insertBefore);
      fs.writeFileSync(registryPath, updated, 'utf-8');
      console.log(c.green('     ✅ Entry added to content-registry.ts'));
    } else {
      // Fallback: insert before the last ]; in the array
      const updated = registrySource.replace(/\];\s*\n\/\/ =+\n\/\/ HELPER/, `${newEntry}];\n// =============================================================================\n// HELPER`);
      fs.writeFileSync(registryPath, updated, 'utf-8');
      console.log(c.green('     ✅ Entry added to content-registry.ts (fallback insertion)'));
    }
  }

  // ── Step 6: Trim file to stub ─────────────────────────────────────────────
  console.log(`\n  ${c.bold('Step 5/5')} Trimming file to stub...`);
  const bakPath = filePath + '.bak';
  fs.copyFileSync(filePath, bakPath);

  const stub = buildStub(source, slug, component);
  fs.writeFileSync(filePath, stub, 'utf-8');
  console.log(c.green(`     ✅ Stub written.`));

  // ── Step 7: Verify Supabase ───────────────────────────────────────────────
  const { data: verify } = await supabase
    .from(table)
    .select('slug')
    .eq('slug', slug)
    .single();

  if (!verify) {
    console.error(c.red('\n❌  Verification failed — row not found in Supabase after upsert.'));
    console.log(c.yellow('   Restoring original file from backup...'));
    fs.copyFileSync(bakPath, filePath);
    fs.unlinkSync(bakPath);
    process.exit(1);
  }

  // Clean up backup
  fs.unlinkSync(bakPath);

  console.log(c.green(`\n  ✅  Published successfully!`));
  console.log(c.gray(`     Slug    : ${slug}`));
  console.log(c.gray(`     Table   : ${table}`));
  console.log(c.gray(`     Route   : ${route}`));
  console.log(c.gray(`\n  Next: git add -A && git commit -m "feat: publish ${route}"\n`));
}

main().catch((e) => { console.error(e); process.exit(1); });
