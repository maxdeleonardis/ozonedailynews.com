import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/lead-bank-visa-usdc-solana-crypto-settlement';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1629193382974-f478714dba26?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Lead Bank | Visa USDC Solana Settlement Partner Profile',
  description: 'Lead Bank, a Kansas City fintech institution led by CEO Jackie Reses, acts as Visa\'s acquiring partner and fiat-to-crypto gateway for USDC settlement on',
  keywords: [
    'Lead Bank Visa USDC',
    'Lead Bank Kansas City crypto',
    'Jackie Reses Lead Bank',
    'Lead Bank Solana settlement',
    'Lead Bank crypto banking',
    'Lead Bank Visa partner',
    'Lead Bank fiat crypto gateway',
    'Lead Bank fintech 2026',
    'Lead Bank USDC custody',
    'Lead Bank API banking',
    'Lead Bank institutional settlement',
    'crypto native bank US',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Lead Bank | Visa\'s Crypto-Native Banking Partner for USDC on Solana',
    description: 'Kansas City-based Lead Bank, led by former Square exec Jackie Reses, provides regulated infrastructure for Visa\'s USDC settlement on Solana.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Finance Desk'],
    publishedTime: '2026-04-17T22:00:00Z',
    modifiedTime: '2026-04-17T22:00:00Z',
    section: 'Finance',
    tags: ['Lead Bank', 'Visa', 'USDC', 'Solana'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Bank profile | The crypto-native bank behind Visa\'s USDC settlement',
    description: 'Kansas City bank. Jackie Reses, ex-Square. API-first. Regulated USDC custody and minting for Visa on Solana.',
  },
};

export default function FinanceNewsLeadBankVisaUsdcSolanaCryptoSettlementPage() {
  return <ArticlePageDB slug="finance-news-lead-bank-visa-usdc-solana-crypto-settlement" />;
}
