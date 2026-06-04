import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/social/meta/instagram-drops-encrypted-dms';

export const metadata: Metadata = {
  title: 'Instagram Drops Encrypted DMs | E2EE Removed May 2026',
  description: 'Meta removes end-to-end encryption from Instagram DMs citing low adoption. Security experts point to Take It Down Act compliance, AI training data access, law enforcement pressure.',
  keywords: [
    'Instagram encrypted DMs',
    'Instagram E2EE removed',
    'Instagram encryption 2026',
    'Meta privacy rollback',
    'Take It Down Act',
    'Instagram DM encryption',
    'Meta encryption policy',
    'Instagram privacy changes',
    'encrypted messaging removed',
    'Instagram security update',
    'Meta data access',
    'Instagram AI training data',
    'WhatsApp vs Instagram encryption',
    'Going Dark encryption debate',
    'Instagram DM privacy',
    'Meta compliance legislation',
    'Instagram message scanning',
    'E2EE Instagram removed',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Instagram Drops End-to-End Encryption | Privacy Rollback 2026',
    description: 'Meta removes E2EE from Instagram DMs. Security experts cite Take It Down Act compliance, AI data pipelines, FBI pressure. WhatsApp keeps encryption.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-11T14:00:00-05:00',
    modifiedTime: '2026-05-11T14:00:00-05:00',
    section: 'Tech',
    tags: [
      'Instagram',
      'Meta',
      'End-to-End Encryption',
      'Privacy',
      'E2EE',
      'Take It Down Act',
      'Cybersecurity',
      'Encryption',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Just Killed Encrypted DMs, Here Is Why Security Experts Are Worried',
    description: 'Meta cites low adoption but cybersecurity analysts point to new legislation, FBI pressure, and AI training data access as the real reasons.',
  },
};

export default function InstagramEncryptionRollbackPage() {
  return <NewsArticleDB slug="social-meta-instagram-drops-encrypted-dms" />;
}
