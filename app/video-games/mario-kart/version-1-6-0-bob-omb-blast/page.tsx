import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/mario-kart/version-1-6-0-bob-omb-blast';
const OG_IMAGE = 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Mario Kart World Version 1.6.0 | Bob-omb Blast Return',
  description:
    'Nintendo released Mario Kart World Version 1.6.0 on March 30, 2026, adding Bob-omb Blast battle mode, Bullet Bill buffs, new invincibility scaling, and',
  keywords: [
    'Mario Kart World Version 1.6.0',
    'Mario Kart World Bob-omb Blast',
    'Mario Kart World update March 2026',
    'Bob-omb Blast Switch 2',
    'Mario Kart World battle mode',
    'Mario Kart World patch notes 1.6.0',
    'Nintendo Switch 2 Mario Kart update',
    'Mario Kart World Bullet Bill buff',
    'Mario Kart World online play update',
    'Mario Kart World balance changes',
    'Mario Kart Double Dash Bob-omb Blast',
    'Mario Kart World live service 2026',
    'Nintendo MAR10 Day 2026',
    'Mario Kart World invincibility frames',
    'Mario Kart World Boomerang Flower nerf',
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    title: 'Mario Kart World 1.6.0 Brings Back Bob-omb Blast on',
    description:
      'The first major Battle Mode update since launch adds Bob-omb Blast, hold-up-to-10 explosives, L Button throw control, Bullet Bill buffs, and dynamic',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-30T12:00:00Z',
    modifiedTime: '2026-03-30T12:00:00Z',
    section: 'Gaming',
    tags: [
      'Mario Kart World',
      'Nintendo Switch 2',
      'Nintendo',
      'Bob-omb Blast',
      'Gaming',
      'Battle Mode',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mario Kart World 1.6.0 | Bob-omb Blast is back, hold 10 at',
    description:
      'Nintendo just dropped Version 1.6.0 for Mario Kart World. Bob-omb Blast returns, Bullet Bill got buffed, and invincibility now scales by weight class.',
  },
};

export default function VideoGamesMarioKartVersion160BobOmbBlastPage() {
  return <NewsArticleDB slug="video-games-mario-kart-version-1-6-0-bob-omb-blast" />;
}
