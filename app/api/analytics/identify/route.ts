// =============================================================================
// POST /api/analytics/identify
// =============================================================================
// Server-side Measurement Protocol endpoint.
// Called by tracking.identifyUser() after a visitor provides their email.
//
// Sends a GA4 `identify` event using the Measurement Protocol API so the
// session is attributed even if the visitor has an ad blocker.
//
// Secrets are server-only (GA_MEASUREMENT_PROTOCOL_SECRET env var).
// No PII is forwarded — only hashed email + visit metadata.
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-9FM4W3K6GV';
const API_SECRET = process.env.GA_MEASUREMENT_PROTOCOL_SECRET ?? '';

const MP_ENDPOINT = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${API_SECRET}`;

interface IdentifyBody {
  clientId: string;
  emailHash: string;
  visitCount: number;
  name?: string;
}

export async function POST(req: NextRequest) {
  if (!API_SECRET) {
    return NextResponse.json({ error: 'Measurement Protocol not configured' }, { status: 500 });
  }

  let body: IdentifyBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { clientId, emailHash, visitCount, name } = body;

  if (!clientId || !emailHash) {
    return NextResponse.json({ error: 'Missing clientId or emailHash' }, { status: 400 });
  }

  const payload = {
    client_id: clientId,
    user_id: emailHash,
    events: [
      {
        name: 'visitor_identified',
        params: {
          visit_count: visitCount ?? 1,
          has_name: Boolean(name),
          engagement_time_msec: 1,
        },
      },
    ],
  };

  try {
    const res = await fetch(MP_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // GA4 Measurement Protocol returns 204 on success
    if (res.status === 204 || res.ok) {
      return NextResponse.json({ ok: true });
    }

    const text = await res.text();
    console.error('[analytics/identify] GA4 MP error:', res.status, text);
    return NextResponse.json({ error: 'GA4 rejected the event' }, { status: 502 });
  } catch (err) {
    console.error('[analytics/identify] fetch failed:', err);
    return NextResponse.json({ error: 'Network error' }, { status: 502 });
  }
}
