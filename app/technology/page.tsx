import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Technology | ObjectWire",
  description: "Investigative reporting on AI, orbital computing, and emerging industrial technologies.",
  alternates: {
    canonical: 'https://www.objectwire.org/technology',
  },
};

export default function TechnologyPage() {
  return <WikiArticle slug="technology" />;
}
