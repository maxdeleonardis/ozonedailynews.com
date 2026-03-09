import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "the intercept sues doge - ObjectWire.org",
  description: "The lawsuits allege that DOGE's structure and actions violate federal transparency laws, raising questions about its authority and potential conflicts of interest.",
  alternates: {
    canonical: 'https://www.objectwire.org/the-intercept-sues-doge',
  },
};

export default function InterceptSuesDogePage() {
  return <WikiArticle slug="news-2025-the-intercept-sues-doge" />;
}
