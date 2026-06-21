export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Blue Origin | New Glenn, New Shepard & Space Infrastructure',
  description: 'Blue Origin news and analysis from OzoneNews. New Glenn orbital launches, New Shepard suborbital flights, BE-4 engine production, and Blue Moon lunar lander development.',
  keywords: [
    'Blue Origin',
    'New Glenn rocket 2026',
    'New Shepard',
    'BE-4 engine',
    'Blue Moon lander',
    'Jeff Bezos space company',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/blue-origin`,
  },
  openGraph: {
    title: 'Blue Origin | New Glenn, New Shepard & Space Infrastructure',
    description: 'Blue Origin news and analysis from OzoneNews. New Glenn orbital launches, New Shepard flights, BE-4 engine production, and Blue Moon lunar lander.',
    type: 'article',
    url: `${SITE_CONFIG.url}/blue-origin`,
    siteName: SITE_CONFIG.publisherName,
    images: [
      {
        url: `${SITE_CONFIG.url}/api/og?slug=blue-origin`,
        width: 1200,
        height: 675,
        alt: 'Blue Origin | New Glenn, New Shepard & Space Infrastructure branded thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Origin | New Glenn, New Shepard & Space Infrastructure',
    description: 'Blue Origin news and analysis from OzoneNews. New Glenn, New Shepard, BE-4 engines, and Blue Moon.',
  },
};

export default function BlueOriginPage() {
  return <ArticlePageDB slug="blue-origin" />;
}
