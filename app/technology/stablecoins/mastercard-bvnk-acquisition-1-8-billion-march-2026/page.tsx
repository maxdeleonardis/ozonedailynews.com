import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/stablecoins/mastercard-bvnk-acquisition-1-8-billion-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "Mastercard to Acquire BVNK for $1.8 Billion in Largest Digital Asset Bet Yet | ObjectWire",
  description:
    "Mastercard announced a definitive agreement to acquire London-based stablecoin infrastructure provider BVNK for up to $1.8 billion on March 17, 2026, including $300 million in earnouts. The deal closes by year-end 2026 and follows the collapse of a $2 billion Coinbase bid in late 2025.",
  keywords: [
    'Mastercard acquires BVNK $1.8 billion 2026',
    'BVNK stablecoin infrastructure acquisition',
    'Mastercard BVNK deal March 2026',
    'BVNK $750 million Series B valuation',
    'Coinbase BVNK acquisition failed November 2025',
    'Jorn Lambert Mastercard digital assets',
    'stablecoin payments infrastructure acquisition',
    'Mastercard blockchain settlement 2026',
    'BVNK on-chain fiat bridge',
    'Mastercard $1.8 billion crypto fintech deal',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "Mastercard to Acquire Stablecoin Infrastructure Firm BVNK for Up to $1.8 Billion",
    description:
      "Mastercard will pay up to $1.8 billion for BVNK, a London-based stablecoin rails provider, more than doubling its last valuation of $750 million. The move comes months after a rival Coinbase bid fell apart at $2 billion.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-18T10:00:00Z',
    modifiedTime: '2026-03-18T10:00:00Z',
    section: 'Finance',
    tags: [
      'Mastercard', 'BVNK', 'Stablecoins', 'Acquisition', 'Finance',
      'Crypto', 'Payments', 'Digital Assets', 'Fintech', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mastercard to Buy BVNK for $1.8 Billion in Stablecoin Infrastructure Push | ObjectWire",
    description:
      "Mastercard outmaneuvered Coinbase for BVNK, a stablecoin 'plumbing' provider that processed trillions in on-chain volume. Deal includes $300M in earnouts tied to stablecoin transaction growth.",
  },
  other: {
    news_keywords:
      'Mastercard BVNK acquisition, stablecoin infrastructure, BVNK $1.8 billion, Mastercard digital assets 2026',
  },
};

export default function MastercardBVNKPage() {
  return <NewsArticleDB slug="technology-stablecoins-mastercard-bvnk-acquisition-1-8-billion-march-2026" />;
}
