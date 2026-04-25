import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/define/prediction-market/democrats-warn-government-insider-trading-prediction-markets-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Government Insider Trading | Democrats Target Prediction',
  description:
    '40+ Democratic senators led by Warren and Warner sent an urgent CFTC letter on March 29, 2026, demanding ethics guidance to stop federal employees from',
  keywords: [
    'government insider trading prediction markets',
    'Elizabeth Warren prediction market letter CFTC 2026',
    'Mark Warner prediction market regulation',
    'Polymarket insider trading 2026',
    'Kalshi federal employee betting ban',
    'STOCK Act prediction markets',
    'CFTC ANPRM event contracts 2026',
    'Public Integrity Act prediction markets',
    'DEATH BETS Act Congress 2026',
    'Maduro capture Polymarket trade',
    'Karoline Leavitt speech prediction market',
    'Iran Israel conflict betting spike',
    'federal employee prediction market ban',
    'prediction market legislation March 2026',
    'OGE CFTC ethics reminder 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Democrats Warn of Government Insider Trading on',
    description:
      '40+ senators demanded CFTC and OGE action after suspicious Polymarket trades preceded Maduro capture, Leavitt speech timing, and Iran-Israel strike',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    section: 'Politics',
    tags: [
      'Polymarket',
      'Kalshi',
      'CFTC',
      'Elizabeth Warren',
      'Prediction Markets',
      'STOCK Act',
      'Congress',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Someone made $400K on Polymarket hours before Maduro was',
    description:
      'Warren and 40+ Democrats sent an urgent CFTC letter demanding a crackdown on federal employees betting on outcomes they secretly influence.',
  },
};

export default function DefinePredictionMarketDemocratsWarnGovernmentInsiderTradingPredictionMarkets2026Page() {
  return <NewsArticleDB slug="define-prediction-market-democrats-warn-government-insider-trading-prediction-markets-2026" />;
}
