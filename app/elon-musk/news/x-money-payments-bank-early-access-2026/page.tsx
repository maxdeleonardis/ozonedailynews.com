import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/elon-musk/news/x-money-payments-bank-early-access-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'X Money Early Access 2026 | 6% APY, Visa Card, xAI Concierge',
  description: 'X Money enters public early access in April 2026 with 6% APY savings, free P2P transfers via DM, a metal Visa card with 3% cashback, and an xAI financial concierge. New York and Massachusetts remain blocked.',
  keywords: [
    'X Money early access 2026',
    'Elon Musk X Money bank',
    'X Money 6 percent APY',
    'X Money Visa debit card',
    'X Money creator payout migration Stripe',
    'X Money vs Venmo Cash App',
    'X Money Senate Banking Committee',
    'xAI financial concierge',
    'X Money money transmitter license',
    'X Money New York Massachusetts blocked',
    'X Money Dogecoin stablecoin 2026',
    'Elon Musk everything app WeChat',
    'X Money P2P payments',
    'X Money CFPB frozen assets',
    'X Money 44 states license',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'X Money Early Access 2026 | 6% APY, Metal Visa & xAI Concierge',
    description: 'Elon Musk rolls out X Money with 6% APY, free P2P payments via DM, a 3% cashback metal Visa card, and an xAI financial concierge. Creator payouts migrating from Stripe. Senate scrutiny already underway.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-28T22:00:00Z',
    modifiedTime: '2026-04-28T22:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Smartphone displaying a financial payments app interface' }],
    tags: ['X Money', 'Elon Musk', 'Fintech', 'xAI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X Money Is Live | 6% APY, Metal Visa, xAI Built In',
    description: "Musk's WeChat-for-America is in early access. All creator payouts moving from Stripe to X. Senate Banking Committee already watching.",
    images: [OG_IMAGE],
  },
};

export default function ElonMuskNewsXMoneyPaymentsBankEarlyAccess2026Page() {
  return <NewsArticleDB slug="elon-musk-news-x-money-payments-bank-early-access-2026" />;
}
