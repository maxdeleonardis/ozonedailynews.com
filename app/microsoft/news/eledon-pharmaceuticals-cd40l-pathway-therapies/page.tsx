import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/eledon-pharmaceuticals-cd40l-pathway-therapies';

export const metadata: Metadata = {
  title: 'Eledon Pharmaceuticals Overview: Clinical-Stage Biotech Focused on CD40L Pathway Therapies | ObjectWire',
  description:
    'Eledon Pharmaceuticals (ELDN) develops tegoprubart, an anti-CD40L antibody for transplant rejection. Phase 2 BESTOW kidney data, islet cell transplant trials, and $57.5M offering details.',
  keywords: [
    'Eledon Pharmaceuticals ELDN',
    'tegoprubart anti-CD40L',
    'CD40 Ligand pathway',
    'kidney transplant rejection',
    'islet cell transplantation',
    'Phase 2 BESTOW trial',
    'tacrolimus alternative',
    'organ transplant immunosuppression',
    'xenotransplantation eGenesis',
    'one transplant for life',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Eledon Pharmaceuticals: Clinical-Stage Biotech Focused on CD40L Pathway Therapies',
    description: 'Tegoprubart targets transplant rejection via CD40L pathway. Phase 2 kidney data, islet trials, and $57.5M offering.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Health Desk'],
    publishedTime: '2026-03-05T10:00:00Z',
    modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Biotech & Health',
    tags: ['Eledon Pharmaceuticals', 'Tegoprubart', 'CD40L', 'Transplant', 'Biotech'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eledon Pharmaceuticals: Tegoprubart for Transplant Rejection',
    description: 'Clinical-stage biotech targeting CD40L pathway with tegoprubart for kidney and islet cell transplantation.',
  },
};

export default function EledonPharmaceuticalsPage() {
  return <NewsArticleDB slug="microsoft-news-eledon-pharmaceuticals-cd40l-pathway-therapies" />;
}
