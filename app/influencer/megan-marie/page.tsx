import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/megan-marie';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const PAGE_URL = ARTICLE_URL;
const OG_IMAGE = '';
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Megan Marie | Age, Net Worth, OnlyFans, Instagram 2026',
  description:
    'Megan Marie McCarthy (meganmariiee) is a US content creator on OnlyFans, Instagram, and Reddit. Full bio: age, net worth, platforms, meganmariiee social handles, and 2026 creator profile.',
  keywords: [
    'Megan Marie',
    'Megan Marie McCarthy',
    'meganmariiee',
    'megmariiee',
    'Megan Marie age',
    'Megan Marie age 2026',
    'Megan Marie net worth',
    'Megan Marie OnlyFans',
    'Megan Marie Instagram',
    'Megan Marie Reddit',
    'meganmariiee OnlyFans',
    'meganmariiee Instagram',
    'Megan Marie biography',
    'Megan Marie 2026',
    'megmariiee OnlyFans',
    'Megan McCarthy creator',
    'meganmarie content creator',
    'US OnlyFans creator',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Megan Marie | Age, Net Worth, OnlyFans & Instagram 2026',
    description:
      'Full profile: Megan Marie McCarthy (meganmariiee), US content creator on OnlyFans, Instagram, and Reddit. Age, net worth, social handles, and 2026 creator summary.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Megan Marie', 'meganmariiee', 'OnlyFans', 'Creator', 'USA'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Megan Marie portrait' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Megan Marie | Age, Net Worth, OnlyFans, meganmariiee 2026',
    description: 'Megan Marie McCarthy (meganmariiee): age, net worth, OnlyFans, Instagram, Reddit, full 2026 creator profile.',
  },
};

export default function InfluencerMeganMariePage() {
  return <CreatorArticleDB slug="influencer-megan-marie" />;
}
