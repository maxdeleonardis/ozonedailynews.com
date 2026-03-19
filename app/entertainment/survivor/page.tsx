import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Survivor Season 50 - Historic Milestone Season | ObjectWire",
  description: "Everything about Survivor Season 50, the historic milestone season. Cast rumors, location speculation, theme details, and what to expect from this landmark edition of the reality competition.",
  keywords: ["Survivor Season 50", "Survivor 50", "CBS Survivor", "reality TV", "Jeff Probst", "Survivor 2026"],
  alternates: {
    canonical: 'https://www.objectwire.org/survivor',
  },
};

export default function SurvivorPage() {
  return <WikiArticle slug="entertainment-survivor" />;
}
