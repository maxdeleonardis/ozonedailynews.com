import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/nasa';
const PAGE_URL = `https://www.ozonenetwork.news${SLUG}`;

export const metadata: Metadata = {
  title: 'NASA | Artemis, James Webb Telescope, Mars & Space Exploration 2026',
  description:
    'NASA overview 2026: Artemis Moon program, James Webb Space Telescope discoveries, Mars rovers, ISS transition, and commercial space partnerships. Space and science news at OzoneDailyNews.',
  keywords: [
    'NASA',
    'NASA 2026',
    'Artemis program',
    'James Webb Space Telescope',
    'JWST 2026',
    'NASA Mars rover',
    'Perseverance rover',
    'NASA Moon landing',
    'Artemis II crew',
    'SpaceX NASA',
    'International Space Station',
    'NASA news 2026',
    'space exploration 2026',
    'NASA science missions',
    'NASA commercial crew',
    'lunar south pole',
    'NASA budget 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'NASA | Artemis, James Webb Telescope & Space Exploration 2026',
    description:
      'Full NASA hub: Artemis Moon program, JWST discoveries, Mars rovers, ISS transition, and commercial partnerships with SpaceX and Blue Origin.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    section: 'Science',
    tags: ['NASA', 'Space Exploration', 'James Webb Space Telescope', 'Artemis'],
    publishedTime: '2026-06-01T12:00:00-05:00',
    modifiedTime: '2026-06-01T12:00:00-05:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASA | Artemis, JWST & Space Exploration 2026',
    description:
      'Artemis Moon program, James Webb discoveries, Mars rovers, and the future of human spaceflight. Full NASA hub on OzoneNews.',
  },
};

export default function NasaPage() {
  return <ArticlePageDB slug="nasa" />;
}
