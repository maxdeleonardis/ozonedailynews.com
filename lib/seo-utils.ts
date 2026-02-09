// SEO utilities for articles
import type { Metadata } from 'next';

export interface ArticleMetadataOptions {
  title: string;
  description: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  authors?: string[];
  section?: string;
  category?: string;
  tags?: string[];
  keywords?: string[];
  images?: string[];
  url?: string;
  canonicalUrl?: string;
  canonical?: string;
  ogImage?: string;
}

export function generateArticleMetadata(options: ArticleMetadataOptions): Metadata {
  const {
    title,
    description,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    images = [],
    url = '',
  } = options;

  return {
    title,
    description,
    authors: author ? [{ name: author }] : undefined,
    keywords: tags,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
      tags,
      images: images.map(img => ({ url: img })),
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}
