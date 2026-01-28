import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog-service';
import { SITE_CONFIG, ROUTE_REGISTRY, getIndexableRoutes } from '@/lib/site-config';

// Force static generation with daily revalidation for SEO
export const revalidate = 86400; // 24 hours

// Static article routes with last modified dates
const STATIC_ARTICLES = [
  // News articles
  { path: '/news/bank-of-america-nvidia-ai-software-too-hard', lastModified: '2026-01-28', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/news/mozilla-deploys-1-4b-to-challenge-openai-anthropic', lastModified: '2026-01-27', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/news/google-launches-ai-plus-in-us', lastModified: '2026-01-27', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/news/altman-amodei-condemn-ice-shooting-praise-trump', lastModified: '2026-01-27', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/news/johns-hopkins-psychedelic-psychiatry-clinical-guidance', lastModified: '2026-01-27', priority: 0.9, changeFrequency: 'weekly' as const },
  
  // NASA articles
  { path: '/nasa', lastModified: '2026-01-27', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/nasa/europa', lastModified: '2026-01-27', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/nasa/europa/juno-ice-shell-18-miles-thick', lastModified: '2026-01-27', priority: 1.0, changeFrequency: 'daily' as const },
  
  // Google/AI articles
  { path: '/google/agentic-vision', lastModified: '2026-01-26', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/google/agentic-vision/gemini-3-flash', lastModified: '2026-01-26', priority: 0.8, changeFrequency: 'weekly' as const },
  
  // All-In Podcast profiles
  { path: '/davos/all-in-podcast/jason', lastModified: '2026-01-27', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/davos/all-in-podcast/david-sacks', lastModified: '2026-01-27', priority: 0.7, changeFrequency: 'monthly' as const },
  
  // Mozilla
  { path: '/mozilla-firefox', lastModified: '2026-01-27', priority: 0.8, changeFrequency: 'monthly' as const },
  
  // Companies
  { path: '/nvidia', lastModified: '2026-01-27', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/bank-of-america', lastModified: '2026-01-27', priority: 0.8, changeFrequency: 'monthly' as const },
];

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
  
  // Add static articles (will override any duplicates from registry)
  for (const article of STATIC_ARTICLES) {
    sitemapEntries.push({
      url: `${SITE_CONFIG.url}${article.path}`,
      lastModified: new Date(article.lastModified),
      changeFrequency: article.changeFrequency,
      priority: article.priority,
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
