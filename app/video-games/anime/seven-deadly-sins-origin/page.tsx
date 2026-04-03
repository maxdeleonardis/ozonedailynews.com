import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Seven Deadly Sins: Origin Open World Launches March 2026 on PS5 and Steam | ObjectWire',
  description:
    'The Seven Deadly Sins: Origin launches March 16, 2026, on PS5 and Steam, followed by iOS, Android, and PC expansion on March 23. The free-to-play open-world action RPG from Netmarble uses Unreal Engine 5 and features Prince Tristan in a fractured Britannia.',
  keywords: [
    'Seven Deadly Sins Origin',
    'Seven Deadly Sins Origin open world',
    'Seven Deadly Sins Origin march 2026',
    'Seven Deadly Sins Origin PS5',
    'Seven Deadly Sins Origin Steam',
    'Seven Deadly Sins Origin release date',
    'Netmarble open world RPG 2026',
    'Seven Deadly Sins Origin mobile',
    'Prince Tristan Tioreh',
    'Britannia open world RPG',
    'anime open world game 2026',
    'Seven Deadly Sins Nanatsu no Taizai game',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/anime/seven-deadly-sins-origin',
  },
  openGraph: {
    title: 'Seven Deadly Sins: Origin Open World RPG -- March 16 on PS5 and Steam, March 23 Mobile',
    description:
      'Free-to-play open-world action RPG in the Seven Deadly Sins universe. Unreal Engine 5, real-time tag combat, climbing, gliding, crafting, anime voice cast, and gacha hero collection.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/anime/seven-deadly-sins-origin',
    siteName: 'ObjectWire',
    images: [{ url: '/video-games/seven_deadly_sins_orgins.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seven Deadly Sins: Origin -- Open World RPG Coming March 2026',
    description:
      'PS5 and Steam on March 16. iOS, Android, and PC expanded access on March 23. Unreal Engine 5, Prince Tristan, real-time tag combat, and open-world Britannia.',
  },
};

export default function SevenDeadlySinsOriginPage() {
  return <NewsArticleDB slug="video-games-anime-seven-deadly-sins-origin" />;
}
