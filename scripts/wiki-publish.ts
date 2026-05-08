/**
 * wiki-publish.ts
 *
 * Unified publish pipeline for ALL article component types.
 * Content is stored ON-PREM as local JSON files — no Supabase dependency.
 *
 * Supported components → static JSON dirs:
 *   <JackArticle>     → content/static/jack_articles/
 *   <NewsArticle>     → content/static/articles/
 *   <ArticlePage>     → content/static/article_pages/
 *   <CreatorArticle>  → content/static/creator_articles/
 *   <AlysaArticle>    → content/static/alysa_articles/
 *
 * Usage:
 *   npm run wiki:publish -- --file app/trump/my-article/page.tsx
 *   npm run wiki:publish -- --file app/trump/my-article/page.tsx --dry-run
 *
 * Pipeline order (CRITICAL — do not reorder):
 *   1. Parse & validate (no writes yet)
 *   2. Run Alfasa Sentinel E-E-A-T quality gate
 *   3. Validate thumbnail exists on disk
 *   4. Write row to local static JSON file (on-prem storage)
 *   5. Add/update content-registry entry
 *   6. Trim file to stub
 *   7. Ping Google Search Console Indexing API
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as dotenv from 'dotenv';
import { runSentinel, printSentinelReport, type SentinelInput } from './alfasa-sentinel';
import { logPublishSession } from './alfasa-session-log';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const APP_DIR = path.resolve(process.cwd(), 'app');
const STATIC_ROOT = path.resolve(process.cwd(), 'content', 'static');

// Google Search Console Indexing API (optional — only pings if key is present)
const GSC_SERVICE_ACCOUNT_KEY = process.env.GOOGLE_INDEXING_API_KEY ?? '';

// ── On-prem static JSON store ─────────────────────────────────────────────────
// Maps component type → subfolder under content/static/
const STATIC_DIR_MAP: Record<string, string> = {
  JackArticle:    'jack_articles',
  NewsArticle:    'articles',
  ArticlePage:    'article_pages',
  CreatorArticle: 'creator_articles',
  AlysaArticle:   'alysa_articles',
};

/**
 * Write a row to the on-prem static JSON store.
 * File name: <slug>.json inside the correct subfolder.
 * Also updates _index.json in that folder.
 */
function writeStaticRow(component: string, slug: string, row: Record<string, unknown>): string {
  const dirName = STATIC_DIR_MAP[component] ?? 'articles';
  const dir = path.join(STATIC_ROOT, dirName);
  fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(row, null, 2), 'utf-8');

  // Update _index.json — lightweight list used by DB components for sidebar suggestions
  const indexPath = path.join(dir, '_index.json');
  let index: Array<{ slug: string; title: string; url?: string; category?: string }> = [];
  if (fs.existsSync(indexPath)) {
    try { index = JSON.parse(fs.readFileSync(indexPath, 'utf-8')); } catch { /* reset */ }
  }
  const existing = index.findIndex(e => e.slug === slug);
  const entry = {
    slug,
    title: String(row.title ?? row.schema_title ?? ''),
    url:   String(row.article_url ?? row.url ?? row.schema_article_url ?? ''),
    category: String(row.category ?? row.category_label ?? row.schema_section ?? ''),
  };
  if (existing >= 0) index[existing] = entry;
  else index.unshift(entry);
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf-8');

  return filePath;
}

/**
 * Verify the static JSON file exists and is valid JSON.
 */
function verifyStaticRow(component: string, slug: string): boolean {
  const dirName = STATIC_DIR_MAP[component] ?? 'articles';
  const fp = path.join(STATIC_ROOT, dirName, `${slug}.json`);
  if (!fs.existsSync(fp)) return false;
  try { JSON.parse(fs.readFileSync(fp, 'utf-8')); return true; } catch { return false; }
}

/**
 * Ping the Google Search Console URL Inspection / Indexing API.
 * Uses the simple HTTP Indexing API (requires a service account with delegated access).
 * If no key is configured this step is skipped gracefully.
 */
