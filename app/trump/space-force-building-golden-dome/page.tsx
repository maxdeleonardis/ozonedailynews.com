import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/trump/space-force-building-golden-dome';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Space Force Golden Dome | $3.2B for 12 Orbital Interceptors',
  description:
    'Space Systems Command awarded $3.2B across 20 contracts to 12 companies to build space-based interceptors for Trump\'s Golden Dome missile shield. SpaceX, Anduril, Lockheed, and Raytheon among the winners.',
  keywords: [
    'Golden Dome missile defense 2026',
    'Space Force Golden Dome contracts',
    'Space Systems Command SBI 2026',
    'space-based interceptors Golden Dome',
    'Golden Dome $3.2 billion contracts',
    'Anduril Golden Dome AI defense',
    'SpaceX Golden Dome satellite',
    'Lockheed Martin Golden Dome',
    'Raytheon kill vehicle orbital',
    'Golden Dome boost phase intercept',
    'pLEO missile defense 2026',
    'Golden Dome cost $185 billion',
    'CBO Golden Dome $542 billion estimate',
    'General Michael Guetlein Golden Dome',
    'Trump missile defense orbital 2026',
    'True Anomaly Turion Space orbital defense',
    'Golden Dome 2028 demonstration',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Space Force Awards $3.2B | 12 Companies to Build Golden Dome Orbital Interceptors',
    description:
      'SpaceX, Anduril, Lockheed, Raytheon, and 8 others share $3.2B to develop space-based missile interceptors. The CBO warns the full constellation could cost $542B.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-25T16:00:00Z',
    modifiedTime: '2026-04-25T16:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Rocket launch streaking through dark sky representing Space Force Golden Dome interceptor program' }],
    tags: ['Golden Dome', 'Space Force', 'SpaceX', 'Anduril', 'Missile Defense', 'Trump'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Force Awards $3.2B for Golden Dome Orbital Interceptors | 12 Companies',
    description:
      'SpaceX, Anduril, Lockheed, Raytheon among 12 winners. CBO says full constellation could hit $542B. First prototypes in orbit by 2028.',
    images: [OG_IMAGE],
  },
};

