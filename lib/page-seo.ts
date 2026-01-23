// =============================================================================
// PAGE SEO HELPER - Easy metadata generation for any page
// Use this in your page.tsx files for consistent SEO
// =============================================================================

import { Metadata } from 'next';

const BASE_URL = 'https://objectwire.org';
const SITE_NAME = 'ObjectWire';
const DEFAULT_IMAGE = '/og-image.png';

// =============================================================================
// TYPES
// =============================================================================

export interface PageSEOProps {
  // Required
  title: string;
  description: string;
  slug: string;
  
  // Optional
  keywords?: string[];
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  
  // Control
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface ArticlePageSEOProps extends PageSEOProps {
  publishedTime: string;
  author: string;
  section: string;
}

export interface WikiPageSEOProps extends PageSEOProps {
  subject: string;
}

// =============================================================================
// METADATA GENERATORS
// =============================================================================

/**
 * Generate standard page metadata
 * Use for static pages, about pages, etc.
 */
export function createPageMetadata(props: PageSEOProps): Metadata {
  const {
    title,
    description,
    slug,
    keywords = [],
    image = DEFAULT_IMAGE,
    author,
    noIndex = false,
    noFollow = false,
  } = props;

  const canonicalUrl = `${BASE_URL}/${slug}`.replace(/\/+$/, '');
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : [{ name: 'ObjectWire Editorial Team' }],
    
    // CRITICAL: Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Robots
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
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
  };
}

/**
 * Generate article/news page metadata
 * Optimized for Google News and social sharing
 */
export function createArticleMetadata(props: ArticlePageSEOProps): Metadata {
  const {
    title,
    description,
    slug,
    keywords = [],
    image = DEFAULT_IMAGE,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags = [],
    noIndex = false,
    noFollow = false,
  } = props;

  const canonicalUrl = `${BASE_URL}/${slug}`.replace(/\/+$/, '');
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: author }],
    
    // CRITICAL: Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Robots
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
    
    // Open Graph - Article type
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: [author],
      section,
      tags,
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
    
    // Additional meta for news
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime || publishedTime,
      'article:author': author,
      'article:section': section,
      'article:tag': tags.join(', '),
      'news_keywords': keywords.join(', '),
    },
  };
}

/**
 * Generate wiki/encyclopedia page metadata
 */
export function createWikiMetadata(props: WikiPageSEOProps): Metadata {
  const {
    title,
    description,
    slug,
    subject,
    keywords = [],
    image = DEFAULT_IMAGE,
    modifiedTime,
    noIndex = false,
    noFollow = false,
  } = props;

  const canonicalUrl = `${BASE_URL}/${slug}`.replace(/\/+$/, '');
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  
  // Enhance keywords with subject
  const enhancedKeywords = [
    subject,
    `${subject} wiki`,
    `${subject} information`,
    ...keywords,
  ];

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: enhancedKeywords,
    authors: [{ name: 'ObjectWire Editorial Team' }],
    
    // CRITICAL: Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Robots
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
      type: 'article',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(modifiedTime && { modifiedTime }),
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
  };
}

// =============================================================================
// DYNAMIC METADATA GENERATOR (for [slug] routes)
// =============================================================================

/**
 * Generate metadata from fetched content
 * Use in generateMetadata() function of dynamic routes
 */
export function createDynamicMetadata(
  content: {
    title: string;
    description?: string;
    excerpt?: string;
    slug: string;
    image?: string;
    author?: string;
    publishedAt?: string;
    updatedAt?: string;
    category?: string;
    tags?: string[];
  },
  type: 'article' | 'wiki' | 'page' = 'article'
): Metadata {
  const description = content.description || content.excerpt || `Read about ${content.title} on ${SITE_NAME}`;
  
  if (type === 'article' && content.publishedAt && content.author) {
    return createArticleMetadata({
      title: content.title,
      description,
      slug: content.slug,
      image: content.image,
      author: content.author,
      publishedTime: content.publishedAt,
      modifiedTime: content.updatedAt,
      section: content.category || 'News',
      tags: content.tags,
      keywords: content.tags,
    });
  }
  
  if (type === 'wiki') {
    return createWikiMetadata({
      title: content.title,
      description,
      slug: content.slug,
      subject: content.title,
      image: content.image,
      modifiedTime: content.updatedAt,
      keywords: content.tags,
    });
  }
  
  return createPageMetadata({
    title: content.title,
    description,
    slug: content.slug,
    image: content.image,
    author: content.author,
    keywords: content.tags,
  });
}

// =============================================================================
// EXPORTS
// =============================================================================

export const PageSEO = {
  createPageMetadata,
  createArticleMetadata,
  createWikiMetadata,
  createDynamicMetadata,
  BASE_URL,
  SITE_NAME,
};

export default PageSEO;
