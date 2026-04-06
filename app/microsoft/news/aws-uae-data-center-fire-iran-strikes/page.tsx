import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/aws-uae-data-center-fire-iran-strikes';

export const metadata: Metadata = {
  title: 'AWS Temporarily Shuts Down UAE Availability Zone After Objects Strike Facility, Sparking Fire',
  description: 'Amazon Web Services shut down UAE Availability Zone mec1-az2 after objects struck the data center creating sparks and fire on March 1, 2026, amid Iranian',
  keywords: ['AWS UAE data center fire', 'mec1-az2 availability zone shutdown', 'Amazon Web Services UAE', 'Iran strikes data center', 'AWS Middle East region outage', 'cloud infrastructure conflict', 'ME-CENTRAL-1 region', 'AWS Gulf region'],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'AWS Shuts UAE Data Center After Objects Spark Fire Amid Iran Strikes',
    description: 'AWS reported mec1-az2 Availability Zone in the UAE experienced a fire after objects struck the facility on March 1, 2026.',
    type: 'article', url: `https://www.objectwire.org${SLUG}`, siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'], publishedTime: '2026-03-05T10:00:00Z', modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Technology', tags: ['AWS', 'UAE', 'Data Center', 'Iran', 'Cloud Infrastructure'],
  },
  twitter: { card: 'summary_large_image', title: 'AWS Shuts UAE Data Center After Fire Amid Iran Strikes', description: 'Objects struck mec1-az2 creating sparks and fire. Other UAE zones remained operational.' },
};

export default function AWSUAEDataCenterPage() {
  return <NewsArticleDB slug="microsoft-news-aws-uae-data-center-fire-iran-strikes" />;
}
