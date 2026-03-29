import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/youtube/sidemen/ksi/dagenham-redbridge';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/ksi%20buys%20club.PNG';

export const metadata: Metadata = {
  title:
    'KSI Becomes Co-Owner of Dagenham & Redbridge FC, Vows to Take Club to Premier League | ObjectWire',
  description:
    'KSI (JJ Olatunji) acquired a 20% stake in Dagenham & Redbridge FC on March 3, 2026, becoming co-owner of the National League South club. The Sidemen founder vowed to take the Daggers to the Premier League, calling it a full-circle moment referencing his Race to Division One YouTube series.',
  keywords: [
    'KSI Dagenham Redbridge co-owner',
    'KSI buys football club 2026',
    'Dagenham Redbridge new owner',
    'KSI Premier League vow',
    'Sidemen football club',
    'JJ Olatunji Dagenham Redbridge',
    'Happy Fan Group Dagenham',
    'Andy Carroll Dagenham Redbridge',
    'KSI Race to Division One',
    'National League South ownership',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'KSI Becomes Co-Owner of Dagenham & Redbridge FC | Vows Premier League Push',
    description:
      'KSI acquired a 20% stake in Dagenham & Redbridge FC on March 3, 2026. The YouTube star vowed to take the sixth-tier club to the Premier League, calling it a full-circle moment.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-03T14:00:00Z',
    modifiedTime: '2026-03-03T14:00:00Z',
    section: 'YouTube',
    tags: [
      'KSI', 'Dagenham & Redbridge', 'Sidemen', 'Football', 'Non-League Football',
      'YouTube', 'Premier League', 'Andy Carroll', 'Happy Fan Group',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSI Becomes Co-Owner of Dagenham & Redbridge FC',
    description:
      'The Sidemen founder acquired a 20% stake in sixth-tier Dagenham & Redbridge and vowed to take them to the Premier League.',
    images: [IMAGE_URL],
  },
};

export default function KSIDagenhamRedbridgePage() {
  return <NewsArticleDB slug="youtube-sidemen-ksi-dagenham-redbridge" />;
}
