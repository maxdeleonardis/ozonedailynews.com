import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "2025 US Grand Prix: Richard Mille Robberies [Suspect in Custody] | ObjectWire.org",
  description: "Luxury watch heists at the 2025 US Grand Prix Formula 1 race. Richard Mille timepieces stolen from high-profile attendees.",
  alternates: {
    canonical: 'https://www.objectwire.org/luxury-watch-heists-at-the-us-grand-prix',
  },
};

export default function USGrandPrixRobberiesPage() {
  return <WikiArticle slug="news-2025-luxury-watch-heists-at-the-us-grand-prix" />;
}
