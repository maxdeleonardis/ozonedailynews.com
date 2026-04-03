import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Nick Shirley Wiki 2026: Investigative YouTuber & Fraud Exposé Expert",
  description: "Complete profile of Nick Shirley - investigative content creator known for exposing fraud schemes, urban exploration, and viral Minnesota Feeding Our Future investigation with 2M+ subscribers.",
  keywords: [
    "Nick Shirley",
    "investigative journalism",
    "YouTube",
    "fraud investigation",
    "Feeding Our Future",
    "Minnesota fraud",
    "urban explorer",
    "content creator",
    "documentary filmmaker",
  ],
  openGraph: {
    title: "Nick Shirley: Investigative YouTuber & Fraud Exposé Expert | ObjectWire",
    description: "From urban exploration to exposing multi-million dollar fraud schemes - Nick Shirley's rise as an investigative content creator.",
    type: "article",
    url: "https://www.objectwire.org/influencer/nick-shirley",
    images: [
      {
        url: "https://www.objectwire.org/nick-shirley-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nick Shirley Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Shirley Wiki 2026: Investigative YouTuber & Fraud Exposé Expert",
    description: "Complete profile of the investigative content creator exposing fraud across America.",
  },
};

export default function NickShirleyPage() {
  return <WikiArticle slug="influencer-nick-shirley" />;
}
