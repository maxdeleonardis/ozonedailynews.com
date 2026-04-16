import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/anthropic-government-id-verification-claude';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1765121689322-6befc57dc8db?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Anthropic Requires Government ID for Claude Users',
  description:
    'Anthropic now requires government-issued photo ID via Persona for some Claude features. Users report verification prompts when subscribing to paid tiers.',
  keywords: [
    'Anthropic government ID',
    'Claude ID verification',
    'Anthropic Persona verification',
    'Claude identity check',
    'Anthropic KYC',
    'Claude paid tier ID',
    'Anthropic photo ID requirement',
    'Claude verification selfie',
    'Anthropic data privacy',
    'Anthropic AI safety compliance',
    'Claude Pro verification',
    'Persona identity verification',
    'Anthropic user data',
    'Claude 2026 policy change',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Anthropic Requires Government ID for Some Claude Users',
    description:
      'Anthropic mandates government photo ID through Persona for certain Claude features. Policy draws criticism over data security and privacy.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire News Desk'],
    publishedTime: '2026-04-16T18:00:00Z',
    modifiedTime: '2026-04-16T18:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Digital privacy and identity verification concept' }],
    tags: ['Anthropic', 'Claude', 'Identity Verification', 'Persona', 'AI Privacy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic Now Requires Government ID for Some Claude Users',
    description:
      'Photo ID and live selfie required via Persona. Users report prompts when subscribing to Claude paid tiers.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsAnthropicGovernmentIdVerificationClaudePage() {
  return <NewsArticleDB slug="claude-news-anthropic-government-id-verification-claude" />;
}
