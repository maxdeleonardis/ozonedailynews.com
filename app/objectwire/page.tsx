import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "ObjectWire.org | Verification-First Intelligence Platform",
  description: "ObjectWire.org is a verification-first intelligence platform providing cited business and technology analysis. Learn about its mission, history, content",
  alternates: {
    canonical: 'https://www.objectwire.org/objectwire',
  },
  keywords: ['ObjectWire', 'verification-first', 'intelligence platform', 'investigative journalism', 'tech news', 'business intelligence', 'fact-checking'],
  openGraph: {
    title: "ObjectWire.org | Verification-First Intelligence Platform",
    description: "ObjectWire.org is a verification-first intelligence platform providing cited business and technology analysis. Learn about its mission, history, content",
    type: 'article',
    url: "https://www.objectwire.org/objectwire",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "ObjectWire.org | Verification-First Intelligence Platform",
    description: "ObjectWire.org is a verification-first intelligence platform providing cited business and technology analysis. Learn about its mission, history, content",
  },
};

export default function ObjectWireWikiPage() {
  return <WikiArticle slug="objectwire" />;
}
