import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "$2.5 Billion Federal Reserve Headquarters Renovation Sparks Controversy | ObjectWire.org",
  description: "$2.5 Billion Headquarters Renovation of FED | Trump Disproves - Examining the debate over the Federal Reserve's massive renovation project.",
  alternates: {
    canonical: 'https://www.objectwire.org/jerome-powell-federal-reserve-headquarters-renovation',
  },
};

export default function FederalReserveHQPage() {
  return <WikiArticle slug="news-2025-jerome-powell-federal-reserve-headquarters-renovation" />;
}
