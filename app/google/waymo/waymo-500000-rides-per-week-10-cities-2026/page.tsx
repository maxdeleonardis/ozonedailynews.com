import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/waymo/waymo-500000-rides-per-week-10-cities-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Waymo Nears 500,000 Rides Per Week Across 10 U.S. Cities | ObjectWire',
  description:
    'Alphabet\'s Waymo is completing roughly 500,000 fully autonomous rides per week across 10 U.S. cities, co-CEO Dmitri Dolgov confirmed on March 24, 2026, with a target of one million paid rides per week by end of 2026.',
  keywords: [
    'Waymo 500000 rides 2026',
    'Waymo autonomous miles 2026',
    'Dmitri Dolgov Waymo 2026',
    'Waymo 10 cities',
    'Waymo robotaxi expansion',
    'Alphabet Waymo rides per week',
    'fully autonomous vehicle 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Waymo Nears 500,000 Rides Per Week Across 10 U.S. Cities',
    description:
      'Co-CEO Dmitri Dolgov says Waymo\'s 3,000-vehicle fleet drives more than 4 million fully autonomous miles per week and is targeting one million paid rides weekly by year\'s end.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T12:00:00Z',
    modifiedTime: '2026-03-25T12:00:00Z',
    section: 'Technology',
    tags: ['Waymo', 'Alphabet', 'Autonomous Vehicles', 'Robotaxi', 'Google', 'Technology', 'AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waymo: 500,000 Rides/Week, 4M Autonomous Miles/Week, Target 1M Rides/Week by End of 2026',
    description:
      'Waymo co-CEO Dmitri Dolgov shared the latest scale figures in a podcast with Stripe co-founder John Collison on March 24, 2026.',
    images: [IMAGE_URL],
  },
};

export default function WaymoRidesPerWeekPage() {
  return <NewsArticleDB slug="google-waymo-waymo-500000-rides-per-week-10-cities-2026" />;
}
