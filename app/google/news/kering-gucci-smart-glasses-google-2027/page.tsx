import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/news/kering-gucci-smart-glasses-google-2027';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1707167144619-a574a217136d?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Gucci Smart Glasses | Kering and Google Partner for 2027',
  description: 'Kering CEO Luca de Meo confirmed Gucci smart glasses built with Google are coming in 2027, making Gucci the first major luxury house to enter AI-powered eyewear.',
  keywords: [
    'Gucci smart glasses',
    'Kering Google partnership',
    'Gucci Google 2027',
    'luxury smart glasses',
    'Kering smart glasses',
    'AI eyewear luxury',
    'Luca de Meo Gucci',
    'Google smart glasses 2027',
    'wearable AI fashion',
    'Gucci wearable tech',
    'Kering capital markets day',
    'luxury tech collaboration',
    'AI glasses 2027',
    'Alphabet Kering deal',
    'Gucci technology 2027',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Gucci Smart Glasses | Kering and Google Partner for 2027',
    description: 'CEO Luca de Meo confirmed Gucci-branded AI smart glasses with Google arrive in 2027, the first luxury fashion house to enter the AI eyewear market.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-17T12:00:00Z',
    modifiedTime: '2026-04-17T12:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Smart glasses technology wearable AI' }],
    tags: ['Gucci', 'Kering', 'Google', 'Smart Glasses'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gucci x Google smart glasses confirmed for 2027',
    description: 'Kering CEO Luca de Meo: "Probably next year, 2027." First luxury house in AI eyewear.',
    images: [OG_IMAGE],
  },
};

export default function GoogleNewsKeringGucciSmartGlassesGoogle2027Page() {
  return <NewsArticleDB slug="google-news-kering-gucci-smart-glasses-google-2027" />;
}
