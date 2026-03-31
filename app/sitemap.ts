import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { createClient } from '@/lib/supabase/server';

// Regenerate daily — but dates come from content-registry, not filesystem
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // All registered static content — from Supabase content_registry (auto-synced on build)
  let registryEntries: MetadataRoute.Sitemap = [];
  try {
    const supabase = await createClient();
    const { data: regRows } = await supabase
      .from('content_registry')
      .select('slug, modified_date, change_frequency, priority');
    registryEntries = (regRows || []).map((entry) => ({
      url: `${baseUrl}${entry.slug}`,
      lastModified: new Date(entry.modified_date),
      changeFrequency: entry.change_frequency as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: Number(entry.priority),
    }));
  } catch {
    // Supabase unavailable — sitemap will include homepage + blog posts only
  }

  // All article URLs come from the content_registry (auto-synced on build).
  // No separate /blog/[slug] routes exist — removed legacy blog entries.
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
