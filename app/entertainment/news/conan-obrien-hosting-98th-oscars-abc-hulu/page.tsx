import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/entertainment/conan_obrian';

export const metadata: Metadata = {
  title: '98th Oscars Air Sunday on ABC and Hulu With Conan O\'Brien Hosting | ObjectWire',
  description:
    "The 98th Academy Awards take place Sunday, March 15, 2026 at the Dolby Theatre in Hollywood. Conan O'Brien returns as host for a second consecutive year. Watch live on ABC at 7 p.m. ET or stream on Hulu. Red carpet coverage begins at 3:30 p.m. ET.",
  keywords: [
    '98th Academy Awards',
    'Oscars 2026',
    'Conan O\'Brien Oscars host',
    'Oscars on ABC',
    'Oscars on Hulu',
    'Academy Awards March 2026',
    'Dolby Theatre Oscars',
    '98th Oscars date time',
    'Oscars red carpet 2026',
    'Conan O\'Brien host 2026',
    'watch Oscars 2026',
    'Academy Awards host',
    'Oscars ABC stream',
    'Hollywood awards 2026',
  ],
  openGraph: {
    title: '98th Oscars Air Sunday on ABC and Hulu With Conan O\'Brien Hosting',
    description:
      "The 98th Academy Awards are Sunday, March 15 at 7 p.m. ET on ABC and Hulu. Conan O'Brien hosts for the second straight year. Red carpet coverage kicks off at 3:30 p.m. ET.",
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: "Conan O'Brien hosting the 98th Academy Awards" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '98th Oscars Tonight: Conan O\'Brien Hosts on ABC and Hulu',
    description:
      "7 p.m. ET on ABC and Hulu. Red carpet at 3:30 p.m. ET. Conan O'Brien returns as host for the second consecutive year at the Dolby Theatre, Hollywood.",
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

export default function Oscars98ConanOBrienPage() {
  return <NewsArticleDB slug="entertainment-news-conan-obrien-hosting-98th-oscars-abc-hulu" />;
}
