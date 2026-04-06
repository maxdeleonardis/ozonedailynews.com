import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Resident Evil: Requiem | Upcoming Survival Horror Game",
  description:
    "Everything about Resident Evil: Requiem, the next chapter in Capcoms legendary survival horror franchise. Release date, gameplay details, and latest news.",
  keywords: [
    "Resident Evil Requiem",
    "Resident Evil 9",
    "RE9",
    "Capcom",
    "survival horror",
    "horror game",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/resident-evil-requiem',
  },
};

export default function ResidentEvilRequiemPage() {
  return <WikiArticle slug="video-games-resident-evil-requiem" />;
}
