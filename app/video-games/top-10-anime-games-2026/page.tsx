import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Top 10 Anime Games of 2026 | Best Seasonal Games & Battle',
  description: 'Discover the best anime games in 2026 with seasonal updates, including My Hero Ultra Rumble, Dragon Ball Legends, Jujutsu Kaisen, and more. Complete',
  keywords: [
    'best anime games 2026',
    'top anime games',
    'anime games with seasons',
    'anime battle royale',
    'My Hero Ultra Rumble',
    'Dragon Ball games',
    'Jujutsu Kaisen games',
    'gacha games 2026',
    'anime multiplayer games',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/top-10-anime-games-2026',
  },
  openGraph: {
    title: 'Top 10 Anime Games of 2026 | Best Seasonal Games & Battle',
    description: 'Discover the best anime games in 2026 with seasonal updates, including My Hero Ultra Rumble, Dragon Ball Legends, and more.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/top-10-anime-games-2026',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Anime Games of 2026 | Best Seasonal Games & Battle',
    description: 'Rankings of the most popular anime games with seasonal updates in 2026.',
  },
};

export default function Top10AnimeGames2026() {
  return <WikiArticle slug="video-games-top-10-anime-games-2026" />;
}
