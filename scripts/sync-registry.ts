#!/usr/bin/env tsx
// =============================================================================
// scripts/sync-registry.ts
// =============================================================================
// Adds any page that isn't yet in lib/content-registry.ts.
//
// Usage:
//   npm run registry:sync            — preview new entries (dry-run)
//   npm run registry:sync -- --write — apply changes to content-registry.ts
//
// How it works:
//   1. Scans app/**/page.tsx and reads the `metadata` export via regex
//   2. Compares slugs against existing contentRegistry entries
//   3. For each missing slug, generates a ContentEntry with sensible defaults:
//      - category auto-detected from slug prefix
//      - tags generated from slug segments
//      - publishDate = today (update after the fact)
//      - priority derived from slug depth / category
//   4. With --write, appends the new entries into content-registry.ts
//      without touching existing entries
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';

// Load .env.local so Supabase env vars are available when run via tsx
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const dotenv = require('dotenv') as { config: (opts?: { path?: string }) => void };
  dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });
} catch { /* dotenv not installed — env vars must be set externally */ }

// ---------------------------------------------------------------------------
// config
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const DEFAULT_AUTHOR = 'ObjectWire Editorial';
const DEFAULT_AUTHOR_SLUG = undefined; // only set on named-author entries
const TODAY = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
const WRITE_FLAG = process.argv.includes('--write');

// ---------------------------------------------------------------------------
// category / tag detection
// ---------------------------------------------------------------------------
const CATEGORY_MAP: { prefix: string; category: string; tags: string[] }[] = [
  { prefix: '/winter-olympics',    category: 'Sports',        tags: ['Winter Olympics', 'Milan Cortina 2026'] },
  { prefix: '/world-cup',          category: 'Sports',        tags: ['World Cup', 'Soccer', 'FIFA'] },
  { prefix: '/formula-1',          category: 'Sports',        tags: ['Formula 1', 'F1', 'Motorsport'] },
  { prefix: '/redbull',            category: 'Sports',        tags: ['Red Bull', 'Motorsport'] },
  { prefix: '/youtube',            category: 'YouTube',       tags: ['YouTube', 'Creator Economy'] },
  { prefix: '/nvidia',             category: 'Technology',    tags: ['NVIDIA', 'AI Hardware', 'GPU'] },
  { prefix: '/microsoft',          category: 'Technology',    tags: ['Microsoft', 'Big Tech'] },
  { prefix: '/google',             category: 'Technology',    tags: ['Google', 'Big Tech'] },
  { prefix: '/apple',              category: 'Technology',    tags: ['Apple', 'Big Tech'] },
  { prefix: '/open-ai',            category: 'Technology',    tags: ['OpenAI', 'Artificial Intelligence'] },
  { prefix: '/intel',              category: 'Technology',    tags: ['Intel', 'Semiconductors'] },
  { prefix: '/blitzy',             category: 'Technology',    tags: ['Blitzy', 'AI', 'SaaS'] },
  { prefix: '/tech',               category: 'Technology',    tags: ['Technology'] },
  { prefix: '/technology',         category: 'Technology',    tags: ['Technology'] },
  { prefix: '/saas',               category: 'Technology',    tags: ['SaaS', 'Software'] },
  { prefix: '/github',             category: 'Technology',    tags: ['GitHub', 'Open Source'] },
  { prefix: '/nasa',               category: 'Science',       tags: ['NASA', 'Space'] },
  { prefix: '/bio-hacking',        category: 'Science',       tags: ['Biohacking', 'Health', 'Science'] },
  { prefix: '/neurophos',          category: 'Science',       tags: ['Neurophos', 'AI Hardware', 'Photonics'] },
  { prefix: '/earth',              category: 'Science',       tags: ['Earth', 'Environment', 'Science'] },
  { prefix: '/research',           category: 'Research',      tags: ['Research', 'Analysis'] },
  { prefix: '/finance',            category: 'Finance',       tags: ['Finance', 'Economy'] },
  { prefix: '/bank-of-america',    category: 'Finance',       tags: ['Bank of America', 'Finance'] },
  { prefix: '/crypto',             category: 'Finance',       tags: ['Crypto', 'Cryptocurrency', 'Web3'] },
  { prefix: '/elon-musk',          category: 'Business',      tags: ['Elon Musk', 'Tesla', 'xAI'] },
  { prefix: '/trump',              category: 'Politics',      tags: ['Donald Trump', 'US Politics'] },
  { prefix: '/disney',             category: 'Entertainment', tags: ['Disney', 'Entertainment'] },
  { prefix: '/artists',            category: 'Entertainment', tags: ['Music', 'Artists'] },
  { prefix: '/entertainment',      category: 'Entertainment', tags: ['Entertainment'] },
  { prefix: '/video-games',        category: 'Gaming',        tags: ['Video Games', 'Gaming'] },
  { prefix: '/beastgames',         category: 'YouTube',       tags: ['Beast Games', 'MrBeast', 'YouTube'] },
  { prefix: '/cars',               category: 'Automotive',    tags: ['Cars', 'Automotive'] },
  { prefix: '/college',            category: 'Education',     tags: ['College', 'Education'] },
  { prefix: '/influencer',         category: 'YouTube',       tags: ['Influencer', 'Social Media'] },
  { prefix: '/social',             category: 'Social Media',  tags: ['Social Media'] },
  { prefix: '/ngos',               category: 'World Affairs', tags: ['NGO', 'Nonprofits'] },
  { prefix: '/missing-persons',    category: 'Investigations',tags: ['Missing Persons', 'Investigations'] },
  { prefix: '/investigations',     category: 'Investigations',tags: ['Investigations'] },
  { prefix: '/austin-private',     category: 'Investigations',tags: ['Private Investigations', 'Austin'] },
  { prefix: '/ironspring',         category: 'Business',      tags: ['Startups', 'Venture Capital', 'Construction Tech'] },
  { prefix: '/objectwire',         category: 'Meta',          tags: ['ObjectWire'] },
  { prefix: '/news',               category: 'News',          tags: ['News'] },
  { prefix: '/blog',               category: 'Blog',          tags: ['Blog'] },
  { prefix: '/podcasts',           category: 'Media',         tags: ['Podcasts'] },
  { prefix: '/service',            category: 'Services',      tags: ['Services'] },
  { prefix: '/about',              category: 'Meta',          tags: ['About', 'ObjectWire'] },
  { prefix: '/team',               category: 'Meta',          tags: ['Team', 'ObjectWire'] },
  { prefix: '/authors',            category: 'Meta',          tags: ['Author', 'ObjectWire'] },
  { prefix: '/clothing',           category: 'Lifestyle',     tags: ['Clothing', 'Fashion'] },
  { prefix: '/define',             category: 'Reference',     tags: ['Definitions', 'Reference'] },
  { prefix: '/get-help',           category: 'Support',       tags: ['Help', 'Support'] },
  { prefix: '/search',             category: 'Meta',          tags: ['Search'] },
  { prefix: '/site-index',         category: 'Meta',          tags: ['Site Index', 'Sitemap'] },
  { prefix: '/index',              category: 'Meta',          tags: ['Index'] },
  { prefix: '/events',             category: 'Events',        tags: ['Events'] },
  { prefix: '/privacy-policy',     category: 'Legal',         tags: ['Privacy', 'Legal'] },
  { prefix: '/terms-of-service',   category: 'Legal',         tags: ['Terms', 'Legal'] },
  { prefix: '/copyright',          category: 'Legal',         tags: ['Copyright', 'Legal'] },
  { prefix: '/corrections',        category: 'Meta',          tags: ['Corrections', 'Editorial'] },
  { prefix: '/editorial-standards',category: 'Meta',          tags: ['Editorial', 'Standards'] },
];

