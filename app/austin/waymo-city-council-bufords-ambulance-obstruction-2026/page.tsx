import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/austin/waymo-city-council-bufords-ambulance-obstruction-2026';
const AUTHOR_NAME = 'Jack S';
const AUTHOR_URL = 'https://www.objectwire.org/authors/jack-s';

export const metadata: Metadata = {
  title: "Austin City Council Summons Waymo After Robotaxi Blocked Ambulance at Buford's Shooting | ObjectWire",
  description:
    "Austin City Council has formally invited Waymo to a joint Public Safety and Mobility committee hearing on April 29, 2026, after a driverless taxi obstructed an ambulance during the March 1 mass shooting at Buford's Backyard Beer Garden, which killed 3 and injured up to 19.",
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
      "A Waymo robotaxi became stuck perpendicular across West 6th Street just as an ambulance raced to the March 1 mass shooting at Buford's Backyard Beer Garden. Now City Council wants answers — including why it took 30 minutes to geo-fence the area.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
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
      "Waymo will face a joint Austin City Council committee on April 29 after a driverless taxi blocked an ambulance during the Buford's Backyard Beer Garden mass shooting. 3 dead, up to 19 injured — and an AI that couldn't yield.",
  },
  other: {
    news_keywords:
      "Waymo Austin, Buford's shooting 2026, robotaxi ambulance obstruction, autonomous vehicle emergency response, Austin City Council Waymo hearing, Zo Qadri Waymo, ATCEMS Waymo, Waymo geo-fencing failure, West 6th Street Austin shooting, Alphabet Waymo safety",
  },
};

// =============================================================================
// DATA
// =============================================================================

const incidentTimeline = [
  {
    time: 'Approx. 2:00 AM — March 1, 2026',
    title: 'Shooting Begins at Buford\'s Backyard Beer Garden',
    description:
      'A mass shooting erupts at Buford\'s Backyard Beer Garden on West 6th Street, Austin. Within moments chaos spreads across the surrounding blocks. Three people are fatally shot; between 15 and 19 others are wounded.',
  },
  {
    time: 'Approx. 2:00 AM — March 1, 2026',
    title: 'Waymo Vehicle Summoned by Fleeing Passenger',
    description:
      'A passenger attempting to flee the violence summons a nearby Waymo robotaxi through the app. The vehicle — operating fully autonomously with no safety driver — responds to the request.',
  },
  {
    time: 'Approx. 2:00–2:02 AM — March 1, 2026',
    title: 'Robotaxi Becomes Stuck, Blocks West 6th Street',
    description:
      'The Waymo vehicle attempts a U-turn near the intersection of West 6th Street and Nueces St. During the maneuver, it becomes "stuck" perpendicular to traffic — fully blocking both lanes at the exact moment an ATCEMS ambulance is inbound to the scene.',
  },
  {
    time: '57 Seconds After Shooting Began',
    title: 'ATCEMS Arrives — Blocked by the Robotaxi',
    description:
      'Austin-Travis County EMS reaches the scene in a remarkable 57 seconds. The ambulance is unable to proceed through the blocked lane. First responders are forced to delay their approach.',
  },
  {
    time: 'Approx. 2:02 AM — March 1, 2026',
    title: 'Austin Police Officer Manually Drives Waymo Away',
    description:
      'An Austin Police Department officer enters the Waymo vehicle and manually drives it into a nearby parking garage, clearing the obstruction. The entire incident takes approximately two minutes.',
  },
  {
    time: 'Approx. 2:30 AM — March 1, 2026',
    title: 'Geo-Fence Order Issued — Not Implemented for ~30 Minutes',
    description:
      'Councilmember Paige Ellis reports that city officials instructed Waymo to clear all vehicles from the area shortly after the shooting began. Despite the order, Waymo\'s implementation of the geo-fence command took nearly 30 minutes.',
  },
  {
    time: 'March 2026',
    title: 'City Council Formally Invites Waymo to Committee Hearing',
    description:
      'The letter drafted by Councilmember Zo Qadri (District 9) and co-signed by four colleagues — Vela, Velásquez, Ellis, and Laine — formally invites Waymo to testify before the joint Public Safety and Mobility committee session on April 29, 2026.',
  },
];

