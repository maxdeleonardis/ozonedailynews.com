import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline, TagsSection } from '@/components/NewsArticle';

const SLUG = '/apple/news/f1-apple-tv-espn-domenicali';

export const metadata: Metadata = {
  title: "F1 CEO Stefano Domenicali: Apple TV Will Surpass ESPN's U.S. Reach | ObjectWire",
  description:
    "Formula 1 CEO Stefano Domenicali says Apple TV's exclusive U.S. rights — a reported $85M/year deal replacing ESPN's 8-year tenure — will deliver greater reach than ESPN's cable-heavy model, citing Apple's 100M+ global subscribers and 2.2 billion active devices.",
  keywords: [
    'Apple TV Formula 1',
    'F1 Apple TV deal',
    'Stefano Domenicali Apple TV',
    'Formula 1 ESPN replacement',
    'Apple TV F1 2026',
    'Formula 1 US broadcast rights',
    'F1 Apple TV+ streaming',
    'ESPN Formula 1 end',
    'Domenicali Apple TV ESPN',
    'Formula 1 streaming 2026',
    'Apple TV sports rights',
    'F1 US viewership 2026',
    'Formula 1 Apple deal $85 million',
    'Apple TV F1 Melbourne 2026',
    'cord cutting Formula 1',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "F1 CEO: Apple TV Will Surpass ESPN's U.S. Reach",
    description:
      "Stefano Domenicali says Apple's streaming-first model, 100M+ subscribers, and 2.2B active devices worldwide give it structural advantages ESPN's cable network could never match.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-02-24T10:00:00Z',
    modifiedTime: '2026-02-24T10:00:00Z',
    section: 'Sports',
    tags: ['Apple TV', 'Formula 1', 'ESPN', 'Stefano Domenicali', 'Streaming Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "F1 CEO Domenicali: Apple TV Will Beat ESPN's U.S. Reach | ObjectWire",
    description:
      "The Formula 1 CEO is confident in Apple's exclusive U.S. rights deal. Here's the numbers behind why he thinks streaming beats cable.",
  },
};

const timelineEvents = [
  {
    time: '2018',
    title: 'ESPN Secures Exclusive U.S. Rights',
    description:
      'ESPN takes over Formula 1 U.S. broadcasting rights in a deal valued at approximately $90M per year. Average race viewership: 554,000.',
  },
  {
    time: '2024',
    title: 'ESPN Tenure Peaks',
    description:
      'U.S. viewership reaches approximately 45 million unique viewers across ESPN platforms for the full season. Average race: 1.1 million viewers.',
  },
  {
    time: 'Late 2025',
    title: 'Apple Signs Exclusive U.S. Deal',
    description:
      'Apple secures multi-year exclusive U.S. media rights for Formula 1, reported at approximately $85M/year — replacing ESPN from the 2026 season.',
  },
  {
    time: 'February 23, 2026',
    title: "Domenicali Makes the Case for Apple",
    description:
      'F1 CEO Stefano Domenicali publicly states Apple TV will deliver greater U.S. reach than ESPN, citing Apple\'s streaming-first model and global subscriber base.',
    highlight: true,
  },
  {
    time: 'March 7, 2026',
    title: '2026 Season Opener — Melbourne',
    description:
      "Apple TV's exclusive U.S. coverage begins at the Australian Grand Prix, Albert Park Circuit. The first full season under the new rights agreement.",
    highlight: true,
  },
];

export default function F1AppleTVESPNPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="F1 Chief Says Apple TV Will Surpass ESPN's U.S. Reach"
        description="Formula 1 CEO Stefano Domenicali states Apple TV's exclusive U.S. broadcasting deal will deliver greater reach than ESPN's 8-year tenure, citing Apple's 100M+ subscribers and streaming-first distribution model."
        author="ObjectWire Sports Desk"
        publishedTime="2026-02-24T10:00:00Z"
        modifiedTime="2026-02-24T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Sports"
        keywords={[
          'Apple TV',
          'Formula 1',
          'ESPN',
          'Stefano Domenicali',
          'F1 streaming',
          'US broadcast rights',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Apple', item: '/apple' },
              { name: 'News', item: '/apple/news' },
              { name: 'F1 Apple TV vs ESPN', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="F1 Chief Says Apple TV Will Surpass ESPN's U.S. Reach"
        subtitle="Stefano Domenicali, speaking ahead of the 2026 season opener in Melbourne, says Apple's streaming-first model and 2.2 billion active devices give it structural advantages no cable network can match."
        category="Apple"
        categoryColor="blue"
        topicTag="technology"
        publishDate="February 24, 2026"
        readTime="6 min read"
        breaking={false}
        author={{
          name: 'ObjectWire Sports Desk',
          role: 'Sports & Media Reporter',
        }}
        tags={[
          'Apple TV',
          'Formula 1',
          'ESPN',
          'Stefano Domenicali',
          'Sports Streaming',
          'F1 2026',
          'Media Rights',
          'Apple TV+',
          'Cord Cutting',
          'Melbourne GP',
        ]}
      >

        {/* Lede */}
        <p>
          <Link href="/formula-1" className="text-blue-600 font-medium hover:underline">
            Formula 1
          </Link>{' '}
          CEO <strong>Stefano Domenicali</strong> has stated publicly that{' '}
          <strong>Apple TV&apos;s exclusive U.S. broadcasting rights</strong> for the sport will
          deliver greater reach than ESPN achieved during its eight-year tenure ending in 2025. The
          declaration — made on <strong>February 23, 2026</strong>, during preparations for the{' '}
          <strong>2026 season opener</strong> at Melbourne&apos;s Albert Park Circuit on March 7 —
          signals F1&apos;s leadership is fully committed to the streaming-first future, even as it
          means leaving behind a cable network that grew the sport&apos;s U.S. audience
          substantially over the past decade.
        </p>

        <p>
          Apple secured exclusive U.S. Formula 1 media rights starting with the 2026 season through
          a reported multi-year deal valued at approximately{' '}
          <strong>$85 million per year</strong> — replacing ESPN&apos;s previous package, which had
          been valued at approximately <strong>$90 million annually</strong> when it was agreed.
          Coverage includes all 24 races in the 2026 calendar, practice sessions, qualifying, and
          ancillary programming, available exclusively through the Apple TV app and Apple TV+
          subscription tier.
        </p>

        <HighlightBox type="key-point" color="blue">
          Apple&apos;s deal includes <strong>no blackout restrictions</strong> for U.S. viewers and
          integrates Formula 1 content into Apple&apos;s broader sports ecosystem — which already
          features MLS Season Pass and MLB Friday Night Baseball.
        </HighlightBox>

        {/* ESPN Tenure */}
        <h2>ESPN&apos;s Eight-Year U.S. Tenure: What Was Built</h2>
        <p>
          ESPN held exclusive U.S. Formula 1 rights from <strong>2018 through 2025</strong> —
          a period that coincided with the sport&apos;s remarkable American resurgence. Over that
          span, driven in part by the Netflix series{' '}
          <em>Formula 1: Drive to Survive</em>, average race viewership grew from{' '}
          <strong>554,000 in 2018 to 1.1 million in 2024</strong>. Total U.S. viewership for the
          2024 season reached approximately{' '}
          <strong>45 million unique viewers</strong> across ESPN platforms, including linear TV and
          streaming.
        </p>
        <p>
          That growth gave ESPN and F1 significant leverage — but it also exposed the structural
          limitations of the cable model. U.S. cable and satellite households declined from{' '}
          <strong>83 million in 2018 to 62 million in 2025</strong>, a 25% collapse driven by
          accelerating cord-cutting. Every ESPN subscriber lost was a potential F1 viewer removed
          from the accessible audience pool, regardless of the sport&apos;s growing cultural
          resonance.
        </p>

        <HighlightBox type="stat" color="blue">
          U.S. cable/satellite households dropped from <strong>83M → 62M</strong> during ESPN&apos;s
          F1 tenure (2018–2025) — a loss of 21 million potential viewers from the accessible pool,
          purely due to cord-cutting trends.
        </HighlightBox>

        {/* Apple Deal Details */}
        <h2>The Apple TV Deal: Structure and Scale</h2>
        <p>
          Apple&apos;s agreement with{' '}
          <Link href="/formula-1" className="text-blue-600 font-medium hover:underline">
            Formula 1
          </Link>{' '}
          places all U.S. coverage behind the <strong>Apple TV+</strong> subscription tier and
          within the Apple TV app, available across iPhone, iPad, Mac, Apple TV (set-top box), and
          supported smart TVs. It follows the template Apple established with MLS Season Pass —
          exclusive streaming rights that remove the sport entirely from linear television.
        </p>
        <p>
          Apple TV+ reported over <strong>100 million subscribers worldwide</strong> as of late
          2025, with significant growth in the U.S. market. Critically, the Apple TV app itself is
          available on a far wider base of devices than the subscriber figure implies — including
          non-Apple smart TVs, Amazon Fire TV, and Roku — meaning the total accessible audience
          is substantially larger than the subscriber count alone.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="px-4 py-3 font-semibold">Metric</th>
                <th className="px-4 py-3 font-semibold">ESPN (2018–2025)</th>
                <th className="px-4 py-3 font-semibold">Apple TV (2026–)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                {
                  metric: 'Deal Value (Annual)',
                  espn: '~$90M/year',
                  apple: '~$85M/year (reported)',
                },
                {
                  metric: 'Distribution Model',
                  espn: 'Cable / satellite + ESPN+',
                  apple: 'Streaming-first (Apple TV / Apple TV+)',
                },
                {
                  metric: 'Cable Household Dependency',
                  espn: 'High (83M → 62M)',
                  apple: 'None — no cable required',
                },
                {
                  metric: 'Subscriber Base',
                  espn: '~65M U.S. TV households (2025)',
                  apple: '100M+ global Apple TV+ (2025)',
                },
                {
                  metric: 'Device Reach (potential)',
                  espn: 'Cable/satellite + ESPN app',
                  apple: '2.2B active Apple devices worldwide',
                },
                {
                  metric: 'Blackout Restrictions',
                  espn: 'Partial',
                  apple: 'None (U.S.)',
                },
                {
                  metric: 'On-Demand Access',
                  espn: 'Limited (ESPN+)',
                  apple: 'Full — immediate replay access',
                },
                {
                  metric: 'Peak U.S. Viewership',
                  espn: '1.1M avg / 45M unique (2024)',
                  apple: 'TBC — 2026 season data pending',
                },
              ].map((r) => (
                <tr key={r.metric} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900 text-xs">{r.metric}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{r.espn}</td>
                  <td className="px-4 py-3 text-blue-700 font-medium text-xs">{r.apple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Domenicali's Argument */}
        <h2>Why Domenicali Believes Apple Wins on Reach</h2>
        <p>
          Speaking ahead of the Melbourne opener,{' '}
          <Link
            href="/formula-1/stefano-domenicali"
            className="text-blue-600 font-medium hover:underline"
          >
            Domenicali
          </Link>{' '}
          cited four structural differences he expects to drive higher reach than ESPN managed:
        </p>

        <ul>
          <li>
            <strong>Streaming-first model.</strong> Eliminating the cable subscription barrier
            means any Apple device user — or any owner of a compatible smart TV — can access{' '}
            <Link href="/formula-1" className="text-blue-600 font-medium hover:underline">
              Formula 1
            </Link>{' '}
            without an existing pay-TV subscription. That removes the single largest structural
            access constraint ESPN faced.
          </li>
          <li>
            <strong>On-demand availability.</strong> Full race replays and highlights accessible
            immediately after events — essential for U.S. audiences dealing with time zone
            differences for European and Asian race weekends. An audience that couldn&apos;t watch
            live can still watch within hours.
          </li>
          <li>
            <strong>Integrated ecosystem.</strong> Push notifications, Siri integration, and
            cross-promotion across Apple services — including App Store placement and potential
            bundling with Apple One — give F1 distribution channels ESPN never had access to.
          </li>
          <li>
            <strong>Global platform scale.</strong> Apple&apos;s <strong>2.2 billion active
            devices worldwide</strong> provide an addressable audience pool that ESPN&apos;s linear
            TV footprint cannot match. Domenicali highlighted this global reach as a key advantage
            in his public comments.
          </li>
        </ul>

        <blockquote>
          Apple&apos;s global subscriber base and distribution reach are structural advantages over
          ESPN&apos;s cable-heavy model. We are confident that this partnership will reach more
          U.S. fans, and more global fans, than any previous broadcast arrangement.
          <footer>— Stefano Domenicali, February 23, 2026</footer>
        </blockquote>

        {/* Viewership Context */}
        <h2>U.S. F1 Viewership: The Numbers Apple Needs to Beat</h2>
        <p>
          Formula 1&apos;s U.S. audience grew steadily throughout the ESPN era, accelerated by the
          cultural impact of <em>Drive to Survive</em> and the arrival of American driver{' '}
          <strong>Logan Sargeant</strong> and the subsequently expanded U.S. race calendar. Average
          race viewership increased from <strong>554,000 in 2018 to 1.1 million in 2024</strong> —
          a near-doubling — while unique season viewership reached approximately{' '}
          <strong>45 million</strong> across ESPN&apos;s platforms.
        </p>
        <p>
          Apple&apos;s streaming model is expected to capture both traditional viewers and younger
          demographics who prefer on-demand and mobile viewing.{' '}
          <strong>68% of U.S. adults aged 18–34</strong> reported preference for streaming over
          linear TV in 2025 surveys — precisely the demographic{' '}
          <Link href="/formula-1" className="text-blue-600 font-medium hover:underline">
            Formula 1
          </Link>{' '}
          has been cultivating most aggressively since the Netflix era began.
        </p>

        <HighlightBox type="stat" color="blue">
          68% of U.S. adults aged 18–34 prefer streaming over linear TV (2025 survey data) —
          the exact demographic F1 has been building since <em>Drive to Survive</em> launched
          on Netflix.
        </HighlightBox>

        {/* The Counterargument */}
        <h2>The Risk: Subscriber Barriers and Discovery</h2>
        <p>
          Not everyone shares Domenicali&apos;s confidence. The central counterargument is that
          ESPN — for all its cable decline — remained a <em>default</em> destination. A cable
          subscriber scrolling through channels on race day might stumble across Formula 1. An
          Apple TV+ subscriber has to actively open the app, navigate to sports, and find the race.
          Passive discovery on cable has historically driven meaningful casual viewership that
          streaming platforms struggle to replicate.
        </p>
        <p>
          MLS Season Pass — Apple&apos;s first major exclusive sports deal — reported a mixed first
          season in 2023, with viewership figures that disappointed some club executives who had
          expected Apple&apos;s distribution scale to translate immediately into mass audiences.
          F1&apos;s existing and more deeply engaged U.S. fanbase arguably provides a stronger
          foundation — but the migration risk is real.
        </p>
        <p>
          Apple is reportedly working with{' '}
          <a
            href="https://www.msn.com/en-us/money/other/apple-tv-partners-with-everpass-media-to-bring-sports-lineup-to-bars-hotels/ar-AA1WGxo8?ocid=BingNewsSerp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Everpass Media to bring Formula 1 coverage to bars, hotels, and commercial venues
          </a>{' '}
          — the out-of-home viewing segment that has been essential to building sports audiences
          and that Apple&apos;s direct-to-consumer model would otherwise miss entirely.
        </p>

        {/* Season Context */}
        <h2>The 2026 Season: Apple&apos;s Debut Stage</h2>
        <p>
          The{' '}
          <Link href="/formula-1" className="text-blue-600 font-medium hover:underline">
            2026 Formula 1 season
          </Link>{' '}
          begins on <strong>March 7 at Albert Park, Melbourne</strong> — the Australian Grand Prix.
          Apple&apos;s exclusive U.S. coverage starts with this opener, marking the first complete
          season under the new rights agreement. The 24-race calendar spans five continents and
          retains traditional venues while introducing updated technical regulations (new power
          unit architecture, active aerodynamics) and revised sprint race formats.
        </p>
        <p>
          The year-end viewership data for 2026 will be the first true test of Domenicali&apos;s
          assertion. If Apple can grow average race audiences beyond ESPN&apos;s 1.1 million peak
          — ideally toward 1.5 million or higher — the transition will be regarded as a decisive
          strategic win for both F1 and Apple Sports. If viewership stagnates or declines, the
          critics who warned that streaming exclusivity sacrifices casual reach for subscriber
          economics will be vindicated.
        </p>

        {/* Timeline */}
        <h2>Timeline: F1 U.S. Rights from ESPN to Apple</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Closing line */}
        <HighlightBox type="quote" color="blue">
          When a tech giant with 2.2 billion devices steps into the broadcast booth, even the grid
          might need to recalibrate its audience expectations.
        </HighlightBox>

        {/* Related Coverage */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link
              href="/formula-1"
              className="text-blue-600 hover:underline font-medium"
            >
              Formula 1 — Complete Guide: 2026 Teams, Calendar &amp; History →
            </Link>
          </li>
          <li>
            <Link
              href="/formula-1/stefano-domenicali"
              className="text-blue-600 hover:underline font-medium"
            >
              Stefano Domenicali — CEO of Formula 1: Full Biography →
            </Link>
          </li>
          <li>
            <Link href="/apple" className="text-blue-600 hover:underline font-medium">
              Apple News Hub — All Apple coverage on ObjectWire →
            </Link>
          </li>
          <li>
            <Link href="/microsoft" className="text-blue-600 hover:underline font-medium">
              Microsoft &amp; Xbox — Sports streaming and media rights coverage →
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
