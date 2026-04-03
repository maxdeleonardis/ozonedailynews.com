import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Elana Meyers Taylor Wins Monobob Gold at 41: Oldest Olympic Bobsled Champion in History | ObjectWire',
  description: 'Elana Meyers Taylor, 41, made Olympic history at Milano Cortina 2026 by winning women\'s monobob gold, becoming the oldest Olympic bobsled champion ever and the most decorated female bobsledder in history.',
  keywords: [
    'Elana Meyers Taylor', 'bobsled gold medal', 'monobob', 'Milano Cortina 2026',
    'Team USA', 'Winter Olympics 2026', 'oldest Olympic champion', 'women\'s bobsled',
    'Olympic history', 'most decorated female bobsledder',
  ],
  openGraph: {
    title: 'Elana Meyers Taylor Makes History at 41: Oldest Olympic Bobsled Gold Medalist Ever',
    description: 'American legend wins women\'s monobob gold at Milano Cortina 2026, becoming the most decorated female bobsledder in Olympic history.',
    type: 'article',
    publishedTime: '2026-02-17T15:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/usa/elana-meyers-taylor-bobsled-gold',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elana Meyers Taylor: Oldest Olympic Bobsled Champion at 41',
    description: 'Historic monobob gold cements her legacy as the most decorated female bobsledder in Olympic history.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/elana-meyers-taylor-bobsled-gold',
  },
};

export default function ElanaMeyersTaylorGoldPage() {
  return <NewsArticleDB slug="winter-olympics-usa-elana-meyers-taylor-bobsled-gold" />;
}
