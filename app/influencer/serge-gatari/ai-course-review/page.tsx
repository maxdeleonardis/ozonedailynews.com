import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/serge-gatari/ai-course-review';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Serge Gatari AI Course Review | ClientAcquisition.io',
  description: "Critical review of Serge Gatari's AI course and ClientAcquisition.io Community. Examining the AI agent millionaire claims, pricing, and real student results.",
  keywords: [
    'Serge Gatari AI course review',
    'ClientAcquisition.io review',
    'Serge Gatari course',
    'AI agent millionaire review',
    'ClientAcquisition.io community',
    'Serge Gatari scam',
    'Serge Gatari legit',
    'AI automation course review',
    'Serge Gatari course cost',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Serge Gatari AI Course Review | ClientAcquisition.io',
    description: "Critical review of Serge Gatari's AI agent course and ClientAcquisition.io Community. Pricing, claims, student results, and our verdict.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-02-09T10:00:00Z',
    modifiedTime: '2026-02-09T10:00:00Z',
    tags: ['Serge Gatari', 'ClientAcquisition.io', 'AI Course', 'Course Review', 'AI Agents'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serge Gatari AI Course Review | ClientAcquisition.io',
    description: "Critical review of Serge Gatari's ClientAcquisition.io. AI agent millionaire claims examined.",
  },
};

export default function SergeGatariCourseReviewPage() {
  return <WikiArticle slug="creator-serge-gatari-ai-course-review" />;
}
