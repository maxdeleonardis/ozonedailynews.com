import { MetadataRoute } from 'next';
import { SITE_CONFIG, BLOCKED_USER_AGENTS, TRACKING_PARAMS, DUPLICATE_PARAMS } from '@/lib/site-config';

// =============================================================================
// ROBOTS.TXT - SEO Governance for Crawlers
// Centralized control using site-config.ts as single source of truth
// =============================================================================

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;
  
  // Generate disallow patterns for tracking parameters
  const trackingDisallows = TRACKING_PARAMS.map(param => `/*?${param}=*`);
  const duplicateDisallows = DUPLICATE_PARAMS.map(param => `/*?${param}=*`);
  
  // Block bad bots dynamically from config
  const badBotRules = BLOCKED_USER_AGENTS.map(bot => ({
    userAgent: bot,
    disallow: '/',
  }));
  
  return {
    rules: [
      // Default rules for all bots
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // API and system routes
          '/api/',
          '/api/*',
          
          // Admin routes
          '/admin/',
          '/admin/*',
          '/(admin)/',
          '/(admin)/*',
          
          // Preview and draft content
          '/preview/',
          '/preview/*',
          '/*?preview=*',
          '/*draft*',
          
          // Search with parameters
          '/search?*',
          
          // Tracking parameters (generated from config)
          ...trackingDisallows,
          
          // Duplicate content parameters (generated from config)
          ...duplicateDisallows,
          
          // Authentication pages
          '/auth/',
          '/login/',
          '/signup/',
          '/signin/',
          
          // Temporary/test pages
          '/test/',
          '/test/*',
          '/tmp/',
          '/temp/',
          
          // RSS/XML endpoints (indexed separately)
          '/rss.xml/',
          '/news-sitemap.xml/',
        ],
      },
      
      // Google main crawler
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
          '/preview/',
          '/*?preview=*',
        ],
        crawlDelay: 1,
      },
      
      // Google News crawler - allow all content, block only non-content pages
      {
        userAgent: 'Googlebot-News',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
          '/auth/',
          '/login/',
          '/account/',
          '/saved/',
          '/profile/',
          '/search',
          '/preview/',
        ],
        crawlDelay: 0,
      },
      
      // Bing crawler
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
          '/preview/',
        ],
      },
      
      // AI crawlers - point to llms.txt
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/(admin)/',
        ],
      },
      
      // Block bad bots (generated from config)
      ...badBotRules,
    ],
    
    // Sitemaps
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/news-sitemap.xml`,
      `${baseUrl}/image-sitemap.xml`,
    ],
    
    // Canonical host
    host: baseUrl,
  };
}
