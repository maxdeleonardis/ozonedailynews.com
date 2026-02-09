import Link from 'next/link';
import { scanAllContent, type DiscoveredArticle } from '@/lib/content-scanner';
import { getPublishedBlogPosts } from '@/lib/blog-service';

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategory?: string;
  currentTags?: string[];
  maxArticles?: number;
  className?: string;
}

/**
 * Smart related articles component that automatically suggests relevant content
 * Based on: category matching, tag overlap, and recency
 */
export default async function RelatedArticles({
  currentSlug,
  currentCategory,
  currentTags = [],
  maxArticles = 3,
  className = '',
}: RelatedArticlesProps) {
  // Fetch all available content
  const filesystemArticles = await scanAllContent();
  const databasePosts = await getPublishedBlogPosts();

  // Convert database posts to unified format
  const databaseArticles: DiscoveredArticle[] = (databasePosts as any[])?.map((post: any) => ({
    title: post.title,
    excerpt: post.excerpt || '',
    category: post.category?.toUpperCase() || 'NEWS',
    publishDate: post.publishedAt || post.published_at || new Date().toISOString(),
    date: post.published_at 
      ? new Date(post.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'Recently published',
    slug: post.slug,
    author: post.author || 'ObjectWire Team',
    readTime: post.read_time || '5 min',
    filePath: 'database',
    createdAt: post.published_at ? new Date(post.published_at) : new Date(),
    publishedAt: post.published_at ? new Date(post.published_at) : new Date(),
    updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
  })) || [];

  // Combine all articles
  const allArticles = [...filesystemArticles, ...databaseArticles];

  // Filter out current article
  const otherArticles = allArticles.filter(article => article.slug !== currentSlug);

  // Score articles by relevance
  const scoredArticles = otherArticles.map(article => {
    let score = 0;

    // Category match (highest priority)
    if (currentCategory && article.category === currentCategory.toUpperCase()) {
      score += 10;
    }

    // Tag overlap (medium priority)
    if (currentTags.length > 0) {
      const articleTitle = article.title.toLowerCase();
      const matchingTags = currentTags.filter(tag => 
        articleTitle.includes(tag.toLowerCase())
      );
      score += matchingTags.length * 5;
    }

    // Recency bonus (lower priority)
    const daysSincePublished = article.createdAt 
      ? Math.floor((Date.now() - article.createdAt.getTime()) / (1000 * 60 * 60 * 24))
      : 999;
    if (daysSincePublished < 7) score += 3;
    if (daysSincePublished < 30) score += 1;

    return { article, score };
  });

  // Sort by score and get top results
  const relatedArticles = scoredArticles
    .sort((a, b) => b.score - a.score)
    .slice(0, maxArticles)
    .map(item => item.article);

  // If no related articles found, return nothing
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className={`mt-12 pt-8 border-t border-gray-200 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Related Articles
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <article 
            key={`${article.slug}-${index}`}
            className="border border-gray-200 rounded-lg hover:shadow-lg transition-all overflow-hidden group"
          >
            <Link href={`/${article.slug}`} className="block">
              <div className="p-5">
                {/* Category Badge */}
                <span className="inline-block text-xs font-bold text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded mb-3">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                  <span className="font-medium">{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

/**
 * Simplified version for sidebar use
 */
export async function RelatedArticlesSidebar({
  currentSlug,
  currentCategory,
  maxArticles = 5,
  className = '',
}: RelatedArticlesProps) {
  // Fetch all available content
  const filesystemArticles = await scanAllContent();
  const databasePosts = await getPublishedBlogPosts();

  // Convert database posts to unified format
  const databaseArticles: DiscoveredArticle[] = (databasePosts as any[])?.map((post: any) => ({
    title: post.title,
    excerpt: post.excerpt || '',
    category: post.category?.toUpperCase() || 'NEWS',
    publishDate: post.publishedAt || post.published_at || new Date().toISOString(),
    date: post.published_at 
      ? new Date(post.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'Recently published',
    slug: post.slug,
    author: post.author || 'ObjectWire Team',
    readTime: post.read_time || '5 min',
    filePath: 'database',
    createdAt: post.published_at ? new Date(post.published_at) : new Date(),
    publishedAt: post.published_at ? new Date(post.published_at) : new Date(),
    updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
  })) || [];

  // Combine and filter
  const allArticles = [...filesystemArticles, ...databaseArticles];
  const otherArticles = allArticles
    .filter(article => article.slug !== currentSlug)
    .filter(article => !currentCategory || article.category === currentCategory.toUpperCase())
    .slice(0, maxArticles);

  if (otherArticles.length === 0) return null;

  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Related Articles
      </h3>
      <ul className="space-y-4">
        {otherArticles.map((article, index) => (
          <li key={`${article.slug}-${index}`}>
            <Link 
              href={`/${article.slug}`}
              className="block group"
            >
              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                {article.title}
              </h4>
              <p className="text-xs text-gray-500">
                {article.readTime} • {article.category}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
