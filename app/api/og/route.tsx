/**
 * /api/og?slug=finance-spacex-ipo-75-billion-record-valuation-2026
 * /api/og?slug=tech-google-ai-data-center-water-consumption-cooling-2026
 *
 * Generates a 1200×630 Open Graph PNG using Satori + resvg-js.
 * Works in Node.js runtime (not Edge) so we can read the filesystem.
 *
 * Category accent colours mirror the site palette.
 */

import { NextRequest, NextResponse } from 'next/server';
import satori from 'satori';
import fs from 'fs';
import path from 'path';

// ── Config ────────────────────────────────────────────────────────────────────
const W = 1200;
const H = 630;
const SITE_NAME = 'OzoneNews';

const CATEGORY_COLORS: Record<string, string> = {
  Finance:       '#4f46e5', // indigo
  Tech:          '#2563eb', // blue
  Science:       '#0d9488', // teal
  Space:         '#0ea5e9', // sky
  News:          '#dc2626', // red
  World:         '#7c3aed', // violet
  Politics:      '#b45309', // amber
  Entertainment: '#db2777', // pink
  Sports:        '#16a34a', // green
  Crypto:        '#f59e0b', // yellow
  Gaming:        '#8b5cf6', // purple
  Culture:       '#ec4899', // fuchsia
};

// ── Static store resolver ─────────────────────────────────────────────────────
const STATIC_BASE = path.join(process.cwd(), 'content', 'static');
const STORES = [
  'articles',
  'jack_articles',
  'wiki_articles',
  'creator_articles',
  'article_pages',
  'sterling_articles',
] as const;

interface ArticleMeta {
  title: string;
  subtitle?: string;
  category: string;
  author_name?: string;
  publish_date?: string;
  published_at?: string;
  thumbnail_src?: string;
  breaking?: boolean;
  read_time?: string;
}

function findArticle(slug: string): ArticleMeta | null {
  for (const store of STORES) {
    const file = path.join(STATIC_BASE, store, `${slug}.json`);
    if (fs.existsSync(file)) {
      try {
        return JSON.parse(fs.readFileSync(file, 'utf8')) as ArticleMeta;
      } catch {
        return null;
      }
    }
  }
  return null;
}

// ── Font loader (Inter Bold subset bundled with Next.js) ──────────────────────
// We load the font file once and cache it in module scope.
let fontBoldBuf: ArrayBuffer | null = null;
let fontRegularBuf: ArrayBuffer | null = null;

function loadFont(variant: 'Bold' | 'Regular'): ArrayBuffer {
  // Try Next.js built-in Inter font first, then fall back to system fonts
  const candidates = [
    path.join(process.cwd(), 'node_modules', '@next', 'font', 'google', 'files',
      `inter-latin-${variant.toLowerCase()}-normal.woff`),
    path.join(process.cwd(), 'public', `Inter-${variant}.ttf`),
    // macOS system fallback
    `/System/Library/Fonts/Supplemental/Arial${variant === 'Bold' ? ' Bold' : ''}.ttf`,
    `/System/Library/Fonts/Helvetica.ttc`,
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      return fs.readFileSync(p).buffer as ArrayBuffer;
    }
  }
  throw new Error(`OG font not found. Tried: ${candidates.join(', ')}`);
}

function getBoldFont(): ArrayBuffer {
  if (!fontBoldBuf) fontBoldBuf = loadFont('Bold');
  return fontBoldBuf;
}
function getRegularFont(): ArrayBuffer {
  if (!fontRegularBuf) fontRegularBuf = loadFont('Regular');
  return fontRegularBuf;
}

