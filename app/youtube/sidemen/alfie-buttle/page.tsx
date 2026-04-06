import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "AB (Alfie Buttle) | Fitness YouTuber & Sidemen Collaborator",
  description: "Complete profile of AB (Alfie Buttle), British fitness content creator known for gym transformations, Young LA brand partnership, and appearances with the",
  keywords: ["AB", "Alfie Buttle", "Sidemen", "YouTube", "Fitness", "Young LA", "Gym Content", "UK Fitness"],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/alfie-buttle',
  },
};

export default function AlfieButtlePage() {
  return <WikiArticle slug="youtube-sidemen-alfie-buttle" />;
}
