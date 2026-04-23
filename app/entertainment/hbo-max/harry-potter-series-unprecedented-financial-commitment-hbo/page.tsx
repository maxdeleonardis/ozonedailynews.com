import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/hbo-max/harry-potter-series-unprecedented-financial-commitment-hbo';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1481788915-eb25b47f81e3?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'HBO Harry Potter Series | Unprecedented Financial Commitment, $2B-$5B Budget',
  description: 'HBO head Sarah Aubrey calls the Harry Potter TV series an unprecedented financial commitment. 7 seasons, 7 novels, filming underway at Leavesden. Premiere early 2027.',
  keywords: [
    'HBO Harry Potter series',
    'Harry Potter HBO Max 2027',
    'Harry Potter TV show budget',
    'Dominic McLaughlin Harry Potter',
    'John Lithgow Dumbledore',
    'Harry Potter series cast',
    'Francesca Gardiner Harry Potter showrunner',
    'Warner Bros Leavesden Harry Potter',
    'Harry Potter Diagon Alley set',
    'Sarah Aubrey HBO Harry Potter',
    'Harry Potter series cost billion',
    'Arabella Stanton Hermione',
    'Alastair Stout Ron Weasley',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'HBO Harry Potter Series | Unprecedented Financial Commitment',
    description: 'Sarah Aubrey calls it an unprecedented cost. $2B-$5B estimated. Dominic McLaughlin stars. John Lithgow as Dumbledore. Premiere early 2027.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Entertainment Desk'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'Entertainment',
    tags: ['Harry Potter', 'HBO', 'Warner Bros', 'Television'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HBO Harry Potter series is an unprecedented financial commitment',
    description: '$2B-$5B estimated. 7 novels, 7 seasons. John Lithgow as Dumbledore. Diagon Alley built as a permanent set. Premieres early 2027.',
  },
};

export default function EntertainmentHboMaxHarryPotterSeriesUnprecedentedFinancialCommitmentHboPage() {
  return <NewsArticleDB slug="entertainment-hbo-max-harry-potter-series-unprecedented-financial-commitment-hbo" />;
}
