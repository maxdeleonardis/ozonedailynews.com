import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is a Tariff? | Definition, Types & 2026 Examples',
  description: 'A tariff is a tax imposed on imported or exported goods. Learn how tariffs work, types of tariffs, how the US 2026 tariff regime affects prices, and',
  keywords: [
    'what is a tariff',
    'tariff definition',
    'how do tariffs work',
    'types of tariffs',
    'import tariff',
    'export tariff',
    'US tariffs 2026',
    'Trump tariffs',
    'trade war tariffs',
    'tariff explained',
    'tariff vs tax',
    'protective tariff',
    'reciprocal tariff',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/tariff',
  },
  openGraph: {
    title: 'What Is a Tariff? | Definition, Types & 2026 Examples',
    description: 'A tariff is a tax on imports or exports. Covers how tariffs work, types, and the impact of 2026 US tariff policy.',
    type: 'article',
    url: 'https://www.objectwire.org/define/tariff',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Tariff? | Definition, Types & 2026 Examples',
    description: 'Tariffs explained: how they work, types, and the impact of 2026 US trade policy.',
  },
};

export default function TariffDefinitionPage() {
  return <WikiArticle slug="define-tariff" />;
}
