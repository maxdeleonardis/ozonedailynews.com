/**
 * POST-DEPLOY GOOGLE PING — System 4 from duda-js.md
 * ===================================================
 * Run after every Vercel deployment to notify Google that
 * the sitemap has been updated with new/changed content.
 * Also logs recently published articles ready for Indexing API.
 *
 * Usage:
 *   npx tsx scripts/ping-google.ts
 *
 * Or add to package.json:
 *   "postdeploy": "npx tsx scripts/ping-google.ts"
 */

import { contentRegistry } from '../lib/content-registry';

const SITE_URL = 'https://www.objectwire.org';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

async function pingSearchEngines() {
  console.log('🔍 Pinging search engines after deploy...\n');

  // 1. Google Sitemap Ping
  try {
    const googleUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    const res = await fetch(googleUrl);
    console.log(`✅ Google sitemap ping: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.error('❌ Google sitemap ping failed:', err);
  }

  // 2. Bing / IndexNow (covers Bing, Yandex, DuckDuckGo, Naver)
  try {
    const bingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    const res = await fetch(bingUrl);
    console.log(`✅ Bing sitemap ping: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.error('❌ Bing sitemap ping failed:', err);
  }

  // 3. Log recently published articles (last 24 h) — ready for Indexing API
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recentArticles = contentRegistry.filter(
    (e) => new Date(e.publishDate) > oneDayAgo
  );

  if (recentArticles.length > 0) {
    console.log(`\n📰 ${recentArticles.length} article(s) published in last 24h:`);
    for (const article of recentArticles) {
      console.log(`  → ${SITE_URL}${article.slug}`);
      // TODO: Add Google Indexing API POST here for direct indexing
      // See: https://developers.google.com/search/apis/indexing-api/v3/quickstart
    }
  }

  console.log('\n📡 Search engine pings complete.');
  console.log(`   Sitemap: ${SITEMAP_URL}`);
}

pingSearchEngines();
