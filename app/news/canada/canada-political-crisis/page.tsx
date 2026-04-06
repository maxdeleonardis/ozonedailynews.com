import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Canada CFIA Slaughters 100s of Ostriches that had natural immunity | ObjectWire.org",
  description: "What began as a local animal-health concern escalated into a high-stakes, internationally scrutinized incident when Canadian authorities forcibly",
  alternates: {
    canonical: 'https://www.objectwire.org/oh-canada-what-has-happened',
  },
};

export default function CanadaOstrichPage() {
  return <WikiArticle slug="news-canada-canada-political-crisis" />;
}
