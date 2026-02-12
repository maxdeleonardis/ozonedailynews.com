/**
 * AUTO-SEO — Global structured data injection
 * =============================================
 * Client component that reads the current pathname and injects:
 *   1. BreadcrumbList JSON-LD schema on every page
 *   2. WebPage JSON-LD schema on every page
 *
 * This replaces Duda's automatic structured data injection.
 * Article-specific schema (NewsArticle) is still added per-page
 * via the NewsArticleSchema component for richer data.
 *
 * Added to layout.tsx — runs on every page without editing 200 files.
 */
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SITE_URL = 'https://www.objectwire.org';
const SITE_NAME = 'ObjectWire';

// Human-readable names for common route segments
const SEGMENT_NAMES: Record<string, string> = {
  'news': 'News',
  'finance': 'Finance',
  'technology': 'Technology',
  'winter-olympics': 'Winter Olympics 2026',
  'world-cup': 'World Cup 2026',
  'google': 'Google',
  'apple': 'Apple',
  'microsoft': 'Microsoft',
  'nvidia': 'Nvidia',
  'intel': 'Intel',
  'disney': 'Disney',
  'entertainment': 'Entertainment',
  'youtube': 'YouTube',
  'sidemen': 'Sidemen',
  'influencer': 'Influencers',
  'clothing': 'Clothing',
  'crypto': 'Crypto',
  'saas': 'SaaS',
  'nasa': 'NASA',
  'open-ai': 'OpenAI',
  'elon-musk': 'Elon Musk',
  'social': 'Social Media',
  'video-games': 'Video Games',
  'define': 'Definitions',
  'investigations': 'Investigations',
  'podcasts': 'Podcasts',
  'events': 'Events',
  'blog': 'Blog',
  'cars': 'Cars',
  'artists': 'Artists',
  'college': 'College',
  'ngos': 'NGOs',
  'about': 'About',
  'editorial-standards': 'Editorial Standards',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  'corrections': 'Corrections',
  'team': 'Our Team',
  'search': 'Search',
  'site-index': 'Site Index',
  'usa': 'USA',
  'texas': 'Texas',
  'canada': 'Canada',
  'articles': 'Articles',
  'meta': 'Meta',
  'tiktok': 'TikTok',
  'x-twitter': 'X / Twitter',
  'davos': 'Davos',
  'europa': 'Europa',
  'mha': 'My Hero Academia',
  'nintendo': 'Nintendo',
  'waymo': 'Waymo',
  'skims': 'SKIMS',
  'josh-damaro': "Josh D'Amaro",
};

/**
 * Convert a URL segment to a human-readable name
 */
function segmentToName(segment: string): string {
  if (SEGMENT_NAMES[segment]) return SEGMENT_NAMES[segment];
  // Convert "some-slug-text" → "Some Slug Text"
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * Generate BreadcrumbList schema from pathname
 */
function generateBreadcrumbSchema(pathname: string) {
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    ...segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: segmentToName(segment),
      item: `${SITE_URL}/${segments.slice(0, index + 1).join('/')}`,
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

/**
 * Generate WebPage schema for every page
 */
function generateWebPageSchema(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const pageName = segments.length > 0
    ? segmentToName(segments[segments.length - 1])
    : SITE_NAME;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageName,
    url: `${SITE_URL}${pathname}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export default function AutoSEO() {
  const pathname = usePathname();
  const [schemas, setSchemas] = useState<string>('');

  useEffect(() => {
    const allSchemas: object[] = [];

    // BreadcrumbList (skip for homepage)
    const breadcrumb = generateBreadcrumbSchema(pathname);
    if (breadcrumb) {
      allSchemas.push(breadcrumb);
    }

    // WebPage
    allSchemas.push(generateWebPageSchema(pathname));

    setSchemas(JSON.stringify(allSchemas));
  }, [pathname]);

  if (!schemas) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemas }}
    />
  );
}
