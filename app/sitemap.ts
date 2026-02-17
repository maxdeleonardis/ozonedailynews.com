import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog-service';
import { SITE_CONFIG } from '@/lib/site-config';
import { getSitemapPages, getSitemapPriority, getChangeFrequency } from '@/lib/page-scanner';

// Force static generation with daily revalidation for SEO
export const revalidate = 86400; // 24 hours

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Automatically scan all pages in the app directory
  const allPages = getSitemapPages();
  
  for (const page of allPages) {
    sitemapEntries.push({
      url: `${SITE_CONFIG.url}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: getChangeFrequency(page.path),
      priority: getSitemapPriority(page.path),
    });
  }
  
  // Fetch dynamic blog posts from database
  try {
    const posts = await getAllBlogPosts();
    
    if (posts && posts.length > 0) {
      const blogPosts = posts.map(post => ({
        url: `${SITE_CONFIG.url}/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
      
      sitemapEntries.push(...blogPosts);
    }
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }
  
  // Remove duplicates (keep first occurrence which has higher priority)
  const uniqueEntries = Array.from(
    new Map(sitemapEntries.map(entry => [entry.url, entry])).values()
  );
  
  // Sort by priority (highest first) then by lastModified (newest first)
  uniqueEntries.sort((a, b) => {
    if (b.priority !== a.priority) {
      return (b.priority || 0) - (a.priority || 0);
    }
    return new Date(b.lastModified || 0).getTime() - new Date(a.lastModified || 0).getTime();
  });
  
  return uniqueEntries;
}
