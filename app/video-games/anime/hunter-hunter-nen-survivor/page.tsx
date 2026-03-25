import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'HUNTER×HUNTER NEN×SURVIVOR Launches February 18, 2026 on iOS and Android | ObjectWire',
  description:
    'HUNTER×HUNTER NEN×SURVIVOR released globally on February 18, 2026 for iOS, Android, and Windows via Google Play Games. The free-to-play roguelike survivor action game by WonderPlanet reached 1.5 million pre-registrations with launch rewards including a free 5-star selector ticket and 10,000 Nen crystals.',
  keywords: [
    'HUNTER×HUNTER NEN×SURVIVOR',
    'Hunter x Hunter NEN SURVIVOR',
    'Hunter x Hunter mobile game 2026',
    'WonderPlanet',
    'Bushiroad',
    'roguelike mobile game 2026',
    'anime mobile RPG 2026',
    'Hunter x Hunter game iOS Android',
    'Nen abilities mobile game',
    'free to play anime game 2026',
    'Hunter x Hunter Gon Killua mobile',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/anime/hunter-hunter-nen-survivor',
  },
  openGraph: {
    title: 'HUNTER×HUNTER NEN×SURVIVOR -- February 18, 2026 Global Launch on iOS and Android',
    description:
      'Free-to-play roguelike survivor game in the Hunter x Hunter universe. 1.5M pre-registrations, original anime voice cast, four-character Nen teams, and random skill pools per run.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/anime/hunter-hunter-nen-survivor',
    siteName: 'ObjectWire',
    images: [{ url: '/video-games/thumbnail.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HUNTER×HUNTER NEN×SURVIVOR -- Roguelike Survivor Launches Feb 18, 2026',
    description:
      'iOS, Android, and Windows via Google Play Games. 1.5M pre-registrations, Nen ability builds, original cast voice acting, and auto-battle mode.',
  },
};

export default function HunterHunterNenSurvivorPage() {
  return <NewsArticleDB slug="video-games-anime-hunter-hunter-nen-survivor" />;
}
