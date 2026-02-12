/**
 * POST-DEPLOY GOOGLE PING
 * ========================
 * Run after every Vercel deployment to notify Google that
 * the sitemap has been updated with new/changed content.
 *
 * Usage:
 *   npx tsx scripts/ping-google.ts
 *
 * Or add to package.json:
 *   "postdeploy": "npx tsx scripts/ping-google.ts"
 */

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

  console.log('\n📡 Search engine pings complete.');
  console.log(`   Sitemap: ${SITEMAP_URL}`);
}

pingSearchEngines();
