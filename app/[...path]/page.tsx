/**
 * Catch-all article route
 *
 * Handles any URL that doesn't match a static page.tsx route.
 * Converts the path segments to a dash-slug to find the matching
 * static JSON file across all content tables, then renders the
 * correct component.
 *
 * Lookup order:
 *   1. articles          → NewsArticleDB
 *   2. jack_articles     → JackArticleDB
 *   3. article_pages     → ArticlePageDB
 *   4. creator_articles  → CreatorArticleDB
 *   5. wiki_articles     → WikiArticleDB (slug-based)
 */

import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';
import { JackArticleDB } from '@/components/articles/JackArticleDB';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

export const dynamic = 'force-dynamic';

const STATIC_BASE = path.join(process.cwd(), 'content', 'static');

type Table = 'articles' | 'jack_articles' | 'article_pages' | 'creator_articles' | 'wiki_articles';

function fileExists(table: Table, slug: string): boolean {
  const fp = path.join(STATIC_BASE, table, `${slug}.json`);
  return fs.existsSync(fp);
}

function readJson(table: Table, slug: string): Record<string, unknown> | null {
  try {
    const fp = path.join(STATIC_BASE, table, `${slug}.json`);
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
  } catch {
    return null;
  }
}

type ResolvedArticle = {
  table: Table;
  fileSlug: string; // dash-slug used as filename (no .json)
  componentSlug: string; // slug passed to the *DB component
};

function resolve(segments: string[]): ResolvedArticle | null {
  // The filename is always path segments joined with '-'
  const dashSlug = segments.join('-');

  // Tables ordered by priority
  const tables: Table[] = [
    'articles',
    'jack_articles',
    'article_pages',
    'creator_articles',
    'wiki_articles',
  ];

  for (const table of tables) {
    if (fileExists(table, dashSlug)) {
      // All *DB components call slug.replace(/\//g, '__') to derive the filename.
      // Since our files are named with dashes (not __), passing the dash slug
      // directly (no slashes) means the replace is a no-op and the filename
      // resolves correctly.
      return { table, fileSlug: dashSlug, componentSlug: dashSlug };
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string[] }>;
}): Promise<Metadata> {
  const { path: segments } = await params;
  const resolved = resolve(segments);
  if (!resolved) return {};

  const data = readJson(resolved.table, resolved.fileSlug);
  if (!data) return {};

  const title = (data.title as string) || '';
  const description =
    (data.subtitle as string) ||
    (data.description as string) ||
    (data.excerpt as string) ||
    '';
  const canonical = `https://www.objectwire.org/${segments.join('/')}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
      siteName: 'ObjectWire',
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function CatchAllArticlePage({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path: segments } = await params;
  const resolved = resolve(segments);

  if (!resolved) notFound();

  const { table, componentSlug } = resolved;

  if (table === 'articles') {
    return <NewsArticleDB slug={componentSlug} />;
  }
  if (table === 'jack_articles') {
    return <JackArticleDB slug={componentSlug} />;
  }
  if (table === 'article_pages') {
    return <ArticlePageDB slug={componentSlug} />;
  }
  if (table === 'creator_articles') {
    return <CreatorArticleDB slug={componentSlug} />;
  }

  // wiki_articles — ArticlePageDB also handles these via its static lookup
  return <ArticlePageDB slug={componentSlug} />;
}
