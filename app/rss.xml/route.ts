// app/rss.xml/route.ts
// RSS feed for article subscribers and feed aggregators.

import { NextResponse } from 'next/server';
import { getLatestArticles } from '@/lib/registry-service';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 3600;

function toAbsoluteUrl(slug: string, baseUrl: string): string {
  if (slug.startsWith('http://') || slug.startsWith('https://')) return slug;
  return `${baseUrl}${slug.startsWith('/') ? slug : `/${slug}`}`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const articles = await getLatestArticles(50);
  const baseUrl = SITE_CONFIG.url;
  const buildDate = new Date().toUTCString();

  const items = articles
    .map((a) => {
      const itemUrl = toAbsoluteUrl(a.slug, baseUrl);
      const pubDate = new Date(a.publishDate).toUTCString();
      const authorRfc = `${SITE_CONFIG.email} (${escapeXml(a.author)})`;

      return `<item><title>${escapeXml(a.title)}</title><link>${itemUrl}</link><guid isPermaLink="true">${itemUrl}</guid><description>${escapeXml(a.description)}</description><pubDate>${pubDate}</pubDate><category>${escapeXml(a.category)}</category><author>${authorRfc}</author><dc:creator>${escapeXml(a.author)}</dc:creator></item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel><title>${escapeXml(
    SITE_CONFIG.name
  )}</title><link>${baseUrl}</link><description>Science news from ${escapeXml(
    SITE_CONFIG.publisherName
  )} — space exploration, Earth science, climate, oceans, geology, and archaeology</description><language>en-us</language><lastBuildDate>${buildDate}</lastBuildDate><managingEditor>${SITE_CONFIG.email} (${escapeXml(
    SITE_CONFIG.publisherName
  )})</managingEditor><webMaster>${SITE_CONFIG.email} (${escapeXml(
    SITE_CONFIG.publisherName
  )})</webMaster><image><url>${escapeXml(SITE_CONFIG.logo)}</url><title>${escapeXml(
    SITE_CONFIG.name
  )}</title><link>${baseUrl}</link></image><atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=600',
    },
  });
}
