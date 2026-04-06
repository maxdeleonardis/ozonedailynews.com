import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/bryson-dechambeau/kalshi';

export const metadata: Metadata = {
  title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi Athlete',
  description:
    'Bryson DeChambeau became Kalshi\'s first official athlete partner. Explore the prediction market built around his 2026 YouTube course record challenge',
  keywords: [
    'Bryson DeChambeau Kalshi',
    'Kalshi first athlete partner',
    'Bryson DeChambeau course record series',
    'Bryson DeChambeau YouTube 2026',
    'Kalshi prediction market golf',
    'KXBRYSONCOURSERECORDS',
    'how many course records will Bryson DeChambeau break',
    'Bryson DeChambeau Break 50',
    'Kalshi sports partnership',
    'Bryson DeChambeau odds',
    'prediction market golf',
    'LIV Golf Bryson DeChambeau',
    'Bryson DeChambeau YouTube channel',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/bryson-dechambeau/kalshi',
  },
  openGraph: {
    title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi Athlete',
    description:
      'Bryson DeChambeau became Kalshi\'s first official athlete partner. The prediction market around his 2026 YouTube course record series has crossed $159K in',
    url: 'https://www.objectwire.org/influencer/bryson-dechambeau/kalshi',
    siteName: 'ObjectWire',
    type: 'article',
    publishedTime: '2026-02-20T00:00:00Z',
    modifiedTime: '2026-02-20T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi Athlete',
    description:
      'Bryson DeChambeau became Kalshi\'s first official athlete partner. Explore the prediction market built around his 2026 YouTube course record series.',
  },
};

export default function BrysonKalshiPage() {
  return <WikiArticle slug="influencer-bryson-dechambeau-kalshi" />;
}
