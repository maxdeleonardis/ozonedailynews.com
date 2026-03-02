// app/api/article-views/route.ts
// ---------------------------------------------------------------------------
// Returns 7-day pageview count for a single article slug from GA4 Data API.
// Usage: GET /api/article-views?slug=/tech/some-article
// Returns { views: number, source: 'ga4' | 'fallback' }
// ---------------------------------------------------------------------------

import { NextResponse } from 'next/server';
import { JWT } from 'google-auth-library';

// Cache each slug's view count for 1 hour (ISR)
export const revalidate = 3600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ views: 0, source: 'fallback', error: 'slug required' });
  }

  const propertyId = process.env.GA4_PROPERTY_ID;
  const serviceAccountRaw = process.env.GA4_SERVICE_ACCOUNT;

  if (!propertyId || !serviceAccountRaw) {
    return NextResponse.json({ views: 0, source: 'fallback' });
  }

  try {
    const serviceAccount = JSON.parse(serviceAccountRaw);
    const auth = new JWT({
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const token = await auth.getAccessToken();

    const body = {
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: { matchType: 'EXACT', value: slug },
        },
      },
      limit: 1,
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
      console.error('[article-views] GA4 error:', await res.text());
      return NextResponse.json({ views: 0, source: 'fallback', error: 'GA4 API error' });
    }

    const data = await res.json();
    const views = Number(data.rows?.[0]?.metricValues?.[0]?.value ?? 0);

    return NextResponse.json({ views, source: 'ga4' });
  } catch (err) {
    console.error('[article-views] Unexpected error:', err);
    return NextResponse.json({ views: 0, source: 'fallback', error: String(err) });
  }
}
