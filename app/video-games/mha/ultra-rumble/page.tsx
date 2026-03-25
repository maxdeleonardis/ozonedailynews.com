import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'My Hero Ultra Rumble: Complete Game Guide & Wiki | ObjectWire',
  description: 'Comprehensive guide to My Hero Ultra Rumble, the free-to-play 24-player battle royale based on My Hero Academia. Characters, gameplay, seasons, and competitive scene.',
  keywords: [
    'My Hero Ultra Rumble',
    'MHA battle royale',
    'My Hero Academia game',
    'Ultra Rumble characters',
    'Bandai Namco',
    'free to play battle royale',
    'anime battle royale',
    'MHA Ultra Rumble wiki',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/mha/ultra-rumble',
  },
  openGraph: {
    title: 'My Hero Ultra Rumble: Complete Game Guide & Wiki',
    description: 'Comprehensive guide to My Hero Ultra Rumble, the free-to-play 24-player battle royale based on My Hero Academia.',
    type: 'article',
    url: 'https://www.objectwire.org/mha/ultra-rumble',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Hero Ultra Rumble: Complete Game Guide & Wiki',
    description: 'Comprehensive guide to My Hero Ultra Rumble, the free-to-play 24-player battle royale based on My Hero Academia.',
  },
};

export default function MyHeroUltraRumblePage() {
  return <WikiArticle slug="video-games-mha-ultra-rumble" />;
}
