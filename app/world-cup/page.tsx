import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title:
    "FIFA World Cup 2026 — Schedule, Teams, Host Cities & News | ObjectWire",
  description:
    "Complete coverage of FIFA World Cup 2026 across the USA, Mexico, and Canada. 48 teams, 104 matches, 16 host cities — schedules, qualified teams, tournament format, and breaking news.",
  keywords: [
    "FIFA World Cup 2026",
    "World Cup 2026",
    "World Cup schedule",
    "World Cup teams",
    "World Cup host cities",
    "USA Mexico Canada",
    "soccer",
    "football",
  ],
  openGraph: {
    title: "FIFA World Cup 2026 — ObjectWire",
    description:
      "48 teams, 104 matches, 16 host cities across North America. Full tournament coverage.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.objectwire.org/world-cup",
  },
};

export default function WorldCup2026Hub() {
  return <WikiArticle slug="world-cup" />;
}
