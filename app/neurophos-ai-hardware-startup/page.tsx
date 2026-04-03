import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Neurophos AI Hardware Startup Achieves 300 Tops/W - ObjectWire.org",
  description: "Neurophos, an Austin, Texas-based photonic AI startup founded in 2020 as a spinout from Duke University and Metacept Inc., is pioneering next-generation AI hardware.",
  alternates: {
    canonical: 'https://www.objectwire.org/neurophos-ai-hardware-startup',
  },
};

export default function NeurophosAIHardwarePage() {
  return <WikiArticle slug="neurophos-ai-hardware-startup" />;
}
