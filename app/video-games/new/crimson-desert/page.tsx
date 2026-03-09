import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Crimson Desert Hits 3 Million Wishlists Before March 19 Launch | ObjectWire',
  description:
    'Pearl Abyss\'s open-world action RPG Crimson Desert crossed 3 million wishlists across PC, PS5, Xbox Series X|S, and Mac ahead of its March 19, 2026 release — rivaling Elden Ring and Starfield pre-launch numbers.',
  keywords: [
    'Crimson Desert wishlists',
    'Crimson Desert release date',
    'Crimson Desert March 19 2026',
    'Pearl Abyss Crimson Desert',
    'Crimson Desert 3 million wishlists',
    'Crimson Desert open world',
    'Crimson Desert Kliff Greymanes',
    'Crimson Desert vs Elden Ring wishlists',
    'Crimson Desert Pywel',
    'Crimson Desert single player',
    'Pearl Abyss Black Desert',
    'Crimson Desert map size Skyrim',
  ],
  alternates: { canonical: 'https://www.objectwire.org/video-games/new/crimson-desert' },
  openGraph: {
    title: 'Crimson Desert Hits 3M Wishlists — Pearl Abyss RPG Rivals Elden Ring Pre-Launch Hype',
    description:
      '3 million wishlists across PC, PS5, Xbox, and Mac. A map twice Skyrim\'s size. Pearl Abyss pivots from MMO to single-player action RPG ahead of March 19 launch.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/new/crimson-desert',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-06T20:00:00Z',
    modifiedTime: '2026-03-06T20:00:00Z',
    section: 'Gaming',
    tags: ['Crimson Desert', 'Pearl Abyss', 'RPG', 'Open World', 'PS5', 'Xbox', 'Steam'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crimson Desert — 3M Wishlists Before March 19 Launch',
    description:
      'Pearl Abyss\'s single-player pivot rivals Elden Ring and Starfield in pre-launch wishlists. Open world twice Skyrim\'s size. Launches March 19.',
  },
};

export default function CrimsonDesertPage() {
  return <WikiArticle slug="video-games-new-crimson-desert" />;
}
