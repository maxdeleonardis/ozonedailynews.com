import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Cognyte Software Ltd (CGNT) | Investigative Analytics",
  description: "Cognyte develops advanced software solutions for investigative analytics, focusing on data fusion, analysis, and visualization to deliver actionable",
  alternates: {
    canonical: 'https://www.objectwire.org/cognyte-software-ltd-cgnt',
  },
  openGraph: {
    title: "Cognyte Software Ltd (CGNT) | Investigative Analytics",
    description: "Cognyte develops advanced software solutions for investigative analytics, focusing on data fusion, analysis, and visualization to deliver actionable",
    type: 'article',
    url: "https://www.objectwire.org/cognyte-software-ltd-cgnt",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cognyte Software Ltd (CGNT) | Investigative Analytics",
    description: "Cognyte develops advanced software solutions for investigative analytics, focusing on data fusion, analysis, and visualization to deliver actionable",
  },
};

export default function CognyteSoftwarePage() {
  return <WikiArticle slug="saas-cognyte" />;
}
