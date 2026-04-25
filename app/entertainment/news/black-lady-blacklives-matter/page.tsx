import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Black Lives Matter Lady GOING TO PRISON 2-20 Years",
  description: "In December 2025, federal authorities indicted Tashella Sheri Amore Dickerson, 52, longtime executive director of Black Lives Matter chapter.",
  alternates: {
    canonical: 'https://www.objectwire.org/black-lady-blacklives-matter',
  },
  openGraph: {
    title: "Black Lives Matter Lady GOING TO PRISON 2-20 Years",
    description: "In December 2025, federal authorities indicted Tashella Sheri Amore Dickerson, 52, longtime executive director of Black Lives Matter chapter.",
    type: 'article',
    url: "https://www.objectwire.org/black-lady-blacklives-matter",
    siteName: 'ObjectWire',
    section: "Entertainment",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Black Lives Matter Lady GOING TO PRISON 2-20 Years",
    description: "In December 2025, federal authorities indicted Tashella Sheri Amore Dickerson, 52, longtime executive director of Black Lives Matter chapter.",
  },
};

export default function BLMIndictmentPage() {
  return <WikiArticle slug="entertainment-news-black-lady-blacklives-matter" />;
}
