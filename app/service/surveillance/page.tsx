import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Surveillance | The Objective Wire | Texas Business &Tech",
  description: "Covert Surveillance for Legal, Domestic, and Corporate Cases. Infidelity investigations, child custody verification, worker's compensation claims, and",
  alternates: {
    canonical: 'https://www.objectwire.org/surveillance',
  },
  openGraph: {
    title: "Surveillance | The Objective Wire | Texas Business &Tech",
    description: "Covert Surveillance for Legal, Domestic, and Corporate Cases. Infidelity investigations, child custody verification, worker",
    type: 'article',
    url: "https://www.objectwire.org/surveillance",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Surveillance | The Objective Wire | Texas Business &Tech",
    description: "Covert Surveillance for Legal, Domestic, and Corporate Cases. Infidelity investigations, child custody verification, worker",
  },
};

export default function SurveillancePage() {
  return <WikiArticle slug="service-surveillance" />;
}
