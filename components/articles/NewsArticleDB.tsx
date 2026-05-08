/**
 * NewsArticleDB — Server Component
 *
 * Fetches a row from the `articles` table by slug and renders it
 * using the <NewsArticle> display component.
 *
 * Usage in a page.tsx:
 *   export const dynamic = 'force-dynamic';
 *   export default function Page() {
 *     return <NewsArticleDB slug="my-article-slug" />;
 *   }
 */

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { NewsArticle } from './NewsArticle';
import { ContentRenderer } from './ContentRenderer';
import type { BreadcrumbItem } from '@/components/nav/Breadcrumb';

// ---------------------------------------------------------------------------
// Static-first data helpers
// ---------------------------------------------------------------------------
const STATIC_DIR = path.join(process.cwd(), 'content', 'static', 'articles');

function loadStaticRow(slug: string): Record<string, unknown> | null {
  try {
    const safeSlug = slug.replace(/\//g, '__');
    const filePath = path.join(STATIC_DIR, `${safeSlug}.json`);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as Record<string, unknown>;
  } catch {
    return null;
  }
}

type IndexEntry = {
  slug: string;
  title: string;
  url: string | null;
  category: string | null;
  publish_date: string | null;
  published_at: string | null;
  thumbnail_src: string | null;
  status: string | null;
};

let _articlesIndex: IndexEntry[] | null = null;
function getArticlesIndex(): IndexEntry[] {
  if (_articlesIndex) return _articlesIndex;
  try {
    const indexPath = path.join(STATIC_DIR, '_index.json');
    if (fs.existsSync(indexPath)) {
      _articlesIndex = JSON.parse(fs.readFileSync(indexPath, 'utf8')) as IndexEntry[];
    }
  } catch {
    _articlesIndex = [];
  }
  return _articlesIndex ?? [];
}

interface NewsArticleDBProps {
  slug: string;
}

/** Derive a 3-4 level breadcrumb trail from the article canonical URL path.
 *  e.g. /entertainment/news/fortnite-moves-into-movies
 *  → Home > Entertainment > News > {title}
 */
function deriveBreadcrumbs(urlPath: string | null | undefined, title: string): BreadcrumbItem[] {
  if (!urlPath) return [];
  const segments = urlPath.replace(/^\//, '').split('/').filter(Boolean);
  if (segments.length < 2) return []; // only add breadcrumbs when 2+ path levels deep

  const crumbs: BreadcrumbItem[] = [{ name: 'Home', item: '/' }];
  let cumulativePath = '';
  for (let i = 0; i < segments.length - 1; i++) {
    cumulativePath += '/' + segments[i];
    const label = segments[i]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name: label, item: cumulativePath });
  }
  crumbs.push({ name: title, item: urlPath });
  return crumbs;
}

