import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Alphabet Inc– The History of Google - ObjectWire.org",
  description: "Founded by two Stanford students in the late 1990s, Google has transformed from a simple search engine project into a multinational conglomerate controlling vast swaths of the internet.",
  alternates: {
    canonical: 'https://www.objectwire.org/alphabet-inc-the-history-of-google',
  },
};

export default function AlphabetHistoryPage() {
  return <WikiArticle slug="google-news-alphabet-inc-the-history-of-google" />;
}
