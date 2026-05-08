#!/usr/bin/env tsx
// =============================================================================
// scripts/ping-sitemap.ts
// =============================================================================
// Notifies Google and Bing that the sitemap has been updated.
// Called automatically via the `postbuild` npm script after every Railway deploy.
//
// Usage:
//   npm run sitemap:ping          — sends pings to all search engines
//   npx tsx scripts/ping-sitemap.ts
// =============================================================================

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.objectwire.org';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const NEWS_SITEMAP_URL = `${SITE_URL}/news-sitemap.xml`;

interface PingTarget {
  name: string;
  url: string;
}

const PING_TARGETS: PingTarget[] = [
  {
    name: 'Google (main sitemap)',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
  {
    name: 'Google (news sitemap)',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(NEWS_SITEMAP_URL)}`,
  },
  {
    name: 'Bing',
    url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
];

async function ping(target: PingTarget): Promise<void> {
  try {
    const res = await fetch(target.url, { method: 'GET', signal: AbortSignal.timeout(10_000) });
    if (res.ok) {
      console.log(`  ✓ ${target.name} — ${res.status}`);
    } else {
      console.warn(`  ⚠️  ${target.name} — HTTP ${res.status}`);
    }
  } catch (err) {
    console.warn(`  ✗ ${target.name} — ${(err as Error).message}`);
  }
}

async function main() {
  console.log(`\n🏓  Pinging search engines with sitemap URLs…`);
  console.log(`    Sitemap:      ${SITEMAP_URL}`);
  console.log(`    News sitemap: ${NEWS_SITEMAP_URL}\n`);

  await Promise.all(PING_TARGETS.map(ping));

  console.log('\n✅  Sitemap ping complete.\n');
}

main().catch(err => { console.error(err); process.exit(1); });
