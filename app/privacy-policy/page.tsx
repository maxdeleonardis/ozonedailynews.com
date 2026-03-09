import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ObjectWire Privacy Policy - How we collect, use, and protect your information",
  alternates: {
    canonical: 'https://www.objectwire.org/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <WikiArticle slug="privacy-policy" />;
}
