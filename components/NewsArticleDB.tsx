/**
 * NewsArticleDB — server component that fetches a NewsArticle record from
 * `articles` in Supabase and renders it via the <NewsArticle> component.
 *
 * Usage in a page.tsx:
 *   import { NewsArticleDB } from '@/components/NewsArticleDB';
 *   export default function Page() {
 *     return <NewsArticleDB slug="tech-news-my-article-slug" />;
 *   }
 */

import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import NewsArticle, { type TopicTagType } from '@/components/NewsArticle';

interface Props {
  slug: string;
}

export async function NewsArticleDB({ slug }: Props) {
  const supabase = await createClient();

  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!article) notFound();

  // Resolve HTML body: prefer content_html TEXT, fall back to content JSONB block
  const htmlBlock = Array.isArray(article.content)
    ? (article.content as Array<{ type: string; content: string }>).find(
        (b) => b.type === 'html'
      )
    : null;
  const contentHtml: string = article.content_html || htmlBlock?.content || '';

  // Resolve human-readable publish date
  const publishDate: string =
    article.publish_date ||
    (article.published_at
      ? new Date(article.published_at).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : '');

  return (
    <NewsArticle
      title={article.title}
      subtitle={article.subtitle ?? undefined}
      category={article.category || 'News'}
      categoryColor={article.category_color ?? undefined}
      topicTag={(article.topic_tag as TopicTagType) ?? undefined}
      publishDate={publishDate}
      readTime={article.read_time ?? undefined}
      author={
        article.author_name
          ? {
              name: article.author_name,
              role: article.author_role ?? undefined,
              avatar: article.author_avatar ?? undefined,
              twitter: article.author_twitter ?? undefined,
              authorSlug: article.author_slug ?? undefined,
              bio: article.author_bio ?? undefined,
            }
          : undefined
      }
      heroImage={
        article.hero_image_src
          ? {
              src: article.hero_image_src,
              alt: article.hero_image_alt ?? '',
              caption: article.hero_image_caption ?? undefined,
              credit: article.hero_image_credit ?? undefined,
            }
          : undefined
      }
      thumbnail={
        article.thumbnail_src
          ? { src: article.thumbnail_src, alt: article.thumbnail_alt ?? '' }
          : undefined
      }
      tags={article.tags ?? []}
      breaking={article.breaking ?? false}
      trending={article.trending ?? false}
      exclusive={article.exclusive ?? false}
      slug={slug}
      url={article.url ?? undefined}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </NewsArticle>
  );
}
