import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/fortnite/chapter-7-season-3-runners';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1640955014216-75201056c829?w=1200&h=675&fit=crop&q=80';

export const metadata: Metadata = {
  title: 'Fortnite Chapter 7 Season 3 Runners | Map, Battle Pass & Weapons',
  description:
    'Complete guide to Fortnite Chapter 7 Season 3 Runners. Shattered Coast map, exposed Zero Point, Seven Power Boots, Sprites, John Wick Battle Pass collab, and all 9 new weapons.',
  keywords: [
    'Fortnite Chapter 7 Season 3',
    'Fortnite Runners',
    'Fortnite Season 3 2026',
    'Fortnite Chapter 7 Season 3 Battle Pass',
    'Fortnite Season 3 map',
    'Fortnite Shattered Coast',
    'Fortnite Seven Power Boots',
    'Fortnite Sprites Season 3',
    'Fortnite John Wick skin 2026',
    'Fortnite Season 3 weapons',
    'Fortnite Chaos Reloader Assault Rifle',
    'Fortnite Rift Pistol',
    'Fortnite Zero Point exposed Season 3',
    'Fortnite Duck Mansion',
    'Fortnite June 6 2026',
    'Epic Games Fortnite new season',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Fortnite Chapter 7 Season 3 Runners | Complete Guide',
    description:
      'Shattered Coast map, exposed Zero Point hot-drop, Seven Power Boots, Fire Sprites, John Wick cel-shaded Battle Pass skin, 9 new weapons. Everything in Season 3 Runners.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Conan Boyle'],
    publishedTime: '2026-06-05T22:00:00-05:00',
    modifiedTime: '2026-06-05T22:00:00-05:00',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Fortnite Chapter 7 Season 3 Runners Season Guide' }],
    tags: ['Fortnite', 'Fortnite Chapter 7 Season 3', 'Fortnite Runners', 'Epic Games', 'Fortnite Battle Pass'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortnite Chapter 7 Season 3 | John Wick is back, Zero Point is exposed, boots are fast',
    description:
      'Full Season 3 Runners breakdown: Shattered Coast, Seven Power Boots, Fire Sprites, 8 Battle Pass skins, 9 weapons. Launches June 6, 2026.',
    images: [OG_IMAGE],
  },
};

export default function FortniteChapter7Season3Page() {
  return (
    <JackArticleDB slug="video-games-fortnite-chapter-7-season-3-runners" />
  );
}
