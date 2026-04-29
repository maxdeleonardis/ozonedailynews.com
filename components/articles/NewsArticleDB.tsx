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

import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { NewsArticle } from './NewsArticle';
import { ContentRenderer } from './ContentRenderer';
import type { BreadcrumbItem } from '@/components/nav/Breadcrumb';

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
  const supabase = await createClient();

  const { data: row } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!row) notFound();

  // Fetch up to 6 sibling articles in the same category for server-rendered
  // interlinking (MoreFromHub). Falls back to URL-prefix sibling matching when
  // category is empty/generic. This is what makes orphan articles crawlable.
  const moreFromHubItems: Array<{
    slug: string;
    title: string;
    url: string;
    publishDate?: string;
    category?: string;
    thumbnail?: string;
  }> = [];

  // Strategy 1: same category
  const { data: catSiblings } = await supabase
    .from('articles')
    .select('slug, title, url, publish_date, category, thumbnail_src')
    .eq('status', 'published')
    .eq('category', row.category)
    .neq('slug', slug)
    .order('published_at', { ascending: false })
    .limit(8);

  for (const a of catSiblings ?? []) {
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

  // Strategy 2 (fallback): if not enough siblings, fill with URL-prefix matches
  if (moreFromHubItems.length < 6 && row.url) {
    const segments = row.url.split('/').filter(Boolean);
    const hubPrefix = segments.length > 0 ? `/${segments[0]}/%` : null;
    if (hubPrefix) {
      const seen = new Set(moreFromHubItems.map((i) => i.slug));
      const { data: prefixSiblings } = await supabase
        .from('articles')
        .select('slug, title, url, publish_date, category, thumbnail_src')
        .eq('status', 'published')
        .like('url', hubPrefix)
        .neq('slug', slug)
        .order('published_at', { ascending: false })
        .limit(12);
      for (const a of prefixSiblings ?? []) {
        if (!a.url || !a.title || seen.has(a.slug)) continue;
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
  if (row.url) {
    const firstSegment = row.url.split('/').filter(Boolean)[0];
    if (firstSegment && !firstSegment.startsWith('news')) {
      moreFromHubLabel = firstSegment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c: string) => c.toUpperCase());
      moreFromHubHref = `/${firstSegment}`;
    }
  }

  const author = row.author_name
    ? {
        name: row.author_name as string,
        role: row.author_role ?? undefined,
        avatar: row.author_avatar ?? undefined,
        twitter: row.author_twitter ?? undefined,
        authorSlug: row.author_slug ?? undefined,
        bio: row.author_bio ?? undefined,
      }
    : undefined;

  const heroImage = row.hero_image_src
    ? {
        src: row.hero_image_src as string,
        alt: (row.hero_image_alt as string) ?? '',
        caption: row.hero_image_caption ?? undefined,
        credit: row.hero_image_credit ?? undefined,
      }
    : undefined;

  const thumbnail = row.thumbnail_src
    ? {
        src: row.thumbnail_src as string,
        alt: (row.thumbnail_alt as string) ?? '',
      }
    : undefined;

  return (
    <NewsArticle
      title={row.title}
      subtitle={row.subtitle ?? undefined}
      category={row.category}
      categoryColor={row.category_color ?? undefined}
      topicTag={row.topic_tag ?? undefined}
      publishDate={row.publish_date ?? ''}
      readTime={row.read_time ?? undefined}
      author={author}
      heroImage={heroImage}
      thumbnail={thumbnail}
      tags={row.tags ?? undefined}
      trending={row.trending ?? undefined}
      breaking={row.breaking ?? undefined}
      exclusive={row.exclusive ?? undefined}
      slug={slug}
      url={row.url ?? undefined}
      breadcrumbs={deriveBreadcrumbs(row.url, row.title)}
      faqItems={Array.isArray(row.faq_items) && row.faq_items.length > 0 ? row.faq_items : undefined}
      moreFromHub={moreFromHubItems.length > 0 ? moreFromHubItems : undefined}
      moreFromHubLabel={moreFromHubLabel}
      moreFromHubHref={moreFromHubHref}
    >
      <ContentRenderer html={row.content_html ?? ''} />
    </NewsArticle>
  );
}
