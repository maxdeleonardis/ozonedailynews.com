import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = 'video-games-ark-raiders';
const ARTICLE_URL = 'https://www.objectwire.org/video-games/ark-raiders';
const IMAGE_URL =
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'ARK Raiders | Nexon Co-op Extraction Shooter',
  description:
    'ARK Raiders is a free-to-play co-op extraction shooter from Nexon built on Unreal Engine 5. Full profile of gameplay, lore, developer history, platforms,',
  keywords: [
    'ARK Raiders',
    'ARK Raiders game',
    'ARK Raiders Nexon',
    'ARK Raiders free to play',
    'ARK Raiders co-op shooter',
    'ARK Raiders extraction shooter',
    'ARK Raiders PC Xbox',
    'ARK Raiders gameplay',
    'ARK Raiders release date',
    'ARK Raiders lore story',
    'ARK Raiders beta 2026',
    'ARK Raiders weapons crafting',
    'ARK Raiders open world PvE',
    'new extraction shooter 2026',
    'best free to play shooters 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    type: 'article',
    title: 'ARK Raiders | Nexon Co-op Extraction Shooter',
    description:
      'Full profile of ARK Raiders, the free-to-play co-op extraction shooter from Nexon. Gameplay, lore, platforms, developer background, and release timeline.',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 675,
        alt: 'ARK Raiders game art, co-op extraction shooter',
      },
    ],
    publishedTime: '2026-03-31T00:00:00Z',
    section: 'Video Games',
    tags: ['ARK Raiders', 'Nexon', 'Extraction Shooter', 'Free to Play'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARK Raiders | Nexon Co-op Extraction Shooter',
    description:
      "Full profile of ARK Raiders, Nexon's free-to-play co-op extraction shooter. Story, gameplay, platforms, and what makes it different from the competition.",
    images: [IMAGE_URL],
  },
};

export default function VideoGamesArkRaidersPage() {
  return <ArticlePageDB slug="video-games-ark-raiders" />;
}
