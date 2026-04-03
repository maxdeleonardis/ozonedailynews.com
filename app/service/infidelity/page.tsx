import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Infidelity Investigations | The Objective Wire - Texas Business & Tech News",
  description: "As a licensed private detective agency based in Austin, Texas, we provide confidential infidelity and domestic investigations designed to bring clarity to difficult situations.",
  alternates: {
    canonical: 'https://www.objectwire.org/infidelity',
  },
};

export default function InfidelityPage() {
  return <WikiArticle slug="service-infidelity" />;
}
