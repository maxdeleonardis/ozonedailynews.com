import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/cars/tesla-semi-truckers-mass-production-nevada-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/waymo.jpg';

export const metadata: Metadata = {
  title: 'Tesla Semi Wins Over Truckers Ahead of Mass Production Ramp',
  description:
    'Truck drivers and fleet operators who piloted the Tesla Semi are praising its centered driving position, 500-mile range, faster charging, and $100,000',
  keywords: [
    'Tesla Semi mass production 2026',
    'Tesla Semi truckers review 2026',
    'Tesla Semi Nevada factory',
    'Tesla Semi 500 mile range',
    'Tesla Semi vs competing electric trucks',
    'Tesla Semi fleet operators',
    'electric Class 8 truck 2026',
    'Tesla Semi cost savings',
    'Tesla Semi Wall Street Journal',
    'Elon Musk Tesla Semi',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Tesla Semi Wins Over Truckers Ahead of Mass Production Ramp',
    description:
      'Truckers who drove the Tesla Semi in pilot programs loved it \u2014 and it costs $100,000 less than competing BEV trucks. Now mass production is finally',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T16:00:00Z',
    modifiedTime: '2026-03-24T16:00:00Z',
    section: 'Cars',
    tags: [
      'Tesla', 'Tesla Semi', 'Electric Vehicles', 'Trucking',
      'EV', 'Elon Musk', 'Nevada', 'Manufacturing', 'Fleet', 'Cars',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tesla Semi Wins Over Truckers Ahead of Mass Production Ramp',
    description:
      'The WSJ found truckers who piloted the Tesla Semi loved it. 500-mile range, $100K cheaper than rivals, and Elon Musk says it\u2019s \u201csuper fun to',
    images: [IMAGE_URL],
  },
};

export default function TeslaSemiTruckersMassProductionPage() {
  return <JackArticleDB slug="cars-tesla-semi-truckers-mass-production-nevada-2026" />;
}
