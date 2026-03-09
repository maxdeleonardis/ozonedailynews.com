import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Jens Luraas Oftebro Wins Second Gold in Nordic Combined at Milano Cortina 2026 | ObjectWire',
  description: 'Norway\'s Jens Luraas Oftebro claimed his second gold medal of the Milano Cortina 2026 Winter Olympics with a dominant performance in Nordic combined, surging past the field in the 10km cross-country leg.',
  keywords: [
    'Jens Luraas Oftebro', 'Nordic combined gold', 'Norway Winter Olympics',
    'Milano Cortina 2026', 'Nordic combined 2026', 'Norway gold medal',
    'Winter Olympics 2026', 'cross-country skiing', 'ski jumping', 'Norwegian dominance',
  ],
  openGraph: {
    title: 'Oftebro Wins Second Nordic Combined Gold at Milano Cortina 2026',
    description: 'Norway\'s Jens Luraas Oftebro cements his status as the Games\' dominant Nordic combined athlete with a second gold medal and a powerful 10km finish.',
    type: 'article',
    publishedTime: '2026-02-17T17:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/norway/oftebro-second-nordic-combined-gold',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oftebro Wins Second Gold in Nordic Combined | Milano Cortina 2026',
    description: 'Norway\'s dominant Nordic combined athlete delivers another commanding victory at the Winter Olympics.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/norway/oftebro-second-nordic-combined-gold',
  },
};

export default function OftebroSecondNordicCombinedGoldPage() {
  return <WikiArticle slug="winter-olympics-norway-oftebro-second-nordic-combined-gold" />;
}
