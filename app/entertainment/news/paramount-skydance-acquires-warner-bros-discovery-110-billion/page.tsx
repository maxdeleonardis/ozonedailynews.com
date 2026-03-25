import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/paramount-skydance-acquires-warner-bros-discovery-110-billion';

export const metadata: Metadata = {
  title: 'Paramount Skydance Agrees to Acquire Warner Bros. Discovery in $110 Billion Deal | ObjectWire',
  description:
    'Paramount Skydance entered into a definitive agreement on February 27, 2026, to acquire Warner Bros. Discovery in an all-cash transaction valued at $110 billion in enterprise value, creating one of the largest media conglomerates in the United States.',
  keywords: [
    'Paramount Skydance Warner Bros Discovery acquisition',
    'Warner Bros Discovery merger 2026',
    '$110 billion media deal',
    'Paramount Skydance acquisition',
    'Warner Bros Discovery $31 per share',
    'media consolidation 2026',
    'Paramount Plus Max streaming merger',
    'Warner Bros Discovery shareholders',
    'Skydance media deal',
    'Hollywood merger 2026',
    'Warner Bros Discovery debt',
    'media conglomerate United States',
    'DC Comics Paramount merger',
    'HBO Max Paramount Plus combined',
    'Warner Bros Discovery stock WBD',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Paramount Skydance Agrees to Acquire Warner Bros. Discovery in $110 Billion Deal',
    description:
      'The all-cash deal at $31 per share represents a 42% premium and would create one of the largest media conglomerates in U.S. history, combining Paramount+, Max, HBO, DC, and major Hollywood franchises.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Entertainment',
    tags: [
      'Paramount Skydance',
      'Warner Bros. Discovery',
      'Media Merger',
      'Entertainment',
      'Streaming',
      'Hollywood',
      'Finance',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paramount Skydance Acquires Warner Bros. Discovery for $110 Billion',
    description:
      '$31/share all-cash deal. 42% premium. $79B in net debt. 210M streaming subscribers combined. The biggest media deal since the AT&T-Time Warner merger.',
  },
};

export default function ParamountSkydanceWBDPage() {
  return <NewsArticleDB slug="entertainment-news-paramount-skydance-acquires-warner-bros-discovery-110-billion" />;
}
