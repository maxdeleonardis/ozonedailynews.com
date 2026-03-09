import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Fact-finding and Evidence Collection - ObjectWire.org",
  description: "We investigate personal injury incidents, insurance fraud, property disputes, harassment allegations, and more. In criminal cases, we locate and interview witnesses.",
  alternates: {
    canonical: 'https://www.objectwire.org/fact-finding-and-evidence-collection',
  },
};

export default function FactFindingPage() {
  return <WikiArticle slug="service-fact-finding-and-evidence-collection" />;
}
