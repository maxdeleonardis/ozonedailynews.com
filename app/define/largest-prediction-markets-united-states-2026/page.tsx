import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The Largest Prediction Markets in the United States 2026 | Complete Guide | ObjectWire",
  description: "Comprehensive ranking of the largest prediction markets in the US for 2026 — from Polymarket and Kalshi to PredictIt and Augur. Market size, trading volume, regulatory status, and how each platform works.",
  keywords: [
    "largest prediction markets United States 2026",
    "Polymarket trading volume market size",
    "Kalshi CFTC regulated prediction market",
    "PredictIt political prediction betting",
    "Augur decentralized prediction market",
    "prediction market platforms USA ranking",
    "event derivative markets United States",
    "CFTC regulated prediction platforms 2026",
    "crypto prediction markets US legal",
    "political betting markets United States",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/largest-prediction-markets-united-states-2026',
  },
};

export default function LargestPredictionMarketsUSPage() {
  return <WikiArticle slug="define-largest-prediction-markets-united-states-2026" />;
}
