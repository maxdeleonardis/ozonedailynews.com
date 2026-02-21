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

// ---------------------------------------------------------------------------
// config
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const REGISTRY_PATH = path.join(ROOT, 'lib', 'content-registry.ts');
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

    return { slug, title, description, author, filePath };
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
// read existing registry slugs
// ---------------------------------------------------------------------------
function getRegisteredSlugs(registrySource: string): Set<string> {
  const slugs = new Set<string>();
  const matches = registrySource.matchAll(/slug\s*:\s*['"`]([^'"`]+)['"`]/g);
  for (const m of matches) slugs.add(m[1]);
  return slugs;
}

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

function generateEntry(meta: PageMeta): string {
  const { category, tags } = detectCategory(meta.slug);
  const priority = detectPriority(meta.slug, category);
  const changeFrequency = detectChangeFrequency(category);
  const tagsStr = tags.map(t => `"${sanitizeStr(t)}"`).join(', ');

  return `  {
    slug: "${sanitizeStr(meta.slug)}",
    title: "${sanitizeStr(meta.title)}",
    description: "${sanitizeStr(meta.description)}",
    publishDate: "${TODAY}",
    modifiedDate: "${TODAY}",
    category: "${sanitizeStr(category)}",
    tags: [${tagsStr}],
    author: "${sanitizeStr(meta.author)}",
    priority: ${priority},
    changeFrequency: "${changeFrequency}",
  },`;
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function main() {
  console.log('🔍  Scanning app directory for page.tsx files…');
  const allPages = scanApp(APP_DIR);
  console.log(`    Found ${allPages.length} pages\n`);

  const registrySource = fs.readFileSync(REGISTRY_PATH, 'utf-8');
  const registeredSlugs = getRegisteredSlugs(registrySource);
  console.log(`📋  Currently registered: ${registeredSlugs.size} entries\n`);

  const missing = allPages.filter(p => !registeredSlugs.has(p.slug));
  console.log(`➕  Missing from registry: ${missing.length} pages\n`);

  if (missing.length === 0) {
    console.log('✅  Registry is fully up to date!');
    return;
  }

  // group by category for readability
  const byCategory = new Map<string, PageMeta[]>();
  for (const page of missing) {
    const { category } = detectCategory(page.slug);
    if (!byCategory.has(category)) byCategory.set(category, []);
    byCategory.get(category)!.push(page);
  }

  // build the new block of entries
  const lines: string[] = [
    '',
    `  // ===========================================================================`,
    `  // AUTO-SYNCED ${TODAY} — ${missing.length} entries added by scripts/sync-registry.ts`,
    `  // Review publishDate / modifiedDate / featured / imageUrl on each entry.`,
    `  // ===========================================================================`,
  ];

  for (const [category, pages] of [...byCategory.entries()].sort()) {
    lines.push(`\n  // --- ${category} (${pages.length}) ---`);
    for (const page of pages.sort((a, b) => a.slug.localeCompare(b.slug))) {
      lines.push(generateEntry(page));
    }
  }

  const newBlock = lines.join('\n');

  if (!WRITE_FLAG) {
    console.log('--- PREVIEW (pass --write to apply) ---\n');
    console.log(newBlock);
    console.log('\n--- END PREVIEW ---');
    console.log('\nRun:  npm run registry:sync -- --write');
    return;
  }

  // inject before the `];\n\n// === HELPER` separator (i.e. closing of the array)
  // Uses a regex to be robust against CRLF vs LF and varying whitespace.
  // IMPORTANT: use a replacer function, NOT a string, to avoid $ being treated
  //            as a backreference when descriptions contain e.g. "$16 trillion".
  const ARRAY_CLOSE_RE = /(\r?\n\];\r?\n\r?\n\/\/ =+\r?\n\/\/ HELPER FUNCTIONS)/;
  if (!ARRAY_CLOSE_RE.test(registrySource)) {
    console.error('❌  Could not locate the end of the contentRegistry array.\n   Aborting.');
    process.exit(1);
  }

  const updated = registrySource.replace(
    ARRAY_CLOSE_RE,
    (_fullMatch, closingBlock: string) => newBlock + closingBlock
  );

  fs.writeFileSync(REGISTRY_PATH, updated, 'utf-8');
  console.log(`✅  Wrote ${missing.length} new entries to lib/content-registry.ts`);
  console.log('    Review the entries, fill in real publishDates, and add imageUrls where needed.');
}

main();
