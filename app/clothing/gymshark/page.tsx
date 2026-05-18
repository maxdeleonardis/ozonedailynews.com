import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.


const SLUG = '/clothing/gymshark';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=675&fit=crop&auto=format';

export const metadata: Metadata = {
  title: 'Gymshark | Ben Francis, Brand History & Revenue 2026',
  description: 'Gymshark brand profile: how Ben Francis built the $1.45B UK fitness brand in 2012, influencer marketing origins, and £525M revenue across 131 countries.',
  keywords: [
    'Gymshark',
    'Gymshark brand history',
    'Ben Francis Gymshark',
    'Gymshark founder',
    'Gymshark net worth',
    'Gymshark valuation',
    'Gymshark revenue 2023',
    'Gymshark influencer marketing',
    'Gymshark leggings',
    'Gymshark activewear',
    'Gymshark collections',
    'Gymshark UK brand',
    'fitness apparel brand',
    'Gymshark unicorn',
    'General Atlantic Gymshark',
    'Gymshark 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Gymshark | Brand History, Founder Ben Francis & Revenue 2026',
    description: 'How Ben Francis built Gymshark from a £1,000 sewing machine in 2012 to a $1.45B unicorn with £525M revenue and 18M social followers.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Fashion Desk'],
    publishedTime: '2026-03-31T10:00:00Z',
    modifiedTime: '2026-04-28T10:00:00Z',
    section: 'Culture',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Gymshark fitness apparel worn during a gym session' }],
    tags: ['Gymshark', 'Fitness Apparel', 'Ben Francis', 'UK Brand'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gymshark | Founded 2012, Now Worth $1.45B',
    description: 'Ben Francis started Gymshark at 19 with a sewing machine. 12 years later it is worth $1.45B and serves 131 countries.',
    images: [OG_IMAGE],
  },
};

export default function ClothingGymsharkPage() {
  return <ArticlePageDB slug="clothing-gymshark" />;
}
