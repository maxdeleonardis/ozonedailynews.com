import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Ferrari: History, Models, Formula 1 & Latest News | ObjectWire',
  description:
    'Complete guide to Ferrari, the iconic Italian supercar manufacturer. Explore Ferrari\'s history, current lineup, Formula 1 success, and latest model releases.',
  keywords: [
    'Ferrari',
    'Ferrari cars',
    'Ferrari supercar',
    'Ferrari Formula 1',
    'Ferrari SF-25',
    'Ferrari history',
    'Maranello',
    'Enzo Ferrari',
    'Ferrari 2026',
    'Italian sports car',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/cars/ferrari',
  },
  openGraph: {
    title: 'Ferrari: History, Models, Formula 1 & Latest News',
    description:
      'Complete guide to Ferrari, the iconic Italian supercar manufacturer. Models, history, Formula 1, and the latest from Maranello.',
    type: 'article',
    url: 'https://www.objectwire.org/cars/ferrari',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari: History, Models, Formula 1 & Latest News | ObjectWire',
    description:
      'Complete guide to Ferrari, history, current lineup, Formula 1 success, and latest releases from Maranello.',
  },
};

export default function FerrariPage() {
  return <WikiArticle slug="cars-ferrari" />;
}
