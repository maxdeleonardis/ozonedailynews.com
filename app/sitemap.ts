import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { createClient } from '@/lib/supabase/server';

// Regenerate daily — but dates come from content-registry, not filesystem
export const revalidate = 86400;

// ─── Non-indexable path patterns ─────────────────────────────────────────────
// These should NEVER appear in the sitemap:
const SITEMAP_BLOCKLIST = [
  '/login', '/account', '/saved', '/profile', '/search', '/auth',
  '/admin', '/api/', '/feed', '/rss', '/news-sitemap', '/sitemap',
  '[', ']',  // dynamic route templates (e.g. /profile/[username])
];

// Only slugs that still have a live page.tsx are valid
// (all deleted pages now 301-redirect; no point listing them)
const VALID_SLUG_PREFIXES = [
  '/', '/news', '/define/', '/youtube/', '/microsoft/', '/google/',
  '/redbull', '/video-games/', '/apple', '/entertainment/',
  '/influencer/', '/technology/', '/tech/', '/bio-hacking/',
  '/saas/', '/open-ai/', '/austin-private-detective-agency',
  '/nvidia/', '/california/', '/copyright/', '/cloudflare/',
  '/events/', '/fortnite/', '/nasa/', '/github', '/disney',
  '/elon-musk/', '/cursor/', '/social/', '/trump/', '/tags/',
  '/intel', '/shopify/', '/comet-ai-', '/clothing/', '/superintelligence-',
  '/crypto', '/amazon',
];

function isIndexable(slug: string): boolean {
  // Block non-indexable paths
  for (const blocked of SITEMAP_BLOCKLIST) {
    if (slug.includes(blocked)) return false;
  }
  // Must match a valid prefix
  for (const prefix of VALID_SLUG_PREFIXES) {
    if (slug === prefix || slug.startsWith(prefix)) return true;
  }
  return false;
}

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
    registryEntries = (regRows || [])
      .filter((entry) => isIndexable(entry.slug))
      .map((entry) => ({
        url: `${baseUrl}${entry.slug}`,
        lastModified: new Date(entry.modified_date),
        changeFrequency: entry.change_frequency as MetadataRoute.Sitemap[number]['changeFrequency'],
        priority: Number(entry.priority),
      }));
  } catch {
    // Supabase unavailable — sitemap will include homepage only
  }

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
