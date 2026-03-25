import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/copyright/news/aoc-mlb-polymarket-gambling-warning';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/default/aoc.PNG';

export const metadata: Metadata = {
  title: "AOC Calls MLB's $300M Polymarket Deal 'Sad,' Warns Against Pervasive Gambling | ObjectWire",
  description:
    "Rep. Alexandria Ocasio-Cortez condemned Major League Baseball's exclusive prediction market deal with Polymarket, warning that embedding gambling into America's national pastime is 'not good for society.' MLB became the first major U.S. sports league to partner with a prediction exchange.",
  keywords: [
    'AOC Polymarket MLB',
    'Alexandria Ocasio-Cortez Polymarket',
    'MLB Polymarket deal 2026',
    'Major League Baseball prediction market',
    'Polymarket sports gambling',
    'AOC sports gambling warning',
    'prediction markets sports betting',
    'MLB gambling partner 2026',
    'Polymarket $300 million MLB',
    'sports gambling legislation 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "AOC Calls MLB's $300M Polymarket Deal 'Sad,' Warns Against Pervasive Gambling",
    description:
      "MLB named Polymarket its official prediction market exchange partner — the first such deal in major U.S. sports. AOC responded immediately, warning that gambling expansion into sports is 'not good for society.'",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T15:00:00Z',
    modifiedTime: '2026-03-24T15:00:00Z',
    section: 'Politics & Law',
    tags: ['AOC', 'MLB', 'Polymarket', 'Gambling', 'Prediction Markets', 'Politics', 'Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AOC on MLB-Polymarket: 'Sad.' Gambling in Sports Is 'Not Good for Society'",
    description:
      "MLB became the first U.S. major league to partner with a prediction exchange. AOC fired back immediately. The debate over pervasive sports gambling is heating up.",
    images: [IMAGE_URL],
  },
};

export default function AocMLBPolymarketPage() {
  return <JackArticleDB slug="copyright-news-aoc-mlb-polymarket-gambling-warning" />;
}
