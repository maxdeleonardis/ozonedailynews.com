// lib/article-service.ts
// Local-first data layer. Static JSON in content/static/ is the single source
// of truth. No Supabase, no network reads, no routing_table.
//
// Every public list/getAll surface respects a `publish_at` field: articles with
// a future publish_at are hidden until that instant, enabling scheduled publishing.

import fs from 'fs';
import path from 'path';
import type { ArticleFull, JackArticleFull, SterlingArticleFull, ArticlePageFull, CreatorArticleFull, WikiArticleFull } from './types';

const STATIC_BASE = path.join(process.cwd(), 'content', 'static');

// ─── Visibility gate (scheduled publishing) ──────────────────────────────────

interface HasPublishAt {
  publish_at?: string;
  published_at?: string;
  status?: string;
  lifecycle?: string;
}

/** The instant an article should become visible (publish_at preferred, published_at fallback). */
function scheduledAt(a: HasPublishAt): string {
  return a.publish_at ?? a.published_at ?? '';
}

/** True when the article should be publicly visible right now. */
export function isPublishLive(a: HasPublishAt): boolean {
  if (a.status && a.status !== 'published') return false;
  if (a.lifecycle === 'pruned') return false;
  const t = scheduledAt(a);
  if (!t) return true;
  const ts = new Date(t).getTime();
  if (Number.isNaN(ts)) return true;
  return ts <= Date.now();
}

// ─── Filesystem helpers ───────────────────────────────────────────────────────

// Recursive function to find all JSON files in a directory
function findJsonFilesRecursive(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findJsonFilesRecursive(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== '_index.json' && entry.name !== 'content_registry.json') {
      results.push(fullPath);
    }
  }
  
  return results;
}

function readStaticDir<T>(table: string): T[] {
  const dir = path.join(STATIC_BASE, table);
  if (!fs.existsSync(dir)) return [];
  
  return findJsonFilesRecursive(dir)
    .map((filePath) => {
      try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
      } catch {
        return null;
      }
    })
    .filter((x): x is T => x !== null);
}

// ─── Registry-based file resolution ──────────────────────────────────────────
// Reads content_registry.json to resolve slug → filePath for sharded storage

function getRegistryEntry(slug: string): { filePath: string } | null {
  const registryPath = path.join(STATIC_BASE, 'content_registry.json');
  if (!fs.existsSync(registryPath)) return null;
  try {
    const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
    const entry = registry.find((e: { slug: string; filePath?: string }) => e.slug === slug || e.slug === `/${slug}`);
    return entry?.filePath ? { filePath: entry.filePath } : null;
  } catch {
    return null;
  }
}

function readStaticRow<T>(table: string, slug: string): T | null {
  // Try registry-based lookup first (supports sharded structure)
  const registryEntry = getRegistryEntry(slug);
  if (registryEntry) {
    const file = path.join(STATIC_BASE, registryEntry.filePath);
    if (fs.existsSync(file)) {
      try {
        return JSON.parse(fs.readFileSync(file, 'utf8')) as T;
      } catch {
        return null;
      }
    }
  }

  // Fallback to legacy flat structure (backwards compatibility)
  const flatFile = path.join(STATIC_BASE, table, `${slug}.json`);
  if (fs.existsSync(flatFile)) {
    try {
      return JSON.parse(fs.readFileSync(flatFile, 'utf8')) as T;
    } catch {
      return null;
    }
  }

  // Sharded directory fallback — scan year/month subdirectories for [slug].json
  // Handles jack_articles/2026/06/slug.json, articles/2026/06/slug.json, etc.
  const allFiles = findJsonFilesRecursive(path.join(STATIC_BASE, table));
  const target = `${slug}.json`;
  const match = allFiles.find(f => path.basename(f) === target);
  if (match) {
    try {
      return JSON.parse(fs.readFileSync(match, 'utf8')) as T;
    } catch {
      return null;
    }
  }

  return null;
}

// ─── Articles (NewsArticleDB) ─────────────────────────────────────────────────

