import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Nick Shirley Wiki 2026 | Investigative YouTuber & Fraud",
  description: "Complete profile of Nick Shirley - investigative content creator known for exposing fraud schemes, urban exploration, and viral Minnesota Feeding Our",
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
    title: 'Nick Shirley | Investigative YouTube Creator 2026',
    description: "From urban exploration to exposing multi-million dollar fraud schemes. Nick Shirley's rise as an investigative content creator and the Feeding Our Future story.",
    type: 'article',
    url: 'https://www.owire.org/creator/nick-shirley',
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-02-09T10:00:00Z',
    modifiedTime: '2026-02-09T10:00:00Z',
    tags: ['Nick Shirley', 'YouTube', 'Investigative Journalism', 'Feeding Our Future', 'Minnesota'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Shirley Wiki 2026 | Investigative YouTuber & Fraud",
    description: "Complete profile of the investigative content creator exposing fraud across America.",
  },
  alternates: {
    canonical: 'https://www.owire.org/creator/nick-shirley',
  },
};

export default function NickShirleyPage() {
  return <WikiArticle slug="creator-nick-shirley" />;
}
