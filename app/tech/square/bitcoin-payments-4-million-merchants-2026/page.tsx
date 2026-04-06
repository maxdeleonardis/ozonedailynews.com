import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/square/bitcoin-payments-4-million-merchants-2026';
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Square Enables Bitcoin for 4 Million US Merchants',
  description:
    'Block\'s Square flipped Bitcoin payments from opt-in to opt-out for 4 million eligible US merchants on March 30, 2026. Customers pay via Lightning QR',
  keywords: [
    'Square Bitcoin payments 2026',
    'Square auto-enable Bitcoin merchants',
    'Block Square Lightning Network',
    'Square Bitcoin opt-out 2026',
    'Square 4 million merchants Bitcoin',
    'Bitcoin payments at checkout US',
    'Lightning Network merchant payments',
    'Square crypto payments',
    'Block Inc Bitcoin expansion',
    'Square Bitcoin QR code checkout',
    'Lightning Network USD conversion',
    'Bitcoin merchant adoption 2026',
    'Square payment platform Bitcoin',
    'crypto payments small business US',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Square Auto-Enables Bitcoin for 4 Million US Merchants',
    description:
      'Block flipped Square\'s Bitcoin feature from opt-in to opt-out on March 30, 2026. Customers scan a Lightning QR code. Merchants get USD. No volatility',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-30T14:00:00Z',
    modifiedTime: '2026-03-30T14:00:00Z',
    section: 'Tech',
    tags: [
      'Square',
      'Bitcoin',
      'Block',
      'Lightning Network',
      'Crypto',
      'Fintech',
      'Payments',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Square just auto-enabled Bitcoin for 4 million US merchants',
    description:
      'Opt-in flipped to opt-out. Customers pay via Lightning QR code. Merchants get USD. No setup, no volatility.',
  },
};

export default function TechSquareBitcoinPayments4MillionMerchants2026Page() {
  return <NewsArticleDB slug="tech-square-bitcoin-payments-4-million-merchants-2026" />;
}
