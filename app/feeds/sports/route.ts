// Category RSS feed template — copy this to app/feeds/[category]/route.ts
// and set CATEGORY to match the content_registry category value.
import { SITE_CONFIG } from '@/lib/site-config';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

const CATEGORY = 'Sports';
const RSS_LIMIT = 100;

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  const label = CATEGORY.charAt(0).toUpperCase() + CATEGORY.slice(1);
  const selfUrl = `${baseUrl}/feeds/sports`;

  try {
    const supabase = await createClient();
    const { data: rows, error } = await supabase
      .from('content_registry')
      .select('slug, title, description, publish_date, category, tags, author, image_url')
      .ilike('category', CATEGORY)
      .order('publish_date', { ascending: false })
      .limit(RSS_LIMIT);

    if (error) return new Response('Error generating RSS feed', { status: 500 });

    const articles = (rows || []).filter(
      r => r.slug.split('/').filter(Boolean).length >= 2 && (r.description || '').length >= 60,
    );

    const items = articles.map(row => {
      const slug = row.slug.startsWith('/') ? row.slug.substring(1) : row.slug;
      const pubDate = new Date(row.publish_date).toUTCString();
      const author = row.author || 'ObjectWire Editorial';
      const mediaTag = row.image_url
        ? `\n      <media:content url="${row.image_url}" medium="image"/>`
        : '';
      return `
    <item>
      <title><![CDATA[${row.title}]]></title>
      <link>${baseUrl}/${slug}</link>
      <guid isPermaLink="true">${baseUrl}/${slug}</guid>
      <description><![CDATA[${row.description || ''}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${SITE_CONFIG.email} (${author})</author>${mediaTag}
    </item>`;
    }).join('');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${SITE_CONFIG.name} - ${label}</title>
    <link>${baseUrl}</link>
    <description>${label} coverage from ${SITE_CONFIG.name}.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml"/>${items}
  </channel>
</rss>`;

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (err) {
    console.error('Category RSS error:', err);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}
