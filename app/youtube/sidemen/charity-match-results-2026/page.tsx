import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/youtube/sidemen/charity-match-results-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://www.objectwire.org/influncer/sdmn_charitymatch_26.webp';
const THUMBNAIL = '/influncer/sdmn_charitymatch_26.webp';

export const metadata: Metadata = {
  title: 'Sidemen Charity Match 2026 Results | 10-10 Draw, YouTube',
  description: 'Sidemen Charity Match 2026 results: 10-10 draw at Wembley, YouTube Allstars win 4-1 on penalties, raising £6.2M. Jynxzi Man of the Match, Miniminter',
  keywords: [
    'Sidemen Charity Match 2026 results',
    'Sidemen Charity Match score',
    'YouTube Allstars vs Sidemen FC 2026',
    'Sidemen Charity Match Wembley 2026',
    'Jynxzi Man of the Match',
    'Miniminter hat-trick Sidemen Charity Match',
    'ItalianBach equalizer Sidemen 2026',
    'Sidemen Charity Match penalty shootout',
    'KSI Sidemen Charity Match 2026',
    'Max Fosh magic trick Mark Clattenburg',
    'Sidemen Charity Match £6 million raised',
    'Sidemen Charity Match most goals ever',
    'xQc Sidemen Charity Match goalkeeper',
    'TBJZL free kick 2026',
    'Bright Side charity Sidemen',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Sidemen Charity Match 2026 | 10-10 Draw, Allstars Win',
    description: '20 goals, a penalty shootout, a magic trick on the referee, and £6.2M raised at a sold-out Wembley. Full results from Sidemen Charity Match 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Entertainment Desk'],
    publishedTime: '2026-04-19T00:00:00Z',
    modifiedTime: '2026-04-19T00:00:00Z',
    section: 'Entertainment',
    images: [{ url: `https://www.objectwire.org${THUMBNAIL}`, width: 1200, height: 675, alt: 'Sidemen Charity Match 2026 at Wembley Stadium' }],
    tags: ['Sidemen', 'KSI', 'YouTube', 'Charity Match', 'Wembley'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidemen Charity Match 2026 | 10-10, YouTube Allstars win on',
    description: '20 goals. 4-1 penalty shootout. Jynxzi MOTM. Miniminter hat-trick. ItalianBach 90th-minute equalizer. Max Fosh burned a yellow card in front of 90,000',
    images: [`https://www.objectwire.org${THUMBNAIL}`],
  },
};

export default function YoutubeSidemenCharityMatchResults2026Page() {
  return <NewsArticleDB slug="youtube-sidemen-charity-match-results-2026" />;
}
