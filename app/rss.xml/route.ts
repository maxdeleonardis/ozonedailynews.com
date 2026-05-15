import { SITE_CONFIG } from '@/lib/site-config';
import { getAllEntries } from '@/lib/registry-service';

export const dynamic = 'force-dynamic';

// RSS 2.0 feed — all article types or filtered by ?category=
// Data sourced from content/static/content_registry.json (on-prem, no Supabase).
// Cap at 200 most recent entries to keep feed size reasonable.
const RSS_LIMIT = 200;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoryFilter = searchParams.get('category')?.toLowerCase() ?? null;

  const baseUrl = SITE_CONFIG.url;

  try {
    // Read from on-prem content registry — no Supabase dependency
    let entries = await getAllEntries();

    // Filter to real articles (2+ path segments, non-empty description)
    entries = entries.filter(e => {
      const parts = e.slug.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      if ((e.description || '').length < 60) return false;
      if ((e.title || '').startsWith('›')) return false;
      if (e.slug.includes('[')) return false;
      return true;
    });

    if (categoryFilter) {
      entries = entries.filter(e => (e.category || '').toLowerCase() === categoryFilter);
    }

    // Sort by publishDate descending, take top RSS_LIMIT
    entries = entries
      .filter(e => e.publishDate)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, RSS_LIMIT);

    const rows = entries.map(e => ({
      slug:        e.slug,
      title:       e.title,
      description: e.description,
      publish_date: e.publishDate,
      category:    e.category,
      tags:        e.tags,
      author:      e.author,
      image_url:   e.imageUrl,
    }));

    const feedTitle = categoryFilter
      ? `${SITE_CONFIG.name} - ${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}`
      : `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;

    const selfUrl = categoryFilter
      ? `${baseUrl}/rss.xml?category=${encodeURIComponent(categoryFilter)}`
      : `${baseUrl}/rss.xml`;

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(SITE_CONFIG.description)}</description>
    <language>${SITE_CONFIG.locale.replace('_', '-').toLowerCase()}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>${escapeXml(SITE_CONFIG.name)}</title>
      <link>${baseUrl}</link>
    </image>${rows.map(row => {
      const slug = row.slug.startsWith('/') ? row.slug.substring(1) : row.slug;
      const pubDate = new Date(row.publish_date).toUTCString();
      const author = row.author || 'ObjectWire Editorial Team';
      const tags = Array.isArray(row.tags) ? row.tags : [];
      return `
    <item>
      <title><![CDATA[${row.title}]]></title>
      <link>${baseUrl}/${slug}</link>
      <guid isPermaLink="true">${baseUrl}/${slug}</guid>
      <description><![CDATA[${row.description || ''}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${SITE_CONFIG.email} (${escapeXml(author)})</author>
      <category>${escapeXml(row.category || 'News')}</category>${tags.map(tag => `
      <category>${escapeXml(tag)}</category>`).join('')}${row.image_url ? `
      <enclosure url="${escapeXml(row.image_url)}" type="image/jpeg"/>
      <media:content url="${escapeXml(row.image_url)}" medium="image"/>` : ''}
    </item>`;
    }).join('')}
  </channel>
</rss>`;

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=7200',
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
