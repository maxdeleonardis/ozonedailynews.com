import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/bryson-dechambeau/kalshi';

export const metadata: Metadata = {
  title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi',
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
    canonical: 'https://www.owire.org/creator/bryson-dechambeau/kalshi',
  },
  openGraph: {
    title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi',
    description:
      "Bryson DeChambeau became Kalshi's first official athlete partner. The prediction market around his 2026 YouTube course record series has crossed $159K in volume.",
    url: 'https://www.owire.org/creator/bryson-dechambeau/kalshi',
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    type: 'article',
    section: 'Creator',
    publishedTime: '2026-02-20T00:00:00Z',
    modifiedTime: '2026-02-20T00:00:00Z',
    tags: ['Bryson DeChambeau', 'Kalshi', 'LIV Golf', 'Prediction Market', 'Golf', 'Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi',
    description:
      "Bryson DeChambeau became Kalshi's first official athlete partner. The KXBRYSONCOURSERECORDS prediction market and 2026 YouTube course record series.",
  },
};

export default function BrysonKalshiPage() {
  return <WikiArticle slug="creator-bryson-dechambeau-kalshi" />;
}
