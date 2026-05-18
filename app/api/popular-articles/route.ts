import { NextResponse } from 'next/server';
import { JWT } from 'google-auth-library';
import { getLatestArticles } from '@/lib/registry-service';

export const revalidate = 3600;

const SKIP_SLUGS = new Set([
  '/', '/news', '/tech', '/finance', '/search', '/site-index',
  '/youtube', '/editorial-standards', '/social', '/entertainment', '/blog',
  '/about', '/team', '/privacy-policy', '/terms-of-service', '/copyright',
  '/corrections', '/get-help', '/service', '/index', '/feeds',
]);

function isArticlePage(slug: string): boolean {
  if (SKIP_SLUGS.has(slug)) return false;
  if (slug.startsWith('/?')) return false;
  return slug.split('/').filter(Boolean).length >= 2;
}

async function getAccessToken() {
  const sa = JSON.parse(process.env.GA4_SERVICE_ACCOUNT!);
  const auth = new JWT({
    email: sa.client_email,
    key: sa.private_key,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });
  return auth.getAccessToken();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const propertyId = process.env.GA4_PROPERTY_ID;
  const serviceAccountRaw = process.env.GA4_SERVICE_ACCOUNT;

  if (!propertyId || !serviceAccountRaw) {
    return NextResponse.json({ rows: [], views: {}, source: 'fallback' });
  }

  // Mode: slug-based view count lookup
  const slugsParam = searchParams.get('slugs');
  if (slugsParam) {
    const slugs = slugsParam.split(',').map(s => s.trim()).filter(Boolean).slice(0, 50);
    try {
      const token = await getAccessToken();
      const res = await fetch(
        `https://analyticsdata.googleapis.com/v1beta/${propertyId}:runReport`,
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${token.token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
            dimensions: [{ name: 'pagePath' }],
            metrics: [{ name: 'screenPageViews' }],
            limit: slugs.length,
            dimensionFilter: {
              filter: { fieldName: 'pagePath', inListFilter: { values: slugs } },
            },
          }),
        }
      );
      if (!res.ok) return NextResponse.json({ views: {}, source: 'fallback' });
      const data = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const views: Record<string, number> = {};
      (data.rows ?? []).forEach((row: any) => {
        const slug = row.dimensionValues?.[0]?.value as string;
        const count = Number(row.metricValues?.[0]?.value ?? 0);
        if (slug) views[slug] = count;
      });
      return NextResponse.json({ views, source: 'ga4' });
    } catch {
      return NextResponse.json({ views: {}, source: 'fallback' });
    }
  }

  // Mode: ranked top-N
  const limit = Math.min(Number(searchParams.get('limit') ?? '15'), 30);
  try {
    const token = await getAccessToken();
    const res = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/${propertyId}:runReport`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token.token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          dimensions: [{ name: 'pagePath' }],
          metrics: [{ name: 'screenPageViews' }],
          orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
          limit: 80,
          dimensionFilter: {
            filter: { fieldName: 'pagePath', stringFilter: { matchType: 'BEGINS_WITH', value: '/' } },
          },
        }),
      }
    );
    if (!res.ok) return NextResponse.json({ rows: [], source: 'fallback' });

    const data = await res.json();
    const allArticles = await getLatestArticles(500);
    const registryMap = new Map(allArticles.map(a => [a.slug, a]));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = (data.rows ?? [])
      .map((row: any) => ({
        slug: row.dimensionValues?.[0]?.value ?? '/',
        views: Number(row.metricValues?.[0]?.value ?? 0),
      }))
      .filter((r: { slug: string }) => isArticlePage(r.slug))
      .map((r: { slug: string; views: number }) => {
        const entry = registryMap.get(r.slug);
        const fallbackTitle = r.slug.split('/').filter(Boolean).pop()
          ?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) ?? r.slug;
        return {
          slug: r.slug,
          views: r.views,
          title: entry?.title ?? fallbackTitle,
          category: entry?.category ?? r.slug.split('/').filter(Boolean)[0] ?? 'news',
          publishDate: entry?.publishDate ?? '',
          author: entry?.author ?? 'OzoneNews',
          description: entry?.description,
        };
      })
      .slice(0, limit);

    return NextResponse.json({ rows, source: 'ga4' });
  } catch {
    return NextResponse.json({ rows: [], source: 'fallback' });
  }
}
