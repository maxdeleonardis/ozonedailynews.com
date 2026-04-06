import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Google | Alphabet, AI, Search, YouTube & Android News',
  description: 'ObjectWire coverage of Google and Alphabet Inc. Search, AI Gemini models, DeepMind, Waymo self-driving, YouTube, and Android news from primary sources.',
  keywords: ['Google', 'Alphabet Inc', 'Waymo', 'DeepMind', 'Google AI', 'Gemini AI', 'YouTube', 'Android', 'autonomous vehicles', 'search engine', 'tech news', 'Sundar Pichai'],
  openGraph: {
    title: 'Google | Alphabet, AI, Search, YouTube & Android News',
    description: 'ObjectWire covers Google and Alphabet Inc: Search, AI, DeepMind, Waymo, YouTube, Android, and all Sundar Pichai news.',
    type: 'website',
    url: 'https://www.objectwire.org/google',
    siteName: 'ObjectWire',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/google',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google | Alphabet, AI, Search, YouTube & Android',
    description: 'ObjectWire Google hub: Gemini AI, DeepMind, Waymo, YouTube, Android, and Sundar Pichai news.',
  },
};

export default function GooglePage() {
  return <WikiArticle slug="google" />;
}
