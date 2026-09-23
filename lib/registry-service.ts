// lib/registry-service.ts
// Content registry: master index for sitemaps, JSON-LD, related articles.
// Single source: content/static/content_registry.json (filesystem, in-memory cache).

import fs from 'fs';
import path from 'path';
import type { ContentEntry } from './types';

const LOCAL_REGISTRY_PATH = path.join(process.cwd(), 'content', 'static', 'content_registry.json');

let _localCache: ContentEntry[] | null = null;

function rowToEntry(row: Record<string, unknown>): ContentEntry {
  return {
    slug:            String(row.slug ?? ''),
    title:           String(row.title ?? ''),
    description:     String(row.description ?? ''),
    publishDate:     String(row.publishDate ?? row.publish_date ?? ''),
    modifiedDate:    String(row.modifiedDate ?? row.modified_date ?? row.publishDate ?? row.publish_date ?? ''),
    publishAt:       row.publishAt ?? row.publish_at ? String(row.publishAt ?? row.publish_at ?? '') : undefined,
    category:        String(row.category ?? 'News'),
    tags:            Array.isArray(row.tags) ? (row.tags as string[]) : [],
    author:          String(row.author ?? ''),
    authorSlug:      row.authorSlug ? String(row.authorSlug) : undefined,
    priority:        Number(row.priority ?? 0.7),
    changeFrequency: (row.changeFrequency as ContentEntry['changeFrequency']) ?? 'daily',
    imageUrl:        row.imageUrl ? String(row.imageUrl) : undefined,
    imageAlt:        row.imageAlt ? String(row.imageAlt) : undefined,
    imageWidth:      row.imageWidth ? Number(row.imageWidth) : undefined,
    imageHeight:     row.imageHeight ? Number(row.imageHeight) : undefined,
    articleType:     row.articleType as ContentEntry['articleType'],
    lifecycle:       row.lifecycle as ContentEntry['lifecycle'] ?? 'news',
    breaking:        Boolean(row.breaking ?? false),
  };
}

function loadLocalRegistry(): ContentEntry[] | null {
  if (_localCache) return _localCache;
  if (!fs.existsSync(LOCAL_REGISTRY_PATH)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(LOCAL_REGISTRY_PATH, 'utf8')) as Record<string, unknown>[];
    _localCache = raw.map(rowToEntry);
    return _localCache;
  } catch {
    return null;
  }
}

// Clear in-memory cache (used by sync scripts)
export function clearRegistryCache() {
  _localCache = null;
}

/** True when a registry entry is publicly visible right now (scheduled publish gate). */
export function isEntryLive(e: ContentEntry): boolean {
  if (e.lifecycle === 'pruned') return false;
  if (!e.publishAt) return true;
  const ts = new Date(e.publishAt).getTime();
  if (Number.isNaN(ts)) return true;
  return ts <= Date.now();
}

export async function getAllEntries(): Promise<ContentEntry[]> {
  const local = loadLocalRegistry();
  return (local ?? []).filter(isEntryLive);
}

export async function getEntry(slug: string): Promise<ContentEntry | null> {
  const all = await getAllEntries();
  return all.find((e) => e.slug === slug) ?? null;
}

export async function getLatestArticles(limit = 12): Promise<ContentEntry[]> {
  const all = await getAllEntries();
  return all
    .filter((e) => e.lifecycle !== 'pruned')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

export async function getRelatedArticles(slug: string, limit = 5): Promise<ContentEntry[]> {
  const entry = await getEntry(slug);
  if (!entry) return [];

  const all = await getAllEntries();
  return all
    .filter((e) => e.slug !== slug && e.category === entry.category && e.lifecycle !== 'pruned')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

export async function getNewsSitemapEntries(): Promise<ContentEntry[]> {
  const all = await getAllEntries();
  const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000);
  return all.filter((e) => new Date(e.publishDate) > cutoff);
}

// ─── Registry upsert (called by publish API) ──────────────────────────────────
// Updates content_registry.json on disk so sitemaps and JSON-LD are current
// immediately after a publish — no manual wiki:sync step required.

export function upsertRegistryEntry(entry: ContentEntry): void {
  // Read current registry (bypass cache to get fresh disk state)
  let entries: ContentEntry[] = [];
  if (fs.existsSync(LOCAL_REGISTRY_PATH)) {
    try {
      const raw = JSON.parse(fs.readFileSync(LOCAL_REGISTRY_PATH, 'utf8')) as Record<string, unknown>[];
      entries = raw.map(rowToEntry);
    } catch {
      entries = [];
    }
  }

  // Upsert: replace existing entry by slug, or prepend if new
  const idx = entries.findIndex((e) => e.slug === entry.slug);
  if (idx >= 0) {
    entries[idx] = entry;
  } else {
    entries.unshift(entry); // newest first
  }

  fs.writeFileSync(LOCAL_REGISTRY_PATH, JSON.stringify(entries, null, 2) + '\n', 'utf8');

  // Bust the in-memory cache so next request sees the fresh data
  _localCache = null;
}
