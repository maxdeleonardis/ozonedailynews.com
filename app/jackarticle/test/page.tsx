import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/jackarticle/test';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Pipeline Test | JackArticle Component',
  description:
    'End-to-end pipeline verification article using the JackArticle component. Confirms that wiki:migrate extracts content to the jack_articles table and',
  keywords: [
    'pipeline test',
    'jackarticle test',
    'objectwire pipeline verification',
    'commit deploy test',
    'jack_articles supabase',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Pipeline Test | JackArticle Component',
    description:
      'End-to-end pipeline verification using the JackArticle component. Confirms extraction to jack_articles table and auto-trim to JackArticleDB stub.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-21T00:00:00Z',
    modifiedTime: '2026-03-21T00:00:00Z',
    section: 'Technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pipeline Test | JackArticle Component',
    description: 'End-to-end pipeline verification for the commit-deploy automation.',
  },
};

export default function JackArticleTestPage() {
  return <JackArticleDB slug="jackarticle-test" />;
}
