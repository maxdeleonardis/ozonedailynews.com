import { SITE_CONFIG } from '@/lib/site-config';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

// RSS 2.0 feed — all article types or filtered by ?category=
// Data sourced from content/static/content_registry.json (local-first) via Supabase mirror.
// Cap at 200 most recent entries to keep feed size reasonable.
const RSS_LIMIT = 200;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoryFilter = searchParams.get('category')?.toLowerCase() ?? null;

  const baseUrl = SITE_CONFIG.url;

  try {
    const supabase = await createClient();

    let query = supabase
      .from('content_registry')
      .select('slug, title, description, publish_date, category, tags, author, image_url')
      .order('publish_date', { ascending: false })
      .limit(RSS_LIMIT);

    if (categoryFilter) {
      query = query.ilike('category', categoryFilter);
    }

    const { data: rows, error } = await query;

    if (error) {
      console.error('RSS: Supabase query failed:', error.message);
      return new Response('Error generating RSS feed', { status: 500 });
    }

    const articles = (rows || []).filter(row => {
      const parts = row.slug.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      if ((row.description || '').length < 60) return false;
      if ((row.title || '').startsWith('›')) return false;
      return true;
    });

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
    </image>${articles.map(row => {
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
