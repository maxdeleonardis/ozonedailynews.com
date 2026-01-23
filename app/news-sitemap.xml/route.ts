import { getAllBlogPosts } from '@/lib/blog-service';
import { SITE_CONFIG } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  
  try {
    const { data: posts, error } = await getAllBlogPosts();
    
    if (error || !posts) {
      console.error('Error fetching posts for news sitemap:', error);
      return new Response('Error generating news sitemap', { status: 500 });
    }

    // Google News only wants articles from the last 2 days
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    
    const recentPosts = posts
      .filter(post => post.status === 'published')
      .filter(post => new Date(post.published_at || post.created_at) > twoDaysAgo);
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentPosts.map(post => `  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>ObjectWire</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.published_at || post.created_at).toISOString()}</news:publication_date>
      <news:title><![CDATA[${post.title}]]></news:title>
      <news:keywords>${post.tags?.join(', ') || post.category}</news:keywords>
    </news:news>
  </url>`).join('\n')}
</urlset>`;
    
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=900, s-maxage=900', // 15 min cache for news
      },
    });
  } catch (error) {
    console.error('Error generating news sitemap:', error);
    return new Response('Error generating news sitemap', { status: 500 });
  }
}
