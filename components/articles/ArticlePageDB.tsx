/**
 * ArticlePageDB — Server Component
 *
 * Fetches a row from the `article_pages` table by slug and renders it
 * using the <ArticlePage> display component.
 *
 * JSONB columns (info_box, table_of_contents, related_links, back_link) are
 * stored in the DB matching their TypeScript shapes and passed through directly.
 *
 * Usage in a page.tsx:
 *   export const dynamic = 'force-dynamic';
 *   export default function Page() {
 *     return <ArticlePageDB slug="my-page-slug" />;
 *   }
 */

import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { ArticlePage, TableOfContents } from './ArticlePage';
import { ContentRenderer } from './ContentRenderer';

interface ArticlePageDBProps {
  slug: string;
}

export async function ArticlePageDB({ slug }: ArticlePageDBProps) {
  const supabase = await createClient();

  const { data: row } = await supabase
    .from('article_pages')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!row) notFound();

  return (
    <ArticlePage
      title={row.title}
      subtitle={row.subtitle ?? undefined}
      category={row.category ?? undefined}
      lastUpdated={row.last_updated ?? undefined}
      infoBox={row.info_box ?? undefined}
      tableOfContents={row.table_of_contents ?? undefined}
      relatedLinks={row.related_links ?? undefined}
      backLink={row.back_link ?? undefined}
      slug={slug}
      url={row.url ?? `/${slug}`}
    >
      {row.table_of_contents && row.table_of_contents.length > 0 && (
        <TableOfContents items={row.table_of_contents} />
      )}
      <ContentRenderer html={row.content_html ?? ''} />
    </ArticlePage>
  );
}
