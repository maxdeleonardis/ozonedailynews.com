import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/lean-beef-patty';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const PAGE_URL = ARTICLE_URL;
const OG_IMAGE = '';
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Lean Beef Patty | Age, Height, Net Worth, TikTok 2026',
  description:
    'Lean Beef Patty (Victoria Waldrip) is a US bodybuilding creator born May 14, 1999. Full bio: age, height 5\'7", net worth, 4M+ TikTok, Instagram, Snapchat, Telegram, anime fitness.',
  keywords: [
    'Lean Beef Patty',
    'Lean Beef Patty real name',
    'Lean Beef Patty age',
    'Lean Beef Patty age 2026',
    'Lean Beef Patty height',
    'Lean Beef Patty net worth',
    'Lean Beef Patty TikTok',
    'Lean Beef Patty Instagram',
    'Lean Beef Patty Snapchat',
    'Lean Beef Patty Telegram',
    'Victoria Waldrip',
    'Lean Beef Patty bodybuilding',
    'Lean Beef Patty anime',
    'Lean Beef Patty boyfriend',
    'Lean Beef Patty workout',
    'Lean Beef Patty biography',
    'Lean Beef Patty 2026',
    'leanbeefpatty TikTok',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Lean Beef Patty | Age, TikTok, Real Name & Bio 2026',
    description:
      'Full profile: Lean Beef Patty (real name Victoria Waldrip), US bodybuilding creator born 1999. 4M+ TikTok, anime-inspired gym content, physique model.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Lean Beef Patty portrait' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lean Beef Patty | Age, Height, 4M TikTok, Net Worth 2026',
    description: 'Lean Beef Patty real name Victoria Waldrip: age, height 5\'7", net worth, TikTok, Instagram, Snapchat, Telegram, bodybuilding, anime fitness.',
  },
};

export default function InfluencerLeanBeefPattyPage() {
  return <CreatorArticleDB slug="influencer-lean-beef-patty" />;
}
