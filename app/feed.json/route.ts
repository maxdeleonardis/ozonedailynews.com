import { SITE_CONFIG } from '@/lib/site-config';
import { loadRegistry } from '@/lib/feed-utils';

export const dynamic = 'force-dynamic';

// JSON Feed 1.1 — https://www.jsonfeed.org/version/1.1/
// Preferred by AI systems (Perplexity, ChatGPT Search, Claude) over RSS/Atom.
// Data sourced ON-PREM from content/static/content_registry.json — no Supabase.
export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  const allRows = loadRegistry();

  const sorted = [...allRows]
    .sort((a, b) => {
      const dateA = a.published_at || a.publish_date || '';
      const dateB = b.published_at || b.publish_date || '';
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    })
    .slice(0, 100);

  const items = sorted
    .filter(entry => {
      const parts = entry.slug.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      if ((entry.description || '').length < 60) return false;
      return true;
    })
    .map(entry => {
      const item: Record<string, unknown> = {
        id: `${baseUrl}${entry.slug}`,
        url: `${baseUrl}${entry.slug}`,
        title: entry.title || '',
        content_text: entry.description || '',
        date_published: entry.published_at
          ? new Date(entry.published_at).toISOString()
          : entry.publish_date
          ? new Date(entry.publish_date).toISOString()
          : undefined,
        authors: [{ name: entry.author || 'OzoneNews Editorial Team' }],
        tags: Array.isArray(entry.tags) ? entry.tags : [],
      };
      if (entry.image_url) item.image = entry.image_url;
      return item;
    });

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: SITE_CONFIG.name,
    home_page_url: baseUrl,
    feed_url: `${baseUrl}/feed.json`,
    description: SITE_CONFIG.description,
    language: 'en',
    items,
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
