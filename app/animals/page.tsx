import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

const SLUG = 'animals';
const PAGE_URL = `${SITE_CONFIG.url}/animals`;

export const metadata: Metadata = {
  title: 'Animals | Endangered Species, Wildlife Conservation & Animal Welfare',
  description: 'HoneyNewspaper animals desk: endangered species data, pollinator decline, factory farming welfare, marine life conservation, and IUCN Red List updates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Animals | Endangered Species, Wildlife Conservation & Animal Welfare',
    description: 'HoneyNewspaper animals desk: endangered species data, pollinator decline, factory farming welfare, marine life conservation, and IUCN Red List updates.',
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_CONFIG.publisherName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Animals | Endangered Species, Wildlife Conservation & Animal Welfare',
    description: 'HoneyNewspaper animals desk: endangered species data, pollinator decline, factory farming welfare, marine life conservation, and IUCN Red List updates.',
  },
};

export default function AnimalsPage() {
  return <ArticlePageDB slug={SLUG} />;
}
