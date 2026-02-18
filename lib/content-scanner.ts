import fs from 'fs';
import path from 'path';
import { parseDate, formatArticleDate } from './date-utils';

export interface DiscoveredArticle {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  author: string;
  readTime: string;
  urgent?: boolean;
  featured?: boolean;
  filePath: string;
  createdAt: Date;
  publishedAt: Date;
  updatedAt?: Date;
}

/**
 * Static registry for client-side pages that can't export metadata
 * These are manually maintained for interactive/client-component pages
 * NOTE: This is only needed for pages that use "use client" at the top level
 * If you need interactivity, use server component + client component pattern instead
 */
const CLIENT_SIDE_ARTICLES: DiscoveredArticle[] = [
  // Add client-only pages here if absolutely necessary
  // Example:
  // {
  //   title: "Example Interactive Page",
  //   excerpt: "Description...",
  //   category: "NEWS",
  //   date: new Date('2026-01-27').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  //   slug: "example/page",
  //   author: "ObjectWire Team",
  //   readTime: "5 min",
  //   urgent: false,
  //   filePath: "app/example/page/page.tsx",
  //   createdAt: new Date('2026-01-27'),
  // },
];

/**
 * Recursively scans the app directory for page.tsx files
 * and extracts metadata from them
 */
export async function scanAllContent(): Promise<DiscoveredArticle[]> {
  const appDir = path.join(process.cwd(), 'app');
  const articles: DiscoveredArticle[] = [...CLIENT_SIDE_ARTICLES]; // Start with client-side articles

  function extractMetadataFromFile(filePath: string): DiscoveredArticle | null {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Extract metadata export
      const metadataMatch = content.match(/export const metadata[:\s]*Metadata\s*=\s*{([^}]+(?:{[^}]*}[^}]*)*)/s);
      if (!metadataMatch) return null;

      const metadataStr = metadataMatch[0];
      
      // Extract title
      const titleMatch = metadataStr.match(/title:\s*["'`]([^"'`]+)["'`]/);
      const title = titleMatch ? titleMatch[1].replace(/\s*\|\s*ObjectWire.*$/i, '').trim() : null;
      
      if (!title) return null;

      // Extract description/excerpt
      const descMatch = metadataStr.match(/description:\s*["'`]([^"'`]+)["'`]/);
      const excerpt = descMatch ? descMatch[1] : '';

      // Extract author from authors array or openGraph
      let author = 'ObjectWire Team';
      const authorMatch = metadataStr.match(/authors:\s*\[.*?name:\s*["']([^"']+)["']/s);
      if (authorMatch) author = authorMatch[1];

      // Extract category from openGraph section or keywords
      let category = 'NEWS';
      const sectionMatch = metadataStr.match(/section:\s*["']([^"']+)["']/);
      if (sectionMatch) category = sectionMatch[1].toUpperCase();

      // Extract published time
      let publishedDate = new Date();
      const publishedMatch = metadataStr.match(/publishedTime:\s*["']([^"']+)["']/);
      if (publishedMatch) {
        publishedDate = parseDate(publishedMatch[1]);
      } else {
        // Use file creation time as fallback
        const stats = fs.statSync(filePath);
        publishedDate = stats.birthtime;
      }

      // Extract modified time
      let modifiedDate: Date | undefined;
      const modifiedMatch = metadataStr.match(/modifiedTime:\s*["']([^"']+)["']/);
      if (modifiedMatch) {
        modifiedDate = parseDate(modifiedMatch[1]);
      } else {
        // Check file modification time
        const stats = fs.statSync(filePath);
        // Only use mtime if it's significantly different from birthtime (more than 1 hour)
        if (Math.abs(stats.mtime.getTime() - publishedDate.getTime()) > 3600000) {
          modifiedDate = stats.mtime;
        }
      }

      // Calculate slug from file path
      // Normalise to forward slashes (Windows uses backslashes)
      const relativePath = path.relative(appDir, filePath).replace(/\\/g, '/');
      const slug = '/' + relativePath
        .replace(/\/page\.tsx$/, '')
        .replace(/^page\.tsx$/, '')
        .replace(/^\(public\)\//, '')
        .replace(/^\(admin\)\//, '')
        .replace(/^\//, '');

      // Skip certain paths
      if (
        slug === '/' ||
        slug === '' || 
        slug === 'page.tsx' ||
        slug === '/page.tsx' ||
        slug.includes('/api/') ||
        slug.includes('(admin)') ||
        slug.startsWith('/_') ||
        !excerpt
      ) {
        return null;
      }

      // Extract read time from content
      const readTimeMatch = content.match(/(\d+)\s*min(?:ute)?(?:\s+read)?/i);
      const readTime = readTimeMatch ? `${readTimeMatch[1]} min` : '5 min';

      // Check if urgent/breaking
      const urgent = content.toLowerCase().includes('breaking') || 
                    content.toLowerCase().includes('urgent');

      return {
        title,
        excerpt,
        category,
        date: formatArticleDate(publishedDate),
        slug,
        author,
        readTime,
        urgent,
        filePath,
        createdAt: publishedDate, // For backwards compatibility
        publishedAt: publishedDate,
        updatedAt: modifiedDate,
      };
    } catch (error) {
      console.error(`Error parsing ${filePath}:`, error);
      return null;
    }
  }

  function scanDirectory(dir: string) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules, .next, etc.
        if (!item.startsWith('.') && !item.startsWith('_') && item !== 'node_modules') {
          scanDirectory(fullPath);
        }
      } else if (item === 'page.tsx' || item === 'page.ts') {
        const article = extractMetadataFromFile(fullPath);
        if (article) {
          articles.push(article);
        }
      }
    }
  }

  scanDirectory(appDir);

  // Sort by published date (newest first)
  articles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  return articles;
}

/**
 * Get articles from a specific time period
 */
export function filterByDateRange(
  articles: DiscoveredArticle[], 
  daysAgo: number
): DiscoveredArticle[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysAgo);
  
  return articles.filter(article => article.publishedAt >= cutoff);
}

/**
 * Get articles by category
 */
export function filterByCategory(
  articles: DiscoveredArticle[],
  category: string
): DiscoveredArticle[] {
  return articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get featured/urgent articles
 */
export function getUrgentArticles(articles: DiscoveredArticle[]): DiscoveredArticle[] {
  return articles.filter(article => article.urgent);
}

/**
 * Group articles by category
 */
export function groupByCategory(articles: DiscoveredArticle[]): Record<string, DiscoveredArticle[]> {
  return articles.reduce((acc, article) => {
    const category = article.category || 'OTHER';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {} as Record<string, DiscoveredArticle[]>);
}
