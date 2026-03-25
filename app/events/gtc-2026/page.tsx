import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'GTC 2026 — Nvidia GPU Technology Conference: Jensen Huang Keynote, Vera Rubin, Intel Partnership | ObjectWire',
  description:
    "Full coverage of Nvidia GTC 2026 in San Jose, CA — the world's premier AI conference. Jensen Huang's keynote on March 16, the Vera Rubin VR200 NVL72 GPU platform, the mystery \"Feynman\" chip, Agentic AI, OpenClaw, and the landmark Intel-Nvidia partnership on display.",
  keywords: [
    'Nvidia GTC 2026',
    'GTC 2026 San Jose',
    'Jensen Huang keynote GTC 2026',
    'Vera Rubin GPU VR200 NVL72',
    'Feynman chip Nvidia',
    'silicon photonics 1.6nm Nvidia',
    'Nvidia Intel partnership GTC',
    'NVLink Intel x86',
    'Agentic AI GTC 2026',
    'OpenClaw AI agents',
    'Nvidia GTC 2026 March 16',
    'GPU Technology Conference 2026',
    'AI conference 2026',
    'Nvidia Intel SOC chiplet',
    'Intel 18A Nvidia chips',
  ],
  openGraph: {
    title: 'GTC 2026 — Nvidia\'s "Age of AI" Summit: Vera Rubin, Feynman Chip & Intel Alliance',
    description:
      "30,000+ attendees descend on San Jose as GTC 2026 opens March 16. Jensen Huang keynotes from SAP Center. The Vera Rubin VR200 NVL72 GPU platform, a mystery \"Feynman\" silicon photonics chip, Agentic AI, and a landmark Intel-Nvidia partnership take center stage.",
    type: 'website',
    images: ['/nvidia/gtc-2026-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTC 2026 — Jensen Huang, Vera Rubin, Feynman & Intel × Nvidia | ObjectWire',
    description:
      "GTC 2026 opens March 16 in San Jose. 30,000+ attendees. Jensen Huang keynote at SAP Center. Vera Rubin GPU, mystery Feynman chip, Agentic AI, and the Intel-Nvidia \"frenemy\" alliance on full display.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/events/gtc-2026',
  },
};

export default function GTC2026Page() {
  return <WikiArticle slug="events-gtc-2026" />;
}
