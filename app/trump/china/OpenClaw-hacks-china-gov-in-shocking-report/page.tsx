import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "CYBER ALERT | China Warns Agencies to Limit OpenClaw AI",
  description:
    "China's Ministry of Industry and Information Technology and the National Administration of State Secrets Protection issued an urgent directive on March 3,",
  keywords: [
    'OpenClaw China security warning',
    'China bans OpenClaw AI',
    'OpenClaw security vulnerabilities',
    'China MIIT OpenClaw directive',
    'OpenClaw AI agent hacking risk',
    'China government AI restrictions 2026',
    'OpenClaw GitHub 180000 stars',
    'China state secrets AI ban',
    'OpenClaw Clawdbot Moltbot',
    'autonomous AI agent security risk',
    'China cybersecurity directive 2026',
    'OpenClaw shell command exploit',
    'AI agent security flaw China',
    'China open source AI warning',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/trump/china/OpenClaw-hacks-china-gov-in-shocking-report',
  },
  openGraph: {
    title: "CYBER ALERT: China Orders Agencies to Limit OpenClaw AI Over 'High-Risk' Security Flaws",
    description:
      "Beijing has issued an urgent directive warning government agencies and SOEs to restrict OpenClaw, the viral open-source AI agent with 180K GitHub stars.",
    type: 'article',
    url: 'https://www.objectwire.org/trump/china/OpenClaw-hacks-china-gov-in-shocking-report',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-03-07T20:00:00Z',
    modifiedTime: '2026-03-07T20:00:00Z',
    section: 'Technology',
    tags: [
      'OpenClaw', 'China', 'Cybersecurity', 'AI Safety',
      'MIIT', 'AI Agent', 'Government Security', 'Open Source AI',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "China Orders Agencies to Restrict OpenClaw AI | 'Insecure by Default,' Officials Warn",
    description:
      "Beijing's MIIT issued an urgent directive restricting the 180K-star open-source AI agent OpenClaw across government and SOEs, citing critical",
  },
};

export default function OpenClawChinaPage() {
  return <WikiArticle slug="trump-china-OpenClaw-hacks-china-gov-in-shocking-report" />;
}
