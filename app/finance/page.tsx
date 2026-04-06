import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Finance | Markets, Crypto, Banking & Economic News 2026',
  description: 'ObjectWire finance hub. Stock markets, crypto, banking, global economic news, and investigative financial reporting from primary sources.',
  keywords: [
    'finance news',
    'stock market 2026',
    'crypto news',
    'banking news',
    'economic news',
    'Wall Street',
    'Federal Reserve',
    'interest rates',
    'inflation news',
    'financial analysis',
    'markets',
    'investing',
  ],
  openGraph: {
    title: 'Finance | Markets, Crypto, Banking & Economic News 2026',
    description: 'ObjectWire finance hub: stock markets, crypto, banking, economic reporting, and financial analysis from primary sources.',
    type: 'website',
    url: 'https://www.objectwire.org/finance',
    siteName: 'ObjectWire',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/finance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finance | Markets, Crypto, Banking & Economic News',
    description: 'ObjectWire finance: stock markets, crypto, banking, economic reporting, and financial analysis.',
  },
};

export default function FinancePage() {
  return <WikiArticle slug="finance" />;
}
