import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

const SLUG = 'ethics';
const PAGE_URL = `${SITE_CONFIG.url}/ethics`;

export const metadata: Metadata = {
  title: 'Ethics and Accountability | Greenwashing, Supply Chains & Corporate Responsibility',
  description: 'HoneyNewspaper ethics desk: greenwashing investigations, supply chain accountability, carbon offset fraud, fast fashion sourcing, and corporate responsibility reporting.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Ethics and Accountability | Greenwashing, Supply Chains & Corporate Responsibility',
    description: 'HoneyNewspaper ethics desk: greenwashing investigations, supply chain accountability, carbon offset fraud, and corporate responsibility reporting.',
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_CONFIG.publisherName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethics and Accountability | Greenwashing, Supply Chains & Corporate Responsibility',
    description: 'HoneyNewspaper ethics desk: greenwashing investigations, supply chain accountability, carbon offset fraud, and corporate responsibility reporting.',
  },
};

export default function EthicsPage() {
  return <ArticlePageDB slug={SLUG} />;
}
