import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title:
    "Seedance 2.0 Global Launch Delayed Amid Hollywood",
  description:
    "ByteDance's Seedance 2.0 AI video model launched in China on February 12, 2026, but its global API rollout, originally set for February 24, has been",
  keywords: [
    "Seedance 2.0",
    "ByteDance AI video",
    "Seedance global launch delayed",
    "Hollywood copyright AI",
    "MPA ByteDance",
    "AI video generation copyright",
    "Seedance AI model",
    "TikTok AI video",
    "deepfake copyright",
    "Tom Cruise AI deepfake",
    "Disney copyright AI",
    "SAG-AFTRA AI",
    "AI copyright 2026",
    "ByteDance video AI",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/tiktok/seedance-2.0",
  },
  openGraph: {
    title: "Seedance 2.0 Global Launch Blocked by Hollywood",
    description:
      "ByteDance's cinematic AI video model was set for global release February 24, 2026. Then the cease-and-desist letters arrived.",
    type: "article",
    publishedTime: "2026-02-24T10:00:00Z",
    url: "https://www.objectwire.org/tiktok/seedance-2.0",
    siteName: "ObjectWire",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seedance 2.0 Launch Delayed | Hollywood vs ByteDance AI",
    description:
      "MPA, Disney, Warner Bros., and SAG-AFTRA moved to block ByteDance's Seedance 2.0 global rollout over deepfake and copyright concerns.",
  },
};

export default function Seedance2Page() {
  return <WikiArticle slug="tiktok-seedance-2.0" />;
}
