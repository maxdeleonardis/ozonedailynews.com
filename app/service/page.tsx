import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Professional Investigative & Media Services",
  description:
    "ObjectWire offers licensed private detective services in Austin, TX, surveillance, infidelity investigations, fact-finding, evidence collection,",
  keywords: [
    "private detective Austin",
    "Austin PI",
    "surveillance services Texas",
    "infidelity investigation",
    "evidence collection",
    "press release writing",
    "investigative photography Austin",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/service",
  },
  openGraph: {
    title: "Professional Investigative & Media Services",
    description:
      "Licensed private detective agency in Austin, TX. Surveillance, digital forensics, infidelity investigations, evidence collection, and media services.",
    url: "https://www.objectwire.org/service",
    siteName: "ObjectWire",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Investigative & Media Services',
    description: 'Licensed private detective agency in Austin, TX. Surveillance, digital forensics, infidelity investigations, evidence collection, and media services.',
  },
};

export default function ServiceHubPage() {
  return <WikiArticle slug="service" />;
}
