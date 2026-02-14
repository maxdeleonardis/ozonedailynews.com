import fs from 'fs';
import path from 'path';

interface PageInfo {
  path: string;
  lastModified: Date;
  isNewsArticle: boolean;
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  publishDate?: string;
}

/**
 * Recursively scans the app directory for page.tsx files
 * and extracts metadata for sitemap and RSS feed generation
 */
export function scanAllPages(): PageInfo[] {
  const appDir = path.join(process.cwd(), 'app');
  const pages: PageInfo[] = [];
  
  function scanDirectory(dir: string, urlPath: string = ''): void {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const currentUrlPath = urlPath + '/' + entry.name;
        
        if (entry.isDirectory()) {
          // Skip certain directories
          if (entry.name.startsWith('_') || entry.name === 'api' || entry.name === 'node_modules') {
            continue;
          }
          scanDirectory(fullPath, currentUrlPath);
        } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
          // Found a page file
          const stats = fs.statSync(fullPath);
          const content = fs.readFileSync(fullPath, 'utf-8');
          
          // Determine URL path (remove /page from end)
          let pagePath = urlPath || '/';
          
          // Check if this is a NewsArticle component page
          const isNewsArticle = content.includes('from \'@/components/NewsArticle\'') || 
                                content.includes('from "@/components/NewsArticle"');
          
          // Extract metadata from the file
          const metadata = extractMetadata(content);
          
          pages.push({
            path: pagePath,
            lastModified: stats.mtime,
            isNewsArticle,
            ...metadata,
          });
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dir}:`, error);
    }
  }
  
  scanDirectory(appDir);
  return pages;
}

/**
 * Extract metadata from page.tsx content
 */
function extractMetadata(content: string): Partial<PageInfo> {
  const metadata: Partial<PageInfo> = {};
  
  // Extract title from metadata export
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) {
    metadata.title = titleMatch[1];
  }
  
  // Extract description
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descMatch) {
    metadata.description = descMatch[1];
  }
  
  // Extract category from NewsArticle component
  const categoryMatch = content.match(/category="([^"]+)"/);
  if (categoryMatch) {
    metadata.category = categoryMatch[1];
  }
  
  // Extract tags from keywords array
  const keywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
  if (keywordsMatch) {
    const keywordsContent = keywordsMatch[1];
    const tags = keywordsContent
      .split(',')
      .map(k => k.trim().replace(/['"`]/g, ''))
      .filter(k => k.length > 0);
    metadata.tags = tags;
  }
  
  // Extract publish date from publishDate prop
  const dateMatch = content.match(/publishDate="([^"]+)"/);
  if (dateMatch) {
    metadata.publishDate = dateMatch[1];
  }
  
  // Also try publishedTime in metadata
  if (!metadata.publishDate) {
    const pubTimeMatch = content.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/);
    if (pubTimeMatch) {
      metadata.publishDate = pubTimeMatch[1];
    }
  }
  
  return metadata;
}

/**
 * Get pages suitable for sitemap (exclude API routes, admin pages, etc.)
 */
export function getSitemapPages(): PageInfo[] {
  const allPages = scanAllPages();
  
  return allPages.filter(page => {
    // Exclude admin routes
    if (page.path.includes('/admin') || page.path.includes('/(admin)')) {
      return false;
    }
    
    // Exclude API routes
    if (page.path.includes('/api/')) {
      return false;
    }
    
    // Exclude dynamic catch-all routes
    if (page.path.includes('[...') || page.path.includes('[slug]')) {
      return false;
    }
    
    return true;
  });
}

/**
 * Get pages that use NewsArticle component for RSS feed
 */
export function getNewsArticlePages(): PageInfo[] {
  const allPages = scanAllPages();
  
  return allPages
    .filter(page => page.isNewsArticle)
    .sort((a, b) => {
      // Sort by publish date (newest first)
      const dateA = a.publishDate ? new Date(a.publishDate).getTime() : a.lastModified.getTime();
      const dateB = b.publishDate ? new Date(b.publishDate).getTime() : b.lastModified.getTime();
      return dateB - dateA;
    });
}

/**
 * Determine priority for sitemap based on path
 */
export function getSitemapPriority(pagePath: string): number {
  // Homepage
  if (pagePath === '/') return 1.0;
  
  // Latest news articles (breaking news)
  if (pagePath.startsWith('/news/') && pagePath.includes('2026')) return 1.0;
  
  // News section
  if (pagePath.startsWith('/news/')) return 0.9;
  
  // Company profiles
  if (pagePath === '/apple' || pagePath === '/intel' || pagePath === '/nvidia' || 
      pagePath === '/novartis' || pagePath.includes('/spacex')) return 0.9;
  
  // Main sections
  if (pagePath.match(/^\/[^\/]+$/)) return 0.8;
  
  // Sub-pages
  return 0.7;
}

/**
 * Determine change frequency for sitemap based on path
 */
export function getChangeFrequency(pagePath: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  // News articles updated frequently
  if (pagePath.startsWith('/news/')) return 'daily';
  
  // Company profiles updated monthly
  if (pagePath === '/apple' || pagePath === '/intel' || pagePath === '/nvidia' || 
      pagePath === '/novartis' || pagePath.includes('/spacex')) return 'weekly';
  
  // Artist pages
  if (pagePath.startsWith('/artists/')) return 'monthly';
  
  // Default
  return 'monthly';
}
