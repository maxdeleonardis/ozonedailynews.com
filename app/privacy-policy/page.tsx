import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ObjectWire Privacy Policy - How we collect, use, and protect your information",
  alternates: {
    canonical: 'https://www.objectwire.org/privacy-policy',
  },
  openGraph: {
    title: "Privacy Policy",
    description: "ObjectWire Privacy Policy - How we collect, use, and protect your information",
    type: 'article',
    url: "https://www.objectwire.org/privacy-policy",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy",
    description: "ObjectWire Privacy Policy - How we collect, use, and protect your information",
  },
};

export default function PrivacyPolicyPage() {
  return <WikiArticle slug="privacy-policy" />;
}
