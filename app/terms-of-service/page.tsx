import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ObjectWire Terms of Service - Rules and guidelines for using our platform",
  alternates: {
    canonical: 'https://www.objectwire.org/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return <WikiArticle slug="terms-of-service" />;
}
