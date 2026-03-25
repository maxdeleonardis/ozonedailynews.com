import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/daddywellness';

export const metadata: Metadata = {
  title: 'Richie Lovelace (Daddy Wellness) — Wellness Influencer, Dialed University | ObjectWire',
  description:
    'Richie Lovelace, known online as Daddy Wellness, is a Miami-based wellness entrepreneur and content creator with over 2 million Instagram followers. He founded Dialed University and hosts the TSL Time podcast.',
  keywords: [
    'Richie Lovelace Daddy Wellness',
    'Daddy Wellness Instagram',
    'Dialed University',
    'Dialed Degen Method',
    'TSL Time podcast',
    'wellness influencer Miami',
    'daddywellness YouTube',
    'Daddy Wellness 2 million followers',
    'Richie Lovelace influencer',
    'Daddy Wellness Skool',
    'wellness content creator 2026',
    'SIUUUP Daddy Wellness',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Richie Lovelace (Daddy Wellness) — 2M-Follower Wellness Influencer & Founder of Dialed University',
    description:
      'Profile of Richie Lovelace (Daddy Wellness) — former growth equity professional turned Miami-based wellness creator, founder of Dialed University, and host of TSL Time podcast. 2M+ Instagram followers.',
    type: 'profile',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
};

export default function DaddyWellnessPage() {
  return <ArticlePageDB slug="influencer-daddywellness" />;
}
