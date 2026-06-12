import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/tomb-raider-legacy-of-atlantis-ai-controversy';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=675&fit=crop&q=80';

export const metadata: Metadata = {
  title: 'Tomb Raider AI Controversy | Legacy of Atlantis Explained',
  description:
    'Crystal Dynamics confirms AI use in Tomb Raider Legacy of Atlantis. Jeff Adams defends it as gray-boxing only. A four-pistol render deepens the backlash.',
  keywords: [
    'Tomb Raider Legacy of Atlantis AI',
    'Tomb Raider Legacy of Atlantis controversy',
    'Crystal Dynamics AI disclosure',
    'Tomb Raider AI-assisted assets',
    'Jeff Adams Crystal Dynamics AI',
    'Tomb Raider Legacy of Atlantis Steam',
    'Flying Wild Hog Tomb Raider',
    'Embracer Group AI games',
    'generative AI game development 2026',
    'Tomb Raider 1996 remake',
    'Tomb Raider Legacy of Atlantis release date',
    'Valve Steam AI disclosure policy',
    'Crystal Dynamics gray-boxing AI',
    'Tomb Raider four pistols render',
    'Lara Croft Legacy of Atlantis',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Tomb Raider AI Controversy | Legacy of Atlantis, Four Pistols, Embracer',
    description:
      'Crystal Dynamics used AI in early development and says all final assets are human-made. Then a promo render showed Lara Croft with four guns.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-06-12T10:00:00-05:00',
    modifiedTime: '2026-06-12T10:00:00-05:00',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Tomb Raider Legacy of Atlantis AI controversy' }],
    tags: ['Tomb Raider', 'Crystal Dynamics', 'Generative AI', 'Flying Wild Hog', 'Embracer Group'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomb Raider AI Controversy | Four Pistols and Embracer Group Pressure',
    description:
      'Crystal Dynamics says AI was only used for gray-boxing. Then a promo render showed Lara with four guns. 9-minute breakdown.',
    images: [OG_IMAGE],
  },
};

export default function TombRaiderAIControversyPage() {
  return <JackArticleDB slug="video-games-news-tomb-raider-legacy-of-atlantis-ai-controversy" />;
}
