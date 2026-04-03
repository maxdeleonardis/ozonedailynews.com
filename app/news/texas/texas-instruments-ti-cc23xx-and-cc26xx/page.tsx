import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Texas Instruments TI CC23xx and CC26xx: Long-Range Low-Energy Mesh for Edge Computing | ObjectWire",
  description: "Comprehensive guide to Texas Instruments' CC23xx and CC26xx wireless microcontrollers for IoT, mesh networking, and edge computing applications with ultra-low power consumption.",
  keywords: ["Texas Instruments", "CC23xx", "CC26xx", "mesh networking", "IoT", "edge computing", "wireless MCU", "Bluetooth Low Energy", "Zigbee", "Thread"],
  alternates: {
    canonical: 'https://www.objectwire.org/texas-instruments-ti-cc23xx-and-cc26xx-long-range-low-energy-mesh-for-edge-computing',
  },
};

export default function TIChipsPage() {
  return <WikiArticle slug="news-texas-texas-instruments-ti-cc23xx-and-cc26xx" />;
}
