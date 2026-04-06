import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Instagram Wiki 2026: History, Meta Acquisition & 2.4B Users",
  description: "Complete profile of Instagram - founded 2010, acquired by Facebook for $1B in 2012. Now serving 2.4 billion monthly users as Meta's photo-sharing platform.",
  keywords: [
    "Instagram",
    "photo sharing",
    "Meta",
    "Facebook",
    "social media",
    "Kevin Systrom",
    "Mike Krieger",
    "Instagram history",
    "Reels",
  ],
  openGraph: {
    title: "Instagram: Complete Company Profile & History",
    description: "From startup to 2.4B users - Instagram's evolution from 2010 to 2026.",
    type: "article",
    url: "https://www.objectwire.org/instagram",
    images: [
      {
        url: "https://www.objectwire.org/instagram-og.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Company Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Wiki 2026: History, Meta Acquisition & 2.4B Users",
    description: "Complete profile of the world's leading photo-sharing platform.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/instagram',
  },
};

export default function InstagramPage() {
  return <WikiArticle slug="influencer-instagram" />;
}