export default function TrumpSpaceForceGoldenDomePage() {
  return (
    <NewsArticle
      title="Space Force Awards $3.2B for Golden Dome | 12 Companies to Build Orbital Interceptors"
      subtitle="Space Systems Command awarded $3.2 billion across 20 contracts to 12 companies on April 24, launching the development phase of Trump's space-based missile shield with a 2028 demonstration target and a total program cost estimate already at $185 billion"
      category="Politics"
      categoryColor="blue"
      topicTag="politics"
      publishDate="April 25, 2026"
      readTime="6 min read"
      breaking={true}
      trending={true}
      author={{
        name: 'Jack Brennan',
        role: 'Defense Correspondent',
        authorSlug: 'jack-brennan',
      }}
      thumbnail={{
        src: OG_IMAGE,
        alt: 'Rocket launch at night representing Space Force Golden Dome orbital interceptor program',
      }}
      tags={['Golden Dome', 'Space Force', 'SpaceX', 'Anduril', 'Missile Defense', 'Trump']}
      slug="trump-space-force-building-golden-dome"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">
        <p>
          The U.S. Space Force has taken the largest single procurement step in the history of Trump's "<strong>Golden Dome</strong>" missile defense initiative, awarding <strong>$3.2 billion across 20 contracts to 12 companies</strong> to develop and demonstrate space-based interceptors (SBIs). Space Systems Command announced the awards on Friday, April 24, from its headquarters in El Segundo, California. The goal is a constellation of orbital weapons capable of destroying ballistic missiles and hypersonic glide vehicles during their earliest and most vulnerable flight phases.
        </p>

        <h2>Boost-Phase Intercept | Why Orbit Is the Advantage</h2>
        <p>
          Previous US missile defense architecture, primarily the Ground-Based Midcourse Defense system, attempts to intercept warheads during the long arc of space flight before reentry. The Golden Dome's core strategic shift is targeting missiles in <strong>boost phase</strong>, the two-to-five-minute window immediately after launch when rocket engines are burning, the vehicle is slow relative to its terminal velocity, and infrared signatures are at their brightest.
        </p>
        <p>
          By deploying interceptors in <strong>Proliferated Low-Earth Orbit (pLEO)</strong>, the Space Force aims to position kill vehicles close enough to enemy launch sites to engage missiles before they can release multiple independently targetable re-entry vehicles (MIRVs). A missile carrying 10 warheads that is destroyed in boost phase eliminates all 10 simultaneously. A missile destroyed in midcourse requires up to 10 separate intercepts. The orbital intercept math is the entire strategic case for the program.
        </p>

        <table className="w-full text-sm border-collapse border border-gray-200 my-6">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Phase of Flight</th>
              <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Description</th>
              <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Golden Dome Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2 font-medium">Boost Phase</td>
              <td className="border border-gray-200 px-3 py-2">Immediately after launch; engines hot, slow speed</td>
              <td className="border border-gray-200 px-3 py-2">Primary target — destroy before warheads separate</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2 font-medium">Midcourse</td>
              <td className="border border-gray-200 px-3 py-2">Long arc through space</td>
              <td className="border border-gray-200 px-3 py-2">Secondary — kinetic kill vehicles in orbit</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2 font-medium">Glide Phase</td>
              <td className="border border-gray-200 px-3 py-2">High-speed maneuvering phase of hypersonics</td>
              <td className="border border-gray-200 px-3 py-2">Advanced — tracking missiles that evade ground defenses</td>
            </tr>
          </tbody>
        </table>

        <h2>The 12 Contractors | Legacy Primes and New Space Disruptors</h2>
        <p>
          Space Systems Command used <strong>Other Transaction Authority (OTA) agreements</strong> to bypass traditional Federal Acquisition Regulations, a procurement mechanism that allows faster contracting with non-traditional defense vendors. The result is an unusually diverse vendor pool spanning legacy defense primes and venture-backed aerospace startups.
        </p>
        <p>
          <strong>Legacy defense</strong> winners include <strong>Lockheed Martin</strong> and <strong>Northrop Grumman</strong> for satellite architecture and existing missile defense integration, <strong>Raytheon (RTX)</strong> for the kinetic kill vehicles that physically collide with targets, and <strong>General Dynamics Mission Systems</strong> for the encrypted communications mesh linking satellites.
        </p>
        <p>
          <strong>New Space entrants</strong> include <strong>SpaceX</strong> for launch infrastructure and potentially satellite bus design, <strong>Anduril Industries</strong> applying its AI-native "Lattice" operating system to autonomous orbital targeting decisions, <strong>True Anomaly</strong> and <strong>Turion Space</strong> for orbital domain awareness and maneuvering, and <strong>Gitai USA</strong>, a Japanese-American robotics firm developing mechanical arms for orbital servicing and docking. Software, data processing, and systems integration work goes to <strong>Quindar</strong>, <strong>Sci-Tec</strong>, and <strong>Booz Allen Hamilton</strong>.
        </p>

        <h2>The Cost Escalation | $185B Now, $542B Possible</h2>
        <p>
          The $3.2 billion award represents a fraction of the program's projected total. The current official Golden Dome cost estimate stands at <strong>$185 billion</strong>, already up from $175 billion projected in early 2025. External assessments from the <strong>Congressional Budget Office</strong> and the <strong>American Enterprise Institute</strong> have warned that a fully operational, around-the-clock global constellation capable of covering all potential launch corridors could cost between <strong>$252 billion and $542 billion over 20 years</strong>.
        </p>
        <p>
          <strong>General Michael Guetlein</strong>, Director of the Golden Dome program, told Congress that the space-based intercept architecture includes an explicit affordability gate: if the pLEO constellation proves too expensive or fails to scale by the 2028 prototype demonstration, the Space Force retains "other options" to pursue for boost-phase defense. That caveat signals the program's architects are aware the cost trajectory may force structural changes before full production.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-700">
          <p>"Adversary capabilities are advancing rapidly, and our acquisition strategies must move even faster. We will demonstrate an initial capability in 2028."</p>
          <footer className="text-sm text-gray-500 mt-2 not-italic">, Col. Bryon McClain, Program Executive Officer for Space Combat Power, Space Systems Command</footer>
        </blockquote>

        <h2>What the 2028 Demonstration Determines</h2>
        <p>
          All 12 companies are now in a funded sprint toward a <strong>Summer 2028</strong> demonstration. The Space Force expects fully integrated prototypes in orbit within the next 24 months. The 2028 tests will serve as a competitive down-select: contractors that demonstrate viable intercept capability will advance to the massive production contracts required to populate the full constellation with hundreds of satellites. Those that do not will exit the program.
        </p>
        <p>
          The Golden Dome program sits at the intersection of space policy, defense procurement, and Trump's broader national security agenda. For more on that context, see <Link href="/trump" className="text-blue-600 hover:text-blue-800 underline">ObjectWire's Trump administration coverage</Link> and related reporting on <Link href="/trump/news/trump-iran-warning-pakistan-negotiations" className="text-blue-600 hover:text-blue-800 underline">Trump's Iran ceasefire and military posture</Link>. For the technology dimension, see <Link href="/nvidia" className="text-blue-600 hover:text-blue-800 underline">ObjectWire's Nvidia hub</Link> for AI chip context relevant to the orbital targeting compute stack.
        </p>
      </div>
    </NewsArticle>
  );
}
