import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/cuba/news/cuban-border-guards-kill-four-florida-speedboat-cayo-falcones';
const AUTHOR_NAME = 'Alfansa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfansa';

export const metadata: Metadata = {
  title: 'Cuban Border Guards Kill Four in Gunfight With Florida Speedboat Near Cayo Falcones | ObjectWire',
  description:
    'Cuban border guard forces exchanged gunfire with a Florida-registered speedboat near Cayo Falcones on February 25, 2026, killing four and wounding six. The vessel, bearing registration FL7726SH, entered Cuban territorial waters in Villa Clara province.',
  keywords: [
    'Cuba Florida speedboat shooting 2026',
    'Cuban border guards kill four speedboat',
    'Cayo Falcones Florida boat gunfight',
    'FL7726SH Cuba incident',
    'Cuba Villa Clara speedboat 2026',
    'Florida Straits maritime shooting',
    'Cuban territorial waters Florida boat',
    'Cuba Interior Ministry speedboat',
    'El Pino channel Cuba incident',
    'Cuba US boat gunfight February 2026',
    'Florida Straits interdiction 2026',
    'Cuban maritime enforcement',
    'Cuba US diplomatic incident speedboat',
    'Cuba coast guard shooting',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Cuban Border Guards Kill Four in Gunfight With Florida Speedboat Near Cayo Falcones',
    description:
      'A Florida-registered speedboat entered Cuban territorial waters near Cayo Falcones on February 25, 2026. What followed was a gunfight that killed four and wounded six. Cuba has the boat and the survivors.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-02-25T18:00:00Z',
    modifiedTime: '2026-02-25T18:00:00Z',
    section: 'World',
    tags: [
      'Cuba', 'Florida', 'Maritime', 'Gunfight', 'Villa Clara',
      'Cayo Falcones', 'Florida Straits', 'U.S. Cuba Relations',
      'Border Enforcement', 'Latin America',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuban Border Guards Kill Four in Gunfight With Florida Speedboat Off Cayo Falcones',
    description:
      'Florida-registered FL7726SH entered Cuban waters near Villa Clara on February 25. Cuban border guards report an exchange of fire: four dead, six wounded, vessel seized.',
  },
};

const incidentTimeline = [
  {
    time: 'Morning, February 25, 2026',
    title: 'Speedboat Detected Near Cayo Falcones',
    description:
      'Cuban border-guard patrol vessel detects a high-speed craft bearing Florida registration FL7726SH operating approximately one nautical mile off Cayo Falcones, near the El Pino channel in Villa Clara province.',
  },
  {
    time: 'Morning, February 25, 2026',
    title: 'Intercept Attempt and Hailing',
    description:
      'The patrol vessel attempts to hail the speedboat and requests identification. Cuban authorities report no response from the boat\'s occupants and continued approach into territorial waters.',
  },
  {
    time: 'Morning, February 25, 2026',
    title: 'Gunfire Exchanged',
    description:
      'According to the Cuban Interior Ministry, occupants of the speedboat opened fire on the patrol craft. Border guards returned fire in what the ministry described as self-defense. The exchange lasted several minutes.',
  },
  {
    time: 'Morning, February 25, 2026',
    title: 'Vessel Disabled, Survivors Detained',
    description:
      'Four individuals on the speedboat were killed and six others wounded during the engagement. Cuban border guards disabled the vessel and towed it to a nearby port. Surviving occupants were taken into custody.',
  },
  {
    time: 'February 25, 2026',
    title: 'Cuba Formally Classifies Incident',
    description:
      'The Ministry of the Interior classified the engagement as an act of armed aggression against Cuban sovereignty. A formal investigation was announced. No identities of occupants were released.',
  },
  {
    time: 'February 25, 2026',
    title: 'U.S. State Department Responds',
    description:
      'The U.S. State Department confirmed receipt of the Cuban report and stated it was seeking additional information from Cuban authorities and U.S. law enforcement. No official comment on the identities or vessel purpose was issued.',
  },
];

const keyFacts = [
  { label: 'Date', value: 'February 25, 2026', color: 'text-gray-900' },
  { label: 'Location', value: '~1 nautical mile off Cayo Falcones, Villa Clara province', color: 'text-gray-900' },
  { label: 'Channel', value: 'El Pino channel, north coast Cuba', color: 'text-gray-900' },
  { label: 'Vessel Registration', value: 'FL7726SH (Florida)', color: 'text-red-600' },
  { label: 'Killed', value: '4', color: 'text-red-700' },
  { label: 'Wounded', value: '6', color: 'text-orange-600' },
  { label: 'Status of Survivors', value: 'Detained, port undisclosed', color: 'text-gray-900' },
  { label: 'U.S. Response', value: 'State Dept. seeking information, no comment on identities', color: 'text-blue-700' },
];

export default function CubaSpeedboatShootingPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Cuban Border Guards Kill Four in Gunfight With Florida Speedboat Near Cayo Falcones"
        description="Cuban border guards exchanged gunfire with a Florida-registered speedboat near Cayo Falcones on February 25, 2026, killing four and wounding six. Cuba has seized the vessel and detained the survivors. The U.S. State Department is seeking additional information."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-02-25T18:00:00Z"
        modifiedTime="2026-02-25T18:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="World"
        keywords={[
          'Cuba Florida speedboat shooting 2026',
          'Cuban border guards kill four speedboat',
          'Cayo Falcones Florida boat gunfight',
          'FL7726SH Cuba incident',
          'Florida Straits maritime shooting February 2026',
          'Cuban territorial waters Florida boat',
          'Cuba Interior Ministry speedboat',
          'Cuba US diplomatic incident boat',
          'El Pino channel Villa Clara Cuba',
          'Florida Straits interdiction maritime enforcement',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Cuba', item: '/cuba' },
              { name: 'Cuban Border Guards Kill Four in Florida Speedboat Gunfight', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Cuban Border Guards Kill Four in Gunfight With Florida Speedboat Near Cayo Falcones"
        subtitle="A Florida-registered speedboat entered Cuban territorial waters off Villa Clara province on February 25, 2026. Cuban border guards report an exchange of fire initiated by the boat's occupants. Four were killed, six wounded, and the surviving occupants are in Cuban custody."
        category="World"
        categoryColor="blue"
        topicTag="world"
        publishDate="February 25, 2026"
        readTime="6 min read"
        breaking={true}
        thumbnail={{
          src: '/news/cuba-gun-boat.jpg',
          alt: 'Cuban border guard patrol vessel in the Florida Straits',
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Finance & Markets Reporter',
          authorSlug: 'alfansa',
        }}
        tags={[
          'Cuba', 'Florida', 'Maritime', 'Gunfight', 'Villa Clara',
          'Cayo Falcones', 'Florida Straits', 'U.S. Cuba Relations',
          'Border Enforcement', 'Latin America', 'Breaking News',
        ]}
      >

        {/* Lede */}
        <p>
          Cuban authorities reported that border guard forces engaged in a gunfight with a
          Florida-registered speedboat that entered Cuban territorial waters on the morning of{' '}
          <strong>February 25, 2026</strong>, killing four of the vessel's occupants and wounding
          six others. The incident occurred approximately <strong>one nautical mile</strong> off{' '}
          <strong>Cayo Falcones</strong>, near the El Pino channel, in <strong>Villa Clara
          province</strong> on Cuba's north coast. The vessel carried the U.S. registration
          number <strong>FL7726SH</strong>.
        </p>
        <p>
          The Cuban Interior Ministry stated that a border-guard patrol vessel detected the
          speedboat operating close to Cayo Falcones and proceeded to identify it as a suspected
          illegal vessel. According to the official account, the boat's occupants opened fire on
          the patrol craft, prompting the border guards to return fire in self-defense. Cuban
          officials recovered the vessel and detained the surviving occupants.
        </p>
        <p>
          The incident was also reported by{' '}
          <a href="https://www.cbsnews.com/news/cuba-florida-speedboat-shooting/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            CBS News
          </a>
          ,{' '}
          <a href="https://www.cnn.com/2026/02/25/americas/cuba-florida-speedboat-intl-latam" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            CNN
          </a>
          , and{' '}
          <a href="https://www.bbc.com/news/articles/c24drvj8yl2o" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            BBC News
          </a>
          .
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>BREAKING:</strong> Four dead, six wounded after Cuban border guards exchanged
          gunfire with Florida-registered speedboat FL7726SH near Cayo Falcones on the morning of
          February 25, 2026. Survivors are in Cuban custody. The U.S. State Department has confirmed
          receipt of the report and is seeking additional information.
        </HighlightBox>

        {/* Key Facts */}
        <h2>Key Facts at a Glance</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Detail</th>
                <th className="px-4 py-3 font-semibold">Information</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {keyFacts.map((row) => (
                <tr key={row.label} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.label}</td>
                  <td className={`px-4 py-3 font-bold text-xs ${row.color}`}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* YouTube Embed */}
        <div className="not-prose my-6">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/TKbHk9MPj7E"
              title="Cuban Border Guards Kill Four in Gunfight With Florida Speedboat Near Cayo Falcones"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Location and Vessel */}
        <h2>Incident Location and Vessel Details</h2>
        <p>
          The encounter took place on the morning of February 25, 2026, local time in Cuba. Cuban
          authorities placed the location roughly <strong>one nautical mile off Cayo Falcones</strong>,
          a small cay in Villa Clara province along the island's north coast near the{' '}
          <strong>El Pino channel</strong>. The area falls within Cuba's claimed
          12-nautical-mile territorial sea under international law.
        </p>
        <p>
          The Florida-registered speedboat bore the hull identification number{' '}
          <strong>FL7726SH</strong>. Cuban officials described the vessel as a high-speed craft
          commonly used for maritime activities in the Florida Straits. No immediate information was
          released regarding the nationality or identity of the occupants.
        </p>

        <HighlightBox type="key-point" color="blue">
          The Florida Straits separate Cuba from the United States by approximately{' '}
          <strong>90 nautical miles</strong> at their narrowest point. The Cayo Falcones area sits
          well within Cuba's 12-nautical-mile territorial sea limit, placing the vessel squarely
          inside Cuban-claimed waters under the UN Convention on the Law of the Sea.
        </HighlightBox>

        {/* Official Cuban Account */}
        <h2>Official Cuban Account of the Engagement</h2>
        <p>
          The Ministry of the Interior reported that the border-guard vessel first attempted to hail
          the speedboat to ascertain its intentions. After receiving no response and observing
          continued approach into territorial waters, the patrol craft moved to intercept. The Cuban
          statement asserts that individuals on the speedboat <strong>initiated gunfire</strong>{' '}
          against the patrol vessel, leading to an exchange that lasted several minutes.
        </p>
        <p>
          Border guards returned fire, resulting in the reported four deaths and six injuries, the
          disabling of the speedboat, and the detention of all surviving occupants. Cuban authorities
          stated that the vessel was towed to a nearby port for investigation. The ministry classified
          the incident as an <strong>act of armed aggression against Cuban sovereignty</strong> and
          indicated that a formal investigation is underway.
        </p>
        <p>
          Cuba has not released the identities or nationalities of the boat's occupants since
          the time of publication. The port where the vessel was towed was not publicly named.
        </p>

        {/* U.S. Response */}
        <h2>U.S. Response and Diplomatic Context</h2>
        <p>
          The U.S. State Department confirmed receipt of the Cuban report but stated that it was{' '}
          <strong>seeking additional information</strong> from Cuban authorities and U.S. law
          enforcement agencies. No official U.S. comment on the identities of the individuals or the
          vessel's purpose had been issued as of February 25, 2026. The Florida registration number
          FL7726SH was not matched to any publicly named owner in State Department or Coast Guard
          statements published by that date.
        </p>
        <p>
          The incident introduces a formal diplomatic dimension to an already tense bilateral
          relationship. U.S.-Cuba relations have remained largely frozen over migration policy,
          sanctions, and political disagreements, with limited consular engagement and no direct
          mechanism for rapid information exchange on maritime incidents of this nature.
        </p>

        {/* Regional Maritime Security */}
        <h2>Regional Maritime Security Context</h2>
        <p>
          The Florida Straits remain one of the most monitored -- and most dangerous -- maritime
          corridors in the Western Hemisphere. The waterway is a primary route for undocumented
          migration attempts, drug trafficking, and law enforcement interdictions by both U.S. and
          Cuban authorities.
        </p>
        <p>
          U.S. Coast Guard statistics show <strong>7,184 Cuban migrants interdicted at sea in
          fiscal year 2025</strong>, down from 8,412 in fiscal year 2024. Cuban authorities
          reported 142 interdictions of undocumented vessels in 2025. Both countries operate
          under longstanding bilateral migration accords that technically require information
          sharing on interdicted vessels -- though the practical enforcement of those accords has
          been inconsistent.
        </p>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-red-700">7,184</div>
            <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">
              Cuban Migrants Interdicted by U.S. Coast Guard (FY 2025)
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-orange-700">8,412</div>
            <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">
              Cuban Migrants Interdicted by U.S. Coast Guard (FY 2024)
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-blue-700">142</div>
            <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">
              Cuban Vessel Interdictions by Cuban Authorities (2025)
            </div>
          </div>
        </div>

        <p>
          The purpose of the FL7726SH vessel -- whether migration, smuggling, or another activity --
          had not been officially confirmed by either government as of the time of publication. The
          high-speed profile of the craft, described by Cuban officials as consistent with vessels
          used in Florida Straits maritime operations, is common to multiple categories of
          undocumented activity in the corridor.
        </p>

        {/* Timeline */}
        <h2>Incident Timeline</h2>
        <div className="not-prose">
          <Timeline events={incidentTimeline} />
        </div>

        {/* Sources */}
        <h2>External Reporting</h2>
        <p>
          Coverage of the incident was published across multiple international outlets on February
          25, 2026:
        </p>
        <ul>
          <li>
            <a href="https://www.cbsnews.com/news/cuba-florida-speedboat-shooting/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              CBS News -- Cuba-Florida speedboat shooting
            </a>
          </li>
          <li>
            <a href="https://www.cnn.com/2026/02/25/americas/cuba-florida-speedboat-intl-latam" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              CNN -- Cuba Florida speedboat (Americas / Latin America)
            </a>
          </li>
          <li>
            <a href="https://www.bbc.com/news/articles/c24drvj8yl2o" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              BBC News -- Cuba Florida speedboat gunfight
            </a>
          </li>
        </ul>

        {/* Closing line */}
        <blockquote>
          When a Florida-registered speedboat meets Cuban territorial waters at high speed, the
          distance between international law and open water can close faster than a patrol boat
          can hail.
        </blockquote>

        {/* Related Coverage */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/news" className="text-blue-600 hover:underline font-medium">
              ObjectWire News -- Breaking and developing stories
            </Link>
          </li>
          <li>
            <Link href="/news/world/china-japan-standoff-2026" className="text-blue-600 hover:underline font-medium">
              China-Japan Maritime Standoff 2026 -- Territorial tensions in contested waters
            </Link>
          </li>
          <li>
            <Link href="/news/iran" className="text-blue-600 hover:underline font-medium">
              Iran -- Regional security and geopolitical developments
            </Link>
          </li>
          <li>
            <Link href="/news/world" className="text-blue-600 hover:underline font-medium">
              World News -- International incident coverage
            </Link>
          </li>
          <li>
            <Link href="/trump" className="text-blue-600 hover:underline font-medium">
              Trump -- U.S. foreign policy and Latin America relations
            </Link>
          </li>
          <li>
            <Link href="/events/news/claude-hacker-puerto-vallarta" className="text-blue-600 hover:underline font-medium">
              Claude Hacker Puerto Vallarta -- Cybercrime amid CJNG violence in Jalisco
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
