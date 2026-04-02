import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/ari-kytsya';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/ariKytsya 1.png';

export const metadata: Metadata = {
  title: 'Ari Kytsya | Seattle Influencer, Model & Creator Profile',
  description:
    'Ari Kytsya is a Seattle-based model, fashion influencer, and content creator with 3M Instagram followers and 5M TikTok followers. Full profile, career timeline, and public story.',
  keywords: [
    'Ari Kytsya',
    'Ari Kytsya age',
    'Ari Kytsya Instagram',
    'Ari Kytsya TikTok',
    'Ari Kytsya Seattle',
    'Ari Kytsya Yung Gravy',
    'Ari Kytsya influencer',
    'Ari Kytsya model',
    'Ari Kytsya biography',
    'Ari Kytsya creator',
    'OnlyFans influencer Seattle',
    'fashion creator biography',
    'lifestyle influencer profile',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Ari Kytsya | Seattle Influencer, Model & Creator Profile',
    description:
      'Full profile of Ari Kytsya, Seattle-based fashion model and content creator with 3M Instagram and 5M TikTok followers. Career history, Yung Gravy relationship, and creator journey.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Ari Kytsya', 'Influencer', 'Seattle', 'Model', 'TikTok', 'Content Creator'],
    publishedTime: '2026-04-02T12:00:00Z',
    modifiedTime: '2026-04-02T12:00:00Z',
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Ari Kytsya, Seattle-based influencer and model' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ari Kytsya | Seattle Model, 3M Instagram, 5M TikTok',
    description:
      'Full biography of Ari Kytsya, Seattle fashion model and content creator with millions of followers across Instagram and TikTok.',
  },
};

export default function InfluencerAriKytsyaPage() {
  return <CreatorArticleDB slug="influencer-ari-kytsya" />;
}
