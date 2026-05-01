import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


const SLUG =
  '/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/video-games/marathon-server-slam-steam-concurrent-players-peak-2026.jpg';

export const metadata: Metadata = {
  title:
    'Marathon Server Slam Steam Concurrent Players Drop Over',
  description:
    "Bungie's Marathon Server Slam beta peaked at 143,621 concurrent players on Steam on February 26, 2026, before dropping over 50% by March 1 to a live count",
  keywords: [
    'Marathon Server Slam Steam concurrent players 2026',
    'Marathon beta peak 143621 Steam February 2026',
    'Bungie Marathon Server Slam March 2026',
    'Marathon extraction shooter beta Steam drop',
    'Marathon Server Slam player count SteamDB',
    'Marathon vs Arc Raiders beta comparison Steam peak',
    'Marathon launch date March 5 2026',
    'Marathon Server Slam rewards emblems implants weapons',
    'Marathon Server Slam cross-play PS5 Xbox Steam',
    'extraction shooter beta player count 2026',
    'Marathon beta feedback UI PvP complaints',
    'Marathon Steam Next Fest 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Marathon Server Slam | 143,621 Steam Peak on Day One, Then",
    description:
      "Bungie's Marathon Server Slam hit 143,621 concurrent Steam players on February 26, 2026, then shed more than half by March 1. The open beta runs through",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T18:00:00Z',
    modifiedTime: '2026-03-01T18:00:00Z',
    section: 'Video Games',
    tags: [
      'Marathon',
      'Bungie',
      'Server Slam',
      'Steam',
      'Extraction Shooter',
      'Beta',
      'SteamDB',
      'Video Games',
      'Gaming',
      'Arc Raiders',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Marathon Server Slam Peaked at 143,621 Steam Players",
    description:
      "Bungie's Marathon beta: 143,621 Steam peak on Feb 26, dropped to ~58,688 live by March 1. Full launch March 5. Here's the breakdown.",
    images: [IMAGE_URL],
  },
};

export default function MarathonServerSlamPage() {
  return <JackArticleDB slug="video-games-news-marathon-server-slam-steam-concurrent-players-peak-drop-march-2026" />;
}
