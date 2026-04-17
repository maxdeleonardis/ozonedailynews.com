import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/visa-usdc-solana-settlement-lead-bank-cross-river';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Visa Settles Bank Transactions in USDC on Solana | Lead Bank, Cross River',
  description: 'Visa is actively settling transactions in USDC on the Solana blockchain through Lead Bank and Cross River Bank, with over $3.5 billion in annualized stablecoin settlement volume globally.',
  keywords: [
    'Visa USDC Solana settlement',
    'Visa stablecoin settlement 2026',
    'Visa USDC blockchain',
    'Lead Bank USDC Visa',
    'Cross River Bank Visa USDC',
    'Visa VisaNet USDC',
    'Circle USDC Visa',
    'Visa crypto settlement',
    'Solana USDC payments',
    'Cuy Sheffield Visa crypto',
    'Visa stablecoin 3.5 billion',
    'USDC bank settlement 2026',
    'Visa blockchain payments',
    'stablecoin payment infrastructure',
    'Visa USDC 2025 launch',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Visa Settles Bank Transactions in USDC on Solana',
    description: 'Lead Bank and Cross River Bank are settling VisaNet obligations in USDC on Solana. Visa reports $3.5B+ in annualized stablecoin settlement volume globally.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Crypto Desk'],
    publishedTime: '2026-04-17T21:30:00Z',
    modifiedTime: '2026-04-17T21:30:00Z',
    section: 'Crypto',
    tags: ['Visa', 'USDC', 'Solana', 'Stablecoin'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa is now settling bank transactions in USDC on Solana',
    description: 'Lead Bank and Cross River Bank live. $3.5B annualized volume. Cuy Sheffield confirms production — not a pilot.',
  },
};

export default function CryptoNewsVisaUsdcSolanaSettlementLeadBankCrossRiverPage() {
  return <NewsArticleDB slug="crypto-news-visa-usdc-solana-settlement-lead-bank-cross-river" />;
}
