import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/ecb-anthropic-claude-mythos-systemic-risk-inquiry';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1701434001217-16428abc6309?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'ECB Mythos Inquiry | Anthropic Claude Systemic Risk Probe',
  description: 'The European Central Bank has launched a systemic risk inquiry into Anthropic\'s Claude Mythos model, questioning Deutsche Bank, BNP Paribas, and Santander on legacy software vulnerabilities.',
  keywords: [
    'ECB Anthropic Claude Mythos',
    'European Central Bank AI inquiry',
    'Claude Mythos systemic risk',
    'ECB AI regulation 2026',
    'Anthropic Mythos financial risk',
    'Project Glasswing banks',
    'EU AI Act banking',
    'ECB Deutsche Bank AI',
    'Mythos legacy vulnerability',
    'Claude Mythos cyber threat',
    'IMF AI financial stability',
    'Kristalina Georgieva AI warning',
    'ECB supervisory dialogue AI',
    'COBOL mainframe AI exploit',
    'global AI banking regulation 2026',
    'JPMorgan Project Glasswing',
    'Anthropic Claude financial sector',
    'EU AI Office high-risk system',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'ECB Launches Systemic Risk Inquiry Into Anthropic Claude Mythos',
    description: 'The ECB is questioning Deutsche Bank, BNP Paribas, and Santander on their defenses against Claude Mythos, joining the US Treasury and Bank of England in a coordinated global regulatory response.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Finance Desk'],
    publishedTime: '2026-04-17T14:00:00Z',
    modifiedTime: '2026-04-17T14:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'European Central Bank finance regulation building' }],
    tags: ['ECB', 'Anthropic', 'Claude Mythos', 'AI Regulation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECB launches AI systemic risk probe into Claude Mythos',
    description: 'Deutsche Bank, BNP Paribas, Santander under questioning. IMF warns of "catastrophic operational compromise." The Glasswing arms race is global.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsEcbAnthropicClaudeMythosSystemicRiskInquiryPage() {
  return <NewsArticleDB slug="claude-news-ecb-anthropic-claude-mythos-systemic-risk-inquiry" />;
}
