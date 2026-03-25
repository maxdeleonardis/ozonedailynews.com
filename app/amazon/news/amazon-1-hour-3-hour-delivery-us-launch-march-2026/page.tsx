import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/amazon/news/amazon-1-hour-3-hour-delivery-us-launch-march-2026';

export const metadata: Metadata = {
  title: "Amazon Launches 1-Hour and 3-Hour Delivery Across US Cities — March 17, 2026 | ObjectWire",
  description:
    "Amazon rolled out 1-hour and 3-hour delivery options for more than 90,000 products on March 17, 2026. Prime members pay $9.99 for 1-hour delivery and $4.99 for 3-hour delivery. The service is live in hundreds of metros and over 2,000 cities, challenging Walmart's same-day network.",
  keywords: [
    'Amazon 1-hour delivery launch 2026',
    'Amazon 3-hour delivery US cities March 2026',
    'Amazon same-day delivery 90000 products',
    'Amazon getitfast delivery service',
    'amazon.com/getitfast',
    'Amazon Prime 1-hour delivery $9.99',
    'Amazon vs Walmart same-day delivery 2026',
    'Amazon express delivery Prime members',
    'Amazon fast delivery 2000 cities',
    'Amazon same-day fulfillment network 2026',
    'Amazon delivery expansion March 2026',
    'Amazon pantry OTC delivery 1 hour',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Amazon Launches 1-Hour and 3-Hour Delivery Options Across US Cities",
    description:
      "Amazon rolled out 1-hour and 3-hour delivery for 90,000+ products on March 17, 2026. Prime members pay $9.99 for 1-hour, $4.99 for 3-hour. The service covers hundreds of metro markets and 2,000+ cities — a direct challenge to Walmart's same-day network.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-17T14:00:00Z',
    modifiedTime: '2026-03-17T16:00:00Z',
    section: 'Technology',
    tags: [
      'Amazon', 'Breaking News', 'Delivery', 'Same-Day', 'Prime',
      'E-Commerce', 'Walmart', 'Retail', 'Technology',
    ],
    images: [{
      url: 'https://www.objectwire.org/entertainment/christian-wiediger-rymh7EZPqRs-unsplash.jpg',
      width: 1200,
      height: 630,
      alt: 'Amazon delivery box',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amazon Launches 1-Hour Delivery Nationally — $9.99 for Prime, 90,000 Products | ObjectWire",
    description:
      "Amazon's 1-hour and 3-hour delivery is now live in hundreds of US metros. Prime: $9.99 / $4.99. Non-Prime: $19.99 / $14.99. Direct competition with Walmart's sub-1-hour store network.",
    images: ['https://www.objectwire.org/entertainment/christian-wiediger-rymh7EZPqRs-unsplash.jpg'],
  },
  other: {
    news_keywords:
      'Amazon 1-hour delivery, Amazon 3-hour delivery, Amazon same-day, Prime delivery 2026, amazon.com/getitfast, Walmart same-day, e-commerce delivery, March 2026',
  },
};

export default function Amazon1HourDeliveryPage() {
  return <NewsArticleDB slug="amazon-news-amazon-1-hour-3-hour-delivery-us-launch-march-2026" />;
}
