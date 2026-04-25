import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/california/california-highway-expansion-2026-state-transportation-improvement-program';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/earth/pexels-george-desipris-726478.jpg';

export const metadata: Metadata = {
  title: 'California Approves Highway Expansion as Record Heat',
  description:
    'As California endured its hottest March days ever recorded, the California Transportation Commission voted on March 19\u201320 to adopt the 2026 State',
  keywords: [
    'California highway expansion 2026',
    'California Transportation Commission STIP 2026',
    'State Transportation Improvement Program 2026',
    'California climate goals highway expansion',
    'California record heat wave March 2026',
    'California infrastructure climate conflict 2026',
    'California highway projects 2026',
    'California carbon emissions transportation',
    'highway induced demand California',
    'California transportation vs climate policy',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: 'California Approves Highway Expansion as Record Heat',
    description:
      'The California Transportation Commission adopted the 2026 STIP on March 19\u201320, approving highway expansion projects even as the state recorded its',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T14:00:00Z',
    modifiedTime: '2026-03-24T14:00:00Z',
    section: 'California',
    tags: [
      'California', 'Highway Expansion', 'Climate', 'Transportation',
      'STIP', 'California Transportation Commission', 'Heat Wave',
      'Infrastructure', 'Carbon Emissions', 'Climate Policy',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'California Approves Highway Expansion Amid Record March',
    description:
      'The California Transportation Commission greenlighted new highway projects on March 19\u201320 \u2014 the same week the state broke all-time March',
    images: [IMAGE_URL],
  },
  other: {
    news_keywords:
      'California highway expansion 2026, STIP California Transportation Commission, California climate policy transportation, record heat wave California March 2026',
  },
};

export default function CaliforniaHighwayExpansion2026Page() {
  return <NewsArticleDB slug="california-california-highway-expansion-2026-state-transportation-improvement-program" />;
}
