import fs from 'fs';
import path from 'path';
import { ARTICLE_DATES } from './article-dates';

export interface Article {
  title: string;
  slug: string;
  publishDate: string;
  category: string;
  urgent?: boolean;
  excerpt?: string;
  author?: string;
  readTime?: string;
  date?: string;
  filePath?: string;
  publishedAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;
}

export type DiscoveredArticle = Article;

// Categories to scan for content - comprehensive list of ALL content directories
const CONTENT_DIRECTORIES = [
  'news',
  'finance',
  'crypto',
  'technology',
  'open-ai',
  'entertainment',
  'winter-olympics',
  'world-cup',
  'saas',
  'disney',
  'apple',
  'google',
  'elon-musk',
  'nasa',
  'nvidia',
  'intel',
  'microsoft',
  'social',
  'youtube',
  'influencer',
  'investigations',
  'video-games',
  'clothing',
  'podcasts',
  'events',
  'define',
  'artists',
  'cars',
  'college',
  'ngos',
  'blog',
];

/**
 * Recursively scan directories for page.tsx files and extract article metadata
 */
export async function scanAllContent(): Promise<Article[]> {
  const articles: Article[] = [];
  const appDir = path.join(process.cwd(), 'app');

  for (const dir of CONTENT_DIRECTORIES) {
    const categoryPath = path.join(appDir, dir);
    
    if (!fs.existsSync(categoryPath)) {
      continue;
    }

    const categoryArticles = await scanDirectory(categoryPath, dir);
    articles.push(...categoryArticles);
  }

  // Sort by published date (newest first)
  articles.sort((a, b) => {
    const dateA = a.publishedAt || new Date(a.publishDate || 0);
    const dateB = b.publishedAt || new Date(b.publishDate || 0);
    return dateB.getTime() - dateA.getTime();
  });

  return articles;
}

/**
 * Recursively scan a directory for page.tsx files
 */
async function scanDirectory(dirPath: string, category: string): Promise<Article[]> {
  const articles: Article[] = [];
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        const subArticles = await scanDirectory(fullPath, category);
        articles.push(...subArticles);
      } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
        // Found an article page
        const article = await extractArticleMetadata(fullPath, dirPath, category);
        if (article) {
          articles.push(article);
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error);
  }

  return articles;
}

/**
 * Try to extract a publish date from the file content itself.
 * This is critical for production/Vercel where filesystem timestamps
 * all collapse to the deployment time, making sort order meaningless.
 *
 * Priority order:
 *   0. ARTICLE_DATES registry (central config — highest priority)
 *   1. publishDate="Month DD, YYYY" (component prop — most common)
 *   2. datePublished: "YYYY-MM-DDTHH:MM:SSZ" (JSON-LD schema)
 *   3. published_time.*content="YYYY-MM-DD" (OpenGraph meta)
 *   4. Filesystem birthtime (local dev only — unreliable on deploy)
 *   5. Fallback: Jan 1 2025 (ensures undated pages sort LAST)
 */
