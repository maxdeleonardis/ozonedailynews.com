import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "TikTok - Complete Guide, History & Latest News 2026 | ObjectWire",
  description:
    "Complete guide to TikTok: history from Musical.ly merger, algorithm explained, user demographics, controversies, US ban updates, and cultural impact. Latest TikTok news and USDS Joint Venture updates.",
  keywords: [
    "TikTok",
    "TikTok news",
    "TikTok ban",
    "TikTok algorithm",
    "ByteDance",
    "social media",
    "short-form video",
    "Musical.ly",
    "Zhang Yiming",
    "TikTok US ban",
    "TikTok USDS",
    "social network",
    "video sharing",
    "influencer marketing",
    "Gen Z social media",
    "TikTok trends",
    "For You Page",
    "TikTok creator fund",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/tiktok',
  },
  openGraph: {
    title: 'TikTok - Complete Guide, History & Latest News 2026',
    description: 'Everything you need to know about TikTok: algorithm, controversies, US ban updates, and cultural impact',
    url: 'https://www.objectwire.org/tiktok',
    type: 'article',
  },
};

export default function TikTokPage() {
  return <WikiArticle slug="social-tiktok" />;
}
