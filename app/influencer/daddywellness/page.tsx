import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically, content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/daddywellness';
const OG_IMAGE = '/influncer/daddy_wellness.jpg';

export const metadata: Metadata = {
  title: 'Daddy Wellness (Richie Lovelace) | Wellness Influencer Profile',
  description:
    'Richie Lovelace, known online as Daddy Wellness, is a Miami-based wellness entrepreneur and content creator with over 2 million Instagram followers. He',
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
    title: 'Daddy Wellness (Richie Lovelace) | 2M+ Follower Wellness Influencer',
    description:
      'Profile of Richie Lovelace (Daddy Wellness), former growth equity professional turned Miami-based wellness creator, founder of Dialed University, and host',
    type: 'profile',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Richie Lovelace, Daddy Wellness, wellness influencer and founder of Dialed University',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daddy Wellness (Richie Lovelace)',
    description:
      'Miami-based wellness entrepreneur with 2M+ Instagram followers. Founder of Dialed University, host of TSL Time podcast.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function DaddyWellnessPage() {
  return <ArticlePageDB slug="influencer-daddywellness" />;
}
