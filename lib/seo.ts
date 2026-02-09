// SEO utilities
import type { Metadata } from 'next';

export function generateSEO(title: string, description: string): Metadata {
  return {
    title,
    description,
  };
}

export function generateArticleMetadata(options: {
  title: string;
  description: string;
  publishedTime?: string;
  author?: string;
  url?: string;
}): Metadata {
  return {
    title: options.title,
    description: options.description,
    openGraph: {
      title: options.title,
      description: options.description,
      type: 'article',
      publishedTime: options.publishedTime,
      url: options.url,
    },
  };
}

export function generateArticleSchema(options: {
  title: string;
  description: string;
  publishedTime?: string;
  author?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    datePublished: options.publishedTime,
    author: {
      "@type": "Person",
      name: options.author || "ObjectWire",
    },
    url: options.url,
  };
}

export const generateNewsArticleSchema = generateArticleSchema;
export const generateBreadcrumbSchema = (items: any[]) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items });
export const generatePersonSchema = (data: any) => ({ "@context": "https://schema.org", "@type": "Person", ...data });
export const generateOrganizationSchema = (data: any) => ({ "@context": "https://schema.org", "@type": "Organization", ...data });
export const generateWebSiteSchema = (data: any) => ({ "@context": "https://schema.org", "@type": "WebSite", ...data });
export const generateFAQSchema = (faqs: any[]) => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs });

export interface ArticleSchemaData {
  title: string;
  description: string;
  publishedTime?: string;
  author?: string;
  url?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}
