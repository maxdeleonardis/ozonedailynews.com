import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "OzoneNews Privacy Policy: how we collect, use, and protect personal data, cookies, and user choices across our products. Explains data retention,",
  alternates: {
    canonical: 'https://www.ozonenetwork.news/privacy-policy',
  },
  openGraph: {
    title: "Privacy Policy",
    description: "OzoneNews Privacy Policy - How we collect, use, and protect your information",
    type: 'article',
    url: "https://www.ozonenetwork.news/privacy-policy",
    siteName: 'OzoneNews',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy",
    description: "OzoneNews Privacy Policy - How we collect, use, and protect your information",
  },
};

export default function PrivacyPolicyPage() {
  return <WikiArticle slug="privacy-policy" />;
}
