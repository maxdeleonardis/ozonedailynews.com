import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/prediction-markets-truth-predict-trump-jr-kalshi-polymarket-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Trump Prediction Market Ties | Truth Predict, Kalshi, Polymarket 2026',
  description:
    'TMTG launched Truth Predict via Crypto.com, Trump Jr. is a paid Kalshi adviser and Polymarket investor. The Van Dyke case has triggered a regulatory reckoning over conflict-of-interest risks in prediction markets.',
  keywords: [
    'Trump prediction markets 2026',
    'Truth Predict Trump Social Crypto.com',
    'Donald Trump Jr Kalshi adviser',
    'Trump Jr Polymarket investor 1789 Capital',
    'TMTG Truth Predict launch',
    'Kalshi CFTC regulated prediction market',
    'Polymarket prediction market 2026',
    'prediction market conflict of interest',
    'Van Dyke prediction market reckoning',
    'Trump family prediction market investments',
    'Devin Nunes Truth Predict',
    'prediction market regulation 2026',
    'Trump Jr 1789 Capital Polymarket',
    'prediction market casino defense',
    'information economy prediction markets',
    'CFTC prediction market oversight',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Trump Family Prediction Market Ties | Truth Predict, Kalshi, Polymarket',
    description:
      'TMTG runs Truth Predict with Crypto.com. Trump Jr. is a paid Kalshi adviser and Polymarket investor via 1789 Capital. The Van Dyke case is forcing a regulatory reckoning over who can bet on what.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T23:30:00Z',
    modifiedTime: '2026-04-26T23:30:00Z',
    section: 'Politics',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Financial trading screens representing the Trump family\'s financial interests in prediction market platforms Kalshi, Polymarket, and Truth Predict',
      },
    ],
    tags: ['Trump', 'Prediction Markets', 'Kalshi', 'Polymarket', 'Truth Social', 'CFTC'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Jr. Is a Paid Adviser to Kalshi and an Investor in Polymarket. TMTG Runs Its Own Platform.',
    description:
      'Truth Predict launched on Truth Social in Oct 2025 with Crypto.com. Trump Jr. advises Kalshi (paid) and sits on Polymarket\'s board (unpaid investor). The Van Dyke case is now forcing a conflict-of-interest reckoning.',
    images: [OG_IMAGE],
  },
};

export default function TrumpPredictionMarketsTruthPredictTrumpJrKalshiPolymarket2026Page() {
  return <NewsArticleDB slug="trump-prediction-markets-truth-predict-trump-jr-kalshi-polymarket-2026" />;
}
