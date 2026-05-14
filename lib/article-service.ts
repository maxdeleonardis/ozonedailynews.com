import fs from 'fs';
import path from 'path';
import { createClient } from '@/lib/supabase/server';

// =============================================================================
// LOCAL-FIRST article-service
// Reads from content/static/{table}/*.json files first.
// Supabase is a fallback only.
// =============================================================================

const STATIC_BASE = path.join(process.cwd(), 'content', 'static');

function readStaticDir<T>(table: string): T[] {
  try {
    const dir = path.join(STATIC_BASE, table);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.json') && f !== '_index.json')
      .map(f => {
        try { return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) as T; }
        catch { return null; }
      })
      .filter((x): x is T => x !== null);
  } catch { return []; }
}

/**
 * Lightweight article shape returned by list queries.
 * Every article has a `url` field — the canonical route path (e.g. "/tech/news/article-slug").
 * NEVER construct URLs from slugs by replacing dashes with slashes.
 */
export interface ArticleSummary {
  id: string;
  title: string;
  slug: string;
  /** Canonical route path — always use this for <Link href>. */
  url: string;
  excerpt?: string;
  category?: string;
  status?: string;
  publishedAt: string;
  author?: string;
  author_name?: string;
  imageUrl?: string;
  tags?: string[];
  breaking?: boolean;
  featured?: boolean;
  trending?: boolean;
  exclusive?: boolean;
}

/**
 * Full article shape with all fields — used by admin dashboard and editor.
 */
export interface ArticleFull extends ArticleSummary {
  content?: any;
  blocks?: any[];
  subtitle?: string;
  author_role?: string;
  author_avatar?: string;
  author_twitter?: string;
  author_slug?: string;
  author_bio?: string;
  read_time?: string | number;
  sidebar_blocks?: any[];
  layout_columns?: number;
  image_alt?: string;
  image_caption?: string;
  image_credit?: string;
  thumbnail_url?: string;
  thumbnail_alt?: string;
  category_color?: string;
  topic_tag?: string;
  created_at?: string;
  published_at?: string;
  updated_at?: string;
}

// =============================================================================
// HELPERS
// =============================================================================

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Convert a Supabase `articles` row slug to a URL path.
 * Prefers the `url` column (canonical path). Falls back to deriving
 * from slug by replacing the FIRST dash-group with slashes up to the
 * recognisable route structure, but this is best-effort — always
 * store a proper `url` in Supabase.
 */
function resolveUrl(row: { url?: string | null; slug: string }): string {
  if (row.url) return row.url.startsWith('/') ? row.url : `/${row.url}`;
  // Fallback: just prefix with / (won't route correctly for nested paths
  // but at least won't do the old "replace all dashes with slashes" mistake)
  return `/${row.slug}`;
}

// =============================================================================
// READ — Articles
// =============================================================================

/**
 * All articles (published + draft). Used by homepage and admin.
 * LOCAL-FIRST: reads from content/static/articles/*.json
 */
