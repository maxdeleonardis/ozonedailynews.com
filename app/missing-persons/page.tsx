import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Missing Persons Investigations - The Objective Wire",
  description: "As a licensed private detective agency in Austin, Texas, we handle a wide range of missing persons cases with discretion, persistence, and sensitivity.",
  alternates: {
    canonical: 'https://www.objectwire.org/missing-persons',
  },
};

export default function MissingPersonsPage() {
  return <WikiArticle slug="missing-persons" />;
}
