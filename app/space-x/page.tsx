export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'SpaceX | Starship, Falcon 9 & Commercial Spaceflight',
  description: 'SpaceX news and analysis from OzoneNews. Starship test flights, Falcon 9 launch cadence, Starlink deployments, and the future of reusable rocketry.',
  keywords: [
    'SpaceX',
    'SpaceX Starship 2026',
    'Falcon 9 launches',
    'Starlink satellite network',
    'reusable rockets',
    'commercial spaceflight',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/space-x`,
  },
  openGraph: {
    title: 'SpaceX | Starship, Falcon 9 & Commercial Spaceflight',
    description: 'SpaceX news and analysis from OzoneNews. Starship test flights, Falcon 9 launch cadence, Starlink deployments, and reusable rocketry.',
    type: 'article',
    url: `${SITE_CONFIG.url}/space-x`,
    siteName: SITE_CONFIG.publisherName,
    images: [
      {
        url: `${SITE_CONFIG.url}/api/og?slug=space-x`,
        width: 1200,
        height: 675,
        alt: 'SpaceX | Starship, Falcon 9 & Commercial Spaceflight branded thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpaceX | Starship, Falcon 9 & Commercial Spaceflight',
    description: 'SpaceX news and analysis from OzoneNews. Starship, Falcon 9, Starlink, and reusable rocketry.',
  },
};

export default function SpaceXPage() {
  return <ArticlePageDB slug="space-x" />;
}