function extractDateFromContent(fileContent: string, filePath: string, slug?: string): { publishedAt: Date; updatedAt: Date | undefined; hasEmbeddedDate: boolean } {
  // 0. Check the central date registry first
  if (slug && ARTICLE_DATES[slug]) {
    const d = new Date(ARTICLE_DATES[slug]);
    if (!isNaN(d.getTime())) {
      return { publishedAt: d, updatedAt: undefined, hasEmbeddedDate: true };
    }
  }

  // 1. publishDate="February 11, 2026"
  const propMatch = fileContent.match(/publishDate\s*=\s*["']([A-Z][a-z]+ \d{1,2},\s*\d{4})["']/);
  if (propMatch) {
    const d = new Date(propMatch[1]);
    if (!isNaN(d.getTime())) {
      // Also look for an updateDate prop
      const updateMatch = fileContent.match(/updateDate\s*=\s*["']([A-Z][a-z]+ \d{1,2},\s*\d{4})["']/);
      const updatedAt = updateMatch ? new Date(updateMatch[1]) : undefined;
      return { publishedAt: d, updatedAt: updatedAt && !isNaN(updatedAt.getTime()) ? updatedAt : undefined, hasEmbeddedDate: true };
    }
  }

  // 2. datePublished: "2026-01-23T17:00:00Z"
  const jsonLdMatch = fileContent.match(/datePublished\s*:\s*["'](\d{4}-\d{2}-\d{2}[T ]?\d{0,2}:?\d{0,2}:?\d{0,2}Z?)["']/);
  if (jsonLdMatch) {
    const d = new Date(jsonLdMatch[1]);
    if (!isNaN(d.getTime())) {
      const modMatch = fileContent.match(/dateModified\s*:\s*["'](\d{4}-\d{2}-\d{2}[T ]?\d{0,2}:?\d{0,2}:?\d{0,2}Z?)["']/);
      const updatedAt = modMatch ? new Date(modMatch[1]) : undefined;
      return { publishedAt: d, updatedAt: updatedAt && !isNaN(updatedAt.getTime()) ? updatedAt : undefined, hasEmbeddedDate: true };
    }
  }

  // 3. article:published_time content="2026-01-23"
  const ogMatch = fileContent.match(/published_time.*?content\s*=\s*["'](\d{4}-\d{2}-\d{2})["']/);
  if (ogMatch) {
    const d = new Date(ogMatch[1]);
    if (!isNaN(d.getTime())) {
      return { publishedAt: d, updatedAt: undefined, hasEmbeddedDate: true };
    }
  }

  // 4. Filesystem timestamps (useful in local dev only)
  try {
    const stats = fs.statSync(filePath);
    const birthtime = stats.birthtime || stats.mtime;
    const mtime = stats.mtime;
    // Detect deploy-collapsed timestamps: if birthtime is within the last 10 minutes
    // of mtime, they were likely set during deployment and are unreliable.
    const timeDiff = Math.abs(mtime.getTime() - birthtime.getTime());
    if (timeDiff < 600_000) {
      // Timestamps look like they were set during deploy — fall through to fallback
    } else {
      return {
        publishedAt: birthtime,
        updatedAt: mtime.getTime() !== birthtime.getTime() ? mtime : undefined,
        hasEmbeddedDate: false,
      };
    }
  } catch {
    // ignore
  }

  // 5. Fallback — pages without any date signal sort to the back
  return { publishedAt: new Date('2025-01-01T00:00:00Z'), updatedAt: undefined, hasEmbeddedDate: false };
}

/**
 * Extract metadata from a page.tsx file
 */
async function extractArticleMetadata(
  filePath: string,
  dirPath: string,
  category: string
): Promise<Article | null> {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Extract metadata export
    const metadataMatch = fileContent.match(/export const metadata[:\s]*Metadata\s*=\s*{([^}]+(?:{[^}]*}[^}]*)*?)};/s);
    
    if (!metadataMatch) {
      return null;
    }

    // Extract title
    const titleMatch = fileContent.match(/title:\s*['"](.*?)['"]/);
    const title = titleMatch ? titleMatch[1].split('|')[0].trim() : 'Untitled';

    // Extract description
    const descMatch = fileContent.match(/description:\s*['"](.*?)['"]/s);
    const excerpt = descMatch ? descMatch[1].substring(0, 200) : '';

    // Generate slug from file path
    const appDir = path.join(process.cwd(), 'app');
    const relativePath = path.relative(appDir, dirPath);
    const slug = '/' + relativePath.replace(/\\/g, '/');

    // Extract dates from content (not filesystem!) for reliable production sorting
    const { publishedAt, updatedAt } = extractDateFromContent(fileContent, filePath, slug);

    // Extract author if present
    const authorMatch = fileContent.match(/author[:\s]*['"](.*?)['"]/);
    const author = authorMatch ? authorMatch[1] : 'ObjectWire Team';

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = fileContent.split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';

    // Format date
    const date = publishedAt.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return {
      title,
      slug,
      publishDate: date,
      category: category.toUpperCase(),
      excerpt,
      author,
      readTime,
      date,
      filePath,
      publishedAt,
      updatedAt: updatedAt && updatedAt.getTime() !== publishedAt.getTime() ? updatedAt : undefined,
      createdAt: publishedAt,
    };
  } catch (error) {
    console.error(`Error extracting metadata from ${filePath}:`, error);
    return null;
  }
}

export function filterByDateRange(articles: Article[], days: number, referenceDate?: Date): Article[] {
  const reference = referenceDate || new Date();
  const cutoffDate = new Date(reference);
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return articles.filter(article => {
    const articleDate = article.publishedAt || new Date(article.publishDate);
    return articleDate >= cutoffDate;
  });
}

export function groupByCategory(articles: Article[]): Record<string, Article[]> {
  const grouped: Record<string, Article[]> = {};

  for (const article of articles) {
    const category = article.category || 'UNCATEGORIZED';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(article);
  }

  return grouped;
}

export function getUrgentArticles(articles: Article[]): Article[] {
  return articles.filter(a => a.urgent);
}
