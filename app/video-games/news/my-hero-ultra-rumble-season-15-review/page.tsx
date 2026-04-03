import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/my-hero-ultra-rumble-season-15-review';

export const metadata: Metadata = {
  title: 'My Hero Ultra Rumble Season 15 Review: Tokoyami, Neo Academia & Patch 1.14.0 | ObjectWire',
  description:
    'My Hero Ultra Rumble Season 15 launched January 21, 2026, adding Fumikage Tokoyami as a new Assault character, the Neo Academia stage rotating every 2 hours, and events running through March 25, 2026. Full patch notes, gacha schedule, Steam metrics, and review.',
  keywords: [
    'My Hero Ultra Rumble Season 15 review',
    'MHUR Season 15 Tokoyami',
    'My Hero Ultra Rumble patch 1.14.0',
    'Fumikage Tokoyami Ultra Rumble',
    'Neo Academia stage Ultra Rumble',
    'My Hero Ultra Rumble January 2026',
    'MHUR Dark Shadow quirk',
    'Ultra Rumble Season 15 gacha',
    'My Hero Ultra Rumble Nejire Hado',
    'MHUR Steam concurrent players 2026',
    'My Hero Ultra Rumble Overhaul Season 15',
    'Bandai Namco Ultra Rumble update',
    'MHUR battle style adjustments patch',
    'My Hero Ultra Rumble events March 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'My Hero Ultra Rumble Season 15: Tokoyami, Neo Academia & Everything New',
    description:
      "Full breakdown of Season 15, Tokoyami's Dark Shadow kit, the Neo Academia rotating stage, all event rewards through March 25, gacha schedule, and Steam player data.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Video Games',
    tags: [
      'My Hero Ultra Rumble',
      'Season 15',
      'Tokoyami',
      'Bandai Namco',
      'Gaming',
      'Battle Royale',
      'My Hero Academia',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MHUR Season 15: Tokoyami Drops, Neo Academia Launches, Steam Peaks at 4,558',
    description:
      'Everything in My Hero Ultra Rumble Season 15, Dark Shadow kit, Neo Academia stage, all event rewards, gacha calendar, and Steam concurrent data through February 2026.',
  },
};

export default function MHURSeason15ReviewPage() {
  return <NewsArticleDB slug="video-games-news-my-hero-ultra-rumble-season-15-review" />;
}
