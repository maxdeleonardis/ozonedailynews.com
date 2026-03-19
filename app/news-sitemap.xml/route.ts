import { getAllBlogPosts } from '@/lib/blog-service';
import { SITE_CONFIG } from '@/lib/site-config';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

// Google News Sitemap Protocol: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
// Articles are sourced automatically from the content registry (lib/content-registry.ts).
// To appear here, an entry needs:
//   - publishDate within the sliding window (NEWS_WINDOW_DAYS — default 2 for Google News compliance)
//   - tags[] used as news keywords
// The registry is auto-synced before every build via the `prebuild` npm script.

// How many days back to include in the Google News sitemap.
// Google News only crawls articles published within the last 2 days for inclusion in News Search.
// We use 2 to stay within protocol; bump to e.g. 7 for broader discovery if needed.
const NEWS_WINDOW_DAYS = 2;

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  
  try {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - NEWS_WINDOW_DAYS);

    // Pull recent articles from Supabase content_registry table.
    // Auto-synced on every build via the prebuild script (sync-registry.ts).
    const supabase = await createClient();
    const cutoffStr = cutoff.toISOString().split('T')[0]; // "YYYY-MM-DD"
    const { data: registryRows } = await supabase
      .from('content_registry')
      .select('slug, title, publish_date, tags, category')
      .gte('publish_date', cutoffStr)
      .order('publish_date', { ascending: false });

    const registryArticles = (registryRows || []).map(row => ({
      loc: `${baseUrl}${row.slug}`,
      title: row.title,
      publicationDate: `${row.publish_date}T00:00:00-06:00`,
      keywords: Array.isArray(row.tags) ? row.tags.join(', ') : (row.category || ''),
    }));

    // Get dynamic posts from database (CMS-authored content)
    const posts = await getAllBlogPosts();
    
    const recentPosts = posts
      ? posts
          .filter((post: any) => post.status === 'published')
          .filter((post: any) => new Date(post.published_at || post.publishedAt || post.created_at || Date.now()) > cutoff)
      : [];
    
    // Combine registry + CMS articles
    const allArticles = [
      // Content registry articles (auto-maintained)
      ...registryArticles,
      // Dynamic CMS posts
      ...recentPosts.map((post: any) => ({
        loc: `${baseUrl}/${post.slug}`,
        title: post.title,
        publicationDate: new Date(post.published_at || post.publishedAt || post.created_at || Date.now()).toISOString(),
        keywords: post.tags?.join(', ') || post.category || '',
      })),
    ];
    
    // Sort by publication date (most recent first)
    allArticles.sort((a, b) => 
      new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime()
    );
    
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
