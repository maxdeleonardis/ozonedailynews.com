import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Black Lives Matter Lady GOING TO PRISON 2-20 Years - ObjectWire.org",
  description: "In December 2025, federal authorities indicted Tashella Sheri Amore Dickerson, 52, longtime executive director of Black Lives Matter chapter.",
  alternates: {
    canonical: 'https://www.objectwire.org/black-lady-blacklives-matter',
  },
};

export default function BLMIndictmentPage() {
  return <WikiArticle slug="entertainment-news-black-lady-blacklives-matter" />;
}
