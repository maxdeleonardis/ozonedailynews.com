import { getAllBlogPosts } from '@/lib/blog-service';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://objectwire.com';
  
  try {
    const { data: posts, error } = await getAllBlogPosts();
    
    if (error || !posts) {
      console.error('Error fetching posts for RSS:', error);
      return new Response('Error generating RSS feed', { status: 500 });
    }
    
    const publishedPosts = posts.filter(post => post.status === 'published');
    
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>ObjectWire - Technology News and Analysis</title>
    <link>${baseUrl}</link>
    <description>Breaking news, in-depth analysis, and expert insights on technology, finance, and innovation</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${publishedPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/${post.slug}</guid>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      <pubDate>${new Date(post.published_at || post.created_at).toUTCString()}</pubDate>
      <author>editorial@objectwire.com (${post.author})</author>
      <category>${post.category}</category>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
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
