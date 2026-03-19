import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG = '/microsoft/xbox/project-moorcroft-cancelled-game-pass-demos-gdc-2026';
const AUTHOR_NAME = 'Conan Boyle';
const AUTHOR_URL = 'https://www.objectwire.org/authors/conan-boyle';

export const metadata: Metadata = {
  title: "Xbox Confirms Project Moorcroft Is Dead — Demo Program Cancelled After Four Years | ObjectWire",
  description:
    "Microsoft has officially abandoned Project Moorcroft, the long-promised program that would have paid developers to create pre-release game demos for Xbox Game Pass subscribers. The confirmation came at GDC 2026, marking another Phil Spencer-era initiative that never launched.",
  keywords: [
    'Project Moorcroft cancelled Xbox 2026',
    'Xbox Project Moorcroft dead GDC 2026',
    'Xbox Game Pass demos cancelled',
    'Project Moorcroft developer paid demos',
    'Microsoft Xbox demo program abandoned',
    'Phil Spencer era cancelled Xbox programs',
    'Xbox Game Pass demo feature dead',
    'Microsoft GDC 2026 Xbox announcements',
    'Xbox Store wishlist improvements 2026',
    'Chris Richards Xbox GDC 2026',
    'Xbox demos direction changed Moorcroft',
    'Project Moorcroft four years cancelled',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Xbox Confirms Project Moorcroft Is Dead — Demo Program Cancelled After Four Years",
    description:
      "Microsoft has abandoned Project Moorcroft, the program that would have paid developers to ship pre-release demos to Game Pass subscribers. Confirmed dead at GDC 2026 — another Phil Spencer-era promise that never launched.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-18T16:00:00Z',
    modifiedTime: '2026-03-18T16:00:00Z',
    section: 'Gaming',
    tags: [
      'Xbox', 'Microsoft', 'Project Moorcroft', 'Game Pass',
      'GDC 2026', 'Gaming', 'Phil Spencer', 'Xbox Store',
    ],
    images: [
      {
        url: 'https://www.objectwire.org/entertainment/forza_horizon_6.PNG',
        alt: 'Xbox gaming',
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xbox Confirms Project Moorcroft Is Dead",
    description:
      "After four years of promises, Microsoft has abandoned Project Moorcroft — the program that would have paid devs to ship Game Pass demos. Confirmed at GDC 2026.",
  },
  other: {
    news_keywords:
      'Project Moorcroft cancelled, Xbox demo program dead, GDC 2026 Xbox, Game Pass demos, Microsoft Xbox cancelled, Phil Spencer era, Xbox Store 2026',
  },
};

// =============================================================================
// PAGE
// =============================================================================

export default function ProjectMoorcroftCancelledPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Xbox Confirms Project Moorcroft Is Dead — Demo Program Cancelled After Four Years"
        description="Microsoft has officially abandoned Project Moorcroft, the long-promised program that would have paid developers to create pre-release game demos for Xbox Game Pass subscribers. The confirmation came at GDC 2026."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-03-18T16:00:00Z"
        modifiedTime="2026-03-18T16:00:00Z"
        imageUrl="https://www.objectwire.org/entertainment/forza_horizon_6.PNG"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Gaming"
        keywords={[
          'Project Moorcroft cancelled Xbox',
          'Xbox Game Pass demos abandoned GDC 2026',
          'Microsoft demo program cancelled',
          'Phil Spencer Xbox initiatives cancelled',
          'Xbox Store improvements 2026',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Microsoft', item: '/microsoft' },
              { name: 'Xbox', item: '/microsoft/xbox' },
              { name: 'Project Moorcroft Cancelled', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Xbox Confirms Project Moorcroft Never Launching After Four Years"
        subtitle="Microsoft has quietly killed Project Moorcroft — the program that promised to pay developers to ship pre-release demos directly to Game Pass subscribers. Confirmed dead at GDC 2026. Another Phil Spencer-era initiative ends without a launch."
        category="Gaming"
        categoryColor="blue"
        topicTag="gaming"
        publishDate="March 18, 2026"
        readTime="4 min read"
        thumbnail={{
          src: '/entertainment/forza_horizon_6.PNG',
          alt: 'Xbox gaming',
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming Reporter',
          authorSlug: 'conan-boyle',
          bio: "Conan Boyle is ObjectWire's founding writer, covering gaming, technology, and emerging culture from Austin, Texas.",
        }}
        tags={[
          'Xbox', 'Microsoft', 'Project Moorcroft',
          'Game Pass', 'GDC 2026', 'Gaming',
          'Phil Spencer', 'Xbox Store', 'Demos',
        ]}
        slug="project-moorcroft-cancelled-game-pass-demos-gdc-2026"
        url={SLUG}
      >

        {/* Lede */}
        <p>
          <Link href="/microsoft/xbox" className="text-blue-600 hover:underline font-medium">
            Microsoft
          </Link>{' '}
          has abandoned <strong>Project Moorcroft</strong>, the long-promised initiative that
          would have paid game developers to create pre-release demos for{' '}
          <strong>Xbox Game Pass</strong> subscribers. The confirmation came during an interview
          at the <strong>Game Developers Conference 2026</strong>, officially closing the book on
          a program that had been in development — or at least in discussion — for four years
          without a single public launch.
        </p>
        <p>
          The cancellation marks yet another initiative from the{' '}
          <Link href="/microsoft/news/xbox-co-creator-microsoft-sunsetting-gaming-ai" className="text-blue-600 hover:underline font-medium">
            Phil Spencer era of Xbox
          </Link>{' '}
          that will not see the light of day — adding to a growing list of announced-but-undelivered
          features that defined a period of ambitious promises and cautious execution at
          Microsoft Gaming.
        </p>

        <HighlightBox type="key-point" color="blue">
          <strong>CONFIRMED AT GDC 2026:</strong> Project Moorcroft — the Xbox program designed
          to compensate developers for shipping pre-release game demos to Game Pass subscribers
          — is officially cancelled. Microsoft says its demos strategy is moving "in a slightly
          different direction."
        </HighlightBox>

        {/* What Was Project Moorcroft */}
        <h2>What Was Project Moorcroft?</h2>
        <p>
          Project Moorcroft was first announced in 2022 as part of Microsoft's strategy to
          differentiate{' '}
          <strong>Xbox Game Pass</strong> from rival subscription services. The core pitch was
          compelling: developers would be financially compensated to release time-limited
          pre-release demos — essentially playable betas — exclusively through Game Pass. The
          idea positioned Game Pass not just as a library of finished games, but as a living
          pipeline that gave subscribers early access to upcoming titles before anyone else.
        </p>
        <p>
          For independent and mid-tier developers, the financial incentive was significant.
          Demo production has traditionally been a cost center — requiring dedicated build time
          with no direct revenue return. Moorcroft attempted to flip that calculus by treating
          the demo itself as a paid deliverable. It was one of the more developer-friendly
          proposals Xbox had made in years.
        </p>
        <p>
          And then, for four years, nothing happened. No launches. No developer announcements.
          No public demos under the Moorcroft banner. The initiative drifted quietly into the
          background of{' '}
          <Link href="/microsoft" className="text-blue-600 hover:underline font-medium">
            Microsoft Gaming's
          </Link>{' '}
          strategy documents until GDC 2026, where it was confirmed dead.
        </p>

        {/* The GDC Confirmation */}
        <h2>The GDC 2026 Confirmation</h2>
        <p>
          In an interview conducted at the Game Developers Conference this week, Xbox's{' '}
          <strong>Chris Richards</strong> confirmed that the program as originally conceived
          would not be launching. When asked about the current state of demos on the platform,
          Richards pointed to a different direction entirely — improvements to infrastructure
          around the Xbox Store rather than direct developer compensation for demo content.
        </p>
        <p>
          Specifically, Richards cited work on improved <strong>wishlisting tools</strong> and{' '}
          <strong>launch notifications</strong> within the Xbox Store as the company's current
          focus for helping developers connect with players pre-launch.
        </p>
        <p>
          <em>"Demos is an area we've been focusing on, but in a slightly different direction
          to what Moorcroft was,"</em> Richards said.
        </p>
        <p>
          It is a careful pivot. The new direction acknowledges that Microsoft is still thinking
          about the discovery and pre-launch engagement problem — but the answer is now
          Store-side tooling rather than a funded demo program. Wishlists and notifications
          carry none of the operational complexity of coordinating developer agreements,
          compensating studios, and publishing time-limited builds at scale. They are also
          considerably less expensive.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>THE SHIFT:</strong> Project Moorcroft would have paid developers to ship
          playable pre-release demos to Game Pass subscribers. The replacement strategy is
          improved wishlisting and launch alerts on the Xbox Store — a significantly lighter
          lift that places the promotional burden back on developers rather than sharing it
          with Microsoft.
        </HighlightBox>

        {/* What Was Lost */}
        <h2>What Moorcroft Would Have Meant for Developers</h2>
        <p>
          The original Moorcroft structure was unusual in the games industry because it treated
          demo creation as a compensable service rather than an unpaid marketing expense. For
          small studios already stretched thin on development budgets, this distinction was
          material. Making a polished demo costs real money — content pipelines, QA passes,
          build engineering, and storefront submission work all require paid hours.
        </p>
        <p>
          The replacement — wishlisting improvements — asks developers to do their own
          discoverability work and simply gives them better tools to alert interested players
          at launch. It is useful, but it is not the same proposition. Players who wishlist a
          game already know about it. Moorcroft's demo model was designed to create discovery
          among subscribers who had no prior awareness of a title, using playable content to
          generate organic interest across the Game Pass user base.
        </p>
        <p>
          Whether Microsoft concluded that the economic model did not pencil out, that the
          operational complexity was too high, or that the anticipated demand from developers
          was lower than projected, the company did not provide a detailed explanation for
          the four-year delay followed by cancellation.
        </p>

        {/* Broader Context */}
        <h2>Another Promise Filed Away</h2>
        <p>
          Project Moorcroft joins a longer list of Xbox initiatives that generated meaningful
          press coverage and developer interest before quietly disappearing. The gaming division
          has faced sustained scrutiny over the gap between its stated direction and delivered
          products — a critique that sharpened following Phil Spencer's departure and the
          broader questions raised about{' '}
          <Link href="/microsoft/news/xbox-co-creator-microsoft-sunsetting-gaming-ai" className="text-blue-600 hover:underline font-medium">
            Microsoft's long-term commitment to gaming
          </Link>{' '}
          in the face of the company's aggressive AI pivot.
        </p>
        <p>
          At GDC this week,{' '}
          <Link href="/microsoft/xbox/asha-sharma" className="text-blue-600 hover:underline font-medium">
            new Xbox leadership under Asha Sharma
          </Link>{' '}
          has been focused on forward-looking announcements — most prominently,{' '}
          <Link href="/microsoft/news/project-helix-xbox-pc-hybrid-console" className="text-blue-600 hover:underline font-medium">
            Project Helix
          </Link>
          , the next-generation Xbox hardware that will natively run both console and PC game
          libraries. The Moorcroft cancellation was not a headline announcement — it surfaced
          in a side interview — which is itself a measure of where the initiative stood in
          Microsoft's priorities.
        </p>
        <p>
          For the developers who spent time in 2022 and 2023 anticipating Moorcroft revenue as
          part of their pre-release marketing calculus, the closure arrives without ceremony.
          The Xbox Store will eventually get better wishlisting. The funded demo era will not
          be happening.
        </p>

        {/* Related */}
        <h2>Related Xbox Coverage</h2>
        <div className="not-prose my-6">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">More on Xbox & Microsoft Gaming</p>
            </div>
            <div className="divide-y divide-gray-100">
              <Link
                href="/microsoft/news/project-helix-xbox-pc-hybrid-console"
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Hardware</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Microsoft Unveils Project Helix: Next Xbox Will Run PC and Console Games Natively
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    The next Xbox bridges console and PC — Asha Sharma confirms Project Helix at GDC 2026. — March 5, 2026
                  </p>
                </div>
              </Link>
              <Link
                href="/microsoft/news/xbox-co-creator-microsoft-sunsetting-gaming-ai"
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2" />
                <div>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">Opinion / Analysis</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Xbox Co-Creator Says Microsoft Is 'Sunsetting' Gaming for AI
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Seamus Blackley, who built the original Xbox, believes Microsoft's new gaming head was installed to manage the brand's decline. — February 23, 2026
                  </p>
                </div>
              </Link>
              <Link
                href="/microsoft/xbox/asha-sharma"
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Profile</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Asha Sharma — CVP, Xbox Experiences & Platforms
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    The new face of Microsoft Gaming — who is Asha Sharma and what is Xbox's platform strategy under her leadership?
                  </p>
                </div>
              </Link>
              <Link
                href="/microsoft/xbox"
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">Hub</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Xbox Coverage Hub — All Microsoft Gaming News
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Full ObjectWire coverage of Xbox: hardware, Game Pass, studios, deals, and the road ahead.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <TagsSection tags={[
          'Xbox', 'Microsoft', 'Project Moorcroft', 'Game Pass',
          'GDC 2026', 'Demo Program', 'Phil Spencer',
          'Xbox Store', 'Asha Sharma', 'Microsoft Gaming',
        ]} />

      </NewsArticle>
    </SEOWrapper>
  );
}
