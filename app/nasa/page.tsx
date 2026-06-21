export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'NASA | Missions, Discoveries & Space Exploration',
  description: 'NASA missions, discoveries, and space exploration coverage from OzoneNews. Artemis Moon program, Mars rovers, James Webb Space Telescope, and deep space science.',
  keywords: [
    'NASA',
    'NASA missions 2026',
    'Artemis program',
    'James Webb Space Telescope',
    'Mars exploration',
    'space exploration',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/nasa`,
  },
  openGraph: {
    title: 'NASA | Missions, Discoveries & Space Exploration',
    description: 'NASA missions, discoveries, and space exploration coverage from OzoneNews. Artemis Moon program, Mars rovers, JWST, and deep space science.',
    type: 'article',
    url: `${SITE_CONFIG.url}/nasa`,
    siteName: SITE_CONFIG.publisherName,
    images: [
      {
        url: `${SITE_CONFIG.url}/api/og?slug=nasa`,
        width: 1200,
        height: 675,
        alt: 'NASA | Missions, Discoveries & Space Exploration branded thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASA | Missions, Discoveries & Space Exploration',
    description: 'NASA missions, discoveries, and space exploration coverage from OzoneNews.',
  },
};

export default function NASAPage() {
  return <ArticlePageDB slug="nasa" />;
}
