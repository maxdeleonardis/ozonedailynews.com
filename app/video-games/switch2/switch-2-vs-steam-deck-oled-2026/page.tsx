import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const revalidate = 3600;

const SLUG = '/video-games/switch2/switch-2-vs-steam-deck-oled-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Nintendo Switch 2 vs Steam Deck OLED | Which to Buy 2026',
  description:
    'Nintendo Switch 2 ($449.99, June 5) vs Steam Deck OLED ($549). Side-by-side: specs, screen quality, game libraries, portability, and price. Which handheld',
  keywords: [
    'Nintendo Switch 2 vs Steam Deck',
    'Switch 2 vs Steam Deck OLED',
    'Nintendo Switch 2 vs Steam Deck OLED 2026',
    'should I buy Switch 2 or Steam Deck',
    'Switch 2 specs',
    'Steam Deck OLED specs',
    'Nintendo Switch 2 price',
    'Steam Deck OLED price',
    'best handheld gaming 2026',
    'Nintendo Switch 2 display',
    'Switch 2 OLED vs LCD',
    'Steam Deck game library',
    'Nintendo Switch 2 exclusive games',
    'Nintendo Switch 2 June 2026',
    'handheld console comparison 2026',
    'Switch 2 Joy-Con 2 mouse mode',
    'Steam Deck vs Nintendo 2026',
    'portable gaming console 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Nintendo Switch 2 vs Steam Deck OLED | Which to Buy in 2026',
    description:
      'Switch 2 launches June 5 at $449.99. Steam Deck OLED is $549. Both are handheld consoles, but they serve completely different players. Full comparison:',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-11T14:00:00Z',
    modifiedTime: '2026-05-11T14:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Nintendo Switch 2 vs Steam Deck OLED comparison 2026' }],
    tags: ['Nintendo Switch 2', 'Steam Deck', 'Gaming', 'Console Comparison', 'Valve'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Switch 2 vs Steam Deck OLED | The honest 2026 comparison',
    description:
      'Switch 2 is $449.99. Steam Deck OLED is $549. One has Nintendo exclusives. One has 50,000 Steam games. Here is how to decide.',
    images: [OG_IMAGE],
  },
};

export default function Switch2VsSteamDeckPage() {
  return <JackArticleDB slug="video-games-switch2-vs-steam-deck-oled-2026" />;
}
