import { NextRequest, NextResponse } from 'next/server';

// =============================================================================
// NEWSLETTER SUBSCRIBE — POST /api/newsletter/subscribe
// Primary: Beehiiv API (BEEHIIV_API_KEY + BEEHIIV_PUBLICATION_ID env vars)
// Fallback: logs to console if env vars are not set (for local dev)
// =============================================================================

const BEEHIIV_API_KEY        = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body?.email || '').trim().toLowerCase();

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // ── Beehiiv ───────────────────────────────────────────────────────────────
    if (BEEHIIV_API_KEY && BEEHIIV_PUBLICATION_ID) {
      const beehiivRes = await fetch(
        `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method:  'POST',
          headers: {
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            email,
            reactivate_existing: true,
            send_welcome_email:  true,
            utm_source:   'objectwire',
            utm_medium:   'article_footer',
            utm_campaign: 'newsletter_signup',
            referring_site: req.headers.get('referer') || 'https://www.ozonenetwork.news',
          }),
        }
      );

      if (!beehiivRes.ok) {
        const errBody = await beehiivRes.text();
        console.error('[newsletter/subscribe] Beehiiv error', beehiivRes.status, errBody);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
      }

      const data = await beehiivRes.json();

      // Beehiiv returns status "active" for new subs and "validating" while confirming
      const isExisting = data?.data?.status === 'active' && data?.data?.created === false;

      return NextResponse.json(
        { message: isExisting ? "You're already subscribed!" : 'Subscribed! Thanks for joining.' },
        { status: 200 }
      );
    }

    // ── Dev fallback (no Beehiiv env vars configured) ─────────────────────────
    console.warn('[newsletter/subscribe] BEEHIIV_API_KEY / BEEHIIV_PUBLICATION_ID not set. Set these env vars to enable Beehiiv.');
    console.info('[newsletter/subscribe] Would have subscribed:', email);
    return NextResponse.json({ message: 'Subscribed! Thanks for joining.' }, { status: 200 });

  } catch (err) {
    console.error('[newsletter/subscribe]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
