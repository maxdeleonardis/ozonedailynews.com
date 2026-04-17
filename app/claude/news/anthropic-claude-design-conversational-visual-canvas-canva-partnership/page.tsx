import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/anthropic-claude-design-conversational-visual-canvas-canva-partnership';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1776090893591-90f5ea3fa523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80';

export const metadata: Metadata = {
  title: 'Claude Design | Anthropic Launches Conversational Visual Canvas',
  description: 'Anthropic launches Claude Design, a conversational visual canvas with Canva integration, led by Mike Krieger and Ben Mann. Available in Research Preview for paid tiers.',
  keywords: [
    'Claude Design',
    'Anthropic Claude Design',
    'Claude Design Canva',
    'Anthropic visual design tool',
    'Claude Design 2026',
    'Mike Krieger Anthropic',
    'Ben Mann Anthropic Labs',
    'conversational design AI',
    'Claude Design vs Figma',
    'Claude Design vs Canva',
    'Anthropic Labs products',
    'AI design tool 2026',
    'Claude Code follow-up',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Claude Design | Anthropic Launches Conversational Visual Canvas',
    description: 'Conversational visual canvas with Canva integration. Led by Krieger and Mann. Exports PDF, PPTX, HTML/React. Research Preview for paid tiers.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Laptop displaying design software interface' }],
    tags: ['Anthropic', 'Claude Design', 'Canva', 'AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Design launched | Conversational visual canvas with Canva integration',
    description: 'Anthropic Labs ships Claude Design. Conversational UI, auto design systems, multi-format export. Wix and Figma valuations drop on the news.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsAnthropicClaudeDesignConversationalVisualCanvasCanvaPartnershipPage() {
  return <JackArticleDB slug="claude-news-anthropic-claude-design-conversational-visual-canvas-canva-partnership" />;
}
