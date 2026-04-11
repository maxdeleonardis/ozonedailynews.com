import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/news/trump-iran-warning-pakistan-negotiations';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1658761492656-a088d80f65c5?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Trump Issues Warning to Iran Ahead of Pakistan Talks',
  description: 'President Trump warned he would renew and intensify U.S. strikes on Iran if a deal is not reached soon. High-stakes negotiations in Pakistan face complications from Israel-Hezbollah conflict.',
  keywords: [
    'Trump Iran warning',
    'Trump Iran negotiations Pakistan',
    'US Iran deal 2026',
    'Trump Iran strikes threat',
    'Iran Pakistan peace talks',
    'Israel Hezbollah Iran',
    'Trump Iran nuclear deal',
    'US Iran sanctions 2026',
    'Iran ceasefire negotiations',
    'Trump foreign policy Iran',
    'Iran deal deadline 2026',
    'Pakistan Iran mediation',
    'Trump Middle East policy',
    'Iran nuclear program 2026',
    'US military Iran strikes',
    'Trump Iran ultimatum',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Trump Issues Warning to Iran Ahead of High-Stakes Pakistan Talks',
    description: 'President Trump threatened to renew U.S. strikes on Iran if negotiations in Pakistan fail to produce a deal. Israel-Hezbollah tensions add uncertainty.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T18:00:00Z',
    modifiedTime: '2026-04-11T18:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'White House presidential podium where Trump delivered Iran warning' }],
    tags: ['Trump', 'Iran', 'Pakistan', 'Hezbollah', 'Israel', 'Middle East'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Warns Iran | Renewed Strikes If Pakistan Talks Fail',
    description: 'Trump threatened intensified U.S. strikes if negotiations in Pakistan do not produce an Iran deal. Israel-Hezbollah conflict complicates peace efforts.',
    images: [OG_IMAGE],
  },
};

export default function TrumpNewsTrumpIranWarningPakistanNegotiationsPage() {
  return <NewsArticleDB slug="trump-news-trump-iran-warning-pakistan-negotiations" />;
}
