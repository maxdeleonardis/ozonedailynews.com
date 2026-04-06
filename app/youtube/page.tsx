import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "YouTube Wiki 2026: History, Google Acquisition & 2.7B Users",
  description: "Complete profile of YouTube - founded 2005, acquired by Google for $1.65B in 2006. Now serving 2.7 billion monthly users with 500 hours uploaded per",
  keywords: [
    "YouTube",
    "video platform",
    "Google",
    "streaming",
    "content creators",
    "Susan Wojcicki",
    "Neal Mohan",
    "YouTube history",
    "video sharing",
  ],
  openGraph: {
    title: "YouTube: Complete Company Profile & History",
    description: "From garage startup to 2.7B users - YouTube's journey from 2005 to 2026.",
    type: "article",
    url: "https://www.objectwire.org/youtube",
    images: [
      {
        url: "https://www.objectwire.org/youtube-og.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Company Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Wiki 2026: History, Google Acquisition & 2.7B Users",
    description: "Complete profile of the world's largest video platform.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/youtube',
  },
};

export default function YouTubePage() {
  return <WikiArticle slug="youtube" />;
}
