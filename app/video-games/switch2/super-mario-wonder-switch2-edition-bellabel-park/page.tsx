import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://www.ozonenetwork.news/video-games/mariokart.png';

export const metadata: Metadata = {
  title: 'Super Mario Wonder Switch 2 Edition | Bellabel Park',
  description:
    'Super Mario Bros. Wonder Switch 2 Edition launches March 26, 2026 with Bellabel Park, 12-player online, 70+ training courses, and a $20 upgrade path for',
  keywords: [
    'Super Mario Bros. Wonder Switch 2 Edition',
    'Super Mario Wonder Switch 2',
    'Bellabel Park Mario Wonder',
    'Nintendo Switch 2 Mario game',
    'Super Mario Wonder online multiplayer',
    'Attraction Central Switch 2',
    'Camp Central Mario Wonder',
    'Mario Wonder $20 upgrade',
    'Super Mario Wonder March 2026',
    'Nintendo Switch 2 platform',
    'Super Mario Bros. Wonder review',
    'Mario Wonder training courses',
    'Nintendo Switch 2 launch titles',
    'Super Mario Wonder Rosalina',
    'Mario Wonder cooperative play',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Super Mario Wonder Switch 2 Edition | Bellabel Park Guide',
    description:
      'Everything new in the Nintendo Switch 2 Edition of Super Mario Bros. Wonder, including Bellabel Park, 12-player online rooms, 70+ training courses, and a',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-08T14:00:00Z',
    modifiedTime: '2026-04-08T14:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Super Mario Bros. Wonder Nintendo Switch 2 Edition Bellabel Park' }],
    tags: ['Super Mario Bros. Wonder', 'Nintendo Switch 2', 'Bellabel Park', 'Nintendo', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Mario Wonder Switch 2 Edition | All the New Content',
    description: 'Bellabel Park, 12-player online, 70+ training courses, $20 upgrade. Everything new in Mario Wonder on Switch 2.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesSwitch2SuperMarioWonderSwitch2EditionBellabelParkPage() {
  return <JackArticleDB slug="video-games-switch2-super-mario-wonder-switch2-edition-bellabel-park" />;
}