function detectCategory(slug: string): { category: string; tags: string[] } {
  for (const rule of CATEGORY_MAP) {
    if (slug.startsWith(rule.prefix)) {
      // merge slug-segment tags with rule tags
      const extraTags = slug
        .split('/')
        .filter(Boolean)
        .slice(1) // skip the top-level segment already in rule.tags
        .map(s =>
          s.replace(/-/g, ' ')
           .replace(/\b\w/g, c => c.toUpperCase())
        )
        .filter(t => t.length > 2 && !rule.tags.some(rt => rt.toLowerCase() === t.toLowerCase()));
      return { category: rule.category, tags: [...rule.tags, ...extraTags] };
    }
  }
  // fallback — derive from first slug segment
  const topSegment = slug.split('/').filter(Boolean)[0] ?? 'general';
  const category = topSegment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return { category, tags: [category] };
}

function detectPriority(slug: string, category: string): number {
  const depth = slug.split('/').filter(Boolean).length;
  if (depth === 1) return 0.8;  // hub pages
  if (['Sports', 'Technology', 'Finance', 'News'].includes(category)) return 0.7;
  if (['Legal', 'Meta', 'Support'].includes(category)) return 0.3;
  return 0.6;
}

function detectChangeFrequency(category: string): string {
  if (['Sports', 'News', 'Technology'].includes(category)) return 'weekly';
  if (['Legal', 'Meta', 'Support', 'Reference'].includes(category)) return 'monthly';
  return 'weekly';
}

// ---------------------------------------------------------------------------
// scan all page.tsx files → extract slug + metadata
// ---------------------------------------------------------------------------
interface PageMeta {
  slug: string;
  title: string;
  description: string;
  author: string;
  filePath: string;
  publishedTime?: string; // ISO-8601 from openGraph.publishedTime
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const SKIP_PREFIXES = ['/api/', '/(', '/feeds/', '/rss', '/news-sitemap', '/robots', '/sitemap'];
const SKIP_EXACT   = ['/', '', '/page.tsx'];

function extractMetadataFromFile(filePath: string): PageMeta | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // derive slug
    const relative = path.relative(APP_DIR, filePath).replace(/\\/g, '/');

