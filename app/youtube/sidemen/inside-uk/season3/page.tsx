import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Sidemen Inside Season 3: Netflix Spring 2026 Release Confirmed — Full Cast & Details | ObjectWire",
  description:
    "Inside UK Season 3 is confirmed for a spring 2026 Netflix premiere. Full 12-person cast revealed including Eddie Hall, AB, Saffron Barker, Chloe Ferry and more. Everything you need to know.",
  keywords: [
    "Inside Season 3 Netflix",
    "Sidemen Inside UK Season 3",
    "Inside Netflix 2026",
    "Inside Season 3 cast",
    "Inside Season 3 release date",
    "Sidemen Netflix show",
    "Eddie Hall Inside Sidemen",
    "AB Sidemen Netflix",
    "Sidemen Productions Season 3",
    "Inside UK cast 2026",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/youtube/sidemen/inside-uk/season3",
  },
  openGraph: {
    title: "Sidemen Inside Season 3: Netflix Spring 2026 — Full Cast Revealed",
    description:
      "The Sidemen have completed filming on Inside Season 3. Netflix spring premiere confirmed, full 12-person cast announced on February 22, 2026.",
    type: "article",
    url: "https://www.objectwire.org/youtube/sidemen/inside-uk/season3",
    siteName: "ObjectWire",
    section: "Entertainment",
    images: [
      {
        url: "/sidemen/inside_season_3_sidemen_uk.PNG",
        width: 1200,
        height: 630,
        alt: "Inside Season 3 Sidemen UK Netflix",
      },
    ],
  },
};

export default function InsideSeason3Page() {
  return <WikiArticle slug="youtube-sidemen-inside-uk-season3" />;
}
