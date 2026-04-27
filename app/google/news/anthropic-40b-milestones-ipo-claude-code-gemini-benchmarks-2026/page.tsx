import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/news/anthropic-40b-milestones-ipo-claude-code-gemini-benchmarks-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Anthropic $40B Deal | $30B Milestones, IPO Plan, Claude vs Gemini',
  description:
    'Inside the Google-Anthropic $40B compute-for-equity deal: the three milestone categories unlocking $30B, Claude Code vs Gemini SWE-bench benchmarks, and Anthropic\'s planned October 2026 IPO.',
  keywords: [
    'Anthropic $40 billion Google milestone structure',
    'Anthropic IPO October 2026',
    'Anthropic $30 billion performance targets',
    'Claude Mythos model Google integration',
    'Anthropic TPU v8 migration milestones',
    'Claude Code vs Gemini SWE-bench benchmark',
    'Claude Code 82.1% SWE-bench score',
    'Anthropic dual engine Google Amazon infrastructure',
    'Google Cloud Anthropic compute equity deal',
    'Amazon AWS Anthropic $100 billion ten-year deal',
    'Anthropic IPO valuation 2026',
    'Krishna Rao Anthropic CFO scaling',
    'Anthropic enterprise revenue milestones',
    'Gemini Enterprise Agent vs Claude Code',
    'Anthropic Opus 4.6 autonomous coding',
    'Anthropic compute for equity Google deal 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Inside Anthropic\'s $40B Google Deal | $30B Milestones, IPO, Claude vs Gemini',
    description:
      'The $30B in contingent capital is tied to three categories: Mythos deployment, TPU v8 migration, and whale client expansion. Anthropic is targeting an October 2026 IPO backed by $65B in locked compute commitments.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-26T20:00:00Z',
    modifiedTime: '2026-04-26T20:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Business meeting representing the strategic milestone structure inside the Google-Anthropic $40B compute-for-equity deal' }],
    tags: ['Anthropic', 'Google', 'Claude', 'IPO', 'AI Investment', 'SWE-bench'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inside the $40B Google-Anthropic Deal: Three Milestones, One IPO, and a Benchmark War',
    description:
      'Claude Code SWE-bench: 82.1%. Gemini: 80.6%. Anthropic IPO target: October 2026. The $30B in contingent Google capital hinges on Mythos, TPU migration, and 1,000 whale clients.',
    images: [OG_IMAGE],
  },
};

export default function GoogleNewsAnthropic40bMilestonesIpoClaudeCodeGeminiBenchmarks2026Page() {
  return <JackArticleDB slug="google-news-anthropic-40b-milestones-ipo-claude-code-gemini-benchmarks-2026" />;
}
