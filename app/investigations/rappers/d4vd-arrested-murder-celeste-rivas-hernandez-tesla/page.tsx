import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/investigations/rappers/d4vd-arrested-murder-celeste-rivas-hernandez-tesla';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'D4vd Arrested for Murder | Celeste Rivas Hernandez Body Found in Tesla',
  description: 'Platinum-selling singer D4vd, born David Anthony Burke, was arrested on suspicion of murdering 14-year-old Celeste Rivas Hernandez after LAPD found her body in his impounded Tesla.',
  keywords: [
    'D4vd arrested',
    'D4vd murder',
    'David Anthony Burke arrested',
    'Celeste Rivas Hernandez',
    'D4vd Celeste Rivas Hernandez',
    'D4vd Tesla body',
    'D4vd LAPD arrest',
    'D4vd murder charge 2026',
    'D4vd Hollywood Hills',
    'D4vd singer arrested',
    'David Burke singer murder',
    'D4vd 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'D4vd Arrested on Suspicion of Murdering Celeste Rivas Hernandez',
    description: 'LAPD arrested platinum-selling artist D4vd after finding 14-year-old Celeste Rivas Hernandez\'s body in his impounded Tesla seven months ago. He is held without bail.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ConanDoyle'],
    publishedTime: '2026-04-17T23:45:00Z',
    modifiedTime: '2026-04-17T23:45:00Z',
    section: 'News',
    tags: ['D4vd', 'LAPD', 'Celeste Rivas Hernandez', 'True Crime'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D4vd arrested for murder of 14-year-old Celeste Rivas Hernandez',
    description: 'Body found in trunk of singer\'s impounded Tesla seven months ago. D4vd held without bail. Defense lawyers say he "did not murder" the teen.',
  },
};

export default function InvestigationsRappersD4vdArrestedMurderCelesteRivasHernandezTeslaPage() {
  return <NewsArticleDB slug="investigations-rappers-d4vd-arrested-murder-celeste-rivas-hernandez-tesla" />;
}