// ── OG image builder ──────────────────────────────────────────────────────────
async function buildOGImage(article: ArticleMeta): Promise<Buffer> {
  const accent = CATEGORY_COLORS[article.category] ?? '#111827';
  const title = article.title.length > 90
    ? article.title.slice(0, 87) + '…'
    : article.title;
  const subtitle = article.subtitle
    ? (article.subtitle.length > 130 ? article.subtitle.slice(0, 127) + '…' : article.subtitle)
    : null;
  const displayDate = article.publish_date ??
    (article.published_at
      ? new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : '');

  // Build element tree — pure divs/spans, no JSX runtime needed at this layer
  // because satori accepts the React element object format directly.
  const element = {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column' as const,
        width: W,
        height: H,
        background: '#0a0a0a',
        fontFamily: 'Inter',
        position: 'relative' as const,
        overflow: 'hidden',
      },
      children: [
        // Left accent bar
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute' as const,
              left: 0,
              top: 0,
              width: 8,
              height: H,
              background: accent,
            },
          },
        },
        // Background thumbnail (blurred, dimmed)
        article.thumbnail_src
          ? {
              type: 'img',
              props: {
                src: article.thumbnail_src,
                width: W,
                height: H,
                style: {
                  position: 'absolute' as const,
                  top: 0,
                  left: 0,
                  width: W,
                  height: H,
                  objectFit: 'cover',
                  opacity: 0.18,
                  filter: 'blur(6px)',
                },
              },
            }
          : { type: 'div', props: { style: { display: 'none' } } },
        // Dark overlay gradient
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute' as const,
              inset: 0,
              background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 100%)',
            },
          },
        },
        // Content layer
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column' as const,
              position: 'absolute' as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              padding: '56px 72px 52px 80px',
              justifyContent: 'space-between',
            },
            children: [
              // Top row: site name + category badge
              {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', gap: 16 },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: 22,
                          fontWeight: 800,
                          color: '#ffffff',
                          letterSpacing: '-0.5px',
                        },
                        children: SITE_NAME,
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          background: accent,
                          color: '#fff',
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '2px',
                          textTransform: 'uppercase' as const,
                          padding: '4px 12px',
                        },
                        children: article.category,
                      },
                    },
                    ...(article.breaking
                      ? [{
                          type: 'div',
                          props: {
                            style: {
                              background: '#dc2626',
                              color: '#fff',
                              fontSize: 11,
                              fontWeight: 800,
                              letterSpacing: '2px',
                              textTransform: 'uppercase' as const,
                              padding: '4px 12px',
                            },
                            children: 'Breaking',
                          },
                        }]
                      : []),
                  ],
                },
              },
              // Middle: title + subtitle
              {
                type: 'div',
                props: {
                  style: { display: 'flex', flexDirection: 'column' as const, gap: 20, flex: 1, justifyContent: 'center' },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: title.length > 60 ? 44 : 52,
                          fontWeight: 800,
                          color: '#ffffff',
                          lineHeight: 1.15,
                          letterSpacing: '-1.5px',
                          maxWidth: 980,
                        },
                        children: title,
                      },
                    },
                    ...(subtitle
                      ? [{
                          type: 'div',
                          props: {
                            style: {
                              fontSize: 22,
                              fontWeight: 400,
                              color: 'rgba(255,255,255,0.65)',
                              lineHeight: 1.5,
                              maxWidth: 860,
                            },
                            children: subtitle,
                          },
                        }]
                      : []),
                  ],
                },
              },
              // Bottom row: author + date + read time
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 24,
                    borderTop: '1px solid rgba(255,255,255,0.12)',
                    paddingTop: 20,
                  },
                  children: [
                    ...(article.author_name
                      ? [{
                          type: 'div',
                          props: {
                            style: { fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.9)' },
                            children: article.author_name,
                          },
                        }]
                      : []),
                    ...(displayDate
                      ? [{
                          type: 'div',
                          props: {
                            style: { fontSize: 15, color: 'rgba(255,255,255,0.5)' },
                            children: displayDate,
                          },
                        }]
                      : []),
                    ...(article.read_time
                      ? [{
                          type: 'div',
                          props: {
                            style: { fontSize: 15, color: 'rgba(255,255,255,0.5)' },
                            children: article.read_time,
                          },
                        }]
                      : []),
                    // Right-aligned domain
                    {
                      type: 'div',
                      props: {
                        style: {
                          marginLeft: 'auto',
                          fontSize: 14,
                          fontWeight: 700,
                          color: accent,
                          letterSpacing: '0.5px',
                        },
                        children: 'ozonedailynews.com',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };

  let boldFont: ArrayBuffer;
  let regularFont: ArrayBuffer;
  try {
    boldFont = getBoldFont();
    regularFont = getRegularFont();
  } catch {
    // If fonts can't be loaded, use bold for both
    boldFont = getBoldFont();
    regularFont = boldFont;
  }

  const svg = await satori(element as Parameters<typeof satori>[0], {
    width: W,
    height: H,
    fonts: [
      { name: 'Inter', data: boldFont, weight: 800, style: 'normal' },
      { name: 'Inter', data: boldFont, weight: 700, style: 'normal' },
      { name: 'Inter', data: regularFont ?? boldFont, weight: 400, style: 'normal' },
      { name: 'Inter', data: boldFont, weight: 600, style: 'normal' },
    ],
  });

  // Convert SVG → PNG using sharp (bundled with Next.js, no native bindings needed)
  const sharp = (await import('sharp')).default;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return png;
}

// ── Route handler ─────────────────────────────────────────────────────────────
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return new NextResponse('Missing ?slug=', { status: 400 });
  }

  const article = findArticle(slug);
  if (!article) {
    return new NextResponse(`Article not found: ${slug}`, { status: 404 });
  }

  try {
    const png = await buildOGImage(article);
    return new NextResponse(png.buffer as ArrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    console.error('[OG] generation failed:', err);
    return new NextResponse(`OG generation failed: ${String(err)}`, { status: 500 });
  }
}
