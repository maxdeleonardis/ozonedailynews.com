import fs from 'fs';
import path from 'path';
import { parseDate, formatArticleDate } from './date-utils';

export interface FinanceArticle {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  author: string;
  readTime: string;
  filePath: string;
  createdAt: Date;
  publishedAt: Date;
  isPinned?: boolean;
}

/**
 * Scans the /finance/articles directory for page.tsx files
 * and extracts metadata from them
 */
export async function scanFinanceArticles(): Promise<FinanceArticle[]> {
  const financeArticlesDir = path.join(process.cwd(), 'app/(public)/finance/articles');
  const articles: FinanceArticle[] = [];

  if (!fs.existsSync(financeArticlesDir)) {
    return articles;
  }

  function extractMetadataFromFile(filePath: string): FinanceArticle | null {
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

      // Extract author
      let author = 'ObjectWire Team';
      const authorMatch = metadataStr.match(/authors:\s*\[.*?name:\s*["']([^"']+)["']/s);
      if (authorMatch) author = authorMatch[1];

      // Extract category (default to Finance)
      let category = 'Finance';
      const sectionMatch = metadataStr.match(/section:\s*["']([^"']+)["']/);
      if (sectionMatch) category = sectionMatch[1];

      // Extract published time
      let publishedDate = new Date();
      const publishedMatch = metadataStr.match(/publishedTime:\s*["']([^"']+)["']/);
      if (publishedMatch) {
        publishedDate = parseDate(publishedMatch[1]);
      } else {
        const stats = fs.statSync(filePath);
        publishedDate = stats.birthtime;
      }

      // Calculate slug from folder name
      const relativePath = path.relative(financeArticlesDir, filePath);
      const slug = relativePath
        .replace(/\/page\.tsx$/, '')
        .replace(/^\//, '');

      // Extract read time
      const readTimeMatch = content.match(/(\d+)\s*min(?:ute)?(?:\s+read)?/i);
      const readTime = readTimeMatch ? `${readTimeMatch[1]} min` : '5 min';

      // Check if pinned
      const isPinned = content.includes('pinned: true') || content.includes('isPinned: true');

      return {
        title,
        excerpt,
        category,
        date: formatArticleDate(publishedDate),
        slug,
        author,
        readTime,
        filePath,
        createdAt: publishedDate,
        publishedAt: publishedDate,
        isPinned,
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
        if (!item.startsWith('.') && !item.startsWith('_')) {
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

  scanDirectory(financeArticlesDir);

  // Sort by pinned status first, then by published date (newest first)
  articles.sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return b.publishedAt.getTime() - a.publishedAt.getTime();
  });

  return articles;
}
