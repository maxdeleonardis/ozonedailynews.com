// =============================================================================
// CONTENT REGISTRY — ObjectWire Central Content Metadata
// =============================================================================
// ALL DATA NOW LIVES IN SUPABASE (content_registry table).
//
// This file only exports:
//   1. Type definitions (ContentEntry, ChangeFrequency)
//   2. An empty contentRegistry array (sync fallback for registry-service.ts)
//   3. Sync helper functions (used as fallbacks by registry-service.ts)
//   4. registerPage() factory
//
// For runtime data, import from '@/lib/registry-service' instead.
// =============================================================================

export type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface ContentEntry {
  slug: string;             // URL path, e.g. "/winter-olympics/usa/breezy-johnson"
  title: string;            // Page title (used in <title> and structured data)
  description: string;      // Meta description — max 160 chars
  publishDate: string;      // ISO date: "2026-02-11"
  modifiedDate: string;     // ISO date: last edit
  category: string;         // Primary section label
  tags: string[];           // Topic tags for related-article matching
  author: string;           // Byline name (display name)
  authorSlug?: string;      // URL slug for author profile, e.g. "conan-boyle" → /authors/conan-boyle
  priority: number;         // Sitemap priority 0.0–1.0
  changeFrequency: ChangeFrequency;
  featured?: boolean;       // Show in homepage hero/featured slot
  imageUrl?: string;        // OG / article hero image
  imageWidth?: number;      // Pixel width  — required for Google Top Stories carousel (min 1200)
  imageHeight?: number;     // Pixel height — required for Google Top Stories carousel (min 675, 16:9)
  imageAlt?: string;        // Alt text for the hero image
  imageCredit?: string;     // Attribution string
}

// Empty array — sync fallback only. All data is in Supabase.
export const contentRegistry: ContentEntry[] = [
  // --- Auto-added by wiki:publish 2026-04-18 ---
  {
    slug: "/video-games/forza-horizon-6/news/pre-launch-511k-steam-presales-alinea-analytics-2026",
    title: "Forza Horizon 6 | 511K Steam Pre-Sales, $30M Revenue Before Launch",
    description: "Alinea Analytics data from April 15 projects a 2-million-unit day-one on Steam, a franchise record driven by the Japan setting, a viral gameplay reveal, and a solo-friendly achievement list.",
    publishDate: "April 18, 2026",
    modifiedDate: "2026-04-18",
    category: "Gaming",
    tags: ["Forza Horizon 6 Steam pre-sales","Forza Horizon 6 511000 pre-orders","Forza Horizon 6 $30 million revenue","Alinea Analytics Forza Horizon 6","Forza Horizon 6 2 million day one"],
    author: "Jack Sterling",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://www.objectwire.org/entertainment/forza_horizon_6.PNG",
    imageWidth: 1200,
    imageHeight: 675,
  },
  // --- Auto-added by wiki:publish 2026-04-19 ---
  {
    slug: "/youtube/sidemen/charity-match-results-2026",
    title: "Sidemen Charity Match 2026 | 10-10 Draw, YouTube Allstars Win Penalty Shootout, £6,218,875 Raised",
    description: "A sold-out Wembley Stadium witnessed 20 goals, the most in the event's history, before YouTube Allstars won 4-1 on penalties to claim back-to-back victories. Jynxzi was Man of the Match. Miniminter scored a hat-trick.",
    publishDate: "April 19, 2026",
    modifiedDate: "2026-04-19",
    category: "Entertainment",
    tags: ["Sidemen Charity Match 2026 results","Sidemen Charity Match score","YouTube Allstars vs Sidemen FC 2026","Sidemen Charity Match Wembley 2026","Jynxzi Man of the Match"],
    author: "ObjectWire Entertainment Desk",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://www.objectwire.org/influncer/sdmn_charitymatch_26.webp",
    imageWidth: 1200,
    imageHeight: 675,
  },
];

// =============================================================================
// SYNC HELPER FUNCTIONS (used as fallbacks by registry-service.ts)
// When Supabase is unreachable, these operate on the empty array above,
// which means they return []. This is safe — the site degrades gracefully.
// =============================================================================

