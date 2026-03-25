import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/news/iran-cyber-attacks-google-threat-intelligence-march-2026';

export const metadata: Metadata = {
  title: 'Google Warns of Iran-Linked Cyber Attacks Targeting Global Infrastructure — March 2, 2026 | ObjectWire',
  description:
    'Google Threat Intelligence Group issued an alert March 2, 2026, warning that Iranian state-affiliated actors launched a coordinated cyber campaign targeting Israel, Gulf states, Europe, and North America, with 150+ hacktivist-claimed incidents logged in 72 hours.',
  keywords: [
    'Google Threat Intelligence Iran cyber attacks 2026',
    'Iranian cyber campaign March 2026',
    'Operation Roaring Lion Operation Epic Fury',
    'Iran hacktivist DDoS 2026',
    'CloudSEK Iran cyber incidents',
    'IRGC cyber units 2026',
    'Iran Israel cyber war 2026',
    'Mandiant Iranian threat actors',
    'Cloudflare DDoS Iran 1.2 Tbps',
    'Microsoft credential stuffing Iran',
    'Google threat intelligence group alert',
    'Iran critical infrastructure cyber attack',
    'Gulf Cooperation Council cyber attack',
    'Iranian state actor SCADA OT',
    'cyber escalation Middle East 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Google Warns of Iran-Linked Cyber Attacks Targeting Global Infrastructure — March 2, 2026",
    description:
      "150+ hacktivist-claimed incidents in 72 hours. DDoS peaks at 1.2 Tbps. Google, Mandiant, Cloudflare, and Microsoft all issued alerts. No confirmed critical OT compromise as of March 2.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Tech',
    tags: [
      'Google', 'Cybersecurity', 'Iran', 'Threat Intelligence',
      'DDoS', 'IRGC', 'Middle East', 'Critical Infrastructure',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Google: Iran-Linked Actors Hit Israel, Gulf States & Western Infrastructure — 150+ Incidents in 72 Hrs",
    description:
      "Google Threat Intelligence Group alert March 2, 2026: Iranian state-aligned hacktivists targeted energy, finance, aviation, and telecoms in coordinated campaign tied to Operation Roaring Lion.",
  },
};

export default function IranCyberAttacksGoogleAlertPage() {
  return <NewsArticleDB slug="google-news-iran-cyber-attacks-google-threat-intelligence-march-2026" />;
}
