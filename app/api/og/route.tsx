import { ImageResponse } from 'next/og';
import { createClient } from '@supabase/supabase-js';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const W = 1200;
const H = 675;  // Google Top Stories / Discover spec (16:9)

// ── Supabase Storage assets (permanent public URLs) ────────────────────────
const STORAGE_BASE = 'https://kzcwclprrtonpsnownbl.supabase.co/storage/v1/object/public/blog-images';
const LOGO_URL     = `${STORAGE_BASE}/og-assets/objectwire-logo-white.png`;
const FALLBACK_BG  = `${STORAGE_BASE}/og-backgrounds/mat-armstrong-ferrari-296-gtb.jpg`;

// ── Category accent colours ────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  Gaming:        '#3b82f6',
  Tech:          '#10b981',
  Technology:    '#10b981',
  Finance:       '#eab308',
  Crypto:        '#f97316',
  Entertainment: '#a855f7',
  Sports:        '#22c55e',
  Politics:      '#ef4444',
  Science:       '#6366f1',
  World:         '#06b6d4',
  News:          '#3b82f6',
  Culture:       '#f472b6',
  Influencer:    '#ec4899',
  Investigations:'#dc2626',
  'World Cup':   '#22c55e',
  'Formula 1':   '#ef4444',
};

function accentFor(category: string): string {
  return CATEGORY_COLORS[category] ?? '#3b82f6';
}

// ── Fetch image bytes → base64 data URL (Satori can't load external URLs) ──
async function toBase64(url: string): Promise<string> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf  = await res.arrayBuffer();
    const b64  = Buffer.from(buf).toString('base64');
    const mime = res.headers.get('content-type') ?? 'image/jpeg';
    return `data:${mime};base64,${b64}`;
  } catch {
    return '';
  }
}

// ── Smart headline truncation ──────────────────────────────────────────────
function truncateHeadline(text: string, maxChars = 70): string {
  const clean = text.replace(/\s*\|\s*/g, ': ');
  if (clean.length <= maxChars) return clean;
  const cut = clean.slice(0, maxChars);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 35 ? cut.slice(0, lastSpace) : cut) + '\u2026';
}

// ── Font loader — cached at module level for warm Edge instances ───────────
let _fonts: { name: string; data: ArrayBuffer; weight: number; style: 'normal' | 'italic' }[] | null = null;

async function loadFonts(siteUrl: string) {
  if (_fonts) return _fonts;
  const [frauncesBlack, interBold, interMedium] = await Promise.all([
    fetch(`${siteUrl}/fonts/Fraunces-Black.ttf`).then(r => r.arrayBuffer()),
    fetch(`${siteUrl}/fonts/Inter-Bold.ttf`).then(r => r.arrayBuffer()),
    fetch(`${siteUrl}/fonts/Inter-Medium.ttf`).then(r => r.arrayBuffer()),
  ]);
  _fonts = [
    { name: 'Fraunces', data: frauncesBlack, weight: 900 as const, style: 'normal' as const },
    { name: 'Inter',    data: interBold,     weight: 700 as const, style: 'normal' as const },
    { name: 'Inter',    data: interMedium,   weight: 500 as const, style: 'normal' as const },
  ];
  return _fonts;
}

