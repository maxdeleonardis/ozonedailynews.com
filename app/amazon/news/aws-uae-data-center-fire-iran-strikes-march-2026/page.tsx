import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/amazon/news/aws-uae-data-center-fire-iran-strikes-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/amazon/aws-uae-data-center-fire-iran-march-2026.jpg';

export const metadata: Metadata = {
  title:
    'AWS Temporarily Shuts Down UAE Availability Zone mec1-az2 After Objects Strike Facility, Sparking Fire, March 1, 2026',
  description:
    'Amazon Web Services shut down UAE Availability Zone mec1-az2 on March 1, 2026, after objects struck the data center, creating sparks and a fire. The',
  keywords: [
    'AWS UAE data center fire March 2026',
    'mec1-az2 outage AWS Middle East',
    'Amazon Web Services UAE availability zone shutdown',
    'Iran missile strikes Gulf region March 2026',
    'AWS ME-CENTRAL-1 outage',
    'AWS mec1-az2 fire power shutdown',
    'Amazon data center UAE emergency March 2026',
    'Iranian strikes UAE infrastructure 2026',
    'cloud data center geopolitical risk',
    'AWS UAE region recovery',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'AWS Shuts Down UAE Data Center Zone After Objects Spark Fire During Iranian Strikes, March 1, 2026',
    description:
      'Objects struck the AWS mec1-az2 facility in the UAE on March 1, 2026, triggering sparks and a fire. Emergency power shutdown followed as Iranian missiles',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T14:00:00Z',
    modifiedTime: '2026-03-01T18:00:00Z',
    section: 'Technology',
    tags: [
      'AWS',
      'Amazon Web Services',
      'UAE',
      'Data Center',
      'mec1-az2',
      'ME-CENTRAL-1',
      'Iran',
      'Gulf Region',
      'Cloud Infrastructure',
      'Outage',
      'Geopolitical Risk',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'AWS UAE Data Center Struck During Iranian Missile Barrage, Zone mec1-az2 Offline',
    description:
      'Objects struck the AWS mec1-az2 facility in the UAE on March 1, 2026, starting a fire and forcing an emergency power shutdown. Other UAE zones remained',
    images: [IMAGE_URL],
  },
};

export default function AWSUAEDataCenterFirePage() {
  return <JackArticleDB slug="amazon-news-aws-uae-data-center-fire-iran-strikes-march-2026" />;
}
