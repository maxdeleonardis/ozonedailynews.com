/**
 * lib/generate-article-metadata.ts
 *
 * Shared helper that fetches an article row from any of the 3 tables
 * and returns a Next.js Metadata object. This lets DB stubs use
 * `generateMetadata()` instead of hardcoded `export const metadata`,
 * making meta_title and meta_description editable from the admin editor.
 *
 * Fallback chain:
 *   meta_title       → row.title + " | ObjectWire"
 *   meta_description → row.subtitle → row.description → generic
 *
 * Usage in page.tsx:
 *   import { generateArticleMetadata } from '@/lib/generate-article-metadata';
 *   export async function generateMetadata() {
 *     return generateArticleMetadata('my-slug', 'articles');
 *   }
 */

import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';

export type ArticleTable = 'articles' | 'jack_articles' | 'article_pages';

/** Minimal columns needed for metadata generation */
const META_SELECT_BASE = [
  'title',
  'subtitle',
  'slug',
  'category',
  'tags',
  'hero_image_src',
  'hero_image_alt',
  'thumbnail_src',
  'published_at',
  'updated_at',
  'publish_date_iso',
  'url',
  // jack_articles-specific
  'description',
  'hero_image',
  'keywords',
  'section',
  'article_url',
  'category_label',
].join(',');

/** Extra columns that may not exist yet (added by migration) */
const META_EXTRA = 'meta_title,meta_description';

/** Combined select string */
const META_SELECT = `${META_SELECT_BASE},${META_EXTRA}`;

interface MetaRow {
  title?: string;
  subtitle?: string;
  slug?: string;
  category?: string;
  category_label?: string;
  tags?: string[];
  meta_title?: string | null;
  meta_description?: string | null;
  hero_image_src?: string | null;
  hero_image_alt?: string | null;
  thumbnail_src?: string | null;
  published_at?: string | null;
  updated_at?: string | null;
  publish_date_iso?: string | null;
  url?: string | null;
  description?: string | null;
  hero_image?: { src?: string; alt?: string } | null;
  keywords?: string[] | null;
  section?: string | null;
  article_url?: string | null;
}

/**
 * Generate Next.js Metadata from a Supabase article row.
 *
 * @param slug    - The article slug (e.g. "crypto-usdc-circle-unfreeze-wallets-zachxbt-2026")
 * @param table   - Which Supabase table to query
 * @param overrides - Optional metadata overrides (merge on top)
 */
export async function generateArticleMetadata(
  slug: string,
  table: ArticleTable,
  overrides?: Partial<Metadata>,
): Promise<Metadata> {
  const supabase = await createClient();

  const { data: row } = await supabase
    .from(table)
    .select(META_SELECT)
    .eq('slug', slug)
    .single();

  // If row not found, return minimal metadata
  if (!row) {
    return {
      title: 'Article Not Found | ObjectWire',
      description: 'The requested article could not be found.',
      ...overrides,
    };
  }

  const r = row as MetaRow;

  // ── Build title ──────────────────────────────────────────────────
  const metaTitle =
    r.meta_title ||
    (r.title ? `${r.title} | ObjectWire` : 'ObjectWire');

  // ── Build description ────────────────────────────────────────────
  const metaDescription =
    r.meta_description ||
    r.subtitle ||
    r.description ||
    `Read the full article on ObjectWire.`;

  // ── Resolve image ────────────────────────────────────────────────
  const resolvedImageUrl =
    r.hero_image_src ||
    (r.hero_image && typeof r.hero_image === 'object' ? r.hero_image.src : null) ||
    r.thumbnail_src ||
    null;

  // When no article-specific image exists, fall back to the dynamic OG card
  // generator at /api/og which renders a branded card with title, category,
  // and a pre-populated Unsplash background (if the batch-fix script has run).
  const ogFallback = `https://www.objectwire.org/api/og?slug=${encodeURIComponent(canonicalPath)}`;
  const imageUrl = resolvedImageUrl || ogFallback;

  const imageAlt =
    r.hero_image_alt ||
    (r.hero_image && typeof r.hero_image === 'object' ? r.hero_image.alt : null) ||
    r.title ||
    '';

  // ── Resolve URL ──────────────────────────────────────────────────
  const canonicalPath = r.url || r.article_url || `/${slug.replace(/-/g, '/')}`;
  const canonicalUrl = canonicalPath.startsWith('http')
    ? canonicalPath
    : `https://www.objectwire.org${canonicalPath}`;

  // ── Resolve category / section ───────────────────────────────────
  const section = r.category || r.category_label || r.section || undefined;

  // ── Resolve published time ───────────────────────────────────────
  const publishedTime = r.published_at || r.publish_date_iso || undefined;

  // ── Resolve modified time ────────────────────────────────────────
  // updated_at is set by Supabase triggers or manual admin edits.
  // Falls back to publishedTime so dateModified is always present.
  const modifiedTime = r.updated_at || publishedTime;

  // ── Resolve keywords ─────────────────────────────────────────────
  const keywords = r.keywords || r.tags || undefined;

  // ── Build metadata object ────────────────────────────────────────
  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'ObjectWire',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(section ? { section } : {}),
      ...(keywords ? { tags: keywords } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  };

  // Merge overrides
  if (overrides) {
    return { ...metadata, ...overrides };
  }

  return metadata;
}
