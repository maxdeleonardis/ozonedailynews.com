import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The Joe Rogan Experience - Podcast Profile | ObjectWire",
  description:
    "Complete profile of The Joe Rogan Experience, the world's most popular podcast. Host info, notable episodes, Spotify deal, and cultural impact.",
  keywords: [
    "Joe Rogan",
    "The Joe Rogan Experience",
    "JRE",
    "podcast",
    "Spotify",
    "comedy",
    "interviews",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/podcasts/joe-rogan',
  },
};

export default function JoeRoganPage() {
  return <WikiArticle slug="podcasts-joe-rogan" />;
}
