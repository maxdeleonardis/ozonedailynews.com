import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "2025 Nissan Z vs Toyota GR Supra | Full Comparison, Specs",
  description: "This head-to-head breakdown covers engine specs, design, interior, technology, pricing, and real-world driving dynamics to help you decide between the",
  alternates: {
    canonical: 'https://www.objectwire.org/2025-nissan-z-vs-toyota-gr-supra-comparison',
  },
  openGraph: {
    title: "2025 Nissan Z vs Toyota GR Supra | Full Comparison, Specs",
    description: "This head-to-head breakdown covers engine specs, design, interior, technology, pricing, and real-world driving dynamics to help you decide between the",
    type: 'article',
    url: "https://www.objectwire.org/2025-nissan-z-vs-toyota-gr-supra-comparison",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "2025 Nissan Z vs Toyota GR Supra | Full Comparison, Specs",
    description: "This head-to-head breakdown covers engine specs, design, interior, technology, pricing, and real-world driving dynamics to help you decide between the",
  },
};

export default function NissanZvsSupra2025Page() {
  return <WikiArticle slug="cars-2025-nissan-z-vs-toyota-gr-supra-comparison" />;
}
