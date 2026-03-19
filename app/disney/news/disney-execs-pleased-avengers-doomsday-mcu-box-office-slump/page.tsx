import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/disney/news/disney-execs-pleased-avengers-doomsday-mcu-box-office-slump';
const AUTHOR_NAME = 'Alfansa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfansa';

export const metadata: Metadata = {
  title: "Disney Execs 'Pleased' With Avengers: Doomsday Amid Ongoing Marvel Box Office Slump | ObjectWire",
  description:
    "Disney executives expressed satisfaction with early footage of Avengers: Doomsday in a February 25 Variety report, while rival studio heads privately predict the film will be 2026's highest-grossing release, even as Marvel's box office has fallen sharply since its 2018-2019 peak.",
  keywords: [
    'Avengers Doomsday 2026',
    'Disney Marvel box office slump',
    'MCU box office decline',
    'Avengers Doomsday Robert Downey Jr',
    'Doctor Doom MCU',
    'Russo Brothers Avengers Doomsday',
    'The Marvels box office failure',
    'superhero fatigue box office',
    'Bob Iger Marvel quality',
    'Marvel Cinematic Universe decline',
    'Ant-Man Quantumania box office',
    'Captain America Brave New World',
    'Thunderbolts box office 2025',
    'MCU Phase 5 underperformance',
    'Avengers Doomsday budget',
    'Disney entertainment revenue 2025',
    'Marvel Disney 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Disney Execs 'Pleased' With Avengers: Doomsday as MCU Eyes Comeback From Box Office Slump",
    description:
      "Anonymous Disney insiders tell Variety the MCU's health doesn't hinge on a single film, but the ledger of recent Marvel flops tells a different story heading into December 2026.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-02-25T16:00:00Z',
    modifiedTime: '2026-02-25T16:00:00Z',
    section: 'Disney',
    tags: [
      'Disney', 'Marvel', 'Avengers Doomsday', 'MCU', 'Box Office',
      'Robert Downey Jr', 'Russo Brothers', 'Doctor Doom', 'Bob Iger',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Disney Execs 'Pleased' With Avengers: Doomsday: But the Box Office Ledger Still Keeps Score",
    description:
      'Rival studio heads privately predict Doomsday will top 2026 box office. Disney says no single MCU film defines the franchise. The numbers since 2019 say otherwise.',
  },
};

const mcuBoxOffice = [
  {
    title: 'Avengers: Infinity War',
    year: 2018,
    gross: '$2.05 billion',
    note: 'MCU peak era begins',
    color: 'border-green-500 bg-green-50',
    dot: 'bg-green-500',
  },
  {
    title: 'Avengers: Endgame',
    year: 2019,
    gross: '$2.80 billion',
    note: 'All-time 2nd highest-grossing film',
    color: 'border-green-600 bg-green-50',
    dot: 'bg-green-600',
  },
  {
    title: 'Ant-Man and the Wasp: Quantumania',
    year: 2023,
    gross: '$476 million',
    note: 'Fell short of $622M predecessor',
    color: 'border-yellow-500 bg-yellow-50',
    dot: 'bg-yellow-500',
  },
  {
    title: 'The Marvels',
    year: 2023,
    gross: '$206 million',
    note: 'Lowest-grossing MCU film to date',
    color: 'border-red-500 bg-red-50',
    dot: 'bg-red-500',
  },
  {
    title: 'Captain America: Brave New World',
    year: 2025,
    gross: '~$415 million',
    note: 'Below franchise pre-2023 averages',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
  },
  {
    title: 'Thunderbolts*',
    year: 2025,
    gross: '~$382 million',
    note: '78% RT but soft ticket sales',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
  },
];

const timelineEvents = [
  {
    time: '2018–2019',
    title: 'MCU Peak Era',
    description:
      'Avengers: Infinity War grosses $2.05 billion and Endgame reaches $2.80 billion worldwide, the franchise\'s commercial highpoint. The Infinity Saga concludes as one of the most profitable cinematic runs in history.',
  },
  {
    time: '2021–2022',
    title: 'Phase 4 & Streaming Pivot',
    description:
      'Marvel floods Disney+ with streaming series (WandaVision, Loki, Hawkeye, Moon Knight, She-Hulk). Some theatrical entries remain strong, including Spider-Man: No Way Home ($1.9B), but Phase 4 as a whole draws criticism for pacing and quality inconsistency.',
  },
  {
    time: '2023',
    title: 'The Marvels Sets a New Low',
    description:
      'The Marvels grosses just $206 million worldwide, the lowest MCU theatrical gross ever, despite following the Black Panther: Wakanda Forever franchise ($859M in 2022). Ant-Man and the Wasp: Quantumania also underperforms at $476 million.',
  },
  {
    time: 'December 2023',
    title: 'Bob Iger Acknowledges the Problem',
    description:
      'CEO Bob Iger says on an earnings call that Marvel had "lost a bit of focus," attributing the slump to quantity over quality. He announces plans to reduce output and cancel weaker projects.',
  },
  {
    time: '2025',
    title: "Marvel's Worst Annual Box Office Since 2011",
    description:
      'Captain America: Brave New World (~$415M) and Thunderbolts* (~$382M) both underperform relative to earlier MCU benchmarks. Combined Marvel theatrical gross in 2025 is the studio\'s lowest annual haul since the MCU\'s early phase.',
  },
  {
    time: 'February 25, 2026',
    title: 'Variety: Disney Pleased With Doomsday Footage',
    description:
      'A Variety report cites anonymous Disney insiders expressing satisfaction with early footage from Avengers: Doomsday and stating that the MCU\'s health "does not hinge on an individual title." Rival studio heads privately predict it will top the 2026 box office.',
  },
  {
    time: 'December 2026',
    title: 'Avengers: Doomsday Release',
    description:
      'Directed by Anthony and Joe Russo, featuring Robert Downey Jr. as Doctor Doom. Budget reported to exceed $300 million before marketing. Industry trackers project $1.5B+ worldwide if it recaptures event-movie status.',
  },
];

export default function AvengersDoomsdayDisneyBoxOfficePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Disney Execs 'Pleased' With Avengers: Doomsday Amid Ongoing Marvel Box Office Slump"
        description="Disney executives expressed satisfaction with early Avengers: Doomsday footage in a Variety report published February 25, 2026, while rival studio heads predict it will be the year's highest-grossing film, despite Marvel's prolonged box-office slide since 2019."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-02-25T16:00:00Z"
        modifiedTime="2026-02-25T16:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Disney"
        keywords={[
          'Avengers Doomsday 2026',
          'MCU box office slump',
          'Disney Marvel box office',
          'superhero fatigue',
          'Bob Iger Marvel',
          'Russo Brothers Doomsday',
          'Robert Downey Jr Doctor Doom',
          'The Marvels box office',
          'Marvel Phase 5 2025',
          'Disney entertainment 2026',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Disney', item: '/disney' },
              { name: 'News', item: '/disney/news' },
              { name: "Disney Execs Pleased With Avengers: Doomsday", item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Disney Execs 'Pleased' With Avengers: Doomsday Amid Ongoing Marvel Box Office Slump"
        subtitle="Anonymous Disney insiders tell Variety the MCU's health doesn't hinge on any single title, but Marvel's box-office ledger since 2019 tells a sharply different story."
        category="Disney"
        categoryColor="blue"
        topicTag="entertainment"
        publishDate="February 25, 2026"
        readTime="6 min read"
        breaking={false}
        author={{
          name: AUTHOR_NAME,
          role: 'Entertainment Reporter',
          authorSlug: 'alfansa',
        }}
        tags={[
          'Disney', 'Marvel', 'MCU', 'Avengers Doomsday', 'Box Office',
          'Robert Downey Jr', 'Russo Brothers', 'Doctor Doom', 'Bob Iger',
          'Superhero Fatigue', 'Film Industry',
        ]}
      >

        {/* Lede */}
        <p>
          <strong>Disney</strong> executives expressed satisfaction with early footage and production progress on{' '}
          <strong>Avengers: Doomsday</strong> in a{' '}
          <em>Variety</em> report published <strong>February 25, 2026</strong>, while simultaneously asserting
          that the{' '}
          <Link href="/disney" className="text-blue-600 font-medium hover:underline">
            Marvel Cinematic Universe
          </Link>{' '}
          does not depend on the performance of any single title. The article cited anonymous sources inside
          Disney&apos;s film division who stated that &ldquo;the health of the MCU does not hinge on an individual
          title&rdquo;, and noted that rival studio heads are privately predicting Doomsday will be the
          highest-grossing release of 2026.
        </p>
        <p>
          The film, scheduled for <strong>December 2026</strong>, arrives after several consecutive years of
          declining box-office returns for Marvel theatrical releases compared with the franchise&apos;s
          2018-2019 peak. Whether Doomsday reverses that trend, or merely confirms that the era of MCU
          dominance belongs to the Infinity Saga, is the question the industry is waiting to answer.
        </p>

        <HighlightBox type="key-point" color="blue">
          <strong>Variety</strong> (Feb. 25, 2026): Disney insiders say the studio is &ldquo;pleased&rdquo;
          with early Doomsday footage. Rival executives privately predict it tops the 2026 box office. Budget
          exceeds <strong>$300 million</strong> before marketing. Release: <strong>December 2026</strong>.
        </HighlightBox>

        {/* Box Office Slump Section */}
        <h2>The Box Office Slump in Numbers</h2>
        <p>
          Marvel theatrical releases have shown a clear downward trajectory in worldwide gross since the
          conclusion of the Infinity Saga. The contrast between the franchise&apos;s commercial ceiling
          and its recent output is stark:
        </p>

        <div className="not-prose space-y-4 my-6">
          {mcuBoxOffice.map((film, i) => (
            <div key={film.title} className={`border-l-4 ${film.color} rounded-r-xl p-5 shadow-sm`}>
              <div className="flex items-start gap-3">
                <div
                  className={`w-6 h-6 ${film.dot} rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 mt-0.5`}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-base leading-tight">
                    {film.title} ({film.year})
                  </h3>
                  <p className="text-sm font-bold text-gray-800 mt-0.5">{film.gross} worldwide</p>
                  <p className="text-sm text-gray-600 mt-0.5">{film.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p>
          Total Marvel box office in <strong>2025</strong> was the studio&apos;s lowest annual haul since
          <strong> 2011</strong>, when the MCU was still in its early phase and had yet to release{' '}
          <em>The Avengers</em>.
        </p>

        {/* Disney Leadership Section */}
        <h2>Disney Leadership on the Decline</h2>
        <p>
          <strong>Disney CEO Bob Iger</strong> addressed Marvel&apos;s underperformance in multiple public
          statements between 2023 and 2025:
        </p>
        <ul>
          <li>
            In a <strong>December 2023 earnings call</strong>, Iger said Marvel had &ldquo;lost a bit of
            focus&rdquo; and attributed part of the slump to a push for quantity over quality. He announced
            plans to reduce output and cancel weaker projects.
          </li>
          <li>
            Disney&apos;s fiscal <strong>2024 and 2025 financial reports</strong> linked increased operating
            losses in the entertainment segment to the underperformance of recent titles, particularly{' '}
            <em>The Marvels</em>, relative to franchise anchors like{' '}
            <em>Black Panther: Wakanda Forever</em> ($859 million worldwide) and non-Marvel releases like{' '}
            <em>Avatar: The Way of Water</em> ($2.32 billion worldwide).
          </li>
        </ul>

        <HighlightBox type="stat" color="orange">
          <em>The Marvels</em> (2023): <strong>$206 million</strong> worldwide, the lowest-grossing MCU
          film ever. For comparison, <em>Black Panther: Wakanda Forever</em> (2022) grossed{' '}
          <strong>$859 million</strong>. <em>Avatar: The Way of Water</em> (2022):{' '}
          <strong>$2.32 billion</strong>.
        </HighlightBox>

        {/* Audience and Creative Fatigue Section */}
        <h2>Audience and Creative Fatigue Factors</h2>
        <p>
          Multiple analysts have pointed to &ldquo;superhero fatigue&rdquo; as a structural contributor to
          the MCU&apos;s box-office decline. A <strong>2025 Harris Poll</strong> found that only{' '}
          <strong>34% of U.S. adults</strong> expressed strong interest in seeing new superhero films, down
          from <strong>52% in 2019</strong>, a drop of 18 percentage points over six years.
        </p>
        <p>
          The fatigue dynamic is particularly visible in films that received positive critical reception but
          still generated softer ticket sales than earlier MCU entries. <strong>Thunderbolts*</strong>,
          which earned a <strong>78% on Rotten Tomatoes</strong> in 2025, grossed only approximately{' '}
          <strong>$382 million worldwide</strong>, a figure that would have been considered a disappointment
          even by Phase 3 standards for ensemble Marvel films.
        </p>

        {/* Why Doomsday Matters Section */}
        <h2>Why Avengers: Doomsday Is Viewed as a Key Test</h2>
        <p>
          Industry analysts and trade publications have framed <strong>Avengers: Doomsday</strong> as a
          potential inflection point for the franchise. The film carries three distinct advantages that
          prior Phase 5 entries lacked:
        </p>
        <ul>
          <li>
            <strong>The Russo brothers return.</strong> Directors Anthony and Joe Russo helmed{' '}
            <em>Avengers: Infinity War</em> ($2.05B) and <em>Avengers: Endgame</em> ($2.80B), the two
            highest-grossing films in MCU history.
          </li>
          <li>
            <strong>Robert Downey Jr. returns.</strong> Downey reprises a Marvel role as{' '}
            <strong>Doctor Doom</strong>, a casting decision that generated significant fan and media
            attention and functions as an event-movie hook in its own right.
          </li>
          <li>
            <strong>Event-movie positioning.</strong> The December 2026 release window and $300M+ production
            budget signal Disney&apos;s intent to position Doomsday as the kind of cultural moment the MCU
            has not produced since 2019.
          </li>
        </ul>
        <p>
          Some box-office projectors estimate the film could gross over <strong>$1.5 billion worldwide</strong>{' '}
          if it recaptures the event-film audience. Others note that enthusiasm for large-scale ensemble
          superhero films has cooled substantially since the post-<em>Endgame</em> era, and that a $1.5B
          gross now requires bringing back audiences that drifted away over five years of diminishing returns.
        </p>

        <HighlightBox type="key-point" color="purple">
          Disney&apos;s internal message: &ldquo;The MCU&apos;s health does not hinge on an individual
          title.&rdquo; The <em>Doomsday</em> production budget: <strong>$300M+ before marketing</strong>.
          These two statements exist simultaneously.
        </HighlightBox>

        {/* Timeline */}
        <h2>Timeline: From Endgame to Doomsday</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Summary Table */}
        <h2>MCU Box Office at a Glance</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Film</th>
                <th className="px-4 py-3 font-semibold">Year</th>
                <th className="px-4 py-3 font-semibold">Worldwide Gross</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Avengers: Endgame</td>
                <td className="px-4 py-3 text-gray-700 text-xs">2019</td>
                <td className="px-4 py-3 font-bold text-green-600 text-xs">$2.80 billion</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Avengers: Infinity War</td>
                <td className="px-4 py-3 text-gray-700 text-xs">2018</td>
                <td className="px-4 py-3 font-bold text-green-600 text-xs">$2.05 billion</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Black Panther: Wakanda Forever</td>
                <td className="px-4 py-3 text-gray-700 text-xs">2022</td>
                <td className="px-4 py-3 font-bold text-yellow-600 text-xs">$859 million</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Ant-Man and the Wasp: Quantumania</td>
                <td className="px-4 py-3 text-gray-700 text-xs">2023</td>
                <td className="px-4 py-3 font-bold text-yellow-600 text-xs">$476 million</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Captain America: Brave New World</td>
                <td className="px-4 py-3 text-gray-700 text-xs">2025</td>
                <td className="px-4 py-3 font-bold text-orange-600 text-xs">~$415 million</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Thunderbolts*</td>
                <td className="px-4 py-3 text-gray-700 text-xs">2025</td>
                <td className="px-4 py-3 font-bold text-orange-600 text-xs">~$382 million</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">The Marvels</td>
                <td className="px-4 py-3 text-gray-700 text-xs">2023</td>
                <td className="px-4 py-3 font-bold text-red-600 text-xs">$206 million</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-4 py-3 font-black text-blue-900 text-xs">Avengers: Doomsday (projected)</td>
                <td className="px-4 py-3 text-blue-800 text-xs">Dec 2026</td>
                <td className="px-4 py-3 font-bold text-blue-700 text-xs">$1.5B+ (est. high range)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Closing Line */}
        <blockquote>
          When a trillion-dollar franchise says no single movie defines its health, the box-office ledger
          still tends to keep score.
        </blockquote>

        {/* Related Coverage */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/disney" className="text-blue-600 hover:underline font-medium">
              Disney: Full coverage hub →
            </Link>
          </li>
          <li>
            <Link href="/disney/news/incoming-ceo-floats-premiering-films-in-fortnite" className="text-blue-600 hover:underline font-medium">
              Disney&apos;s Incoming CEO Floats Premiering Films in Fortnite →
            </Link>
          </li>
          <li>
            <Link href="/entertainment" className="text-blue-600 hover:underline font-medium">
              Entertainment: Film and industry coverage →
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-blue-600 hover:underline font-medium">
              News Hub: Latest breaking coverage →
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
