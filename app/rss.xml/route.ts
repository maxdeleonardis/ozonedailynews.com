// app/rss.xml/route.ts
// RSS feed for article subscribers and feed aggregators.
// Includes media: and dc: namespaces required by Microsoft News / Bing News Pub Hub.

import { NextResponse } from 'next/server';
import { getLatestArticles } from '@/lib/registry-service';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 3600; // 1 hour

export async function GET() {
  const articles = await getLatestArticles(50);
  const baseUrl = SITE_CONFIG.url;
  const buildDate = new Date().toUTCString();

  const items = articles
    .map((a) => {
      const pubDate = new Date(a.publishDate).toUTCString();
      // RFC 822 author format expected by feed validators: "email (Display Name)"
      const authorRfc = `${SITE_CONFIG.email} (${escapeXml(a.author)})`;

      const mediaBlock = a.imageUrl
        ? `
      <media:content url="${escapeXml(a.imageUrl)}" medium="image"${a.imageWidth ? ` width="${a.imageWidth}"` : ''}${a.imageHeight ? ` height="${a.imageHeight}"` : ''}>
        <media:title type="plain">${escapeXml(a.title)}</media:title>
        ${a.imageAlt ? `<media:description type="plain">${escapeXml(a.imageAlt)}</media:description>` : ''}
      </media:content>
      <media:thumbnail url="${escapeXml(a.imageUrl)}"${a.imageWidth ? ` width="${a.imageWidth}"` : ''}${a.imageHeight ? ` height="${a.imageHeight}"` : ''}/>`.trim()
        : '';

      return `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${baseUrl}${a.slug}</link>
      <guid isPermaLink="true">${baseUrl}${a.slug}</guid>
      <description>${escapeXml(a.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(a.category)}</category>
      <author>${authorRfc}</author>
      <dc:creator>${escapeXml(a.author)}</dc:creator>
      ${mediaBlock}
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)}</title>
    <link>${baseUrl}</link>
    <description>Objective news from ${escapeXml(SITE_CONFIG.publisherName)}</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <managingEditor>${SITE_CONFIG.email} (${escapeXml(SITE_CONFIG.publisherName)})</managingEditor>
    <webMaster>${SITE_CONFIG.email} (${escapeXml(SITE_CONFIG.publisherName)})</webMaster>
    <image>
      <url>${escapeXml(SITE_CONFIG.logo)}</url>
      <title>${escapeXml(SITE_CONFIG.name)}</title>
      <link>${baseUrl}</link>
    </image>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=600',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
