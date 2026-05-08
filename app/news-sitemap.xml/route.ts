import { SITE_CONFIG } from '@/lib/site-config';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

// Google News Sitemap Protocol: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
//
// Source: articles table queried directly — articles appear in Google News within minutes
// of being pushed to Supabase, not at the next deploy.
// force-dynamic is intentional here: Google News requires freshness.

// How many days back to include in the Google News sitemap.
// Google News allows up to 2 days. We use 3 for late-pickup of stories published
// just before midnight UTC. Reduce to 2 if Google flags the sitemap.
const NEWS_WINDOW_DAYS = 3;

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  
  try {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - NEWS_WINDOW_DAYS);

    const supabase = await createClient();

    // Query articles table directly — new articles appear immediately after publish,
    // no deploy required. content_registry is NOT used here.
    const { data: articleRows } = await supabase
      .from('articles')
      .select('url, title, published_at, tags, category')
      .eq('status', 'published')
      .gte('published_at', cutoff.toISOString())
      .order('published_at', { ascending: false })
      .limit(1000);

    const allArticles = (articleRows || [])
      .filter(row => row.url && row.title && row.published_at)
      .map(row => ({
        loc: row.url.startsWith('http') ? row.url : `${baseUrl}${row.url}`,
        title: row.title as string,
        publicationDate: new Date(row.published_at).toISOString(),
        keywords: Array.isArray(row.tags)
          ? row.tags.join(', ')
          : (row.category || ''),
      }));
    
    // Generate Google News Sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${allArticles.map(article => `  <url>
    <loc>${escapeXml(article.loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>ObjectWire</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.publicationDate}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>${article.keywords ? `
      <news:keywords>${escapeXml(article.keywords)}</news:keywords>` : ''}
    </news:news>
  </url>`).join('\n')}
</urlset>`;
    
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=1800',
        'X-Robots-Tag': 'noindex', // Sitemap itself shouldn't be indexed
      },
    });
  } catch (error) {
    console.error('Error generating news sitemap:', error);
    return new Response('Error generating news sitemap', { status: 500 });
  }
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
