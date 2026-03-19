import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "2025 Nissan Z vs Toyota GR Supra: Full Comparison, Specs & Performance - ObjectWire.org",
  description: "This head-to-head breakdown covers engine specs, design, interior, technology, pricing, and real-world driving dynamics to help you decide between the 2025 Nissan Z and Toyota GR Supra.",
  alternates: {
    canonical: 'https://www.objectwire.org/2025-nissan-z-vs-toyota-gr-supra-comparison',
  },
};

export default function NissanZvsSupra2025Page() {
  return <WikiArticle slug="cars-2025-nissan-z-vs-toyota-gr-supra-comparison" />;
}
