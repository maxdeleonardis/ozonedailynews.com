import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/battlefield-6/news/2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Battlefield 6 2026 Roadmap | Seasons 3-5, Naval Warfare',
  description: 'EA and DICE release the official Battlefield 6 2026 roadmap: Season 3 brings Golmud Railway and Grand Bazaar remakes, Season 4 adds naval combat and Wake',
  keywords: [
    'Battlefield 6 2026 roadmap',
    'Battlefield 6 Season 3',
    'Battlefield 6 Season 4 naval warfare',
    'Battlefield 6 Wake Island',
    'Battlefield 6 Golmud Railway reimagining',
    'Battlefield 6 server browser',
    'Battlefield 6 ranked play',
    'Battlefield 6 proximity chat',
    'Battlefield 6 Season 5',
    'DICE Battlefield 6 roadmap April 2026',
    'Battlefield 6 Cairo Bazaar',
    'Battlefield 6 Tsuru Reef',
    'Battlefield 6 aircraft carriers',
    'Battlefield 6 back to roots',
    'Battlefield 6 platoons leaderboards',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Battlefield 6 2026 Roadmap | Naval Combat, Wake Island',
    description: 'Official DICE roadmap: Season 3 classic map remakes, Season 4 aircraft carriers and Wake Island, Season 5 three holiday maps. Server browser and proximity',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-19T14:00:00Z',
    modifiedTime: '2026-04-19T14:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Military combat game environment' }],
    tags: ['Battlefield 6', 'DICE', 'EA', 'Gaming', 'Roadmap'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Battlefield 6 2026 Roadmap | Wake Island, Naval Combat',
    description: '3 seasons, 7 maps, aircraft carriers, ranked play, proximity chat, and server browser — DICE spent a year listening.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesBattlefield6News2026RoadmapSeasons345NavalWarfareBackToRootsPage() {
  return <JackArticleDB slug="video-games-battlefield-6-news-2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots" />;
}
