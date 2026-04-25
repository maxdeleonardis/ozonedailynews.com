import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/news/ucla-methylscan-blood-test-multi-cancer-detection';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/images/news/ucla-methylscan-blood-test.jpg';

export const metadata: Metadata = {
  title: 'UCLA MethylScan Blood Test | Multi-Cancer Detection Under',
  description: 'UCLA scientists developed MethylScan, a blood test that detects multiple cancers and liver diseases from a single sample for under $20 in sequencing',
  keywords: [
    'MethylScan',
    'UCLA blood test cancer',
    'multi-cancer detection blood test',
    'liquid biopsy low cost',
    'DNA methylation cancer screening',
    'cell-free DNA cancer',
    'MethylScan PNAS 2026',
    'Jasmine Zhou UCLA',
    'liver cancer blood test',
    'early cancer detection blood',
    'cancer screening $20',
    'UCLA pathology methylation',
    'multi-cancer early detection',
    'cfDNA methylation profiling',
    'cancer liquid biopsy 2026',
    'PNAS cancer study April 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'UCLA Develops MethylScan | Multi-Cancer Blood Test Under $20',
    description: 'A new UCLA blood test called MethylScan detects multiple cancers and liver diseases from a single sample at 98% specificity, with sequencing costs under',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-08T18:00:00Z',
    modifiedTime: '2026-04-08T18:00:00Z',
    section: 'Science',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'UCLA MethylScan blood test for multi-cancer detection' }],
    tags: ['UCLA', 'MethylScan', 'Cancer Detection', 'Liquid Biopsy', 'PNAS', 'DNA Methylation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UCLA MethylScan | Blood Test Detects Multiple Cancers for',
    description: 'MethylScan caught 63% of cancers at 98% specificity in a 1,061-patient study. Sequencing costs under $20 per sample.',
    images: [OG_IMAGE],
  },
};

export default function NewsUclaMethylscanBloodTestMultiCancerDetectionPage() {
  return <NewsArticleDB slug="news-ucla-methylscan-blood-test-multi-cancer-detection" />;
}
