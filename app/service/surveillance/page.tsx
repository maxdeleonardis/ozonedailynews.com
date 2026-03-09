import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Surveillance - The Objective Wire | Texas Business &Tech News",
  description: "Covert Surveillance for Legal, Domestic, and Corporate Cases. Infidelity investigations, child custody verification, worker's compensation claims, and more.",
  alternates: {
    canonical: 'https://www.objectwire.org/surveillance',
  },
};

export default function SurveillancePage() {
  return <WikiArticle slug="service-surveillance" />;
}
