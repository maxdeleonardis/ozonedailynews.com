import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/windrose/windrose-222k-concurrent-players-steam-viral-indie-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Windrose Hits 222K Steam Players | Viral Indie Breakout 2026',
  description: 'Windrose, the pirate survival game by Kraken Express, hit 222,134 concurrent players on Steam on April 19, 2026, surpassing Dune: Awakening and selling 1 million copies in six days.',
  keywords: [
    'Windrose game',
    'Windrose Steam concurrent players',
    'Windrose 222K Steam',
    'Windrose viral indie 2026',
    'Windrose 1 million sales',
    'Windrose pirate survival game',
    'Windrose Kraken Express',
    'Windrose early access 2026',
    'Windrose vs Dune Awakening',
    'Windrose Valheim pirate',
    'Windrose ship building',
    'Windrose boar meme',
    'Windrose roadmap 2026',
    'best indie game April 2026',
    'pirate survival game Steam 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Windrose Hits 222K Steam Players | 2026\'s First Viral Indie Breakout',
    description: '1 million copies in 6 days. 222K peak concurrent players. #1 in the US on Steam. Windrose is the indie hit nobody saw coming.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-21T22:00:00Z',
    modifiedTime: '2026-04-21T22:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Windrose pirate survival game Steam 222K concurrent players' }],
    tags: ['Windrose', 'Steam', 'Indie Gaming', 'Pirate Games'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windrose: 222K Peak Players, 1M Copies in 6 Days. 2026\'s Breakout Indie Is Here.',
    description: '"Valheim meets Black Flag." Kraken Express just shipped the survival hit of the year. Full breakdown.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesWindroseWindrose222kConcurrentPlayersSteamViralIndie2026Page() {
  return <NewsArticleDB slug="video-games-windrose-windrose-222k-concurrent-players-steam-viral-indie-2026" />;
}
