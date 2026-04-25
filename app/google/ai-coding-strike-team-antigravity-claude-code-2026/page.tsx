import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/ai-coding-strike-team-antigravity-claude-code-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Google AI Coding Strike Team | Antigravity vs Claude Code',
  description: 'Google DeepMind formed an internal strike team to fast-track AI coding models after Claude Code hit $2.5B ARR. Inside the Antigravity push, AlphaEvolve',
  keywords: [
    'Google AI coding strike team',
    'Google Antigravity',
    'Claude Code vs Gemini',
    'Google DeepMind coding agents',
    'AI coding 2026',
    'Anthropic Claude Code revenue',
    'AlphaEvolve Google',
    'SWE-bench 2026',
    'Windsurf acquisition Google',
    'agentic AI coding',
    'Gemini coding model',
    'Google vs Anthropic coding',
    'autonomous code agents 2026',
    'GitHub AI code 2026',
    'Google coding benchmark',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Google Forms AI Coding Strike Team | Antigravity vs Claude',
    description: 'Google DeepMind assembled a strike team to chase Anthropic Claude Code after it surpassed $2.5B ARR. Full breakdown of Antigravity, AlphaEvolve, and the',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-21T12:00:00Z',
    modifiedTime: '2026-04-21T12:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Google AI coding strike team Antigravity 2026' }],
    tags: ['Google', 'Anthropic', 'DeepMind', 'AI Coding'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Forms Strike Team to Chase Claude Code',
    description: 'Claude Code hit $2.5B ARR. Now Google DeepMind is responding with Antigravity and AlphaEvolve.',
    images: [OG_IMAGE],
  },
};

export default function GoogleAiCodingStrikeTeamAntigravityClaudeCode2026Page() {
  return <JackArticleDB slug="google-ai-coding-strike-team-antigravity-claude-code-2026" />;
}
