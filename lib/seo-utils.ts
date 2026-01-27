/**
 * SEO Utilities for ObjectWire
 * 
 * Comprehensive SEO standards and helper functions to ensure all pages
 * follow best practices for search engine optimization.
 * 
 * Standards enforced:
 * 1. Structured data (Schema.org JSON-LD)
 * 2. Open Graph metadata
 * 3. Twitter Card metadata
 * 4. Proper meta tags with keywords
 * 5. Canonical URLs
 * 6. Fresh publication/modified dates
 * 7. External authoritative links
 */

import type { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
  category?: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
}

/**
 * Generate complete metadata object with all SEO best practices
 */
export function generateArticleMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    publishedTime,
    modifiedTime,
    authors = ['ObjectWire Editorial Team'],
    category = 'News',
    tags = [],
    image = 'https://www.objectwire.org/og-default.png',
    imageAlt = 'ObjectWire - Independent News & Analysis',
  } = config;

  // Ensure title includes ObjectWire branding and year for freshness
  const year = new Date(modifiedTime || publishedTime).getFullYear();
  const brandedTitle = title.includes('ObjectWire') 
    ? title 
    : `${title} | ObjectWire`;

  return {
    title: brandedTitle,
    description: description,
    keywords: keywords,
    
    // Open Graph
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: 'ObjectWire',
      type: 'article',
      publishedTime: publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: authors,
      tags: [...tags, category],
      images: [
        {
          url: image,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [image],
    },
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Additional metadata
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime || publishedTime,
      'article:section': category,
      'article:tag': tags.join(', '),
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate Schema.org NewsArticle structured data
 */
export function generateNewsArticleSchema(config: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  url: string;
  imageUrl?: string;
  category?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": config.headline,
    "description": config.description,
    "datePublished": config.datePublished,
    "dateModified": config.dateModified || config.datePublished,
    "author": {
      "@type": config.authorUrl ? "Organization" : "Person",
      "name": config.authorName,
      "url": config.authorUrl || "https://www.objectwire.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ObjectWire",
      "url": "https://www.objectwire.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.objectwire.org/logo.png",
        "width": 600,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": config.url
    },
    "image": config.imageUrl || "https://www.objectwire.org/og-default.png",
    "articleSection": config.category || "News",
    "keywords": config.keywords?.join(', ') || ""
  };
}

/**
 * Generate Schema.org BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

/**
 * SEO Best Practices Checklist
 * 
 * Use this to validate your pages:
 * 
 * ✅ Title Tag
 *    - 50-60 characters
 *    - Includes primary keyword
 *    - Includes year/date for news content
 *    - Includes brand name (ObjectWire)
 * 
 * ✅ Meta Description
 *    - 150-160 characters
 *    - Compelling call-to-action
 *    - Includes primary and secondary keywords
 *    - Updated with "UPDATED [DATE]" for freshness
 * 
 * ✅ Keywords
 *    - 10-15 relevant keywords
 *    - Mix of broad and long-tail keywords
 *    - Include branded terms
 *    - Include trending search terms
 * 
 * ✅ Open Graph Tags
 *    - og:title, og:description, og:url
 *    - og:type = "article"
 *    - og:image (1200x630px)
 *    - article:published_time, article:modified_time
 *    - article:author, article:section, article:tag
 * 
 * ✅ Twitter Card
 *    - twitter:card = "summary_large_image"
 *    - twitter:title, twitter:description
 *    - twitter:image
 * 
 * ✅ Structured Data (JSON-LD)
 *    - NewsArticle or Article schema
 *    - BreadcrumbList schema
 *    - Organization/Person schema for authors
 * 
 * ✅ Canonical URL
 *    - Self-referencing canonical tag
 *    - Absolute URL format
 * 
 * ✅ Fresh Dates
 *    - Published date in ISO 8601 format
 *    - Modified date when updated
 *    - Visible "Updated [DATE]" badge for users
 * 
 * ✅ External Links
 *    - Link to 3-5 authoritative sources
 *    - AP, Reuters, WSJ, Bloomberg, etc.
 *    - Government sources (.gov)
 *    - Academic sources (.edu)
 *    - Use rel="noopener noreferrer" for security
 * 
 * ✅ Internal Links
 *    - 5-10 relevant internal links
 *    - Link to related articles
 *    - Link to topic/category pages
 *    - Descriptive anchor text
 * 
 * ✅ Content Quality
 *    - 1500+ words for in-depth articles
 *    - Proper heading hierarchy (H1 > H2 > H3)
 *    - Short paragraphs (3-4 sentences)
 *    - Lists and bullet points for scannability
 *    - Images with descriptive alt text
 * 
 * ✅ Mobile Optimization
 *    - Responsive design
 *    - Fast loading (< 3 seconds)
 *    - Readable font sizes
 *    - Touch-friendly buttons
 * 
 * ✅ Technical SEO
 *    - HTTPS enabled
 *    - XML sitemap
 *    - robots.txt configured
 *    - Clean URL structure
 *    - No broken links
 */

/**
 * Validate SEO configuration
 */
export function validateSEO(config: SEOConfig): {
  valid: boolean;
  warnings: string[];
  errors: string[];
} {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Title validation
  if (config.title.length < 50) {
    warnings.push(`Title is short (${config.title.length} chars). Aim for 50-60 characters.`);
  }
  if (config.title.length > 60) {
    warnings.push(`Title is long (${config.title.length} chars). May be truncated in search results.`);
  }
  if (!config.title.includes('ObjectWire') && !config.title.includes('|')) {
    warnings.push('Title should include "ObjectWire" branding.');
  }

  // Description validation
  if (config.description.length < 150) {
    warnings.push(`Description is short (${config.description.length} chars). Aim for 150-160 characters.`);
  }
  if (config.description.length > 160) {
    warnings.push(`Description is long (${config.description.length} chars). May be truncated in search results.`);
  }

  // Keywords validation
  if (config.keywords.length < 5) {
    warnings.push(`Only ${config.keywords.length} keywords. Add more relevant keywords (aim for 10-15).`);
  }
  if (config.keywords.length > 20) {
    warnings.push(`Too many keywords (${config.keywords.length}). Focus on 10-15 most relevant.`);
  }

  // Date validation
  const publishedDate = new Date(config.publishedTime);
  const now = new Date();
  const daysSincePublished = Math.floor((now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysSincePublished > 30 && !config.modifiedTime) {
    warnings.push(`Article is ${daysSincePublished} days old without updates. Consider adding fresh content and modifiedTime.`);
  }

  // URL validation
  if (!config.canonicalUrl.startsWith('https://')) {
    errors.push('Canonical URL must use HTTPS.');
  }
  if (!config.canonicalUrl.includes('objectwire.org')) {
    errors.push('Canonical URL must be on objectwire.org domain.');
  }

  return {
    valid: errors.length === 0,
    warnings,
    errors,
  };
}

/**
 * Common external authoritative sources for citations
 */
export const AUTHORITATIVE_SOURCES = {
  NEWS: [
    { name: 'Associated Press', url: 'https://apnews.com/' },
    { name: 'Reuters', url: 'https://www.reuters.com/' },
    { name: 'Bloomberg', url: 'https://www.bloomberg.com/' },
    { name: 'Wall Street Journal', url: 'https://www.wsj.com/' },
    { name: 'Financial Times', url: 'https://www.ft.com/' },
  ],
  GOVERNMENT: [
    { name: 'Federal Reserve', url: 'https://www.federalreserve.gov/' },
    { name: 'SEC', url: 'https://www.sec.gov/' },
    { name: 'Department of Justice', url: 'https://www.justice.gov/' },
    { name: 'White House', url: 'https://www.whitehouse.gov/' },
    { name: 'Congress.gov', url: 'https://www.congress.gov/' },
  ],
  LEGAL: [
    { name: 'PACER', url: 'https://pacer.uscourts.gov/' },
    { name: 'Supreme Court', url: 'https://www.supremecourt.gov/' },
    { name: 'Justia', url: 'https://www.justia.com/' },
  ],
  FINANCIAL: [
    { name: 'FDIC', url: 'https://www.fdic.gov/' },
    { name: 'FINRA', url: 'https://www.finra.org/' },
    { name: 'Federal Reserve', url: 'https://www.federalreserve.gov/' },
  ],
};
