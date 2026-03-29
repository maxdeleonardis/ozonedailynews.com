import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/apple/news/f1-apple-tv-espn-domenicali';

export const metadata: Metadata = {
  title: "F1 CEO Stefano Domenicali: Apple TV Will Surpass ESPN's U.S. Reach | ObjectWire",
  description:
    "Formula 1 CEO Stefano Domenicali says Apple TV's exclusive U.S. rights, a reported $85M/year deal replacing ESPN's 8-year tenure, will deliver greater reach than ESPN's cable-heavy model, citing Apple's 100M+ global subscribers and 2.2 billion active devices.",
  keywords: [
    'Apple TV Formula 1',
    'F1 Apple TV deal',
    'Stefano Domenicali Apple TV',
    'Formula 1 ESPN replacement',
    'Apple TV F1 2026',
    'Formula 1 US broadcast rights',
    'F1 Apple TV+ streaming',
    'ESPN Formula 1 end',
    'Domenicali Apple TV ESPN',
    'Formula 1 streaming 2026',
    'Apple TV sports rights',
    'F1 US viewership 2026',
    'Formula 1 Apple deal $85 million',
    'Apple TV F1 Melbourne 2026',
    'cord cutting Formula 1',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "F1 CEO: Apple TV Will Surpass ESPN's U.S. Reach",
    description:
      "Stefano Domenicali says Apple's streaming-first model, 100M+ subscribers, and 2.2B active devices worldwide give it structural advantages ESPN's cable network could never match.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-02-24T10:00:00Z',
    modifiedTime: '2026-02-24T10:00:00Z',
    section: 'Sports',
    tags: ['Apple TV', 'Formula 1', 'ESPN', 'Stefano Domenicali', 'Streaming Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "F1 CEO Domenicali: Apple TV Will Beat ESPN's U.S. Reach | ObjectWire",
    description:
      "The Formula 1 CEO is confident in Apple's exclusive U.S. rights deal. Here's the numbers behind why he thinks streaming beats cable.",
  },
};

export default function F1AppleTVESPNPage() {
  return <NewsArticleDB slug="apple-news-f1-apple-tv-espn-domenicali" />;
}
