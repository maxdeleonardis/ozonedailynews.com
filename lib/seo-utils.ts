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
    authors,
    section,
    category,
    tags,
    keywords,
    images = [],
    url = '',
    canonicalUrl,
    canonical,
    ogImage,
  } = options;

  const resolvedCanonical = canonicalUrl || canonical;
  const resolvedAuthors = authors ?? (author ? [author] : undefined);
  const resolvedKeywords = keywords ?? tags;
  const allImages = ogImage
    ? [ogImage, ...images]
    : images;

  return {
    title,
    description,
    authors: resolvedAuthors ? resolvedAuthors.map(name => ({ name })) : undefined,
    keywords: resolvedKeywords,
    ...(resolvedCanonical ? { alternates: { canonical: resolvedCanonical } } : {}),
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: resolvedAuthors,
      section: section ?? category,
      tags,
      images: allImages.map(img => ({ url: img })),
      url: resolvedCanonical ?? url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: allImages,
    },
  };
}
