import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Serge Gatari AI Course Review | ClientAcquisition.io Community | ObjectWire.org",
  description: "Critical review of Serge Gatari's AI course and ClientAcquisition.io Community. Examining claims about creating AI agent millionaires.",
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/serge-gatari/ai-course-review',
  },
};

export default function SergeGatariCourseReviewPage() {
  return <WikiArticle slug="influencer-serge-gatari-ai-course-review" />;
}
