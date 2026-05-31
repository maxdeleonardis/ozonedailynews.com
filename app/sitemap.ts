// app/sitemap.ts
// Driven entirely by content_registry.json. No deploy-timestamp faking.
// Never hardcode canonical in layout.tsx. Each page.tsx sets its own.
//
// Registry slugs may be either:
//   - Relative paths:  "/nasa/news/article-slug"  (new CMS-published articles)
//   - Absolute URLs:   "https://www.ozonedailynews.com/nasa/news/article-slug"  (legacy sync-registry entries)
// toAbsolute() normalises both to a full URL.

import type { MetadataRoute } from 'next';
import { getAllEntries } from '@/lib/registry-service';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400; // Daily — busted immediately on publish via revalidatePath

/** Normalise a registry slug to a full absolute URL regardless of whether it's relative or absolute. */
function toAbsolute(slug: string, baseUrl: string): string {
  if (slug.startsWith('http://') || slug.startsWith('https://')) return slug;
  return `${baseUrl}${slug.startsWith('/') ? slug : `/${slug}`}`;
}

/** Extract the pathname from a registry slug (handles both relative and absolute). */
function toPathname(slug: string): string {
  if (slug.startsWith('http://') || slug.startsWith('https://')) {
    try { return new URL(slug).pathname; } catch { return slug; }
  }
  return slug.startsWith('/') ? slug : `/${slug}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  const entries = await getAllEntries();

  // Sub-brand scope filters — skipped when null (flagship default)
  const { validCategories, slugPrefixes } = SITE_CONFIG;

  const articleUrls: MetadataRoute.Sitemap = entries
    .filter((e) => e.lifecycle !== 'pruned')
    .filter((e) => {
      if (!validCategories) return true;
      return validCategories.includes(e.category);
    })
    .filter((e) => {
      if (!slugPrefixes) return true;
      const pathname = toPathname(e.slug);
      return slugPrefixes.some((prefix) => pathname.startsWith(prefix));
    })
    .map((entry) => ({
      url: toAbsolute(entry.slug, baseUrl),
      lastModified: new Date(entry.modifiedDate || entry.publishDate),
      changeFrequency: entry.changeFrequency,
      priority: entry.lifecycle === 'feature' ? 0.9 : entry.priority,
    }));

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                             lastModified: new Date(), changeFrequency: 'hourly',  priority: 1.0 },
    { url: `${baseUrl}/news`,                   lastModified: new Date(), changeFrequency: 'hourly',  priority: 0.9 },
    { url: `${baseUrl}/space`,                  lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    { url: `${baseUrl}/rockets`,                lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    { url: `${baseUrl}/science`,                lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    { url: `${baseUrl}/engineering`,            lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    { url: `${baseUrl}/defense`,                lastModified: new Date(), changeFrequency: 'daily',   priority: 0.7 },
    { url: `${baseUrl}/policy`,                 lastModified: new Date(), changeFrequency: 'daily',   priority: 0.7 },
    { url: `${baseUrl}/about`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/editorial-standards`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/corrections`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.5 },
    { url: `${baseUrl}/contact`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/terms-of-service`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  return [...staticPages, ...articleUrls];
}
