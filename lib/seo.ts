// =============================================================================
// SEO UTILITIES - Duda-Level SEO for Next.js
// Production-ready SEO optimizations for Google, Google News, and news aggregators
// =============================================================================

import { Metadata } from 'next';

const BASE_URL = 'https://www.objectwire.org'; // WWW is canonical (Squarespace)
const SITE_NAME = 'ObjectWire';
const DEFAULT_OG_IMAGE = '/og-image.png';

// =============================================================================
// TYPES
// =============================================================================

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogImage?: string;
  ogType?: 'article' | 'website' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface ArticleSEOConfig extends SEOConfig {
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  section: string;
  tags?: string[];
}

export interface WikiSEOConfig extends SEOConfig {
  subject: string;
  lastUpdated?: string;
}

export interface BlogPostFull {
  slug: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  excerpt?: string;
  featured_image?: string;
  tags: string[];
  author: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  category: string;
  blocks: any[];
}

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

// =============================================================================
// BLOG POST SEO (Legacy support)
// =============================================================================

/**
 * Generate optimized SEO metadata for a blog post
 */
export function generateBlogSEOMetadata(post: BlogPostFull, baseUrl: string = BASE_URL): SEOMetadata {
  const url = `${baseUrl}/${post.slug}`;
  
  return {
    title: post.meta_title || `${post.title} | ${SITE_NAME}`,
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
  
  const paragraphBlock = post.blocks.find(
    (block: any) => block.type === 'paragraph' || block.type === 'summary'
  );
  
  if (paragraphBlock?.data?.text) {
    return truncateDescription(paragraphBlock.data.text, 160);
  }
  
  return `Read about ${post.title} on ${SITE_NAME}`;
}

// =============================================================================
// METADATA GENERATORS
// =============================================================================

/**
 * Generate SEO-optimized metadata for any page
 * Follows Duda-level standards for canonical URLs, OG tags, and robots directives
 */
export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    noIndex = false,
    noFollow = false,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = [],
  } = config;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || `${BASE_URL}`;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : [{ name: 'ObjectWire Editorial Team' }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    
    // Canonical URL - CRITICAL for SEO
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Robots directives
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Open Graph
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
      ...(author && { creator: `@${author.toLowerCase().replace(/\s+/g, '')}` }),
    },
  };

  return metadata;
}

/**
 * Generate metadata specifically for news articles
 * Optimized for Google News and news aggregators
 */
export function generateArticleMetadata(config: ArticleSEOConfig): Metadata {
  const baseMetadata = generateSEOMetadata({
    ...config,
    ogType: 'article',
  });

  return {
    ...baseMetadata,
    other: {
      'article:published_time': config.publishedTime,
      'article:modified_time': config.modifiedTime || config.publishedTime,
      'article:author': config.author,
      'article:section': config.section,
      ...(config.tags && { 'article:tag': config.tags.join(', ') }),
      // Google News specific
      'news_keywords': config.keywords?.join(', ') || '',
    },
  };
}

/**
 * Generate metadata for wiki/encyclopedia pages
 */
export function generateWikiMetadata(config: WikiSEOConfig): Metadata {
  const baseMetadata = generateSEOMetadata({
    ...config,
    ogType: 'article',
  });

  return {
    ...baseMetadata,
    other: {
      'article:section': 'Encyclopedia',
      ...(config.lastUpdated && { 'article:modified_time': config.lastUpdated }),
    },
  };
}

// =============================================================================
// STRUCTURED DATA (JSON-LD) GENERATORS
// =============================================================================

export interface ArticleSchemaData {
  title: string;
  description: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  imageUrl?: string;
  articleUrl: string;
  section?: string;
  keywords?: string[];
  wordCount?: number;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate NewsArticle JSON-LD schema
 * Required for Google News indexing
 */
export function generateNewsArticleSchema(data: ArticleSchemaData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: data.title,
    description: data.description,
    image: data.imageUrl ? [data.imageUrl] : [`${BASE_URL}/og-image.png`],
    datePublished: data.publishedTime,
    dateModified: data.modifiedTime || data.publishedTime,
    author: {
      '@type': 'Person',
      name: data.author,
      url: `${BASE_URL}/team/${data.author.toLowerCase().replace(/\s+/g, '-')}`,
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
        width: 600,
        height: 60,
      },
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.articleUrl,
    },
    articleSection: data.section || 'News',
    keywords: data.keywords?.join(', ') || '',
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    ...(data.wordCount && { wordCount: data.wordCount }),
  };
}

/**
 * Generate Article JSON-LD schema (for non-news articles)
 */
export function generateArticleSchema(data: ArticleSchemaData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.imageUrl ? [data.imageUrl] : [`${BASE_URL}/og-image.png`],
    datePublished: data.publishedTime,
    dateModified: data.modifiedTime || data.publishedTime,
    author: {
      '@type': 'Person',
      name: data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.articleUrl,
    },
    inLanguage: 'en-US',
  };
}

/**
 * Generate BreadcrumbList JSON-LD schema
 * Improves SERP appearance with breadcrumb trails
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate Person JSON-LD schema (for biography pages)
 */
export function generatePersonSchema(data: {
  name: string;
  description: string;
  image?: string;
  jobTitle?: string;
  birthDate?: string;
  birthPlace?: string;
  nationality?: string;
  url: string;
  sameAs?: string[];
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    description: data.description,
    ...(data.image && { image: data.image }),
    ...(data.jobTitle && { jobTitle: data.jobTitle }),
    ...(data.birthDate && { birthDate: data.birthDate }),
    ...(data.birthPlace && {
      birthPlace: {
        '@type': 'Place',
        name: data.birthPlace,
      },
    }),
    ...(data.nationality && { nationality: data.nationality }),
    url: data.url,
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
}

/**
 * Generate FAQPage JSON-LD schema
 * Great for featured snippets
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Generate a canonical URL from a slug
 */
export function getCanonicalUrl(slug: string): string {
  const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
  return `${BASE_URL}${cleanSlug}`;
}

/**
 * Generate a sitemap entry
 */
export function generateSitemapEntry(
  slug: string,
  options?: {
    lastModified?: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }
) {
  return {
    url: getCanonicalUrl(slug),
    lastModified: options?.lastModified || new Date(),
    changeFrequency: options?.changeFrequency || 'weekly',
    priority: options?.priority || 0.8,
  };
}

/**
 * Strip HTML tags for meta descriptions
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Truncate text for meta description (max 160 chars)
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  const stripped = stripHtml(text);
  if (stripped.length <= maxLength) return stripped;
  return stripped.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Generate keywords from title and content
 */
export function extractKeywords(title: string, content?: string): string[] {
  const text = `${title} ${content || ''}`.toLowerCase();
  const words = text.split(/\s+/);
  const stopWords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'need',
    'it', 'its', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she',
    'we', 'they', 'what', 'which', 'who', 'when', 'where', 'why', 'how',
  ]);
  
  const keywords = words
    .filter((word) => word.length > 3 && !stopWords.has(word))
    .filter((word, index, self) => self.indexOf(word) === index)
    .slice(0, 10);
  
  return keywords;
}

// =============================================================================
// EXPORTS
// =============================================================================

export const SEO = {
  generateMetadata: generateSEOMetadata,
  generateBlogSEOMetadata,
  generateArticleMetadata,
  generateWikiMetadata,
  generateNewsArticleSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generatePersonSchema,
  generateFAQSchema,
  getCanonicalUrl,
  generateSitemapEntry,
  stripHtml,
  truncateDescription,
  extractKeywords,
  BASE_URL,
  SITE_NAME,
};

export default SEO;
