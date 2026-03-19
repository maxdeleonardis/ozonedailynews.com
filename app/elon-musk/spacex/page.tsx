import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ProcessDiagram,
  ArticleQuote,
} from '@/components/DynamicNewsArticle';

// ============================================================
// METADATA - Optimized SEO tags at the top for easy editing
// ============================================================
export const metadata: Metadata = {
  title: 'SpaceX - Space Exploration Technologies Corp. Company Profile | ObjectWire',
  description: 'Complete profile of SpaceX, American aerospace manufacturer and space transportation company founded by Elon Musk. History, Starship development, Starlink satellite internet, Falcon rockets, and Mars colonization mission.',
  keywords: [
    'SpaceX',
    'Space Exploration Technologies',
    'Elon Musk',
    'Starship',
    'Falcon 9',
    'Starlink',
    'Dragon capsule',
    'Mars colonization',
    'reusable rockets',
    'aerospace company',
    'Hawthorne California',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/elon-musk/spacex',
  },
  openGraph: {
    title: 'SpaceX - Space Exploration Technologies Corp. Company Profile',
    description: 'American aerospace manufacturer revolutionizing space technology with reusable rockets, Starship development, and Starlink satellite internet.',
    type: 'article',
    url: 'https://www.objectwire.org/elon-musk/spacex',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpaceX - Company Profile',
    description: 'Complete guide to SpaceX aerospace company and Mars mission.',
  },
};

