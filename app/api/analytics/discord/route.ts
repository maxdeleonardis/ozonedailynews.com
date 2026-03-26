// =============================================================================
// POST /api/analytics/discord
// =============================================================================
// Server-side GA4 Measurement Protocol endpoint for Discord-triggered events.
//
// Tracks the following events via GA4 MP so they appear in GA4 even when
// the user has an ad-blocker:
//
//   discord_sign_in      — user authenticates with Discord
//   discord_comment      — user submits a comment
//   discord_sign_out     — user signs out
//
// The Discord username is sent as a `user_id` (SHA-256 hashed, not plain-text)
// and as a `discord_username` user property so you can segment in GA4 reports.
//
// No PII is stored by GA4 — only the hashed username.
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-9FM4W3K6GV';
const API_SECRET = process.env.GA_MEASUREMENT_PROTOCOL_SECRET ?? '';

const MP_ENDPOINT = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${API_SECRET}`;

type DiscordEventName = 'discord_sign_in' | 'discord_comment' | 'discord_sign_out';

interface DiscordAnalyticsBody {
  event: DiscordEventName;
  clientId: string;
  discordUsername: string;
  discordId: string;
  /** Optional: article slug for comment events */
  slug?: string;
}

/** Hash the discord username so it's not stored as plain-text PII in GA4 */
function hashUsername(username: string): string {
  return createHash('sha256').update(username.toLowerCase()).digest('hex');
}

export async function POST(req: NextRequest) {
  if (!API_SECRET) {
    return NextResponse.json(
      { error: 'GA Measurement Protocol not configured' },
      { status: 500 }
    );
  }

  let body: DiscordAnalyticsBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { event, clientId, discordUsername, discordId, slug } = body;

  if (!event || !clientId || !discordUsername || !discordId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const validEvents: DiscordEventName[] = [
    'discord_sign_in',
    'discord_comment',
    'discord_sign_out',
  ];
  if (!validEvents.includes(event)) {
    return NextResponse.json({ error: 'Invalid event name' }, { status: 400 });
  }

  const hashedUsername = hashUsername(discordUsername);

  const eventParams: Record<string, string | number | boolean> = {
    discord_username_hash: hashedUsername,
    engagement_time_msec: 100,
  };

  if (slug) {
    eventParams.article_slug = slug;
  }

  const payload = {
    client_id: clientId,
    // Using SHA-256 hashed Discord username as user_id enables cross-session
    // user-level attribution in GA4 without storing PII
    user_id: hashedUsername,
    user_properties: {
      discord_connected: { value: true },
      // Store first 2 chars of hash as a cohort bucket — useful for A/B
      discord_cohort: { value: hashedUsername.slice(0, 2) },
    },
    events: [
      {
        name: event,
        params: eventParams,
      },
    ],
  };

  try {
    const res = await fetch(MP_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.status === 204 || res.ok) {
      return NextResponse.json({ ok: true });
    }

    const text = await res.text();
    console.error('[analytics/discord] GA4 MP error:', res.status, text);
    return NextResponse.json({ error: 'GA4 rejected the event' }, { status: 502 });
  } catch (err) {
    console.error('[analytics/discord] fetch failed:', err);
    return NextResponse.json({ error: 'Network error' }, { status: 502 });
  }
}
