import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/meta/news/eu-age-verification-app-meta-google-verdicts';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1768213022263-0414dc145dfd?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'EU Age Verification App | Meta, Google Verdicts Reshape Tech Liability',
  description: 'The EU launched an age-verification app after back-to-back jury verdicts held Meta liable for $375M and found both Meta and Google responsible for addictive platform design harming minors.',
  keywords: [
    'EU age verification app',
    'Meta Google verdict 2026',
    'Meta $375 million New Mexico verdict',
    'social media addiction lawsuit',
    'Meta liable child safety',
    'Google Instagram addiction verdict',
    'EU tech platform liability',
    'New Mexico Meta jury verdict',
    'Los Angeles social media addiction case',
    'Meta defective design ruling',
    'EU Digital Services Act age verification',
    'Raul Torrez Meta verdict',
    'social media minor protection 2026',
    'tech platform liability landmark ruling',
    'Meta Instagram addiction lawsuit',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'EU Age Verification App | After $375M Meta Verdict, Platform Liability Shifts',
    description: 'Back-to-back jury verdicts in New Mexico ($375M) and Los Angeles ($6M) held Meta and Google liable for addictive design. The EU responded with a new age-verification app.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-17T17:00:00Z',
    modifiedTime: '2026-04-17T17:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'European Union parliament building regulation technology' }],
    tags: ['Meta', 'Google', 'EU', 'Age Verification'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EU launches age-verification app after Meta $375M verdict',
    description: '$375M in New Mexico, $6M in LA. Juries held Meta and Google liable for addictive design. EU responds with age-verification app.',
    images: [OG_IMAGE],
  },
};

export default function MetaNewsEuAgeVerificationAppMetaGoogleVerdictsPage() {
  return <NewsArticleDB slug="meta-news-eu-age-verification-app-meta-google-verdicts" />;
}
