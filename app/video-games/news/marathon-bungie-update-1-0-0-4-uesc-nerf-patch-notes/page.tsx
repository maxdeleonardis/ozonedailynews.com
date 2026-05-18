import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/news/marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;

export const metadata: Metadata = {
  title:
    'Marathon Update 1.0.0.4, Bungie Nerfs UESC AI, Thermal',
  description:
    'Bungie has deployed Marathon Update 1.0.0.4 on March 11, 2026. The first major balance pass reduces UESC enemy health by 10–15%, cuts boss shield HP by',
  keywords: [
    'Marathon Update 1.0.0.4 patch notes',
    'Marathon Bungie UESC nerf March 2026',
    'Marathon UESC health reduction boss shield nerf',
    'Marathon thermal scope nerf range cap',
    'Marathon 1.0.0.4 balance patch',
    'Marathon Perimeter med cabinets munitions crates',
    'Marathon Traxus Contract UESC Commander nerf',
    'Marathon Broken Wing Pinwheel Outpost disabled',
    'Marathon extraction shooter patch notes 2026',
    'Bungie Marathon solo balance update',
    'Marathon sponsored kits MIDA CyberAcme Arachne',
    'Marathon Rook backpack bug fix',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Marathon Update 1.0.0.4 | UESC Nerfed, Thermal Nerfed',
    description:
      'Bungie\'s first major balance pass for Marathon (2026) reduces UESC health by 10–15%, slashes boss shield HP by 25%, and caps thermal scope tracking at',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T10:00:00Z',
    modifiedTime: '2026-03-12T10:00:00Z',
    section: 'Video Games',
    tags: ['Marathon', 'Bungie', 'Patch Notes', 'UESC', 'Extraction Shooter', 'Video Games', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marathon 1.0.0.4 | Bungie Nerfs UESC Bullet Sponges',
    description:
      'UESC standard enemies: -10–15% HP. Boss shields: -25%. Thermal tracking: 180m → 100m. Perimeter gets more Med Cabinets. Full patch notes breakdown.',
  },
};

export default function MarathonUpdate1004Page() {
  return <NewsArticleDB slug="video-games-news-marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes" />;
}
