import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Serge Gatari AI Course Review | ClientAcquisition.io",
  description: "Critical review of Serge Gatari's AI course and ClientAcquisition.io Community. Examining claims about creating AI agent millionaires.",
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/serge-gatari/ai-course-review',
  },
  openGraph: {
    title: "Serge Gatari AI Course Review | ClientAcquisition.io",
    description: "Critical review of Serge Gatari",
    type: 'article',
    url: "https://www.objectwire.org/influencer/serge-gatari/ai-course-review",
    siteName: 'ObjectWire',
    section: "Influencer",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Serge Gatari AI Course Review | ClientAcquisition.io",
    description: "Critical review of Serge Gatari",
  },
};

export default function SergeGatariCourseReviewPage() {
  return <WikiArticle slug="influencer-serge-gatari-ai-course-review" />;
}
