/**
 * indexnow-ping.ts
 *
 * Pings IndexNow to instantly notify Bing, Yandex, Seznam, Naver, and Mojeek
 * of new or updated URLs. One API call covers all participating engines.
 *
 * Usage:
 *   npm run indexnow -- --url https://www.objectwire.org/your/article/path
 *   npm run indexnow:bulk                    ← pings last 50 registry entries
 *   npm run indexnow:all                     ← pings ALL registry entries (use sparingly)
 *
 * Environment:
 *   INDEXNOW_KEY — 32-char hex key (generate once, store in .env.local)
 *
 * How IndexNow works:
 *   1. You generate a random key (hex, 8-128 chars)
 *   2. You host that key at https://www.objectwire.org/{key}.txt
 *   3. You POST URLs + key to api.indexnow.org
 *   4. Bing, Yandex, Seznam, Naver, Mojeek all crawl within minutes
 *
 * Docs: https://www.indexnow.org/documentation
 */

import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// ─── Constants ───────────────────────────────────────────────────────────────

const SITE_URL = 'https://www.objectwire.org';
const INDEXNOW_HOST = 'https://api.indexnow.org/indexnow';
// Alternate endpoints (all accept the same payload and share submissions):
// https://www.bing.com/indexnow
// https://yandex.com/indexnow
// https://search.seznam.cz/indexnow
// Using api.indexnow.org automatically distributes to ALL participating engines.

const KEY = process.env.INDEXNOW_KEY;
const REGISTRY_PATH = path.resolve(process.cwd(), 'content/content_registry.json');

// ─── Types ───────────────────────────────────────────────────────────────────

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

interface RegistryEntry {
  url?: string;
  slug?: string;
  publishedAt?: string;
  published_at?: string;
}

// ─── Core ping function ───────────────────────────────────────────────────────

export async function pingIndexNow(urls: string[]): Promise<void> {
  if (!KEY) {
    console.error('\n  ❌  INDEXNOW_KEY is not set in .env.local');
    console.error('     Generate one: node -e "require(\'crypto\').randomBytes(16).toString(\'hex\')|xargs echo"');
    console.error('     Then add: INDEXNOW_KEY=your32hexkey to .env.local');
    console.error('     Then host it: app/[key].txt/route.ts (already configured)\n');
    process.exit(1);
  }

  if (urls.length === 0) {
    console.log('  ℹ️  No URLs to ping.');
    return;
  }

  // IndexNow max batch = 10,000 URLs. Chunk into 500 for safety.
  const CHUNK_SIZE = 500;
  const chunks: string[][] = [];
  for (let i = 0; i < urls.length; i += CHUNK_SIZE) {
    chunks.push(urls.slice(i, i + CHUNK_SIZE));
  }

  const keyLocation = `${SITE_URL}/${KEY}.txt`;

  console.log(`\n  📡  IndexNow — pinging ${urls.length} URL(s) in ${chunks.length} batch(es)`);
  console.log(`      Key location: ${keyLocation}`);
  console.log(`      Engines notified: Bing, Yandex, Seznam, Naver, Mojeek\n`);

  let totalSuccess = 0;
  let totalFailed = 0;

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const payload: IndexNowPayload = {
      host: 'www.objectwire.org',
      key: KEY,
      keyLocation,
      urlList: chunk,
    };

    try {
      const res = await fetch(INDEXNOW_HOST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });

      const statusText = res.status === 200
        ? '✅ Accepted'
        : res.status === 202
        ? '⏳ Queued'
        : res.status === 400
        ? '❌ Bad request (check URL format)'
        : res.status === 403
        ? '❌ Forbidden (wrong key or key file missing)'
        : res.status === 422
        ? '❌ Unprocessable (URLs not on declared host)'
        : res.status === 429
        ? '⚠️  Rate limited (too many submissions today)'
        : `⚠️  HTTP ${res.status}`;

      console.log(`  Batch ${i + 1}/${chunks.length}: ${statusText}`);

      if (res.status === 200 || res.status === 202) {
        totalSuccess += chunk.length;
        chunk.forEach(url => console.log(`    → ${url}`));
      } else {
        totalFailed += chunk.length;
        const body = await res.text().catch(() => '');
        if (body) console.log(`    Response: ${body}`);
      }
    } catch (err) {
      totalFailed += chunk.length;
      console.error(`  Batch ${i + 1} network error:`, err);
    }
  }

  console.log(`\n  Summary: ${totalSuccess} submitted | ${totalFailed} failed`);
  if (totalSuccess > 0) {
    console.log(`  Bing typically crawls submitted URLs within 10-30 minutes.`);
    console.log(`  Yandex and Seznam typically within 1-4 hours.\n`);
  }
}

// ─── Bulk ping from registry ──────────────────────────────────────────────────

function loadRegistryUrls(limit?: number): string[] {
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error(`  ❌  Registry not found at ${REGISTRY_PATH}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(REGISTRY_PATH, 'utf-8');
  let entries: RegistryEntry[] = [];

  try {
    const parsed = JSON.parse(raw);
    // Registry may be an array or an object with an entries key
    entries = Array.isArray(parsed) ? parsed : (parsed.entries ?? Object.values(parsed));
  } catch {
    console.error('  ❌  Failed to parse content_registry.json');
    process.exit(1);
  }

  // Sort by publishedAt descending (newest first)
  entries.sort((a, b) => {
    const dateA = a.publishedAt ?? a.published_at ?? '';
    const dateB = b.publishedAt ?? b.published_at ?? '';
    return dateB.localeCompare(dateA);
  });

  if (limit) entries = entries.slice(0, limit);

  const urls = entries
    .map(e => {
      const raw = e.url ?? e.slug ?? '';
      if (!raw) return null;
      // Ensure full URL
      if (raw.startsWith('http')) return raw;
      return `${SITE_URL}${raw.startsWith('/') ? raw : '/' + raw}`;
    })
    .filter((u): u is string => !!u);

  return urls;
}

// ─── CLI entrypoint ───────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const urlFlagIndex = args.indexOf('--url');
  const isBulk = args.includes('--bulk') || process.env.npm_lifecycle_event === 'indexnow:bulk';
  const isAll = args.includes('--all') || process.env.npm_lifecycle_event === 'indexnow:all';

  let urlsToSubmit: string[] = [];

  if (urlFlagIndex !== -1) {
    // Single URL mode: npm run indexnow -- --url https://www.objectwire.org/...
    const url = args[urlFlagIndex + 1];
    if (!url || !url.startsWith('http')) {
      console.error('  ❌  --url must be a full URL starting with https://');
      process.exit(1);
    }
    urlsToSubmit = [url];
  } else if (isBulk) {
    // Last 50 from registry
    console.log('  📋  Loading last 50 URLs from content_registry.json...');
    urlsToSubmit = loadRegistryUrls(50);
  } else if (isAll) {
    // All registry URLs — use sparingly (IndexNow rate limits at 10,000/day)
    console.log('  📋  Loading ALL URLs from content_registry.json...');
    urlsToSubmit = loadRegistryUrls();
    console.log(`  ⚠️  Submitting ${urlsToSubmit.length} total URLs. IndexNow allows 10,000/day.`);
  } else {
    console.log(`
  IndexNow Ping — Bing / Yandex / Seznam / Naver / Mojeek

  Usage:
    npm run indexnow -- --url https://www.objectwire.org/your/article
    npm run indexnow:bulk          (last 50 from registry)
    npm run indexnow:all           (all registry URLs — use sparingly)
    `);
    process.exit(0);
  }

  await pingIndexNow(urlsToSubmit);
}

main().catch(e => { console.error(e); process.exit(1); });
