/**
 * JackArticleDB — Server Component
 *
 * Fetches a row from the `jack_articles` table by slug and renders it
 * using the <JackArticle> display component.
 *
 * JSONB columns (categories, hero_image, breadcrumbs, author, related_articles,
 * timeline, documents, sources, footer_links) are stored as-is in the DB and
 * passed through directly — no manual mapping required.
 *
 * Usage in a page.tsx:
 *   export const dynamic = 'force-dynamic';
 *   export default function Page() {
 *     return <JackArticleDB slug="my-article-slug" />;
 *   }
 */

import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import JackArticle from './JackArticle';

interface JackArticleDBProps {
  slug: string;
}

export async function JackArticleDB({ slug }: JackArticleDBProps) {
  const supabase = await createClient();

  const { data: row } = await supabase
    .from('jack_articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!row) notFound();

  return (
    <JackArticle
      slug={slug}
      layout={row.layout ?? undefined}
      title={row.title}
      subtitle={row.subtitle ?? undefined}
      subject={row.subject ?? undefined}
      description={row.description ?? undefined}
      categoryLabel={row.category_label ?? undefined}
      categories={row.categories ?? undefined}
      publishDate={row.publish_date ?? ''}
      publishDateISO={row.publish_date_iso ?? undefined}
      modifiedDateISO={row.modified_date_iso ?? undefined}
      readTime={row.read_time ?? undefined}
      heroImage={row.hero_image ?? undefined}
      breadcrumbs={row.breadcrumbs ?? undefined}
      author={row.author ?? undefined}
      relatedArticles={row.related_articles ?? undefined}
      timeline={row.timeline ?? undefined}
      documents={row.documents ?? undefined}
      showNewsletter={row.show_newsletter ?? undefined}
      newsletterTitle={row.newsletter_title ?? undefined}
      newsletterDescription={row.newsletter_description ?? undefined}
      sources={row.sources ?? undefined}
      showCorrections={row.show_corrections ?? undefined}
      showEditorialStandards={row.show_editorial_standards ?? undefined}
      footerTagline={row.footer_tagline ?? undefined}
      footerLinks={row.footer_links ?? undefined}
      accentColor={row.accent_color ?? undefined}
      articleUrl={row.article_url ?? undefined}
      section={row.section ?? undefined}
      keywords={row.keywords ?? undefined}
      uuid={row.uuid ?? undefined}
      version={row.version ?? undefined}
    >
      <div dangerouslySetInnerHTML={{ __html: row.content_html ?? '' }} />
    </JackArticle>
  );
}
