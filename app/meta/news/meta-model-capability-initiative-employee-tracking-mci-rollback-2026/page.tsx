import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/meta/news/meta-model-capability-initiative-employee-tracking-mci-rollback-2026';
const ARTICLE_URL = `https://www.OzoneNews.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Meta MCI | Employee Tracking Revolt, GDPR Risk & Rollback 2026',
  description: 'Meta\'s Model Capability Initiative captured every mouse click, keystroke, and screenshot from employees to train AI agents. Workers revolted. GDPR exposure hit. Meta is now rolling back. Full investigation.',
  keywords: [
    'Meta Model Capability Initiative',
    'Meta employee tracking software',
    'Meta MCI rollback 2026',
    'Meta employee surveillance AI',
    'Meta GDPR violation 2026',
    'Meta Stephane Kasriel memo',
    'Meta ClawPilot employee data',
    'Meta AI training employee data',
    'Meta workforce revolt tracking',
    'Meta autonomous AI agents training',
    'Meta employee data extraction factory',
    'Meta 30 minute blindfold button',
    'Meta employee privacy 2026',
    'Meta Zuckerberg AI surveillance',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Meta MCI | Employees Revolted Against Keystroke Surveillance, GDPR Threat Forced Rollback',
    description: 'Meta\'s secret tracking software logged every click, URL, and clipboard paste across 200 apps to train autonomous AI. Workers called it an "Employee Data Extraction Factory." GDPR exposure. Rollback now underway.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['William Rodriguez'],
    publishedTime: '2026-06-03T10:00:00-05:00',
    modifiedTime: '2026-06-03T10:00:00-05:00',
    section: 'Tech',
    tags: ['Meta', 'Employee Surveillance', 'AI Training', 'GDPR', 'Workplace Privacy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta\'s Keystroke Surveillance Tool | Employees Revolt, GDPR Threat, Partial Rollback',
    description: 'Mouse clicks, clipboard contents, device sleep cycles across 200 apps, all fed into Meta\'s AI. Workers fought back. The EU noticed. Full investigation.',
  },
};

export default function MetaMCIPage() {
  return <JackArticleDB slug="meta-news-meta-model-capability-initiative-employee-tracking-mci-rollback-2026" />;
}
