import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog-service';
import { SITE_CONFIG, ROUTE_REGISTRY, getIndexableRoutes } from '@/lib/site-config';

// Force static generation with daily revalidation for SEO
export const revalidate = 86400; // 24 hours

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Get all indexable routes from centralized config
  const indexableRoutes = getIndexableRoutes();
  
  // Add all indexable routes from the registry
  for (const route of indexableRoutes) {
    sitemapEntries.push({
      url: `${SITE_CONFIG.url}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }
  
  // Fetch dynamic blog posts from database
  try {
    const { data: posts, error } = await getAllBlogPosts();
    
    if (!error && posts) {
      const blogPosts = posts
        .filter(post => post.status === 'published')
        .map(post => ({
          url: `${SITE_CONFIG.url}/${post.slug}`,
          lastModified: new Date(post.updated_at),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }));
      
      sitemapEntries.push(...blogPosts);
    }
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }
  
  return sitemapEntries;
}
