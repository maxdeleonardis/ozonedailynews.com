/**
 * SEO utilities for production-ready blog content
 */

import { BlogPostFull } from './blog-service';

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  tags?: string[];
}

/**
 * Generate optimized SEO metadata for a blog post
 */
export function generateSEOMetadata(post: BlogPostFull, baseUrl: string): SEOMetadata {
  const url = `${baseUrl}/${post.slug}`;
  
  return {
    title: post.meta_title || `${post.title} | ObjectWire`,
    description: post.meta_description || post.excerpt || generateExcerpt(post),
    canonical: url,
    ogImage: post.featured_image || `${baseUrl}/og-default.png`,
    keywords: post.tags,
    author: post.author,
    publishedTime: post.published_at || post.created_at,
    modifiedTime: post.updated_at,
    articleSection: post.category,
    tags: post.tags,
  };
}

/**
 * Generate excerpt from blocks if not provided
 */
function generateExcerpt(post: BlogPostFull): string {
  if (post.excerpt) return post.excerpt;
  
  // Extract first paragraph from blocks
  const paragraphBlock = post.blocks.find(
    (block: any) => block.type === 'paragraph' || block.type === 'summary'
  );
  
  if (paragraphBlock && paragraphBlock.content) {
    const text = paragraphBlock.content.substring(0, 160);
    return text.length < paragraphBlock.content.length ? `${text}...` : text;
  }
  
  return 'Read the latest insights and analysis on ObjectWire.';
}

/**
 * Generate Schema.org structured data for article
 */
export function generateArticleSchema(post: BlogPostFull, baseUrl: string) {
  const metadata = generateSEOMetadata(post, baseUrl);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: metadata.description,
    image: metadata.ogImage,
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Person',
      name: post.author || 'ObjectWire Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ObjectWire',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
  };
}

/**
 * Calculate reading time based on blocks
 */
export function calculateReadingTime(blocks: any[]): string {
  let wordCount = 0;
  
  blocks.forEach((block) => {
    if (block.content) {
      wordCount += block.content.split(/\s+/).length;
    }
    if (block.items) {
      block.items.forEach((item: any) => {
        if (item.description) {
          wordCount += item.description.split(/\s+/).length;
        }
      });
    }
  });
  
  const minutes = Math.ceil(wordCount / 200); // Average reading speed
  return `${minutes} min read`;
}

/**
 * Calculate SEO score for content
 */
export function calculateSEOScore(post: Partial<BlogPostFull>): {
  score: number;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];
  let score = 100;
  
  // Title checks
  if (!post.title) {
    issues.push('Missing title');
    score -= 20;
  } else {
    if (post.title.length < 30) {
      suggestions.push('Title is short. Consider 40-60 characters for better SEO');
      score -= 5;
    }
    if (post.title.length > 70) {
      issues.push('Title too long (>70 chars). It may be truncated in search results');
      score -= 10;
    }
  }
  
  // Meta description checks
  if (!post.meta_description && !post.excerpt) {
    issues.push('Missing meta description');
    score -= 15;
  } else {
    const desc = post.meta_description || post.excerpt || '';
    if (desc.length < 120) {
      suggestions.push('Meta description is short. Aim for 150-160 characters');
      score -= 5;
    }
    if (desc.length > 160) {
      issues.push('Meta description too long. Keep it under 160 characters');
      score -= 5;
    }
  }
  
  // Slug checks
  if (post.slug) {
    if (post.slug.length > 75) {
      issues.push('URL slug is too long. Keep it concise');
      score -= 5;
    }
  }
  
  // Content checks
  if (post.blocks && post.blocks.length > 0) {
    const hasHeadings = post.blocks.some((b: any) => b.type === 'heading');
    if (!hasHeadings) {
      suggestions.push('Add headings (H2, H3) to improve content structure');
      score -= 10;
    }
    
    const totalWords = post.blocks.reduce((count: number, block: any) => {
      if (block.content) count += block.content.split(/\s+/).length;
      return count;
    }, 0);
    
    if (totalWords < 300) {
      issues.push('Content is thin (<300 words). Add more detailed content');
      score -= 15;
    } else if (totalWords < 600) {
      suggestions.push('Consider adding more content. Articles with 1000+ words rank better');
      score -= 5;
    }
  }
  
  // Tags/Keywords
  if (!post.tags || post.tags.length === 0) {
    suggestions.push('Add tags for better content organization and internal linking');
    score -= 5;
  }
  
  // Featured image
  if (!post.featured_image) {
    suggestions.push('Add a featured image for better social sharing');
    score -= 5;
  }
  
  return { score: Math.max(0, score), issues, suggestions };
}

/**
 * Generate optimized slug from title
 */
export function generateOptimizedSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    .substring(0, 75); // Limit length
}
