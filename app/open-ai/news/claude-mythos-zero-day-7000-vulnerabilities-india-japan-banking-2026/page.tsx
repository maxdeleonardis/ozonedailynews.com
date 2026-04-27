import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/claude-mythos-zero-day-7000-vulnerabilities-india-japan-banking-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Claude Mythos Zero-Day | India, Japan Bank Emergency 2026',
  description:
    "Anthropic's Mythos AI found 7,000+ zero-days with less than 1% patched. India and Japan declared banking emergencies on April 23-24, 2026, as Project Glasswing restricts access to 40 vetted partners.",
  keywords: [
    'Claude Mythos zero-day vulnerabilities 2026',
    'Anthropic Mythos cybersecurity threat',
    'India banking emergency AI zero-day',
    'Japan financial sector Mythos AI threat',
    'Nirmala Sitharaman AI cybersecurity summit',
    'Satsuki Katayama Task Force Alpha Japan',
    'Project Glasswing Anthropic 40 partners',
    'Anthropic Red Team Mythos evaluation report',
    'Claude Mythos autonomous exploit kill chain',
    'AI zero-day vulnerability banking sector',
    'CERT-In India AI security directive',
    'Bank of Japan Mythos cybersecurity',
    'Mythos vs Claude Opus 4.6 exploit comparison',
    'AI agentic intrusion pattern detection',
    'UK AISI Mythos step-up evaluation',
    'autonomous AI vulnerability discovery 2026',
    'Anthropic restricted model access program',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Claude Mythos Found 7,000+ Zero-Days. India and Japan Declared Banking Emergencies.",
    description:
      "Anthropic's Red Team confirmed Mythos autonomously discovered and exploited zero-day vulnerabilities across every major OS and browser. Fewer than 1% are patched. India and Japan mobilized their financial sectors within 48 hours.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-26T23:45:00Z',
    modifiedTime: '2026-04-26T23:45:00Z',
    section: 'Tech',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Cybersecurity threat visualization representing the global banking emergency triggered by Anthropic\'s Claude Mythos autonomous zero-day discovery',
      },
    ],
    tags: ['Anthropic', 'Claude Mythos', 'Cybersecurity', 'Zero-Day', 'India', 'Japan', 'AI Safety'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anthropic's Mythos Found 7,000+ Zero-Days. Less Than 1% Patched. India and Japan Declared Emergencies.",
    description:
      'Mythos chains small bugs into autonomous kill chains across every major OS. CTF challenges solved in minutes. 40 vetted partners under Project Glasswing are the only ones who can access it.',
    images: [OG_IMAGE],
  },
};

export default function OpenAiNewsClaudeMythosZeroDay7000VulnerabilitiesIndiaJapanBanking2026Page() {
  return <JackArticleDB slug="open-ai-news-claude-mythos-zero-day-7000-vulnerabilities-india-japan-banking-2026" />;
}
