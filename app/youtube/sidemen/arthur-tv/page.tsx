import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "ArthurTV | YouTube Content Creator & Sidemen Collaborator",
  description: "Complete profile of ArthurTV (Arthur Frederick), British YouTube content creator known for collaborations with the Sidemen and his charismatic personality.",
  keywords: ["ArthurTV", "Arthur Frederick", "Sidemen", "YouTube", "UK YouTuber", "Entertainment"],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/arthur-tv',
  },
};

export default function ArthurTVPage() {
  return <WikiArticle slug="youtube-sidemen-arthur-tv" />;
}
