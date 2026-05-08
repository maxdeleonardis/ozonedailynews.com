import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Bellwright | Medieval Survival RPG Tops 1 Million Sales',
  description:
    'Bellwright has crossed 1 million units sold on Steam while still in Early Access, publisher Snail, Inc. announced on March 6, 2026. Full profile of the',
  keywords: [
    'Bellwright 1 million sales',
    'Bellwright Steam Early Access',
    'Bellwright Snail Inc',
    'Bellwright medieval survival RPG',
    'Bellwright 1.0 release',
    'Bellwright PS5 Xbox',
    'Bellwright gameplay',
    'Bellwright review',
    'Bellwright Early Access 2024',
    'medieval survival game Steam',
    'Bellwright console release',
    'Bellwright open world',
    'Donkey Crew Bellwright',
    'survival RPG PC 2026',
    'best medieval games 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/bellwright',
  },
  openGraph: {
    title: 'Bellwright Tops 1 Million Units Sold Ahead of Full Launch',
    description:
      'Medieval survival RPG Bellwright has surpassed 1 million units sold on Steam while still in Early Access. Release 1.0 and console versions for PS5 and',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/bellwright',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-07T20:00:00Z',
    modifiedTime: '2026-03-07T20:00:00Z',
    section: 'Video Games',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bellwright Hits 1 Million Sales | Still in Early Access',
    description:
      'Snail, Inc. confirms Bellwright has crossed 1M units sold on Steam. Full launch and PS5/Xbox Series versions are coming.',
  },
};

export default function BellwrightPage() {
  return <WikiArticle slug="video-games-bellwright" />;
}
