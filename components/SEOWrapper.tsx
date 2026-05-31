// components/SEOWrapper.tsx
// Injects NewsArticle + BreadcrumbList JSON-LD on any page that uses it.
// Driven by content registry — slug must exist in content_registry.json.

import { getEntry } from '@/lib/registry-service';
import { SITE_CONFIG } from '@/lib/site-config';
import { buildArticleSchema } from '@/lib/article-schema';

interface SEOWrapperProps {
  slug: string;
  children: React.ReactNode;
}

export async function SEOWrapper({ slug, children }: SEOWrapperProps) {
  const entry = await getEntry(slug);
  if (!entry) return <>{children}</>;

  // Single source of article JSON-LD — same builder the catch-all route uses.
  // Picks NewsArticle vs Article from articleType/lifecycle (evergreen → Article)
  // and links the byline to its full registered Person entity (the trust graph).
  const articleSchema = buildArticleSchema({
    title: entry.title,
    description: entry.description,
    imageUrl: entry.imageUrl,
    imageWidth: entry.imageWidth,
    imageHeight: entry.imageHeight,
    datePublished: entry.publishDate,
    dateModified: entry.modifiedDate,
    authorName: entry.author,
    authorSlug: entry.authorSlug,
    canonicalUrl: `${SITE_CONFIG.url}${entry.slug}`,
    tags: entry.tags,
    category: entry.category,
    articleType: entry.articleType,
    lifecycle: entry.lifecycle,
  });

  const segments = entry.slug.split('/').filter(Boolean);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.url,
      },
      ...segments.map((segment, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        item: `${SITE_CONFIG.url}/${segments.slice(0, i + 1).join('/')}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
