import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/ark-raiders/flash-point-update';
const OG_IMAGE = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Arc Raiders Flashpoint Update | New Enemies, Weapons, Map',
  description:
    'Arc Raiders Flashpoint update launches Tuesday, March 31, 2026 at 1:30 AM PT across PC, PS5, and Xbox Series X|S. The free drop adds new enemies, weapons,',
  keywords: [
    'Arc Raiders Flashpoint update 2026',
    'Arc Raiders March 31 update',
    'Arc Raiders new enemies Flashpoint',
    'Arc Raiders Embark Studios update',
    'Arc Raiders PC PS5 Xbox patch',
    'Arc Raiders Flashpoint weapons',
    'Arc Raiders map conditions update',
    'Arc Raiders 1.30 AM PT maintenance',
    'Arc Raiders free content update',
    'Arc Raiders extraction shooter update',
    'Embark Studios Arc Raiders patch',
    'Arc Raiders server maintenance March 2026',
    'Arc Raiders new content 2026',
    'Arc Raiders Flashpoint patch notes',
    'best extraction shooter updates 2026',
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    title: 'Arc Raiders Flashpoint Update Launches Tuesday | New',
    description:
      'Embark Studios rolls out the free Flashpoint update for Arc Raiders on March 31, 2026 at 1:30 AM PT. New threats, weapons, and map conditions arrive',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T10:00:00Z',
    modifiedTime: '2026-03-31T10:00:00Z',
    section: 'Video Games',
    tags: [
      'Arc Raiders',
      'Embark Studios',
      'Flashpoint',
      'Extraction Shooter',
      'PC',
      'PS5',
      'Xbox Series X',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arc Raiders Flashpoint drops Tuesday at 1:30 AM PT. New',
    description:
      'Free update from Embark Studios hits PC, PS5, and Xbox Series X|S. Servers go down 1-3 hours before launch.',
  },
};

export default function VideoGamesArkRaidersFlashPointUpdatePage() {
  return <NewsArticleDB slug="video-games-ark-raiders-flash-point-update" />;
}
