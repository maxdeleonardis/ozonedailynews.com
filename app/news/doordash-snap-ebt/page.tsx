import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
import { generateArticleMetadata } from '@/lib/seo-utils';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = generateArticleMetadata({
  title: "Does DoorDash Accept SNAP EBT? Complete Guide 2026",
  description: "UPDATED JAN 2026: Yes, DoorDash accepts SNAP EBT in select states. Comprehensive guide on using food stamps for delivery, eligible items, state availability, and how SNAP benefits impact DoorDash's $9B+ annual revenue.",
  keywords: [
    "DoorDash SNAP",
    "DoorDash EBT",
    "DoorDash food stamps",
    "SNAP EBT delivery",
    "food delivery SNAP benefits",
    "DoorDash accepts EBT",
    "SNAP eligible items DoorDash",
    "DoorDash SNAP states",
    "EBT card delivery",
    "food stamps delivery apps",
    "DoorDash revenue SNAP",
    "Big Soda SNAP",
  ],
  canonicalUrl: "https://www.objectwire.org/news/doordash-snap-ebt",
  publishedTime: "2025-10-28T00:00:00Z",
  modifiedTime: "2026-01-24T00:00:00Z",
  authors: ["ObjectWire Policy & Business Desk"],
  category: "Business Analysis",
  tags: ["DoorDash", "SNAP", "EBT", "Food Delivery", "Government Benefits", "Food Policy"],
});

export default function DoorDashSnapPage() {
  return <WikiArticle slug="news-doordash-snap-ebt" />;
}
