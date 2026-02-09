// Page SEO utilities
import type { Metadata } from 'next';

export function generatePageMetadata(title: string, description: string, url: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
  };
}

export function createWikiMetadata(options: {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  url?: string;
}): Metadata {
  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    alternates: {
      canonical: options.canonical,
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url: options.url,
    },
  };
}
