import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/news/china-bars-manus-cofounders-meta-acquisition-review-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: "China Bars Manus Co-Founders From Leaving Country Amid Meta Deal Review",
  description:
    "Chinese authorities have imposed travel restrictions on Manus AI co-founders Xiao Hong and Ji Yichao as regulators examine whether Meta's roughly $2",
  keywords: [
    'Manus AI China 2026',
    'Manus co-founders travel ban',
    'Meta Manus acquisition',
    'China AI regulation 2026',
    'NDRC AI oversight',
    'Xiao Hong Manus',
    'Ji Yichao Manus',
    'Meta China deal review',
    'China AI investment rules',
    'Meta acquisition blocked China',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "China Bars Manus Co-Founders From Leaving Country Amid Meta Deal Review",
    description:
      "Manus CEO Xiao Hong and chief scientist Ji Yichao were summoned to Beijing's National Development and Reform Commission and told they cannot leave China",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T18:00:00Z',
    modifiedTime: '2026-03-25T18:00:00Z',
    section: 'Technology & Geopolitics',
    tags: ['Manus AI', 'Meta', 'China', 'AI Regulation', 'Acquisition', 'NDRC', 'Geopolitics', 'AI Startups', 'Technology'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "China Bars Manus AI Co-Founders From Leaving as Meta's $2B Deal Faces Regulatory Review",
    description:
      "Manus CEO and chief scientist summoned by China's NDRC and placed under exit bans. Meta says it 'complied fully with applicable law.'",
    images: [IMAGE_URL],
  },
};

export default function ChinaManusMetaAcquisitionPage() {
  return <JackArticleDB slug="news-china-bars-manus-cofounders-meta-acquisition-review-2026" />;
}
