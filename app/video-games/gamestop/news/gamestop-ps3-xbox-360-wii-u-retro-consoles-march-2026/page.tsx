import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackStats,
  JackCallout,
  JackQuote,
} from '@/components/JackArticle';

const SLUG = '/video-games/gamestop/news/gamestop-ps3-xbox-360-wii-u-retro-consoles-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "GameStop Classifies PS3, Xbox 360, and Wii U as Retro Consoles — March 16, 2026 | ObjectWire",
  description:
    "GameStop officially designated the PlayStation 3, Xbox 360, and Nintendo Wii U as 'retro consoles' on March 16, 2026, citing component cables, the lack of Fortnite, and a joking presidential-era timestamp. The Wii U date reference is factually wrong — it launched under Obama, not Bush.",
  keywords: [
    'GameStop retro consoles PS3 Xbox 360 Wii U 2026',
    'GameStop classifies PS3 retro',
    'Xbox 360 retro console GameStop March 2026',
    'Wii U retro designation GameStop',
    'GameStop retro console category 2026',
    'PS3 retro console 2026',
    'Wii U Obama not Bush GameStop error',
    'GameStop X post retro consoles humor',
    'seventh generation consoles retro 2026',
    'GameStop trade-in retro console classification',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "GameStop Calls the PS3, Xbox 360, and Wii U 'Retro' — One Presidential Fact Is Wrong",
    description:
      "GameStop moved the PS3, Xbox 360, and Wii U into its retro console category on March 16, 2026. The official X post cited 'component cables, lack of Fortnite, and launching during Bush.' The Wii U launched in 2012 — under Obama.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-16T18:00:00Z',
    modifiedTime: '2026-03-16T18:00:00Z',
    section: 'Gaming',
    tags: ['GameStop', 'PS3', 'Xbox 360', 'Wii U', 'Retro Gaming', 'Gaming', 'Nintendo', 'Microsoft', 'Sony'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GameStop Designates PS3, Xbox 360, and Wii U as Retro Consoles | ObjectWire",
    description:
      "GameStop's retro classification criteria: component cables, no Fortnite, and a Bush-era launch. Two out of three ain't bad — the Wii U launched under Obama in 2012.",
  },
  other: {
    news_keywords:
      'GameStop retro consoles, PS3 retro, Xbox 360 retro, Wii U retro, GameStop March 2026, seventh generation retro gaming',
  },
};

// =============================================================================
// PAGE
// =============================================================================