export async function getAllArticles(): Promise<ArticleFull[]> {
  // Read ALL static stores so jack_articles, wiki_articles,
  // creator_articles, sterling_articles, article_pages all appear on the homepage.
  const staticStores: (typeof ALL_STORES[number])[] = [
    'articles',
    'jack_articles',
    'wiki_articles',
    'creator_articles',
    'article_pages',
    'sterling_articles',
  ];
  const merged: ArticleFull[] = [];
  for (const store of staticStores) {
    merged.push(...readStaticDir<ArticleFull>(store));
  }

  // Deduplicate by slug, filter to live (publish_at in the past), then sort.
  const seen = new Set<string>();
  const deduped = merged
    .filter(isPublishLive)
    .filter((a) => {
      const key = a.slug ?? a.url ?? '';
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

  return deduped;
}

export async function getArticleBySlug(slug: string): Promise<ArticleFull | null> {
  const local = readStaticRow<ArticleFull>('articles', slug);
  return local && isPublishLive(local) ? local : null;
}

/**
 * Resolves an article from a URL path segment array (used by the [...slug] catchall).
 * Try order:
 *   0. Supabase routing_table — decoupled URL → content_id → content/articles/[id].json
 *   1. Join all segments with hyphens — checks ALL static stores so jack_articles,
 *      wiki_articles, creator_articles etc. are resolved without a DB round-trip.
 *      e.g. ['tech','gaming','nvidia-rtx-...'] → 'tech-gaming-nvidia-rtx-...'
 *   2. Last segment only — same multi-store check
 *   3. Full URL scan — scans all stores and matches by the `url` field path suffix
 */

// All static stores in lookup priority order.
const ALL_STORES = [
  'articles',
  'jack_articles',
  'wiki_articles',
  'creator_articles',
  'article_pages',
  'sterling_articles',
] as const;

export async function getArticleByUrlSegments(segments: string[]): Promise<ArticleFull | null> {
  const fullPath = '/' + segments.join('/');
  const joinedSlug = segments.join('-');

  // Try 1: joined slug — fast path, checks all stores, no network.
  for (const store of ALL_STORES) {
    const hit = readStaticRow<ArticleFull>(store, joinedSlug);
    if (hit && isPublishLive(hit)) return hit;
  }

  // Try 2: last segment only — same multi-store check
  const lastSegment = segments[segments.length - 1];
  if (lastSegment !== joinedSlug) {
    for (const store of ALL_STORES) {
      const hit = readStaticRow<ArticleFull>(store, lastSegment);
      if (hit && isPublishLive(hit)) return hit;
    }
  }

  // Try 3: scan ALL stores and match by url field path
  for (const store of ALL_STORES) {
    const all = readStaticDir<ArticleFull>(store);
    const byUrl = all.find((a) => {
      if (!a.url) return false;
      try { return new URL(a.url).pathname === fullPath; } catch { return a.url === fullPath; }
    });
    if (byUrl && isPublishLive(byUrl)) return byUrl;
  }

  return null;
}

export async function getBreakingHeadlines(): Promise<ArticleFull[]> {
  // Static stores only — breaking articles published via Git show up immediately.
  const all = await getAllArticles();
  return all.filter((a) => (a as ArticleFull & { breaking?: boolean }).breaking).slice(0, 5);
}

// ─── Sterling Articles (SterlingArticleDB) ──────────────────────────────────

export async function getAllSterlingArticles(): Promise<SterlingArticleFull[]> {
  const local = readStaticDir<SterlingArticleFull>('sterling_articles');
  return local
    .filter(isPublishLive)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
}

export async function getSterlingArticleBySlug(slug: string): Promise<SterlingArticleFull | null> {
  const local = readStaticRow<SterlingArticleFull>('sterling_articles', slug);
  return local && isPublishLive(local) ? local : null;
}

// ─── Article Pages (ArticlePageDB) ────────────────────────────────────────────

export async function getAllArticlePages(): Promise<ArticlePageFull[]> {
  const local = readStaticDir<ArticlePageFull>('article_pages');
  return local.filter(isPublishLive);
}

export async function getArticlePageBySlug(slug: string): Promise<ArticlePageFull | null> {
  const local =
    readStaticRow<ArticlePageFull>('article_pages', slug) ??
    readStaticRow<ArticlePageFull>('wiki_articles', slug);
  return local && isPublishLive(local) ? local : null;
}

// ─── Creator Articles (CreatorArticleDB) ──────────────────────────────────────

export async function getCreatorArticles(): Promise<CreatorArticleFull[]> {
  const local = readStaticDir<CreatorArticleFull>('creator_articles');
  return local.filter(isPublishLive);
}

export async function getCreatorBySlug(slug: string): Promise<CreatorArticleFull | null> {
  const local = readStaticRow<CreatorArticleFull>('creator_articles', slug);
  return local && isPublishLive(local) ? local : null;
}

// ─── Jack Articles (long-form / investigation) ───────────────────────────────

export async function getJackArticleBySlug(slug: string): Promise<JackArticleFull | null> {
  const local = readStaticRow<JackArticleFull>('jack_articles', slug);
  return local && isPublishLive(local) ? local : null;
}

// ─── Wiki Articles ────────────────────────────────────────────────────────────

export async function getWikiArticleBySlug(slug: string): Promise<WikiArticleFull | null> {
  const local = readStaticRow<WikiArticleFull>('wiki_articles', slug);
  return local && isPublishLive(local) ? local : null;
}

// ─── Latest articles (cross-store, for homepage carousel) ────────────────────

export async function getLatestArticles(limit = 10): Promise<ArticleFull[]> {
  const all = await getAllArticles();
  return all.slice(0, limit);
}
