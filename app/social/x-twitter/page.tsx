import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "X (Twitter) Wiki 2026: History, Elon Musk Acquisition & 550M Users",
  description: "Complete profile of X (formerly Twitter) - founded 2006, acquired by Elon Musk for $44B in 2022. Now rebranded as X with 550 million monthly users.",
  keywords: [
    "X",
    "Twitter",
    "Elon Musk",
    "social media",
    "microblogging",
    "Jack Dorsey",
    "X Corp",
    "tweets",
    "social network",
  ],
  openGraph: {
    title: "X (Twitter): Complete Company Profile & History",
    description: "From Twitter to X - Elon Musk's transformation of the microblogging platform.",
    type: "article",
    url: "https://www.objectwire.org/x-twitter",
    images: [
      {
        url: "https://www.objectwire.org/x-twitter-og.jpg",
        width: 1200,
        height: 630,
        alt: "X (Twitter) Company Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "X (Twitter) Wiki 2026: History, Elon Musk Acquisition & 550M Users",
    description: "Complete profile of X, the platform formerly known as Twitter.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/social/x-twitter',
  },
};

export default function XTwitterPage() {
  return <WikiArticle slug="social-x-twitter" />;
}
