import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NELK Boys - YouTube Entertainment Group | ObjectWire",
  description: "Complete coverage of the NELK Boys, the controversial YouTube entertainment group. Latest news, member profiles, career highlights, and current ventures including Full Send.",
  keywords: ["NELK Boys", "Full Send", "Kyle Forgeard", "Jesse Sebastiani", "Steve Deleonardis", "SteveWillDoIt", "YouTube pranks", "Happy Dad"],
  alternates: {
    canonical: 'https://www.objectwire.org/nelk-boys',
  },
};

export default function NelkBoysPage() {
  return <WikiArticle slug="youtube-nelk-boys" />;
}
