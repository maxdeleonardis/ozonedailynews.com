import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/finance/draftkings';

export const metadata: Metadata = {
  title: 'DraftKings | Sports Betting, DFS & Company Profile 2026',
  description:
    'DraftKings (DKNG) is a $4.77B online sportsbook and daily fantasy platform active in 25 states. Company profile, revenue, legal status, and Texas DFS access.',
  keywords: [
    'DraftKings',
    'DraftKings sportsbook',
    'DraftKings daily fantasy',
    'DKNG stock',
    'DraftKings revenue 2025',
    'online sports betting',
    'daily fantasy sports',
    'DraftKings Texas',
    'DraftKings legal states',
    'Jason Robins',
    'sports betting apps',
    'DraftKings vs FanDuel',
    'DraftKings EBITDA',
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    title: 'DraftKings | Sports Betting, Daily Fantasy & Company Profile 2026',
    description:
      'DraftKings reached $4.77B revenue in 2025 and its first full year of profitability. Full profile: sportsbook, DFS, legal map, and competitors.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-22T10:00:00-05:00',
    modifiedTime: '2026-05-22T10:00:00-05:00',
    section: 'Finance',
    tags: ['DraftKings', 'Sports Betting', 'Daily Fantasy Sports', 'Finance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DraftKings | $4.77B Revenue, 25 States, First Profitable Year',
    description: 'Full DraftKings company profile: sportsbook, DFS, revenue, legal footprint.',
  },
};

export default function DraftKingsPage() {
  return <ArticlePageDB slug="finance-draftkings" />;
}
