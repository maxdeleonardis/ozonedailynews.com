import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/news/binance-prediction-markets-keyless-wallet-on-chain-probability-trading';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1629193382974-f478714dba26?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Binance Prediction Markets | Keyless Wallet On-Chain Trading',
  description: 'Binance launches prediction markets via Keyless Wallet, letting users trade on-chain probability contracts from the Binance app. Binance Barbados Limited provides the service. Full breakdown.',
  keywords: [
    'Binance prediction markets',
    'Binance Keyless Wallet',
    'Binance on-chain prediction trading',
    'Binance prediction market 2026',
    'Binance Prediction Account',
    'Binance Barbados prediction markets',
    'on-chain probability trading',
    'Binance prediction market launch',
    'Polymarket Binance competitor',
    'crypto prediction markets 2026',
    'Binance BNB Chain markets',
    'prediction market exchange 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Binance Launches Prediction Markets | Keyless Wallet On-Chain Trading',
    description: 'On-chain probability trading comes to the Binance app through a new Prediction Account powered by Keyless Wallet MPC technology. Provided by Binance Barbados Limited.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'Crypto',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Binance prediction markets Keyless Wallet launch 2026' }],
    tags: ['Binance', 'Prediction Markets', 'Crypto', 'Keyless Wallet', 'BNB Chain'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binance enters prediction markets with Keyless Wallet MPC',
    description: 'On-chain probability trading now live in the Binance app. Separate Prediction Account required. Powered by Binance Barbados Limited.',
    images: [OG_IMAGE],
  },
};

export default function NewsBinancePredictionMarketsKeylessWalletOnChainProbabilityTradingPage() {
  return <NewsArticleDB slug="news-binance-prediction-markets-keyless-wallet-on-chain-probability-trading" />;
}
