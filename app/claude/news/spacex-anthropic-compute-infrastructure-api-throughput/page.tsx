import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content served from on-prem static JSON.
// Run 'npm run wiki:publish -- --file <path>' to update the on-prem static JSON.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/spacex-anthropic-compute-infrastructure-api-throughput';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'SpaceX Anthropic Partnership | Claude API TPM Limits Up',
  description: 'Anthropic-SpaceX deal boosts Claude Code rate limits and Tier 4-5 API token quotas. Starlink LEO cuts latency for remote teams, May 2026.',
  keywords: [
    'SpaceX Anthropic partnership',
    'Claude API rate limits 2026',
    'Claude Code usage limits',
    'Anthropic compute infrastructure',
    'Starlink AI inference',
    'Claude API TPM increase',
    'Anthropic SpaceX deal',
    'Claude Tier 4 Tier 5 API',
    'Claude Code enterprise scaling',
    'Anthropic higher limits SpaceX',
    'LEO satellite AI compute',
    'Claude API throughput 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'SpaceX Anthropic Partnership | Claude API TPM Limits Up',
    description: 'Anthropic-SpaceX infrastructure deal raises Claude Code rate limits and Tier 4-5 API token quotas. Starlink LEO cuts latency for remote engineering teams.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-07T14:00:00Z',
    modifiedTime: '2026-05-07T14:00:00Z',
    section: 'Tech',
    tags: ['Anthropic', 'SpaceX', 'Claude API', 'AI Infrastructure'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpaceX + Anthropic | Claude API Gets a 40% TPM Boost',
    description: 'Starlink LEO powers Anthropic compute expansion. Tier 4-5 devs and Claude Code users get immediate quota lifts, effective May 7, 2026.',
  },
};

export default function ClaudeNewsSpacexAnthropicComputeInfrastructureApiThroughputPage() {
  return <JackArticleDB slug="claude-news-spacex-anthropic-compute-infrastructure-api-throughput" />;
}
