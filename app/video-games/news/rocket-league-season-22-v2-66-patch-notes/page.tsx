import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/rocket-league-season-22-v2-66-patch-notes';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Rocket League Season 22 Patch Notes | v2.66, Rocket Pass, LTE Changes',
  description:
    'Rocket League Season 22 (v2.66) adds a new Rocket Pass, concurrent Limited Time Events, a redesigned News Panel, ranked modifications, and major training',
  keywords: [
    'Rocket League Season 22',
    'Rocket League v2.66 patch notes',
    'Rocket League Rocket Pass Season 22',
    'Rocket League concurrent LTE',
    'Rocket League training improvements',
    'Rocket League ranked changes 2026',
    'Rocket League flip reset indicator',
    'Rocket League boost pad recharge visual',
    'Rocket League preset slots',
    'Rocket League News Panel redesign',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Rocket League Season 22 | New Rocket Pass, Concurrent LTEs, Training QoL',
    description:
      'v2.66 launches Season 22 with a new Rocket Pass, concurrent Limited Time Events, expanded preset slots, flip-reset indicators, and boost-pad recharge',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-03-31T15:00:00Z',
    modifiedTime: '2026-03-31T15:00:00Z',
    section: 'Video Games',
    tags: ['Rocket League', 'Season 22', 'Patch Notes', 'Psyonix', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket League Season 22 | v2.66 Adds Concurrent LTEs and Training Upgrades',
    description:
      'Season 22 brings a new Rocket Pass, concurrent Limited Time Events, flip-reset indicators, boost-pad visuals, and expanded preset slots.',
  },
};

export default function VideoGamesNewsRocketLeagueSeason22V266PatchNotesPage() {
  return <NewsArticleDB slug="video-games-news-rocket-league-season-22-v2-66-patch-notes" />;
}
