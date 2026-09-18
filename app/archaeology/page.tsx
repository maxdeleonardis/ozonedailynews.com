export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/archaeology';
const PAGE_URL = `https://www.ozonedailynews.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Archaeology | Ancient Civilizations, Artifacts, and Human Origins',
  description: 'Archaeology, ancient civilizations, human origins, and the material record of humanity\'s past from prehistory to the classical world.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Archaeology | Ancient Civilizations, Artifacts, and Human Origins',
    description: 'Archaeology, ancient civilizations, human origins, and the material record of humanity\'s past from prehistory to the classical world.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    section: 'Science',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archaeology | Ancient Civilizations, Artifacts, and Human Origins',
    description: 'Archaeology, ancient civilizations, human origins, and the material record of humanity\'s past from prehistory to the classical world.',
  },
};

export default function ArchaeologyPage() {
  return <ArticlePageDB slug="archaeology" />;
}