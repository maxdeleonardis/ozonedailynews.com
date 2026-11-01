import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

const SLUG = 'environment';
const PAGE_URL = `${SITE_CONFIG.url}/environment`;

export const metadata: Metadata = {
  title: 'Environment | Pollinators, Oceans, Forests & Wildlife',
  description: 'HoneyNewspaper environment coverage: bee colony collapse, PFAS contamination, coral bleaching, Amazon deforestation, and endangered species. Sourced from primary data.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Environment | Pollinators, Oceans, Forests & Wildlife',
    description: 'HoneyNewspaper environment coverage: bee colony collapse, PFAS contamination, coral bleaching, Amazon deforestation, and endangered species.',
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_CONFIG.publisherName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Environment | Pollinators, Oceans, Forests & Wildlife',
    description: 'HoneyNewspaper environment coverage: bee colony collapse, PFAS contamination, coral bleaching, Amazon deforestation, and endangered species.',
  },
};

export default function EnvironmentPage() {
  return <ArticlePageDB slug={SLUG} />;
}
