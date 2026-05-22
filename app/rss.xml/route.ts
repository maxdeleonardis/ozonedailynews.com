import { SITE_CONFIG } from '@/lib/site-config';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-dynamic';

// RSS 2.0 feed — all article types (NewsArticle, JackArticle, ArticlePage).
// Data sourced ON-PREM from content/static/content_registry.json — no Supabase.
// Cap at 200 most recent entries to keep feed size reasonable for readers.
//
// Compliance targets:
//   - W3C Feed Validator (validator.w3.org/feed)
//   - Apple News Publisher (requires application/rss+xml + content:encoded)
//   - Bing News Publisher (requires valid RFC 822 pubDate + media namespace)
//   - Google Discover (requires media:content with width/height)
const RSS_LIMIT = 200;

interface RegistryEntry {
  slug: string;
  title: string;
  description?: string;
  publish_date?: string;
  published_at?: string;
  category?: string;
  tags?: string[];
  author?: string;
  image_url?: string;
  image_width?: number;
  image_height?: number;
}

function loadRegistry(): RegistryEntry[] {
  try {
    const filePath = join(process.cwd(), 'content', 'static', 'content_registry.json');
    const raw = readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as RegistryEntry[];
  } catch (err) {
    console.error('RSS: Failed to load content_registry.json:', err);
    return [];
  }
}

export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  try {
    const allRows = loadRegistry();

    // Sort by published_at (ISO) first, then publish_date display string
    const sorted = [...allRows].sort((a, b) => {
      const dateA = a.published_at || a.publish_date || '';
      const dateB = b.published_at || b.publish_date || '';
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });

    const rows = sorted.slice(0, RSS_LIMIT);

    const articles = rows.filter(row => {
      // Exclude hub/meta pages — only real articles
      const parts = row.slug.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      if ((row.description || '').length < 60) return false;
      if ((row.title || '').startsWith('›')) return false;
      return true;
    });

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)} - ${escapeXml(SITE_CONFIG.tagline)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(SITE_CONFIG.description)}</description>
    <language>${SITE_CONFIG.locale.replace('_', '-').toLowerCase()}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${SITE_CONFIG.email} (ObjectWire Editorial Team)</managingEditor>
    <webMaster>${SITE_CONFIG.email} (OzoneNews)</webMaster>
    <ttl>60</ttl>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/ozonenews-logo.png</url>
      <title>${escapeXml(SITE_CONFIG.name)}</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>${articles.map(row => {
      const slug = row.slug.startsWith('/') ? row.slug.substring(1) : row.slug;
      const articleUrl = `${baseUrl}/${slug}`;
      // Prefer ISO published_at for precise pubDate; fall back to display string
      const pubDateRaw = row.published_at || row.publish_date || '';
      const pubDate = pubDateRaw ? new Date(pubDateRaw).toUTCString() : new Date().toUTCString();
      const author = row.author || 'ObjectWire Editorial Team';
      const tags = Array.isArray(row.tags) ? row.tags : [];
      const imgUrl = row.image_url ? escapeXml(row.image_url) : '';
      const imgWidth = row.image_width || 1200;
      const imgHeight = row.image_height || 675;
      // content:encoded — full article link with rich description for Apple News / aggregators
      // Full HTML body is not stored in the registry; we provide a richly-formatted summary.
      // When Apple News crawls the feed URL, it fetches the full page via the <link> element.
      const contentEncoded = `<![CDATA[${
        row.description || ''
      }${imgUrl ? `<br/><img src="${imgUrl}" alt="${escapeXml(row.title)}" width="${imgWidth}" height="${imgHeight}"/>` : ''}
<p><a href="${articleUrl}">Read the full article on ObjectWire</a></p>]]>`;
      return `
    <item>
      <title><![CDATA[${row.title}]]></title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description><![CDATA[${row.description || ''}]]></description>
      <content:encoded>${contentEncoded}</content:encoded>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(author)}</dc:creator>
      <author>${SITE_CONFIG.email} (${escapeXml(author)})</author>
      <category>${escapeXml(row.category || 'News')}</category>${tags.map(tag => `
      <category>${escapeXml(tag)}</category>`).join('')}${imgUrl ? `
      <enclosure url="${imgUrl}" length="0" type="image/jpeg"/>
      <media:content url="${imgUrl}" medium="image" width="${imgWidth}" height="${imgHeight}">
        <media:title><![CDATA[${row.title}]]></media:title>
        <media:description><![CDATA[${row.description || ''}]]></media:description>
      </media:content>
      <media:thumbnail url="${imgUrl}" width="${imgWidth}" height="${imgHeight}"/>` : ''}
    </item>`;
    }).join('')}
  </channel>
</rss>`;

    return new Response(rss, {
      headers: {
        // Must be application/rss+xml — Apple News and W3C validator require this.
        // application/xml will cause Apple News to reject the feed.
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=7200',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Error generating RSS:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}

function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
