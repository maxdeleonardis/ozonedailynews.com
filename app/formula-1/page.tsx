import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Formula 1 | F1 2026 Season, Drivers, Teams & Race Calendar',
  description: 'ObjectWire Formula 1 hub. F1 2026 season drivers, teams, race calendar, Grand Prix results, champion history, and motorsport analysis.',
  alternates: {
    canonical: 'https://www.objectwire.org/formula-1',
  },
  keywords: ['Formula 1', 'F1', 'Grand Prix', 'Formula One', 'Max Verstappen', 'Lewis Hamilton', 'Ferrari', 'Mercedes', 'Red Bull Racing', 'motorsport', 'F1 2026', 'F1 calendar'],
  openGraph: {
    title: 'Formula 1 | F1 2026 Season, Drivers, Teams & Race Calendar',
    description: 'ObjectWire F1 coverage: 2026 season drivers, teams, race calendar, Grand Prix results, champion history, and motorsport analysis.',
    type: 'website',
    url: 'https://www.objectwire.org/formula-1',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formula 1 | F1 2026 Drivers, Teams & Race Calendar',
    description: 'ObjectWire F1 hub: 2026 drivers, teams, race calendar, Grand Prix results, and motorsport analysis.',
  },
};

export default function Formula1WikiPage() {
  return <WikiArticle slug="formula-1" />;
}
