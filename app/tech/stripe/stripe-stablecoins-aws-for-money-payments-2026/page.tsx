import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/stripe/stripe-stablecoins-aws-for-money-payments-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Stripe Stablecoins | AWS for Money Strategy, Bridge, Tempo 2026',
  description: 'Stripe is embedding stablecoins across its payments stack after acquiring Bridge for $1.1B and launching the Tempo blockchain. Inside the AWS for money vision, Machine Payments Protocol, and $2T payments ambition.',
  keywords: [
    'Stripe stablecoins 2026',
    'Stripe AWS for money',
    'Stripe Bridge acquisition',
    'Stripe Tempo blockchain',
    'Stripe crypto payments',
    'Stripe stablecoin checkout',
    'Machine Payments Protocol',
    'Stripe Privy acquisition',
    'stablecoin payments infrastructure',
    'Stripe cross-border payments',
    'Stripe Paradigm Tempo mainnet',
    'Stripe crypto strategy 2026',
    'Bridge stablecoin API',
    'Stripe Shopify stablecoin',
    'Stripe payments blockchain',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Stripe Stablecoins | AWS for Money Strategy, Bridge & Tempo 2026',
    description: 'Stripe acquired Bridge for $1.1B, launched the Tempo L1 blockchain with Paradigm, and is rolling out stablecoin checkout across 5M+ merchants. The full breakdown of the AWS for money play.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-21T14:00:00Z',
    modifiedTime: '2026-04-21T14:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Stripe stablecoins AWS for money payments 2026' }],
    tags: ['Stripe', 'Stablecoins', 'Crypto', 'Fintech'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stripe Is Building the AWS for Money With Stablecoins',
    description: '$1.1B Bridge acquisition, Tempo mainnet live, stablecoin checkout at Shopify. The full Stripe crypto stack.',
    images: [OG_IMAGE],
  },
};

export default function TechStripeStripeStablecoinsAwsForMoneyPayments2026Page() {
  return <JackArticleDB slug="tech-stripe-stripe-stablecoins-aws-for-money-payments-2026" />;
}
