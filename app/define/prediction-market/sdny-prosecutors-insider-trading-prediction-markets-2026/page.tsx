import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/define/prediction-market/sdny-prosecutors-insider-trading-prediction-markets-2026';
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'SDNY Insider Trading Probe | Prediction Markets Investigation 2026',
  description:
    'Federal prosecutors from the SDNY launched the first criminal probe into prediction market insider trading on March 30, 2026, focusing on $410K Maduro capture bets and Iran airstrike trades placed minutes before public confirmation.',
  keywords: [
    'SDNY prediction market insider trading investigation 2026',
    'Polymarket insider trading federal probe',
    'SDNY prediction market fraud investigation',
    'Maduro capture Polymarket trade $410000',
    'prediction market insider trading criminal charges',
    'Jay Clayton SDNY prediction markets',
    'Commodity Exchange Act Rule 180.1 prediction markets',
    'wire fraud prediction market event contracts',
    'STOCK Act federal employee prediction market betting',
    'Iran airstrike prediction market trades',
    'Polymarket blockchain forensics SDNY',
    'Kalshi insider trading terms of service',
    'CFTC event contract fraud federal law',
    'prediction market gray area securities commodities',
    'SDNY Securities Commodities Fraud Unit Polymarket',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'SDNY Prosecutors Target Insider Trading in Prediction Markets',
    description:
      'The SDNY Securities and Commodities Fraud Unit met with Polymarket representatives after a trader netted $410K on Maduro\'s capture hours before the announcement. Federal prosecutors are weighing commodity fraud, wire fraud, and STOCK Act charges.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfansas'],
    publishedTime: '2026-03-31T18:00:00Z',
    modifiedTime: '2026-03-31T18:00:00Z',
    section: 'News',
    tags: [
      'SDNY',
      'Polymarket',
      'Insider Trading',
      'Prediction Markets',
      'CFTC',
      'Jay Clayton',
      'Federal Investigation',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDNY is investigating prediction market insider trading. The Maduro $410K bet is the center of it.',
    description:
      'Federal prosecutors met with Polymarket this week. Commodity fraud, wire fraud, and the STOCK Act are all on the table.',
  },
};

export default function DefinePredictionMarketSdnyProsecutorsInsiderTradingPredictionMarkets2026Page() {
  return <NewsArticleDB slug="define-prediction-market-sdny-prosecutors-insider-trading-prediction-markets-2026" />;
}
