import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Bank of America: Global Banking, Financial Services & Investment Management | ObjectWire",
  description: "Comprehensive overview of Bank of America Corporation, one of America's largest banks providing consumer banking, wealth management, corporate banking, and investment services to millions worldwide.",
  keywords: [
    "Bank of America",
    "BofA",
    "banking",
    "financial services",
    "investment banking",
    "wealth management",
    "consumer banking",
    "Brian Moynihan",
    "commercial banking",
    "Merrill Lynch",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/bank-of-america',
  },
  openGraph: {
    title: "Bank of America: Global Banking & Financial Services",
    description: "Complete guide to Bank of America, covering banking services, market position, history, and financial technology initiatives.",
    type: "article",
    url: "https://www.objectwire.org/bank-of-america",
    images: [
      {
        url: "https://www.objectwire.org/images/bank-of-america-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bank of America",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank of America: Global Banking Leader",
    description: "Comprehensive overview of Bank of America financial services.",
    images: ["https://www.objectwire.org/images/bank-of-america-twitter.jpg"],
  },
};

export default function BankOfAmericaPage() {
  return <WikiArticle slug="bank-of-america" />;
}
