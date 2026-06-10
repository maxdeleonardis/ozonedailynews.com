export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/earth/coral-reef';
const PAGE_URL = `https://www.ozonedailynews.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Coral Reef | Heat Stress, Bleaching, and Ocean Recovery',
  description: 'Coral reefs are under pressure from heat stress, acidification, and disease. This ArticlePage explains the science and why recovery is uneven.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Coral Reef | Heat Stress, Bleaching, and Ocean Recovery',
    description: 'Coral reefs are under pressure from heat stress, acidification, and disease. This ArticlePage explains the science and why recovery is uneven.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['Simon Alfred Minter'],
    section: 'Earth',
    tags: ['Coral Reef', 'Ocean Health', 'Climate Change'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coral Reef | Heat Stress, Bleaching, and Ocean Recovery',
    description: 'Coral reefs are under pressure from heat stress, acidification, and disease. This ArticlePage explains the science and why recovery is uneven.',
  },
};

export default function CoralReefPage() {
  return <ArticlePageDB slug="earth-coral-reef" />;
}
