/**
 * ProfilePageSchema — JSON-LD structured data for /influencer creator profile pages.
 *
 * Uses schema.org ProfilePage + Person, which enables:
 *  - Google Knowledge Panel eligibility
 *  - People Also Search cards
 *  - Social profile sameAs links in search results
 *
 * Replace NewsArticleSchema on all CreatorArticle pages.
 */

import { SITE_CONFIG } from '@/lib/site-config';

export interface ProfilePageSchemaProps {
  /** Creator's full display name */
  personName: string;
  /** Page title / SEO title */
  pageTitle: string;
  /** Meta description */
  description: string;
  /** Canonical page URL — must be https://www.ozonenetwork.news/... */
  pageUrl: string;
  /** Full image URL for the person */
  imageUrl?: string;
  /** ISO-8601 published timestamp */
  publishedTime: string;
  /** ISO-8601 modified timestamp */
  modifiedTime?: string;
  /**
   * Social profile URLs extracted from the sidebar infobox rows.
   * Any row with an href that starts with http is included.
   */
  sameAs?: string[];
  /** Keywords / tags for the page */
  keywords?: string[];
}

export function ProfilePageSchema({
  personName,
  pageTitle,
  description,
  pageUrl,
  imageUrl,
  publishedTime,
  modifiedTime,
  sameAs = [],
  keywords = [],
}: ProfilePageSchemaProps) {
  const base = SITE_CONFIG.url;

  // Filter to real external social URLs only (exclude our own domain + mailto)
  const socialUrls = sameAs.filter(
    (url) =>
      url.startsWith('http') &&
      !url.startsWith(base) &&
      !url.startsWith('mailto:'),
  );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'name': pageTitle,
    'description': description,
    'url': pageUrl,
    'datePublished': publishedTime,
    'dateModified': modifiedTime || publishedTime,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      'name': SITE_CONFIG.name,
      'url': base,
    },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': base },
        { '@type': 'ListItem', 'position': 2, 'name': 'Influencer', 'item': `${base}/influencer` },
        { '@type': 'ListItem', 'position': 3, 'name': personName, 'item': pageUrl },
      ],
    },
    'mainEntity': {
      '@type': 'Person',
      'name': personName,
      'description': description,
      ...(imageUrl && {
        'image': {
          '@type': 'ImageObject',
          'url': imageUrl.startsWith('http') ? imageUrl : `${base}${imageUrl}`,
          'width': 1200,
          'height': 675,
        },
      }),
      'url': pageUrl,
      ...(socialUrls.length > 0 && { 'sameAs': socialUrls }),
      ...(keywords.length > 0 && { 'knowsAbout': keywords.slice(0, 8) }),
    },
    'author': {
      '@type': 'Organization',
      'name': SITE_CONFIG.publisherName,
      'url': base,
    },
    'publisher': {
      '@type': 'NewsMediaOrganization',
      'name': SITE_CONFIG.publisherName,
      'url': base,
      'logo': {
        '@type': 'ImageObject',
        'url': SITE_CONFIG.logo,
        'width': 600,
        'height': 60,
      },
    },
    ...(keywords.length > 0 && { 'keywords': keywords.join(', ') }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
