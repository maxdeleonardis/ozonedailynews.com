import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/austin/waymo-city-council-bufords-ambulance-obstruction-2026';

export const metadata: Metadata = {
  title: "Austin City Council Summons Waymo After Robotaxi Blocked Ambulance at Buford's Shooting",
  description:
    "Austin City Council has formally invited Waymo to a joint Public Safety and Mobility committee hearing on April 29, 2026, after a driverless taxi",
  keywords: [
    "Waymo Austin city council 2026",
    "Buford's Backyard Beer Garden shooting Waymo",
    "Austin robotaxi ambulance obstruction March 2026",
    "Waymo blocks ambulance West 6th Street Austin",
    "Austin public safety Waymo April 29 hearing",
    "autonomous vehicle emergency response gap Austin",
    "Zo Qadri Waymo letter Austin 2026",
    "Paige Ellis geo-fencing Waymo Austin",
    "ATCEMS Waymo obstruction shooting",
    "Waymo driverless taxi Austin mass shooting",
    "self-driving car emergency vehicle detection failure",
    "Austin Waymo coordination protocol 2026",
    "Waymo robotaxi Texas regulation",
    "Alphabet Waymo Austin safety investigation",
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Austin City Council Summons Waymo After Robotaxi Blocked Ambulance at Buford's Shooting",
    description:
      "A Waymo robotaxi became stuck perpendicular across West 6th Street just as an ambulance raced to the March 1 mass shooting at Buford's Backyard Beer",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-18T10:00:00Z',
    modifiedTime: '2026-03-18T10:00:00Z',
    section: 'Technology',
    tags: [
      'Waymo', 'Austin', 'Autonomous Vehicles', 'Public Safety',
      "Buford's Backyard", 'Mass Shooting', 'ATCEMS', 'City Council',
      'Robotaxi', 'Emergency Response', 'Alphabet', 'Google',
    ],
    images: [
      {
        url: 'https://www.objectwire.org/entertainment/waymo.jpg',
        alt: "Waymo robotaxi on Austin streets",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Austin City Council Summons Waymo After Robotaxi Blocked Ambulance at Buford's Shooting",
    description:
      "Waymo will face a joint Austin City Council committee on April 29 after a driverless taxi blocked an ambulance during the Buford's Backyard Beer Garden",
  },
  other: {
    news_keywords:
      "Waymo Austin, Buford's shooting 2026, robotaxi ambulance obstruction, autonomous vehicle emergency response, Austin City Council Waymo hearing, Zo Qadri Waymo, ATCEMS Waymo, Waymo geo-fencing failure, West 6th Street Austin shooting, Alphabet Waymo safety",
  },
};

export default function WaymoAustinBufordsObstructionPage() {
  return <NewsArticleDB slug="austin-waymo-city-council-bufords-ambulance-obstruction-2026" />;
}
