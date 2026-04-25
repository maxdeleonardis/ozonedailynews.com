import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/wall-street-tokenized-trading-iran-crisis-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1468254095679-bbcba94a7066?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Tokenized Trading 24/7 | Wall Street\'s Iran Crisis Gap',
  description: 'Wall Street\'s Iran crisis showed why 24/7 tokenized trading matters. Oil jumped 7.8% and gold hit $3,508 on DeFi platforms while the NYSE sat closed all',
  keywords: [
    'tokenized trading 24/7',
    'Wall Street tokenized assets 2026',
    'Iran crisis financial markets',
    'DeFi price discovery',
    'BlackRock BUIDL fund',
    'tokenized RWA 2026',
    'Ondo Finance tokenized treasuries',
    'Franklin Templeton tokenized fund',
    'NYSE weekend closure',
    'blockchain commodity trading',
    'Synthetix oil gold',
    'tokenized securities SEC 2026',
    'JPMorgan Onyx blockchain',
    'Goldman Sachs digital assets',
    'real world asset tokenization',
    'round the clock stock trading',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Tokenized Trading 24/7 | Wall Street\'s Iran Crisis Wake-Up Call',
    description: 'Oil spiked 7.8% on DeFi while NYSE sat closed. The Iran escalation is Wall Street\'s strongest argument yet for round-the-clock tokenized markets.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Daniel Park'],
    publishedTime: '2026-04-22T12:00:00Z',
    modifiedTime: '2026-04-22T12:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Wall Street sign, New York City' }],
    tags: ['Wall Street', 'DeFi', 'BlackRock', 'Iran', 'Tokenized Assets', 'NYSE'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYSE Closed, DeFi Open | Oil +7.8% While Wall Street Slept',
    description: 'The Iran crisis proved DeFi does price discovery better than Wall Street on weekends. Tokenized 24/7 trading is coming faster than expected.',
    images: [OG_IMAGE],
  },
};

export default function FinanceNewsWallStreetTokenizedTradingIranCrisis2026Page() {
  return <NewsArticleDB slug="finance-news-wall-street-tokenized-trading-iran-crisis-2026" />;
}
