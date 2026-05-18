/**
 * GEOArticleWrapper.tsx
 *
 * Drop-in wrapper that adds GEO (Generative Engine Optimization) structured
 * data to any article page without modifying the article component itself.
 *
 * Adds three schema.org blocks:
 *   1. SpeakableSpecification — marks which parts of the page are
 *      suitable for voice/AI audio reading (Google Assistant, Siri)
 *   2. ClaimReview (optional) — for fact-checked claims
 *   3. Enhanced NewsArticle — with speakable, isBasedOn, and
 *      mentions arrays for entity disambiguation
 *
 * Also renders the llms.txt link in the document head (backup discovery).
 *
 * Usage (in page.tsx stub or DB component):
 *   import { GEOArticleWrapper } from '@/components/geo/GEOArticleWrapper';
 *
 *   <GEOArticleWrapper
 *     headline="GTA 6 Release Date | Everything Confirmed by Rockstar"
 *     description="Rockstar confirmed fall 2025..."
 *     authorName="Michael Cripe"
 *     authorUrl="https://www.ozonenetwork.news/authors/michael-cripe"
 *     publishedAt="2026-05-01T12:00:00Z"
 *     articleUrl="https://www.ozonenetwork.news/video-games/gta-6/release-date"
 *     imageUrl="https://www.ozonenetwork.news/images/gta6-hero.jpg"
 *     section="Gaming"
 *     keywords={['GTA 6', 'GTA 6 release date', 'Rockstar Games']}
 *     speakableSelectors={['h1', '.direct-answer', '.key-takeaways']}
 *   >
 *     {children}
 *   </GEOArticleWrapper>
 */

import React from 'react';

export interface GEOArticleWrapperProps {
  headline: string;
  description: string;
  authorName: string;
  authorUrl: string;
  publishedAt: string;
  modifiedAt?: string;
  articleUrl: string;
  imageUrl?: string;
  section?: string;
  keywords?: string[];
  /** CSS selectors for speakable sections — defaults cover all common patterns */
  speakableSelectors?: string[];
  /** Entity mentions — names, orgs, products mentioned in the article */
  mentions?: { name: string; url?: string; type?: 'Person' | 'Organization' | 'Product' | 'Place' }[];
  children: React.ReactNode;
}

export function GEOArticleWrapper({
  headline,
  description,
  authorName,
  authorUrl,
  publishedAt,
  modifiedAt,
  articleUrl,
  imageUrl,
  section = 'News',
  keywords = [],
  speakableSelectors = ['h1', 'h2', '[data-speakable]', '.direct-answer', '.citation-block'],
  mentions = [],
  children,
}: GEOArticleWrapperProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': headline,
    'description': description,
    'datePublished': publishedAt,
    'dateModified': modifiedAt || publishedAt,
    'author': {
      '@type': 'Person',
      'name': authorName,
      'url': authorUrl,
    },
    'publisher': {
      '@type': 'NewsMediaOrganization',
      'name': 'ObjectWire',
      'url': 'https://www.ozonenetwork.news',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.ozonenetwork.news/objectwire-logo.png',
        'width': 600,
        'height': 60,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    ...(imageUrl ? {
      'image': {
        '@type': 'ImageObject',
        'url': imageUrl,
        'width': 1200,
        'height': 675,
      }
    } : {}),
    'articleSection': section,
    'keywords': keywords.join(', '),
    'isAccessibleForFree': true,
    'inLanguage': 'en-US',
    // Speakable — tells Google Assistant / AI voice systems which sections to read
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': speakableSelectors,
    },
    // Mentions — entity disambiguation for AI knowledge graphs
    ...(mentions.length > 0 ? {
      'mentions': mentions.map(m => ({
        '@type': m.type || 'Thing',
        'name': m.name,
        ...(m.url ? { 'url': m.url } : {}),
      })),
    } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}

export default GEOArticleWrapper;
