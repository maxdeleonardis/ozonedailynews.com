import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "NASA (National Aeronautics and Space Administration): Missions, Discoveries & Space Exploration | ObjectWire",
  description: "Comprehensive overview of NASA's missions, discoveries, and contributions to space exploration. From Artemis Moon missions to Europa ice measurements, tracking America's space agency achievements.",
  keywords: [
    "NASA",
    "National Aeronautics and Space Administration",
    "space exploration",
    "Artemis mission",
    "Juno spacecraft",
    "Europa",
    "Mars rovers",
    "James Webb Space Telescope",
    "ISS",
    "space agency",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nasa',
  },
  openGraph: {
    title: "NASA: America's Space Agency - Missions, Discoveries & Exploration",
    description: "Complete overview of NASA's current missions, recent discoveries, and contributions to space science. From Moon missions to Europa's ocean.",
    type: "article",
    url: "https://www.objectwire.org/nasa",
    images: [
      {
        url: "https://www.objectwire.org/images/nasa-overview-og.jpg",
        width: 1200,
        height: 630,
        alt: "NASA Space Exploration",
      },
    ],
  },
};

export default function NASAPage() {
  const publishedDate = new Date("2026-01-27T20:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="NASA (National Aeronautics and Space Administration): Missions and Discoveries"
        description="Comprehensive overview of NASA's current missions, recent discoveries, and contributions to space exploration including Artemis, Juno, Mars rovers, and James Webb Space Telescope."
        author="ObjectWire Science Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/nasa-overview.jpg"
        articleUrl="https://www.objectwire.org/nasa"
        section="Space & Science"
        keywords={["NASA", "space exploration", "space missions", "astronomy", "planetary science"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">
              SPACE EXPLORATION • SCIENCE
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              NASA: National Aeronautics and Space Administration
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              America's space agency exploring the cosmos, advancing scientific discovery, and pushing 
              the boundaries of human knowledge
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>Updated January 27, 2026</span>
              <span>•</span>
              <span>Space Science</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "NASA", item: "/nasa" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Featured Image Placeholder */}
          <div className="my-8 bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-300 font-mono text-sm">
                  [IMAGE PLACEHOLDER: NASA Logo / Kennedy Space Center / Rocket Launch]
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic p-4 bg-gray-50">
              NASA continues to lead humanity's exploration of space and scientific discovery
            </p>
          </div>

          {/* Quick Facts Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 mb-1">Established</p>
                <p className="font-semibold text-gray-900">July 29, 1958</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Headquarters</p>
                <p className="font-semibold text-gray-900">Washington, D.C.</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Administrator</p>
                <p className="font-semibold text-gray-900">Bill Nelson (2021-present)</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Annual Budget</p>
                <p className="font-semibold text-gray-900">$25.4 billion (FY 2026)</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Employees</p>
                <p className="font-semibold text-gray-900">~18,000 civil servants</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Contractors</p>
                <p className="font-semibold text-gray-900">~40,000+ additional personnel</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The <strong>National Aeronautics and Space Administration (NASA)</strong> is an independent agency of the 
            U.S. federal government responsible for the civil space program, aeronautics research, and space science. 
            Since its establishment in 1958, NASA has led American space exploration efforts and made groundbreaking 
            discoveries about our universe.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Major Missions</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Artemis Program (Moon Exploration)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              NASA's <strong>Artemis program</strong> aims to return humans to the Moon by 2025-2026 and establish 
              a sustainable presence. The program includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Artemis II (2025):</strong> First crewed flight around the Moon since 1972</li>
              <li><strong>Artemis III (2026):</strong> First woman and person of color on lunar surface</li>
              <li><strong>Lunar Gateway:</strong> Orbiting space station supporting long-term exploration</li>
              <li><strong>Human Landing System:</strong> SpaceX Starship selected as lunar lander</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Mars Exploration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              NASA operates multiple missions studying Mars:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Perseverance Rover:</strong> Collecting samples for future return to Earth</li>
              <li><strong>Ingenuity Helicopter:</strong> First powered flight on another planet (completed 70+ flights)</li>
              <li><strong>Mars Sample Return:</strong> Joint NASA-ESA mission launching 2028</li>
              <li><strong>MAVEN Orbiter:</strong> Studying Martian atmosphere and climate history</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Outer Solar System</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Juno Mission</strong> at Jupiter recently measured <Link href="/nasa/europa" 
              className="text-blue-600 hover:underline font-semibold">Europa's ice shell thickness at 18 miles</Link>, 
              providing crucial data for understanding this ocean world's potential habitability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Space Telescopes</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">James Webb Space Telescope (JWST)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Launched December 2021, JWST is revolutionizing astronomy with infrared observations:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Detecting earliest galaxies from 13+ billion years ago</li>
              <li>Analyzing exoplanet atmospheres for signs of life</li>
              <li>Studying star and planet formation in unprecedented detail</li>
              <li>Capturing images of distant galaxies, nebulae, and cosmic phenomena</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Hubble Space Telescope</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In orbit since 1990, Hubble continues delivering groundbreaking science after 35+ years of operation. 
              Recent servicing missions and upgrades have extended its operational life into the 2030s.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Space Station (ISS)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NASA leads international partnership operating the ISS, humanity's continuous presence in space since 2000:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Partners:</strong> USA, Russia, Europe (ESA), Japan (JAXA), Canada (CSA)</li>
              <li><strong>Crew size:</strong> Typically 7 astronauts rotating on 6-month missions</li>
              <li><strong>Research:</strong> Microgravity experiments in biology, physics, materials science</li>
              <li><strong>Future:</strong> Operations extended through at least 2030, commercial stations planned</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Earth Science</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NASA operates 26+ Earth-observing satellites monitoring climate change, weather patterns, and environmental health:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Climate monitoring:</strong> Tracking sea level rise, ice sheet melt, atmospheric composition</li>
              <li><strong>Disaster response:</strong> Real-time data for hurricanes, wildfires, floods</li>
              <li><strong>Agriculture:</strong> Crop health monitoring and drought prediction</li>
              <li><strong>Ocean science:</strong> Sea surface temperatures, ocean currents, marine ecosystems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Discoveries (2025-2026)</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-1">Europa Ice Shell Measurement</p>
                <p className="text-sm text-gray-700">
                  Juno spacecraft measured Europa's ice shell at 18 miles thick, refining models of the subsurface 
                  ocean and informing Europa Clipper mission planning
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-1">JWST Exoplanet Atmospheres</p>
                <p className="text-sm text-gray-700">
                  Detected potential biosignature gases in K2-18 b atmosphere, sparking debate about life 
                  on distant worlds
                </p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-1">Mars Water Ice Discovery</p>
                <p className="text-sm text-gray-700">
                  Perseverance rover found extensive water ice deposits in unexpected locations, implications 
                  for future human missions
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">NASA Centers</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-2">🚀 Kennedy Space Center (Florida)</p>
                <p className="text-gray-700">Launch operations and spacecraft processing</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-2">🛰️ Jet Propulsion Laboratory (California)</p>
                <p className="text-gray-700">Robotic spacecraft and deep space missions</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-2">👨‍🚀 Johnson Space Center (Texas)</p>
                <p className="text-gray-700">Human spaceflight, astronaut training, Mission Control</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-2">🔧 Marshall Space Flight Center (Alabama)</p>
                <p className="text-gray-700">Propulsion systems and space station hardware</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Budget and Priorities (FY 2026)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NASA's $25.4 billion budget allocation:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Artemis/Moon to Mars:</strong> $8.1B (32%)</li>
              <li><strong>Science:</strong> $7.8B (31%) - includes JWST, planetary missions, Earth science</li>
              <li><strong>Space Operations:</strong> $4.2B (17%) - ISS, commercial crew</li>
              <li><strong>Space Technology:</strong> $1.5B (6%) - R&D for future capabilities</li>
              <li><strong>Aeronautics:</strong> $1.0B (4%) - aviation research</li>
              <li><strong>Other:</strong> $2.8B (10%) - construction, education, administration</li>
            </ul>
          </section>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured NASA Coverage</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <Link 
                href="/nasa/europa"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Europa: Jupiter's Ocean Moon</h4>
                <p className="text-sm text-gray-600">Juno measures 18-mile ice shell over subsurface ocean</p>
              </Link>
              <a 
                href="https://www.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">NASA Official Website →</h4>
                <p className="text-sm text-gray-600">Latest news, images, and mission updates</p>
              </a>
              <a 
                href="https://www.nasa.gov/artemis"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Artemis Program →</h4>
                <p className="text-sm text-gray-600">Returning humans to the Moon</p>
              </a>
              <a 
                href="https://science.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">NASA Science →</h4>
                <p className="text-sm text-gray-600">Explore all NASA science missions</p>
              </a>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
