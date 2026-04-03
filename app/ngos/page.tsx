import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NGO Investigations | ObjectWire",
  description: "Investigative journalism covering nonprofit organizations, 501(c) entities, charitable foundations, and NGO accountability. Following the money and examining transparency.",
  keywords: [
    "NGO investigations",
    "nonprofit accountability",
    "501c3 organizations",
    "501c4 organizations",
    "charity watchdog",
    "foundation transparency",
    "nonprofit journalism"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/ngos',
  },
  openGraph: {
    type: "website",
    title: "NGO & Nonprofit Investigations",
    description: "Investigative reporting on nonprofit organizations, foundations, and tax-exempt entities.",
  },
};

export default function NGOsPage() {
  return <WikiArticle slug="ngos" />;
}