async function pingSearchConsole(url: string): Promise<void> {
  if (!GSC_SERVICE_ACCOUNT_KEY) {
    console.log(c.gray('     GSC ping skipped — GOOGLE_INDEXING_API_KEY not set in .env.local'));
    return;
  }

  const body = JSON.stringify({ url, type: 'URL_UPDATED' });
  return new Promise((resolve) => {
    const req = https.request(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GSC_SERVICE_ACCOUNT_KEY}`,
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', chunk => (data += chunk));
        res.on('end', () => {
          if (res.statusCode === 200) {
            console.log(c.green(`     ✅ GSC notified — URL submitted for indexing`));
          } else {
            console.log(c.yellow(`     ⚠️  GSC ping returned HTTP ${res.statusCode}: ${data.slice(0, 120)}`));
          }
          resolve();
        });
      }
    );
    req.on('error', (e) => {
      console.log(c.yellow(`     ⚠️  GSC ping failed: ${e.message}`));
      resolve();
    });
    req.write(body);
    req.end();
  });
}

// ── CLI ───────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const skipSentinel = args.includes('--skip-sentinel');
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
  // Try double-quoted: prop="value" (allows single quotes inside)
  const reDouble = new RegExp(`${propName}="([^"]*)"`);
  const mDouble = source.match(reDouble);
  if (mDouble) return mDouble[1];

  // Try single-quoted: prop='value' (allows double quotes inside)
  const reSingle = new RegExp(`${propName}='([^']*)'`);
  const mSingle = source.match(reSingle);
  if (mSingle) return mSingle[1];

  // Try JSX expression: prop={"value"} or prop={'value'}
  const reExpr = new RegExp(`${propName}=\\{["']([^"']+)["']\\}`);
  const mExpr = source.match(reExpr);
  return mExpr ? mExpr[1] : null;
}

// Extract a multiline string prop (title / description in metadata object)
function extractMetaProp(source: string, propName: string): string | null {
  const re = new RegExp(`${propName}:\\s*['"]((?:[^'"\\\\]|\\\\.)*)['"]`);
  const m = source.match(re);
  return m ? m[1].replace(/\\'/g, "'").replace(/\\"/g, '"') : null;
}

/**
 * Extract a JSX prop value that contains an object or array literal.
 * Handles nested braces, quoted strings, and template literals.
 * Uses brace-depth tracking to find the matching close brace.
 * Returns the parsed JS value or null if not found / parse error.
 *
 * Only used by wiki:publish (local build tool) on developer-authored source files.
 */
