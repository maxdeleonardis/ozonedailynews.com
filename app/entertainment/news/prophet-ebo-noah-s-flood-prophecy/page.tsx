import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Prophet Ebo Noah's Flood Prophecy | ARRESTED - ObjectWire.org",
  description: "Ebo Noah first shared his claims in videos posted starting in August 2025, stating God revealed relentless rain would begin on Christmas Day.",
  alternates: {
    canonical: 'https://www.objectwire.org/prophet-ebo-noah-s-flood-prophecy',
  },
};

export default function ProphetEboNoahPage() {
  return <WikiArticle slug="entertainment-news-prophet-ebo-noah-s-flood-prophecy" />;
}
