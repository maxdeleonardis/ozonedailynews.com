import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Contact Us | The Objective Wire - ObjectWire.org",
  description: "Contact Object Wire for inquiries, tips, or story submissions. Get in touch with our team today.",
  alternates: {
    canonical: 'https://www.objectwire.org/case',
  },
};

export default function CasePage() {
  return <WikiArticle slug="get-help-case" />;
}
