import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "TikTok Announces USDS Joint Venture LLC to Address U.S. Security Concerns | ObjectWire",
  description:
    "TikTok unveils groundbreaking joint venture with U.S. technology and security partners, creating USDS LLC to operate the platform domestically while addressing national security concerns.",
  keywords: [
    "TikTok",
    "USDS",
    "joint venture",
    "national security",
    "ByteDance",
    "data security",
    "U.S. government",
    "social media regulation",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/tiktok/Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC',
  },
};

export default function TikTokUSDSAnnouncementPage() {
  return <NewsArticleDB slug="social-tiktok-Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC" />;
}
