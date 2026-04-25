import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Alphabet Inc | The History of Google",
  description: "Founded by two Stanford students in the late 1990s, Google has transformed from a simple search engine project into a multinational conglomerate",
  alternates: {
    canonical: 'https://www.objectwire.org/alphabet-inc-the-history-of-google',
  },
  openGraph: {
    title: "Alphabet Inc | The History of Google",
    description: "Founded by two Stanford students in the late 1990s, Google has transformed from a simple search engine project into a multinational conglomerate",
    type: 'article',
    url: "https://www.objectwire.org/alphabet-inc-the-history-of-google",
    siteName: 'ObjectWire',
    section: "Tech",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alphabet Inc | The History of Google",
    description: "Founded by two Stanford students in the late 1990s, Google has transformed from a simple search engine project into a multinational conglomerate",
  },
};

export default function AlphabetHistoryPage() {
  return <WikiArticle slug="google-news-alphabet-inc-the-history-of-google" />;
}
