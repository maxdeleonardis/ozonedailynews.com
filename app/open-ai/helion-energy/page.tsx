import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/helion-energy';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Helion Energy | Sam Altman $1.65B Stake, Polaris Milestone 2026',
  description: 'Helion Energy is Sam Altman\'s fusion startup valued at $5.4B. The Musk v. Altman trial revealed Altman holds a $1.65B stake while OpenAI signed a 5GW power deal with Helion, triggering federal inquiries.',
  keywords: [
    'Helion Energy',
    'Helion Energy Sam Altman',
    'Helion Energy valuation 2026',
    'Sam Altman fusion energy stake',
    'Helion Energy Polaris milestone',
    'Helion Energy 150 million degrees',
    'Musk v Altman Helion conflict',
    'OpenAI Helion power purchase agreement',
    'Helion Energy FRC fusion',
    'Helion vs traditional nuclear',
    'Helion Energy Microsoft agreement',
    'Helion Energy 2028 grid',
    'Altman conflict of interest OpenAI',
    'Helion Energy direct energy conversion',
    'Helion Energy investor',
    'fusion energy startup 2026',
    'Sam Altman 1.65 billion Helion',
    'Helion Energy Everett Washington',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Helion Energy | Sam Altman\'s $1.65B Fusion Conflict & the Polaris Milestone',
    description: 'Full profile of Helion Energy: FRC fusion technology, the 150M degree Polaris milestone, and the Sam Altman conflict revealed during the Musk v. Altman trial.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-13T12:00:00Z',
    modifiedTime: '2026-05-13T12:00:00Z',
    section: 'Technology',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Helion Energy fusion plasma reactor visualization 2026' }],
    tags: ['Helion Energy', 'Sam Altman', 'Nuclear Fusion', 'OpenAI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helion Energy | Altman\'s $1.65B Fusion Stake and the Polaris Milestone',
    description: 'Sam Altman holds a $1.65B stake in Helion. The Musk trial exposed the OpenAI conflict. The Polaris prototype hit 150M degrees in Feb 2026.',
    images: [OG_IMAGE],
  },
};

export default function HelionEnergyPage() {
  return <ArticlePageDB slug="open-ai-helion-energy" />;
}
