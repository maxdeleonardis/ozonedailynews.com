import { getAllBlogPosts } from '@/lib/blog-service';
import { SITE_CONFIG } from '@/lib/site-config';
import { getNewsArticlePages } from '@/lib/page-scanner';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  
  try {
    // Automatically discover all NewsArticle component pages
    const newsArticlePages = await getNewsArticlePages();
    
    // Convert to RSS format
    const allArticles: Array<{
      title: string;
      slug: string;
      excerpt: string;
      author: string;
      category: string;
      tags: string[];
      published_at: string;
      created_at: string;
      featured_image?: string | null;
    }> = newsArticlePages.map((page: any) => ({
      title: page.title || 'Article',
      slug: page.path?.startsWith('/') ? page.path.substring(1) : (page.path || ''),
      excerpt: page.description || '',
      author: 'ObjectWire Editorial Team',
      category: page.category || 'News',
      tags: page.tags || [],
      published_at: page.publishDate || page.lastModified || new Date().toISOString(),
      created_at: page.lastModified || new Date().toISOString(),
      featured_image: undefined,
    }));
    
    // Also fetch database posts
    const posts = await getAllBlogPosts();
    
    if (posts) {
      const publishedPosts = posts
        .filter((post: any) => post.status === 'published')
        .map((post: any) => ({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || '',
          author: post.author || 'ObjectWire Team',
          category: post.category || 'News',
          tags: post.tags || [],
          published_at: post.published_at || post.publishedAt || post.created_at || new Date().toISOString(),
          created_at: post.created_at || new Date().toISOString(),
          featured_image: post.featured_image,
        }));
      allArticles.push(...publishedPosts);
    }
    
    // Sort by published date (newest first)
    allArticles.sort((a, b) => {
      const dateA = new Date(a.published_at || a.created_at || 0).getTime();
      const dateB = new Date(b.published_at || b.created_at || 0).getTime();
      return dateB - dateA;
    });
    
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}</title>
    <link>${baseUrl}</link>
    <description>${SITE_CONFIG.description}</description>
    <language>${SITE_CONFIG.locale.replace('_', '-').toLowerCase()}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${allArticles.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/${post.slug}</guid>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      <pubDate>${new Date(post.published_at || post.created_at).toUTCString()}</pubDate>
      <author>${SITE_CONFIG.email} (${post.author || 'ObjectWire Editorial Team'})</author>
      <category>${post.category}</category>
      ${Array.isArray(post.tags) ? post.tags.map(tag => `<category>${tag}</category>`).join('\n      ') : ''}
      ${post.featured_image ? `<enclosure url="${post.featured_image}" type="image/jpeg"/>` : ''}
    </item>`).join('')}
  </channel>
</rss>`;
    
    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating RSS:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}
