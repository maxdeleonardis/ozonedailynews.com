import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Formula 1 - FIA Formula One World Championship | ObjectWire",
  description: "Comprehensive guide to Formula 1, the pinnacle of motorsport. Explore F1 history, 2026 teams and drivers, race calendar, regulations, and the global phenomenon of Grand Prix racing.",
  alternates: {
    canonical: 'https://www.objectwire.org/formula-1',
  },
  keywords: ['Formula 1', 'F1', 'Grand Prix', 'Formula One', 'Max Verstappen', 'Lewis Hamilton', 'Ferrari', 'Mercedes', 'Red Bull Racing', 'motorsport'],
};

export default function Formula1WikiPage() {
  return <WikiArticle slug="formula-1" />;
}
