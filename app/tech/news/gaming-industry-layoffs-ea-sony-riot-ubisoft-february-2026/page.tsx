import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/tech/news/gaming-industry-layoffs-ea-sony-riot-ubisoft-february-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/tech/gaming-industry-layoffs-ea-sony-riot-ubisoft-february-2026.jpg';

export const metadata: Metadata = {
  title:
    'Gaming Industry Sheds Jobs Across EA, Sony, Riot, and Ubisoft in February 2026',
  description:
    'Electronic Arts, Sony Interactive Entertainment, Riot Games, and Ubisoft all announced layoffs in February 2026. Bluepoint Games was closed with 70 cuts,',
  keywords: [
    'gaming industry layoffs February 2026',
    'EA Full Circle studio layoffs Skate reboot 2026',
    'Sony Bluepoint Games closure 70 layoffs Austin 2026',
    'Riot Games publishing layoffs 80 February 2026',
    'Riot 2XKO layoffs fighting game 2026',
    'Ubisoft Toronto layoffs 40 restructuring 2026',
    'Ubisoft voluntary departure plan 200 corporate staff',
    'video game layoffs 2026 tracker 2374 roles',
    'GDC 2026 state of game industry 28 percent layoffs',
    'Bluepoint Games Demon Souls remake studio closed',
    'iWOT Games Montreal layoffs February 2026',
    'gaming job cuts post-holiday earnings cycle 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'EA, Sony, Riot, and Ubisoft All Cut Staff in February 2026, 2,374 Roles Affected Industry-Wide',
    description:
      'Bluepoint Games closed. Full Circle restructured after Skate launch. Riot shed ~160 roles across publishing and 2XKO. Ubisoft Toronto lost 40 with 200',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Technology',
    tags: [
      'Gaming',
      'Layoffs',
      'Electronic Arts',
      'Sony',
      'Riot Games',
      'Ubisoft',
      'Video Games',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Gaming Industry Layoffs: EA, Sony, Riot, Ubisoft Cut Jobs in February 2026',
    description:
      'Bluepoint closed (70). Full Circle restructured. Riot lost ~160 across publishing and 2XKO. Ubisoft Toronto shed 40 with 200 more targeted. 2,374 roles',
    images: [IMAGE_URL],
  },
};

export default function GamingLayoffsFebruary2026Page() {
  return <JackArticleDB slug="tech-news-gaming-industry-layoffs-ea-sony-riot-ubisoft-february-2026" />;
}
