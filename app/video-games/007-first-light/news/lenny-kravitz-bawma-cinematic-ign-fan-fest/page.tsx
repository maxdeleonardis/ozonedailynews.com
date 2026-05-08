import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Lenny Kravitz Revealed as Villain Bawma in 007 First',
  description:
    'IGN unveiled a new cinematic trailer for 007: First Light at Fan Fest 2026 spotlighting Lenny Kravitz as villain Bawma, a pirate king and black-market',
  keywords: [
    'Lenny Kravitz 007 First Light',
    'Bawma villain 007 First Light',
    '007 First Light IGN Fan Fest 2026',
    '007 First Light cinematic trailer',
    'Lenny Kravitz James Bond villain',
    'IO Interactive James Bond game',
    '007 First Light May 2026',
    'Hakan Abrak 007 First Light',
    'Aleph black market 007',
    'James Bond origin game',
  ],
  alternates: {
    canonical:
      'https://www.objectwire.org/video-games/007-first-light/news/lenny-kravitz-bawma-cinematic-ign-fan-fest',
  },
  openGraph: {
    title: 'Lenny Kravitz as Villain Bawma in 007 | First Light -- IGN',
    description:
      'New cinematic trailer for IO Interactive\'s 007: First Light reveals Lenny Kravitz as pirate king Bawma. Multi-layered antagonist, crocodile scene, and',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/007-first-light/news/lenny-kravitz-bawma-cinematic-ign-fan-fest',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lenny Kravitz Is the Villain in 007: First Light',
    description:
      'New IGN Fan Fest 2026 cinematic trailer shows Lenny Kravitz as Bawma, a pirate king and black-market dealer. 007: First Light releases May 27, 2026.',
  },
};

export default function LennyKravitzBawmaArticlePage() {
  return <NewsArticleDB slug="video-games-007-first-light-news-lenny-kravitz-bawma-cinematic-ign-fan-fest" />;
}
