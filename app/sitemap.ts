import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog-service';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://objectwire.com';
  
  try {
    const { data: posts, error } = await getAllBlogPosts();
    
    if (error || !posts) {
      console.error('Error fetching posts for sitemap:', error);
      return [
        {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 1,
        },
      ];
    }
    
    const blogPosts = posts
      .filter(post => post.status === 'published')
      .map(post => ({
        url: `${baseUrl}/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      ...blogPosts,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
}
