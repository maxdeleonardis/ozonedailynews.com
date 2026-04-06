import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Iran News Hub | 2026 Iranian Revolution Coverage",
  description: "Comprehensive coverage of the 2026 Iranian Revolution and current events in Iran. Real-time verified intelligence on political developments, protests, and",
  keywords: ["Iran news", "Iranian revolution 2026", "Iran protests", "Iran political crisis", "Middle East news", "Iran current events", "Tehran news"],
  alternates: {
    canonical: 'https://www.objectwire.org/iran',
  },
  openGraph: {
    title: "Iran News Hub | 2026 Iranian Revolution",
    description: "Live coverage and analysis of the 2026 Iranian Revolution and ongoing developments in Iran.",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iran News Hub | 2026 Iranian Revolution',
    description: 'Live coverage and analysis of the 2026 Iranian Revolution and ongoing developments in Iran.',
  },
};

export default function WikiPage() {
  return <WikiArticle slug="news-iran" />;
}
