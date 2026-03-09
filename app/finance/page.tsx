import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Finance | ObjectWire",
  description: "Real-time market look, financial news, and investigative economic reporting.",
  alternates: {
    canonical: 'https://www.objectwire.org/finance',
  },
};

export default function FinancePage() {
  return <WikiArticle slug="finance" />;
}
