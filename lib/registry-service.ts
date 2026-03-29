// =============================================================================
// lib/registry-service.ts
// =============================================================================
// Drop-in async replacement for all lib/content-registry.ts helper functions.
// Backed by the Supabase `content_registry` table instead of the static TS array.
//
// The `content-registry.ts` file now only holds the type definitions and an
// empty array stub. All runtime data lives in the DB, keeping compilation fast
// regardless of how many articles exist.
// =============================================================================

import { createClient } from '@/lib/supabase/server';
export type { ContentEntry, ChangeFrequency } from '@/lib/content-registry';
import type { ContentEntry, ChangeFrequency } from '@/lib/content-registry';

// Sync fallbacks — used when Supabase isn't configured or table is empty
import {
  contentRegistry as _syncRegistry,
  getEntry         as _getEntrySync,
  getLatestArticles as _getLatestArticlesSync,
  getFeaturedArticles as _getFeaturedArticlesSync,
  getArticlesByCategory as _getArticlesByCategorySync,
  getRelatedArticles  as _getRelatedArticlesSync,
  getAllTags        as _getAllTagsSync,
  getEntriesByTag   as _getEntriesByTagSync,
  getEntriesByAuthor as _getEntriesByAuthorSync,
} from '@/lib/content-registry';

// ---------------------------------------------------------------------------
// DB row → ContentEntry
// ---------------------------------------------------------------------------
function rowToEntry(row: Record<string, unknown>): ContentEntry {
  return {
    slug:            String(row.slug ?? ''),
    title:           String(row.title ?? ''),
    description:     String(row.description ?? ''),
    publishDate:     String(row.publish_date ?? ''),
    modifiedDate:    String(row.modified_date ?? ''),
    category:        String(row.category ?? 'General'),
    tags:            Array.isArray(row.tags) ? (row.tags as string[]) : [],
    author:          String(row.author ?? 'ObjectWire Editorial'),
    authorSlug:      row.author_slug ? String(row.author_slug) : undefined,
    priority:        Number(row.priority ?? 0.7),
    changeFrequency: String(row.change_frequency ?? 'weekly') as ChangeFrequency,
    featured:        Boolean(row.featured),
    imageUrl:        row.image_url  ? String(row.image_url)  : undefined,
    imageWidth:      row.image_width  ? Number(row.image_width)  : undefined,
    imageHeight:     row.image_height ? Number(row.image_height) : undefined,
    imageAlt:        row.image_alt  ? String(row.image_alt)  : undefined,
    imageCredit:     row.image_credit ? String(row.image_credit) : undefined,
  };
}

// ---------------------------------------------------------------------------
// Shared Supabase helper — returns null + logs on missing env vars
// ---------------------------------------------------------------------------
async function db() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn('[registry-service] Supabase env vars not set, returning empty registry.');
    return null;
  }
  return createClient();
}

// ---------------------------------------------------------------------------
// isRealArticle — same logic as was in content-registry.ts
// ---------------------------------------------------------------------------
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

// =============================================================================
// PUBLIC API
// =============================================================================

/** All entries, sorted newest first — falls back to TS array if Supabase not configured or empty */
export async function getAllEntries(): Promise<ContentEntry[]> {
  const supabase = await db();
  if (!supabase) return _syncRegistry;

  const { data, error } = await supabase
    .from('content_registry')
    .select('*')
    .order('publish_date', { ascending: false });

  if (error) { console.error('[registry-service] getAllEntries:', error.message); return _syncRegistry; }
  if (!data || data.length === 0) return _syncRegistry; // table empty, seed not run yet
  return data.map(rowToEntry);
}

/** All entries as a Map<slug, ContentEntry> — useful for O(1) lookups */
export async function getAllEntriesMap(): Promise<Map<string, ContentEntry>> {
  const all = await getAllEntries();
  return new Map(all.map(e => [e.slug, e]));
}

/** Look up a single entry by slug */
export async function getEntry(slug: string): Promise<ContentEntry | undefined> {
  const supabase = await db();
  if (!supabase) return _getEntrySync(slug);

  const { data, error } = await supabase
    .from('content_registry')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) { console.error('[registry-service] getEntry:', error.message); return _getEntrySync(slug); }
  return data ? rowToEntry(data) : _getEntrySync(slug);
}

/** Featured articles, newest first */
export async function getFeaturedArticles(): Promise<ContentEntry[]> {
  const supabase = await db();
  if (!supabase) return _getFeaturedArticlesSync();

  const { data, error } = await supabase
    .from('content_registry')
    .select('*')
    .eq('featured', true)
    .order('publish_date', { ascending: false });

  if (error) { console.error('[registry-service] getFeaturedArticles:', error.message); return _getFeaturedArticlesSync(); }
  if (!data || data.length === 0) return _getFeaturedArticlesSync();
  return data.map(rowToEntry);
}

/** Latest real articles (no hub/index pages), newest first */
export async function getLatestArticles(limit = 10): Promise<ContentEntry[]> {
  const all = await getAllEntries();
  return all
    .filter(isRealArticle)
    .sort((a, b) => {
      const d = new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      if (d !== 0) return d;
      const m = new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime();
      if (m !== 0) return m;
      return (b.priority ?? 0) - (a.priority ?? 0);
    })
    .slice(0, limit);
}

