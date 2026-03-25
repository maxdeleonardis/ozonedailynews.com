import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/Digital-Foundry';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/video-games/crimson-desert-blackspace-engine-4k-60fps-ray-tracing-digital-foundry-2026.jpg';

export const metadata: Metadata = {
  title:
    'Crimson Desert Delivers Native 4K 60fps With Ray Tracing on Ultra Settings — Digital Foundry Tech Preview February 2026 | ObjectWire',
  description:
    "Digital Foundry's February 27, 2026 tech preview confirmed Crimson Desert's BlackSpace Engine achieves native 4K at 60fps on ultra settings with full ray tracing and no upscaling on an AMD RX 7900 XTX. The game launches March 19, 2026, with AMD FSR Redstone and Nvidia DLSS 4 multi-frame generation at launch.",
  keywords: [
    'Crimson Desert native 4K 60fps ray tracing Digital Foundry 2026',
    'BlackSpace Engine Pearl Abyss tech preview February 2026',
    'Crimson Desert Digital Foundry RX 7900 XTX benchmark',
    'Crimson Desert AMD FSR Redstone launch 2026',
    'Crimson Desert Nvidia DLSS 4 multi-frame generation',
    'Pearl Abyss BlackSpace Engine ray tracing global illumination',
    'Crimson Desert release date March 19 2026 Steam PS5 Xbox',
    'Crimson Desert water physics FFT ocean simulation',
    'Alex Battaglia Digital Foundry BlackSpace Engine CES 2026',
    'Crimson Desert FSR Redstone ray regeneration upscaling',
    'BlackSpace Engine vs Unreal Engine 5 custom engine 2026',
    'Crimson Desert 4K ultra settings no upscaling benchmark',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Crimson Desert: Native 4K / 60fps / RT on Ultra — No Upscaling Required, Digital Foundry Confirms",
    description:
      "Pearl Abyss's custom BlackSpace Engine hit native 4K at 60fps on ultra settings with full ray tracing on an AMD RX 7900 XTX — no upscaling applied. Digital Foundry published the tech preview on February 27, 2026. Launch is March 19 with FSR Redstone and DLSS 4.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T22:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Video Games',
    tags: [
      'Crimson Desert',
      'Pearl Abyss',
      'BlackSpace Engine',
      'Digital Foundry',
      'Ray Tracing',
      '4K Gaming',
      'AMD FSR Redstone',
      'DLSS 4',
      'Video Games',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Crimson Desert Hits Native 4K / 60fps / Full RT on Ultra — Digital Foundry Feb 27, 2026",
    description:
      "BlackSpace Engine: native 4K, 60fps, ultra, ray tracing, no upscaling on RX 7900 XTX. FSR Redstone + DLSS 4 at launch March 19, 2026.",
    images: [IMAGE_URL],
  },
};

export default function CrimsonDesertDigitalFoundryPage() {
  return <JackArticleDB slug="video-games-Digital-Foundry" />;
}
