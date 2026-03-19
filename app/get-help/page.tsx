import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Austin Private Detective + Investigative Journalism Services - ObjectWire.org",
  description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
  alternates: {
    canonical: 'https://www.objectwire.org/get-help',
  },
};

export default function GetHelpPage() {
  return <WikiArticle slug="get-help" />;
}
