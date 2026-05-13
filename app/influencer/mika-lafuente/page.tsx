import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/mika-lafuente';
const ARTICLE_URL = `https://www.owire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Mika Lafuente | Age, Height, Instagram, Bryce Hall 2026',
  description:
    'Mika Lafuente is an Argentine-American model and creator born December 22, 2000. Full bio: age, height, net worth, Bryce Hall relationship, Instagram, TikTok, Snapchat, Telegram.',
  keywords: [
    'Mika Lafuente',
    'Mika Lafuente age',
    'Mika Lafuente age 2026',
    'Mika Lafuente height',
    'Mika Lafuente net worth',
    'Mika Lafuente Instagram',
    'Mika Lafuente TikTok',
    'Mika Lafuente Snapchat',
    'Mika Lafuente Telegram',
    'Mika Lafuente boyfriend',
    'Mika Lafuente Bryce Hall',
    'Mika Lafuente model',
    'Mika Lafuente biography',
    'Mika Lafuente real name',
    'Mika Lafuente 2026',
    'Mika Lafuente OnlyFans',
    'mikalafuente Instagram',
    'Argentine American model',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Mika Lafuente | Age, Height, Bryce Hall & Bio 2026',
    description:
      'Full profile of Mika Lafuente: age, height 5\'7", net worth, Bryce Hall relationship, Instagram @mikalafuente (3M+), TikTok, Snapchat, and Telegram.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    section: 'Creator',
    tags: ['Mika Lafuente', 'Creator', 'Model', 'Bryce Hall', 'Instagram', 'Argentina'],
    publishedTime: '2026-03-15T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    images: [
      {
        url: `https://www.owire.org${IMAGE_URL}`,
        width: 1200,
        height: 675,
        alt: 'Mika Lafuente, Argentine-American model and lifestyle creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mika Lafuente | Age, Height, Bryce Hall, Bio 2026',
    description:
      'Mika Lafuente: age, height 5\'7", Bryce Hall boyfriend, Instagram @mikalafuente (3M+), TikTok, Snapchat, Telegram, net worth.',
  },
};

export default function CreatorMikaLafuentePage() {
  return <CreatorArticleDB slug="creator-mika-lafuente" />;
}
