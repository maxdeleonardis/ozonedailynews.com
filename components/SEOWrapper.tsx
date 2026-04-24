/**
 * SEOWrapper — System 3 from duda-js.md
 *
 * Wraps any article/page and injects:
 *   1. NewsArticle JSON-LD structured data
 *   2. BreadcrumbList JSON-LD structured data
 *
 * Both are driven entirely by the content registry so:
 *   - publish dates are real (not filesystem timestamps)
 *   - breadcrumbs are generated automatically from the slug
 *   - no per-page boilerplate required
 *
 * Usage:
 *   import { SEOWrapper } from '@/components/SEOWrapper';
 *
 *   export default function MyArticlePage() {
 *     return (
 *       <SEOWrapper slug="/tech/some-article">
 *         <article>...</article>
 *       </SEOWrapper>
 *     );
 *   }
 */

import { getEntry } from '@/lib/registry-service';

const SITE_URL = 'https://www.objectwire.org';
const ORG_NAME = 'ObjectWire';

interface SEOWrapperProps {
  slug: string;
  children: React.ReactNode;
}

export async function SEOWrapper({ slug, children }: SEOWrapperProps) {
  const entry = await getEntry(slug);

  // ── NewsArticle schema ──────────────────────────────────────────────────────
  // Resolve author URL: use explicit authorSlug, or derive from author name if it
  // looks like a personal name (contains a space, doesn't start with "ObjectWire").
  const authorUrl = (() => {
    if (!entry) return undefined;
    if (entry.authorSlug) return `${SITE_URL}/authors/${entry.authorSlug}`;
    const name = entry.author;
    if (name.startsWith('ObjectWire') || !name.includes(' ')) return undefined;
    return `${SITE_URL}/authors/${name.toLowerCase().replace(/\s+/g, '-')}`;
  })();

  const articleSchema = entry
    ? {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: entry.title,
        description: entry.description,
        datePublished: entry.publishDate,
        dateModified: entry.modifiedDate,
        inLanguage: 'en',
        isAccessibleForFree: true,
        ...(entry.category ? { articleSection: entry.category } : {}),
        author: {
          '@type': 'Person',
          name: entry.author,
          ...(authorUrl ? { url: authorUrl } : {}),
        },
        // sameAs let Google cross-reference the author profile
        ...(authorUrl ? { sameAs: [authorUrl] } : {}),
        publisher: {
          '@type': 'Organization',
          name: ORG_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/objectwire-logo.png`,
          },
        },
        mainEntityOfPage: `${SITE_URL}${slug}`,
        ...(entry.imageUrl
          ? {
              image: {
                '@type': 'ImageObject',
                url: entry.imageUrl,
                width: entry.imageWidth ?? 1200,
                height: entry.imageHeight ?? 675,
                ...(entry.imageAlt ? { caption: entry.imageAlt } : {}),
              },
            }
          : {}),
      }
    : null;

  // ── BreadcrumbList schema ───────────────────────────────────────────────────
  // Auto-generated from slug segments, e.g.
  //   /tech/ai/some-article  →  Home > Tech > Ai > Some Article
  const segments = slug.split('/').filter(Boolean);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...segments.map((segment, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        item: `${SITE_URL}/${segments.slice(0, i + 1).join('/')}`,
      })),
    ],
  };

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