const incidentFacts = [
  { label: 'Event Date', value: 'March 1, 2026 (approx. 2:00 AM)', color: 'text-gray-900' },
  { label: 'Location', value: 'West 6th St. near Nueces St., Austin, TX', color: 'text-gray-900' },
  { label: 'Incident', value: "Mass shooting — Buford's Backyard Beer Garden", color: 'text-red-700' },
  { label: 'Fatalities', value: '3', color: 'text-red-700' },
  { label: 'Injured', value: '15–19', color: 'text-orange-600' },
  { label: 'ATCEMS Response Time', value: '57 seconds', color: 'text-green-700' },
  { label: 'Waymo Obstruction Duration', value: 'Approx. 2 minutes (officer intervention required)', color: 'text-orange-600' },
  { label: 'Geo-Fence Delay', value: 'Approx. 30 minutes after initial city order', color: 'text-red-600' },
  { label: 'Council Signatories', value: 'Qadri, Vela, Velásquez, Ellis, Laine', color: 'text-gray-900' },
  { label: 'Committee Hearing Date', value: 'April 29, 2026', color: 'text-blue-700' },
  { label: 'Hearing Time', value: '11:00 AM – 1:00 PM', color: 'text-blue-700' },
  { label: 'Committees', value: 'Public Safety + Mobility (Joint Session)', color: 'text-gray-900' },
];

// =============================================================================
// PAGE
// =============================================================================

export default function WaymoAustinBufordsObstructionPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Austin City Council Summons Waymo After Robotaxi Blocked Ambulance at Buford's Shooting"
        description="Austin City Council has formally invited Waymo to a joint Public Safety and Mobility committee hearing on April 29, 2026, after a driverless taxi obstructed an ambulance during the March 1 mass shooting at Buford's Backyard Beer Garden."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-03-18T10:00:00Z"
        modifiedTime="2026-03-18T10:00:00Z"
        imageUrl="https://www.objectwire.org/entertainment/waymo.jpg"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Technology"
        keywords={[
          'Waymo Austin city council 2026',
          "Buford's Backyard Beer Garden shooting Waymo",
          'Austin robotaxi ambulance obstruction March 2026',
          'autonomous vehicle emergency response failure',
          'Zo Qadri Waymo Austin hearing April 2026',
          'ATCEMS Waymo obstruction shooting',
          'Waymo geo-fencing failure Austin',
          'self-driving car emergency vehicle Austin Texas',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Austin', item: '/austin' },
              { name: "Waymo Summoned Over Buford's Ambulance Obstruction", item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title={`City Council Summons Waymo Following "Buford's" Shooting Obstruction`}
        subtitle="A driverless Waymo taxi blocked an ambulance for two minutes during Austin's deadliest mass shooting of 2026. Now City Council is demanding answers — and a voluntary protocol that Texas law alone cannot force."
        category="Public Safety"
        categoryColor="red"
        topicTag="technology"
        publishDate="March 18, 2026"
        readTime="7 min read"
        breaking={true}
        thumbnail={{
          src: '/entertainment/waymo.jpg',
          alt: 'Waymo autonomous vehicle on Austin streets',
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Tech & Investigations Reporter',
          authorSlug: 'jack-s',
        }}
        tags={[
          'Waymo', 'Austin', 'Autonomous Vehicles', 'Public Safety',
          "Buford's Backyard", 'Mass Shooting', 'ATCEMS',
          'City Council', 'Robotaxi', 'Emergency Response',
          'Alphabet', 'Google', 'Texas', 'Breaking News',
        ]}
        slug="waymo-city-council-bufords-ambulance-obstruction-2026"
        url={SLUG}
      >

        {/* Lede */}
        <p>
          Tensions between the City of Austin and autonomous vehicle operators reached a boiling
          point this week as the Austin City Council formally invited{' '}
          <Link href="/google/waymo" className="text-blue-600 hover:underline font-medium">
            Waymo
          </Link>{' '}
          — the self-driving subsidiary of{' '}
          <Link href="/google" className="text-blue-600 hover:underline font-medium">
            Alphabet / Google
          </Link>{' '}
          — to a high-stakes joint committee session. The invitation follows a widely circulated
          video from the{' '}
          <strong>March 1, 2026 mass shooting at Buford's Backyard Beer Garden</strong>, which
          showed a driverless taxi obstructing an ambulance attempting to reach victims.
        </p>

        <p>
          The joint session of the{' '}
          <strong>Public Safety and Mobility committees</strong> is scheduled for{' '}
          <strong>April 29, 2026, from 11:00 AM to 1:00 PM</strong>. It represents the most direct
          public confrontation yet between Austin's elected leadership and an autonomous vehicle
          operator — and raises urgent questions about whether AI drivers can be trusted to yield to
          human life.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>THE BOTTOM LINE:</strong> A Waymo robotaxi became stuck perpendicular across West
          6th Street just as ATCEMS arrived — 57 seconds after the shooting began. An Austin Police
          officer had to physically enter the vehicle and drive it to a parking garage. It took
          roughly <strong>two minutes</strong>. That may not sound like much — but every second of
          those two minutes was a second in which an ambulance carrying trauma care could not reach
          3 fatalities and up to 19 gunshot victims.
        </HighlightBox>

        {/* Key Facts Table */}
        <h2>Incident Summary & Meeting Details</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {incidentFacts.map((row) => (
                <tr key={row.label} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.label}</td>
                  <td className={`px-4 py-3 font-bold text-xs ${row.color}`}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The Lead */}
        <h2>The Lead: "Every Second Counts"</h2>
        <p>
          The formal letter was authored by{' '}
          <strong>Councilmember Zo Qadri (District 9)</strong> and co-signed by four colleagues —
          Vela, Velásquez, Ellis, and Laine — describing the diversion of emergency personnel as{' '}
          <strong>"unacceptable."</strong> While Austin-Travis County EMS (ATCEMS) confirmed that
          the obstruction did not ultimately change patient outcomes, the Council's message is
          unmistakable: first responders should <em>never</em> have to manually move a robotaxi
          during an active shooter event.
        </p>
        <p>
          ATCEMS reached the scene in just <strong>57 seconds</strong> — an extraordinary response
          time that underscores exactly how narrow the margins are in mass casualty incidents. The
          two-minute delay caused by the Waymo obstruction, even if ultimately non-fatal, exposed a
          gap in the system that no one designed a solution for.
        </p>

        {/* The Incident */}
        <h2>What Happened on West 6th Street</h2>
        <p>
          Around <strong>2:00 AM on March 1, 2026</strong>, gunfire erupted at Buford's Backyard
          Beer Garden on West 6th Street in Austin's entertainment district. The shooting ultimately
          resulted in <strong>3 fatalities and 15–19 injuries</strong>, making it one of the city's
          deadliest bar-district mass shootings in recent memory.
        </p>
        <p>
          In the chaos that followed, a passenger attempted to flee by summoning a Waymo vehicle
          through the app. The fully autonomous taxi — operating with no safety driver — responded
          to the request and attempted a U-turn near the intersection of <strong>West 6th Street
          and Nueces St.</strong> The vehicle became "stuck" perpendicular to traffic, physically
          blocking both lanes at the exact moment an ATCEMS ambulance was arriving.
        </p>
        <p>
          An Austin Police Department officer ultimately resolved the situation by entering the
          Waymo vehicle and <strong>manually driving it into a nearby parking garage</strong> —
          clearing the lane after approximately two minutes of obstruction.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>NOTE ON OUTCOMES:</strong> ATCEMS has confirmed that the two-minute obstruction
          did not ultimately alter patient outcomes in the Buford's shooting. The Council's
          intervention is prospective — focused on preventing a scenario where the same failure
          kills someone who might have been saved.
        </HighlightBox>

        {/* Timeline */}
        <h2>Timeline of Events</h2>
        <Timeline events={incidentTimeline} />

        {/* Technical Gap */}
        <h2>The Technical Gap: Flashing Lights vs. Algorithms</h2>
        <p>
          The April 29 joint committee session will center on what Councilmembers are calling a{' '}
          <strong>"communication gap"</strong> between AI drivers and emergency signals. The
          questions break down into three areas:
        </p>

        <h3>1. Detection: Why Didn't It Yield?</h3>
        <p>
          Councilmembers are pressing Waymo for a technical explanation of why the vehicle failed
          to immediately detect and yield to the ambulance's active sirens and emergency lights.
          Autonomous vehicles from{' '}
          <Link href="/google/waymo" className="text-blue-600 hover:underline font-medium">
            Waymo
          </Link>{' '}
          are equipped with LiDAR, radar, and camera arrays that can theoretically detect emergency
          vehicles at range — but the Buford's incident suggests the vehicle's decision architecture
          did not prioritize clearance in a dynamic, chaotic street environment.
        </p>
        <p>
          This is not a new concern. Earlier in 2026,{' '}
          <Link href="/google/waymo/ntsb-investigation-school-bus-violations" className="text-blue-600 hover:underline font-medium">
            the NTSB opened a federal investigation into Waymo
          </Link>{' '}
          after its robotaxis were documented passing stopped school buses more than 20 times in
          Austin and Atlanta — suggesting that the fleet's compliance with road-safety signals is an
          active and unresolved engineering challenge.
        </p>

        <h3>2. Geo-Fencing: 30 Minutes Is Too Long</h3>
        <p>
          <strong>Councilmember Paige Ellis</strong> reported that city officials issued a
          geo-fencing command to Waymo — ordering all vehicles to evacuate the Buford's area —
          shortly after the shooting began. Despite that order, Waymo's implementation took
          approximately <strong>30 minutes</strong>. During that window, other Waymo vehicles
          continued operating in and around an active mass casualty scene.
        </p>
        <p>
          The delay raises questions about the company's emergency operations infrastructure and
          whether a real-time command pipeline to its Austin fleet actually exists in a form that
          can respond at emergency speed.
        </p>

        <h3>3. Sovereignty: Texas Law Limits City Authority</h3>
        <p>
          In Texas, autonomous vehicles are regulated primarily at the state level under{' '}
          <strong>Texas Transportation Code Chapter 545</strong>, which grants broad operating
          permissions to AVs and significantly limits municipal authority to restrict them. The
          City of Austin cannot unilaterally ban or impose operational mandates on Waymo — meaning
          the April 29 hearing is as much about <em>public pressure</em> as it is about legislation.
        </p>
        <p>
          Councilmembers are seeking a voluntary <strong>"Coordination Protocol"</strong> — an
          agreement under which Waymo would commit to faster geo-fence response times, real-time
          emergency vehicle detection improvements, and a direct communication channel with ATCEMS
          and APD during declared emergencies.
        </p>

        <HighlightBox type="key-point" color="blue">
          <strong>THE JURISDICTIONAL CHALLENGE:</strong> Texas state law preempts most municipal
          AV regulations. The Austin City Council cannot force Waymo to change its software or
          operating procedures through local ordinance alone. What it <em>can</em> do is summon
          Waymo to a public hearing, apply political pressure, and negotiate voluntary protocols
          — backed by the implicit threat of state-level lobbying if voluntary cooperation fails.
        </HighlightBox>

        {/* Waymo's Response */}
        <h2>Waymo's Response</h2>
        <p>
          <Link href="/google/waymo" className="text-blue-600 hover:underline font-medium">
            Waymo
          </Link>{' '}
          has publicly expressed "deep sadness" over the tragedy and maintained that its{' '}
          <strong>Waymo Driver</strong> platform "generally navigates interactions with emergency
          vehicles smoothly." A company spokesperson stated that{' '}
          <Link href="/google" className="text-blue-600 hover:underline font-medium">
            the Alphabet subsidiary
          </Link>{' '}
          is <em>"dedicated to learning from this situation."</em>
        </p>
        <p>
          The company also pointed to its broader safety record: Waymo vehicles in Austin have
          been documented to cause <strong>80% fewer injury-causing crashes</strong> than comparable
          human drivers — a figure the company has consistently cited in defense of its deployment.
          That aggregate figure, however, does not address the specific algorithmic failure of a
          robotaxi that couldn't clear a lane during an active shooter event.
        </p>
        <p>
          Waymo has not publicly confirmed whether it will attend the April 29 session, though
          industry observers expect the company will send representatives given the political
          stakes.
        </p>

        {/* Related Waymo Coverage */}
        <h2>Related: Waymo's Growing Safety Record Under Scrutiny</h2>
        <p>
          The Buford's incident is not the first time Waymo's Austin operations have drawn
          regulatory attention. In January 2026, the National Transportation Safety Board took the
          unprecedented step of opening a formal federal investigation into the company:
        </p>

        <div className="not-prose my-6">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Related Coverage — Waymo Safety</p>
            </div>
            <div className="divide-y divide-gray-100">
              <Link
                href="/google/waymo/ntsb-investigation-school-bus-violations"
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2" />
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">NTSB Investigation</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    NTSB Opens Investigation into Waymo Over School Bus Violations
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Federal safety board launches first-ever probe into Waymo after robotaxis illegally passed stopped school buses more than 20 times in Austin and Atlanta. — January 23, 2026
                  </p>
                </div>
              </Link>
              <Link
                href="/google/waymo"
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Waymo Hub</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Waymo: Full Coverage — Autonomous Vehicle News & Updates
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ObjectWire's full Waymo coverage hub: safety investigations, regulatory battles, fleet expansion, and the road ahead. 20+ million autonomous miles driven.
                  </p>
                </div>
              </Link>
              <Link
                href="/google"
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Alphabet / Google</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Google & Alphabet — Full Coverage Hub
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Latest news on Alphabet's business, AI investments, Waymo expansion, and regulatory challenges across the U.S.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* What to Watch */}
        <h2>What to Watch: April 29 Hearing</h2>
        <p>
          The April 29, 2026 joint committee session is a pressure point, not a resolution. Here
          is what Austin residents and industry observers should watch:
        </p>
        <ul>
          <li>
            <strong>Will Waymo commit to a geo-fence response time?</strong> The current 30-minute
            window is untenable for emergency scenarios. A binding or voluntary commitment to a
            sub-5-minute command execution would represent a meaningful safety advance.
          </li>
          <li>
            <strong>Will Waymo disclose the technical root cause of the U-turn failure?</strong>{' '}
            The Council wants to know whether this was a sensor failure, a routing algorithm
            decision, or a software edge case — and whether it has been patched.
          </li>
          <li>
            <strong>Will a Coordination Protocol be signed?</strong> A formal written agreement
            between Waymo and ATCEMS / APD establishing emergency override procedures would be the
            most tangible outcome of the hearing.
          </li>
          <li>
            <strong>Could this push state-level reform?</strong> If Austin's public pressure
            campaign generates enough attention, Texas legislators may revisit the preemptive
            framework that currently ties the city's hands.
          </li>
        </ul>

        <HighlightBox type="key-point" color="orange">
          <strong>OBJECTWIRE WILL COVER APRIL 29 LIVE.</strong> The joint Public Safety and
          Mobility committee session starts at <strong>11:00 AM CT</strong>. Follow our{' '}
          <Link href="/google/waymo" className="text-red-800 hover:underline font-semibold">
            Waymo coverage hub
          </Link>{' '}
          for updates and post-hearing analysis.
        </HighlightBox>

      </NewsArticle>
    </SEOWrapper>
  );
}
