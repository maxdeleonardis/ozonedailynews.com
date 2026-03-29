import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'KOTOR Remake Still in Development, Saber Confirms | 5 Years After Reveal | ObjectWire',
  description:
    'Saber Interactive CCO Tim Willits confirmed in 11 words that the Star Wars: Knights of the Old Republic remake is still in development, five years after its cinematic reveal at a PlayStation Showcase, with no gameplay footage ever shown.',
  keywords: [
    'KOTOR remake 2026',
    'Knights of the Old Republic remake Saber Interactive',
    'KOTOR remake still in development',
    'Tim Willits KOTOR IGN interview',
    'KOTOR remake Aspyr Saber',
    'Star Wars KOTOR remake PS5',
    'KOTOR remake Mad Head Games',
    'KOTOR II remake Juliet codename',
    'KOTOR remake release date',
    'Star Wars game 2026',
    'KOTOR remake gameplay',
    'KOTOR remake canceled',
    'Saber Interactive Star Wars',
    'KOTOR remake development update',
  ],
  alternates: { canonical: 'https://www.objectwire.org/video-games/news/kotor-remake-saber-confirmed-still-in-development' },
  openGraph: {
    title: "KOTOR Remake Still Alive, Saber Says | 5 Years After Reveal, Still No Gameplay",
    description:
      'Tim Willits offered exactly 11 words: "Yes, it is still in development. That\'s all I can say." Five years on, no screenshot, no footage, and a developer shuffle that keeps growing.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/news/kotor-remake-saber-confirmed-still-in-development',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-03-07T18:00:00Z',
    modifiedTime: '2026-03-07T18:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOTOR Remake Is Still in Development | Saber Confirms, 5 Years On',
    description:
      '11 words from Saber\'s CCO Tim Willits keep the hope alive. But after half a decade with zero gameplay shown, the Star Wars community\'s patience is running thin.',
  },
};

export default function KOTORRemakePage() {
  return <WikiArticle slug="video-games-news-kotor-remake-saber-confirmed-still-in-development" />;
}
