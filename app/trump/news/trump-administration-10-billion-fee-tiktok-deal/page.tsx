import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/trump/news/trump-administration-10-billion-fee-tiktok-deal';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Trump TikTok Deal | $10 Billion Government Broker Fee',
  description:
    "The Trump administration is set to collect approximately $10 billion from investors in the TikTok ownership transfer from ByteDance, a fee historians describe as nearly unprecedented for a government brokering a private-sector transaction.",
  keywords: [
    'Trump TikTok deal',
    'TikTok $10 billion fee',
    'Trump administration broker fee',
    'TikTok ByteDance divestiture',
    'ByteDance American investor consortium',
    'TikTok US operations sale 2026',
    'Wall Street Journal TikTok',
    'government broker fee TikTok',
    'TikTok national security deal',
    'Trump unprecedented government fee',
    'TikTok US ownership transfer',
    'ByteDance sell TikTok',
    'TikTok 170 million users',
    'Trump TikTok ban extension',
    'TikTok Supreme Court 2025',
  ],
  openGraph: {
    title: 'Trump Administration to Collect $10 Billion Fee for Brokering TikTok Deal',
    description:
      "The Trump administration will receive ~$10 billion from investors in the TikTok ownership transfer, a fee historians call nearly unprecedented for a government brokering a private-sector transaction, per the Wall Street Journal.",
    url: FULL_URL,
    type: 'article',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-03-15T05:00:00Z',
    modifiedTime: '2026-04-02T00:00:00Z',
    section: 'Politics',
    tags: ['TikTok', 'ByteDance', 'Trump Administration', 'Wall Street Journal'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump to Collect ~$10B for Brokering TikTok Deal',
    description:
      "Historians call it nearly unprecedented, a government collecting $10 billion for brokering a private-sector transaction, per WSJ.",
  },
  alternates: { canonical: FULL_URL },
};

export default function TrumpTikTok10BillionFeePage() {
  return <NewsArticleDB slug="trump-news-trump-administration-10-billion-fee-tiktok-deal" />;
}
