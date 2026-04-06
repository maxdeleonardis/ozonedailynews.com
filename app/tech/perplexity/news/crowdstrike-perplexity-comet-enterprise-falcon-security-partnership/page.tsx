import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/perplexity/news/crowdstrike-perplexity-comet-enterprise-falcon-security-partnership';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'CrowdStrike & Perplexity Unite to Shield the "Agentic" Workforce',
  description:
    'CrowdStrike and Perplexity announced a major strategic partnership at Ask 2026, embedding the Falcon security platform directly into Comet Enterprise,',
  keywords: [
    'CrowdStrike Perplexity partnership 2026',
    'Comet Enterprise browser security',
    'CrowdStrike Falcon Comet browser integration',
    'Seraphic Security CrowdStrike acquisition',
    'agentic AI security enterprise',
    'browser security JavaScript engine randomization',
    'shadow AI enterprise prevention',
    'Ask 2026 CrowdStrike announcement',
    'man-in-the-browser attack prevention',
    'Perplexity Comet Enterprise Falcon',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'CrowdStrike & Perplexity Unite to Shield the "Agentic" Workforce',
    description:
      'Falcon security is now embedded inside Comet Enterprise. The partnership marks the first major deployment of CrowdStrike\'s $420M Seraphic Security',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['CrowdStrike', 'Perplexity', 'Comet', 'Cybersecurity', 'Agentic AI', 'Enterprise Security'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrowdStrike Brings Falcon Inside Perplexity\'s AI Browser',
    description:
      'The partnership embeds real-time threat detection directly into Comet Enterprise, the first deployment of CrowdStrike\'s $420M Seraphic acquisition.',
  },
};

export default function CrowdStrikePerplexityCometPage() {
  return <NewsArticleDB slug="tech-perplexity-news-crowdstrike-perplexity-comet-enterprise-falcon-security-partnership" />;
}
