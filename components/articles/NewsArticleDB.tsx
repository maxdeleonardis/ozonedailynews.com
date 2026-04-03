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

interface NewsArticleDBProps {
  slug: string;
}

export async function NewsArticleDB({ slug }: NewsArticleDBProps) {
  const supabase = await createClient();

  const { data: row } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!row) notFound();

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
    >
      <ContentRenderer html={row.content_html ?? ''} />
    </NewsArticle>
  );
}
