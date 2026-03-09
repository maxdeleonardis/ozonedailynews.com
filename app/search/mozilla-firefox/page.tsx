import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Mozilla Firefox: Open-Source Web Browser & Privacy-Focused Technology | ObjectWire",
  description: "Comprehensive overview of Mozilla Foundation, Firefox web browser, privacy-focused products, market position, and commitment to open-source software development and internet health.",
  keywords: [
    "Mozilla",
    "Firefox",
    "web browser",
    "open source",
    "privacy",
    "internet freedom",
    "nonprofit technology",
    "Gecko engine",
    "browser market share",
    "Mozilla Foundation",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/mozilla-firefox',
  },
  openGraph: {
    title: "Mozilla Firefox: Open-Source Web Browser & Privacy-Focused Technology",
    description: "Complete guide to Mozilla Foundation and Firefox browser, covering history, features, privacy focus, and market position.",
    type: "article",
    url: "https://www.objectwire.org/mozilla-firefox",
    images: [
      {
        url: "https://www.objectwire.org/images/mozilla-firefox-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mozilla Firefox browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozilla Firefox: Open-Source Web Browser",
    description: "Comprehensive overview of Mozilla Foundation and Firefox browser technology.",
    images: ["https://www.objectwire.org/images/mozilla-firefox-twitter.jpg"],
  },
};

export default function MozillaFirefoxPage() {
  return <WikiArticle slug="search-mozilla-firefox" />;
}
