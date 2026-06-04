import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/bandai-namco/ace-combat-8-wings-of-theve-release-date-october-2026';
const ARTICLE_URL = `https://www.OzoneNews.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Ace Combat 8 Wings of Theve | Release Date October 2, 2026',
  description: 'Ace Combat 8: Wings of Theve launches October 2, 2026 on PS5, Xbox Series X/S, and PC. Unreal Engine 5, franchise 30th anniversary, Joker Squadron story, Land Battleship superweapon, and multiplayer confirmed.',
  keywords: [
    'Ace Combat 8 Wings of Theve release date',
    'Ace Combat 8 October 2026',
    'Ace Combat 8 PS5 Xbox PC',
    'Wings of Theve Bandai Namco',
    'Ace Combat 8 Strangereal story',
    'Ace Combat 8 Joker Squadron',
    'Ace Combat 8 Unreal Engine 5',
    'Ace Combat 8 multiplayer',
    'Ace Combat 8 editions price',
    'Ace Combat 8 pre-order bonuses',
    'Ace Combat 8 Joker Flight Pack',
    'Ace Combat Zero Belkan War remaster',
    'Ace Combat 30th anniversary',
    'Project Aces State of Play 2026',
    'Ace Combat 8 Land Battleship',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ace Combat 8: Wings of Theve | October 2, 2026 Release Date Confirmed',
    description: 'Built on UE5 for the franchise 30th anniversary. Joker Squadron, dynamic cloudscapes, Land Battleship, multiplayer, and Ace Combat Zero bundled with every pre-order.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-06-04T16:00:00-05:00',
    modifiedTime: '2026-06-04T16:00:00-05:00',
    section: 'Gaming',
    tags: ['Ace Combat 8', 'Bandai Namco', 'Project Aces', 'PlayStation 5', 'State of Play'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ace Combat 8: Wings of Theve | Oct 2, 2026 — UE5, Multiplayer, Ace Combat Zero Bundled',
    description: '30th anniversary, Strangereal July 2029, Joker Squadron, Land Battleship. Deluxe gets Sep 28 early access.',
  },
};

export default function AceCombat8ReleaseDatePage() {
  return <NewsArticleDB slug="video-games-bandai-namco-ace-combat-8-wings-of-theve-release-date-october-2026" />;
}
