import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/copyright/news/trump-prediction-markets-cftc-van-dyke-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Trump Softens Prediction Market Criticism | CFTC Insider Trading Charge',
  description:
    'Trump reversed his "casino" criticism of prediction markets days after making it, while the CFTC filed its first-ever event contract insider trading case and New York AG sued Coinbase and Gemini.',
  keywords: [
    'Trump prediction markets 2026',
    'Trump softens prediction market criticism',
    'CFTC insider trading prediction markets',
    'Gannon Van Dyke Polymarket insider trading',
    'Operation Absolute Resolve Maduro prediction market',
    'New York AG sues Coinbase Gemini prediction markets',
    'Letitia James prediction market gambling lawsuit',
    'Kalshi political betting insider trading 2026',
    'Trump Jr Polymarket Kalshi advisor',
    'prediction market federal regulation 2026',
    'CFTC event contract enforcement 2026',
    'prediction market gambling New York law',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Trump Softens Prediction Market Criticism | CFTC Files First Insider Trading Case',
    description:
      'Days after calling the world a "casino," Trump said prediction markets have smart backers. Meanwhile the CFTC charged a Special Forces sergeant who used classified intel to win $404,000 on Polymarket.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    publishedTime: '2026-04-28T14:00:00Z',
    modifiedTime: '2026-04-28T14:00:00Z',
    section: 'Finance',
    tags: ['Prediction Markets', 'Trump', 'CFTC', 'Polymarket', 'Kalshi'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Walks Back "Casino" Jab at Prediction Markets',
    description:
      'CFTC files first-ever event contract insider trading case. NY AG sues Coinbase and Gemini. Trump pivots on prediction market regulation.',
  },
};

export default function CopyrightNewsTrumpPredictionMarketsCftcVanDyke2026Page() {
  return <NewsArticleDB slug="copyright-news-trump-prediction-markets-cftc-van-dyke-2026" />;
}
