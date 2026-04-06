import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/tech/minimax-maxclaw-openclaw-cloud-agent-clawbot-saas-february-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/tech/minimax-maxclaw-openclaw-cloud-agent-clawbot-2026.jpg';

export const metadata: Metadata = {
  title:
    'MiniMax Launches MaxClaw Cloud Agent on February 25, Clawbot AI SaaS Follows February 28',
  description:
    'MiniMax released MaxClaw on February 25, 2026, a fully managed cloud deployment of the open-source OpenClaw agent framework running on the MiniMax-M2.5',
  keywords: [
    'MiniMax MaxClaw OpenClaw cloud agent February 2026',
    'MaxClaw MiniMax-M2.5 managed cloud deployment',
    'Clawbot AI SaaS OpenClaw February 28 2026',
    'OpenClaw 200000 GitHub stars AI agent framework',
    'MiniMax-M2.5 229 billion parameter MoE model',
    'OpenClaw WhatsApp Telegram Slack Discord agent',
    'MaxClaw one-click agent deployment 10 seconds',
    'OpenClaw open-source personal AI agent framework MIT',
    'MiniMax Agent platform maxclaw.ai',
    'OpenClaw 100000 GitHub stars launch January 2026',
    'MiniMax M2.5 SWE-Bench 80.2 percent BrowseComp',
    'AI agent cloud hosting SaaS 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'MiniMax MaxClaw and Clawbot AI Both Launch Cloud OpenClaw Agents in Three Days',
    description:
      'MiniMax dropped MaxClaw on February 25, 2026, one-click cloud deployment for OpenClaw agents powered by a 229B MoE model. Clawbot AI followed with its own',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T16:00:00Z',
    modifiedTime: '2026-03-01T16:00:00Z',
    section: 'Technology',
    tags: [
      'MiniMax',
      'MaxClaw',
      'OpenClaw',
      'Clawbot AI',
      'AI Agents',
      'Cloud AI',
      'SaaS',
      'MiniMax-M2.5',
      'Open Source',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'MiniMax MaxClaw Launches Feb 25, Clawbot AI SaaS Follows Feb 28, Both Cloud OpenClaw Agents',
    description:
      'Two cloud wrappers for OpenClaw in three days. MiniMax MaxClaw (Feb 25) uses a 229B MoE model. Clawbot AI SaaS (Feb 28) adds automatic model selection.',
    images: [IMAGE_URL],
  },
};

export default function MiniMaxMaxClawOpenClawPage() {
  return <JackArticleDB slug="tech-minimax-maxclaw-openclaw-cloud-agent-clawbot-saas-february-2026" />;
}
