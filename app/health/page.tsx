import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

const SLUG = 'health';
const PAGE_URL = `${SITE_CONFIG.url}/health`;

export const metadata: Metadata = {
  title: 'Public Health | PFAS, Air Quality, Water Contamination & Disparities',
  description: 'HoneyNewspaper public health desk: PFAS in drinking water, lead contamination, air quality data, microplastics in blood, and environmental health disparities by community.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Public Health | PFAS, Air Quality, Water Contamination & Disparities',
    description: 'HoneyNewspaper public health desk: PFAS in drinking water, lead contamination, air quality data, and environmental health disparities by community.',
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_CONFIG.publisherName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Public Health | PFAS, Air Quality, Water Contamination & Disparities',
    description: 'HoneyNewspaper public health desk: PFAS in drinking water, lead contamination, air quality data, and environmental health disparities by community.',
  },
};

export default function HealthPage() {
  return <ArticlePageDB slug={SLUG} />;
}