export async function NewsArticleDB({ slug }: NewsArticleDBProps) {
  // ---------------------------------------------------------------------------
  // 1. Try static JSON file first (no Supabase call needed)
  // ---------------------------------------------------------------------------
  let row: Record<string, unknown> | null = loadStaticRow(slug);

  // ---------------------------------------------------------------------------
  // 2. Fallback to Supabase if static file not found
  // ---------------------------------------------------------------------------
  if (!row) {
    const supabase = await createClient();
    const { data } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .single();
    row = data ?? null;
  }

  if (!row) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const r = row as any;

  // ---------------------------------------------------------------------------
  // 3. Build "More from Hub" — static index if present, otherwise Supabase
  //    Priority order:
  //      A) URL-path siblings (share 2+ path segments) — most topically relevant
  //      B) Tag-overlapping articles in same category
  //      C) Same-category recency fallback
  // ---------------------------------------------------------------------------
  const moreFromHubItems: Array<{
    slug: string;
    title: string;
    url: string;
    publishDate?: string;
    category?: string;
    thumbnail?: string;
  }> = [];

  const index = getArticlesIndex();
  const articleTags: string[] = Array.isArray(r.tags) ? r.tags : [];
  const articleUrl: string = typeof r.url === 'string' ? r.url : '';

  // Derive URL-path hub prefix (first 2 non-trivial segments, e.g. /video-games/mha/)
  const urlSegments = articleUrl.replace(/^\//, '').split('/').filter(Boolean);
  const deepHubPrefix = urlSegments.length >= 2 ? `/${urlSegments[0]}/${urlSegments[1]}/` : null;
  const shallowHubPrefix = urlSegments.length >= 1 ? `/${urlSegments[0]}/` : null;

  if (index.length > 0) {
    // ── Static index path ────────────────────────────────────────────────────
    type ScoredEntry = IndexEntry & { _score: number };

    const candidates = index.filter(
      (a) => a.slug !== slug && a.url && a.title && a.status === 'published',
    );

    const scored: ScoredEntry[] = candidates.map((a) => {
      let score = 0;
      // URL-path proximity: deep match scores highest
      if (deepHubPrefix && a.url?.startsWith(deepHubPrefix)) score += 10;
      else if (shallowHubPrefix && a.url?.startsWith(shallowHubPrefix)) score += 5;
      // Same category
      if (a.category === r.category) score += 3;
      // Recency bonus (articles from last 30 days)
      if (a.published_at) {
        const ageDays = (Date.now() - new Date(a.published_at).getTime()) / 86400000;
        score += Math.max(0, 1 - ageDays / 30) * 2;
      }
      return { ...a, _score: score };
    });

    scored.sort((a, b) => {
      const sd = b._score - a._score;
      return sd !== 0 ? sd : (b.published_at ?? '').localeCompare(a.published_at ?? '');
    });

    for (const a of scored.slice(0, 12)) {
      if (!a.url || !a.title) continue;
      moreFromHubItems.push({
        slug: a.slug,
        title: a.title,
        url: a.url,
        publishDate: a.publish_date ?? undefined,
        category: a.category ?? undefined,
        thumbnail: a.thumbnail_src ?? undefined,
      });
      if (moreFromHubItems.length >= 6) break;
    }
  } else {
    // ── Supabase fallback ────────────────────────────────────────────────────
    // When static index is unavailable, query Supabase in two passes:
    //   Pass A: URL-path prefix match (deep hub siblings) sorted by recency
    //   Pass B: tag overlap within same category, filling remaining slots
    const supabase = await createClient();
    const SELECT_COLS = 'slug,title,url,publish_date,published_at,category,thumbnail_src';

    // Pass A: deep hub URL-prefix siblings
    if (deepHubPrefix) {
      const { data: pathSiblings } = await supabase
        .from('articles')
        .select(SELECT_COLS)
        .neq('slug', slug)
        .eq('status', 'published')
        .like('url', `${deepHubPrefix}%`)
        .order('published_at', { ascending: false })
        .limit(8);

      for (const a of pathSiblings ?? []) {
        if (!a.url || !a.title) continue;
        moreFromHubItems.push({
          slug: a.slug,
          title: a.title,
          url: a.url,
          publishDate: a.publish_date ?? undefined,
          category: a.category ?? undefined,
          thumbnail: a.thumbnail_src ?? undefined,
        });
        if (moreFromHubItems.length >= 6) break;
      }
    }

    // Pass B: tag-overlap siblings in same category (fills remaining slots)
    if (moreFromHubItems.length < 6 && articleTags.length > 0) {
      const seenSlugs = new Set(moreFromHubItems.map((i) => i.slug));
      const { data: tagSiblings } = await supabase
        .from('articles')
        .select(SELECT_COLS)
        .neq('slug', slug)
        .eq('status', 'published')
        .eq('category', r.category)
        .contains('tags', articleTags.slice(0, 3)) // overlap on up to 3 primary tags
        .order('published_at', { ascending: false })
        .limit(12);

      for (const a of tagSiblings ?? []) {
        if (!a.url || !a.title || seenSlugs.has(a.slug)) continue;
        moreFromHubItems.push({
          slug: a.slug,
          title: a.title,
          url: a.url,
          publishDate: a.publish_date ?? undefined,
          category: a.category ?? undefined,
          thumbnail: a.thumbnail_src ?? undefined,
        });
        if (moreFromHubItems.length >= 6) break;
      }
    }

    // Pass C: plain same-category recency fallback if still short
    if (moreFromHubItems.length < 6) {
      const seenSlugs = new Set(moreFromHubItems.map((i) => i.slug));
      const { data: catFallback } = await supabase
        .from('articles')
        .select(SELECT_COLS)
        .neq('slug', slug)
        .eq('status', 'published')
        .eq('category', r.category)
        .order('published_at', { ascending: false })
        .limit(12);

      for (const a of catFallback ?? []) {
        if (!a.url || !a.title || seenSlugs.has(a.slug)) continue;
        moreFromHubItems.push({
          slug: a.slug,
          title: a.title,
          url: a.url,
          publishDate: a.publish_date ?? undefined,
          category: a.category ?? undefined,
          thumbnail: a.thumbnail_src ?? undefined,
        });
        if (moreFromHubItems.length >= 6) break;
      }
    }
  }

  // Determine MoreFromHub label + href from URL prefix
  let moreFromHubLabel: string | undefined;
  let moreFromHubHref: string | undefined;
  if (r.url) {
    const firstSegment = (r.url as string).split('/').filter(Boolean)[0];
    if (firstSegment && !firstSegment.startsWith('news')) {
      moreFromHubLabel = firstSegment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c: string) => c.toUpperCase());
      moreFromHubHref = `/${firstSegment}`;
    }
  }

  const author = r.author_name
    ? {
        name: r.author_name as string,
        role: r.author_role ?? undefined,
        avatar: r.author_avatar ?? undefined,
        twitter: r.author_twitter ?? undefined,
        authorSlug: r.author_slug ?? undefined,
        bio: r.author_bio ?? undefined,
      }
    : undefined;

  const heroImage = r.hero_image_src
    ? {
        src: r.hero_image_src as string,
        alt: (r.hero_image_alt as string) ?? '',
        caption: r.hero_image_caption ?? undefined,
        credit: r.hero_image_credit ?? undefined,
      }
    : undefined;

  const thumbnail = r.thumbnail_src
    ? {
        src: r.thumbnail_src as string,
        alt: (r.thumbnail_alt as string) ?? '',
      }
    : undefined;

  return (
    <NewsArticle
      title={r.title}
      subtitle={r.subtitle ?? undefined}
      category={r.category}
      categoryColor={r.category_color ?? undefined}
      topicTag={r.topic_tag ?? undefined}
      publishDate={r.publish_date ?? ''}
      readTime={r.read_time ?? undefined}
      author={author}
      heroImage={heroImage}
      thumbnail={thumbnail}
      tags={r.tags ?? undefined}
      trending={r.trending ?? undefined}
      breaking={r.breaking ?? undefined}
      exclusive={r.exclusive ?? undefined}
      slug={slug}
      url={r.url ?? undefined}
      breadcrumbs={deriveBreadcrumbs(r.url, r.title)}
      faqItems={Array.isArray(r.faq_items) && r.faq_items.length > 0 ? r.faq_items : undefined}
      moreFromHub={moreFromHubItems.length > 0 ? moreFromHubItems : undefined}
      moreFromHubLabel={moreFromHubLabel}
      moreFromHubHref={moreFromHubHref}
    >
      <ContentRenderer html={r.content_html ?? ''} />
    </NewsArticle>
  );
}
