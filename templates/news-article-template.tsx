import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

// =============================================================================
// NEWS ARTICLE TEMPLATE
//
// 1. Copy this file to the correct app/ route:
//      cp templates/news-article-template.tsx app/[topic]/[your-slug]/page.tsx
//
// 2. Fill in all fields below.
//
// 3. Run the publish pipeline to sync to Supabase and trim to a stub:
//      npm run wiki:publish -- --file app/[topic]/[your-slug]/page.tsx
//
// The file will be replaced with a 3-line stub pointing to <NewsArticleDB>.
// All content lives in the `articles` Supabase table after that.
// =============================================================================

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Primary Keyword | OzoneNews',
  description: '130-155 chars. Primary keyword in first 60 chars. No generic phrases.',
  alternates: {
    canonical: 'https://www.ozonenetwork.news/REPLACE-WITH-SLUG',
  },
  openGraph: {
    title: 'Primary Keyword | OzoneNews',
    description: '130-155 char OG description.',
    type: 'article',
    publishedTime: '2026-03-28T14:00:00Z',
    section: 'News',
    images: [
      {
        url: 'https://REPLACE-WITH-IMAGE-URL',
        width: 1200,
        height: 675,
        alt: 'Descriptive alt text',
      },
    ],
  },
};

export default function YourArticlePage() {
  return (
    <>
      <NewsArticleSchema
        title="Primary Keyword | OzoneNews"
        description="130-155 char description matching metadata above."
        author="Jack Sterling"
        authorUrl="https://www.ozonenetwork.news/authors/jack-sterling"
        publishedTime="2026-03-28T14:00:00Z"
        modifiedTime="2026-03-28T14:00:00Z"
        articleUrl="https://www.ozonenetwork.news/REPLACE-WITH-SLUG"
        imageUrl="https://REPLACE-WITH-IMAGE-URL"
        section="News"
        keywords={['keyword1', 'keyword2', 'keyword3']}
      />

      <NewsArticle
        title="Full Headline Here, No Em Dashes"
        subtitle="Optional deck sentence"
        category="News"
        publishDate="March 28, 2026"
        readTime="4 min read"
        author={{
          name: 'Jack Sterling',
          role: 'Staff Writer',
          authorSlug: 'jack-sterling',
        }}
        heroImage={{
          src: '/images/your-hero-image.jpg',
          alt: 'Descriptive alt text, min 1200px wide',
        }}
        tags={['ProperNoun1', 'ProperNoun2', 'ProperNoun3', 'ProperNoun4']}
        slug="topic-your-slug"
        url="https://www.ozonenetwork.news/topic/your-slug"
      >
        {/* ── Intro ── */}
        <p>
          Opening paragraph. One sentence answer to what happened, who it affects, and why it matters.
        </p>

        <h2>First Section Heading | Keyword Rich</h2>
        <p>Body copy. Every H2 should be niche and specific, never generic.</p>

        {/* Add 4-6 internal links scattered through the body */}

        <h2>Second Section Heading</h2>
        <p>Continue the story.</p>

        <h2>Third Section Heading</h2>
        <p>Continue the story.</p>
      </NewsArticle>
    </>
  );
}
