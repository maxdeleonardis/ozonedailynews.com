import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Europa: Jupiter's Ocean Moon with 18-Mile Ice Shell | NASA Juno Mission Discovery | ObjectWire",
  description: "NASA's Juno spacecraft measured Europa's ice shell at 18 miles thick, revealing insights into Jupiter's moon with a vast subsurface ocean. Implications for Europa Clipper mission and search for life.",
  keywords: [
    "Europa",
    "Jupiter moon",
    "NASA Juno",
    "Europa ice shell",
    "subsurface ocean",
    "Europa Clipper",
    "ocean world",
    "astrobiology",
    "extraterrestrial life",
    "Jupiter system",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nasa/europa',
  },
  openGraph: {
    title: "Europa: Jupiter's Ocean Moon with 18-Mile Ice Shell",
    description: "NASA's Juno mission measures Europa's ice thickness, advancing our understanding of this potentially habitable ocean world.",
    type: "article",
    url: "https://www.objectwire.org/nasa/europa",
    images: [
      {
        url: "https://www.objectwire.org/images/europa-ice-shell-og.jpg",
        width: 1200,
        height: 630,
        alt: "Europa ice shell illustration",
      },
    ],
  },
};

export default function EuropaPage() {
  const publishedDate = new Date("2026-01-27T20:30:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Europa: Jupiter's Ocean Moon with 18-Mile Ice Shell Measured by NASA's Juno"
        description="NASA's Juno spacecraft has measured Europa's ice shell at 18 miles thick, providing critical data about Jupiter's potentially habitable ocean moon and informing future Europa Clipper mission plans."
        author="ObjectWire Science Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/europa-ice-shell.jpg"
        articleUrl="https://www.objectwire.org/nasa/europa"
        section="Space & Astronomy"
        keywords={["Europa", "NASA Juno", "Jupiter", "ocean world", "ice shell", "astrobiology"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-950 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-cyan-200 text-sm font-mono tracking-wider mb-4">
              SPACE SCIENCE • BREAKING DISCOVERY
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              NASA's Juno Measures Europa's Ice Shell at 18 Miles Thick
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              New measurements reveal the frozen surface covering Jupiter's potentially habitable ocean moon, 
              advancing our understanding of this prime candidate in the search for extraterrestrial life
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>Published January 27, 2026</span>
              <span>•</span>
              <span>Space Science</span>
              <span>•</span>
              <span>6 min read</span>
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
            { name: "Europa", item: "/nasa/europa" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Featured Image Placeholder */}
          <div className="my-8 bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🌊</div>
                <p className="text-gray-200 font-mono text-sm">
                  [IMAGE PLACEHOLDER: Europa Surface / Ice Shell Cross-Section / Juno Spacecraft]
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic p-4 bg-gray-50">
              Europa's 18-mile ice shell covers a vast subsurface ocean that may harbor life
            </p>
          </div>

          {/* Quick Facts Box */}
          <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Europa Quick Facts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 mb-1">Parent Planet</p>
                <p className="font-semibold text-gray-900">Jupiter (4th largest moon)</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Diameter</p>
                <p className="font-semibold text-gray-900">1,940 miles (slightly smaller than Earth's Moon)</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Ice Shell Thickness</p>
                <p className="font-semibold text-gray-900">18 miles (29 km) - measured by Juno</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Ocean Depth</p>
                <p className="font-semibold text-gray-900">40-100 miles (estimated)</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Orbital Period</p>
                <p className="font-semibold text-gray-900">3.5 Earth days around Jupiter</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Discovery</p>
                <p className="font-semibold text-gray-900">Galileo Galilei, January 8, 1610</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <Link href="/nasa" className="text-blue-600 hover:underline font-semibold">NASA's</Link> Juno spacecraft 
            has measured <strong>Europa's ice shell at 18 miles (29 kilometers) thick</strong>, providing the most 
            accurate assessment yet of the frozen crust covering Jupiter's ocean moon. This discovery refines our 
            understanding of Europa's structure and has major implications for future missions seeking signs of life.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Europa?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Europa</strong> is the fourth largest of Jupiter's 95 known moons and one of the four Galilean 
              satellites discovered in 1610. What makes Europa extraordinary is what lies beneath its icy surface: 
              a <strong>global subsurface ocean</strong> containing more water than all of Earth's oceans combined.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This ocean is kept liquid by tidal heating—gravitational forces from Jupiter and neighboring moons 
              flex Europa's interior, generating heat through friction. This process makes Europa one of the most 
              promising places in our solar system to search for extraterrestrial life.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Juno Measurement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              During a close flyby in September 2024, <strong>NASA's Juno spacecraft</strong> used its gravity science 
              and microwave radiometer instruments to probe Europa's internal structure. By measuring tiny variations 
              in Europa's gravitational field and analyzing subsurface temperature profiles, scientists calculated the 
              ice shell thickness at <strong>18 miles (29 kilometers)</strong>.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">How the Measurement Works</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Gravity mapping:</strong> Variations in ice thickness create measurable gravitational anomalies</li>
              <li><strong>Microwave penetration:</strong> Different depths absorb and reflect microwaves distinctly</li>
              <li><strong>Tidal deformation:</strong> Ice shell flexing patterns reveal thickness and rigidity</li>
              <li><strong>Heat flow analysis:</strong> Temperature gradients indicate ice-ocean boundary location</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              Previous estimates ranged from 9 to 25 miles, making this measurement a significant refinement that will 
              inform mission planning and scientific models.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implications for Habitability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 18-mile ice thickness has important implications for Europa's potential to harbor life:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Ocean Access</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A thinner ice shell increases the likelihood of:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Chemical exchange:</strong> Nutrients from the surface reaching the ocean</li>
              <li><strong>Energy transfer:</strong> Radiation processing creating chemical energy sources</li>
              <li><strong>Cryovolcanism:</strong> Water plumes erupting through the ice (as observed by Hubble)</li>
              <li><strong>Future drilling:</strong> More feasible for robotic missions to reach liquid water</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Habitable Conditions</h3>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <p className="text-gray-700 mb-3">
                Europa's ocean is believed to have all the key ingredients for life:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ <strong>Liquid water:</strong> The essential solvent for life as we know it</li>
                <li>✓ <strong>Chemical energy:</strong> From tidal heating and potential hydrothermal vents</li>
                <li>✓ <strong>Organic compounds:</strong> Detected on the surface, likely in the ocean</li>
                <li>✓ <strong>Stable environment:</strong> Ocean persisted for billions of years</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Europa's Surface Features</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Europa's surface is remarkably smooth and young (geologically speaking), with few impact craters suggesting 
              ongoing resurfacing processes:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Key Surface Characteristics</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Lineae:</strong> Dark streaks crisscrossing the surface, possibly cracks filled with material from below</li>
              <li><strong>Chaos terrain:</strong> Disrupted ice blocks suggesting ice shell breakup and refreezing</li>
              <li><strong>Lenticulae:</strong> Dome-like features possibly formed by warmer ice rising from depth</li>
              <li><strong>Water plumes:</strong> Intermittent geysers shooting water 100+ miles into space</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              The reddish-brown streaks visible on Europa's surface are likely salts and organic compounds brought up 
              from the ocean—potentially biosignatures if life exists below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Europa Clipper Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NASA's <strong>Europa Clipper</strong> spacecraft, launched in October 2024, will arrive at Jupiter in 
              2030 to conduct detailed reconnaissance of Europa. The Juno ice thickness measurement directly informs 
              Clipper's mission planning:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Mission Objectives</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Ice shell characterization:</strong> Map thickness variations across the moon</li>
              <li><strong>Ocean composition:</strong> Analyze plume material for organic compounds and salts</li>
              <li><strong>Surface geology:</strong> High-resolution imaging of surface features</li>
              <li><strong>Habitability assessment:</strong> Determine if conditions could support life</li>
              <li><strong>Landing site selection:</strong> Identify safe zones for future lander missions</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Mission Profile</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clipper will conduct 49 close flybys of Europa over 4 years, coming as close as 16 miles from the surface. 
              This orbit strategy avoids Jupiter's intense radiation while still allowing detailed observations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Exploration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond Europa Clipper, future missions could include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Europa Lander (proposed):</strong> Surface mission to search for biosignatures</li>
              <li><strong>Ice-penetrating probe:</strong> Drill or melt through ice to directly sample ocean</li>
              <li><strong>Submersible explorer:</strong> Autonomous submarine to explore the subsurface ocean</li>
              <li><strong>Sample return mission:</strong> Bring Europa material back to Earth for analysis</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 18-mile ice thickness, while substantial, is within the range of potential drilling missions. 
              Advances in ice-penetrating technology (demonstrated in Antarctica) could enable reaching Europa's 
              ocean within the next 20-30 years.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Ocean Worlds</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Europa is part of a family of "ocean worlds" in our solar system with subsurface liquid water:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose text-sm">
              <div className="border border-cyan-200 rounded-lg p-4 bg-cyan-50">
                <p className="font-bold text-gray-900 mb-2">🪐 Enceladus (Saturn)</p>
                <p className="text-gray-700">Active water plumes, potentially easier to sample than Europa</p>
              </div>
              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <p className="font-bold text-gray-900 mb-2">🌙 Titan (Saturn)</p>
                <p className="text-gray-700">Subsurface water ocean beneath thick hydrocarbon atmosphere</p>
              </div>
              <div className="border border-indigo-200 rounded-lg p-4 bg-indigo-50">
                <p className="font-bold text-gray-900 mb-2">🔵 Ganymede (Jupiter)</p>
                <p className="text-gray-700">Largest moon with multi-layered ocean structure</p>
              </div>
              <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                <p className="font-bold text-gray-900 mb-2">🌊 Callisto (Jupiter)</p>
                <p className="text-gray-700">Possible subsurface ocean beneath ancient cratered surface</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-2">Bottom Line:</p>
              <p className="text-gray-700">
                Juno's measurement of Europa's 18-mile ice shell represents a major step forward in understanding 
                this ocean world. With more water than Earth, potential chemical energy sources, and possible 
                biosignatures on its surface, Europa remains one of the most compelling targets in the search for 
                life beyond Earth. The Europa Clipper mission will build on this discovery, potentially revealing 
                whether we are alone in the solar system.
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <Link 
                href="/nasa"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">← NASA Overview</h4>
                <p className="text-sm text-gray-600">Explore all NASA missions and discoveries</p>
              </Link>
              <a 
                href="https://europa.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Europa Clipper Mission →</h4>
                <p className="text-sm text-gray-600">Official mission website and updates</p>
              </a>
              <a 
                href="https://www.jpl.nasa.gov/missions/juno"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Juno Mission →</h4>
                <p className="text-sm text-gray-600">Jupiter orbital mission and discoveries</p>
              </a>
              <a 
                href="https://science.nasa.gov/europa/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-cyan-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Europa Science →</h4>
                <p className="text-sm text-gray-600">In-depth scientific information about Europa</p>
              </a>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
