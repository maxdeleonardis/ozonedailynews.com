import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/news/indie-devs-dlss5-boycott-new-blood-interactive';
const OG_IMAGE = 'https://images.unsplash.com/photo-1578286788444-8c1487fcd823?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Indie Devs Call for Nvidia Boycott Over DLSS 5 | New Blood Interactive',
  description:
    'New Blood Interactive CEO Dave Oshry is calling for an Nvidia boycott over DLSS 5, unveiled at GTC 2026. Critics say the tech is a generative AI filter',
  keywords: [
    'Nvidia DLSS 5 boycott',
    'New Blood Interactive Nvidia boycott',
    'DLSS 5 controversy',
    'Nvidia DLSS 5 GTC 2026',
    'indie developers Nvidia',
    'Dave Oshry Nvidia',
    'DLSS 5 generative AI',
    'Nvidia GTC 2026 DLSS',
    'DLSS 5 vs DLSS 4',
    'Nvidia indie developer backlash',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Indie Devs Call Nvidia DLSS 5 Boycott | New Blood Interactive CEO Speaks Out',
    description:
      'More than a week after DLSS 5 debuted at GTC 2026, the backlash from indie developers is intensifying. New Blood\'s CEO is calling for a full Nvidia',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: 'Nvidia GPU — DLSS 5 developer boycott controversy',
      },
    ],
    publishedTime: '2026-03-30T12:00:00Z',
    section: 'Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nvidia DLSS 5 Boycott | New Blood Interactive CEO Calls Out GPU Giant',
    description:
      'Indie developers are calling for an Nvidia boycott over DLSS 5, which critics describe as a generative AI filter masquerading as a graphics upgrade.',
    images: [`https://www.objectwire.org${SLUG}/og`],
  },
};

export default function NvidiaNewsIndieDevsDlss5BoycottNewBloodInteractivePage() {
  return <NewsArticleDB slug="nvidia-news-indie-devs-dlss5-boycott-new-blood-interactive" />;
}
