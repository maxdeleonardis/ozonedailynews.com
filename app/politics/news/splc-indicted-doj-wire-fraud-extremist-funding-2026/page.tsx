import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/politics/news/splc-indicted-doj-wire-fraud-extremist-funding-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1758541213979-fe8c9996e197?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'SPLC Indicted | DOJ Charges Wire Fraud, Extremist Funding',
  description: 'The DOJ indicted the SPLC on April 21, 2026, alleging wire fraud, bank fraud, and money laundering. Prosecutors say the civil rights group funneled $3M to',
  keywords: [
    'SPLC indicted 2026',
    'Southern Poverty Law Center indictment',
    'DOJ SPLC wire fraud',
    'SPLC bank fraud money laundering',
    'SPLC extremist funding allegations',
    'Todd Blanche SPLC',
    'Bryan Fair SPLC defense',
    'Kash Patel SPLC FBI',
    'SPLC KKK Aryan Nations payments',
    'SPLC shell companies Fox Photography',
    'Middle District Alabama SPLC case',
    'nonprofit fraud DOJ 2026',
    'SPLC informant program defense',
    'civil rights organization indictment',
    'SPLC donor deception allegation',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'SPLC Indicted | DOJ Alleges $3M Funneled to KKK, Aryan',
    description: 'Federal prosecutors allege the Southern Poverty Law Center secretly paid extremist leaders it claimed to be fighting, using shell companies to hide the',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Marcus Webb'],
    publishedTime: '2026-04-22T08:00:00Z',
    modifiedTime: '2026-04-22T08:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Ornate federal courtroom interior' }],
    tags: ['SPLC', 'DOJ', 'Todd Blanche', 'Kash Patel', 'Civil Rights', 'Federal Indictment'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPLC Indicted | DOJ Says Group Paid $3M to the Extremists',
    description: 'Wire fraud, bank fraud, money laundering. Prosecutors allege shell companies hid payments to KKK and Aryan Nations leaders from 2014-2023.',
    images: [OG_IMAGE],
  },
};

export default function PoliticsNewsSplcIndictedDojWireFraudExtremistFunding2026Page() {
  return <NewsArticleDB slug="politics-news-splc-indicted-doj-wire-fraud-extremist-funding-2026" />;
}
