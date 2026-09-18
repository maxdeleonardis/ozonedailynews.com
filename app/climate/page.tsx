export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/climate';
const PAGE_URL = `https://www.ozonedailynews.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Climate | Science, Data, and Earth System Change',
  description: 'Climate science, global temperature data, atmospheric research, and the physical processes driving Earth\'s changing climate system.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Climate | Science, Data, and Earth System Change',
    description: 'Climate science, global temperature data, atmospheric research, and the physical processes driving Earth\'s changing climate system.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    section: 'Science',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climate | Science, Data, and Earth System Change',
    description: 'Climate science, global temperature data, atmospheric research, and the physical processes driving Earth\'s changing climate system.',
  },
};

export default function ClimatePage() {
  return <ArticlePageDB slug="climate" />;
}