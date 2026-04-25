import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Texas Instruments TI CC23xx and CC26xx | Long-Range",
  description: "Comprehensive guide to Texas Instruments' CC23xx and CC26xx wireless microcontrollers for IoT, mesh networking, and edge computing applications with",
  keywords: ["Texas Instruments", "CC23xx", "CC26xx", "mesh networking", "IoT", "edge computing", "wireless MCU", "Bluetooth Low Energy", "Zigbee", "Thread"],
  alternates: {
    canonical: 'https://www.objectwire.org/texas-instruments-ti-cc23xx-and-cc26xx-long-range-low-energy-mesh-for-edge-computing',
  },
  openGraph: {
    title: "Texas Instruments TI CC23xx and CC26xx | Long-Range",
    description: "Comprehensive guide to Texas Instruments",
    type: 'article',
    url: "https://www.objectwire.org/texas-instruments-ti-cc23xx-and-cc26xx-long-range-low-energy-mesh-for-edge-computing",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Texas Instruments TI CC23xx and CC26xx | Long-Range",
    description: "Comprehensive guide to Texas Instruments",
  },
};

export default function TIChipsPage() {
  return <WikiArticle slug="news-texas-texas-instruments-ti-cc23xx-and-cc26xx" />;
}
