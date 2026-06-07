/**
 * /api/og?slug=finance-spacex-ipo-75-billion-record-valuation-2026
 *
 * Resolution order:
 *   1. Supabase article_thumbnails — journalist-approved PNG from Media Factory
 *      (permanent Supabase Storage URL, CDN-cached, no re-render needed)
 *   2. Satori Media Factory API — generates branded 1200x630 OG card on demand.
 *      Fonts, layout, and branding are all handled centrally on the Satori service.
 *   3. 302 fallback direct to Satori generate URL — if proxy fetch fails,
 *      let the browser hit Satori directly so it still gets an image.
 *
 * No local Satori rendering. No font loading. No sharp. No font-not-found errors.
 */

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Config

const SATORI_GENERATE_API = 'https://satori-neon.vercel.app/api/v1/generate';
const BRAND_SLUG = process.env.NEXT_PUBLIC_BRAND_SLUG ?? 'ozone';

// Static store resolver

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
  id?: string;
  title: string;
  subtitle?: string;
  category: string;
  author_name?: string;
  publish_date?: string;
  published_at?: string;
  breaking?: boolean;
  read_time?: string;
  hero_image?: { src?: string };
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

// Supabase: check for journalist-approved thumbnail from Media Factory

async function getApprovedThumbnailUrl(articleId: string): Promise<string | null> {
  try {
    const supabase = await createClient();
    if (!supabase) return null;

    const { data } = await supabase
      .from('article_thumbnails')
      .select('generated_url')
      .eq('source_table', 'articles')
      .eq('source_id', articleId)
      .eq('status', 'ready')
      .maybeSingle();

    return data?.generated_url ?? null;
  } catch {
    return null;
  }
}

// Build Satori generate URL from article metadata

function buildSatoriUrl(article: ArticleMeta, slug: string): string {
  const u = new URL(SATORI_GENERATE_API);
  u.searchParams.set('network', BRAND_SLUG);
  u.searchParams.set('title', article.title);
  u.searchParams.set('category', article.category);
  u.searchParams.set('slug', slug);
  if (article.subtitle) u.searchParams.set('subtitle', article.subtitle);
  if (article.author_name) u.searchParams.set('author', article.author_name);
  if (article.breaking) u.searchParams.set('breaking', '1');
  // Only pass a hero image if it is a real external URL — avoid /api/og loops
  const heroSrc = article.hero_image?.src;
  if (heroSrc && !heroSrc.includes('/api/og') && heroSrc.startsWith('http')) {
    u.searchParams.set('image_url', heroSrc);
  }
  u.searchParams.set('layout', 'standard');
  return u.toString();
}

// Route handler

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return new NextResponse('Missing ?slug=', { status: 400 });
  }

  // 1. Find article metadata from disk (title, subtitle, category for Satori params)
  const article = findArticle(slug);
  if (!article) {
    return new NextResponse(`Article not found: ${slug}`, { status: 404 });
  }

  // 2. Check Supabase for a journalist-approved thumbnail from Media Factory
  if (article.id) {
    const approvedUrl = await getApprovedThumbnailUrl(article.id);
    if (approvedUrl) {
      return NextResponse.redirect(approvedUrl, {
        status: 302,
        headers: {
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
          'X-OG-Source': 'media-factory',
        },
      });
    }
  }

  // 3. Proxy to Satori Media Factory API — returns PNG directly
  const satoriUrl = buildSatoriUrl(article, slug);

  try {
    const res = await fetch(satoriUrl, {
      signal: AbortSignal.timeout(8000),
      headers: { 'User-Agent': `OzoneNews-OG/1.0 brand=${BRAND_SLUG}` },
    });

    if (res.ok) {
      const contentType = res.headers.get('content-type') ?? 'image/png';
      return new NextResponse(res.body, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
          'X-OG-Source': 'satori-api',
          'X-OG-Slug': slug,
        },
      });
    }

    console.warn(`[OG] Satori API returned ${res.status} for slug: ${slug}`);
  } catch (err) {
    console.warn('[OG] Satori API unreachable:', err instanceof Error ? err.message : String(err));
  }

  // 4. Last-resort fallback: 302 directly to Satori so the browser still gets an image
  //    even if the proxy fetch timed out or Satori is temporarily down.
  return NextResponse.redirect(satoriUrl, {
    status: 302,
    headers: { 'Cache-Control': 'public, max-age=300' },
  });
}
