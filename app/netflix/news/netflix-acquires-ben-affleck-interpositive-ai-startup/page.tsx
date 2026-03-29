import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/netflix/news/netflix-acquires-ben-affleck-interpositive-ai-startup';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/Ben%20Aflecc.PNG';

export const metadata: Metadata = {
  title: 'Netflix Drops $600M for Ben Affleck\'s InterPositive AI Startup After Warner Bros. Bid Collapse | ObjectWire',
  description:
    "Netflix confirmed a deal worth up to $600 million to acquire InterPositive, Ben Affleck's AI filmmaking startup, a smart pivot after the collapse of Netflix's $82.7 billion bid for Warner Bros. Discovery. Deal structure includes initial cash plus performance-based earnouts.",
  keywords: [
    'Netflix acquires InterPositive',
    'Ben Affleck AI startup',
    'Netflix Warner Bros. deal collapse',
    'AI filmmaking post-production',
    'InterPositive Visual Logic',
    'Netflix streaming strategy 2026',
    'Paramount Skydance Warner Bros. Discovery',
    'Ted Sarandos Netflix pivot',
    'Hollywood AI technology',
    'Netflix acquisition news',
  ],
  openGraph: {
    title: 'Netflix Drops $600M for Ben Affleck\'s InterPositive After Warner Bros. Bid Collapse',
    description:
      "Netflix confirms up to $600M to acquire InterPositive, Ben Affleck's AI filmmaking startup. Initial cash plus earnouts. The deal follows Netflix walking away from its $82.7B WBD bid after Paramount Skydance's $111B offer.",
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: 'Ben Affleck InterPositive Netflix acquisition' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netflix Confirms $600M for Ben Affleck\'s InterPositive After WB Bid Collapse',
    description:
      "Netflix confirms up to $600M deal for InterPositive, initial cash + earnouts. Follows Netflix's failed $82.7B WBD bid, outbid by Paramount Skydance at $111B.",
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

export default function NetflixInterPositiveAcquisitionPage() {
  return <NewsArticleDB slug="netflix-news-netflix-acquires-ben-affleck-interpositive-ai-startup" />;
}
