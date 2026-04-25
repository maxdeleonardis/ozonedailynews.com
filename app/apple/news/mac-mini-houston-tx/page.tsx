import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Apple to Manufacture Mac Mini in Houston, TX at Foxconn',
  description:
    'Apple will begin assembling the Mac Mini at a Foxconn facility in Houston, Texas in the second half of 2026, the first time the compact desktop has been',
  keywords: [
    'Apple Mac Mini Houston Texas',
    'Mac Mini US manufacturing',
    'Apple Foxconn Houston',
    'Mac Mini assembled in USA',
    'Apple domestic manufacturing 2026',
    'Foxconn Houston facility',
    'Apple supply chain USA',
    'Mac Mini production Texas',
    'Apple Mac Pro Austin Texas',
    'Apple US jobs manufacturing',
    'Apple tariff strategy',
    'Wall Street Journal Apple Mac Mini',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/apple/news/mac-mini-houston-tx',
  },
  openGraph: {
    type: 'article',
    title: 'Apple to Begin Manufacturing Mac Mini in Houston, TX at',
    description:
      'Apple plans to assemble the Mac Mini at a Foxconn-operated facility in Houston, Texas, in H2 2026, making it only the second Mac desktop line to be built',
    publishedTime: '2026-02-23T12:00:00Z',
    modifiedTime: '2026-02-23T12:00:00Z',
    url: 'https://www.objectwire.org/apple/news/mac-mini-houston-tx',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    section: 'Technology',
    tags: ['Apple', 'Mac Mini', 'Houston', 'Foxconn', 'US Manufacturing', 'Supply Chain'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple to Make Mac Mini in Houston at Foxconn Plant | WSJ',
    description:
      'Apple will begin Mac Mini assembly in Houston, Texas in H2 2026, its first US-made Mac Mini. Currently only the Mac Pro is assembled domestically.',
  },
};

export default function MacMiniHoustonPage() {
  return <WikiArticle slug="apple-news-mac-mini-houston-tx" />;
}