    // skip admin route group entirely
    if (relative.startsWith('(admin)')) return null;

    const rawSlug = '/' + relative
      .replace(/\/page\.tsx$/, '')
      .replace(/^page\.tsx$/, '')
      .replace(/^\(public\)\//, '')
      .replace(/^\(admin\)\//, '');

    const slug = rawSlug === '/page.tsx' ? '/' : rawSlug;

    if (SKIP_EXACT.includes(slug)) return null;
    if (SKIP_PREFIXES.some(p => slug.startsWith(p))) return null;

    // extract title
    const titleMatch =
      content.match(/title\s*:\s*['"`]([^'"`\r\n]{3,200})['"`]/) ||
      content.match(/<h1[^>]*>([^<]{3,200})<\/h1>/);
    const title = titleMatch?.[1]?.trim() ?? slug.replace(/\//g, ' › ').trim();

    // extract description
    const descMatch =
      content.match(/description\s*:\s*['"`]([^'"`\r\n]{10,300})['"`]/) ||
      content.match(/content\s*:\s*['"`]([^'"`\r\n]{10,300})['"`]/);
    const description = (descMatch?.[1]?.trim() ?? `ObjectWire coverage of ${title}.`)
      .slice(0, 160);

    // extract author
    const authorMatch =
      content.match(/author\s*:\s*['"`]([^'"`\r\n]{3,80})['"`]/) ||
      content.match(/author\s*:\s*\{[^}]*name\s*:\s*['"`]([^'"`]{3,80})['"`]/);
    const author = authorMatch?.[1]?.trim() ?? DEFAULT_AUTHOR;

    // extract openGraph.publishedTime (ISO-8601)
    const publishedTimeMatch = content.match(/publishedTime\s*:\s*['"`]([^'"`\r\n]{10,40})['"`]/);
    const publishedTime = publishedTimeMatch?.[1]?.trim();
    if (!publishedTime) {
      console.warn(`⚠️  No publishedTime found in ${relative} — will use today as fallback. Add openGraph.publishedTime to avoid stale news-sitemap entries.`);
    }

    // extract openGraph image URL + dimensions
    const imageUrlMatch = content.match(/(?:url|image_url)\s*:\s*['"`](https?:\/\/[^'"`\r\n]{10,300})['"`]/);
    const imageUrl = imageUrlMatch?.[1]?.trim();

    const imageWidthMatch = content.match(/width\s*:\s*(\d{3,5})/);
    const imageWidth = imageWidthMatch ? parseInt(imageWidthMatch[1], 10) : undefined;

    const imageHeightMatch = content.match(/height\s*:\s*(\d{3,5})/);
    const imageHeight = imageHeightMatch ? parseInt(imageHeightMatch[1], 10) : undefined;

    if (imageUrl && (!imageWidth || !imageHeight)) {
      console.warn(`⚠️  ${relative} has an image but is missing width/height — article will be excluded from Google Top Stories carousel.`);
    }

    return { slug, title, description, author, filePath, publishedTime, imageUrl, imageWidth, imageHeight };
  } catch {
    return null;
  }
}

function scanApp(dir: string, results: PageMeta[] = []): PageMeta[] {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === '_next') continue;
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      scanApp(fullPath, results);
    } else if (item.name === 'page.tsx' || item.name === 'page.ts') {
      const meta = extractMetadataFromFile(fullPath);
      if (meta) results.push(meta);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// LOCAL REGISTRY FILE — source of truth (content/static/content_registry.json)
// ---------------------------------------------------------------------------
const LOCAL_REGISTRY_PATH = path.join(ROOT, 'content', 'static', 'content_registry.json');

function loadLocalRegistry(): RegistryRow[] {
  try {
    if (!fs.existsSync(LOCAL_REGISTRY_PATH)) return [];
    return JSON.parse(fs.readFileSync(LOCAL_REGISTRY_PATH, 'utf-8')) as RegistryRow[];
  } catch {
    return [];
  }
}

function saveLocalRegistry(rows: RegistryRow[]): void {
  const dir = path.dirname(LOCAL_REGISTRY_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(LOCAL_REGISTRY_PATH, JSON.stringify(rows, null, 2), 'utf-8');
  console.log(`    ✓ Written ${rows.length} entries → ${path.relative(ROOT, LOCAL_REGISTRY_PATH)}`);
}

function getRegisteredSlugs(): Set<string> {
  const rows = loadLocalRegistry();
  return new Set(rows.map(r => r.slug));
}

// ---------------------------------------------------------------------------
// Supabase mirror — optional, for runtime queries that prefer DB
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// generate ContentEntry TypeScript source for a missing page
// ---------------------------------------------------------------------------
function sanitizeStr(s: string): string {
  return s
    .replace(/\\n/g, ' ')         // literal \n escape sequences → space
    .replace(/\\t/g, ' ')         // literal \t escape sequences → space
    .replace(/\\r/g, ' ')         // literal \r escape sequences → space
    .replace(/[\r\n\t]+/g, ' ')   // actual control characters → space
    .replace(/\\/g, '\\\\')       // escape remaining backslashes
    .replace(/"/g, '\\"')         // escape double-quotes
    .replace(/\s{2,}/g, ' ')      // collapse multiple spaces
    .trim();
}

// Supabase row shape (snake_case column names)
interface RegistryRow {
  slug: string;
  title: string;
  description: string;
  publish_date: string;
  modified_date: string;
  category: string;
  tags: string[];
  author: string;
  priority: number;
  change_frequency: string;
  image_url?: string;
  image_width?: number;
  image_height?: number;
}

function buildEntryObject(meta: PageMeta): RegistryRow {
  const { category, tags } = detectCategory(meta.slug);
  // Use the real publishedTime from openGraph if available; fall back to today with a clear log
  const publishDate = meta.publishedTime
    ? meta.publishedTime.split('T')[0]
    : TODAY;
  return {
    slug: meta.slug,
    title: meta.title.slice(0, 300),
    description: meta.description.slice(0, 500),
    publish_date: publishDate,
    modified_date: publishDate,
    category,
    tags,
    author: meta.author,
    priority: detectPriority(meta.slug, category),
    change_frequency: detectChangeFrequency(category),
    ...(meta.imageUrl    && { image_url:    meta.imageUrl }),
    ...(meta.imageWidth  && { image_width:  meta.imageWidth }),
    ...(meta.imageHeight && { image_height: meta.imageHeight }),
  };
}

async function mirrorToSupabase(rows: RegistryRow[]): Promise<void> {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
            ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.warn('⚠️   Supabase env vars not set — skipping Supabase mirror (local JSON is the source of truth).');
    return;
  }

  let createClient: (url: string, key: string) => { from: (t: string) => { upsert: (rows: RegistryRow[], opts?: object) => Promise<{ error: { message: string } | null }> } };
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ({ createClient } = require('@supabase/supabase-js'));
  } catch {
    console.warn('⚠️   @supabase/supabase-js not found — skipping Supabase mirror.');
    return;
  }

  const supabase = createClient(url, key);
  const BATCH = 200;

  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    const { error } = await supabase
      .from('content_registry')
      .upsert(batch, { onConflict: 'slug' });
    if (error) {
      console.error(`❌  Supabase mirror failed (batch ${i / BATCH + 1}): ${error.message}`);
    } else {
      console.log(`    ✓ Supabase mirror: batch ${i / BATCH + 1} (${batch.length} rows)`);
    }
  }
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
async function main() {
  console.log('🔍  Scanning app directory for page.tsx files…');
  const allPages = scanApp(APP_DIR);
  console.log(`    Found ${allPages.length} pages\n`);

  // Source of truth: local JSON file
  const registeredSlugs = getRegisteredSlugs();
  const existing = loadLocalRegistry();
  console.log(`📋  Currently registered (local): ${registeredSlugs.size} entries\n`);

  const missing = allPages.filter(p => !registeredSlugs.has(p.slug));
  console.log(`➕  Missing from registry: ${missing.length} pages\n`);

  if (missing.length === 0) {
    console.log('✅  Registry is fully up to date!');
    return;
  }

  if (!WRITE_FLAG) {
    console.log('--- PREVIEW (pass --write to apply) ---\n');
    for (const page of missing.slice(0, 20)) {
      const hasTime = page.publishedTime ? '✓' : '⚠️  no publishedTime';
      const hasImg  = page.imageUrl ? (page.imageWidth && page.imageHeight ? '✓ img+dims' : '⚠️  img no dims') : 'no img';
      console.log(`  ${page.slug}  [${hasTime}] [${hasImg}]`);
    }
    if (missing.length > 20) console.log(`  … and ${missing.length - 20} more`);
    console.log('\n--- END PREVIEW ---');
    console.log('\nRun:  npm run registry:sync -- --write');
    return;
  }

  const newRows = missing.map(buildEntryObject);
  const merged  = [...existing, ...newRows];

  // Write to local JSON — primary store
  saveLocalRegistry(merged);

  // Mirror to Supabase if env vars are available
  await mirrorToSupabase(newRows);

  console.log('\n✅  Done. Review new entries in content/static/content_registry.json and fill in real publishDates + imageUrls.');
}

main().catch(err => { console.error(err); process.exit(1); });

