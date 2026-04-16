import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/mozilla-thunderbolt-self-hostable-ai-client';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1652111865960-15f4a46a7688?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Mozilla Thunderbolt | Self-Hostable Open-Source AI Client',
  description: 'MZLA Technologies unveiled Thunderbolt, an open-source AI client for organizations that want to run AI workloads on their own infrastructure without routing data through cloud providers.',
  keywords: [
    'Mozilla Thunderbolt AI client',
    'MZLA Technologies Thunderbolt',
    'self-hostable AI client',
    'open-source AI client 2026',
    'Mozilla Foundation AI',
    'Thunderbird AI client',
    'on-premise AI deployment',
    'private AI infrastructure',
    'Mozilla open-source AI',
    'Thunderbolt MZLA 2026',
    'self-hosted AI workloads',
    'enterprise AI privacy',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Mozilla Unveils Thunderbolt | Self-Hostable Open-Source AI Client',
    description: 'MZLA Technologies, the Mozilla subsidiary behind Thunderbird, launched Thunderbolt for organizations that want AI without sending data to third-party cloud providers.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-17T15:30:00Z',
    modifiedTime: '2026-04-17T15:30:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Open source software developer code interface' }],
    tags: ['Mozilla', 'Thunderbolt', 'Open Source', 'AI Client'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mozilla launches Thunderbolt, a self-hostable AI client',
    description: 'MZLA Technologies wants orgs to run AI on their own servers. No cloud routing. Open-source. Built by the Thunderbird team.',
    images: [OG_IMAGE],
  },
};

export default function TechNewsMozillaThunderboltSelfHostableAiClientPage() {
  return <NewsArticleDB slug="tech-news-mozilla-thunderbolt-self-hostable-ai-client" />;
}
