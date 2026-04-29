import { ImageResponse } from 'next/og';
import { createClient } from '@supabase/supabase-js';
import type { NextRequest } from 'next/server';

// Edge runtime — lightweight, fast, globally distributed
export const runtime = 'edge';

const W = 1200;
const H = 630;

// Per-category accent colours — matches ObjectWire brand palette
const CATEGORY_COLORS: Record<string, string> = {
  Gaming:        '#7c3aed',
  Tech:          '#2563eb',
  Technology:    '#2563eb',
  Finance:       '#059669',
  Crypto:        '#d97706',
  Entertainment: '#db2777',
  Sports:        '#dc2626',
  Politics:      '#475569',
  Science:       '#0891b2',
  World:         '#4338ca',
  News:          '#1e40af',
  Culture:       '#e11d48',
  Influencer:    '#f59e0b',
  'World Cup':   '#16a34a',
  'Formula 1':   '#dc2626',
};

function accentFor(category: string): string {
  return CATEGORY_COLORS[category] ?? '#3b82f6';
}

/**
 * Dynamic OG image generator.
 *
 * Query params (all optional if ?slug is provided):
 *   slug      - article slug (e.g. /entertainment/news/fortnite-moves-into-movies)
 *               Fetches title, category, description, and image_url from content_registry.
 *   title     - override / standalone title
 *   category  - override / standalone category
 *   desc      - override / standalone short description
 *   image     - absolute URL to use as background image (overrides registry image_url)
 *
 * Examples:
 *   /api/og?slug=/entertainment/news/fortnite-moves-into-movies
 *   /api/og?title=GTA+6+Release+Date&category=Gaming&desc=Everything+confirmed+so+far
 *   /api/og?slug=/crypto/news/anchorage-usat-celo&image=https://images.unsplash.com/...
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug        = searchParams.get('slug');
    const titleParam  = searchParams.get('title');
    const catParam    = searchParams.get('category');
    const descParam   = searchParams.get('desc');
    const imageParam  = searchParams.get('image');

    let title    = titleParam  || 'ObjectWire';
    let category = catParam    || 'News';
    let desc     = descParam   || '';
    let bgImage  = imageParam  || null;

    // ── Fetch from content_registry when slug is provided ──────────
    if (slug) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const anonKey     = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && anonKey) {
        const supabase = createClient(supabaseUrl, anonKey);
        const { data } = await supabase
          .from('content_registry')
          .select('title, category, description, image_url')
          .eq('slug', slug)
          .maybeSingle();

        if (data) {
          title    = data.title       || title;
          category = data.category    || category;
          desc     = data.description || desc;
          bgImage  = bgImage          || data.image_url || null;
        }
      }
    }

    const accent       = accentFor(category);
    const displayTitle = title.length > 85 ? title.slice(0, 83) + '\u2026' : title;
    const displayDesc  = desc.length  > 130 ? desc.slice(0, 128) + '\u2026' : desc;
    const titleFontSz  = displayTitle.length > 60 ? 46 : 54;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            position: 'relative',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            background: '#0a0f1e',
          }}
        >
          {/* ── Background photo (dimmed) ───────────────────────── */}
          {bgImage && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={bgImage}
              alt=""
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.22,
              }}
            />
          )}

          {/* ── Dark scrim so text is always readable ───────────── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(155deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.70) 45%, rgba(10,15,30,0.88) 100%)',
              display: 'flex',
            }}
          />

          {/* ── Top rainbow accent bar ───────────────────────────── */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: `linear-gradient(90deg, ${accent} 0%, #8b5cf6 55%, #06b6d4 100%)`,
              display: 'flex',
            }}
          />

          {/* ── Left category accent stripe ──────────────────────── */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '7px',
              background: accent,
              display: 'flex',
            }}
          />

          {/* ── Main content column ──────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '58px 68px 56px 80px',
              width: '100%',
              height: '100%',
            }}
          >
            {/* Category pill */}
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  background: accent,
                  color: '#fff',
                  fontSize: '19px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '7px 20px',
                  borderRadius: '5px',
                  display: 'flex',
                }}
              >
                {category.toUpperCase()}
              </div>
            </div>

            {/* Title + description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div
                style={{
                  fontSize: `${titleFontSz}px`,
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.18,
                  letterSpacing: '-0.02em',
                  maxWidth: '1040px',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                {displayTitle}
              </div>

              {displayDesc && (
                <div
                  style={{
                    fontSize: '21px',
                    color: '#94a3b8',
                    lineHeight: 1.45,
                    maxWidth: '920px',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {displayDesc}
                </div>
              )}
            </div>

            {/* Footer — logo + domain */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Wordmark */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '11px',
                    background: `linear-gradient(135deg, ${accent} 0%, #8b5cf6 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px',
                    fontWeight: 900,
                    color: '#fff',
                  }}
                >
                  O
                </div>
                <div
                  style={{
                    fontSize: '30px',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    display: 'flex',
                  }}
                >
                  OBJECTWIRE
                </div>
              </div>

              {/* Domain */}
              <div
                style={{
                  fontSize: '18px',
                  color: '#64748b',
                  display: 'flex',
                }}
              >
                objectwire.org
              </div>
            </div>
          </div>
        </div>
      ),
      { width: W, height: H },
    );
  } catch (err) {
    console.error('[/api/og] render error:', err);
    // Minimal branded fallback
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0f1e',
            fontSize: '56px',
            fontWeight: 800,
            color: '#ffffff',
            fontFamily: 'system-ui',
          }}
        >
          OBJECTWIRE
        </div>
      ),
      { width: W, height: H },
    );
  }
}
