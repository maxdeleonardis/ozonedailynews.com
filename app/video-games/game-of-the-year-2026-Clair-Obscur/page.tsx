import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title:
    'Clair Obscur: Expedition 33 Built by Just 4 Programmers — Most Awarded Game in History | ObjectWire',
  description:
    'At GDC 2026, Sandfall Interactive revealed that 95% of Clair Obscur: Expedition 33 was built using Unreal Engine 5 Blueprints by a team of four programmers. The game has now surpassed Elden Ring with 436 GOTY awards — the most in history.',
  keywords: [
    'Clair Obscur Expedition 33 GDC 2026',
    'Sandfall Interactive Blueprint scripting',
    'Clair Obscur most awarded game history',
    'Unreal Engine 5 Blueprint game development',
    'Clair Obscur 436 GOTY awards',
    'Tom Guillermin Florian Torres GDC talk',
    'Clair Obscur vs Elden Ring GOTY record',
    'indie game of the year 2025',
    'Unreal Engine Blueprint production 2026',
    'Clair Obscur The Game Awards 2025 wins',
    'Sandfall Interactive four programmers',
    'Clair Obscur AI controversy Indie Game Awards',
    'GDC 2026 developer talk programming',
    'Blueprint scripting vs C++ Unreal Engine',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/game-of-the-year-2026-Clair-Obscur',
  },
  openGraph: {
    title: 'Clair Obscur Was Built by 4 Programmers — And Just Became the Most Awarded Game Ever',
    description:
      '95% Blueprint, 4 programmers, under $10M budget. Sandfall Interactive\'s GDC 2026 talk revealed how Clair Obscur: Expedition 33 beat Elden Ring\'s all-time GOTY record with 436 wins.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/game-of-the-year-2026-Clair-Obscur',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-17T18:00:00Z',
    modifiedTime: '2026-03-17T18:00:00Z',
    section: 'Video Games',
    tags: [
      'Clair Obscur',
      'GDC 2026',
      'Sandfall Interactive',
      'Unreal Engine 5',
      'Game of the Year',
      'Indie Games',
      'Video Games',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clair Obscur: 4 Programmers, 95% Blueprint, Most Awarded Game in History',
    description:
      '436 GOTY wins. 9 TGA awards in one night. Built by 4 programmers using Unreal Engine Blueprints. Sandfall\'s GDC 2026 talk left the Moscone Center in a "collective murmur of shock."',
  },
};

export default function GameOfTheYear2026ClairObscurPage() {
  return <WikiArticle slug="video-games-game-of-the-year-2026-Clair-Obscur" />;
}
