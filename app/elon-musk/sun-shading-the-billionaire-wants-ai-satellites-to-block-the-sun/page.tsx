import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Sun-Shading | The Billionaire Wants AI Satellites to Block",
  description: "Elon Musk unveils controversial plan to deploy AI-controlled satellites that could shade Earth from solar radiation, sparking fierce debate about",
  keywords: ["Elon Musk", "sun shading", "geoengineering", "climate change", "satellites", "solar radiation", "AI satellites", "controversial technology"],
  alternates: {
    canonical: 'https://www.objectwire.org/elon-musk/sun-shading-the-billionaire-wants-ai-satellites-to-block-the-sun',
  },
  openGraph: {
    title: "Sun-Shading | The Billionaire Wants AI Satellites to Block",
    description: "Elon Musk unveils controversial plan to deploy AI-controlled satellites that could shade Earth from solar radiation, sparking fierce debate about",
    type: 'article',
    url: "https://www.objectwire.org/elon-musk/sun-shading-the-billionaire-wants-ai-satellites-to-block-the-sun",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sun-Shading | The Billionaire Wants AI Satellites to Block",
    description: "Elon Musk unveils controversial plan to deploy AI-controlled satellites that could shade Earth from solar radiation, sparking fierce debate about",
  },
};

export default function ElonMuskSunShadingPage() {
  return <WikiArticle slug="elon-musk-sun-shading-the-billionaire-wants-ai-satellites-to-block-the-sun" />;
}
