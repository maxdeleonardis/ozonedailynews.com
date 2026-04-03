import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/newsarticle/test';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Pipeline Test | NewsArticle Component | ObjectWire',
  description:
    'End-to-end pipeline verification article using the NewsArticle component. This page is used to confirm that wiki:migrate correctly extracts content to the articles table and wiki:trim replaces this file with a NewsArticleDB stub.',
  keywords: [
    'pipeline test',
    'newsarticle test',
    'objectwire pipeline verification',
    'commit deploy test',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Pipeline Test | NewsArticle Component | ObjectWire',
    description:
      'End-to-end pipeline verification using the NewsArticle component. Confirms extraction to articles table and auto-trim to NewsArticleDB stub.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-21T00:00:00Z',
    modifiedTime: '2026-03-21T00:00:00Z',
    section: 'Technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pipeline Test | NewsArticle Component | ObjectWire',
    description: 'End-to-end pipeline verification for the commit-deploy automation.',
  },
};

export default function NewsArticleTestPage() {
  return <NewsArticleDB slug="newsarticle-test" />;
}
