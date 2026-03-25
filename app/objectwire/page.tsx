import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "ObjectWire.org - Verification-First Intelligence Platform & Independent News Organization",
  description: "ObjectWire.org is a verification-first intelligence platform providing cited business and technology analysis. Learn about its mission, history, content pillars, and editorial standards.",
  alternates: {
    canonical: 'https://www.objectwire.org/objectwire',
  },
  keywords: ['ObjectWire', 'verification-first', 'intelligence platform', 'investigative journalism', 'tech news', 'business intelligence', 'fact-checking'],
};

export default function ObjectWireWikiPage() {
  return <WikiArticle slug="objectwire" />;
}
