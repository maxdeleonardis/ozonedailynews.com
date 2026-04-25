import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = 'video-games-ubisoft';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Ubisoft | Company Profile, Creative Houses, 2026 Reset',
  description: 'Ubisoft company profile: the French gaming giant behind Assassin\'s Creed, Far Cry, and Rainbow Six. 2026 Creative Houses restructure, Tencent investment,',
  keywords: [
    'Ubisoft',
    'Ubisoft company profile',
    'Ubisoft 2026',
    'Ubisoft Creative Houses',
    'Ubisoft restructure 2026',
    'Assassin\'s Creed Shadows',
    'Ubisoft Tencent investment',
    'Yves Guillemot',
    'Ubisoft financials',
    'Ubisoft game roadmap 2026',
    'AC Black Flag Resynced',
    'Ubisoft organizational reset',
    'Ubisoft French gaming company',
    'Rainbow Six Mobile',
    'Ghost Recon OVR',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: 'article',
    title: 'Ubisoft | Company Profile, Creative Houses & 2026 Reset',
    description: 'Full profile of Ubisoft: five Creative Houses, Tencent\'s €1.16B investment, AC Shadows launch, 2026 game roadmap, and the organizational reset reshaping',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Ubisoft French gaming company 2026 profile' }],
    publishedTime: '2026-04-21T16:00:00Z',
    section: 'Gaming',
    tags: ['Ubisoft', 'Assassin\'s Creed', 'Gaming', 'France'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ubisoft | Creative Houses, 2026 Reset & Game Roadmap',
    description: 'Five Creative Houses, Tencent backing, and a leaner org. Full Ubisoft profile for 2026.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesUbisoftPage() {
  return <ArticlePageDB slug="video-games-ubisoft" />;
}
