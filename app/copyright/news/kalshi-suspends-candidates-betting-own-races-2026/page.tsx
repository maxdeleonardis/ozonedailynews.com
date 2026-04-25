import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/copyright/news/kalshi-suspends-candidates-betting-own-races-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1620633759441-b4db8637d1f3?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Kalshi Suspends 3 Candidates | Political Insider Trading',
  description: 'Kalshi suspended three 2026 midterm candidates and imposed fines up to $6,000 for betting on their own primary races, the first enforcement of its kind in',
  keywords: [
    'Kalshi political insider trading 2026',
    'Kalshi suspends candidates',
    'prediction market insider trading midterms',
    'candidates betting own races',
    'Kalshi 2026 midterm enforcement',
    'political prediction market rules',
    'Kalshi five year ban',
    'prediction market CFTC regulation',
    'Kalshi fines candidates 2026',
    'political betting integrity',
    'midterm election prediction markets',
    'Kalshi enforcement action',
    'CFTC prediction markets oversight',
    'political trading platform rules',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Kalshi Suspends 3 Candidates | Political Insider Trading',
    description: 'Fines up to $6,000 and a five-year ban for candidates who wagered on their own 2026 primaries. Kalshi calls it political insider trading.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Conan Doyle'],
    publishedTime: '2026-04-22T14:00:00Z',
    modifiedTime: '2026-04-22T14:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Trading platform on laptop screen' }],
    tags: ['Kalshi', 'Prediction Markets', 'Midterms', 'CFTC', 'Political Betting'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalshi Bans 3 Candidates for Betting on Themselves | First',
    description: 'Fines up to $6,000. Five-year platform bans. Kalshi just set the first insider trading precedent in U.S. political prediction markets.',
    images: [OG_IMAGE],
  },
};

export default function CopyrightNewsKalshiSuspendsCandidatesBettingOwnRaces2026Page() {
  return <NewsArticleDB slug="copyright-news-kalshi-suspends-candidates-betting-own-races-2026" />;
}
