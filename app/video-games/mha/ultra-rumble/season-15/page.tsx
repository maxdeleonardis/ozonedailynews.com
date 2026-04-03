import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'My Hero Ultra Rumble Season 15: New Characters & Updates | ObjectWire',
  description: 'Season 15 of My Hero Ultra Rumble brings new playable characters, balance updates, and fresh content to the popular free-to-play battle royale game.',
  keywords: [
    'My Hero Ultra Rumble Season 15',
    'Ultra Rumble new characters',
    'MHA battle royale update',
    'Season 15 characters',
    'My Hero Academia game',
    'Ultra Rumble update 2026',
    'Bandai Namco MHA',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/mha/ultra-rumble/season-15',
  },
  openGraph: {
    title: 'My Hero Ultra Rumble Season 15: New Characters & Updates',
    description: 'Season 15 of My Hero Ultra Rumble brings new playable characters, balance updates, and fresh content to the popular free-to-play battle royale game.',
    type: 'article',
    url: 'https://www.objectwire.org/mha/ultra-rumble/season-15',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Hero Ultra Rumble Season 15: New Characters & Updates',
    description: 'Season 15 brings new playable characters and updates to My Hero Ultra Rumble.',
  },
};

export default function Season15Page() {
  return <WikiArticle slug="video-games-mha-ultra-rumble-season-15" />;
}
