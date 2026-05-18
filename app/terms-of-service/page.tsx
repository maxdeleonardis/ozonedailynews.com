import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ObjectWire Terms of Service - Rules and guidelines for using our platform",
  alternates: {
    canonical: 'https://www.ozonenetwork.news/terms-of-service',
  },
  openGraph: {
    title: "Terms of Service",
    description: "ObjectWire Terms of Service - Rules and guidelines for using our platform",
    type: 'article',
    url: "https://www.ozonenetwork.news/terms-of-service",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms of Service",
    description: "ObjectWire Terms of Service - Rules and guidelines for using our platform",
  },
};

export default function TermsOfServicePage() {
  return <WikiArticle slug="terms-of-service" />;
}
