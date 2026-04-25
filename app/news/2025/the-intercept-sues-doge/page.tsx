import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "the intercept sues doge",
  description: "The lawsuits allege that DOGE's structure and actions violate federal transparency laws, raising questions about its authority and potential conflicts of",
  alternates: {
    canonical: 'https://www.objectwire.org/the-intercept-sues-doge',
  },
  openGraph: {
    title: "the intercept sues doge",
    description: "The lawsuits allege that DOGE",
    type: 'article',
    url: "https://www.objectwire.org/the-intercept-sues-doge",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "the intercept sues doge",
    description: "The lawsuits allege that DOGE",
  },
};

export default function InterceptSuesDogePage() {
  return <WikiArticle slug="news-2025-the-intercept-sues-doge" />;
}
