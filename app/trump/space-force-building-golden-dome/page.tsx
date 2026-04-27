import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/space-force-building-golden-dome';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Space Force Golden Dome | $3.2B for 12 Orbital Interceptors',
  description:
    'Space Systems Command awarded $3.2B across 20 contracts to 12 companies to build space-based interceptors for Trump\'s Golden Dome missile shield. SpaceX, Anduril, Lockheed, and Raytheon among the winners.',
  keywords: [
    'Golden Dome missile defense 2026',
    'Space Force Golden Dome contracts',
    'Space Systems Command SBI 2026',
    'space-based interceptors Golden Dome',
    'Golden Dome $3.2 billion contracts',
    'Anduril Golden Dome AI defense',
    'SpaceX Golden Dome satellite',
    'Lockheed Martin Golden Dome',
    'Raytheon kill vehicle orbital',
    'Golden Dome boost phase intercept',
    'pLEO missile defense 2026',
    'Golden Dome cost $185 billion',
    'CBO Golden Dome $542 billion estimate',
    'General Michael Guetlein Golden Dome',
    'Trump missile defense orbital 2026',
    'True Anomaly Turion Space orbital defense',
    'Golden Dome 2028 demonstration',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Space Force Awards $3.2B | 12 Companies to Build Golden Dome Orbital Interceptors',
    description:
      'SpaceX, Anduril, Lockheed, Raytheon, and 8 others share $3.2B to develop space-based missile interceptors. The CBO warns the full constellation could cost $542B.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-25T16:00:00Z',
    modifiedTime: '2026-04-25T16:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Rocket launch streaking through dark sky representing Space Force Golden Dome interceptor program' }],
    tags: ['Golden Dome', 'Space Force', 'SpaceX', 'Anduril', 'Missile Defense', 'Trump'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Force Awards $3.2B for Golden Dome Orbital Interceptors | 12 Companies',
    description:
      'SpaceX, Anduril, Lockheed, Raytheon among 12 winners. CBO says full constellation could hit $542B. First prototypes in orbit by 2028.',
    images: [OG_IMAGE],
  },
};

export default function TrumpSpaceForceBuildingGoldenDomePage() {
  return <NewsArticleDB slug="trump-space-force-building-golden-dome" />;
}
