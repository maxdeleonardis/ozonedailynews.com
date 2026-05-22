import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/texas/news/paxton-sues-meta-whatsapp-encryption-deception-dtpa-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?title=${encodeURIComponent('Texas AG Sues Meta Over WhatsApp Encryption Claims')}&category=Politics&desc=${encodeURIComponent('Ken Paxton alleges Meta can bypass end-to-end encryption via internal task system, contradicting WhatsApp\'s core privacy promise')}&author=${encodeURIComponent('OzoneNews Editorial Team')}&date=${encodeURIComponent('May 21, 2026')}&breaking=true`;

export const metadata: Metadata = {
  title: 'Texas AG Sues Meta Over WhatsApp Encryption | DTPA 2026',
  description:
    'Texas AG Ken Paxton sued Meta and WhatsApp on May 21, 2026 under the DTPA, alleging internal systems bypass end-to-end encryption. Up to $10,000 per violation.',
  keywords: [
    'Texas AG sues Meta WhatsApp',
    'Ken Paxton WhatsApp lawsuit',
    'WhatsApp encryption lawsuit Texas',
    'Texas DTPA Meta 2026',
    'Meta WhatsApp encryption deception',
    'WhatsApp end-to-end encryption false',
    'Paxton big tech lawsuit',
    'Harrison County Meta lawsuit',
    'WhatsApp task system Meta access',
    'Commerce Department WhatsApp memo',
    'Texas biometric data Meta',
    'Meta privacy lawsuit 2026',
    'Ken Paxton Meta 2026',
    'WhatsApp privacy Texas',
    'Meta DTPA penalties',
    'Texas attorney general Meta encryption',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Texas AG Sues Meta Over WhatsApp Encryption Claims | DTPA Lawsuit May 2026',
    description:
      'Ken Paxton filed suit in Harrison County alleging Meta personnel can bypass WhatsApp end-to-end encryption. DTPA fines could reach $10,000 per affected account.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-05-21T14:00:00-05:00',
    modifiedTime: '2026-05-21T14:00:00-05:00',
    section: 'Politics',
    tags: ['Ken Paxton', 'Meta', 'WhatsApp', 'Texas DTPA', 'Data Privacy', 'Encryption'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Texas AG Ken Paxton sues Meta over WhatsApp encryption | DTPA 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas AG Sues Meta Over WhatsApp Encryption | Up to $10K Per Violation',
    description: 'Paxton alleges internal Meta task system bypasses E2E encryption. Filed under DTPA in Harrison County state court, May 21, 2026.',
    images: [OG_IMAGE],
  },
};

export default function PaxtonSuesMetaWhatsAppPage() {
  return <NewsArticleDB slug="texas-news-paxton-sues-meta-whatsapp-encryption-deception-dtpa-2026" />;
}