export default function GameStopRetroConsolesPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="GameStop Classifies PS3, Xbox 360, and Wii U as Retro Consoles — March 16, 2026"
        description="GameStop officially designated the PlayStation 3, Xbox 360, and Nintendo Wii U as retro consoles on March 16, 2026. The company's X post cited component cables, no Fortnite, and a presidential-era timestamp — with one factual error on the Wii U launch date."
        author="ObjectWire Gaming Desk"
        publishedTime="2026-03-16T18:00:00Z"
        modifiedTime="2026-03-16T18:00:00Z"
        imageUrl="https://www.objectwire.org/images/gamestop-retro-og.jpg"
        articleUrl={FULL_URL}
        section="Gaming"
        keywords={[
          'GameStop retro consoles PS3 Xbox 360 Wii U',
          'Wii U Obama not Bush GameStop error',
          'seventh generation retro 2026',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'GameStop Retro Classification', item: SLUG },
            ]}
          />
        </div>
      </div>

      <JackArticle
        layout="news"
        title="GameStop Classifies PS3, Xbox 360, and Wii U as Retro Consoles — With One Presidential Fact Wrong"
        subtitle="The seventh generation is officially vintage. But GameStop's jokey rationale contains a real historical error."
        categoryLabel="Gaming"
        publishDate="March 16, 2026"
        publishDateISO="2026-03-16T18:00:00Z"
        modifiedDateISO="2026-03-16T18:00:00Z"
        readTime="3 min read"
        accentColor="red"
        author={{
          name: 'ObjectWire Gaming Desk',
        }}
        articleUrl={FULL_URL}
        description="GameStop officially designated the PlayStation 3, Xbox 360, and Nintendo Wii U as retro consoles on March 16, 2026, citing component cables, no Fortnite, and a Bush-era launch — though the Wii U launched in 2012 under Obama."
        section="Gaming"
        keywords={[
          'GameStop retro consoles', 'PS3 Xbox 360 Wii U retro',
          'seventh generation retro gaming 2026', 'GameStop trade-in classification',
        ]}
      >

        {/* ── Section 1: The Announcement ── */}
        <JackSection title="The Announcement" accentColor="red">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <Link href="/video-games" className="font-semibold text-red-600 hover:underline">GameStop</Link>{' '}
            officially moved the <strong>Sony PlayStation 3</strong>,{' '}
            <strong>Microsoft Xbox 360</strong>, and{' '}
            <strong>Nintendo Wii U</strong> into its &quot;retro console&quot; category on{' '}
            <strong>March 16, 2026</strong> — aligning them with systems like the Sega Saturn
            and Nintendo DS for trade-in, resale, and in-store display purposes.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The retailer announced the reclassification via its official X account with
            characteristic irreverence, citing three criteria:
          </p>

          <JackCaseOverview
            title="GAMESTOP'S OFFICIAL RETRO CRITERIA"
            accentColor="red"
            items={[
              { label: 'Component Cables —', value: 'Older analog video output standard common to seventh-generation consoles.' },
              { label: 'Lack of Fortnite —', value: 'No native support on PS3, Xbox 360, or Wii U, unlike current-generation platforms.' },
              { label: 'Presidential Timestamp —', value: '"The realization that they launched when George W. Bush was still president." (Partially inaccurate — see below.)' },
            ]}
          />

          <JackQuote
            quote='"Careful analysis of multiple indicators including: the presence of component cables, the lack of Fortnite, and the realization that they launched when George W. Bush was still president."'
            author="GameStop"
            title="Official X Post, March 16, 2026"
            accentColor="red"
          />
        </JackSection>

        {/* ── Section 2: The Factual Error ── */}
        <JackSection title="The Factual Error: Wii U Launched Under Obama" accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-6">
            GameStop&apos;s Bush-era framing lands cleanly for two of the three consoles —
            but falls apart for the Wii U. The Nintendo Wii U launched on{' '}
            <strong>November 18, 2012</strong>, nearly four years into Barack Obama&apos;s
            presidency. George W. Bush left office on <strong>January 20, 2009</strong>.
          </p>

          <JackStats
            title="CONSOLE LAUNCH TIMELINE"
            accentColor="red"
            stats={[
              { value: 'Nov 2005', label: 'Xbox 360 Launch (Bush)' },
              { value: 'Nov 2006', label: 'PS3 Launch (Bush)' },
              { value: 'Nov 2012', label: 'Wii U Launch (Obama)' },
              { value: '3 years', label: 'Wii U after Bush left office' },
            ]}
          />

          <p className="text-gray-700 leading-relaxed mb-6">
            The Xbox 360 (November 22, 2005) and PlayStation 3 (November 17, 2006, North
            America) both launched during Bush&apos;s second term. The Wii U arrived{' '}
            during Obama&apos;s first term, well after Bush&apos;s tenure ended. The post
            drew immediate replies pointing out the error — most of them also noting that
            this made the joke only two-thirds accurate.
          </p>

          <JackCallout label="Correction Note:" accentColor="red">
            Bush&apos;s presidency: <strong>January 20, 2001 – January 20, 2009.</strong>{' '}
            Obama&apos;s presidency: <strong>January 20, 2009 – January 20, 2017.</strong>{' '}
            The Wii U launched November 18, 2012 — <strong>3 years and 10 months</strong>{' '}
            into the Obama administration.
          </JackCallout>
        </JackSection>

        {/* ── Section 3: What "Retro" Means Practically ── */}
        <JackSection title="What the Retro Classification Means Practically" accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-6">
            GameStop&apos;s retro designation affects how the consoles are priced, displayed,
            and evaluated in trade-ins. Retro hardware is typically grouped with legacy
            platforms like the <strong>Sega Saturn</strong>, <strong>Nintendo GameCube</strong>,
            and <strong>Nintendo DS</strong> — often commanding higher trade-in values
            for complete-in-box units and lower values for loose hardware depending on
            collector demand.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For the Xbox 360 and PS3 — both of which still have active software libraries
            and functional online communities through third-party servers — the reclassification
            is largely symbolic. The Wii U, which had a smaller install base and a library
            that has largely migrated to the Nintendo Switch, gains more practical significance
            from the retro label as collector interest in its exclusive titles grows.
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
