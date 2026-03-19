import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown';
const AUTHOR_NAME = 'Alfansa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfansa';

export const metadata: Metadata = {
  title: 'U.S. 2026 World Cup Host Cities Warn of Security Funding Crisis Due to DHS Partial Shutdown | ObjectWire',
  description:
    'Security officials from all 11 U.S. host cities testified before Congress on February 25, 2026, that the DHS partial shutdown has frozen nearly $900 million in federal security grants with just 107 days until the 2026 FIFA World Cup opens.',
  keywords: [
    '2026 FIFA World Cup security funding',
    'DHS partial shutdown World Cup',
    'FEMA World Cup grants frozen',
    'World Cup host cities security crisis',
    'FIFA World Cup 2026 United States',
    'DHS shutdown 2026',
    'World Cup security funding Congress',
    'FEMA continuing resolution lapse',
    'World Cup security grants $900 million',
    'House Homeland Security Committee World Cup',
    'counter-drone World Cup security',
    'World Cup Miami Dallas Houston security',
    'World Cup Los Angeles New York security',
    'FIFA World Cup June 2026',
    '2026 World Cup host cities',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'World Cup 2026: DHS Shutdown Freezes $900M in Host-City Security Grants With 107 Days to Kickoff',
    description:
      'All 11 U.S. host cities testified before Congress that a DHS partial shutdown has frozen $625M in World Cup security grants and $500M in counter-drone funding, with kickoff 107 days away.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-02-25T16:00:00Z',
    modifiedTime: '2026-02-25T16:00:00Z',
    section: 'World Cup',
    tags: [
      'FIFA World Cup 2026', 'DHS Shutdown', 'FEMA', 'Security Funding',
      'World Cup Host Cities', 'Homeland Security', 'Congress', 'Counter-Drone',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DHS Shutdown Freezes $900M in World Cup Security Grants, 107 Days Before Kickoff',
    description:
      'Eleven U.S. host cities told Congress: nearly $900M in security funding is frozen. Staffing, cybersecurity, and counter-drone programs are stalled. The tournament opens June 11.',
  },
};

const frozenFunds = [
  {
    label: '$625 million',
    desc: 'World Cup-specific security grants for the 11 U.S. host cities, covering overtime, equipment, training, and venue hardening',
    color: 'border-red-500 bg-red-50',
    dot: 'bg-red-500',
  },
  {
    label: '$500 million',
    desc: 'Nationwide counter-drone program funding, intended to protect stadiums and fan zones from unauthorized unmanned aircraft systems',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
  },
  {
    label: '$900 million',
    desc: 'Total security-related grants currently on hold, per testimony from city and state officials before the House Homeland Security Committee',
    color: 'border-yellow-500 bg-yellow-50',
    dot: 'bg-yellow-700',
  },
];

const securityNeeds = [
  { item: 'Overtime pay for police and fire personnel' },
  { item: 'Additional emergency medical and hazardous materials teams' },
  { item: 'Background checks and credentialing for thousands of temporary workers' },
  { item: 'Cybersecurity enhancements for stadium networks and transit systems' },
  { item: 'Physical hardening of perimeters, fan zones, and public transportation hubs' },
  { item: 'Counter-drone detection and mitigation systems' },
];

const hostCities = [
  'Atlanta', 'Boston', 'Dallas', 'Houston', 'Kansas City',
  'Los Angeles', 'Miami', 'New York/New Jersey', 'Philadelphia',
  'San Francisco Bay Area', 'Seattle',
];

const timelineEvents = [
  {
    time: 'FY 2025 Appropriations',
    title: '$625M Allocated for World Cup Security',
    description:
      'The FY 2025 Homeland Security Appropriations Act allocated $625 million across 11 U.S. host cities for FIFA World Cup security, plus $500 million for counter-drone programs. Disbursement was channeled through FEMA preparedness grants.',
  },
  {
    time: 'January 20, 2026',
    title: 'DHS Partial Shutdown Begins',
    description:
      'Congress fails to pass full-year appropriations. DHS enters a partial funding lapse. FEMA limits operations to "bare minimum, life-saving activities," halting all non-essential preparedness grant disbursements including World Cup security reimbursements.',
  },
  {
    time: 'February 2026',
    title: 'Host Cities Report Stalled Contracts',
    description:
      'City officials report that final security contracts, training programs, and credentialing systems cannot be finalized without confirmed grant funding. Miami-Dade highlights Fan Fest preparations for 100,000+ daily visitors as stalled.',
  },
  {
    time: 'February 25, 2026',
    title: 'Congressional Testimony',
    description:
      'Security officials from all 11 U.S. host cities testify before the House Homeland Security Committee. Officials warn that nearly $900 million in security grants is frozen and that staffing gaps "could have catastrophic consequences if a major incident occurs."',
  },
  {
    time: '107 Days Remaining',
    title: 'Planning Deadline Window Closing',
    description:
      'Security planning timelines require final contracts and training to be locked in 90 to 120 days before events. With the tournament opening June 11, host cities are at or past the point where delays begin creating operational gaps.',
  },
  {
    time: 'June 11, 2026',
    title: 'World Cup Opens at Estadio Azteca',
    description:
      'Opening match is scheduled at Estadio Azteca in Mexico City. U.S. venues begin hosting group-stage games June 12. The tournament spans 104 matches across 16 host cities in Canada, Mexico, and the United States, with 6 million expected attendees.',
  },
];

export default function WorldCupSecurityFundingPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="U.S. 2026 World Cup Host Cities Warn of Security Funding Crisis Due to DHS Partial Shutdown"
        description="Security officials from all 11 U.S. host cities testified before the House Homeland Security Committee on February 25, 2026, that the DHS partial shutdown has frozen nearly $900 million in federal security grants with just 107 days until the tournament opens."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-02-25T16:00:00Z"
        modifiedTime="2026-02-25T16:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="World Cup"
        keywords={[
          '2026 FIFA World Cup security funding',
          'DHS partial shutdown World Cup',
          'FEMA World Cup grants frozen',
          'World Cup host cities security',
          'House Homeland Security Committee',
          'counter-drone World Cup',
          'FIFA 2026 United States',
          'World Cup security crisis',
          'DHS shutdown 2026',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'World Cup', item: '/world-cup' },
              { name: 'News', item: '/world-cup/news' },
              { name: 'Host Cities Security Funding Frozen', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="U.S. 2026 World Cup Host Cities Warn of Security Funding Crisis Due to DHS Partial Shutdown"
        subtitle="Nearly $900 million in federal security grants are frozen with 107 days until kickoff, as the DHS partial shutdown halts reimbursements for training, staffing, cybersecurity, and counter-drone programs across all 11 U.S. host cities."
        category="World Cup"
        categoryColor="green"
        topicTag="sports"
        publishDate="February 25, 2026"
        readTime="6 min read"
        breaking={true}
        heroImage={{
          src: '/world-cup/worldcup-usa-drama-strikes.jpg',
          alt: '2026 FIFA World Cup U.S. host cities security funding crisis',
          caption: 'All 11 U.S. host cities testified before Congress on February 25, 2026, that frozen DHS grants are threatening security readiness for the FIFA World Cup.',
          credit: 'ObjectWire',
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Sports & Politics Reporter',
          authorSlug: 'alfansa',
        }}
        tags={[
          'FIFA World Cup 2026', 'DHS Shutdown', 'FEMA', 'Security Funding',
          'Host Cities', 'Homeland Security', 'Congress', 'Counter-Drone',
          'World Cup USA', 'Sports Security',
        ]}
      >

        {/* Lede */}
        <p>
          Local security officials from the <strong>11 U.S. host cities</strong> for the{' '}
          <Link href="/world-cup" className="text-blue-600 font-medium hover:underline">
            2026 FIFA World Cup
          </Link>{' '}
          testified before the <strong>House Homeland Security Committee</strong> on{' '}
          <strong>February 25, 2026</strong>, that the ongoing partial shutdown of the{' '}
          <strong>Department of Homeland Security (DHS)</strong> has frozen nearly{' '}
          <strong>$900 million</strong> in promised federal security grants. The funding lapse,
          triggered by a continuing resolution impasse, has halted reimbursements and grant
          disbursements through the <strong>Federal Emergency Management Agency (FEMA)</strong>,
          leaving cities unable to fully fund training, staffing, cybersecurity, and infrastructure
          hardening with less than <strong>107 days</strong> until the tournament opens on{' '}
          <strong>June 11, 2026</strong>, in Mexico City.
        </p>
        <p>
          The 11 U.S. host cities had been allocated a combined{' '}
          <strong>$625 million</strong> in FEMA World Cup security grants under the 2024
          appropriations package. None of it is currently flowing.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>107 days</strong> until kickoff. <strong>$900 million</strong> in security
          grants frozen. <strong>11 host cities</strong> stalled on training, staffing, and
          counter-drone systems. Security planning deadlines require contracts locked in{' '}
          <strong>90 to 120 days before events.</strong>
        </HighlightBox>

        {/* Host Cities */}
        <h2>The 11 U.S. Host Cities</h2>
        <p>
          The following cities are confirmed U.S. hosts for the 2026 FIFA World Cup and are
          directly affected by the funding freeze:
        </p>
        <div className="not-prose my-4">
          <div className="flex flex-wrap gap-2">
            {hostCities.map((city) => (
              <span
                key={city}
                className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1.5 rounded-full border border-green-200"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* DHS Shutdown Section */}
        <h2>DHS Shutdown and Frozen Security Funds</h2>
        <p>
          The partial DHS funding lapse began on <strong>January 20, 2026</strong>, after Congress
          failed to pass full-year appropriations. FEMA has since limited operations to{' '}
          &ldquo;bare minimum, life-saving activities,&rdquo; which explicitly excludes disbursement
          of non-essential preparedness grants, including all World Cup security allocations.
        </p>
        <p>
          The key frozen amounts, as testified before the committee:
        </p>

        <div className="not-prose space-y-4 my-6">
          {frozenFunds.map((fund) => (
            <div key={fund.label} className={`border-l-4 ${fund.color} rounded-r-xl p-5 shadow-sm`}>
              <div className="flex items-start gap-3">
                <div
                  className={`w-7 h-7 ${fund.dot} rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 mt-0.5`}
                >
                  $
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-base leading-tight">{fund.label}</h3>
                  <p className="text-sm text-gray-700 mt-1">{fund.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p>
          These figures were appropriated in the{' '}
          <strong>FY 2025 Homeland Security Appropriations Act</strong> and allocated specifically
          for the 2026 tournament. They are fully authorized but currently inaccessible due to the
          continuing resolution impasse.
        </p>

        {/* Security Needs */}
        <h2>Security Needs Outlined by Host Cities</h2>
        <p>
          City officials testified that the frozen grants fund critical, time-sensitive elements
          of event security that cannot be financed through local budgets alone:
        </p>
        <ul>
          {securityNeeds.map((need) => (
            <li key={need.item}>{need.item}</li>
          ))}
        </ul>

        <HighlightBox type="stat" color="orange">
          Miami-Dade County officials highlighted that <strong>Fan Fest preparations</strong>,
          expected to draw <strong>100,000+ visitors daily</strong>, are stalled without
          reimbursement for temporary fencing, screening equipment, and medical staging areas.
        </HighlightBox>

        {/* Timeline Pressure */}
        <h2>Timeline Pressure: 107 Days Until Kickoff</h2>
        <p>
          The first match is scheduled for <strong>June 11, 2026</strong>, at{' '}
          <strong>Estadio Azteca</strong> in Mexico City, with U.S. venues hosting group-stage
          games starting <strong>June 12</strong>. Host cities reported that security planning
          timelines require final contracts and full training programs to be locked in{' '}
          <strong>90 to 120 days before events</strong> — leaving virtually no margin for the
          current delay to continue.
        </p>
        <p>
          Officials warned that incomplete coordination and staffing shortages could create
          significant vulnerabilities. One representative testified that the existing gaps{' '}
          &ldquo;could have catastrophic consequences if a major incident occurs.&rdquo;
        </p>

        {/* Federal Response */}
        <h2>Federal Response and Next Steps</h2>
        <p>
          <strong>DHS Secretary{' '}
          <Link href="/trump/kristi-noem" className="text-blue-600 font-medium hover:underline">
            Kristi Noem
          </Link></strong> confirmed in written testimony that
          FEMA is maintaining essential life-safety operations but cannot process grant
          reimbursements during the current funding lapse. No timeline was provided for when
          appropriations would be resolved or funds released.
        </p>
        <p>
          The <strong>2026 FIFA World Cup</strong> will involve <strong>104 matches</strong> across
          16 host cities in Canada, Mexico, and the United States, with an expected{' '}
          <strong>6 million attendees</strong> and global viewership projected at{' '}
          <strong>5 billion</strong>. It will be the largest sporting event ever held in
          North America.
        </p>

        {/* Summary Table */}
        <h2>Security Funding at a Glance</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Item</th>
                <th className="px-4 py-3 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Total Frozen Security Grants</td>
                <td className="px-4 py-3 font-bold text-red-600 text-xs">~$900 million</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">World Cup Host City Grants</td>
                <td className="px-4 py-3 font-bold text-orange-600 text-xs">$625 million</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Counter-Drone Program Funding</td>
                <td className="px-4 py-3 font-bold text-orange-600 text-xs">$500 million</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Days Until Tournament Opens</td>
                <td className="px-4 py-3 font-bold text-gray-900 text-xs">107 days (June 11, 2026)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Planning Deadline Requirement</td>
                <td className="px-4 py-3 text-gray-700 text-xs">90-120 days before events</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">U.S. Host Cities Affected</td>
                <td className="px-4 py-3 text-gray-700 text-xs">11 cities</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Total Host Cities (All Countries)</td>
                <td className="px-4 py-3 text-gray-700 text-xs">16 (USA, Canada, Mexico)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Total Matches</td>
                <td className="px-4 py-3 text-gray-700 text-xs">104</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Expected Attendees</td>
                <td className="px-4 py-3 text-gray-700 text-xs">6 million</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Projected Global Viewership</td>
                <td className="px-4 py-3 text-gray-700 text-xs">5 billion</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Legal Authority for Grants</td>
                <td className="px-4 py-3 text-gray-700 text-xs">FY 2025 Homeland Security Appropriations Act</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">DHS Lapse Start Date</td>
                <td className="px-4 py-3 text-gray-700 text-xs">January 20, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Timeline */}
        <h2>Timeline: From Appropriation to Funding Freeze</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Closing Line */}
        <blockquote>
          When nearly $900 million in security grants sits frozen 107 days before kickoff,
          the scoreboard may show goals, but the real game is keeping the funding flowing.
        </blockquote>

        {/* Related Coverage */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/world-cup" className="text-blue-600 hover:underline font-medium">
              World Cup 2026: Full coverage hub
            </Link>
          </li>
          <li>
            <Link href="/world-cup/boycott-controversy" className="text-blue-600 hover:underline font-medium">
              World Cup Boycott Controversy: ICE Immigration Policies Spark Calls for Cancellation
            </Link>
          </li>
          <li>
            <Link href="/world-cup/boycott-calls-ice-immigration" className="text-blue-600 hover:underline font-medium">
              Boycott Calls and ICE: The Immigration Debate Around World Cup 2026
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-blue-600 hover:underline font-medium">
              News Hub: Latest breaking coverage
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
