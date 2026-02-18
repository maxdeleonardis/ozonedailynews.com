import { MetadataRoute } from 'next';
import { contentRegistry } from '@/lib/content-registry';
import { SITE_CONFIG } from '@/lib/site-config';

// Regenerate daily — but dates come from content-registry, not filesystem
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Homepage
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
    },
  ];

  // All registered content — real publish/modify dates, never filesystem timestamps
  const registryEntries: MetadataRoute.Sitemap = contentRegistry.map((entry) => ({
    url: `${baseUrl}${entry.slug}`,
    lastModified: new Date(entry.modifiedDate),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const all = [...staticEntries, ...registryEntries];

  // Deduplicate (registry takes precedence over static)
  const unique = Array.from(
    new Map(all.map((e) => [e.url, e])).values()
  );

  // Sort: priority desc, then lastModified desc
  unique.sort((a, b) => {
    const pDiff = (b.priority ?? 0) - (a.priority ?? 0);
    if (pDiff !== 0) return pDiff;
    return new Date(b.lastModified ?? 0).getTime() - new Date(a.lastModified ?? 0).getTime();
  });

  return unique;
}

