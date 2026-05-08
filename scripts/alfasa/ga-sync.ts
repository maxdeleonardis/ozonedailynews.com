#!/usr/bin/env npx tsx
/**
 * scripts/alfasa/ga-sync.ts
 *
 * Pulls page-level traffic data from the Google Analytics Data API v1 and
 * writes a daily snapshot to .alfasa/ga-cache.json.
 *
 * Usage:
 *   npm run alfasa:sync          — pulls data (skips if cache is < 23 hours old)
 *   npm run alfasa:sync -- --force  — force refresh even if cache is fresh
 *
 * Required env vars (set in .env.local):
 *   GOOGLE_ANALYTICS_PROPERTY_ID   — numeric GA4 property ID (e.g. "123456789")
 *   GOOGLE_SA_CLIENT_EMAIL         — service account email
 *   GOOGLE_SA_PRIVATE_KEY          — service account private key (PEM, with \n escapes)
 *
 * Output shape (.alfasa/ga-cache.json):
 * {
 *   "updatedAt": "2026-05-10T14:00:00.000Z",
 *   "periodDays": 28,
 *   "pages": [
 *     { "path": "/video-games/gta-6", "sessions": 4200, "impressions": 18000, "clicks": 820 },
 *     ...
 *   ]
 * }
 *
 * alfasa-suggest.ts reads this file to cross-reference stale-page alerts with
 * real traffic — suppressing low-traffic pages and surfacing high-traffic stale
 * pages that need urgent refresh.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as crypto from 'crypto';

// ── Config ────────────────────────────────────────────────────────────────────

const CACHE_PATH = path.resolve(process.cwd(), '.alfasa', 'ga-cache.json');
const CACHE_MAX_AGE_HOURS = 23; // skip fetch if cache is fresher than this
const PERIOD_DAYS = 28;         // rolling window for GA data
const MAX_ROWS = 500;           // GA row limit per request

// ── ENV helpers ───────────────────────────────────────────────────────────────

function loadEnv(): void {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!(key in process.env)) process.env[key] = val;
  }
}

// ── JWT / OAuth2 (service account) ───────────────────────────────────────────

function base64url(buf: Buffer): string {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

async function getAccessToken(clientEmail: string, privateKeyPem: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };

  const encodedHeader = base64url(Buffer.from(JSON.stringify(header)));
  const encodedPayload = base64url(Buffer.from(JSON.stringify(payload)));
  const signingInput = `${encodedHeader}.${encodedPayload}`;

  // Normalize escaped newlines in private key
  const normalizedKey = privateKeyPem.replace(/\\n/g, '\n');

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signingInput);
  const signature = base64url(signer.sign(normalizedKey));

  const jwt = `${signingInput}.${signature}`;

  // Exchange JWT for access token
  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: jwt,
  }).toString();

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'oauth2.googleapis.com',
        path: '/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data) as { access_token?: string; error?: string };
            if (parsed.access_token) resolve(parsed.access_token);
            else reject(new Error(`Token error: ${parsed.error ?? data}`));
          } catch {
            reject(new Error(`Token parse error: ${data}`));
          }
        });
      },
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── GA Data API request ───────────────────────────────────────────────────────

interface GaPageRow {
  path: string;
  sessions: number;
  impressions: number;
  clicks: number;
}

async function fetchGaData(propertyId: string, accessToken: string): Promise<GaPageRow[]> {
  const requestBody = JSON.stringify({
    dateRanges: [{ startDate: `${PERIOD_DAYS}daysAgo`, endDate: 'today' }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [
      { name: 'sessions' },
      { name: 'impressions' },   // GSC-linked data (requires Search Console linking in GA4)
      { name: 'clicks' },
    ],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: MAX_ROWS,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'analyticsdata.googleapis.com',
        path: `/v1beta/properties/${propertyId}:runReport`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(requestBody),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data) as {
              rows?: Array<{
                dimensionValues: Array<{ value: string }>;
                metricValues: Array<{ value: string }>;
              }>;
              error?: { message: string };
            };
            if (parsed.error) {
              reject(new Error(`GA API error: ${parsed.error.message}`));
              return;
            }
            const rows: GaPageRow[] = (parsed.rows ?? []).map((row) => ({
              path: row.dimensionValues[0].value,
              sessions: parseInt(row.metricValues[0].value, 10) || 0,
              impressions: parseInt(row.metricValues[1].value, 10) || 0,
              clicks: parseInt(row.metricValues[2].value, 10) || 0,
            }));
            resolve(rows);
          } catch {
            reject(new Error(`GA parse error: ${data.slice(0, 300)}`));
          }
        });
      },
    );
    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

// ── Cache helpers ─────────────────────────────────────────────────────────────

interface GaCache {
  updatedAt: string;
  periodDays: number;
  pages: GaPageRow[];
}

function isCacheFresh(): boolean {
  if (!fs.existsSync(CACHE_PATH)) return false;
  try {
    const cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8')) as GaCache;
    const updatedAt = new Date(cache.updatedAt).getTime();
    const ageHours = (Date.now() - updatedAt) / 1000 / 3600;
    return ageHours < CACHE_MAX_AGE_HOURS;
  } catch {
    return false;
  }
}

function writeCache(pages: GaPageRow[]): void {
  const cacheDir = path.dirname(CACHE_PATH);
  if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
  const cache: GaCache = {
    updatedAt: new Date().toISOString(),
    periodDays: PERIOD_DAYS,
    pages,
  };
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf8');
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  loadEnv();

  const force = process.argv.includes('--force');

  if (!force && isCacheFresh()) {
    const cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8')) as GaCache;
    const ageMin = Math.round((Date.now() - new Date(cache.updatedAt).getTime()) / 1000 / 60);
    console.log(`[alfasa:sync] Cache is fresh (${ageMin}m old). Skipping fetch. Use --force to override.`);
    return;
  }

  const propertyId = process.env.GOOGLE_ANALYTICS_PROPERTY_ID;
  const clientEmail = process.env.GOOGLE_SA_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SA_PRIVATE_KEY;

  if (!propertyId || !clientEmail || !privateKey) {
    console.error(
      '[alfasa:sync] Missing required env vars:\n' +
      '  GOOGLE_ANALYTICS_PROPERTY_ID\n' +
      '  GOOGLE_SA_CLIENT_EMAIL\n' +
      '  GOOGLE_SA_PRIVATE_KEY\n' +
      'Add them to .env.local. See Docs/WHITEPAPER.md for setup instructions.',
    );
    process.exit(1);
  }

  console.log('[alfasa:sync] Fetching Google Analytics data...');

  const accessToken = await getAccessToken(clientEmail, privateKey);
  const pages = await fetchGaData(propertyId, accessToken);

  writeCache(pages);

  console.log(
    `[alfasa:sync] Done. ${pages.length} pages cached. ` +
    `Top page: ${pages[0]?.path ?? 'none'} (${pages[0]?.sessions ?? 0} sessions/${PERIOD_DAYS}d)`,
  );
}

main().catch((err) => {
  console.error('[alfasa:sync] Fatal error:', (err as Error).message);
  process.exit(1);
});
