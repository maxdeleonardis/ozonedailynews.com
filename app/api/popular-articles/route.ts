// app/api/popular-articles/route.ts
// ---------------------------------------------------------------------------
// Two modes:
//
//  1. GET /api/popular-articles?limit=N
//     Returns the top-N most-viewed article pages from GA4 (last 7 days),
//     enriched with title/category/author from the content registry.
//
//  2. GET /api/popular-articles?slugs=/a/b,/c/d,/e/f
//     Returns exact 7-day view counts for the given comma-separated slugs
//     in a single GA4 batch call. Returns a map { [slug]: views }.
// ---------------------------------------------------------------------------

import { NextResponse } from 'next/server';
import { JWT } from 'google-auth-library';
import { getEntry, getLatestArticles } from '@/lib/content-registry';

export const revalidate = 3600; // Cache for 1 hour

// Pages to always skip — nav/index pages that aren't articles
const SKIP_SLUGS = new Set(['/', '/news', '/tech', '/finance', '/search', '/site-index',
  '/youtube', '/editorial-standards', '/social', '/entertainment', '/blog',
  '/about', '/team', '/privacy-policy', '/terms-of-service', '/copyright',
  '/corrections', '/get-help', '/service', '/index', '/feeds']);

function isArticlePage(slug: string): boolean {
  if (SKIP_SLUGS.has(slug)) return false;
  if (slug.startsWith('/?')) return false;
  const parts = slug.split('/').filter(Boolean);
  return parts.length >= 2;
}

interface EnrichedRow {
  slug: string;
  views: number;
  title: string;
  category: string;
  publishDate: string;
  author: string;
  description?: string;
}

async function getJWT() {
  const serviceAccountRaw = process.env.GA4_SERVICE_ACCOUNT!;
  const serviceAccount = JSON.parse(serviceAccountRaw);
  const auth = new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });
  return auth.getAccessToken();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const propertyId = process.env.GA4_PROPERTY_ID;
  const serviceAccountRaw = process.env.GA4_SERVICE_ACCOUNT;

  if (!propertyId || !serviceAccountRaw) {
    return NextResponse.json({ rows: [], source: 'fallback' });
  }

  // ── Mode 2: slug lookup ──────────────────────────────────────────────────
  const slugsParam = searchParams.get('slugs');
  if (slugsParam) {
    const slugs = slugsParam.split(',').map(s => s.trim()).filter(Boolean).slice(0, 50);

    try {
      const token = await getJWT();

      const body = {
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        limit: slugs.length,
        dimensionFilter: {
          filter: {
            fieldName: 'pagePath',
            inListFilter: { values: slugs },
          },
        },
      };

      const res = await fetch(
        `https://analyticsdata.googleapis.com/v1beta/${propertyId}:runReport`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) {
        console.error('[popular-articles/slugs] GA4 API error:', await res.text());
        return NextResponse.json({ views: {}, source: 'fallback' });
      }

      const data = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const views: Record<string, number> = {};
      (data.rows ?? []).forEach((row: any) => {
        const slug = row.dimensionValues?.[0]?.value as string;
        const count = Number(row.metricValues?.[0]?.value ?? 0);
        if (slug) views[slug] = count;
      });

      return NextResponse.json({ views, source: 'ga4' });
    } catch (err) {
      console.error('[popular-articles/slugs] Unexpected error:', err);
      return NextResponse.json({ views: {}, source: 'fallback' });
    }
  }

  // ── Mode 1: top-N ranked list ────────────────────────────────────────────
  const limit = Math.min(Number(searchParams.get('limit') ?? '15'), 30);

  try {
    const token = await getJWT();

    const body = {
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 80,
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: { matchType: 'BEGINS_WITH', value: '/' },
        },
      },
    };

    const res = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/${propertyId}:runReport`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('[popular-articles] GA4 API error:', err);
      return NextResponse.json({ rows: [], source: 'fallback', error: 'GA4 API error' });
    }

    const data = await res.json();

    const allArticles = getLatestArticles(500);
    const registryMap = new Map(allArticles.map((a) => [a.slug, a]));

    const rows: EnrichedRow[] = (data.rows ?? [])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((row: any) => ({
        slug: row.dimensionValues?.[0]?.value ?? '/',
        views: Number(row.metricValues?.[0]?.value ?? 0),
      }))
      .filter((r: { slug: string }) => isArticlePage(r.slug))
      .map((r: { slug: string; views: number }) => {
        const entry = registryMap.get(r.slug) ?? getEntry(r.slug);
        const fallbackTitle = r.slug
          .split('/')
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()) ?? r.slug;

        return {
          slug: r.slug,
          views: r.views,
          title: entry?.title ?? fallbackTitle,
          category: entry?.category ?? r.slug.split('/').filter(Boolean)[0] ?? 'news',
          publishDate: entry?.publishDate ?? '',
          author: entry?.author ?? 'ObjectWire',
          description: entry?.description,
        };
      })
      .slice(0, limit);

    return NextResponse.json({ rows, source: 'ga4' });
  } catch (err) {
    console.error('[popular-articles] Unexpected error:', err);
    return NextResponse.json({ rows: [], source: 'fallback', error: String(err) });
  }
}
