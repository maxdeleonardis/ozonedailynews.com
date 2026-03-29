import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/warren-mrbeast-step-crypto-children';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/crypto/warren-mrbeast-step-crypto-children.jpg';

export const metadata: Metadata = {
  title: 'Warren Presses MrBeast on Crypto Plans for Children Through Step App | ObjectWire',
  description:
    "Senator Elizabeth Warren sent a letter to YouTube star Jimmy Donaldson, MrBeast, on Monday demanding details about Beast Industries' plans to introduce cryptocurrency products to minors through the Step teen banking app, according to The New York Times.",
  keywords: [
    'Warren MrBeast crypto children Step app',
    'Elizabeth Warren Beast Industries Step fintech',
    'MrBeast Jimmy Donaldson crypto teens',
    'Step banking app crypto acquisition',
    'Senate Banking Committee crypto minors',
    'Beast Industries Step crypto regulation',
    'Warren crypto letter MrBeast 2026',
    'teen fintech crypto regulation Senate',
    'MrBeast Step app acquisition crypto',
    'crypto products children regulation 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "Warren Presses MrBeast on Crypto Plans for Children Through Step App",
    description:
      "Senator Elizabeth Warren, ranking Democrat on the Senate Banking Committee, sent MrBeast a letter demanding details on Beast Industries' plans to roll out crypto products to minors through the Step banking platform.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T12:00:00Z',
    modifiedTime: '2026-03-24T12:00:00Z',
    section: 'Crypto',
    tags: [
      'MrBeast',
      'Elizabeth Warren',
      'Step App',
      'Crypto',
      'Beast Industries',
      'Teen Fintech',
      'Senate Banking Committee',
      'Regulation',
      'Children',
      'Jimmy Donaldson',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Warren Presses MrBeast on Crypto Plans for Children Through Step App",
    description:
      "Sen. Warren sent a letter to Jimmy Donaldson (MrBeast) demanding answers about Beast Industries' crypto plans for minors through the Step teen banking app.",
    images: [IMAGE_URL],
  },
};

export default function WarrenMrBeastStepCryptoPage() {
  return <JackArticleDB slug="crypto-warren-mrbeast-step-crypto-children" />;
}
