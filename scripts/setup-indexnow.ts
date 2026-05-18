/**
 * setup-indexnow.ts
 *
 * One-time setup script for IndexNow integration.
 *
 * What it does:
 *   1. Generates a cryptographically random 32-char hex key
 *   2. Writes INDEXNOW_KEY=... to .env.local (if not already set)
 *   3. Creates public/{key}.txt — the domain verification file Bing fetches
 *   4. Prints next steps
 *
 * Run once:
 *   npm run indexnow:setup
 *
 * After running:
 *   - Commit public/{key}.txt to the repo (it is safe to commit — it's a public key)
 *   - Deploy
 *   - Verify at https://www.ozonenetwork.news/{key}.txt shows the key
 *   - Then submit sitemaps in Bing Webmaster Tools
 */

import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, '.env.local');
const PUBLIC_DIR = path.join(ROOT, 'public');

function main() {
  // ── Check if key already exists ──────────────────────────────────────────
  let existingKey = '';

  if (fs.existsSync(ENV_PATH)) {
    const envContent = fs.readFileSync(ENV_PATH, 'utf-8');
    const match = envContent.match(/^INDEXNOW_KEY=(.+)$/m);
    if (match) {
      existingKey = match[1].trim();
      console.log(`\n  ℹ️  INDEXNOW_KEY already set in .env.local: ${existingKey}`);
    }
  }

  const key = existingKey || crypto.randomBytes(16).toString('hex');

  // ── Write key to .env.local if new ───────────────────────────────────────
  if (!existingKey) {
    let envContent = fs.existsSync(ENV_PATH) ? fs.readFileSync(ENV_PATH, 'utf-8') : '';
    if (!envContent.endsWith('\n') && envContent.length > 0) envContent += '\n';
    envContent += `\n# IndexNow — Bing / Yandex / Seznam / Naver / Mojeek instant indexing\nINDEXNOW_KEY=${key}\n`;
    fs.writeFileSync(ENV_PATH, envContent, 'utf-8');
    console.log(`\n  ✅  Generated new IndexNow key: ${key}`);
    console.log(`     Written to .env.local`);
  }

  // ── Create public/{key}.txt ───────────────────────────────────────────────
  const keyFilePath = path.join(PUBLIC_DIR, `${key}.txt`);
  if (fs.existsSync(keyFilePath)) {
    console.log(`  ℹ️  Key file already exists: public/${key}.txt`);
  } else {
    fs.writeFileSync(keyFilePath, key, 'utf-8');
    console.log(`  ✅  Created: public/${key}.txt`);
  }

  // ── Print next steps ──────────────────────────────────────────────────────
  console.log(`
  ══════════════════════════════════════════════════════════════
  IndexNow Setup Complete
  ══════════════════════════════════════════════════════════════

  Your key: ${key}

  Next steps:
  ─────────────────────────────────────────────────────────────
  1. Commit public/${key}.txt
     git add public/${key}.txt && git commit -m "feat: add IndexNow key verification file"

  2. Deploy to Railway (so the file is live)

  3. Verify the file is accessible:
     curl https://www.ozonenetwork.news/${key}.txt
     (should return: ${key})

  4. Go to Bing Webmaster Tools:
     https://www.bing.com/webmasters
     → Add site: https://www.ozonenetwork.news
     → Verify ownership (DNS TXT or meta tag)
     → Submit sitemaps:
        https://www.ozonenetwork.news/sitemap.xml
        https://www.ozonenetwork.news/news-sitemap.xml

  5. First IndexNow ping (bulk):
     npm run indexnow:bulk

  ─────────────────────────────────────────────────────────────
  What IndexNow does:
  Every time you run wiki:publish, the new article URL is
  automatically submitted to Bing, Yandex, Seznam, Naver,
  and Mojeek. They crawl it within 10-30 minutes.
  ══════════════════════════════════════════════════════════════
  `);
}

main();
