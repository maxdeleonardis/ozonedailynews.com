import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/politics/news/virginia-redistricting-judge-voids-referendum-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1773433443925-fd63ec426315?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Virginia Redistricting | Judge Voids Referendum 24 Hours After Vote',
  description: 'Judge Jack Hurley voided Virginia\'s redistricting referendum the day after voters approved it 51.5%, calling the ballot language misleading and citing a 90-day notice violation.',
  keywords: [
    'Virginia redistricting 2026',
    'Judge Hurley voids referendum',
    'Virginia HB 29 map',
    'Virginia 10-1 congressional map',
    'Jay Jones emergency appeal',
    'Abigail Spanberger redistricting',
    'Glenn Youngkin fair maps',
    'Virginia gerrymandering 2026',
    'Tazewell County circuit court redistricting',
    'Virginia Supreme Court redistricting',
    'Virginia midterms 2026 maps',
    'void ab initio ballot referendum',
    'Virginia bipartisan redistricting commission',
    'Virginia General Assembly maps',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Virginia Redistricting | Judge Voids Voter-Approved Referendum in 24 Hours',
    description: 'Voters said yes 51.5%. A Tazewell County judge said no the next morning. Virginia\'s 10-1 Democratic map is now blocked pending a Supreme Court ruling.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Marcus Webb'],
    publishedTime: '2026-04-22T16:00:00Z',
    modifiedTime: '2026-04-22T16:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Neoclassical government building with dome and columns' }],
    tags: ['Virginia', 'Redistricting', 'Jay Jones', 'Abigail Spanberger', 'Midterms 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Million Virginia Votes Thrown Out in 24 Hours | Judge Voids Redistricting Referendum',
    description: 'Ballot language was "flagrantly misleading," says the circuit court. The 10-1 Democratic map is blocked. Virginia Supreme Court briefs due Friday.',
    images: [OG_IMAGE],
  },
};

export default function PoliticsNewsVirginiaRedistrictingJudgeVoidsReferendum2026Page() {
  return <NewsArticleDB slug="politics-news-virginia-redistricting-judge-voids-referendum-2026" />;
}
