import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/news/apple-gemini-siri-upgrade-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/news/mac_mini.PNG';

export const metadata: Metadata = {
  title: "Apple\u2019s Gemini-Powered Siri Upgrade May Still Ship in March",
  description:
    "Apple may yet deliver the first taste of its long-overdue Gemini-powered Siri overhaul before March ends, according to a 9to5Mac timeline analysis",
  keywords: [
    'Apple Siri Gemini upgrade March 2026',
    'Apple Gemini partnership Siri',
    'iOS 18.4 Siri AI upgrade',
    'Apple Google Gemini deal',
    '9to5Mac Siri March 2026',
    'Siri overhaul 2026',
    'Apple AI Siri features',
    'Google Gemini Apple integration',
    'iPhone AI assistant 2026',
    'Apple iOS AI update',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "Apple\u2019s Gemini-Powered Siri Upgrade May Still Ship in March",
    description:
      "The window is razor-thin. According to a 9to5Mac timeline analysis, Apple could still deliver its Gemini-powered Siri overhaul before March ends \u2014 if",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T12:00:00Z',
    modifiedTime: '2026-03-24T12:00:00Z',
    section: 'Technology',
    tags: ['Apple', 'Siri', 'Google', 'Gemini', 'AI', 'iOS', 'Technology'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Apple\u2019s Gemini-Powered Siri Upgrade May Still Ship in March",
    description:
      "9to5Mac says Apple could still hit its March target for the Gemini-powered Siri overhaul \u2014 but only if a rapid succession of software releases lands",
    images: [IMAGE_URL],
  },
};

export default function AppleGeminiSiriMarchPage() {
  return <JackArticleDB slug="google-news-apple-gemini-siri-upgrade-march-2026" />;
}
