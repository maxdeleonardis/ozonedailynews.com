import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "James Cameron - Filmmaker & Explorer | ObjectWire",
  description:
    "James Cameron is a Canadian filmmaker and deep-sea explorer. Director of Avatar, Titanic, and The Terminator franchise.",
  keywords: [
    "James Cameron",
    "Avatar",
    "Titanic",
    "filmmaker",
    "director",
    "deep-sea explorer",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/james-cameron',
  },
};

export default function JamesCameronPage() {
  return <WikiArticle slug="entertainment-james-cameron" />;
}
