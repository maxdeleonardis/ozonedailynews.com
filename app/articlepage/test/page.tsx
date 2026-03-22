import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/articlepage/test';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Pipeline Test — ArticlePage Component | ObjectWire',
  description:
    'End-to-end pipeline verification article using the ArticlePage component. Confirms that wiki:migrate extracts content to the article_pages table and wiki:trim replaces this file with an ArticlePageDB stub.',
  keywords: [
    'pipeline test',
    'articlepage test',
    'objectwire pipeline verification',
    'commit deploy test',
    'article_pages supabase',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: 'Pipeline Test — ArticlePage Component | ObjectWire',
    description:
      'End-to-end pipeline verification using the ArticlePage component. Confirms extraction to article_pages table and auto-trim to ArticlePageDB stub.',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pipeline Test — ArticlePage Component | ObjectWire',
    description: 'End-to-end pipeline verification for the commit-deploy automation.',
  },
};

export default function ArticlePageTestPage() {
  return <ArticlePageDB slug="articlepage-test" />;
}
