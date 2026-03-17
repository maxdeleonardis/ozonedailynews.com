import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/news/trump-administration-10-billion-fee-tiktok-deal';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/trump/tiktok-deal.jpg';

export const metadata: Metadata = {
  title: 'Trump Administration to Collect $10 Billion Fee for Brokering TikTok Deal | ObjectWire',
  description:
    "The Trump administration is set to collect approximately $10 billion from investors involved in the deal transferring TikTok's U.S. operations from ByteDance to an American-aligned consortium — a payment historians describe as \"nearly unprecedented for a government helping arrange a transaction.\"",
  keywords: [
    'Trump TikTok deal $10 billion',
    'TikTok ByteDance US deal',
    'Trump administration TikTok fee',
    'TikTok US operations sale',
    'ByteDance American investor consortium',
    'Trump TikTok broker fee',
    'TikTok deal Wall Street Journal',
    'government broker fee TikTok',
    'TikTok national security deal',
    'Trump administration unprecedented fee',
    'TikTok US ownership 2026',
    'ByteDance divestiture',
    'TikTok American investors',
  ],
  openGraph: {
    title: 'Trump Administration to Collect $10 Billion Fee for Brokering TikTok Deal',
    description:
      "The Trump administration will receive ~$10 billion from investors in the TikTok deal — a fee historians call \"nearly unprecedented for a government helping arrange a transaction,\" per the Wall Street Journal.",
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: 'Trump TikTok deal $10 billion broker fee' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump to Collect ~$10B for Brokering TikTok Deal — Historians Call It "Nearly Unprecedented"',
    description:
      "The Trump administration is set to receive ~$10B from investors in the TikTok ownership transfer from ByteDance to American-aligned consortium, per WSJ.",
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

export default function TrumpTikTok10BillionFeePage() {
  return <NewsArticleDB slug="trump-news-trump-administration-10-billion-fee-tiktok-deal" />;
}
