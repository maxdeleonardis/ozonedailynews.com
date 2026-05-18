import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Jack Wang | Contributor & Journalist",
  description: `Jack Wang is a co-founder and contributor at ObjectWire. published articles covering technology, gaming, finance, and digital culture.`,
  alternates: {
    canonical: 'https://www.ozonenetwork.news/authors/jack-wang',
  },
  openGraph: {
    title: "Jack Wang | ObjectWire Contributor",
    description: "Co-founder bringing insightful metaphors and deep perspectives to journalism.",
    type: "profile",
    url: 'https://www.ozonenetwork.news/authors/jack-wang',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Wang | ObjectWire Contributor',
    description: 'Co-founder bringing insightful metaphors and deep perspectives to journalism.',
  },
};

export default function JackSAuthorPage() {
  return <WikiArticle slug="authors-jack-wang" />;
}
