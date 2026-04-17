import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/news/world-cup-2026-us-transit-prices-fans-outraged';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1544366981-43d8d59eeba9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'World Cup 2026 Transit Prices | Fans Outraged by $100 Train Fares',
  description: 'New Jersey Transit is reportedly charging over $100 for a round-trip to MetLife Stadium during World Cup 2026, a 900% surge from the standard $11 fare, drawing outrage from fans and US senators.',
  keywords: [
    'World Cup 2026 transit prices',
    'New Jersey Transit World Cup fare',
    'MetLife Stadium World Cup train',
    'FIFA World Cup 2026 transport cost',
    'World Cup 2026 fan travel cost',
    'NJ Transit World Cup $100',
    'World Cup 2026 price gouging',
    'FIFA transit subsidy',
    'Gianni Infantino transport letter',
    'World Cup 2026 East Rutherford',
    'MetLife Stadium 2026 final',
    'World Cup 2026 hotel prices',
    'World Cup 2026 accessibility',
    'FIFA World Cup fan outrage',
    'World Cup 2026 United States',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World Cup 2026 Transit Prices | Fans Outraged by $100 Train Fares',
    description: 'NJ Transit plans to charge $100+ round-trip to MetLife Stadium during the World Cup final, a 900% surge from the standard $11 fare. US senators are now demanding FIFA subsidize costs.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-17T18:00:00Z',
    modifiedTime: '2026-04-17T18:00:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Football stadium crowd World Cup' }],
    tags: ['World Cup 2026', 'FIFA', 'New Jersey Transit', 'MetLife Stadium'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$11 train ride to become $100 for World Cup final at MetLife',
    description: '900% surge. US senators demanding FIFA subsidize transit. Fans: "I saved for four years and didn\'t account for a $100 train ride."',
    images: [OG_IMAGE],
  },
};

export default function WorldCupNewsWorldCup2026UsTransitPricesFansOutragedPage() {
  return <NewsArticleDB slug="world-cup-news-world-cup-2026-us-transit-prices-fans-outraged" />;
}
