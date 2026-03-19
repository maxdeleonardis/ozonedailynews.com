import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Drake - Hip-Hop Icon & Most Streamed Artist | ObjectWire",
  description:
    "Complete profile of Drake, the most streamed artist of all time. Discography, awards, streaming records, and latest news from the 6 God.",
  keywords: [
    "Drake",
    "hip-hop",
    "OVO",
    "most streamed artist",
    "Toronto rapper",
    "Gods Plan",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/artists/drake',
  },
};

export default function DrakePage() {
  return <WikiArticle slug="artists-drake" />;
}
