import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/buffett-dimon-warn-private-credit-risks-threaten-banks';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Buffett, Dimon Warn Private Credit Risks Threaten Banks',
  description: 'Warren Buffett and Jamie Dimon warned that the $1.8 trillion private credit market poses systemic risks to the banking system, citing opacity, leverage,',
  keywords: [
    'Warren Buffett private credit warning',
    'Jamie Dimon private credit 2026',
    'private credit systemic risk banks',
    'Buffett CNBC private credit',
    'Dimon shareholder letter 2026',
    'private credit market risks',
    'private credit banking contagion',
    'Berkshire Hathaway private credit',
    'JPMorgan private credit warning',
    'private credit liquidity crisis',
    'private credit $1.8 trillion',
    'shadow banking private credit',
    'private credit bank exposure 2026',
    'Buffett theater fire analogy',
    'private credit regulation 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Buffett, Dimon Warn Private Credit Risks Threaten Banks',
    description: 'Buffett likened a potential private credit crisis to "fire in a crowded theater." Dimon flagged opacity and leverage in his annual shareholder letter.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-08T23:00:00Z',
    modifiedTime: '2026-04-08T23:00:00Z',
    section: 'Finance',
    tags: ['Warren Buffett', 'Jamie Dimon', 'Private Credit', 'JPMorgan', 'Berkshire Hathaway'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buffett and Dimon Sound Alarm on Private Credit',
    description: 'Two of Wall Street\'s most influential voices warn that private credit opacity could trigger contagion across the banking system.',
  },
};

export default function FinanceNewsBuffettDimonWarnPrivateCreditRisksThreatenBanksPage() {
  return <NewsArticleDB slug="finance-news-buffett-dimon-warn-private-credit-risks-threaten-banks" />;
}
