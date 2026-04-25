import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Valve Wins Jury Verdict Under Washington Patent Troll',
  description:
    'A federal jury in the Western District of Washington ruled for Valve on all counts against patent troll Display Technologies, LLC on February 17, 2026 --',
  keywords: [
    'Valve Corporation',
    'Patent Troll Prevention Act',
    'PTPA',
    'Display Technologies',
    'Washington state patent law',
    'Consumer Protection Act',
    'private right of action',
    'Gabe Newell',
    'patent troll',
    'jury verdict 2026',
    'RCW 19.350',
    'Western District of Washington',
  ],
  alternates: {
    canonical:
      'https://www.objectwire.org/video-games/valve-corporation/court-ruling-private-companies-can-enforce-patent-troll-prevention-act',
  },
  openGraph: {
    title: 'Valve Wins First U.S. Jury Verdict Under State Patent',
    description:
      'Federal jury awards Valve $152,093 against patent troll Display Technologies, LLC. Court confirms private companies can sue under Washington PTPA via',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/valve-corporation/court-ruling-private-companies-can-enforce-patent-troll-prevention-act',
    siteName: 'ObjectWire',
    images: [{ url: '/influncer/valve-ceo-Gabe-Newell.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valve Wins First U.S. Jury Verdict Under State Patent',
    description:
      '$152,093 in damages, personal liability via veil piercing, and a confirmed private right of action under Washington PTPA.',
  },
};

export default function ValvePatentTrollVerdictPage() {
  return <NewsArticleDB slug="video-games-valve-corporation-court-ruling-private-companies-can-enforce-patent-troll-prevention-act" />;
}
