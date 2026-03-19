import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Sun-Shading: The Billionaire Wants AI Satellites to Block the Sun | ObjectWire",
  description: "Elon Musk unveils controversial plan to deploy AI-controlled satellites that could shade Earth from solar radiation, sparking fierce debate about geoengineering and climate intervention.",
  keywords: ["Elon Musk", "sun shading", "geoengineering", "climate change", "satellites", "solar radiation", "AI satellites", "controversial technology"],
  alternates: {
    canonical: 'https://www.objectwire.org/elon-musk/sun-shading-the-billionaire-wants-ai-satellites-to-block-the-sun',
  },
};

export default function ElonMuskSunShadingPage() {
  return <WikiArticle slug="elon-musk-sun-shading-the-billionaire-wants-ai-satellites-to-block-the-sun" />;
}
