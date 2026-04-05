import { SITE_CONFIG } from '@/lib/site-config';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

// JSON Feed 1.1 — https://www.jsonfeed.org/version/1.1/
// Preferred by AI systems (Perplexity, ChatGPT Search, Claude) over RSS/Atom.
export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  try {
    const supabase = await createClient();

    // Pull from content_registry (canonical source, auto-synced on build)
    const { data: entries } = await supabase
      .from('content_registry')
      .select('slug, title, description, publish_date, modified_date, category, tags, author, image_url')
      .order('publish_date', { ascending: false })
      .limit(100);

    const items = (entries || []).map((entry) => {
      const item: Record<string, unknown> = {
        id: `${baseUrl}${entry.slug}`,
        url: `${baseUrl}${entry.slug}`,
        title: entry.title || '',
        content_text: entry.description || '',
        date_published: entry.publish_date ? new Date(entry.publish_date).toISOString() : undefined,
        date_modified: entry.modified_date ? new Date(entry.modified_date).toISOString() : undefined,
        authors: [{ name: entry.author || 'ObjectWire Editorial Team' }],
        tags: Array.isArray(entry.tags) ? entry.tags : [],
      };
      if (entry.image_url) {
        item.image = entry.image_url;
      }
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
  } catch (error) {
    console.error('Error generating JSON feed:', error);
    return new Response(JSON.stringify({ error: 'Feed generation failed' }), { status: 500 });
  }
}