export default function SpaceXPage() {
  return (
    <>
      <NewsArticleSchema
        title="SpaceX - Space Exploration Technologies Corp. Company Profile"
        description="Complete profile of SpaceX, American aerospace manufacturer and space transportation company revolutionizing access to space."
        author="ObjectWire Technology Desk"
        authorUrl="https://objectwire.org/team"
        publishedTime="2024-06-10T00:00:00Z"
        modifiedTime="2026-01-31T11:00:00Z"
        articleUrl="https://objectwire.org/elon-musk/spacex"
        section="Technology"
        keywords={['SpaceX', 'aerospace', 'Elon Musk', 'Starship', 'space exploration']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/elon-musk', label: 'Elon Musk' },
        ]}
        categories={[
          { label: 'COMPANY PROFILE', color: 'blue' },
          { label: 'AEROSPACE', color: 'purple' },
        ]}
        readTime="22 min read"
        title="SpaceX"
        subtitle="Space Exploration Technologies Corp. — American aerospace manufacturer and space transportation company founded by Elon Musk in 2002, pioneering reusable rocket technology and developing Starship for Mars colonization"
        author={{
          name: 'ObjectWire Technology Desk',
          department: 'Company Profiles & Analysis',
          initials: 'OW',
        }}
        publishDate="June 10, 2024"
        updatedDate="January 31, 2026"
        relatedArticles={[
          {
            href: '/elon-musk',
            category: 'PROFILE',
            categoryColor: 'text-purple-600',
            title: 'Elon Musk - Biography and Companies',
          },
          {
            href: '/news',
            category: 'AEROSPACE NEWS',
            categoryColor: 'text-blue-600',
            title: 'Latest Space Technology Coverage',
          },
        ]}
        timeline={[
          { date: 'May 6, 2002', description: 'SpaceX founded by Elon Musk', highlight: true },
          { date: 'September 28, 2008', description: 'Falcon 1 becomes first privately-funded liquid-fuel rocket to reach orbit' },
          { date: 'December 2010', description: 'Dragon becomes first private spacecraft to return from orbit' },
          { date: 'December 22, 2015', description: 'Falcon 9 first stage successfully lands after orbital launch', highlight: true },
          { date: 'May 30, 2020', description: 'Crew Dragon Demo-2 launches NASA astronauts to ISS - first private crewed spaceflight', highlight: true },
          { date: 'October 2024', description: 'Starship Flight 5 achieves booster catch with "chopsticks"', highlight: true },
          { date: 'January 2026', description: 'Starlink surpasses 5 million subscribers globally' },
        ]}
        documents={[
          {
            href: 'https://www.spacex.com/',
            label: 'SpaceX Official Website',
            icon: '🚀',
          },
          {
            href: 'https://www.spacex.com/vehicles/starship/',
            label: 'Starship Program',
            icon: '🛸',
          },
          {
            href: 'https://www.starlink.com/',
            label: 'Starlink Satellite Internet',
            icon: '🛰️',
          },
        ]}
        sources={[
          {
            number: 1,
            url: 'https://www.spacex.com/',
            title: 'SpaceX Official Website',
            description: 'Official company information and launch updates',
          },
          {
            number: 2,
            url: 'https://www.nasa.gov/',
            title: 'NASA',
            description: 'NASA partnership and contract information',
          },
          {
            number: 3,
            url: 'https://www.sec.gov/',
            title: 'U.S. Securities and Exchange Commission',
            description: 'Financial disclosures for public funding rounds',
          },
        ]}
        showCorrections={true}
        showEditorialStandards={true}
      >
        <CaseOverview
          title="COMPANY OVERVIEW"
          color="blue"
          items={[
            { label: 'Founded:', value: 'May 6, 2002' },
            { label: 'Headquarters:', value: 'Hawthorne, California' },
            { label: 'CEO:', value: 'Elon Musk (Founder & CEO)' },
            { label: 'Employees:', value: '~13,000 (2025)' },
            { label: 'Valuation:', value: '$180 billion (2024 funding)' },
            { label: 'Revenue:', value: '$9+ billion (2024 est.)' },
          ]}
        />

        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          <strong>Space Exploration Technologies Corp.</strong> (SpaceX) is an American aerospace manufacturer and space transportation company headquartered in Hawthorne, California. Founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars, SpaceX has revolutionized the aerospace industry through the development of reusable rocket technology.
        </p>

        <p>
          SpaceX operates the Falcon 9 and Falcon Heavy launch vehicles, the Dragon cargo and crew spacecraft, and is developing Starship, a fully reusable super heavy-lift launch system. The company also operates Starlink, the world's largest satellite constellation providing global broadband internet service. SpaceX is the primary launch provider for NASA's Commercial Crew Program and holds billions of dollars in contracts with NASA, the U.S. Department of Defense, and commercial satellite operators.
        </p>

        <StatisticsBox
          title="KEY ACHIEVEMENTS"
          color="blue"
          stats={[
            { value: '300+', label: 'Successful Launches' },
            { value: '250+', label: 'Booster Landings' },
            { value: '5,000+', label: 'Starlink Satellites' },
            { value: '40+', label: 'Dragon Missions' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Company History
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Founding and Early Years (2002-2008)</h3>

        <p>
          Elon Musk founded SpaceX in May 2002 after selling PayPal to eBay, investing $100 million of his personal fortune into the venture. Musk's vision was to make life multiplanetary by establishing a self-sustaining city on Mars, starting with dramatically reducing the cost of space access through reusable rocket technology.
        </p>

        <p>
          The company's first vehicle, Falcon 1, was a small expendable launch system designed to demonstrate low-cost access to space. After three failed launch attempts between 2006 and 2008 that nearly bankrupted the company, Falcon 1 successfully reached orbit on September 28, 2008, becoming the first privately-funded liquid-fuel rocket to achieve orbital flight.
        </p>

        <ArticleQuote
          title="Elon Musk on SpaceX's Fourth Launch (2008)"
          quote="The fourth launch was a make-or-break situation. If that launch had failed, SpaceX would have been dead. I had put in all the money I could, the company was out of money, and we wouldn't have been able to mount another launch. It was that close."
        />

        <h3 className="text-xl font-bold mt-6 mb-3">NASA Partnerships and Dragon Development (2008-2015)</h3>

        <p>
          In December 2008, NASA awarded SpaceX a $1.6 billion Commercial Resupply Services contract to deliver cargo to the International Space Station, providing crucial revenue and validation. SpaceX developed the Dragon spacecraft, which became the first commercial spacecraft to deliver cargo to the ISS in May 2012.
        </p>

        <p>
          Simultaneously, SpaceX developed Falcon 9, a medium-lift launch vehicle that first flew in June 2010. The Falcon 9's design incorporated reusability from the beginning, with grid fins, landing legs, and engines capable of relighting for powered descent. In December 2015, SpaceX achieved a historic milestone when a Falcon 9 first stage successfully landed vertically after delivering satellites to orbit—the first orbital-class rocket booster recovery.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Reusability Revolution (2015-2020)</h3>

        <p>
          The successful landing of orbital-class boosters transformed SpaceX's business model. By 2017, SpaceX was reflying boosters, demonstrating that reusable rockets could dramatically reduce launch costs. The company's advertised launch price of $62 million for Falcon 9 (versus $90+ million for competitors) enabled SpaceX to capture the majority of the commercial launch market.
        </p>

        <p>
          In February 2018, SpaceX launched Falcon Heavy, the world's most powerful operational rocket, capable of lifting 64 metric tons to low Earth orbit. The dramatic demonstration flight included landing two side boosters simultaneously and launching Musk's personal Tesla Roadster toward Mars orbit.
        </p>

        <p>
          SpaceX also developed Crew Dragon, a human-rated version of Dragon, under NASA's Commercial Crew Program. After successful uncrewed tests, Crew Dragon Demo-2 launched NASA astronauts Bob Behnken and Doug Hurley to the ISS on May 30, 2020—the first crewed orbital spaceflight by a private company and the first crewed launch from U.S. soil since 2011.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Starlink and Starship Development (2019-Present)</h3>

        <p>
          In 2019, SpaceX began deploying Starlink, a satellite constellation designed to provide global broadband internet service. By January 2026, SpaceX had launched over 5,000 Starlink satellites and served more than 5 million subscribers across 70+ countries, generating billions in annual revenue to fund Starship development.
        </p>

        <p>
          Starship, SpaceX's fully reusable super heavy-lift launch system, entered development in 2019 at a dedicated facility in Boca Chica, Texas. The system consists of a Super Heavy booster and Starship upper stage, both powered by Raptor engines burning liquid methane and oxygen. Designed to carry 100+ tons to orbit and 100+ passengers to Mars, Starship represents Musk's ultimate goal of making humanity multiplanetary.
        </p>

        <p>
          After numerous prototype tests, Starship completed its first integrated flight test in April 2023. Subsequent test flights progressively demonstrated capabilities, with Flight 5 in October 2024 achieving the spectacular "chopsticks" catch of the Super Heavy booster by the launch tower—a critical milestone for rapid reusability.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Launch Vehicles and Spacecraft
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Falcon 9</h3>

        <p>
          <strong>Specifications:</strong> Falcon 9 is a two-stage medium-lift launch vehicle with a reusable first stage. The rocket stands 70 meters tall, has a diameter of 3.7 meters, and uses nine Merlin 1D engines on the first stage producing 7,607 kN of thrust at liftoff. The second stage uses a single vacuum-optimized Merlin engine.
        </p>

        <p>
          <strong>Capabilities:</strong> Falcon 9 can deliver 22,800 kg to low Earth orbit (LEO) and 8,300 kg to geostationary transfer orbit (GTO) in expendable mode. With first-stage recovery, these capacities reduce to approximately 17,400 kg to LEO. The rocket has launched Crew Dragon, Dragon cargo missions, Starlink satellites, commercial satellites, and government payloads.
        </p>

        <p>
          <strong>Reusability:</strong> SpaceX has landed Falcon 9 first stages over 250 times, with individual boosters reflying 15+ times. Reusability reduces per-launch costs significantly, with refurbished boosters requiring only fuel, minor refurbishment, and payload integration between flights.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Falcon Heavy</h3>

        <p>
          Falcon Heavy consists of a Falcon 9 second stage and three Falcon 9 first-stage cores—a central core and two side boosters. With 27 Merlin engines firing at liftoff, Falcon Heavy generates over 22,819 kN of thrust, making it the most powerful operational rocket in the world (until Starship becomes operational).
        </p>

        <p>
          The vehicle can deliver 63,800 kg to LEO or 26,700 kg to GTO in fully expendable mode. With side booster recovery, GTO capacity is approximately 8,000 kg—sufficient for large communications satellites. Falcon Heavy has launched national security payloads, NASA science missions, and commercial satellites.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Dragon Spacecraft</h3>

        <p>
          <strong>Cargo Dragon:</strong> The current Cargo Dragon 2 can deliver 6,000 kg of pressurized and unpressurized cargo to the ISS and return 3,000 kg to Earth. The spacecraft autonomously docks with the ISS and splashes down in the ocean for recovery and refurbishment. SpaceX has completed 30+ cargo missions for NASA under Commercial Resupply Services contracts.
        </p>

        <p>
          <strong>Crew Dragon:</strong> NASA-certified for human spaceflight, Crew Dragon can carry up to seven passengers to LEO, though typical ISS missions carry four astronauts. The spacecraft features an integrated launch escape system, touchscreen controls, and life support for multi-day missions. Crew Dragon has launched 10+ crewed missions for NASA, Axiom Space, and SpaceX's private Inspiration4 and Polaris Dawn missions.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Starship</h3>

        <p>
          Starship is SpaceX's next-generation fully reusable super heavy-lift launch system designed for Earth orbit, lunar, and Mars missions. The system consists of two stages:
        </p>

        <p>
          <strong>Super Heavy Booster:</strong> The first stage stands 69 meters tall, has a diameter of 9 meters, and uses 33 Raptor engines producing approximately 74,000 kN of thrust—roughly double Saturn V. After stage separation, the booster performs a boostback burn and returns to the launch site for catch by the launch tower's mechanical arms (nicknamed "chopsticks").
        </p>

        <p>
          <strong>Starship Upper Stage:</strong> The second stage/spacecraft stands 50 meters tall and uses six Raptor engines (three sea-level, three vacuum-optimized). Starship can carry 100-150 tons to LEO, 100+ passengers, or serve as a lunar lander, tanker, or cargo vessel. The vehicle is designed for full and rapid reusability with in-space refueling capability.
        </p>

        <p>
          <strong>Development Status (January 2026):</strong> Starship has completed six integrated flight tests with progressive success. Flight 5 in October 2024 achieved booster catch, and Flight 6 in January 2025 demonstrated Starship reentry and precision landing. SpaceX projects orbital refueling demonstrations in 2026 and crewed lunar landing for NASA's Artemis III mission in 2027-2028 timeframe.
        </p>

        <ProcessDiagram
          title="Starship Development Milestones"
          steps={[
            { title: 'Prototype Tests', description: 'SN8-SN15 suborbital tests (2020-2021)' },
            { title: 'Integrated Flight 1', description: 'April 2023 - Vehicle destroyed after separation' },
            { title: 'Integrated Flight 2', description: 'November 2023 - Hot staging success, upper stage lost' },
            { title: 'Integrated Flight 3', description: 'March 2024 - Achieved orbital velocity, controlled reentry' },
            { title: 'Integrated Flight 5', description: 'October 2024 - Booster catch success' },
            { title: 'Orbital Refueling', description: '2026 target - Critical for lunar/Mars missions' },
            { title: 'Artemis III Lunar Landing', description: '2027-2028 - NASA crewed Moon landing' },
          ]}
          color="purple"
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Starlink Satellite Internet
        </h2>

        <p>
          Starlink is SpaceX's satellite internet constellation designed to provide global high-speed broadband coverage. The system addresses the lack of internet access in rural and remote areas while generating substantial revenue to fund Starship development.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Constellation Architecture</h3>

        <p>
          As of January 2026, SpaceX has launched over 5,000 Starlink satellites into low Earth orbit (LEO) at altitudes between 340-550 km. The satellites operate in multiple orbital shells providing redundant coverage. Each satellite weighs approximately 260 kg, features a flat-panel design with krypton-powered ion thrusters for orbit maintenance, and includes autonomous collision avoidance.
        </p>

        <p>
          SpaceX launches 40-60 Starlink satellites per Falcon 9 mission, with launch cadence approaching one mission per week. The company has regulatory approval for up to 12,000 satellites in the initial constellation, with applications pending for an additional 30,000 satellites in later phases.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Service Capabilities and Market</h3>

        <p>
          Starlink provides download speeds of 50-250 Mbps with latency of 25-50 milliseconds, competitive with terrestrial broadband. The service costs $120/month for residential users in the U.S., with equipment costs of $599 for the user terminal and WiFi router.
        </p>

        <p>
          By January 2026, Starlink serves over 5 million subscribers across 70+ countries, generating an estimated $6+ billion in annual revenue. Key markets include rural United States, maritime vessels, aviation (in-flight WiFi), and government/military customers. Starlink also provides connectivity for disaster relief, humanitarian operations, and Ukraine's military communications.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Starlink V2 and Direct-to-Cell</h3>

        <p>
          Starlink V2 satellites began launching in 2023 on Falcon 9, with larger V2 "Mini" variants offering 4x the capacity of V1 satellites. Full-size V2 satellites require Starship for launch due to their larger mass and volume, with deployments expected once Starship achieves operational status.
        </p>

        <p>
          SpaceX is also developing direct-to-cell capability allowing unmodified smartphones to connect directly to Starlink satellites for text messaging, voice, and eventually data services in areas without terrestrial coverage. Partnerships with T-Mobile, Rogers, and other carriers will integrate direct-to-cell service into existing mobile plans.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Corporate Leadership
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Executive Team</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="border-2 border-black p-4">
            <h4 className="font-bold">Elon Musk</h4>
            <p className="text-sm text-gray-500 mb-2">Founder, CEO, and Chief Engineer</p>
            <p className="text-sm">
              Founded SpaceX in 2002 with the goal of enabling Mars colonization. Remains deeply involved in engineering decisions, particularly Starship development. Also CEO of Tesla, owner of X (formerly Twitter), and founder of Neuralink and The Boring Company.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Gwynne Shotwell</h4>
            <p className="text-sm text-gray-500 mb-2">President and Chief Operating Officer</p>
            <p className="text-sm">
              Joined SpaceX in 2002 as VP of Business Development, promoted to President in 2008. Oversees day-to-day operations, customer relationships, and business development. Widely credited with building SpaceX's commercial launch business.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Tom Ochinero</h4>
            <p className="text-sm text-gray-500 mb-2">Senior Vice President, Commercial Sales</p>
            <p className="text-sm">
              Leads commercial launch sales and customer relationships for satellite operators, government customers, and international markets.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Brian Bjelde</h4>
            <p className="text-sm text-gray-500 mb-2">Vice President, Starlink Engineering</p>
            <p className="text-sm">
              Oversees Starlink satellite design, manufacturing, and constellation operations. Manages scaling of satellite production to support rapid constellation expansion.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Customers and Contracts
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">NASA</h3>

        <p>
          SpaceX's largest customer, NASA has awarded SpaceX over $10 billion in contracts including:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Commercial Crew Program:</strong> $3.1 billion for Crew Dragon development and operational missions</li>
          <li><strong>Commercial Resupply Services:</strong> Multiple contracts totaling $7+ billion for cargo delivery to ISS</li>
          <li><strong>Human Landing System:</strong> $2.9 billion for Starship lunar lander development for Artemis program</li>
          <li><strong>Science Missions:</strong> Launch contracts for Europa Clipper, PACE, and other science spacecraft</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">U.S. Department of Defense</h3>

        <p>
          SpaceX launches classified national security payloads for the National Reconnaissance Office, Space Force, and other defense agencies. The company holds multiple contracts under the National Security Space Launch (NSSL) program and provides Starlink connectivity for military applications.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Commercial Satellite Operators</h3>

        <p>
          SpaceX dominates the commercial launch market, launching satellites for Iridium, SES, Intelsat, Telesat, and dozens of other operators. The company's combination of reliability, reusability, and competitive pricing has captured 60%+ of the global commercial launch market.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Financial Performance
        </h2>

        <p>
          As a private company, SpaceX does not publicly disclose detailed financials. Based on funding rounds and financial reports:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Valuation:</strong> $180 billion as of December 2024 funding round, making SpaceX one of the world's most valuable private companies</li>
          <li><strong>Revenue:</strong> Estimated $9+ billion in 2024, with significant contributions from launch services ($3-4B) and Starlink ($6B+)</li>
          <li><strong>Profitability:</strong> Starlink reached operational profitability in 2023, offsetting losses from Starship development</li>
          <li><strong>Capital Raised:</strong> Over $12 billion through multiple funding rounds from institutional investors and venture capital</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Mars Colonization Mission
        </h2>

        <p>
          SpaceX's ultimate objective, as stated by Elon Musk, is to make life multiplanetary by establishing a self-sustaining city of one million people on Mars. This ambitious goal drives the company's technology development and long-term strategy.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Technical Requirements</h3>

        <p>
          Mars colonization requires spacecraft capable of carrying 100+ tons of cargo and 100+ passengers per flight, with full reusability to minimize costs. Starship is designed to meet these requirements, with:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Payload capacity of 100-150 tons to Mars surface</li>
          <li>In-space refueling via orbital tanker Starships</li>
          <li>Methane/oxygen propulsion enabling in-situ propellant production on Mars</li>
          <li>Radiation shielding and life support for 3-6 month transit</li>
          <li>Entry, descent, and landing capability for Mars atmosphere</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Timeline and Challenges</h3>

        <p>
          Musk has projected uncrewed Starship missions to Mars in the late 2020s, with crewed missions potentially in the 2030s. Major challenges include:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Perfecting orbital refueling with 10+ tanker flights per Mars mission</li>
          <li>Demonstrating EDL (entry, descent, landing) on Mars with 100-ton payloads</li>
          <li>Developing life support systems for long-duration spaceflight</li>
          <li>Establishing propellant production infrastructure on Mars</li>
          <li>Securing regulatory approvals for crewed interplanetary missions</li>
          <li>Financing estimated $100+ billion Mars program costs</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Recent Developments
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <h4 className="font-bold mb-2">🆕 Latest: Starlink Surpasses 5 Million Subscribers</h4>
          <p className="text-sm mb-3">
            In January 2026, SpaceX announced that Starlink has surpassed 5 million active subscribers globally, making it the world's largest satellite internet provider by user count. Revenue from Starlink is projected to exceed $8 billion in 2026, funding continued Starship development.
          </p>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">2024-2026 Key Milestones</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Starship Flight 5 (October 2024):</strong> First successful booster catch by launch tower</li>
          <li><strong>100th Falcon 9 Booster Landing (2024):</strong> Milestone demonstrating reusability maturity</li>
          <li><strong>Starlink Direct-to-Cell Tests (2024):</strong> Successful text messaging with unmodified smartphones</li>
          <li><strong>Europa Clipper Launch (October 2024):</strong> Falcon Heavy launches NASA flagship mission to Jupiter's moon</li>
          <li><strong>Polaris Dawn (September 2024):</strong> First commercial spacewalk using SpaceX EVA suits</li>
          <li><strong>Starlink V2 Deployment (2024-2026):</strong> Enhanced satellites with 4x capacity</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          External Links
        </h2>

        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.spacex.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Official SpaceX Website
            </a>
          </li>
          <li>
            <a 
              href="https://www.spacex.com/vehicles/starship/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Starship Development Updates
            </a>
          </li>
          <li>
            <a 
              href="https://www.starlink.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Starlink Satellite Internet Service
            </a>
          </li>
          <li>
            <a 
              href="https://www.nasa.gov/humans-in-space/commercial-space/commercial-crew-program/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              NASA Commercial Crew Program
            </a>
          </li>
          <li>
            <a 
              href="https://twitter.com/SpaceX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SpaceX on X (Twitter)
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/company/spacex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SpaceX on LinkedIn
            </a>
          </li>
        </ul>

      </DynamicNewsArticle>
    </>
  );
}
