import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/world-cup/news/fifa-backs-mexico-after-cartel-violence-jalisco';
const AUTHOR_NAME = 'Alfansa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfansa';

export const metadata: Metadata = {
  title: 'FIFA Backs Mexico After Jalisco Cartel Violence Raises 2026 World Cup Security Questions | ObjectWire',
  description:
    'Violence linked to the Jalisco New Generation Cartel escalated sharply following the February 22, 2026 killing of CJNG leader El Mencho, with 252+ incidents in 72 hours. FIFA has reiterated confidence in Mexico\'s hosting capacity while reviewing contingency measures for Guadalajara venues.',
  keywords: [
    'FIFA Mexico 2026 World Cup security',
    'CJNG El Mencho death World Cup',
    'Jalisco cartel violence 2026 World Cup',
    'Guadalajara World Cup 2026 security',
    'Estadio Akron FIFA 2026',
    'El Mencho killed CJNG February 2026',
    'Puerto Vallarta flight cancellations 2026',
    'FIFA confidence Mexico 2026',
    'CJNG retaliation Jalisco 2026',
    'World Cup Guadalajara security concerns',
    'Puerto Vallarta World Cup tourism',
    'Mexico World Cup contingency plans',
    'Delta American Alaska Airlines Puerto Vallarta',
    'Portugal Mexico friendly cancelled cartel',
    'FIFA World Cup 2026 Mexico safety',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'FIFA Backs Mexico After CJNG Violence Targets Jalisco, Home of a Key World Cup Host City',
    description:
      'The killing of El Mencho on February 22 triggered 252+ violent incidents across Jalisco in 72 hours. Estadio Akron in Guadalajara hosts four World Cup group-stage matches. FIFA says it has full confidence. Carriers are cancelling Puerto Vallarta flights.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-02-25T18:00:00Z',
    modifiedTime: '2026-02-25T18:00:00Z',
    section: 'World Cup',
    tags: [
      'FIFA', 'World Cup 2026', 'CJNG', 'El Mencho', 'Jalisco',
      'Guadalajara', 'Puerto Vallarta', 'Mexico Security', 'Cartel Violence',
      'Estadio Akron', 'FIFA 2026 Mexico',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA Backs Mexico as CJNG Violence Sweeps Jalisco, Home of World Cup Host Guadalajara',
    description:
      '252+ violent incidents in 72 hours after El Mencho killed. Estadio Akron hosts four group games. Puerto Vallarta flights cancelled. FIFA says it has "full confidence" — and is reviewing contingencies.',
  },
};

const timelineEvents = [
  {
    time: 'February 22, 2026',
    title: 'El Mencho Killed in Military Operation',
    description:
      'Mexican armed forces kill Nemesio "El Mencho" Oseguera Cervantes, founder and leader of the Jalisco New Generation Cartel (CJNG), in a targeted military operation in Jalisco. Mexican President Claudia Sheinbaum confirms the operation. The killing is the highest-profile cartel leadership takedown in years.',
  },
  {
    time: 'Feb 22-25, 2026',
    title: 'CJNG Launches 252+ Reprisal Incidents in 72 Hours',
    description:
      'CJNG-linked groups carry out coordinated retaliatory attacks across Jalisco and neighboring states: arson, roadblocks, vehicle burnings, and direct assaults on police and military installations. Over 252 violent incidents reported in the first 72 hours. Jalisco governor declares a security emergency across several municipalities.',
  },
  {
    time: 'February 22-24, 2026',
    title: 'Puerto Vallarta Airport Disrupted',
    description:
      'Flight cancellations and diversions hit Licenciado Gustavo Díaz Ordaz International Airport in Puerto Vallarta. Delta, American Airlines, and Alaska Airlines temporarily halt service. Thousands of tourists stranded or diverted. Puerto Vallarta drew 4.8 million visitors in 2025.',
  },
  {
    time: 'February 23-24, 2026',
    title: 'Portugal Pulls Out of Mexico Friendly',
    description:
      'The Portuguese Football Federation cancels a planned friendly match in Mexico, citing security concerns following the Jalisco violence. The cancellation draws international media attention to the overlap between narco violence and the 2026 World Cup host state.',
  },
  {
    time: 'February 25, 2026',
    title: 'FIFA Reiterates Confidence, Reviews Contingencies',
    description:
      'FIFA issues a statement expressing "full confidence" in Mexico\'s ability to host World Cup matches and games, while confirming that contingency planning reviews are underway in coordination with Mexican security authorities and the host city organizing committee.',
  },
  {
    time: 'June 2026',
    title: 'Estadio Akron Scheduled to Host Four Group-Stage Matches',
    description:
      'Estadio Akron in Guadalajara is scheduled to host four group-stage matches and potentially two round-of-32 games. The stadium has a capacity of 46,232 and sits approximately 40 km from central Guadalajara. Security protocols have not yet been publicly revised following the current unrest.',
  },
];

const securityImpacts = [
  {
    area: 'Estadio Akron / Guadalajara',
    detail: 'Four group-stage matches and potentially two round-of-32 games scheduled. FIFA reviewing contingency measures with Mexican authorities.',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
  },
  {
    area: 'Puerto Vallarta Airport',
    detail: 'Delta, American Airlines, and Alaska Airlines temporarily halted service. Flights cancelled and diverted. Puerto Vallarta is a major fan travel hub for Guadalajara matchdays.',
    color: 'border-red-500 bg-red-50',
    dot: 'bg-red-500',
  },
  {
    area: 'Road Corridors',
    detail: 'CJNG roadblocks reported on key highways linking Guadalajara and Puerto Vallarta (MX-200, MX-15 corridor). Overland travel between the two cities affected in the initial 72-hour window.',
    color: 'border-yellow-500 bg-yellow-50',
    dot: 'bg-yellow-600',
  },
  {
    area: 'International Fixtures',
    detail: 'Portugal cancelled a pre-tournament friendly in Mexico citing the security situation, signaling broader concern among national federations about travel to affected regions.',
    color: 'border-purple-500 bg-purple-50',
    dot: 'bg-purple-500',
  },
];

export default function FifaMexicoCartelViolencePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="FIFA Backs Mexico After Jalisco Cartel Violence Raises 2026 World Cup Security Questions"
        description="Violence linked to the Jalisco New Generation Cartel escalated sharply following the killing of CJNG leader El Mencho on February 22, 2026. With Guadalajara's Estadio Akron hosting four group-stage matches and Puerto Vallarta a major fan-travel hub, FIFA has issued a confidence statement while reviewing contingency measures."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-02-25T18:00:00Z"
        modifiedTime="2026-02-25T18:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="World Cup"
        keywords={[
          'FIFA Mexico 2026 World Cup security',
          'CJNG El Mencho World Cup',
          'Jalisco cartel violence World Cup',
          'Guadalajara World Cup Estadio Akron',
          'Puerto Vallarta flight cancellations 2026',
          'FIFA confidence Mexico 2026',
          'El Mencho death February 2026',
          'World Cup Mexico security concerns',
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
              { name: 'FIFA Backs Mexico After Jalisco Violence', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="FIFA Backs Mexico After Jalisco Cartel Violence Raises 2026 World Cup Security Questions"
        subtitle="The killing of CJNG leader El Mencho on February 22 triggered 252+ violent incidents across Jalisco in 72 hours, disrupting Puerto Vallarta air travel and prompting Portugal to cancel a Mexico friendly, as Guadalajara's Estadio Akron prepares to host four group-stage World Cup matches."
        category="World Cup"
        categoryColor="green"
        topicTag="sports"
        publishDate="February 25, 2026"
        readTime="6 min read"
        breaking={true}
        author={{
          name: AUTHOR_NAME,
          role: 'Sports & Security Reporter',
          authorSlug: 'alfansa',
        }}
        tags={[
          'FIFA', 'World Cup 2026', 'CJNG', 'El Mencho', 'Jalisco',
          'Guadalajara', 'Puerto Vallarta', 'Mexico', 'Cartel Violence',
          'Estadio Akron', 'Security', 'Mexico 2026',
        ]}
      >

        {/* Lede */}
        <p>
          Violence linked to the{' '}
          <strong>Jalisco New Generation Cartel (CJNG)</strong> escalated sharply across Jalisco
          state following the <strong>February 22, 2026</strong> killing of CJNG leader{' '}
          <strong>Nemesio &ldquo;El Mencho&rdquo; Oseguera Cervantes</strong> in a targeted
          Mexican military operation, with over <strong>252 violent incidents</strong> reported
          in the first 72 hours. The outbreak directly overlaps with one of Mexico&apos;s three{' '}
          <Link href="/world-cup" className="text-blue-600 font-medium hover:underline">
            2026 FIFA World Cup
          </Link>{' '}
          host states, raising questions about security readiness for tournament venues and
          international fan travel at one of the largest sporting events in history.
        </p>
        <p>
          <strong>FIFA</strong> has responded by reiterating &ldquo;full confidence&rdquo; in
          Mexico&apos;s ability to host while confirming that contingency measures are under
          active review with Mexican authorities. The Portugal football federation went further,{' '}
          <a
            href="https://www.espn.com.sg/soccer/story/_/id/48023946/portuguese-federation-mexico-friendly-cartel-violence"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            cancelling a planned friendly match in Mexico
          </a>{' '}
          citing the security situation — the first major national federation to pull out of a
          Mexico fixture due to cartel violence.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>252+ violent incidents</strong> in Jalisco in 72 hours after El Mencho&apos;s
          killing.{' '}
          <strong>Estadio Akron</strong> in Guadalajara hosts four World Cup group-stage matches.{' '}
          <strong>Puerto Vallarta</strong> flights cancelled by Delta, American, and Alaska Airlines.
          FIFA says it has &ldquo;full confidence&rdquo; while reviewing contingency measures.
        </HighlightBox>

        {/* El Mencho Killing */}
        <h2>The Killing of El Mencho and CJNG Retaliation</h2>
        <p>
          Mexican armed forces killed{' '}
          <a
            href="https://www.aljazeera.com/news/2026/2/22/mexico-announces-killing-of-drug-cartel-kingpin-el-mencho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            Nemesio &ldquo;El Mencho&rdquo; Oseguera Cervantes
          </a>{' '}
          on February 22, 2026, in a military operation in Jalisco. Mexican President{' '}
          <strong>Claudia Sheinbaum</strong> confirmed the killing, describing it as a significant
          blow to organized crime. El Mencho was the founder and operational leader of the CJNG,
          one of the most powerful and violent cartels in Mexico.
        </p>
        <p>
          The response was immediate. Within hours,{' '}
          <a
            href="https://www.latimes.com/world-nation/story/2026-02-22/mexican-army-kills-leader-of-jalisco-new-generation-cartel-official-says"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            CJNG-linked groups launched coordinated attacks
          </a>{' '}
          across Jalisco and neighboring states: arson on vehicles and commercial buildings,
          roadblocks sealing off major highways, and direct assaults on police and military
          positions. Over <strong>252 violent incidents</strong> were recorded in the first
          72 hours, with Jalisco bearing the heaviest concentration of activity.
        </p>

        {/* Impact on World Cup Venues */}
        <h2>Guadalajara&apos;s World Cup Role and Security Requirements</h2>
        <p>
          <strong>Estadio Akron</strong>, home of Club Deportivo Guadalajara (Chivas), is
          scheduled to host <strong>four group-stage matches</strong> and potentially two
          round-of-32 games during the 2026 World Cup. The stadium holds 46,232 seats and
          sits in the Zapopan municipality, approximately 40 km from Guadalajara&apos;s city
          center. It is one of three Mexican venues host to multiple tournament fixtures,
          alongside Estadio Azteca in Mexico City and Estadio BBVA in Monterrey.
        </p>
        <p>
          FIFA has confirmed it is in direct coordination with <strong>Mexican security
          authorities</strong> and the host city organizing committee, reiterating that the
          organization has &ldquo;full confidence&rdquo; in Mexico&apos;s ability to deliver
          safe and successful matches. No matches have been relocated or rescheduled as of
          publication.
        </p>

        <HighlightBox type="stat" color="blue">
          <strong>Estadio Akron</strong> capacity: 46,232. Scheduled World Cup fixtures: 4
          group-stage matches, up to 2 round-of-32 games. Distance from central Guadalajara:
          ~40 km. The stadium sits in Zapopan, Jalisco.
        </HighlightBox>

        {/* Puerto Vallarta */}
        <h2>Puerto Vallarta: Fan Travel Hub and Flight Disruptions</h2>
        <p>
          <strong>Puerto Vallarta</strong>, located in Jalisco approximately{' '}
          <strong>320 km west of Guadalajara</strong>, is a major international arrival point
          for visitors combining World Cup matches with beach travel. The city welcomed{' '}
          <strong>4.8 million visitors in 2025</strong>, with 68% arriving by air and 32% by
          road from Guadalajara. Many international fans are expected to base themselves in
          Puerto Vallarta for Guadalajara matchdays, given the availability of direct
          international flights and resort infrastructure not found at scale in Guadalajara itself.
        </p>
        <p>
          That travel corridor is currently disrupted. Carriers including{' '}
          <strong>Delta, American Airlines, and Alaska Airlines</strong> temporarily halted
          service to <strong>Licenciado Gustavo Díaz Ordaz International Airport</strong> in
          Puerto Vallarta following the outbreak of violence, citing safety protocols for crew
          and operational risk assessments. Flights were cancelled and in some cases diverted
          to Manzanillo or Mexico City.
        </p>
        <p>
          The situation has also drawn attention in the context of broader digital threats facing
          the region.{' '}
          <Link
            href="/events/news/claude-hacker-puerto-vallarta"
            className="text-blue-600 font-medium hover:underline"
          >
            A separate investigation found that a hacker used Anthropic&apos;s Claude AI to
            breach Mexican government networks in the weeks coinciding with CJNG activity
            in Jalisco
          </Link>
          , stealing 150 gigabytes of sensitive government data including 195 million records.
          The overlap of physical and digital security vulnerabilities in the same state adds
          a layer of complexity to World Cup planning.
        </p>

        {/* Security Impact Summary */}
        <h2>Security Impact Across Key Areas</h2>
        <div className="not-prose space-y-4 my-6">
          {securityImpacts.map((impact) => (
            <div
              key={impact.area}
              className={`border-l-4 ${impact.color} rounded-r-xl p-5 shadow-sm`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-6 h-6 ${impact.dot} rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 mt-0.5`}
                >
                  !
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-base leading-tight">
                    {impact.area}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">{impact.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FIFA and Broader Context */}
        <h2>FIFA&apos;s Position and the Broader Tournament Picture</h2>
        <p>
          FIFA&apos;s public stance reflects the governing body&apos;s long-standing approach to
          security crises at host nations: express confidence publicly while managing risk
          through private channels with local authorities. The organization has not disclosed
          what specific contingency measures are under review, nor whether any threshold would
          trigger venue relocation protocols.
        </p>
        <p>
          The 2026 FIFA World Cup involves <strong>104 matches</strong> across 16 host cities in
          Canada, Mexico, and the United States, with an expected <strong>6 million
          attendees</strong> and global viewership projected at <strong>5 billion</strong>.
          Mexico is hosting three of the 16 venues. The tournament opens June 11, 2026 at
          Estadio Azteca in Mexico City.
        </p>
        <p>
          The Jalisco situation also compounds an already complex security picture for the
          North American tournament.{' '}
          <Link
            href="/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown"
            className="text-blue-600 font-medium hover:underline"
          >
            U.S. host cities testified before Congress on the same day that the DHS partial
            shutdown has frozen nearly $900 million in federal security grants
          </Link>
          , with 107 days until kickoff. The security challenges are now simultaneously active
          on both sides of the border.
        </p>

        {/* Summary Table */}
        <h2>Jalisco Security Situation at a Glance</h2>
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
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">El Mencho Killed</td>
                <td className="px-4 py-3 text-gray-700 text-xs">February 22, 2026, Jalisco</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Violent Incidents (72 hrs)</td>
                <td className="px-4 py-3 font-bold text-red-600 text-xs">252+</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">World Cup Venue in Jalisco</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Estadio Akron, Guadalajara (capacity 46,232)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Fixtures at Estadio Akron</td>
                <td className="px-4 py-3 text-gray-700 text-xs">4 group-stage + up to 2 round-of-32</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Puerto Vallarta Visitors (2025)</td>
                <td className="px-4 py-3 text-gray-700 text-xs">4.8 million (68% by air, 32% by road)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Airlines Halting PVR Service</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Delta, American Airlines, Alaska Airlines</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Portugal Friendly Status</td>
                <td className="px-4 py-3 font-bold text-red-600 text-xs">Cancelled (cartel violence cited)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">FIFA Statement</td>
                <td className="px-4 py-3 text-gray-700 text-xs">"Full confidence" in Mexico; contingency review underway</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Days Until Tournament Opens</td>
                <td className="px-4 py-3 font-bold text-gray-900 text-xs">107 (June 11, 2026 at Estadio Azteca)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Total World Cup Matches</td>
                <td className="px-4 py-3 text-gray-700 text-xs">104 across 16 cities in USA, Mexico, Canada</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Timeline */}
        <h2>Timeline: El Mencho to FIFA Response</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Closing Line */}
        <blockquote>
          When the cartel leader is killed and 252 incidents follow in 72 hours, FIFA&apos;s
          statement of &ldquo;full confidence&rdquo; and the contingency review running in
          parallel are not contradictions. They are the same sentence.
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
            <Link
              href="/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown"
              className="text-blue-600 hover:underline font-medium"
            >
              U.S. Host Cities Warn of Security Funding Crisis as DHS Shutdown Freezes $900M in Grants
            </Link>
          </li>
          <li>
            <Link
              href="/events/news/claude-hacker-puerto-vallarta"
              className="text-blue-600 hover:underline font-medium"
            >
              How a Hacker Used Claude AI to Breach Mexican Government Networks Amid the Puerto Vallarta Cartel Siege
            </Link>
          </li>
          <li>
            <Link href="/world-cup/boycott-controversy" className="text-blue-600 hover:underline font-medium">
              World Cup Boycott Controversy: ICE Immigration Policies Spark Calls for Cancellation
            </Link>
          </li>
          <li>
            <a
              href="https://www.aljazeera.com/news/2026/2/22/mexico-announces-killing-of-drug-cartel-kingpin-el-mencho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Al Jazeera: Mexico Announces Killing of Drug Cartel Kingpin El Mencho
            </a>
          </li>
          <li>
            <a
              href="https://www.latimes.com/world-nation/story/2026-02-22/mexican-army-kills-leader-of-jalisco-new-generation-cartel-official-says"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              LA Times: Mexican Army Kills Leader of Jalisco New Generation Cartel
            </a>
          </li>
          <li>
            <a
              href="https://www.espn.com.sg/soccer/story/_/id/48023946/portuguese-federation-mexico-friendly-cartel-violence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              ESPN: Portuguese Federation Cancels Mexico Friendly Over Cartel Violence
            </a>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
