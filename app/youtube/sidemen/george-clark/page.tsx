import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "George Clarkey | YouTube Content Creator & Sidemen",
  description: "Complete profile of George Clarkey (George Clark), British YouTube creator known for comedy challenges, pranks, and frequent Sidemen collaborations.",
  keywords: ["George Clarkey", "George Clark", "Sidemen", "YouTube", "UK YouTuber", "Comedy", "Challenges"],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/george-clark',
  },
  openGraph: {
    title: "George Clarkey | YouTube Content Creator & Sidemen",
    description: "Complete profile of George Clarkey (George Clark), British YouTube creator known for comedy challenges, pranks, and frequent Sidemen collaborations.",
    type: 'article',
    url: "https://www.objectwire.org/youtube/sidemen/george-clark",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "George Clarkey | YouTube Content Creator & Sidemen",
    description: "Complete profile of George Clarkey (George Clark), British YouTube creator known for comedy challenges, pranks, and frequent Sidemen collaborations.",
  },
};

export default function GeorgeClarkeyPage() {
  return <WikiArticle slug="youtube-sidemen-george-clark" />;
}
