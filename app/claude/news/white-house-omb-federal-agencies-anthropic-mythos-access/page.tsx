import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/white-house-omb-federal-agencies-anthropic-mythos-access';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1658760523900-a05343c7eb38?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'White House Clears Federal Agencies for Anthropic Mythos AI',
  description: 'The White House OMB is establishing security protocols for federal agencies to use Claude Mythos Preview. Federal CIO Gregory Barbaccia informed Cabinet departments via memo reviewed by Bloomberg.',
  keywords: [
    'White House Anthropic Mythos federal agencies',
    'OMB Claude Mythos security protocols',
    'Gregory Barbaccia federal CIO Mythos',
    'federal agencies Claude Mythos 2026',
    'White House AI policy Anthropic',
    'OMB AI security protocols',
    'Mythos federal government access',
    'Trump administration Anthropic AI',
    'Claude Mythos Preview federal',
    'White House AI cybersecurity 2026',
    'federal CIO AI deployment',
    'Anthropic government AI contract',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'White House OMB Clears Federal Agencies to Use Claude Mythos Preview',
    description: 'Federal CIO Gregory Barbaccia informed Cabinet departments of OMB security protocols enabling Mythos access, even as officials weigh the model\'s cybersecurity risks and a Trump-Anthropic legal clash continues.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-17T16:00:00Z',
    modifiedTime: '2026-04-17T16:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'White House Washington DC government' }],
    tags: ['White House', 'Anthropic', 'Claude Mythos', 'Federal Agencies'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White House clears federal agencies to use Claude Mythos',
    description: 'OMB establishing security protocols. Federal CIO Barbaccia briefed Cabinet. Happens despite ongoing Trump-Anthropic legal dispute.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsWhiteHouseOmbFederalAgenciesAnthropicMythosAccessPage() {
  return <NewsArticleDB slug="claude-news-white-house-omb-federal-agencies-anthropic-mythos-access" />;
}
