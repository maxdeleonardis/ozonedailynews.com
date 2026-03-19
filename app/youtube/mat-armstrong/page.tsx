import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Mat Armstrong — Automotive YouTube Creator, 6.2M Subscribers | ObjectWire',
  description:
    'Mat Armstrong (@MatArmstrongbmx) is a UK-based YouTube automotive creator with over 6.2 million subscribers and 870 million views. A former professional BMX rider from Leicester, he specialises in rebuilding wrecked supercars including Ferrari, Porsche, Rolls-Royce, and more.',
  keywords: [
    'Mat Armstrong YouTube',
    'Mat Armstrong BMX',
    'MatArmstrongbmx',
    'Mat Armstrong car rebuilds',
    'Mat Armstrong Leicester',
    'Mat Armstrong supercar restoration',
    'Mat Armstrong 6 million subscribers',
    'Mat Armstrong wrecked Ferrari rebuild',
    'Mat Armstrong Porsche GT3 rebuild',
    'automotive YouTube UK',
    'car restoration YouTube channel',
    'Mat Armstrong MK2',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/mat-armstrong',
  },
  openGraph: {
    title: 'Mat Armstrong — From Professional BMX Rider to 6.2M-Subscriber Automotive YouTube Creator',
    description:
      'Profile of Mat Armstrong (@MatArmstrongbmx) — Leicester-born former pro BMX rider turned automotive content creator, with 870M+ total views specialising in wrecked supercar rebuilds.',
    type: 'profile',
    url: 'https://www.objectwire.org/youtube/mat-armstrong',
    siteName: 'ObjectWire',
  },
};

export default function MatArmstrongPage() {
  return <WikiArticle slug="youtube-mat-armstrong" />;
}
