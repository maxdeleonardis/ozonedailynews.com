import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/battlefield-6/season-3-blastpoint';

export const metadata: Metadata = {
  title: 'Battlefield 6 Season 3 Blast Point | Maps, Weapons, Battle Pass',
  description:
    'Battlefield 6 Season 3 Blast Point launches June 10 with Cairo Bazaar, Golmud Sands, 6 new weapons, Flashpoint mode, server browser, ranked Conquest, and 2 new operators.',
  keywords: [
    'Battlefield 6 Season 3',
    'Battlefield 6 Season 3 Blast Point',
    'Battlefield 6 Season 3 maps',
    'Battlefield 6 Cairo Bazaar',
    'Battlefield 6 Golmud Sands',
    'Battlefield 6 Flashpoint mode',
    'Battlefield 6 Season 3 weapons',
    'Battlefield 6 Season 3 Battle Pass',
    'Battlefield 6 server browser',
    'Battlefield 6 ranked Conquest',
    'BF6 Season 3',
    'Battlefield 6 new operators Season 3',
    'Battlefield 6 Season 3 free rewards',
    'Battlefield 6 Season 3 June 2026',
    'DICE Battlefield 6 Season 3',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Battlefield 6 Season 3 Blast Point | Maps, Weapons, Battle Pass',
    description:
      'Cairo Bazaar, Golmud Sands, 6 weapons, Flashpoint extraction mode, server browser, ranked Conquest, and 2 new operators — every confirmed detail for June 10.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Conan Boyle'],
    publishedTime: '2026-06-06T10:00:00-05:00',
    modifiedTime: '2026-06-06T10:00:00-05:00',
    section: 'Gaming',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=675&fit=crop&q=80',
        width: 1200,
        height: 675,
        alt: 'Battlefield 6 Season 3 Blast Point',
      },
    ],
    tags: ['Battlefield 6', 'DICE', 'EA', 'Season 3', 'Blast Point'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BF6 Season 3 Blast Point | Cairo Bazaar, Server Browser, Flashpoint',
    description: '6 weapons, 2 maps, 1 new mode, server browser, ranked Conquest — everything confirmed for June 10.',
    images: ['https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=675&fit=crop&q=80'],
  },
};

export default function Battlefield6Season3BlastpointPage() {
  return <NewsArticleDB slug="video-games-battlefield-6-season-3-blastpoint" />;
}
