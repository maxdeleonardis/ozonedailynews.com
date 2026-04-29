import { SITE_CONFIG } from '@/lib/site-config';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

// Google Image Sitemap — https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
//
// Sources (in priority order, registry takes precedence):
//   1. content_registry — image_url, image_alt, title (most complete)
//   2. articles          — thumbnail_src / hero_image_src
//   3. creator_articles  — hero_image_src
//
// Registered in /robots.ts sitemap array and submitted to Bing & Google Search Console.

interface ImageEntry {
  loc: string;
  caption?: string;
  title?: string;
}

interface PageEntry {
  images: ImageEntry[];
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Resolve a potentially relative image path to an absolute URL. Returns null if unusable. */
function toAbsolute(src: string | null | undefined, baseUrl: string): string | null {
  if (!src || src.trim() === '') return null;
  if (src.startsWith('https://') || src.startsWith('http://')) return src;
  if (src.startsWith('/')) return `${baseUrl}${src}`;
  return null;
}

export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  // keyed by page URL — registry entries take precedence over article-table entries
  const pageMap = new Map<string, PageEntry>();

  try {
    const supabase = await createClient();

    // -------------------------------------------------------------------------
    // 1. content_registry — primary source (has image_url, image_alt, title)
    // -------------------------------------------------------------------------
    const { data: regRows } = await supabase
      .from('content_registry')
      .select('slug, title, image_url, image_alt')
      .not('image_url', 'is', null)
      .neq('image_url', '');

    for (const row of regRows ?? []) {
      const imgLoc = toAbsolute(row.image_url as string, baseUrl);
      if (!imgLoc) continue;
      const pageUrl = `${baseUrl}${row.slug}`;
      pageMap.set(pageUrl, {
        images: [
          {
            loc: imgLoc,
            caption: (row.image_alt as string) || undefined,
            title: (row.title as string) || undefined,
          },
        ],
      });
    }

    // -------------------------------------------------------------------------
    // 2. articles table — supplement for entries not already in registry map
    // -------------------------------------------------------------------------
    const { data: articleRows } = await supabase
      .from('articles')
      .select('url, title, thumbnail_src, thumbnail_alt, hero_image_src, hero_image_alt')
      .eq('status', 'published');

    for (const row of articleRows ?? []) {
      const rawUrl = row.url as string | null;
      if (!rawUrl) continue;
      const pageUrl = rawUrl.startsWith('http') ? rawUrl : `${baseUrl}${rawUrl}`;
      if (pageMap.has(pageUrl)) continue; // registry wins

      const images: ImageEntry[] = [];
      const thumb = toAbsolute(row.thumbnail_src as string, baseUrl);
      if (thumb) {
        images.push({
          loc: thumb,
          caption: (row.thumbnail_alt as string) || undefined,
          title: (row.title as string) || undefined,
        });
      }
      const hero = toAbsolute(row.hero_image_src as string, baseUrl);
      if (hero && hero !== thumb) {
        images.push({
          loc: hero,
          caption: (row.hero_image_alt as string) || undefined,
          title: (row.title as string) || undefined,
        });
      }
      if (images.length) pageMap.set(pageUrl, { images });
    }

    // -------------------------------------------------------------------------
    // 3. creator_articles table — supplement for creator profile pages
    // -------------------------------------------------------------------------
    const { data: creatorRows } = await supabase
      .from('creator_articles')
      .select('schema_article_url, hero_name, hero_image_src, hero_image_alt')
      .not('hero_image_src', 'is', null)
      .neq('hero_image_src', '');

    for (const row of creatorRows ?? []) {
      const rawUrl = row.schema_article_url as string | null;
      if (!rawUrl) continue;
      const pageUrl = rawUrl.startsWith('http') ? rawUrl : `${baseUrl}${rawUrl}`;
      if (pageMap.has(pageUrl)) continue; // registry wins

      const imgLoc = toAbsolute(row.hero_image_src as string, baseUrl);
      if (!imgLoc) continue;
      pageMap.set(pageUrl, {
        images: [
          {
            loc: imgLoc,
            caption: (row.hero_image_alt as string) || undefined,
            title: (row.hero_name as string) || undefined,
          },
        ],
      });
    }
  } catch (error) {
    console.error('[image-sitemap] Error building image sitemap:', error);
  }

  const entries = Array.from(pageMap.entries());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    ([pageUrl, { images }]) => `  <url>
    <loc>${escapeXml(pageUrl)}</loc>
${images
  .map(
    (img) =>
      `    <image:image>\n      <image:loc>${escapeXml(img.loc)}</image:loc>${
        img.caption ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>` : ''
      }${
        img.title ? `\n      <image:title>${escapeXml(img.title)}</image:title>` : ''
      }\n    </image:image>`,
  )
  .join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}
