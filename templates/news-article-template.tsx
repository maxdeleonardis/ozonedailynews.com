import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ArticleQuote,
} from '@/components/DynamicNewsArticle';
import Link from 'next/link';

/**
 * METADATA
 * Replace these values with the article information
 */
export const metadata: Metadata = {
  title: 'Article Title | ObjectWire',
  description: 'A 150-160 character description of the article for SEO.',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: {
    canonical: 'https://www.objectwire.org/REPLACE-WITH-ACTUAL-SLUG',
  },
  openGraph: {
    title: 'Article Title',
    description: 'Social media description.',
    type: 'article',
    publishedTime: '2026-01-31T00:00:00Z',
  },
};

/**
 * NEWS ARTICLE PAGE
 * Uses the standard DynamicNewsArticle component for consistent flashiness
 */
export default function NewNewsArticlePage() {
  return (
    <>
      <NewsArticleSchema
        title="Article Title"
        description="A 150-160 character description of the article for SEO."
        author="ObjectWire Team"
        authorUrl="https://objectwire.org/team"
        publishedTime="2026-01-31T00:00:00Z"
        modifiedTime="2026-01-31T00:00:00Z"
        articleUrl="https://objectwire.org/REPLACE-WITH-ACTUAL-SLUG"
        section="Technology"
        keywords={['keyword1', 'keyword2', 'keyword3']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
        ]}
        categories={[{ label: 'TECHNOLOGY', color: 'blue' }]}
        readTime="5 min read"
        title="Article Title"
        subtitle="Optional punchy subtitle or deck for the story"
        heroImage={{
          src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
          alt: 'Descriptive alt text',
          caption: 'Caption for the hero image',
          credit: 'Unsplash/Photographer',
        }}
        author={{
          name: 'ObjectWire Team',
          initials: 'OW',
        }}
        publishDate="January 31, 2026"
      >
        {/* Introduction */}
        <p className="text-xl font-semibold leading-relaxed mb-6">
          The opening paragraph should be bold and summarize the main "hook" of the story.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Section One Heading</h2>
        <p>
          Standard narrative text goes here. You can use **bold** or *italics* as needed. Use
          regular HTML/JSX tags like &lt;p&gt;, &lt;ul&gt;, etc.
        </p>

        <ArticleQuote
          quote="This is a pull quote that highlights a key statement from a source or the text itself."
          author="Source Name"
        />

        <p>More content follows the quote.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Section Two Heading</h2>
        <p>Continue the story here.</p>
      </DynamicNewsArticle>
    </>
  );
}
