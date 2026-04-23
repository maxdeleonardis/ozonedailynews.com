import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/cross-river-bank-baas-visa-usdc';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Cross River Bank | BaaS Infrastructure, Visa USDC Settlement Partner',
  description: 'Cross River Bank is the fintech infrastructure engine behind Affirm, Stripe, and now Visa\'s USDC settlement on Solana. The Fort Lee, NJ bank processes billions in ACH and digital asset volume.',
  keywords: [
    'Cross River Bank',
    'Cross River Bank Visa USDC',
    'Cross River Bank fintech',
    'Cross River Bank BaaS',
    'Cross River Bank Solana',
    'Cross River Bank Circle USDC',
    'Cross River Bank Affirm Stripe',
    'Banking as a Service Cross River',
    'Cross River Bank Fort Lee',
    'Cross River Bank 2026',
    'Cross River Bank stablecoin',
    'Cross River Bank compliance AI',
    'fintech infrastructure bank US',
    'Cross River Bank real-time payments',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Cross River Bank | BaaS Fintech Engine and Visa USDC Settlement Partner',
    description: 'Cross River Bank powers Affirm, Stripe, and now Visa\'s USDC Solana settlement. The Fort Lee BaaS bank manages the creation-redemption cycle at $3.5B+ annualized stablecoin volume.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Finance Desk'],
    section: 'Finance',
    tags: ['Cross River Bank', 'USDC', 'Visa', 'BaaS'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cross River Bank | The infrastructure engine behind Visa\'s USDC Solana settlement',
    description: 'Powers Affirm, Stripe, and now VisaNet USDC settlement. $3.5B+ annualized volume. AI-driven compliance. Fort Lee\'s most important bank.',
  },
};

export default function FinanceCrossRiverBankBaasVisaUsdcPage() {
  return <ArticlePageDB slug="finance-cross-river-bank-baas-visa-usdc" />;
}
