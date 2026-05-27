#!/usr/bin/env ts-node
// scripts/ping-indexers.ts
// Pings Google Indexing API and Bing Webmaster API after article publish.
// Run this AFTER git push, once the deploy is live at the canonical URL.
//
// Usage:
//   npm run ping:indexers -- --url https://www.ozonedailynews.com/nasa/news/article-slug
//   npm run ping:indexers -- --last    (pings the last article published to the registry)
//
// Required env vars:
//   GOOGLE_SA_EMAIL       — service account email from Google Cloud Console
//   GOOGLE_SA_PRIVATE_KEY — RSA private key (paste with \n literals or set in Railway)
//   BING_WEBMASTER_API_KEY — from Bing Webmaster Tools > API Access
//
// Google setup:
//   1. Create a service account in Google Cloud Console
//   2. Enable the "Web Search Indexing API"
//   3. In Google Search Console, add the service account email as an Owner (not just user)
//   4. Copy the private key JSON → extract client_email + private_key into env vars
//
// Bing setup:
//   1. Bing Webmaster Tools → Settings → API Access → Generate API Key
//   2. Verify your site in Bing Webmaster Tools first

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import https from 'https';

// ─── Arg parsing ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const urlFlag = args.indexOf('--url');
const useLast = args.includes('--last');

let targetUrl: string | null = null;

if (urlFlag !== -1 && args[urlFlag + 1]) {
  targetUrl = args[urlFlag + 1];
} else if (useLast) {
  const REGISTRY_PATH = path.join(process.cwd(), 'content', 'static', 'content_registry.json');
  try {
    const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8')) as Array<{ slug: string }>;
    const last = registry[registry.length - 1];
    targetUrl = last?.slug ?? null;
    if (targetUrl && !targetUrl.startsWith('http')) {
      console.error('  Last registry entry has no valid URL slug.');
      process.exit(1);
    }
  } catch {
    console.error('  Could not read content_registry.json');
    process.exit(1);
  }
}

if (!targetUrl) {
  console.error('Usage: npm run ping:indexers -- --url https://... | --last');
  process.exit(1);
}

console.log(`\n  Pinging indexers for: ${targetUrl}\n`);

// ─── Google Indexing API ─────────────────────────────────────────────────────

async function pingGoogle(articleUrl: string): Promise<void> {
  const saEmail = process.env.GOOGLE_SA_EMAIL;
  const saKey   = process.env.GOOGLE_SA_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!saEmail || !saKey) {
    console.log('  Google: GOOGLE_SA_EMAIL or GOOGLE_SA_PRIVATE_KEY not set — skipping.');
    return;
  }

  try {
    const token = await getGoogleAccessToken(saEmail, saKey);
    const result = await googleIndexingRequest(token, articleUrl);
    console.log(`  Google Indexing API: ${result}`);
    logPing('google', articleUrl, result);
  } catch (err) {
    console.error(`  Google Indexing API error: ${err instanceof Error ? err.message : String(err)}`);
    logPing('google', articleUrl, `error: ${err}`);
  }
}

/** Build and sign a JWT, exchange for an access token */
async function getGoogleAccessToken(email: string, privateKey: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const headerB64  = toBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payloadB64 = toBase64Url(JSON.stringify({
    iss:   email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud:   'https://oauth2.googleapis.com/token',
    exp:   now + 3600,
    iat:   now,
  }));

  const signInput = `${headerB64}.${payloadB64}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signInput);
  const signature = sign.sign(privateKey, 'base64url');
  const jwt = `${signInput}.${signature}`;

  const body = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;
  const response = await httpPost('oauth2.googleapis.com', '/token', body, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  const parsed = JSON.parse(response) as { access_token?: string; error?: string };
  if (!parsed.access_token) throw new Error(parsed.error ?? 'No access_token in response');
  return parsed.access_token;
}

/** Call the Indexing API with URL_UPDATED notification */
async function googleIndexingRequest(token: string, url: string): Promise<string> {
  const body = JSON.stringify({ url, type: 'URL_UPDATED' });
  const response = await httpPost(
    'indexing.googleapis.com',
    '/v3/urlNotifications:publish',
    body,
    { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  );
  const parsed = JSON.parse(response) as { urlNotificationMetadata?: { latestUpdate?: { type?: string } }; error?: { message?: string } };
  if (parsed.error) throw new Error(parsed.error.message ?? JSON.stringify(parsed.error));
  return parsed.urlNotificationMetadata?.latestUpdate?.type ?? 'submitted';
}

// ─── Bing URL Submission API ─────────────────────────────────────────────────

async function pingBing(articleUrl: string): Promise<void> {
  const apiKey = process.env.BING_WEBMASTER_API_KEY;

  if (!apiKey) {
    console.log('  Bing: BING_WEBMASTER_API_KEY not set — skipping.');
    return;
  }

  try {
    // Extract site URL from the article URL (Bing requires siteUrl to match verified property)
    const parsed = new URL(articleUrl);
    const siteUrl = `${parsed.protocol}//${parsed.hostname}/`;
    const body = JSON.stringify({ siteUrl, urlList: [articleUrl] });

    const response = await httpPost(
      'ssl.bing.com',
      `/webmaster/api.svc/json/SubmitUrlbatch?apikey=${encodeURIComponent(apiKey)}`,
      body,
      { 'Content-Type': 'application/json' }
    );
    const parsed2 = JSON.parse(response) as { d?: null | string };
    const result = parsed2.d === null ? 'submitted' : JSON.stringify(parsed2);
    console.log(`  Bing Webmaster API: ${result}`);
    logPing('bing', articleUrl, result);
  } catch (err) {
    console.error(`  Bing Webmaster API error: ${err instanceof Error ? err.message : String(err)}`);
    logPing('bing', articleUrl, `error: ${err}`);
  }
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function toBase64Url(str: string): string {
  return Buffer.from(str).toString('base64url');
}

function httpPost(
  hostname: string,
  path: string,
  body: string,
  headers: Record<string, string>
): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      { hostname, path, method: 'POST', headers: { ...headers, 'Content-Length': Buffer.byteLength(body) } },
      (res) => {
        let data = '';
        res.on('data', (chunk: Buffer) => { data += chunk.toString(); });
        res.on('end', () => resolve(data));
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function logPing(engine: string, url: string, result: string) {
  const logDir  = path.join(process.cwd(), '.alfasa');
  const logFile = path.join(logDir, 'ping_log.json');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

  let log: Array<{ date: string; engine: string; url: string; result: string }> = [];
  try { log = JSON.parse(fs.readFileSync(logFile, 'utf8')); } catch { log = []; }

  log.push({ date: new Date().toISOString(), engine, url, result });
  // Keep last 500 entries
  if (log.length > 500) log = log.slice(-500);
  fs.writeFileSync(logFile, JSON.stringify(log, null, 2) + '\n');
}

// ─── Run ─────────────────────────────────────────────────────────────────────

await Promise.all([
  pingGoogle(targetUrl),
  pingBing(targetUrl),
]);

console.log('\n  Done. Ping log written to .alfasa/ping_log.json\n');