export async function getAllArticles(): Promise<ArticleFull[]> {
  // 1. Local static files
  const local = readStaticDir<Record<string, unknown>>('articles');
  if (local.length > 0) {
    return local.map(row => ({
      id: String(row.id ?? row.slug ?? ''),
      title: String(row.title ?? ''),
      slug: String(row.slug ?? ''),
      url: resolveUrl({ url: row.url as string | null, slug: String(row.slug ?? '') }),
      content: row.content,
      publishedAt: String(row.published_at || row.created_at || ''),
      published_at: String(row.published_at || ''),
      category: String(row.category ?? 'News'),
      status: String(row.status ?? 'published'),
      author: String(row.author_name ?? 'ObjectWire'),
      author_name: String(row.author_name ?? 'ObjectWire'),
      author_slug: row.author_slug ? String(row.author_slug) : undefined,
      excerpt: row.excerpt ? String(row.excerpt) : undefined,
      imageUrl: String(row.image_url || row.hero_image_src || row.thumbnail_src || ''),
      image_alt: String(row.image_alt || row.hero_image_alt || row.thumbnail_alt || ''),
      tags: Array.isArray(row.tags) ? row.tags as string[] : [],
      featured: Boolean(row.featured),
      trending: Boolean(row.trending),
      breaking: Boolean(row.breaking),
      exclusive: Boolean(row.exclusive),
    } as ArticleFull));
  }

  // 2. Supabase fallback
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, url, content, published_at, created_at, category, status, author_name, excerpt, image_url, hero_image_src, hero_image_alt, thumbnail_src, thumbnail_alt, tags, featured, trending, breaking, exclusive')
      .order('created_at', { ascending: false });

    if (error) { console.error('[article-service] getAllArticles:', error.message); return []; }
    return (data || []).map(row => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      url: resolveUrl(row),
      content: row.content,
      publishedAt: row.published_at || row.created_at,
      published_at: row.published_at,
      category: row.category,
      status: row.status,
      author: row.author_name,
      author_name: row.author_name,
      excerpt: row.excerpt,
      imageUrl: row.image_url || row.hero_image_src || row.thumbnail_src || undefined,
      image_alt: row.hero_image_alt ?? row.thumbnail_alt ?? undefined,
      tags: row.tags,
      featured: row.featured,
      trending: row.trending,
      breaking: row.breaking,
      exclusive: row.exclusive,
    } as any));
  } catch { return []; }
}

/**
 * Published articles only. Used by search and sitemap.
 */
export async function getPublishedArticles(): Promise<ArticleSummary[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, url, published_at, category, author_name, excerpt, image_url, hero_image_src, tags')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) { console.error('[article-service] getPublishedArticles:', error.message); return []; }
    return (data || []).map(row => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      url: resolveUrl(row),
      publishedAt: row.published_at,
      category: row.category,
      author: row.author_name,
      author_name: row.author_name,
      excerpt: row.excerpt,
      imageUrl: row.image_url || row.hero_image_src || undefined,
      tags: row.tags,
    }));
  } catch { return []; }
}

/**
 * Fetch published creator_articles (influencer bios, athlete profiles).
 */
export async function getCreatorArticles(): Promise<ArticleFull[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('creator_articles')
      .select('slug, hero_name, hero_subtitle, hero_description, hero_image_src, hero_image_alt, schema_published_time, schema_section, schema_author, schema_keywords, schema_article_url, status')
      .eq('status', 'published')
      .order('schema_published_time', { ascending: false });

    if (error) { console.error('[article-service] getCreatorArticles:', error.message); return []; }
    return (data || []).map(row => {
      // Prefer schema_article_url (full canonical URL) → extract path.
      // Fall back to slug-based path only when schema_article_url is absent.
      let url: string;
      if (row.schema_article_url) {
        try {
          url = new URL(row.schema_article_url).pathname;
        } catch {
          url = row.schema_article_url.startsWith('/') ? row.schema_article_url : `/${row.schema_article_url}`;
        }
      } else {
        // Legacy fallback: slug may be slash-separated or dash-joined
        url = row.slug.startsWith('/') ? row.slug : `/${row.slug}`;
      }
      return {
        id: row.slug,
        title: row.hero_name,
        slug: row.slug,
        url,
        content: [],
        publishedAt: row.schema_published_time,
        published_at: row.schema_published_time,
        category: row.schema_section ?? 'Entertainment',
        status: 'published' as const,
        author_name: row.schema_author,
        author: row.schema_author,
        excerpt: row.hero_description,
        imageUrl: row.hero_image_src,
        image_alt: row.hero_image_alt,
        tags: row.schema_keywords ?? [],
        featured: false,
        trending: false,
        breaking: false,
        exclusive: false,
      } as any;
    });
  } catch { return []; }
}

/**
 * Fetch published jack_articles (premium research, investigations).
 * LOCAL-FIRST: reads from content/static/jack_articles/*.json
 */
