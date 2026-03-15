/**
 * JackArticleDB — server component that fetches a JackArticle record from
 * `jack_articles` in Supabase and renders it via the <JackArticle> component.
 *
 * Usage in a page.tsx:
 *   import { JackArticleDB } from '@/components/JackArticleDB';
 *   export default function Page() {
 *     return <JackArticleDB slug="claude-news-my-article-slug" />;
 *   }
 */

import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import JackArticle, {
  type JackAccentColor,
  type JackAuthor,
  type JackBreadcrumb,
  type JackCategoryBadge,
  type JackDocumentLink,
  type JackRelatedArticle,
  type JackSourceReference,
  type JackTimelineEvent,
} from '@/components/JackArticle';

interface Props {
  slug: string;
}

export async function JackArticleDB({ slug }: Props) {
  const supabase = await createClient();

  const { data: article } = await supabase
    .from('jack_articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!article) notFound();

  return (
    <JackArticle
      layout={(article.layout as 'report' | 'news') ?? 'report'}
      title={article.title}
      subtitle={article.subtitle ?? undefined}
      subject={article.subject ?? undefined}
      description={article.description ?? undefined}
      categoryLabel={article.category_label ?? undefined}
      categories={(article.categories as JackCategoryBadge[]) ?? undefined}
      publishDate={article.publish_date ?? ''}
      publishDateISO={article.publish_date_iso ?? undefined}
      modifiedDateISO={article.modified_date_iso ?? undefined}
      readTime={article.read_time ?? undefined}
      heroImage={article.hero_image ?? undefined}
      breadcrumbs={(article.breadcrumbs as JackBreadcrumb[]) ?? undefined}
      author={(article.author as JackAuthor) ?? undefined}
      relatedArticles={(article.related_articles as JackRelatedArticle[]) ?? undefined}
      timeline={(article.timeline as JackTimelineEvent[]) ?? undefined}
      documents={(article.documents as JackDocumentLink[]) ?? undefined}
      showNewsletter={article.show_newsletter ?? false}
      newsletterTitle={article.newsletter_title ?? undefined}
      newsletterDescription={article.newsletter_description ?? undefined}
      sources={(article.sources as JackSourceReference[]) ?? undefined}
      showCorrections={article.show_corrections ?? true}
      showEditorialStandards={article.show_editorial_standards ?? true}
      footerTagline={article.footer_tagline ?? undefined}
      footerLinks={
        (article.footer_links as Array<{ href: string; label: string }>) ?? undefined
      }
      accentColor={(article.accent_color as JackAccentColor) ?? 'gray'}
      articleUrl={article.article_url ?? undefined}
      section={article.section ?? undefined}
      keywords={(article.keywords as string[]) ?? undefined}
      uuid={article.uuid ?? undefined}
      version={article.version ?? undefined}
    >
      <div dangerouslySetInnerHTML={{ __html: article.content_html ?? '' }} />
    </JackArticle>
  );
}
