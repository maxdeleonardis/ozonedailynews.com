import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alphabet Raises $32B in 24 Hours with Rare 100-Year Bond | Breaking News | Object Wire',
  description: 'Alphabet Inc. raised nearly $32 billion in less than 24 hours through a historic multi-currency bond sale, including an ultra-rare 100-year sterling bond, the first century debt issued by a tech company since Motorola in 1997.',
  keywords: ['Alphabet', 'Google', 'bond sale', '100-year bond', 'century bond', 'corporate debt', 'Motorola', 'sterling bond', 'investment grade', 'tech financing', '$32 billion'],
  openGraph: {
    title: 'Alphabet Raises $32B in 24 Hours with Rare 100-Year Bond',
    description: 'Historic multi-currency bond sale includes ultra-rare century bond, first from tech company since Motorola in 1997.',
    type: 'article',
    publishedTime: '2026-02-11T09:00:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alphabet Raises $32B in 24 Hours with Rare 100-Year Bond',
    description: 'Historic multi-currency bond sale includes ultra-rare century bond, first from tech company since Motorola in 1997.',
  }
};

export default function AlphabetBondArticle() {
  return <NewsArticleDB slug="google-news-alphabet-raises-32b-in-24-hours-with-rare-100-year-bond" />;
}