export async function getJackArticles(): Promise<ArticleFull[]> {
  // 1. Local static files
  const local = readStaticDir<Record<string, unknown>>('jack_articles');
  if (local.length > 0) {
    return local.map(row => {
      const authorObj = row.author as Record<string, unknown> | null;
      const heroObj = row.hero_image as Record<string, unknown> | null;
      let url: string;
      const articleUrl = row.article_url ? String(row.article_url) : '';
      if (articleUrl) {
        try { url = new URL(articleUrl).pathname; } catch { url = articleUrl.startsWith('/') ? articleUrl : `/${articleUrl}`; }
      } else {
        url = `/${String(row.slug ?? '')}`;
      }
      return {
        id: String(row.slug ?? ''),
        title: String(row.title ?? ''),
        slug: String(row.slug ?? ''),
        url,
        publishedAt: String(row.publish_date || ''),
        published_at: String(row.publish_date || ''),
        category: String(row.section ?? row.category ?? 'Research'),
        status: 'published' as const,
        author_name: authorObj?.name ? String(authorObj.name) : 'Jack Sterling',
        author: authorObj?.name ? String(authorObj.name) : 'Jack Sterling',
        excerpt: String(row.subtitle ?? row.description ?? ''),
        imageUrl: heroObj?.src ? String(heroObj.src) : undefined,
        image_alt: heroObj?.alt ? String(heroObj.alt) : undefined,
        tags: Array.isArray(row.keywords) ? row.keywords as string[] : [],
        featured: false, trending: false, breaking: false, exclusive: false,
      } as ArticleFull;
    });
  }

  // 2. Supabase fallback
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('jack_articles')
      .select('slug, title, subtitle, description, publish_date, section, hero_image, author, article_url, keywords')
      .order('publish_date', { ascending: false });

    if (error) { console.error('[article-service] getJackArticles:', error.message); return []; }
    return (data || []).map(row => {
      const authorObj = row.author as Record<string, unknown> | null;
      const heroObj = row.hero_image as Record<string, unknown> | null;
      let url: string;
      if (row.article_url) {
        try { url = new URL(row.article_url).pathname; } catch { url = row.article_url.startsWith('/') ? row.article_url : `/${row.article_url}`; }
      } else {
        url = `/${row.slug}`;
      }
      return {
        id: row.slug, title: row.title, slug: row.slug, url,
        publishedAt: row.publish_date, published_at: row.publish_date,
        category: row.section ?? 'Research', status: 'published' as const,
        author_name: authorObj?.name ? String(authorObj.name) : 'ObjectWire',
        author: authorObj?.name ? String(authorObj.name) : 'ObjectWire',
        excerpt: row.subtitle ?? row.description ?? undefined,
        imageUrl: heroObj?.src ? String(heroObj.src) : undefined,
        image_alt: heroObj?.alt ? String(heroObj.alt) : undefined,
        tags: row.keywords ?? [], featured: false, trending: false, breaking: false, exclusive: false,
      } as any;
    });
  } catch { return []; }
}

/**
 * Breaking headlines for ticker banners.
 */
export async function getBreakingHeadlines(): Promise<string[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('title')
      .eq('breaking', true)
      .order('created_at', { ascending: false })
      .limit(8);
    if (error) return [];
    return (data || []).map(r => r.title as string);
  } catch { return []; }
}

// =============================================================================
// Backward-compatible aliases
// =============================================================================

/** @deprecated Use `getAllArticles` instead. */
export const getAllBlogPosts = getAllArticles;
/** @deprecated Use `getPublishedArticles` instead. */
export const getPublishedBlogPosts = getPublishedArticles;

// =============================================================================
// Legacy type aliases — keeps admin dashboard and other consumers compiling
// =============================================================================

/** @deprecated Use `ArticleSummary` instead. */
export type BlogPost = ArticleSummary;
/** @deprecated Use `ArticleFull` instead. */
export type BlogPostFull = ArticleFull;
