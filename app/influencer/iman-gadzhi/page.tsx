import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/iman-gadzhi';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Iman Gadzhi | Digital Marketing Entrepreneur & Educator',
  description: 'Iman Gadzhi, Russian-British entrepreneur and founder of IAG Media and Educate. Biography, SMMA career, net worth, and 2026 updates from OzoneNews.',
  keywords: [
    'Iman Gadzhi',
    'Iman Gadzhi SMMA',
    'IAG Media',
    'Iman Gadzhi Educate',
    'Iman Gadzhi net worth',
    'Iman Gadzhi age',
    'Iman Gadzhi 2026',
    'digital marketing entrepreneur',
    'social media marketing agency',
    'Iman Gadzhi biography',
    'Iman Gadzhi YouTube',
    'Iman Gadzhi courses',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Iman Gadzhi | IAG Media Founder & SMMA Entrepreneur',
    description: 'Russian-British entrepreneur who built IAG Media and Educate from a teenage dropout story. Full biography, net worth, SMMA career, and 2026 updates.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-02-09T10:00:00Z',
    modifiedTime: '2026-02-09T10:00:00Z',
    tags: ['Iman Gadzhi', 'IAG Media', 'SMMA', 'Entrepreneur', 'Digital Marketing'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iman Gadzhi | IAG Media Founder, SMMA & Net Worth 2026',
    description: 'Russian-British entrepreneur, IAG Media and Educate founder. Built a digital marketing empire from a teenage dropout story.',
  },
};

export default function ImanGadzhiPage() {
  return <WikiArticle slug="creator-iman-gadzhi" />;
}
