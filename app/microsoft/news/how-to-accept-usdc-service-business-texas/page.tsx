import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/how-to-accept-usdc-service-business-texas';

export const metadata: Metadata = {
  title: 'How to Accept USDC for Your Service Business in Texas',
  description:
    'A comprehensive guide for Texas service businesses on accepting USDC stablecoin payments, covering setup, tax reporting, accounting, compliance, and',
  keywords: [
    'accept USDC Texas service business',
    'USDC payment processing Texas',
    'stablecoin business payments',
    'USDC tax reporting IRS',
    'crypto payments Texas sales tax',
    'Circle USDC business guide',
    'USDC accounting bookkeeping',
    'Coinbase Commerce USDC',
    'crypto payment processor business',
    'Texas service business cryptocurrency',
    'USDC to USD conversion',
    'IRS digital assets property',
    'stablecoin settlement speed',
    'accept cryptocurrency small business',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'How to Accept USDC for Your Service Business in Texas',
    description:
      'Step-by-step guide for Texas service businesses on accepting USDC stablecoin payments, covering wallets, processors, tax obligations, accounting, and',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['austin-web-services.com'],
    publishedTime: '2026-03-05T10:00:00Z',
    modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Finance & Technology',
    tags: ['USDC', 'Stablecoin', 'Texas', 'Cryptocurrency', 'Tax Reporting', 'Small Business'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Accept USDC for Your Service Business in Texas',
    description:
      'Complete guide on USDC acceptance, tax reporting, accounting, and compliance for Texas service businesses.',
  },
};

export default function USDCTexasServiceBusinessPage() {
  return <NewsArticleDB slug="microsoft-news-how-to-accept-usdc-service-business-texas" />;
}
