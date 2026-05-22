import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/trump/iran-hormuz-safe-crypto-maritime-insurance-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = `https://www.objectwire.org/api/og?title=Iran+Hormuz+Safe+%7C+Sovereign+Crypto+Insurance+Weaponizes+Persian+Gulf&category=Politics&author=Jack+Sterling&date=May+17+2026&bg=${encodeURIComponent('https://images.unsplash.com/photo-1598408745613-178751e2ccde?w=1200&h=675&fit=crop')}`;

export const metadata: Metadata = {
  title: 'Iran Hormuz Safe | Bitcoin Insurance Weaponizes Persian Gulf Shipping',
  description:
    'Iran activated the Hormuz Safe Bitcoin maritime insurance platform on May 16, 2026, offering sanctions-bypass war risk coverage for vessels transiting the Strait of Hormuz. OFAC issued immediate secondary sanctions warnings.',
  keywords: [
    'Hormuz Safe',
    'Iran crypto insurance',
    'Strait of Hormuz 2026',
    'Persian Gulf Strait Authority',
    'Iran Bitcoin sanctions bypass',
    'OFAC secondary sanctions',
    'Iran maritime insurance',
    'IRGC shipping toll',
    'Hormuz blockade 2026',
    'Iran oil sanctions cryptocurrency',
    'war risk premium 2026',
    'Trump Iran sanctions',
    'Bitcoin sanctions evasion Iran',
    'Persian Gulf shipping lanes 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Iran Hormuz Safe | Bitcoin Insurance Weaponizes Persian Gulf Shipping',
    description:
      'Iran\'s sovereign crypto insurance platform lets vessels bypass SWIFT and Western sanctions to transit the Strait of Hormuz. $10B annual revenue projected. OFAC warns of immediate secondary sanctions.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-17T09:00:00Z',
    modifiedTime: '2026-05-17T09:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Oil tanker at sea, Strait of Hormuz shipping lanes 2026' }],
    tags: ['Iran', 'Strait of Hormuz', 'Bitcoin', 'OFAC', 'IRGC', 'Persian Gulf'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iran Launches Bitcoin Insurance Scheme for Hormuz Passage',
    description: 'Hormuz Safe: sovereign crypto war-risk coverage, $10B revenue target, OFAC secondary sanctions warning. May 16, 2026.',
    images: [OG_IMAGE],
  },
};

export default function IranHormuzSafePage() {
  return <JackArticleDB slug="trump-iran-hormuz-safe-crypto-maritime-insurance-2026" />;
}
