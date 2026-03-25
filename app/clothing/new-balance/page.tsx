import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "New Balance Wiki 2026: History, Made in USA Sneakers & Athletic Innovation",
  description: "Complete guide to New Balance Athletic Shoe, Inc. - Founded 1906, the iconic American footwear brand known for Made in USA manufacturing, 990 series, and performance athletic shoes.",
  keywords: [
    "New Balance",
    "New Balance sneakers",
    "Made in USA shoes",
    "New Balance 990",
    "athletic footwear",
    "running shoes",
    "New Balance history",
    "Boston sneakers",
    "American footwear brand",
    "New Balance 2026",
  ],
  openGraph: {
    title: "New Balance Wiki 2026: History, Made in USA Sneakers & Athletic Innovation",
    description: "Founded 1906 in Boston. The iconic American footwear brand committed to domestic manufacturing and athletic innovation.",
    type: "article",
    url: "https://objectwire.com/clothing/new-balance",
    images: [
      {
        url: "https://objectwire.com/og-new-balance.jpg",
        width: 1200,
        height: 630,
        alt: "New Balance - Made in USA Since 1906",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Balance Wiki 2026: Made in USA Since 1906",
    description: "The complete history of New Balance - From arch supports to global athletic powerhouse.",
    images: ["https://objectwire.com/og-new-balance.jpg"],
  },
};

export default function NewBalancePage() {
  return <WikiArticle slug="clothing-new-balance" />;
}
