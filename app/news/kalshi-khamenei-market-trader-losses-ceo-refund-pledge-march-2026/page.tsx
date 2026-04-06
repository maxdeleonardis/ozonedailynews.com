import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/news/kalshi-khamenei-market-trader-losses-ceo-refund-pledge-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/news/kalshi-khamenei-prediction-market-settlement-march-2026.jpg';

export const metadata: Metadata = {
  title:
    'Kalshi Traders Report Losses on Khamenei "Out as Supreme Leader" Market Despite CEO Refund Pledge',
  description:
    "Kalshi paused and settled its 'Ali Khamenei Out as Supreme Leader?' contract after reports of his death on February 28, 2026, resolving pre-death",
  keywords: [
    'Kalshi Khamenei prediction market March 2026',
    'Kalshi Supreme Leader market settlement',
    'Tarek Mansour refund pledge Kalshi February 2026',
    'Kalshi CFTC death market rules',
    'Khamenei prediction market trader losses',
    'Kalshi vs Polymarket Khamenei Iran market',
    'Kalshi Rule 13.1 market pause settlement',
    'prediction market Khamenei death settlement',
    'Kalshi $21.7 million Khamenei volume',
    'Polymarket Iran $529 million Khamenei contracts',
    'Kalshi CEO Tarek Mansour ethics death market',
    'prediction market geopolitical contracts 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Kalshi Traders Report Losses on Khamenei Market Despite CEO's Full Refund Pledge",
    description:
      "Kalshi settled its 'Khamenei Out as Supreme Leader?' contract at the last pre-death traded price after reports of his death on Feb 28, 2026. CEO Tarek",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T14:00:00Z',
    modifiedTime: '2026-03-01T14:00:00Z',
    section: 'News',
    tags: [
      'Kalshi',
      'Prediction Markets',
      'Khamenei',
      'Iran',
      'CFTC',
      'Polymarket',
      'Tarek Mansour',
      'Finance',
      'Geopolitics',
      'Breaking News',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Kalshi Traders Report Losses on Khamenei Market, CEO Pledges Refunds",
    description:
      "Kalshi settled 'Khamenei Out as Supreme Leader?' at last pre-death price. CEO refunded fees, but 'Yes' holders report net losses. Polymarket paid Yes;",
    images: [IMAGE_URL],
  },
};

export default function KalshiKhameneiMarketPage() {
  return <JackArticleDB slug="news-kalshi-khamenei-market-trader-losses-ceo-refund-pledge-march-2026" />;
}
