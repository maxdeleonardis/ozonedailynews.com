import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/cross-river-bank-visa-usdc-solana-baas-settlement';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1629193382974-f478714dba26?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Cross River Bank | Visa USDC Solana Settlement',
  description: 'Cross River Bank, the BaaS engine behind Affirm and Stripe, serves as Visa\'s settlement rail and compliance layer for USDC transactions on the Solana',
  keywords: [
    'Cross River Bank Visa USDC',
    'Cross River Bank Solana settlement',
    'Cross River Bank BaaS',
    'Cross River Bank fintech',
    'Cross River Bank Circle USDC',
    'Cross River Bank Fort Lee NJ',
    'Cross River Bank Affirm Stripe',
    'Cross River Bank crypto compliance',
    'Cross River Bank settlement rail',
    'Cross River Bank AI compliance',
    'Cross River Bank 2026',
    'BaaS banking crypto settlement',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Cross River Bank | Visa\'s Settlement Rail for USDC on Solana',
    description: 'Fort Lee, NJ-based Cross River Bank, the fintech infrastructure engine behind Affirm and Stripe, manages the settlement rail and compliance layer for',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Finance Desk'],
    publishedTime: '2026-04-17T22:00:00Z',
    modifiedTime: '2026-04-17T22:00:00Z',
    section: 'Finance',
    tags: ['Cross River Bank', 'Visa', 'USDC', 'Solana'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cross River Bank profile | The BaaS engine behind Visa\'s USDC settlement',
    description: 'Fort Lee, NJ. Affirm and Stripe\'s banking backbone. Now running Visa USDC settlement on Solana with Circle integration.',
  },
};

export default function FinanceNewsCrossRiverBankVisaUsdcSolanaBaasSettlementPage() {
  return <ArticlePageDB slug="finance-news-cross-river-bank-visa-usdc-solana-baas-settlement" />;
}
