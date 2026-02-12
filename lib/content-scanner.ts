import fs from 'fs';
import path from 'path';

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

    // Try to get file stats for dates
    const stats = fs.statSync(filePath);
    const publishedAt = stats.birthtime || stats.mtime;
    const updatedAt = stats.mtime;

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
      updatedAt: updatedAt.getTime() !== publishedAt.getTime() ? updatedAt : undefined,
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
