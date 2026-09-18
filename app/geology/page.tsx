export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/geology';
const PAGE_URL = `https://www.ozonedailynews.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Geology | Earth\'s Deep Structure, Fossils, and Planetary Processes',
  description: 'Geology, paleontology, plate tectonics, volcanism, and the deep Earth processes that shape the planet\'s surface and history.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Geology | Earth\'s Deep Structure, Fossils, and Planetary Processes',
    description: 'Geology, paleontology, plate tectonics, volcanism, and the deep Earth processes that shape the planet\'s surface and history.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    section: 'Science',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geology | Earth\'s Deep Structure, Fossils, and Planetary Processes',
    description: 'Geology, paleontology, plate tectonics, volcanism, and the deep Earth processes that shape the planet\'s surface and history.',
  },
};

export default function GeologyPage() {
  return <ArticlePageDB slug="geology" />;
}