export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/earth';
const PAGE_URL = `https://www.ozonedailynews.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Earth | Climate, Oceans, and Coral Systems',
  description: 'Earth coverage focused on coral reefs, ocean health, climate resilience, and the ecosystems that sustain life on our planet.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Earth | Climate, Oceans, and Coral Systems',
    description: 'Earth coverage focused on coral reefs, ocean health, climate resilience, and the ecosystems that sustain life on our planet.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    section: 'Earth',
    tags: ['Earth', 'Coral Reefs', 'Ocean Health'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earth | Climate, Oceans, and Coral Systems',
    description: 'Earth coverage focused on coral reefs, ocean health, climate resilience, and the ecosystems that sustain life on our planet.',
  },
};

export default function EarthPage() {
  return <ArticlePageDB slug="earth" />;
}
