import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/charles-schwab-prediction-markets-rick-wurster-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Charles Schwab Prediction Markets | Rick Wurster Confirms',
  description: 'Charles Schwab CEO Rick Wurster confirmed the $8.5 trillion brokerage is exploring prediction markets during its Q1 2026 earnings call, alongside its',
  keywords: [
    'Charles Schwab prediction markets',
    'Charles Schwab prediction market 2026',
    'Rick Wurster prediction markets',
    'Schwab prediction market launch',
    'Charles Schwab crypto trading',
    'Charles Schwab event contracts',
    'Kalshi CFTC prediction market',
    'Polymarket prediction market',
    'prediction market regulation 2026',
    'CFTC event contracts',
    'traditional finance prediction markets',
    'Schwab alternative investments',
    'prediction market brokerage',
    'Charles Schwab Q1 2026 earnings',
    'event contract trading',
    'prediction market SEC CFTC',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Charles Schwab Eyes Prediction Markets | $8.5T Brokerage',
    description: 'CEO Rick Wurster confirmed Schwab is evaluating prediction markets during Q1 2026 earnings. The move follows planned crypto trading and signals',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-17T23:00:00Z',
    modifiedTime: '2026-04-17T23:00:00Z',
    section: 'Finance',
    tags: ['Charles Schwab', 'Prediction Markets', 'Rick Wurster', 'CFTC', 'Kalshi', 'Polymarket'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charles Schwab exploring prediction markets, CEO confirms',
    description: '$8.5 trillion brokerage evaluating event contracts. Rick Wurster: "We are not rushing to launch a product." Follows planned crypto trading service.',
  },
};

export default function FinanceNewsCharlesSchwabPredictionMarketsRickWurster2026Page() {
  return <JackArticleDB slug="finance-news-charles-schwab-prediction-markets-rick-wurster-2026" />;
}
