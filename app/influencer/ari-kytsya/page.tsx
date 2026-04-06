import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/ari-kytsya';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/ariK.jpg';

export const metadata: Metadata = {
  title: 'Ari Kytsya | Age, TikTok, Instagram, Bio 2026',
  description:
    'Ari Kytsya is a Seattle-based model and creator, 24-25 in 2026, with 5M TikTok followers and 3M on Instagram. Full biography, social links, relationship',
  keywords: [
    'Ari Kytsya',
    'Ari Kytsya age',
    'Ari Kytsya age 2026',
    'Ari Kytsya Instagram',
    'Ari Kytsya TikTok',
    'Ari Kytsya YouTube',
    'Ari Kytsya social media',
    'Ari Kytsya Seattle',
    'Ari Kytsya Yung Gravy',
    'Ari Kytsya influencer',
    'Ari Kytsya model',
    'Ari Kytsya biography',
    'Ari Kytsya OnlyFans',
    'Ari Kytsya real name',
    'notburnttoasthehe TikTok',
    'Ari Kytsya 2026',
    'Seattle influencer',
    'fashion creator biography',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Ari Kytsya | Age, TikTok, Instagram & Bio 2026',
    description:
      'Full profile of Ari Kytsya, Seattle-based fashion model and creator, 24-25 in 2026. TikTok: @notburnttoasthehe (5M), Instagram: @arikytsya (3M). Career,',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Ari Kytsya', 'Influencer', 'Seattle', 'Model', 'TikTok', 'Yung Gravy'],
    publishedTime: '2026-04-02T12:00:00Z',
    modifiedTime: '2026-04-02T12:00:00Z',
    images: [{ url: PAGE_URL.replace(SLUG, IMAGE_URL), width: 1200, height: 675, alt: 'Ari Kytsya, Seattle model and creator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ari Kytsya | Seattle Model, 5M TikTok, 3M Instagram',
    description:
      'Ari Kytsya profile: age, social media links, TikTok @notburnttoasthehe, Instagram @arikytsya, YouTube @Arielkytsya, Yung Gravy relationship, and creator',
  },
};

export default function InfluencerAriKytsyaPage() {
  return <CreatorArticleDB slug="influencer-ari-kytsya" />;
}
