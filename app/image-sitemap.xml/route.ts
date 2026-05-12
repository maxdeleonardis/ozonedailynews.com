import { SITE_CONFIG } from '@/lib/site-config';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-dynamic';

// Google Image Sitemap — https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
//
// Sources (on-prem static JSON only — no Supabase):
//   1. content/static/content_registry.json — image_url, image_alt, title (most complete)
//   2. content/static/articles/*.json       — thumbnail_src / hero_image_src
//   3. content/static/creator_articles/*.json — hero_image_src
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

function toAbsolute(src: string | null | undefined, baseUrl: string): string | null {
  if (!src || src.trim() === '') return null;
  if (src.startsWith('https://') || src.startsWith('http://')) return src;
  if (src.startsWith('/')) return `${baseUrl}${src}`;
  return null;
}

function readJson<T>(filePath: string): T | null {
  try {
    return JSON.parse(readFileSync(filePath, 'utf-8')) as T;
  } catch {
    return null;
  }
}

function readJsonDir<T>(dir: string): T[] {
  const { readdirSync } = require('fs') as typeof import('fs');
  try {
    const files = readdirSync(dir).filter(
      (f: string) => f.endsWith('.json') && !f.startsWith('_'),
    );
    return files
      .map((f: string) => readJson<T>(join(dir, f)))
      .filter((v: T | null): v is T => v !== null);
  } catch {
    return [];
  }
}

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  const pageMap = new Map<string, PageEntry>();
  const staticDir = join(process.cwd(), 'content', 'static');

  // ---------------------------------------------------------------------------
  // 1. content_registry — primary source
  // ---------------------------------------------------------------------------
  interface RegistryRow { slug: string; title?: string; image_url?: string; image_alt?: string }
  const registry = readJson<RegistryRow[]>(join(staticDir, 'content_registry.json')) ?? [];

  for (const row of registry) {
    const imgLoc = toAbsolute(row.image_url, baseUrl);
    if (!imgLoc) continue;
    const pageUrl = `${baseUrl}${row.slug}`;
    pageMap.set(pageUrl, {
      images: [{ loc: imgLoc, caption: row.image_alt || undefined, title: row.title || undefined }],
    });
  }

  // ---------------------------------------------------------------------------
  // 2. articles/ — supplement entries not already in registry
  // ---------------------------------------------------------------------------
  interface ArticleRow { url?: string; title?: string; thumbnail_src?: string; thumbnail_alt?: string; hero_image_src?: string; hero_image_alt?: string }
  const articles = readJsonDir<ArticleRow>(join(staticDir, 'articles'));

  for (const row of articles) {
    if (!row.url) continue;
    const pageUrl = row.url.startsWith('http') ? row.url : `${baseUrl}${row.url}`;
    if (pageMap.has(pageUrl)) continue;

    const images: ImageEntry[] = [];
    const thumb = toAbsolute(row.thumbnail_src, baseUrl);
    if (thumb) images.push({ loc: thumb, caption: row.thumbnail_alt || undefined, title: row.title || undefined });
    const hero = toAbsolute(row.hero_image_src, baseUrl);
    if (hero && hero !== thumb) images.push({ loc: hero, caption: row.hero_image_alt || undefined, title: row.title || undefined });
    if (images.length) pageMap.set(pageUrl, { images });
  }

  // ---------------------------------------------------------------------------
  // 3. creator_articles/ — supplement creator profile pages
  // ---------------------------------------------------------------------------
  interface CreatorRow { schema_article_url?: string; hero_name?: string; hero_image_src?: string; hero_image_alt?: string }
  const creators = readJsonDir<CreatorRow>(join(staticDir, 'creator_articles'));

  for (const row of creators) {
    if (!row.schema_article_url) continue;
    const pageUrl = row.schema_article_url.startsWith('http')
      ? row.schema_article_url
      : `${baseUrl}${row.schema_article_url}`;
    if (pageMap.has(pageUrl)) continue;

    const imgLoc = toAbsolute(row.hero_image_src, baseUrl);
    if (!imgLoc) continue;
    pageMap.set(pageUrl, {
      images: [{ loc: imgLoc, caption: row.hero_image_alt || undefined, title: row.hero_name || undefined }],
    });
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

