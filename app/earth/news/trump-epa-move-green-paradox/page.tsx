import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Trump's EPA Rollback and the Green Paradox: Deep-Sea Mining, Rare Earth Minerals, and the EV Battery Dilemma | ObjectWire",
  description:
    "Rare earth minerals are essential for EV batteries and wind turbines — but mining them from the ocean floor could destroy undiscovered ecosystems. Trump's repeal of Obama-era EPA protections may accelerate that gamble.",
  keywords: [
    'Trump EPA rollback ocean mining 2026',
    'deep sea mining rare earth minerals EV batteries',
    'Obama era environmental policy repeal Trump',
    'rare earth minerals wind turbine battery supply chain',
    'polymetallic nodules deep ocean environmental risk',
    'green energy transition deep sea destruction',
    'Clarion Clipperton Zone rare earth deposits',
    'Trump EPA deregulation fossil fuels environment',
    'electric vehicle battery minerals ocean floor',
    'deep sea mining ecosystem destruction undiscovered species',
    'critical minerals clean energy Trump policy',
    'EPA rule repeal offshore mining 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/earth/news/trump-epa-move-green-paradox',
  },
  openGraph: {
    title: "Trump's EPA Move and the Green Paradox: Can We Mine the Deep Sea Without Destroying It?",
    description:
      "The minerals powering your EV battery may come from the world's least-explored ecosystems. And with the Trump administration rolling back Obama-era EPA protections, the race to the ocean floor just got faster.",
    type: 'article',
    url: 'https://www.objectwire.org/earth/news/trump-epa-move-green-paradox',
    siteName: 'ObjectWire',
    images: ['/earth/pexels-george-desipris-726478.jpg'],
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T09:00:00Z',
    modifiedTime: '2026-02-20T09:00:00Z',
    section: 'Earth & Environment',
    tags: ['Trump', 'EPA', 'Deep Sea Mining', 'Rare Earth Minerals', 'EV Batteries', 'Environment', 'Ocean', 'Climate'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Green Paradox: Mining the Ocean Floor to Power Clean Energy — and What Trump's EPA Rollback Changes",
    description:
      'Rare earth minerals are essential for the energy transition. The problem: the richest deposits sit on ocean floors that science has barely touched. Trump just made protecting them harder.',
  },
};

export default function TrumpEPAGreenParadoxPage() {
  return <WikiArticle slug="earth-news-trump-epa-move-green-paradox" />;
}
