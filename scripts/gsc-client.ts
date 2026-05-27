#!/usr/bin/env ts-node
// scripts/gsc-client.ts
// Google Search Console — Search Analytics API client.
// Used by lifecycle-manager.ts --promote to auto-feature ranked articles.
//
// Auth: Same service account as scripts/ping-indexers.ts
//   GOOGLE_SA_EMAIL        — service account email from Google Cloud Console
//   GOOGLE_SA_PRIVATE_KEY  — RSA private key (paste with \n literals in Railway)
//
// Google Cloud setup (one-time, same account used for ping-indexers):
//   1. Service account must have "Owner" role in Google Search Console property
//   2. Enable "Google Search Console API" in Google Cloud Console
//   3. Same JSON key file → extract client_email + private_key into env vars

import crypto from 'crypto';
import https from 'https';

export interface GSCRow {
  slug:        string;   // full article URL
  clicks:      number;
  impressions: number;
  position:    number;   // average position (lower = better)
  ctr:         number;   // click-through rate 0–1
}

// ─── JWT Auth (mirrors ping-indexers.ts) ─────────────────────────────────────

function toBase64Url(str: string): string {
  return Buffer.from(str).toString('base64url');
}

function httpPost(
  hostname: string,
  urlPath: string,
  body: string,
  headers: Record<string, string>
): Promise<string> {
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
        res.on('end', () => resolve(data));
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function getAccessToken(email: string, privateKey: string): Promise<string> {
  const now       = Math.floor(Date.now() / 1000);
  const headerB64 = toBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payloadB64 = toBase64Url(JSON.stringify({
    iss:   email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud:   'https://oauth2.googleapis.com/token',
    exp:   now + 3600,
    iat:   now,
  }));

  const signInput = `${headerB64}.${payloadB64}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signInput);
  const signature  = sign.sign(privateKey, 'base64url');
  const jwt        = `${signInput}.${signature}`;

  const body = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;
  const raw = await httpPost(
    'oauth2.googleapis.com',
    '/token',
    body,
    { 'Content-Type': 'application/x-www-form-urlencoded' }
  );

  const parsed = JSON.parse(raw) as { access_token?: string; error?: string };
  if (!parsed.access_token) throw new Error(parsed.error ?? 'No access_token in GSC response');
  return parsed.access_token;
}

// ─── Search Analytics Query ───────────────────────────────────────────────────

/**
 * Queries Google Search Console Search Analytics for a list of article URLs.
 * Returns performance data for the last `days` days grouped by page.
 *
 * @param siteUrl   Verified GSC property URL, e.g. "https://www.ozonedailynews.com/"
 * @param days      Look-back window in days (default 7)
 * @param slugUrls  Optional list of full URLs to filter — if empty, returns all pages
 */
export async function querySearchAnalytics(
  siteUrl: string,
  days = 7,
  slugUrls: string[] = []
): Promise<GSCRow[]> {
  const email      = process.env.GOOGLE_SA_EMAIL;
  const privateKey = process.env.GOOGLE_SA_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error('GOOGLE_SA_EMAIL or GOOGLE_SA_PRIVATE_KEY env vars not set');
  }

  const token = await getAccessToken(email, privateKey);

  const endDate   = new Date();
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().split('T')[0];

  const requestBody: Record<string, unknown> = {
    startDate:       fmt(startDate),
    endDate:         fmt(endDate),
    dimensions:      ['page'],
    rowLimit:        1000,
    dataState:       'all',
  };

  // If specific URLs provided, add a page dimension filter
  if (slugUrls.length > 0) {
    requestBody.dimensionFilterGroups = [{
      filters: slugUrls.map((url) => ({
        dimension:  'page',
        operator:   'equals',
        expression: url,
      })),
    }];
  }

  const encodedSite = encodeURIComponent(siteUrl);
  const raw = await httpPost(
    'searchconsole.googleapis.com',
    `/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
    JSON.stringify(requestBody),
    { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  );

  const parsed = JSON.parse(raw) as {
    rows?: Array<{
      keys: string[];
      clicks: number;
      impressions: number;
      position: number;
      ctr: number;
    }>;
    error?: { message?: string; status?: string };
  };

  if (parsed.error) throw new Error(parsed.error.message ?? JSON.stringify(parsed.error));

  return (parsed.rows ?? []).map((row) => ({
    slug:        row.keys[0] ?? '',
    clicks:      row.clicks ?? 0,
    impressions: row.impressions ?? 0,
    position:    row.position ?? 999,
    ctr:         row.ctr ?? 0,
  }));
}
