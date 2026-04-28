/**
 * CreatorArticleDB — Server Component
 *
 * Fetches a row from the `creator_articles` table by slug and renders it
 * using the <CreatorArticle> display component.
 *
 * JSONB columns (breadcrumbs, hero_badges, hero_cta_buttons, sidebar_infobox_rows,
 * sidebar_callout, sidebar_timeline, sidebar_related_links) are stored as-is in
 * the DB and passed through directly — no manual mapping required.
 *
 * Usage in a page.tsx:
 *   export const dynamic = 'force-dynamic';
 *   export default function Page() {
 *     return <CreatorArticleDB slug="winter-olympics/usa/alysa-liu" />;
 *   }
 */

import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import CreatorArticle from './CreatorArticle';
import { ContentRenderer } from './ContentRenderer';

interface CreatorArticleDBProps {
  slug: string;
}

export async function CreatorArticleDB({ slug }: CreatorArticleDBProps) {
  const supabase = await createClient();

  const { data: row } = await supabase
    .from('creator_articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!row) notFound();

  // Fetch up to 5 other published creator profiles for the sidebar
  const { data: relatedRows } = await supabase
    .from('creator_articles')
    .select('hero_name, hero_subtitle, sidebar_infobox_image_src, sidebar_infobox_image_alt, schema_article_url, slug')
    .eq('status', 'published')
    .neq('slug', slug)
    .limit(5);

  const relatedCreators = (relatedRows ?? []).map((r) => {
    // Derive the page path from schema_article_url or slug
    let href = '/influencer';
    if (r.schema_article_url) {
      try { href = new URL(r.schema_article_url).pathname; } catch { href = `/${r.slug}`; }
    } else {
      href = `/${r.slug}`;
    }
    return {
      name:      r.hero_name ?? r.slug,
      subtitle:  r.hero_subtitle ?? 'Creator Profile',
      imageSrc:  r.sidebar_infobox_image_src ?? '',
      imageAlt:  r.sidebar_infobox_image_alt ?? r.hero_name ?? '',
      href,
    };
  }).filter((c) => c.imageSrc);

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
      tags={row.schema_keywords?.length ? row.schema_keywords : undefined}
      relatedCreators={relatedCreators.length > 0 ? relatedCreators : undefined}
    >
      <ContentRenderer html={row.content_html ?? ''} />
    </CreatorArticle>
  );
}
