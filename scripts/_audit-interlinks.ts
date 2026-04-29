/**
 * Scan all internal links across app/ and components/ and report:
 *   1. Broken internal links (href="/path" with no matching page.tsx)
 *   2. Pages with zero internal links to other ObjectWire pages (orphans)
 *
 * Run: npx tsx scripts/_audit-interlinks.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const APP_DIR = path.resolve('app');
const ROOT = path.resolve('.');

// ── Collect all valid app routes from page.tsx files ───────────────────────
function collectRoutes(dir: string, prefix = ''): Set<string> {
  const routes = new Set<string>();
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const name = entry.name;
    if (name.startsWith('_') || name === 'api' || name === 'opengraph-image.tsx') continue;
    const full = path.join(dir, name);
    if (entry.isDirectory()) {
      // Strip group prefixes like (admin) (public)
      const segment = name.startsWith('(') && name.endsWith(')') ? '' : `/${name}`;
      // Skip dynamic segments [slug]
      if (name.startsWith('[')) continue;
      const sub = collectRoutes(full, prefix + segment);
      sub.forEach((r) => routes.add(r));
    } else if (name === 'page.tsx') {
      routes.add(prefix || '/');
    }
  }
  return routes;
}

// ── Collect Supabase article slugs (paths from articles table) ─────────────
async function collectSupabaseRoutes(): Promise<Set<string>> {
  const s = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
  const routes = new Set<string>();

  // articles.url field
  const { data: a } = await s.from('articles').select('url').eq('status', 'published');
  (a ?? []).forEach((r: { url: string | null }) => r.url && routes.add(r.url));

  // jack_articles.article_url
  const { data: j } = await s.from('jack_articles').select('article_url');
  (j ?? []).forEach((r: { article_url: string | null }) => r.article_url && routes.add(r.article_url));

  // creator_articles.schema_article_url
  const { data: c } = await s.from('creator_articles').select('schema_article_url').eq('status', 'published');
  (c ?? []).forEach((r: { schema_article_url: string | null }) => {
    if (!r.schema_article_url) return;
    try {
      routes.add(new URL(r.schema_article_url).pathname);
    } catch { /* ignore */ }
  });

  // article_pages.url
  const { data: p } = await s.from('article_pages').select('url, slug');
  (p ?? []).forEach((r: { url: string | null; slug: string | null }) => {
    if (r.url) routes.add(r.url);
    else if (r.slug) routes.add(`/${r.slug}`);
  });

  return routes;
}

// ── Scan all .tsx files for href="..." and Link href="..." ─────────────────
function scanLinks(dir: string): Map<string, string[]> {
  const linksByFile = new Map<string, string[]>();
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = scanLinks(full);
      sub.forEach((v, k) => linksByFile.set(k, v));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      // Match href="/something" (internal only — starts with /)
      const matches = [...content.matchAll(/href=["'`](\/[^"'`#?]*)["'`]/g)];
      const links = matches.map((m) => m[1]).filter((l) => !l.startsWith('//'));
      if (links.length > 0) {
        linksByFile.set(path.relative(ROOT, full).replace(/\\/g, '/'), links);
      }
    }
  }
  return linksByFile;
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log('Collecting filesystem routes...');
  const fsRoutes = collectRoutes(APP_DIR);
  console.log(`  ${fsRoutes.size} static routes found in app/`);

  console.log('Collecting Supabase routes...');
  const dbRoutes = await collectSupabaseRoutes();
  console.log(`  ${dbRoutes.size} Supabase article routes found`);

  const validRoutes = new Set([...fsRoutes, ...dbRoutes]);
  console.log(`  ${validRoutes.size} total valid routes`);

  console.log('\nScanning all .tsx/.ts files for internal hrefs...');
  const linksByFile = scanLinks(APP_DIR);
  scanLinks(path.resolve('components')).forEach((v, k) => linksByFile.set(k, v));

  // Build broken-link report
  const brokenByFile = new Map<string, string[]>();
  const allBrokenLinks = new Map<string, string[]>(); // broken link -> files using it

  for (const [file, links] of linksByFile) {
    const broken: string[] = [];
    for (const link of links) {
      // Strip trailing slash unless root
      const normalized = link === '/' ? '/' : link.replace(/\/+$/, '');
      // Skip dynamic-looking links and known non-route paths
      if (normalized.includes('[') || normalized.includes('${')) continue;
      if (normalized.startsWith('/api/')) continue;
      if (normalized.startsWith('/feeds/') || normalized === '/sitemap.xml' || normalized === '/robots.txt') continue;
      if (normalized.startsWith('/auth/') || normalized.startsWith('/account')) continue;
      if (validRoutes.has(normalized) || validRoutes.has(normalized + '/')) continue;
      broken.push(normalized);
      if (!allBrokenLinks.has(normalized)) allBrokenLinks.set(normalized, []);
      allBrokenLinks.get(normalized)!.push(file);
    }
    if (broken.length > 0) brokenByFile.set(file, [...new Set(broken)]);
  }

  // Sort broken links by frequency
  const sortedBroken = [...allBrokenLinks.entries()].sort((a, b) => b[1].length - a[1].length);

  console.log(`\n========== BROKEN INTERNAL LINKS ==========`);
  console.log(`${sortedBroken.length} unique broken link targets, used in ${brokenByFile.size} files\n`);

  console.log('TOP 30 MOST-LINKED BROKEN URLS:');
  for (const [link, files] of sortedBroken.slice(0, 30)) {
    console.log(`  [${files.length}x]  ${link}`);
  }

  // Find orphan pages (no inbound internal links)
  const allInboundLinks = new Set<string>();
  for (const links of linksByFile.values()) {
    for (const link of links) {
      const n = link === '/' ? '/' : link.replace(/\/+$/, '');
      allInboundLinks.add(n);
    }
  }

  const orphans = [...validRoutes].filter((r) => {
    if (r === '/' || r.startsWith('/api/') || r.startsWith('/auth/') || r.startsWith('/account')) return false;
    return !allInboundLinks.has(r);
  });

  console.log(`\n========== ORPHAN PAGES (no inbound internal links) ==========`);
  console.log(`${orphans.length} orphan routes found (sample of 25):`);
  orphans.slice(0, 25).forEach((r) => console.log(`  ${r}`));

  // Write JSON report
  const report = {
    summary: {
      fsRoutes: fsRoutes.size,
      dbRoutes: dbRoutes.size,
      totalValidRoutes: validRoutes.size,
      uniqueBrokenLinks: sortedBroken.length,
      filesWithBrokenLinks: brokenByFile.size,
      orphanRoutes: orphans.length,
    },
    topBrokenLinks: sortedBroken.slice(0, 50).map(([link, files]) => ({ link, count: files.length, files })),
    orphanRoutes: orphans,
  };
  fs.writeFileSync('interlink-audit.json', JSON.stringify(report, null, 2));
  console.log('\n✅ Full report written to interlink-audit.json');
}

main().catch(console.error);