// ── Unsplash query builder ─────────────────────────────────────────────────
function buildUnsplashQuery(title: string, category: string): string {
  const STOP = new Set(['about','after','before','during','their','there','these','those','which','while','where','every','other','since','until','under','above','below']);
  const words = title
    .replace(/\|/g, ' ').replace(/[^a-zA-Z0-9 ]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 4 && !STOP.has(w.toLowerCase()))
    .slice(0, 4)
    .join(' ');
  return `${words} ${category}`.trim();
}
/**
 * Dynamic OG image generator — magazine-style, full-bleed photo.
 *
 * Query params:
 *   slug      - looks up title/category/desc/image_url from Supabase content_registry
 *   title     - headline override
 *   category  - category override
 *   desc      - subtitle / dek override
 *   author    - byline override
 *   date      - publish date override
 *   bg        - direct background image URL override (or use ?bg=ferrari for fallback)
 *   breaking  - "true" to show LIVE badge
 *
 * Examples:
 *   /api/og?slug=/entertainment/news/fortnite-moves-into-movies
 *   /api/og?title=GTA+6+Release+Date&category=Gaming&bg=ferrari
 *   /api/og?title=Mat+Armstrong+Ferrari+296+GTB+Review&category=Sports&bg=ferrari
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const siteUrl  = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.objectwire.org';

    const slug      = searchParams.get('slug');
    let title       = searchParams.get('title')    ?? 'ObjectWire';
    let category    = searchParams.get('category') ?? 'News';
    let desc        = searchParams.get('desc')      ?? '';
    let author      = searchParams.get('author')    ?? '';
    let date        = searchParams.get('date')       ?? '';
    let bgParam     = searchParams.get('bg')         ?? '';
    const breaking  = searchParams.get('breaking')  === 'true';

    // ── Supabase content_registry lookup ────────────────────────────────────
    if (slug) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const anonKey     = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (supabaseUrl && anonKey) {
        const sb = createClient(supabaseUrl, anonKey);
        const { data } = await sb
          .from('content_registry')
          .select('title, category, description, image_url, author, publish_date')
          .eq('slug', slug)
          .maybeSingle();
        if (data) {
          title    = data.title        || title;
          category = data.category     || category;
          desc     = data.description  || desc;
          author   = data.author       || author;
          date     = data.publish_date || date;
          if (!bgParam && data.image_url) bgParam = data.image_url;
        }
      }
    }

    const accent   = accentFor(category);
    const headline = truncateHeadline(title, 68);
    const subDek   = desc ? truncateHeadline(desc, 100) : '';
    const byline   = [author, date].filter(Boolean).join('  ·  ');

    // ── Resolve background photo ─────────────────────────────────────────────
    let photoBg = '';
    if (bgParam === 'ferrari' || bgParam === '') {
      photoBg = FALLBACK_BG;
    } else {
      photoBg = bgParam;
    }

    // ── Fetch all assets in parallel ─────────────────────────────────────────
    let bgBase64   = '';
    let logoBase64 = '';

    // If no explicit bg, auto-query Unsplash
    if (!bgParam || bgParam === 'unsplash') {
      const key   = process.env.UNSPLASH_ACCESS_KEY ?? 'Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ';
      const q     = encodeURIComponent(buildUnsplashQuery(title, category));
      const ujson = await fetch(`https://api.unsplash.com/search/photos?query=${q}&per_page=1&orientation=landscape&client_id=${key}`)
        .then(r => r.json()).catch(() => null);
      const rawUrl = ujson?.results?.[0]?.urls?.raw;
      photoBg = rawUrl ? `${rawUrl}&w=1200&h=675&fit=crop&auto=format&q=80` : FALLBACK_BG;
    }

    [bgBase64, logoBase64] = await Promise.all([
      toBase64(photoBg),
      toBase64(LOGO_URL),
    ]);

    // Fallback if photo fetch failed
    if (!bgBase64) bgBase64 = await toBase64(FALLBACK_BG);

    const fonts     = await loadFonts(siteUrl);
    const titleSize = headline.length > 55 ? 60 : 74;

    return new ImageResponse(
      (
        <div style={{ display: 'flex', width: W, height: H, position: 'relative', overflow: 'hidden' }}>

          {/* ── Layer 1: Full-bleed background photo ──────────────────────── */}
          {bgBase64 && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={bgBase64}
              alt=""
              style={{ position: 'absolute', top: 0, left: 0, width: W, height: H, objectFit: 'cover', objectPosition: 'center' }}
            />
          )}

          {/* ── Layer 2: Bottom-heavy gradient — text zone is dark, top breathes ── */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.08) 100%)',
            display: 'flex',
          }} />

          {/* ── Layer 3: All text and brand elements ─────────────────────── */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            padding: '44px 60px',
          }}>

            {/* Top bar: Logo left, category badge + breaking right */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {logoBase64 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoBase64} alt="ObjectWire" style={{ height: 30, objectFit: 'contain' }} />
              ) : (
                <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: 3, textTransform: 'uppercase' }}>
                  OBJECTWIRE
                </span>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  backgroundColor: 'rgba(0,0,0,0.60)',
                  border: `1px solid ${accent}`,
                  borderRadius: 4,
                  padding: '5px 14px',
                }}>
                  <span style={{ color: accent, fontSize: 9 }}>◆</span>
                  <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: 2, textTransform: 'uppercase' }}>
                    {category}
                  </span>
                </div>
                {breaking && (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    backgroundColor: 'rgba(220,38,38,0.90)', borderRadius: 4, padding: '5px 14px',
                  }}>
                    <span style={{ color: '#fff', fontSize: 9 }}>●</span>
                    <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: 2 }}>LIVE</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom zone: accent rule + headline + subtitle + byline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Accent rule */}
              <div style={{ width: 56, height: 3, backgroundColor: accent, borderRadius: 2 }} />

              {/* Headline */}
              <div style={{
                fontFamily: 'Fraunces',
                fontWeight: 900,
                fontSize: titleSize,
                lineHeight: 1.08,
                color: '#ffffff',
                maxWidth: 1020,
                letterSpacing: -1,
              }}>
                {headline}
              </div>

              {/* Subtitle */}
              {subDek && (
                <div style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: 21,
                  lineHeight: 1.4,
                  color: '#d1d5db',
                  maxWidth: 880,
                }}>
                  {subDek}
                </div>
              )}

              {/* Byline + domain */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 15, color: '#9ca3af', letterSpacing: 0.3 }}>
                  {byline}
                </span>
                <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: '#6b7280', letterSpacing: 0.8 }}>
                  objectwire.org
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: W,
        height: H,
        fonts,
        headers: {
          'Cache-Control': 'public, immutable, max-age=31536000, s-maxage=31536000',
        },
      },
    );
  } catch (err) {
    console.error('[/api/og] render error:', err);
    return new ImageResponse(
      (
        <div style={{ width: 1200, height: 675, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', fontSize: 56, fontWeight: 800, color: '#ffffff', fontFamily: 'system-ui' }}>
          OBJECTWIRE
        </div>
      ),
      { width: 1200, height: 675 },
    );
  }
}
