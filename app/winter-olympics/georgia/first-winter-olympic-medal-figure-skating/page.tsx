import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Georgia Wins First Ever Winter Olympic Medal in Pairs Figure Skating | Milano Cortina 2026 | ObjectWire',
  description: 'Anastasia Metelkina and Luka Berulava made history at Milano Cortina 2026 by winning Georgia\'s first-ever Winter Olympic medal — a silver in pairs figure skating that has sent a nation into celebration.',
  keywords: [
    'Georgia Winter Olympics', 'first Winter Olympic medal', 'Metelkina Berulava',
    'pairs figure skating', 'Milano Cortina 2026', 'Georgia silver medal',
    'Winter Olympics history', 'figure skating 2026', 'historic medal',
  ],
  openGraph: {
    title: 'Georgia Wins Its First Ever Winter Olympic Medal in Pairs Figure Skating',
    description: 'Anastasia Metelkina and Luka Berulava win pairs figure skating silver — a historic first Winter Olympic medal for Georgia at Milano Cortina 2026.',
    type: 'article',
    publishedTime: '2026-02-17T15:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/georgia/first-winter-olympic-medal-figure-skating',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgia Wins First Ever Winter Olympic Medal — Pairs Figure Skating Silver',
    description: 'Metelkina and Berulava make history for a nation at Milano Cortina 2026.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/georgia/first-winter-olympic-medal-figure-skating',
  },
};

export default function GeorgiaFirstWinterMedalPage() {
  return <WikiArticle slug="winter-olympics-georgia-first-winter-olympic-medal-figure-skating" />;
}