/** Articles by category, newest first */
export async function getArticlesByCategory(category: string, limit?: number): Promise<ContentEntry[]> {
  const supabase = await db();
  if (!supabase) return _getArticlesByCategorySync(category, limit);

  let query = supabase
    .from('content_registry')
    .select('*')
    .ilike('category', category)
    .order('publish_date', { ascending: false });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  if (error) { console.error('[registry-service] getArticlesByCategory:', error.message); return _getArticlesByCategorySync(category, limit); }
  if (!data || data.length === 0) return _getArticlesByCategorySync(category, limit);
  return data.map(rowToEntry);
}

/** Related articles for a slug, scored by category + tag overlap */
export async function getRelatedArticles(slug: string, limit = 5): Promise<ContentEntry[]> {
  const [current, all] = await Promise.all([getEntry(slug), getAllEntries()]);
  if (!current) return getLatestArticles(limit);

  return all
    .filter(e => e.slug !== slug)
    .map(e => ({
      entry: e,
      score:
        (e.category === current.category ? 3 : 0) +
        e.tags.filter(t => current.tags.includes(t)).length,
    }))
    .filter(e => e.score > 0)
    .sort((a, b) =>
      b.score - a.score ||
      new Date(b.entry.publishDate).getTime() - new Date(a.entry.publishDate).getTime()
    )
    .slice(0, limit)
    .map(e => e.entry);
}

/** Every unique tag with article count, sorted by count desc */
export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const all = await getAllEntries();
  const tagMap = new Map<string, number>();
  for (const entry of all) {
    for (const tag of entry.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }
  return [...tagMap.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/** Articles matching a specific tag, newest first */
export async function getEntriesByTag(tag: string, limit?: number): Promise<ContentEntry[]> {
  const supabase = await db();
  if (!supabase) return _getEntriesByTagSync(tag, limit);

  // Postgres array contains — case-insensitive via ilike requires unnest; use @> for exact
  const { data, error } = await supabase
    .from('content_registry')
    .select('*')
    .contains('tags', [tag])
    .order('publish_date', { ascending: false })
    .limit(limit ?? 1000);

  if (error) {
    // Fallback: case-insensitive client-side filter
    console.warn('[registry-service] getEntriesByTag falling back to sync:', error.message);
    return _getEntriesByTagSync(tag, limit);
  }
  if (!data || data.length === 0) return _getEntriesByTagSync(tag, limit);
  return data.map(rowToEntry);
}

/** Articles by author slug */
export async function getEntriesByAuthor(authorSlug: string): Promise<ContentEntry[]> {
  const supabase = await db();
  if (!supabase) return _getEntriesByAuthorSync(authorSlug);

  const { data, error } = await supabase
    .from('content_registry')
    .select('*')
    .eq('author_slug', authorSlug)
    .order('publish_date', { ascending: false });

  if (error) { console.error('[registry-service] getEntriesByAuthor:', error.message); return _getEntriesByAuthorSync(authorSlug); }
  if (!data || data.length === 0) return _getEntriesByAuthorSync(authorSlug);
  return data.map(rowToEntry);
}

// ---------------------------------------------------------------------------
// Write helper — used by sync-registry.ts
// ---------------------------------------------------------------------------

export interface UpsertEntry {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  modifiedDate: string;
  category: string;
  tags: string[];
  author: string;
  authorSlug?: string;
  priority: number;
  changeFrequency: string;
  featured?: boolean;
  imageUrl?: string;
  imageAlt?: string;
}

/** Upsert a batch of entries — used by scripts/sync-registry.ts */
export async function upsertEntries(entries: UpsertEntry[]): Promise<void> {
  const supabase = await db();
  if (!supabase || entries.length === 0) return;

  const rows = entries.map(e => ({
    slug:             e.slug,
    title:            e.title,
    description:      e.description,
    publish_date:     e.publishDate,
    modified_date:    e.modifiedDate,
    category:         e.category,
    tags:             e.tags,
    author:           e.author,
    author_slug:      e.authorSlug ?? null,
    priority:         e.priority,
    change_frequency: e.changeFrequency,
    featured:         e.featured ?? false,
    image_url:        e.imageUrl ?? null,
    image_alt:        e.imageAlt ?? null,
  }));

  const { error } = await (supabase as any)
    .from('content_registry')
    .upsert(rows, { onConflict: 'slug', ignoreDuplicates: false });

  if (error) throw new Error(`[registry-service] upsertEntries: ${error.message}`);
}

// =============================================================================
// Synchronous re-exports from lib/content-registry.ts
// =============================================================================
// Only `contentRegistry` (raw array) and `registerPage` are re-exported here,
// because the async helpers above (getEntry, getAllTags, etc.) share the same
// names — TypeScript would reject duplicate exports.
// Consumers that need the raw array or registerPage import them from here;
// all other helper calls should use the async functions above.
// =============================================================================
export { contentRegistry, registerPage } from '@/lib/content-registry';