function extractJSXPropValue(source: string, propName: string): unknown | null {
  const re = new RegExp(`\\b${propName}=\\{`);
  const match = source.match(re);
  if (!match || match.index === undefined) return null;

  const start = match.index + match[0].length;
  let depth = 1;
  let i = start;

  while (i < source.length && depth > 0) {
    const ch = source[i];
    if (ch === '{') { depth++; }
    else if (ch === '}') { depth--; if (depth === 0) break; }
    else if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      i++;
      while (i < source.length && source[i] !== quote) {
        if (source[i] === '\\') i++;
        i++;
      }
    }
    i++;
  }

  if (depth !== 0) return null;

  const raw = source.slice(start, i).trim();

  // Resolve common variable references (SLUG, ARTICLE_URL)
  const slugConstMatch = source.match(/const\s+SLUG\s*=\s*['"`]([^'"`]+)['"`]/);
  const slugVal = slugConstMatch ? slugConstMatch[1] : '';
  const articleUrlVal = `https://www.objectwire.org${slugVal}`;

  // eslint-disable-next-line no-new-func
  try { return new Function('SLUG', 'ARTICLE_URL', `return (${raw})`)(slugVal, articleUrlVal); }
  catch { return null; }
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

  // ── Metadata-derived fields ──────────────────────────────────────────────
  row.title = extractMetaProp(source, 'title') ?? '';
  if (typeof row.title === 'string') {
    row.title = (row.title as string).replace(/\s*\|\s*ObjectWire\s*$/, '');
  }
  row.description   = extractMetaProp(source, 'description') ?? '';

  // ISO dates from metadata openGraph block
  row.publish_date_iso  = extractMetaProp(source, 'publishedTime') ?? null;
  row.modified_date_iso = extractMetaProp(source, 'modifiedTime') ?? null;

  // keywords from metadata
  const metaKeywordsMatch = source.match(/keywords:\s*\[([\s\S]*?)\]/);
  if (metaKeywordsMatch) {
    try {
      // eslint-disable-next-line no-new-func
      row.keywords = new Function(`return [${metaKeywordsMatch[1]}]`)();
    } catch { /* ignore */ }
  }

  // ── Simple string props from <JackArticle ...> ───────────────────────────
  row.publish_date   = extractProp(source, 'publishDate') ?? new Date().toISOString().split('T')[0];
  row.read_time      = extractProp(source, 'readTime') ?? null;
  row.category_label = extractProp(source, 'categoryLabel') ?? null;
  row.layout         = extractProp(source, 'layout') ?? 'news';
  row.accent_color   = extractProp(source, 'accentColor') ?? 'blue';
  row.section        = extractProp(source, 'section') ?? null;
  row.subtitle       = extractProp(source, 'subtitle') ?? null;
  row.subject        = extractProp(source, 'subject') ?? null;
  row.footer_tagline = extractProp(source, 'footerTagline') ?? null;

  // ── Author — full object ─────────────────────────────────────────────────
  const authorObj = extractJSXPropValue(source, 'author') as Record<string, string> | null;
  if (authorObj && typeof authorObj === 'object') {
    row.author = authorObj;
  } else {
    // Fallback: try simple name extraction
    const authorMatch = source.match(/name:\s*["']([^"']+)["']/);
    if (authorMatch) row.author = { name: authorMatch[1] };
  }

  // ── Hero image — object ──────────────────────────────────────────────────
  const heroObj = extractJSXPropValue(source, 'heroImage') as Record<string, string> | null;
  if (heroObj && typeof heroObj === 'object') {
    row.hero_image = heroObj;
  } else {
    const heroBlock = source.match(/heroImage=\{\{[\s\S]*?src:\s*["']([^"']+)["'][\s\S]*?alt:\s*["']([^"']+)["']/);
    if (heroBlock) row.hero_image = { src: heroBlock[1], alt: heroBlock[2] };
  }

  // Fallback: map thumbnail prop to hero_image if hero_image is not set
  if (!row.hero_image) {
    const thumbObj = extractJSXPropValue(source, 'thumbnail') as Record<string, string> | null;
    if (thumbObj && typeof thumbObj === 'object') {
      row.hero_image = thumbObj;
    }
  }

  // ── Structured JSONB props ───────────────────────────────────────────────
  const timeline = extractJSXPropValue(source, 'timeline');
  if (Array.isArray(timeline)) row.timeline = timeline;

  const sources = extractJSXPropValue(source, 'sources');
  if (Array.isArray(sources)) row.sources = sources;

  const tags = extractJSXPropValue(source, 'tags');
  if (Array.isArray(tags)) row.tags = tags;

  const relatedArticles = extractJSXPropValue(source, 'relatedArticles');
  if (Array.isArray(relatedArticles)) row.related_articles = relatedArticles;

  const breadcrumbs = extractJSXPropValue(source, 'breadcrumbs');
  if (Array.isArray(breadcrumbs)) row.breadcrumbs = breadcrumbs;

  const categories = extractJSXPropValue(source, 'categories');
  if (Array.isArray(categories)) row.categories = categories;

  const documents = extractJSXPropValue(source, 'documents');
  if (Array.isArray(documents)) row.documents = documents;

  const footerLinks = extractJSXPropValue(source, 'footerLinks');
  if (Array.isArray(footerLinks)) row.footer_links = footerLinks;

  // ── Boolean props ────────────────────────────────────────────────────────
  if (source.includes('showNewsletter={true}'))          row.show_newsletter = true;
  if (source.includes('showCorrections={false}'))        row.show_corrections = false;
  if (source.includes('showEditorialStandards={false}')) row.show_editorial_standards = false;

  // ── article_url — derive from file path (SLUG const) ────────────────────
  // The JSX usually references a variable: articleUrl={ARTICLE_URL}
  // Resolve from the const SLUG line in the file
  const slugConstMatch = source.match(/const\s+SLUG\s*=\s*['"`]([^'"`]+)['"`]/);
  if (slugConstMatch) {
    row.article_url = slugConstMatch[1];
  }

  // ── Body HTML — content between <JackArticle ...> and </JackArticle> ────
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

  const authorSlugMatch = source.match(/authorSlug:\s*["']([^"']+)["']/);
  if (authorSlugMatch) row.author_slug = authorSlugMatch[1];

  // published_at: prefer openGraph publishedTime ISO string, fall back to constructing from publishDate
  const publishedTimeMatch = source.match(/publishedTime:\s*["']([^"']+)["']/);
  if (publishedTimeMatch) {
    row.published_at = publishedTimeMatch[1];
  } else if (row.publish_date) {
    // Convert "April 16, 2026" display string to ISO-8601
    const d = new Date(row.publish_date as string);
    row.published_at = isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
  }

  // topic_tag — derive from path prefix if not explicitly set
  const topicTagMatch = source.match(/topic_tag=["']([^"']+)["']/);
  if (topicTagMatch) {
    row.topic_tag = topicTagMatch[1];
  } else {
    // Auto-derive from category
    const cat = String(row.category ?? '').toLowerCase();
    const catToTopic: Record<string, string> = {
      tech: 'ai', technology: 'ai', gaming: 'gaming', entertainment: 'entertainment',
      crypto: 'crypto', finance: 'finance', politics: 'politics', sports: 'sports',
      science: 'science', world: 'world', culture: 'culture', news: 'news',
    };
    row.topic_tag = catToTopic[cat] ?? 'news';
  }

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

  // (?!\w) ensures we match <NewsArticle (whitespace) but NOT <NewsArticleSchema or other variants
  const bodyMatch = source.match(/<NewsArticle(?!\w)[\s\S]*?>\s*([\s\S]*?)\s*<\/NewsArticle>/);
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

  // keywords array inside schema={{ ... }}
  const schemaKeywordsMatch = schemaBlock.match(/keywords:\s*(\[[\s\S]*?\])/);
  if (schemaKeywordsMatch) {
    try {
      // eslint-disable-next-line no-new-func
      row.schema_keywords = new Function(`return (${schemaKeywordsMatch[1]})`)();
    } catch { /* ignore — defaults to {} */ }
  }

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

  // Preserve const SLUG, OG_IMAGE, and always emit ARTICLE_URL so metadata
  // template literals that reference it don't break after trimming.
  const slugConstMatch    = source.match(/^const SLUG\s*=\s*.+;/m);
  const ogImageConstMatch = source.match(/^const OG_IMAGE\s*=\s*.+;/m);
  const slugConst    = slugConstMatch    ? slugConstMatch[0]    : `const SLUG = '/${slug.replace(/-/g, '/')}';`;
  const ogImageConst = ogImageConstMatch ? ogImageConstMatch[0] : `const OG_IMAGE = '';`;
  // Always regenerate ARTICLE_URL from SLUG so it's never missing in the stub
  const articleUrlConst = `const ARTICLE_URL = \`https://www.objectwire.org\${SLUG}\`; // restored by wiki:publish`;

  const imports: Record<string, string> = {
    JackArticle:    "import { JackArticleDB } from '@/components/articles/JackArticleDB';",
    NewsArticle:    "import { NewsArticleDB } from '@/components/articles/NewsArticleDB';",
    ArticlePage:    "import { ArticlePageDB } from '@/components/articles/ArticlePageDB';",
    CreatorArticle: "import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';",
    AlysaArticle:   "import { AlysaArticleDB } from '@/components/articles/AlysaArticleDB';",
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

// Page renders dynamically — content served from on-prem static JSON.
// Run 'npm run wiki:publish -- --file <path>' to update the on-prem static JSON.
export const dynamic = 'force-dynamic';

${slugConst}
${articleUrlConst}
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

  if (source.includes('<JackArticle')) {
    component = 'JackArticle';
  } else if (source.includes('<NewsArticle') || source.includes('NewsArticleSchema')) {
    component = 'NewsArticle';
  } else if (source.includes('<ArticlePage')) {
    component = 'ArticlePage';
  } else if (source.includes('<AlysaArticle')) {
    component = 'AlysaArticle';
  } else if (source.includes('<CreatorArticle')) {
    component = 'CreatorArticle';
  } else {
    console.error(c.red('❌  Could not detect component type.'));
    console.error(c.gray('   Expected one of: JackArticle, NewsArticle, ArticlePage, CreatorArticle, AlysaArticle'));
    process.exit(1);
  }

  const staticDir = STATIC_DIR_MAP[component];
  console.log(`  Component : ${c.cyan(component)}`);
  console.log(`  Storage   : ${c.cyan(`content/static/${staticDir}/`)}`);
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
  // Ensure url is set for article types that use a url column
  const typesWithUrlColumn = ['NewsArticle', 'ArticlePage'];
  if (typesWithUrlColumn.includes(component) && !row.url) row.url = route;
  // Display title: creator/alysa tables store it as schema_title, others as title
  const displayTitle = String(row.title || row.schema_title || '(empty — check metadata)');
  console.log(`  Title     : ${c.bold(displayTitle)}`);

  // ── Alfasa Sentinel — E-E-A-T quality gate ────────────────────────────────
  // Runs BEFORE any writes. Blocks publish on hard failures. Warns on soft issues.
  // Bypass only with --skip-sentinel (logged to session file).
  const sentinelInput: SentinelInput = {
    filePath,
    title:          String(row.title   ?? row.schema_title ?? ''),
    subtitle:       String(row.subtitle ?? row.hero_subtitle ?? row.description ?? ''),
    author_name:    String(
      row.author_name ??
      (row.author && typeof row.author === 'object' ? (row.author as Record<string,string>).name : null) ??
      row.schema_author ?? ''
    ),
    author_slug:    String(
      row.author_slug ??
      (row.author && typeof row.author === 'object' ? (row.author as Record<string,string>).slug : null) ??
      ''
    ),
    published_at:   String(row.published_at ?? row.publish_date_iso ?? row.schema_published_time ?? ''),
    content_html:   String(row.content_html ?? ''),
    tags:           Array.isArray(row.tags) ? row.tags as string[] : undefined,
    thumbnail_src:  String(
      row.thumbnail_src ??
      (row.thumbnail && typeof row.thumbnail === 'object' ? (row.thumbnail as Record<string,string>).src : null) ??
      row.hero_image_src ??
      (row.hero_image && typeof row.hero_image === 'object' ? (row.hero_image as Record<string,string>).src : null) ??
      ''
    ) || undefined,
    category:       String(row.category ?? row.category_label ?? row.schema_section ?? ''),
    url:            String(row.url ?? row.article_url ?? row.schema_article_url ?? route),
    metaTitle:      extractMetaProp(source, 'title') ?? undefined,
    metaDescription:extractMetaProp(source, 'description') ?? undefined,
    canonicalUrl:   (() => {
      // Try literal value: canonical: 'https://...' or canonical: `https://...`
      const litM = source.match(/canonical:\s*[`'"]([^`'"]+)[`'"]/);
      if (litM) return litM[1];
      // Fall back to SLUG const
      const slugM = source.match(/const\s+SLUG\s*=\s*['"`]([^'"`]+)['"`]/);
      if (slugM) return `https://www.objectwire.org${slugM[1]}`;
      return undefined;
    })(),
  };

  let sentinelPassed = false;
  let sentinelResult: ReturnType<typeof runSentinel> = { score: 0, grade: 'F', warnings: [], blocks: [], pass: false, wordCount: 0, h2Count: 0, internalLinkCount: 0, externalLinkCount: 0 };

  if (skipSentinel) {
    console.log(c.yellow('\n  ⚠️  --skip-sentinel flag detected. E-E-A-T gate bypassed.'));
    console.log(c.yellow('     This will be logged. Use only for emergency publishes.\n'));
    sentinelPassed = false; // logged as skipped
  } else {
    sentinelResult = runSentinel(sentinelInput);
    printSentinelReport(sentinelResult, displayTitle);
    if (!sentinelResult.pass) {
      process.exit(1);
    }
    sentinelPassed = true;
  }

  // ── Step 3: Validate thumbnail ────────────────────────────────────────────
  const thumbSrc = (row.thumbnail_src ?? (row.thumbnail as Record<string,string>)?.src ?? row.hero_image_src ?? (row.hero_image as Record<string,string>)?.src) as string | undefined;
  if (thumbSrc) {
    // Remote URLs (Unsplash, CDN, etc.) don't need a disk check
    if (/^https?:\/\//.test(thumbSrc)) {
      console.log(`  Thumbnail : ${c.green('✅')} ${thumbSrc} ${c.gray('(remote URL)')}`);
    } else {
      const thumbAbs = path.join(process.cwd(), 'public', thumbSrc.replace(/^\//, ''));
      if (!fs.existsSync(thumbAbs)) {
        console.error(c.red(`\n❌  Thumbnail not found on disk:`));
        console.error(c.red(`   public/${thumbSrc.replace(/^\//, '')}`));
        console.error(c.yellow('   Fix the image path in page.tsx before publishing.\n'));
        process.exit(1);
      } else {
        console.log(`  Thumbnail : ${c.green('✅')} ${thumbSrc}`);
      }
    }
  } else {
    console.log(`  Thumbnail : ${c.yellow('⚠️  none detected')}`);
  }

  if (isDryRun) {
    console.log(c.yellow('\n  [DRY RUN] — no writes performed.'));
    console.log(c.gray('  Row to write (on-prem JSON):'));
    console.log(JSON.stringify(row, null, 4).split('\n').map(l => '    ' + l).join('\n'));
    return;
  }

  // ── Step 4: Write to on-prem static JSON ─────────────────────────────────
  console.log(`\n  ${c.bold('Step 3/5')} Writing to on-prem static JSON (${STATIC_DIR_MAP[component]})...`);
  const bakPath = filePath + '.bak';
  fs.copyFileSync(filePath, bakPath);
  try {
    const writtenPath = writeStaticRow(component, slug, row);
    const relWritten = path.relative(process.cwd(), writtenPath);
    console.log(c.green(`     ✅ Static JSON written: ${relWritten}`));
  } catch (writeErr) {
    console.error(c.red(`\n❌  Failed to write static JSON: ${(writeErr as Error).message}`));
    fs.unlinkSync(bakPath);
    process.exit(1);
  }

  // ── Step 5: Update content-registry ──────────────────────────────────────
  console.log(`\n  ${c.bold('Step 4/6')} Updating content-registry...`);
  const registryPath = path.resolve(process.cwd(), 'lib/content-registry.ts');
  const registrySource = fs.readFileSync(registryPath, 'utf-8');

  const alreadyRegistered = registrySource.includes(`"${route}"`) || registrySource.includes(`'${route}'`);
  if (alreadyRegistered) {
    console.log(c.gray('     (already in registry — skipping)'));
  } else {
    // Extract imageUrl from OG_IMAGE const or openGraph.images[0].url in source
    let imageUrl = '';
    const ogImageConstVal = source.match(/const OG_IMAGE\s*=\s*['"`]([^'"`]+)['"`]/)?.[1];
    if (ogImageConstVal && /^https?:\/\//.test(ogImageConstVal)) {
      imageUrl = ogImageConstVal;
    } else {
      const ogImgMatch = source.match(/images:\s*\[\s*\{\s*url:\s*(?:OG_IMAGE|['"`]([^'"`]+)['"`])/);
      if (ogImgMatch?.[1]) imageUrl = ogImgMatch[1];
    }

    // Extract first 5 keywords for tags array
    const kwMatch = source.match(/keywords:\s*\[([\s\S]*?)\]/);
    let registryTags: string[] = [];
    if (kwMatch) {
      try {
        // eslint-disable-next-line no-new-func
        const kws: string[] = new Function(`return [${kwMatch[1]}]`)();
        registryTags = kws.slice(0, 5);
      } catch { /* ignore */ }
    }
    // Fall back to tags from article props
    if (!registryTags.length) {
      const tagsMatch = source.match(/tags=\{(\[[^\]]+\])\}/);
      if (tagsMatch) {
        try { registryTags = JSON.parse(tagsMatch[1].replace(/'/g, '"')); } catch { /* ignore */ }
      }
    }

    const registryCategory = String(row.category_label ?? row.category ?? 'News');
    const registryPublishDate = String(row.publish_date ?? new Date().toISOString().split('T')[0]);

    // Find the closing bracket of the contentRegistry array
    const insertBefore = '// =============================================================================\n// SYNC HELPER FUNCTIONS';
    const newEntry = `
  // --- Auto-added by wiki:publish ${new Date().toISOString().split('T')[0]} ---
  {
    slug: "${route}",
    title: ${JSON.stringify(String(row.title || ''))},
    description: ${JSON.stringify(String(row.subtitle ?? row.description ?? ''))},
    publishDate: ${JSON.stringify(registryPublishDate)},
    modifiedDate: ${JSON.stringify(new Date().toISOString().split('T')[0])},
    category: ${JSON.stringify(registryCategory)},
    tags: ${JSON.stringify(registryTags)},
    author: ${JSON.stringify(String(row.author_name ?? 'ObjectWire Editorial'))},
    priority: 0.7,
    changeFrequency: "weekly",${imageUrl ? `\n    imageUrl: ${JSON.stringify(imageUrl)},\n    imageWidth: 1200,\n    imageHeight: 675,` : ''}
  },

`;

    if (registrySource.includes(insertBefore)) {
      const updated = registrySource.replace(insertBefore, newEntry + insertBefore);
      fs.writeFileSync(registryPath, updated, 'utf-8');
      console.log(c.green('     ✅ Entry added to content-registry.ts'));
    } else {
      // Fallback: insert before the last ]; in the array
      const updated = registrySource.replace(/\];\s*\n\/\/ =+\n\/\/ SYNC HELPER/, `${newEntry}];\n// =============================================================================\n// HELPER`);
      fs.writeFileSync(registryPath, updated, 'utf-8');
      console.log(c.green('     ✅ Entry added to content-registry.ts (fallback insertion)'));
    }
  }

  // ── Step 6: Trim file to stub ─────────────────────────────────────────────
  console.log(`\n  ${c.bold('Step 5/6')} Trimming file to stub...`);

  const stub = buildStub(source, slug, component);
  fs.writeFileSync(filePath, stub, 'utf-8');
  console.log(c.green(`     ✅ Stub written.`));

  // Clean up backup
  fs.unlinkSync(bakPath);

  // ── Step 7: Verify static JSON on disk ───────────────────────────────────
  if (!verifyStaticRow(component, slug)) {
    console.error(c.red('\n❌  Verification failed — static JSON file missing or corrupt after write.'));
    process.exit(1);
  }

  // ── Step 8: Ping Google Search Console Indexing API ──────────────────────
  console.log(`\n  ${c.bold('Step 6/6')} Pinging Google Search Console...`);
  const canonicalUrl = `https://www.objectwire.org${route}`;
  await pingSearchConsole(canonicalUrl);

  console.log(c.green(`\n  ✅  Published successfully! (on-prem)`));
  console.log(c.gray(`     Slug    : ${slug}`));
  console.log(c.gray(`     Storage : content/static/${STATIC_DIR_MAP[component]}/${slug}.json`));
  console.log(c.gray(`     Route   : ${route}`));
  console.log(c.gray(`\n  Next: git add -A && git commit -m "feat: publish ${route}"\n`));

  // ── Alfasa session log ────────────────────────────────────────────────────
  logPublishSession({
    date:           new Date().toISOString(),
    slug,
    url:            route,
    component,
    wordCount:      sentinelResult.wordCount,
    author:         sentinelInput.author_name || 'unknown',
    category:       sentinelInput.category || 'unknown',
    eeaScore:       sentinelResult.score,
    eeaGrade:       sentinelResult.grade,
    sentinelPassed,
    skippedSentinel: skipSentinel,
    warnings:       sentinelResult.warnings.length,
  });
}

main().catch((e) => { console.error(e); process.exit(1); });
