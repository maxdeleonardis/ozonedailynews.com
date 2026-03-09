import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Nintendo MAR10 Day 2026: 40th Anniversary Super Mario Deals, Switch 2 Sales & Galaxy Movie Details',
  description:
    'Nintendo launches its MAR10 Day 2026 celebration with Switch 2 discounts, Virtual Boy classics on Nintendo Switch Online, the Talking Flower toy, and a countdown to The Super Mario Galaxy Movie on April 1.',
  keywords: [
    'Nintendo MAR10 Day 2026',
    'MAR10 Day deals Switch 2',
    'Super Mario 40th anniversary 2026',
    'Super Mario Galaxy Movie 2026 release date',
    'Nintendo Switch Online Virtual Boy',
    'Mario Clash Virtual Boy Switch Online',
    'Super Mario Party Jamboree Switch 2 discount',
    'Super Nintendo World sweepstakes 2026',
    'Talking Flower Nintendo toy March 2026',
    'Lunchables Nintendo Golden Ticket',
    'Brie Larson Princess Rosalina Galaxy Movie',
    'Nintendo March deals eShop 2026',
  ],
  openGraph: {
    title: 'Nintendo MAR10 Day 2026: 40th Anniversary Deals, Virtual Boy Returns & Galaxy Movie Countdown',
    description:
      `Nintendo's biggest MAR10 Day ever — Switch 2 discounts, Virtual Boy classics hitting Switch Online, and The Super Mario Galaxy Movie arriving April 1.`,
    url: 'https://www.objectwire.org/video-games/nintendo/mar10-day-2026-40th-anniversary-super-mario',
    type: 'article',
    images: [{ url: 'https://www.objectwire.org/winter-olympics/Mario_by_Shigehisa_Nakaue.png', alt: 'Nintendo MAR10 Day 2026 Super Mario 40th Anniversary' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nintendo MAR10 Day 2026: Switch 2 Deals, Virtual Boy & the Galaxy Movie Countdown',
    description:
      `Everything dropping for MAR10 Day 2026 — the first-ever Switch 2 sale, Virtual Boy on Switch Online, and Brie Larson as Rosalina.`,
    images: ['https://www.objectwire.org/winter-olympics/Mario_by_Shigehisa_Nakaue.png'],
  },
  alternates: { canonical: 'https://www.objectwire.org/video-games/nintendo/mar10-day-2026-40th-anniversary-super-mario' },
};

export default function Mar10Day2026Page() {
  return <WikiArticle slug="video-games-nintendo-mar10-day-2026-40th-anniversary-super-mario" />;
}
