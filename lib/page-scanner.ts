/**
 * PAGE SCANNER — Powers the sitemap + SEO infrastructure
 * ========================================================
 * Scans the /app directory for all page.tsx files and returns
 * structured metadata for sitemap.xml generation.
 *
 * Uses the ARTICLE_DATES registry + embedded publishDate props
 * for accurate lastModified timestamps (not filesystem timestamps
 * which collapse to deploy time on Vercel).
 */
import fs from 'fs';
import path from 'path';
import { ARTICLE_DATES } from './article-dates';

export interface PageInfo {
  url: string;
  path: string;
  priority: number;
  changeFrequency: string;
  lastModified: Date;
  title?: string;
  description?: string;
  category?: string;
}

// Directories to skip during scanning
const SKIP_DIRS = new Set([
  'api', 'components', 'lib', 'public', 'node_modules', '.next',
  'templates', 'types', 'config', 'supabase', 'Docs', 'scripts',
]);

// Route groups (parenthesized folders) — recurse into them but don't include in path
const isRouteGroup = (name: string) => name.startsWith('(') && name.endsWith(')');

// Priority tiers based on URL depth and importance
const PRIORITY_OVERRIDES: Record<string, number> = {
  '/': 1.0,
  '/news': 0.95,
  '/technology': 0.9,
  '/finance': 0.9,
  '/winter-olympics': 0.9,
  '/world-cup': 0.9,
  '/google': 0.85,
  '/apple': 0.85,
  '/disney': 0.85,
  '/search': 0.3,
  '/privacy-policy': 0.2,
  '/terms-of-service': 0.2,
  '/editorial-standards': 0.3,
  '/corrections': 0.2,
  '/site-index': 0.3,
};

/**
 * Determine sitemap priority from URL structure
 */
export function getSitemapPriority(urlPath: string): number {
  if (PRIORITY_OVERRIDES[urlPath] !== undefined) {
    return PRIORITY_OVERRIDES[urlPath];
  }

  const depth = urlPath.split('/').filter(Boolean).length;
  if (depth === 0) return 1.0;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.7;
  if (depth === 3) return 0.6;
  return 0.5;
}

/**
 * Determine change frequency from URL pattern
 */
export function getChangeFrequency(urlPath: string): string {
  if (urlPath === '/' || urlPath === '/news') return 'daily';
  if (urlPath.startsWith('/winter-olympics') || urlPath.startsWith('/world-cup')) return 'daily';
  if (urlPath === '/finance' || urlPath === '/technology') return 'daily';

  const depth = urlPath.split('/').filter(Boolean).length;
  if (depth <= 1) return 'weekly';
  if (depth <= 2) return 'weekly';
  return 'monthly';
}

/**
 * Extract a publish date from file content (same logic as content-scanner)
 */
function extractPageDate(filePath: string, slug: string): Date {
  // 1. Check article-dates registry
  if (ARTICLE_DATES[slug]) {
    const d = new Date(ARTICLE_DATES[slug]);
    if (!isNaN(d.getTime())) return d;
  }

  // 2. Read file and check for embedded publishDate prop
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    const propMatch = content.match(/publishDate\s*=\s*["']([A-Z][a-z]+ \d{1,2},\s*\d{4})["']/);
    if (propMatch) {
      const d = new Date(propMatch[1]);
      if (!isNaN(d.getTime())) return d;
    }

    const jsonLdMatch = content.match(/datePublished\s*:\s*["'](\d{4}-\d{2}-\d{2}[T ]?\d{0,2}:?\d{0,2}:?\d{0,2}Z?)["']/);
    if (jsonLdMatch) {
      const d = new Date(jsonLdMatch[1]);
      if (!isNaN(d.getTime())) return d;
    }
  } catch {
    // ignore read errors
  }

  // 3. Filesystem fallback (will be deploy time on Vercel, but better than nothing)
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch {
    return new Date();
  }
}

/**
 * Recursively scan the app directory for all page.tsx files
 */
function scanPagesRecursive(
  dirPath: string,
  routePath: string,
  results: PageInfo[]
): void {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      if (entry.name.startsWith('[')) continue; // dynamic routes

      const childDir = path.join(dirPath, entry.name);
      const childRoute = isRouteGroup(entry.name)
        ? routePath // route groups don't add to the URL path
        : routePath + '/' + entry.name;

      scanPagesRecursive(childDir, childRoute, results);
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      const fullFilePath = path.join(dirPath, entry.name);
      const slug = routePath || '/';

      // Extract title and description from the file
      let title: string | undefined;
      let description: string | undefined;
      try {
        const content = fs.readFileSync(fullFilePath, 'utf-8');
        const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
        title = titleMatch ? titleMatch[1].split('|')[0].trim() : undefined;
        const descMatch = content.match(/description:\s*['"](.*?)['"]/s);
        description = descMatch ? descMatch[1].substring(0, 200) : undefined;
      } catch {
        // ignore
      }

      const lastModified = extractPageDate(fullFilePath, slug);

      results.push({
        url: slug,
        path: slug,
        priority: getSitemapPriority(slug),
        changeFrequency: getChangeFrequency(slug),
        lastModified,
        title,
        description,
      });
    }
  }
}

/**
 * Get all pages for sitemap generation
 */
export async function getSitemapPages(): Promise<PageInfo[]> {
  const appDir = path.join(process.cwd(), 'app');
  const results: PageInfo[] = [];

  scanPagesRecursive(appDir, '', results);

  // Sort by priority descending, then by lastModified descending
  results.sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return b.lastModified.getTime() - a.lastModified.getTime();
  });

  return results;
}

/**
 * Get news article pages (for news-specific sitemaps)
 */
export async function getNewsArticlePages(): Promise<PageInfo[]> {
  const allPages = await getSitemapPages();
  const newsSections = ['/news', '/winter-olympics', '/world-cup', '/finance', '/technology', '/google', '/apple', '/disney', '/entertainment'];
  return allPages.filter(p => newsSections.some(s => p.path.startsWith(s)));
}
