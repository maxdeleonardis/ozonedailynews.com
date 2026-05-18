import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/apple/news/apple-post-iphone-gurman-6-secret-products-ambient-ai-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Apple Post-iPhone Future | Gurman 6 Secret Products Ambient AI 2026',
  description: 'Bloomberg\'s Mark Gurman reveals Apple\'s 6 secret product categories: AI AirPods with cameras, smart glasses, a wearable pendant, HomePad display, tabletop robot, and a privacy-first security camera.',
  keywords: [
    'Apple post-iPhone future 2026',
    'Mark Gurman Apple secret products',
    'Apple smart glasses AR 2026',
    'Apple AI AirPods cameras',
    'Apple tabletop robot Project J595',
    'Apple HomePad smart display',
    'Apple wearable pendant ambient AI',
    'Apple security camera HomeKit 2026',
    'John Ternus Apple CEO era',
    'Apple ambient AI strategy',
    'Apple Vision Pro replacement glasses',
    'Apple ecosystem 2.0 Gurman',
    'Apple agentic AI robotics',
    'Apple HomePad vs Amazon Echo Show',
    'Apple TBPN podcast Gurman roadmap',
    'Apple beyond iPhone strategy',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Apple\'s Post-iPhone Future | Gurman Reveals 6 Secret Product Categories',
    description: 'AI AirPods with cameras, AR smart glasses, a tabletop robot, and a privacy-first security camera — Gurman\'s Apple roadmap for the John Ternus era.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Wang'],
    publishedTime: '2026-04-23T18:00:00Z',
    modifiedTime: '2026-04-23T18:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Apple device ecosystem representing post-iPhone ambient AI product roadmap 2026' }],
    tags: ['Apple', 'Mark Gurman', 'Ambient AI', 'Smart Glasses'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurman: Apple Has 6 Secret Products Beyond the iPhone',
    description: 'AI AirPods with cameras, smart glasses, a tabletop robot, and a privacy-first home camera. Apple\'s post-iPhone era starts now.',
    images: [OG_IMAGE],
  },
};

export default function AppleNewsApplePostIphoneGurman6SecretProductsAmbientAi2026Page() {
  return <NewsArticleDB slug="apple-news-apple-post-iphone-gurman-6-secret-products-ambient-ai-2026" />;
}
