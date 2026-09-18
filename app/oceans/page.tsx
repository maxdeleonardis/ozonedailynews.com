export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/oceans';
const PAGE_URL = `https://www.ozonedailynews.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Oceans | Deep Sea, Marine Life, and Ocean Science',
  description: 'Oceanography, deep-sea exploration, marine ecosystems, and the physical processes that drive Earth\'s largest habitat.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Oceans | Deep Sea, Marine Life, and Ocean Science',
    description: 'Oceanography, deep-sea exploration, marine ecosystems, and the physical processes that drive Earth\'s largest habitat.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    section: 'Science',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oceans | Deep Sea, Marine Life, and Ocean Science',
    description: 'Oceanography, deep-sea exploration, marine ecosystems, and the physical processes that drive Earth\'s largest habitat.',
  },
};

export default function OceansPage() {
  return <ArticlePageDB slug="oceans" />;
}