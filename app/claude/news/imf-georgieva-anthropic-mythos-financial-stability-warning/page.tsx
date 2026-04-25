import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/imf-georgieva-anthropic-mythos-financial-stability-warning';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/images/claude/imf-georgieva-mythos-warning.jpg';

export const metadata: Metadata = {
  title: 'IMF Warns Anthropic Mythos Threatens Financial Stability',
  description: 'IMF Managing Director Kristalina Georgieva warned that Anthropic\'s Claude Mythos Preview poses cybersecurity risks to the global financial system,',
  keywords: [
    'IMF Anthropic Mythos',
    'Kristalina Georgieva AI warning',
    'Claude Mythos Preview financial risk',
    'IMF financial stability AI',
    'Anthropic cybersecurity threat',
    'IMF AI guardrails',
    'Georgieva Face the Nation CBS',
    'Claude Mythos cybersecurity',
    'AI financial system risk 2026',
    'IMF AI regulation',
    'Anthropic Mythos model warning',
    'global financial stability AI',
    'IMF cybersecurity AI 2026',
    'Claude Mythos Preview risks',
    'AI threats banking system',
    'Georgieva Anthropic guardrails',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'IMF Chief Warns Anthropic Mythos Model Threatens',
    description: 'IMF Managing Director Georgieva said cybersecurity risks from Anthropic\'s Claude Mythos Preview have been "growing exponentially," calling for stronger',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T14:00:00Z',
    modifiedTime: '2026-04-11T14:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'IMF Managing Director Kristalina Georgieva warns about Anthropic Mythos AI model' }],
    tags: ['IMF', 'Anthropic', 'Claude Mythos', 'Financial Stability', 'Kristalina Georgieva', 'Cybersecurity'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMF Chief Warns Anthropic Mythos Threatens Financial',
    description: 'Georgieva told CBS the risks from AI models like Mythos have been "growing exponentially." Called for guardrails to protect financial system.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsImfGeorgievaAnthropicMythosFinancialStabilityWarningPage() {
  return <NewsArticleDB slug="claude-news-imf-georgieva-anthropic-mythos-financial-stability-warning" />;
}
