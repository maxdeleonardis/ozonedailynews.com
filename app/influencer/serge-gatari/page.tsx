import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Serge Gatari | AI Expert & Digital Marketing Educator',
  description: 'Profile of Serge Gatari, AI automation expert, digital marketing educator, and founder of ClientAcquisition.io. Known for AI agent training programs and',
  keywords: 'Serge Gatari, AI automation, AI agents, ClientAcquisition.io, digital marketing, AI expert, online courses',
  openGraph: {
    title: 'Serge Gatari | AI Automation Expert',
    description: 'Digital marketing educator specializing in AI automation and client acquisition strategies.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serge Gatari | AI Automation Expert',
    description: 'Digital marketing educator specializing in AI automation and client acquisition strategies.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/serge-gatari',
  },
};

export default function SergeGatariPage() {
  return <WikiArticle slug="influencer-serge-gatari" />;
}
