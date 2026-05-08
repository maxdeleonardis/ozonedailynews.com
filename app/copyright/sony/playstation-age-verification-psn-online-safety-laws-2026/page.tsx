import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/copyright/sony/playstation-age-verification-psn-online-safety-laws-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1605901309584-818e25452571?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'PlayStation Age Verification | PSN Chat, UK Online Safety',
  description: 'Sony is rolling out mandatory age verification for PSN voice chat, Discord integration, and broadcasting from June 2026, driven by the UK Online Safety',
  keywords: [
    'PlayStation age verification',
    'PSN age verification 2026',
    'PlayStation Network online safety',
    'Sony age verification Yoti',
    'UK Online Safety Act PlayStation',
    'PlayStation voice chat age gate',
    'PSN Discord age verification',
    'Australia under 16 gaming ban',
    'PlayStation broadcasting age verification',
    'Sony global age verification plan',
    'PlayStation June 2026 update',
    'Kids Online Safety Act gaming',
    'PSN communication features 2026',
    'Ofcom gaming platforms',
    'PlayStation facial age estimation',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'PlayStation Age Verification | What Changes for PSN in 2026',
    description: 'Voice chat, Discord, and broadcasting on PlayStation Network will require age verification from June 2026. Here is every detail: which features are',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-21T23:00:00Z',
    modifiedTime: '2026-04-21T23:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'PlayStation PSN age verification 2026 online safety laws' }],
    tags: ['PlayStation', 'Sony', 'Online Safety', 'Age Verification'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PlayStation Is Locking Voice Chat Behind Age's What Changes.",
    description: 'UK, Australia, EU, and the US are all forcing Sony\'s hand. Full breakdown of the PSN age gate rolling out from June 2026.',
    images: [OG_IMAGE],
  },
};

export default function CopyrightSonyPlaystationAgeVerificationPsnOnlineSafetyLaws2026Page() {
  return <NewsArticleDB slug="copyright-sony-playstation-age-verification-psn-online-safety-laws-2026" />;
}
