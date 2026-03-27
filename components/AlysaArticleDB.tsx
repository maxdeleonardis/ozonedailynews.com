/**
 * AlysaArticleDB — Server Component
 *
 * Fetches a row from the `alysa_articles` table by slug and renders it
 * using the <CreatorArticle> display component (identical layout).
 *
 * alysa_articles = athlete / sports figure biography profiles
 * creator_articles = general creator / influencer / founder profiles
 *
 * Usage in a page.tsx:
 *   export const dynamic = 'force-dynamic';
 *   export default function Page() {
 *     return <AlysaArticleDB slug="winter-olympics/usa/ilia-malinin" />;
 *   }
 */

import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import CreatorArticle from './CreatorArticle';

interface AlysaArticleDBProps {
  slug: string;
}

export async function AlysaArticleDB({ slug }: AlysaArticleDBProps) {
  const supabase = await createClient();

  const { data: row } = await supabase
    .from('alysa_articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!row) notFound();

  return (
    <CreatorArticle
      schema={{
        title:         row.schema_title,
        description:   row.schema_description,
        author:        row.schema_author,
        authorUrl:     row.schema_author_url ?? undefined,
        articleUrl:    row.schema_article_url,
        imageUrl:      row.schema_image_url ?? undefined,
        section:       row.schema_section,
        keywords:      row.schema_keywords ?? [],
        publishedTime: row.schema_published_time,
        modifiedTime:  row.schema_modified_time,
      }}
      breadcrumbs={row.breadcrumbs ?? []}
      hero={{
        image:       { src: row.hero_image_src, alt: row.hero_image_alt },
        gradient:    row.hero_gradient ?? undefined,
        name:        row.hero_name,
        subtitle:    row.hero_subtitle,
        description: row.hero_description,
        badges:      row.hero_badges ?? [],
        ctaButtons:  row.hero_cta_buttons?.length ? row.hero_cta_buttons : undefined,
      }}
      sidebar={{
        infobox: {
          image:    { src: row.sidebar_infobox_image_src, alt: row.sidebar_infobox_image_alt },
          name:     row.sidebar_infobox_name,
          subtitle: row.sidebar_infobox_subtitle,
          rows:     row.sidebar_infobox_rows ?? [],
        },
        callout:      row.sidebar_callout ?? undefined,
        timeline:     row.sidebar_timeline?.length ? row.sidebar_timeline : undefined,
        relatedLinks: row.sidebar_related_links?.length ? row.sidebar_related_links : undefined,
        meta: {
          publishedDate: row.sidebar_meta_published_date,
          updatedDate:   row.sidebar_meta_updated_date ?? undefined,
          author:        row.sidebar_meta_author,
          category:      row.sidebar_meta_category,
        },
      }}
      tiktokEmbed={row.tiktok_embed ?? false}
    >
      <div dangerouslySetInnerHTML={{ __html: row.content_html ?? '' }} />
    </CreatorArticle>
  );
}
