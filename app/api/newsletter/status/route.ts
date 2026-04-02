import { NextRequest, NextResponse } from 'next/server';

// =============================================================================
// NEWSLETTER STATUS — GET /api/newsletter/status?email=xxx
// Returns whether a given email is already subscribed in Beehiiv.
// =============================================================================

const BEEHIIV_API_KEY        = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')?.trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ subscribed: false }, { status: 400 });
  }

  if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
    // Dev fallback — can't check
    return NextResponse.json({ subscribed: false });
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions/by_email/${encodeURIComponent(email)}`,
      {
        headers: {
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
        // Don't cache — always fresh
        cache: 'no-store',
      }
    );

    if (res.status === 404) {
      return NextResponse.json({ subscribed: false });
    }

    if (!res.ok) {
      return NextResponse.json({ subscribed: false });
    }

    const data = await res.json();
    const status = data?.data?.status;
    const subscribed = status === 'active' || status === 'validating';

    return NextResponse.json({ subscribed, status: status ?? null });
  } catch {
    return NextResponse.json({ subscribed: false });
  }
}
