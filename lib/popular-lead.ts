/**
 * lib/popular-lead.ts
 *
 * Server-only utility.  Returns the pagePath slug of the most-viewed article
 * on objectwire.org over the past 7 days, using the GA4 Data API.
 *
 * Requirements (add to .env.local):
 *   GA4_PROPERTY_ID       = "properties/XXXXXXXXX"
 *   GA4_SERVICE_ACCOUNT   = '{"type":"service_account","client_email":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...",...}'
 *
 * Returns null (graceful fallback) when:
 *   - env vars are missing
 *   - GA4 returns an error
 *   - no article-depth slug is found in the response
 */

import { JWT } from 'google-auth-library';

const SKIP_SLUGS = new Set([
  '/', '/news', '/tech', '/finance', '/search', '/site-index',
  '/youtube', '/editorial-standards', '/social', '/entertainment', '/blog',
  '/about', '/team', '/privacy-policy', '/terms-of-service', '/copyright',
  '/corrections', '/get-help', '/service', '/index', '/feeds',
  '/saved', '/account', '/profile', '/authors', '/tags',
]);

function isArticlePage(slug: string): boolean {
  if (!slug || SKIP_SLUGS.has(slug)) return false;
  if (slug.startsWith('/?') || slug.startsWith('/api/')) return false;
  // Must be at least /category/article depth
  return slug.split('/').filter(Boolean).length >= 2;
}

export async function getPopularLeadSlug(): Promise<string | null> {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const serviceAccountRaw = process.env.GA4_SERVICE_ACCOUNT;

  if (!propertyId || !serviceAccountRaw) return null;

  try {
    const sa = JSON.parse(serviceAccountRaw);
    const auth = new JWT({
      email: sa.client_email,
      key: sa.private_key,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });
    const { token } = await auth.getAccessToken();
    if (!token) return null;

    const res = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/${propertyId}:runReport`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          dimensions: [{ name: 'pagePath' }],
          metrics: [{ name: 'screenPageViews' }],
          orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
          limit: 30,
        }),
        // Next.js: cache GA4 result for up to 1 hour alongside page ISR
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    for (const row of data.rows ?? []) {
      const slug: string = row.dimensionValues?.[0]?.value ?? '';
      if (isArticlePage(slug)) return slug;
    }

    return null;
  } catch {
    return null;
  }
}
