import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NYC's Ranked-Choice Voting System Faces Scrutiny After Mayoral Primary - ObjectWire.org",
  description: "In the 2025 Democratic primary, former Governor Andrew Cuomo finished first in initial vote tallies. Yet he ultimately lost the nomination to State",
  alternates: {
    canonical: 'https://www.objectwire.org/nycs-ranked-choice-voting-system-faces-scrutiny',
  },
};

export default function NYCRankedChoiceVotingPage() {
  return <WikiArticle slug="news-newyork-nycs-ranked-choice-voting-system-faces-scrutiny" />;
}