export function getFeaturedArticles(): ContentEntry[] {
  return contentRegistry
    .filter((e) => e.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

const HUB_SLUGS = new Set([
  '/', '/news', '/tech', '/technology', '/finance', '/search', '/site-index',
  '/youtube', '/editorial-standards', '/social', '/entertainment', '/blog',
  '/about', '/team', '/privacy-policy', '/terms-of-service', '/copyright',
  '/corrections', '/get-help', '/service', '/index', '/feeds', '/crypto',
  '/artists', '/influencer', '/saas', '/research', '/objectwire',
  '/podcasts', '/video-games', '/winter-olympics', '/world-cup', '/formula-1',
  '/redbull', '/disney', '/elon-musk', '/google', '/apple', '/nvidia',
  '/microsoft', '/open-ai', '/github', '/nasa', '/intel', '/beastgames',
  '/bio-hacking', '/earth', '/ngos', '/cars', '/clothing', '/events',
  '/bank-of-america', '/austin-private-detective-agency', '/missing-persons',
  '/investigations', '/college', '/define', '/authors', '/politics',
  '/amazon', '/tiktok', '/trump', '/cuba',
]);

const HUB_CATEGORIES = new Set(['Meta', 'Support', 'Services', 'Legal']);

function isRealArticle(e: ContentEntry): boolean {
  if (HUB_SLUGS.has(e.slug)) return false;
  if (HUB_CATEGORIES.has(e.category)) return false;
  const parts = e.slug.split('/').filter(Boolean);
  if (parts.length < 2) return false;
  if (e.description.length < 60) return false;
  if (e.title.startsWith('›') || e.title.startsWith('ObjectWire coverage')) return false;
  return true;
}

export function getLatestArticles(limit = 10): ContentEntry[] {
  return [...contentRegistry]
    .filter(isRealArticle)
    .sort((a, b) => {
      const dateDiff = new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      if (dateDiff !== 0) return dateDiff;
      const modDiff = new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime();
      if (modDiff !== 0) return modDiff;
      return (b.priority ?? 0) - (a.priority ?? 0);
    })
    .slice(0, limit);
}

export function getArticlesByCategory(category: string, limit?: number): ContentEntry[] {
  const results = contentRegistry
    .filter((e) => e.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? results.slice(0, limit) : results;
}

export function getRelatedArticles(slug: string, limit = 5): ContentEntry[] {
  const current = contentRegistry.find((e) => e.slug === slug);
  if (!current) return getLatestArticles(limit);
  return contentRegistry
    .filter((e) => e.slug !== slug)
    .map((e) => ({
      entry: e,
      score:
        (e.category === current.category ? 3 : 0) +
        e.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.entry.publishDate).getTime() - new Date(a.entry.publishDate).getTime())
    .slice(0, limit)
    .map((e) => e.entry);
}

export function getEntry(slug: string): ContentEntry | undefined {
  return contentRegistry.find((e) => e.slug === slug);
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  for (const entry of contentRegistry) {
    for (const tag of entry.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }
  return [...tagMap.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getEntriesByTag(tag: string, limit?: number): ContentEntry[] {
  const results = contentRegistry
    .filter((e) => e.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? results.slice(0, limit) : results;
}

export function getEntriesByAuthor(authorSlug: string): ContentEntry[] {
  return contentRegistry
    .filter((e) => e.authorSlug === authorSlug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

// =============================================================================
// registerPage() — factory helper
// =============================================================================

export function registerPage(
  slug: string,
  title: string,
  description: string,
  overrides: Partial<Omit<ContentEntry, 'slug' | 'title' | 'description'>> = {}
): ContentEntry {
  const today = new Date().toISOString().split('T')[0];
  return {
    slug,
    title,
    description,
    publishDate: today,
    modifiedDate: today,
    category: 'General',
    tags: [],
    author: 'ObjectWire Editorial',
    priority: 0.7,
    changeFrequency: 'weekly',
    ...overrides,
  };
}
