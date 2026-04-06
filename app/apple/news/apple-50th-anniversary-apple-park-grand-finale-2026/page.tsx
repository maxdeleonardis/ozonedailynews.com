import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/apple/news/apple-50th-anniversary-apple-park-grand-finale-2026';
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Apple 50th Anniversary | Grand Finale at Apple Park April 2026',
  description:
    'Apple turns 50 on April 1, 2026, closing a week of global celebrations with a private grand finale at Apple Park. Mark Gurman reports a "British Invasion"',
  keywords: [
    'Apple 50th anniversary 2026',
    'Apple Park grand finale April 2026',
    'Apple anniversary concert headliner',
    'Paul McCartney Apple Park 2026',
    'Apple 50 years history Tim Cook',
    'Apple anniversary British Invasion performer',
    'Mark Gurman Apple Park event',
    'Apple Grand Central Alicia Keys anniversary',
    'Tim Cook 50 years of thinking different',
    'Apple founded 1976 anniversary',
    'Apple $3.6 trillion market cap 2026',
    'Apple 2.5 billion active devices',
    'Apple Park Visitor Center early close March 31',
    'Apple anniversary global celebrations 2026',
    'Steve Jobs Apple 50th anniversary',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Apple Turns 50 | Grand Finale at Apple Park Caps a Week of Global Celebrations',
    description:
      'From a Los Altos garage to a $3.6T company with 2.5B active devices, Apple marks 50 years with a private Apple Park event headlined by a "British',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T20:00:00Z',
    modifiedTime: '2026-03-31T20:00:00Z',
    section: 'Tech',
    tags: [
      'Apple',
      'Apple Park',
      'Tim Cook',
      'Anniversary',
      'Paul McCartney',
      'Apple History',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple turns 50 Wednesday. The grand finale at Apple Park has a mystery headliner.',
    description:
      'Gurman says it\'s someone from the "British Invasion" who Steve Jobs "would\'ve been ecstatic" about. The Visitor Center closes early Tuesday. All signs',
  },
};

export default function AppleNewsApple50thAnniversaryAppleParkGrandFinale2026Page() {
  return <NewsArticleDB slug="apple-news-apple-50th-anniversary-apple-park-grand-finale-2026" />;
}
