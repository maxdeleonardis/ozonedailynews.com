import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/dragon-ball/xenoverse-3-new-world-toriyama-age-1000-2027';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Dragon Ball Xenoverse 3 | AGE 1000, West City, PS5 2027',
  description:
    'Dragon Ball Xenoverse 3 officially revealed at Dragon Ball Games Battle Hour 2026. Set in AGE 1000 West City, built from Akira Toriyama designs, releasing',
  keywords: [
    'Dragon Ball Xenoverse 3 release date 2027',
    'Dragon Ball Xenoverse 3 PS5 Xbox Series X PC Steam',
    'Dragon Ball Xenoverse 3 West City AGE 1000 setting',
    'Dragon Ball Xenoverse 3 Great Saiyan Squad',
    'Dragon Ball Xenoverse 3 Akira Toriyama original world',
    'Dragon Ball Xenoverse 3 character creation RPG',
    'Dragon Ball Xenoverse 3 announcement April 2026',
    'Dragon Ball Games Battle Hour 2026 reveal',
    'Dragon Ball Xenoverse 3 vs Xenoverse 2 differences',
    'Bandai Namco Dragon Ball 2027 game',
    'Dragon Ball Xenoverse series 10 year return',
    'Dragon Ball AGE 1000 timeline explained',
    'Dragon Ball Xenoverse 3 new characters story',
    'Dragon Ball Xenoverse 3 RPG story mode details',
    'Dragon Ball Xenoverse 3 trailer breakdown April 19',
    'Dragon Ball Xenoverse 3 platforms confirmed',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Dragon Ball Xenoverse 3 | AGE 1000, West City & PS5 2027',
    description:
      'Official reveal at Dragon Ball Games Battle Hour 2026: Xenoverse 3 set in Toriyama-designed AGE 1000 West City, PS5/Xbox Series X/PC in 2027.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    section: 'Gaming',
    tags: ['Dragon Ball', 'Xenoverse 3', 'Bandai Namco', 'Gaming', 'PS5', 'RPG'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dragon Ball Xenoverse 3 Officially Revealed | AGE 1000, PS5',
    description:
      '10 years after Xenoverse 2. New world by Akira Toriyama. Great Saiyan Squad. PS5, Xbox Series X, PC Steam in 2027.',
  },
};

export default function VideoGamesDragonBallXenoverse3NewWorldToriyamaAge10002027Page() {
  return <JackArticleDB slug="video-games-dragon-ball-xenoverse-3-new-world-toriyama-age-1000-2027" />;
}
