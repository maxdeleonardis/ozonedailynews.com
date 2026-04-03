import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "ChrisMD (Chippo) - Football YouTube Creator & Sidemen Collaborator | ObjectWire",
  description: "Complete profile of ChrisMD (Chris Dixon), British football YouTube creator known for skills videos, challenges, and regular Sidemen appearances.",
  keywords: ["ChrisMD", "Chris Dixon", "Chippo", "Sidemen", "Football YouTube", "UK YouTuber", "Soccer"],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/chippo-grimes',
  },
};

export default function ChrisMDPage() {
  return <WikiArticle slug="youtube-sidemen-chippo-grimes" />;
}
