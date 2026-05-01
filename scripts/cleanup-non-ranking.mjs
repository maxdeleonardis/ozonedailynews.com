/**
 * cleanup-non-ranking.mjs
 *
 * Reads Table.csv (pages NOT ranking in GSC), finds any that still have
 * a page.tsx in /app, deletes them, and prints redirect entries to add
 * to next.config.ts.
 *
 * Usage:
 *   node scripts/cleanup-non-ranking.mjs --dry-run   # show what would happen
 *   node scripts/cleanup-non-ranking.mjs             # delete + print redirects
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DRY_RUN = process.argv.includes('--dry-run');

// ── 1. Parse the CSV ────────────────────────────────────────────────────────
const csv = fs.readFileSync(path.join(ROOT, 'Table.csv'), 'utf8');
const rawPaths = csv
  .split('\n')
  .slice(1) // skip header
  .map((line) => {
    const url = line.split(',')[0]?.trim().replace(/^"/, '').replace(/"$/, '');
    if (!url || !url.startsWith('http')) return null;
    try {
      return new URL(url).pathname.replace(/\/$/, '') || '/';
    } catch {
      return null;
    }
  })
  .filter(Boolean)
  // Skip static assets, query-string-only, admin, and system routes
  .filter((p) => {
    if (p.startsWith('/_next/')) return false;
    if (p.startsWith('/admin')) return false;
    if (p === '/rss.xml' || p === '/robots.txt' || p === '/sitemap.xml') return false;
    return true;
  });

// Dedupe
const nonRankingPaths = [...new Set(rawPaths)];
console.log(`\n📋  Non-ranking paths in CSV: ${nonRankingPaths.length}`);

// Pages that must NEVER be deleted regardless of CSV — legal / structural
const PROTECTED = new Set([
  '/privacy-policy',
  '/terms-of-service',
  '/editorial-standards',
  '/about',
  '/login',
  '/get-help',
  '/authors',
  '/site-index',
  '/corrections',
  '/austin-private-detective-agency',
]);

// ── 2. For each path, determine if a page.tsx exists ────────────────────────
const toDelete = [];
const redirectEntries = [];

for (const urlPath of nonRankingPaths) {
  // Strip query strings (some rows have ?category=...)
  const cleanPath = urlPath.split('?')[0].replace(/\/$/, '') || '/';

  // Skip protected pages — never delete
  if (PROTECTED.has(cleanPath)) continue;

  const appDir = path.join(ROOT, 'app', cleanPath);
  const pageFile = path.join(appDir, 'page.tsx');

  const hasPage = fs.existsSync(pageFile);

  if (hasPage) {
    toDelete.push({ cleanPath, pageFile, appDir });
  }

  // Only add redirect if destination differs from source (no circular loops)
  const dest = resolveDestination(cleanPath);
  if (dest !== cleanPath) {
    redirectEntries.push({ source: cleanPath, destination: dest });
  }
}

// ── 3. Smart redirect destination ────────────────────────────────────────────
function resolveDestination(p) {
  // Tag pages → /news
  if (p.startsWith('/tags/')) return '/news';
  // Blog mirror pages → /news
  if (p.startsWith('/blog/')) return '/news';
  // Category filter URLs → /news
  if (p.startsWith('/news?') || p.includes('?category=')) return '/news';
  // Search pages → /search
  if (p.startsWith('/search/')) return '/search';
  // Auth/login/admin → /
  if (p === '/login' || p === '/admin' || p.startsWith('/admin/')) return '/';
  // Static asset leftovers → /
  if (p.startsWith('/_next/')) return '/';

  const segments = p.split('/').filter(Boolean);
  if (segments.length === 0) return '/';

  // KNOWN HUB PAGES that appear in the CSV — redirect to home or best parent
  const HUB_REDIRECT = {
    'news': '/',
    'tech': '/technology',
    'technology': '/news',
    'video-games': '/news',
    'google': '/news',
    'apple': '/news',
    'microsoft': '/news',
    'entertainment': '/news',
    'crypto': '/news',
    'bio-hacking': '/news',
    'finance': '/news',
    'authors': '/news',
    'site-index': '/',
  };

  if (segments.length === 1) {
    // Hub page: check redirect map
    if (HUB_REDIRECT[segments[0]] !== undefined) return HUB_REDIRECT[segments[0]];

    // Known orphan slugs
    const SLUG_MAP = {
      'mha': '/video-games',
      'sidemen': '/youtube/sidemen',
      'infidelity': '/service/infidelity',
      'surveillance': '/service/surveillance',
      'oanda-or-interactive-brokers-forex-trading-usa': '/finance',
      'comet-ai-web-browser-vs-atlas-by-chatgpt': '/define',
      'blitzy-ai-powered-autonomous-software-development': '/tech',
      'non-degree-studies-at-university-of-texas-austin': '/college',
      'neurophos-ai-hardware-startup': '/tech',
      'james-cameron': '/entertainment',
      'contactus': '/',
      'ironspring-ventures-startups-are-changing-construction-goodship-track3d-fleetpulse': '/news',
    };
    if (SLUG_MAP[segments[0]]) return SLUG_MAP[segments[0]];
    // Stay on hub (may still exist and rank)
    return '/' + segments[0];
  }

  // Multi-segment: redirect to first-level hub
  const KNOWN_HUBS = new Set([
    'winter-olympics','video-games','entertainment','tech','technology',
    'crypto','finance','open-ai','google','apple','microsoft','meta',
    'nvidia','intel','cloudflare','trump','elon-musk','youtube','influencer',
    'bio-hacking','define','authors','redbull','cars','formula-1','world-cup',
    'events','artists','saas','copyright','service','social','news','politics',
    'claude','cursor','tiktok','amazon','disney','netflix','blackrock',
    'austin-private-detective-agency','california','investigations',
  ]);

  const hub = segments[0];
  if (KNOWN_HUBS.has(hub)) return '/' + hub;
  return '/news';
}

// ── 4. Print summary ─────────────────────────────────────────────────────────
console.log(`🗑️   Pages to delete:    ${toDelete.length}`);
console.log(`↩️   Redirect entries:   ${redirectEntries.length}`);

if (toDelete.length > 0) {
  console.log('\nPages that will be deleted:');
  for (const { cleanPath } of toDelete) {
    console.log('  DELETE  ' + cleanPath);
  }
}

if (DRY_RUN) {
  console.log('\n⚠️  DRY RUN — no files changed.\n');
  process.exit(0);
}

// ── 5. Delete page files ──────────────────────────────────────────────────────
let deleted = 0;
let errors = 0;
for (const { cleanPath, pageFile, appDir } of toDelete) {
  try {
    fs.rmSync(pageFile);
    // Remove dir if empty
    try {
      const remaining = fs.readdirSync(appDir);
      if (remaining.length === 0) fs.rmdirSync(appDir);
    } catch {}
    console.log('  ✅ deleted  ' + cleanPath);
    deleted++;
  } catch (e) {
    console.error('  ❌ error   ' + cleanPath, e.message);
    errors++;
  }
}

// ── 6. Write redirect entries to a file for manual insertion ─────────────────
const redirectLines = redirectEntries
  .map(({ source, destination }) => {
    // If source has dynamic-looking segments, skip (already covered by existing wildcards)
    return `  { source: '${source}', destination: '${destination}', permanent: true },`;
  });

const outFile = '/tmp/non-ranking-redirects.txt';
fs.writeFileSync(outFile, redirectLines.join('\n') + '\n', 'utf8');

console.log(`\n✅  Deleted ${deleted} pages (${errors} errors).`);
console.log(`📝  ${redirectLines.length} redirect entries written to ${outFile}`);
console.log(`    Run the next step to inject them into next.config.ts\n`);
