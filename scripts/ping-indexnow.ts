#!/usr/bin/env ts-node
// scripts/ping-indexnow.ts
// Submits URLs to IndexNow (Bing, Yandex, and partners) after each deploy.
// No service account or OAuth needed — just the key file in /public/.
//
// Usage:
//   npm run ping:indexnow                  (pings all registry URLs)
//   npm run ping:indexnow -- --last 5      (pings last N articles in registry)
//   npm run ping:indexnow -- --url /tech/some-article  (pings a specific URL)
//
// The key file must be accessible at:
//   https://www.ozonedailynews.com/28ade0954f19a5d91850bcdd5639fbb7.txt

import fs from 'fs';
import path from 'path';
import https from 'https';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ozonedailynews.com';
const INDEXNOW_KEY = '28ade0954f19a5d91850bcdd5639fbb7';
const REGISTRY_PATH = path.join(process.cwd(), 'content', 'static', 'content_registry.json');

// ─── Arg parsing ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const lastFlag = args.indexOf('--last');
const urlFlag = args.indexOf('--url');
const lastN = lastFlag !== -1 ? parseInt(args[lastFlag + 1] ?? '5', 10) : null;
const singleUrl = urlFlag !== -1 ? args[urlFlag + 1] : null;

// ─── URL resolution ───────────────────────────────────────────────────────────
function registryUrls(): string[] {
  try {
    const reg = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8')) as Array<{ slug: string }>;
    return reg
      .map((e) => {
        const s = e.slug;
        if (s.startsWith('http')) return s;
        return `${SITE_URL}${s.startsWith('/') ? s : '/' + s}`;
      })
      .filter((u) => u.startsWith('https://'));
  } catch {
    console.error('  Could not read content_registry.json');
    return [];
  }
}

let urlsToSubmit: string[] = [];

if (singleUrl) {
  urlsToSubmit = [singleUrl.startsWith('http') ? singleUrl : `${SITE_URL}${singleUrl}`];
} else if (lastN !== null) {
  urlsToSubmit = registryUrls().slice(-lastN);
} else {
  urlsToSubmit = registryUrls();
}

if (urlsToSubmit.length === 0) {
  console.error('  No URLs to ping. Exiting.');
  process.exit(1);
}

console.log(`\n  IndexNow — submitting ${urlsToSubmit.length} URL(s) to Bing/Yandex...\n`);
urlsToSubmit.forEach((u) => console.log(`    ${u}`));
console.log('');

// ─── IndexNow submission ──────────────────────────────────────────────────────
function httpPost(hostname: string, urlPath: string, body: string, headers: Record<string, string>): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname,
        path: urlPath,
        method: 'POST',
        headers: { ...headers, 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk: Buffer) => { data += chunk.toString(); });
        res.on('end', () => resolve({ status: res.statusCode ?? 0, body: data }));
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function pingIndexNow(urls: string[]): Promise<void> {
  const siteUrl = new URL(SITE_URL);
  const payload = JSON.stringify({
    host: siteUrl.hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  // Submit to Bing (canonical IndexNow endpoint — Bing shares with other partners)
  const result = await httpPost(
    'api.indexnow.org',
    '/IndexNow',
    payload,
    { 'Content-Type': 'application/json; charset=utf-8' }
  );

  if (result.status === 200 || result.status === 202) {
    console.log(`  ✅ Bing/IndexNow: ${result.status} — ${urls.length} URL(s) queued for crawling`);
  } else if (result.status === 422) {
    console.log(`  ⚠️  Bing/IndexNow: 422 — URLs already submitted recently (this is OK)`);
  } else {
    console.error(`  ❌ Bing/IndexNow: ${result.status} — ${result.body}`);
  }
}

// ─── Sitemap ping (Bing still accepts this; Google deprecated it in 2024) ────
async function pingSitemaps(): Promise<void> {
  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);
  const newsSitemapUrl = encodeURIComponent(`${SITE_URL}/news-sitemap.xml`);

  // Bing sitemap ping (still active)
  const [r1, r2] = await Promise.all([
    httpPost('www.bing.com', `/webmaster/api.svc/json/SubmitUrlbatch?siteUrl=${encodeURIComponent(SITE_URL)}&sitemap=${sitemapUrl}`, '', {}).catch(() => ({ status: 0, body: '' })),
    httpPost('www.bing.com', `/ping?sitemap=${newsSitemapUrl}`, '', {}).catch(() => ({ status: 0, body: '' })),
  ]);
  console.log(`  Bing sitemap ping: ${r1.status || r2.status}`);
}

await pingIndexNow(urlsToSubmit);
await pingSitemaps();

console.log('\n  Done.\n');
