import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/serge-gatari';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Serge Gatari | AI Expert & Digital Marketing Educator',
  description: 'Serge Gatari is the founder of ClientAcquisition.io, an AI automation educator with courses on AI agents and client acquisition strategies. Full profile 2026.',
  keywords: [
    'Serge Gatari',
    'Serge Gatari AI course',
    'ClientAcquisition.io',
    'Serge Gatari net worth',
    'Serge Gatari AI agents',
    'AI automation educator',
    'Serge Gatari 2026',
    'Serge Gatari biography',
    'digital marketing AI',
    'AI client acquisition',
    'Serge Gatari YouTube',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Serge Gatari | ClientAcquisition.io Founder & AI Educator',
    description: 'Serge Gatari built ClientAcquisition.io and teaches AI automation for client acquisition. Full biography, course breakdown, and 2026 profile.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-02-09T10:00:00Z',
    modifiedTime: '2026-02-09T10:00:00Z',
    tags: ['Serge Gatari', 'ClientAcquisition.io', 'AI Automation', 'Digital Marketing', 'Educator'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serge Gatari | AI Automation Expert & ClientAcquisition.io',
    description: 'Founder of ClientAcquisition.io. Teaches AI agent automation and digital marketing. Full profile and course review.',
  },
};

export default function SergeGatariPage() {
  return <WikiArticle slug="creator-serge-gatari" />;
}
