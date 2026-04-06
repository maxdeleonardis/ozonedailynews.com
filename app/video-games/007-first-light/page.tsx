import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "007: First Light | James Bond Game by IO Interactive",
  description:
    "Everything about 007: First Light, the new James Bond origin story game from IO Interactive. Systemic gameplay meets espionage in the definitive 007",
  keywords: [
    "007 First Light",
    "James Bond game",
    "IO Interactive",
    "Hitman",
    "Project 007",
    "spy game",
    "espionage",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/007-first-light',
  },
};

export default function JamesBondGamePage() {
  return <WikiArticle slug="video-games-007-first-light" />;
}
