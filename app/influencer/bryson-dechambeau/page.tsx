import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/bryson-dechambeau';

export const metadata: Metadata = {
  title: 'Bryson DeChambeau | "The Mad Scientist" | 2× US Open Champion & LIV Golf Star',
  description:
    'Full profile of Bryson DeChambeau: 2× US Open champion (2020, 2024), LIV Golf star, and one of the most analytically gifted, and physically transformed,',
  keywords: [
    'Bryson DeChambeau',
    'Bryson DeChambeau LIV Golf',
    'Bryson DeChambeau US Open',
    'Bryson DeChambeau 2024',
    'The Mad Scientist golf',
    'Bryson DeChambeau body transformation',
    'Bryson DeChambeau YouTube',
    'Bryson DeChambeau Steph Curry',
    'Bryson DeChambeau single length irons',
    'LIV Golf 2026',
    'Bryson DeChambeau net worth',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/bryson-dechambeau',
  },
  openGraph: {
    title: 'Bryson DeChambeau | The Mad Scientist | 2× US Open Champion & LIV Golf Star',
    description:
      'Full profile of Bryson DeChambeau: from NCAA phenom to 2× US Open champion and LIV Golf icon. Physics-based game, dramatic body transformation, and a',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/bryson-dechambeau',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Bryson DeChambeau', 'LIV Golf', 'US Open', 'Golf', 'Influencer', 'Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryson DeChambeau | 2× US Open Champion, LIV Golf Star & "The Mad Scientist"',
    description:
      'Full profile of Bryson DeChambeau on ObjectWire. Career, body transformation, LIV Golf, YouTube content, and his US Open legacy.',
  },
};

export default function BrysonDeChambauPage() {
  return <WikiArticle slug="influencer-bryson-dechambeau" />;
}
