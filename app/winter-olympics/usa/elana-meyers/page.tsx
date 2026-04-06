import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Elana Meyers Taylor | Team USA Bobsled | Olympic Profile',
  description:
    'Full profile of Elana Meyers Taylor, the 41-year-old American bobsled legend who won Olympic gold at Milano Cortina 2026, becoming the oldest Olympic',
  keywords: [
    'Elana Meyers Taylor',
    'Team USA bobsled',
    'women\'s monobob',
    'Milano Cortina 2026',
    'Winter Olympics 2026',
    'oldest Olympic bobsled champion',
    'most decorated female bobsledder',
    'Olympic gold medal',
    'bobsled athlete profile',
    'American bobsled history',
  ],
  openGraph: {
    title: 'Elana Meyers Taylor | The Most Decorated Female Bobsledder in Olympic History',
    description:
      'How a college softball player from Georgia became a five-time Olympian, a gold medalist at 41, and the greatest female bobsled pilot in the history of the',
    type: 'article',
    publishedTime: '2026-02-17T14:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/usa/elana-meyers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elana Meyers Taylor | Olympic Gold at 41, Legend for Life',
    description:
      'Five Olympics. Four medals. One gold that rewrote history. The complete story of Elana Meyers Taylor.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/elana-meyers',
  },
};

export default function ElanaMeyersTaylorProfile() {
  return <WikiArticle slug="winter-olympics-usa-elana-meyers" />;
}
