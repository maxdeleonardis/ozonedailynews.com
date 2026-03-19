import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "NASA's Juno Spacecraft Measures Europa's Ice Shell at 18 Miles Thick | ObjectWire",
  description: "NASA's Juno mission has measured Europa's ice shell thickness at 18 miles, providing critical insights into Jupiter's ocean moon. Discovery advances understanding of potential habitability and informs Europa Clipper mission.",
  keywords: [
    "NASA Juno",
    "Europa ice shell",
    "18 miles thick",
    "Jupiter moon",
    "Europa ocean",
    "Juno spacecraft",
    "Europa Clipper",
    "ocean world",
    "astrobiology",
    "planetary science",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nasa/europa/juno-ice-shell-18-miles-thick',
  },
  openGraph: {
    title: "NASA's Juno Measures Europa's Ice Shell at 18 Miles Thick",
    description: "Breakthrough measurement reveals Europa's frozen crust thickness, advancing our understanding of this potentially habitable ocean world.",
    type: "article",
    url: "https://www.objectwire.org/nasa/europa/juno-ice-shell-18-miles-thick",
    images: [
      {
        url: "https://www.objectwire.org/images/juno-europa-ice-measurement-og.jpg",
        width: 1200,
        height: 630,
        alt: "Juno spacecraft measuring Europa ice shell",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NASA's Juno Measures Europa's Ice Shell at 18 Miles Thick",
    description: "Breakthrough measurement of Europa's frozen ocean crust advances search for life on Jupiter's moon.",
    images: ["https://www.objectwire.org/images/juno-europa-ice-measurement-twitter.jpg"],
  },
};

export default function JunoEuropaIceMeasurementPage() {
  const publishedDate = new Date("2026-01-27T21:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="NASA's Juno Spacecraft Measures Europa's Ice Shell at 18 Miles Thick"
        description="NASA's Juno mission has measured Europa's ice shell thickness at precisely 18 miles, providing the most accurate assessment yet of the frozen crust covering Jupiter's potentially habitable ocean moon."
        author="ObjectWire Science Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/juno-europa-ice-measurement.jpg"
        articleUrl="https://www.objectwire.org/nasa/europa/juno-ice-shell-18-miles-thick"
        section="Space Science"
        keywords={["NASA Juno", "Europa", "ice shell measurement", "Jupiter", "ocean world"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">
              SPACE SCIENCE • BREAKING NEWS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              NASA's Juno Measures Europa's Ice Shell at 18 Miles Thick
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Breakthrough measurement provides most accurate assessment yet of frozen crust covering 
              Jupiter's potentially habitable ocean moon
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>Published January 27, 2026</span>
              <span>•</span>
              <span>Space Science</span>
              <span>•</span>
              <span>5 min read</span>
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
            { name: "Juno Ice Shell Measurement", item: "/nasa/europa/juno-ice-shell-18-miles-thick" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Featured Image Placeholder */}
          <div className="my-8 bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-800 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🛰️</div>
                <p className="text-gray-200 font-mono text-sm">
                  [IMAGE PLACEHOLDER: Juno Spacecraft at Europa / Ice Shell Cross-Section Diagram]
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic p-4 bg-gray-50">
              Juno's precise measurement of Europa's 18-mile ice shell advances our understanding of this ocean world
            </p>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <Link href="/nasa" className="text-blue-600 hover:underline font-semibold">NASA's</Link> Juno spacecraft 
            has achieved a breakthrough in planetary science by measuring <Link href="/nasa/europa" 
            className="text-blue-600 hover:underline font-semibold">Europa's</Link> ice shell thickness at 
            <strong>18 miles (29 kilometers)</strong>—the most accurate measurement to date of the frozen crust 
            covering Jupiter's potentially habitable ocean moon.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Discovery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              During a close flyby of Europa on September 29, 2024, Juno passed within 220 miles of the moon's 
              surface—the closest any spacecraft has come since NASA's Galileo mission in 2000. Using a suite 
              of scientific instruments, the spacecraft collected data that has now been analyzed to reveal the 
              precise thickness of Europa's icy shell.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This measurement refines previous estimates, which ranged from 9 to 25 miles, providing scientists 
              with crucial information for understanding Europa's internal structure and potential for harboring life.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Juno Made the Measurement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Juno employed multiple instruments working in concert to probe Europa's internal structure:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Gravity Science</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              By precisely tracking Juno's velocity as it flew past Europa, scientists detected tiny variations 
              in the moon's gravitational field. These variations are caused by differences in density—ice is 
              less dense than the water ocean below, creating a measurable gravitational signature.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Microwave Radiometer (MWR)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Juno's microwave radiometer penetrated beneath Europa's surface, measuring temperature at different 
              depths. The transition from frozen ice to liquid water creates a distinct thermal boundary that the 
              MWR can detect.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Surface Imaging</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              JunoCam and the Stellar Reference Unit captured high-resolution images showing surface features like 
              cracks, ridges, and chaos terrain—geological formations that provide clues about ice shell dynamics 
              and thickness.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <p className="text-gray-700 italic">
                "This measurement represents years of mission planning and data analysis. The 18-mile thickness 
                gives us confidence in our models of Europa's ocean and helps us understand how materials exchange 
                between the surface and the subsurface."
              </p>
              <p className="text-sm text-gray-600 mt-2">
                — Dr. Scott Bolton, Juno Principal Investigator, Southwest Research Institute
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Europa's Ocean</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 18-mile ice shell measurement has significant implications for understanding Europa's subsurface ocean:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Ocean Volume Confirmation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With the ice thickness now known more precisely, scientists can better calculate the ocean's depth. 
              Current estimates suggest Europa's ocean is 40-100 miles deep, containing roughly twice the volume 
              of all Earth's oceans combined.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Chemical Exchange Potential</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              An 18-mile ice shell is thick enough to be geologically stable, yet thin enough to allow:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Tidal flexing that creates cracks and fissures</li>
              <li>Cryovolcanic activity bringing subsurface material to the surface</li>
              <li>Potential for radiation-processed chemicals to reach the ocean</li>
              <li>Water plume eruptions observed by Hubble Space Telescope</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Tidal Heating Distribution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The measurement helps scientists model where tidal heating (from Jupiter's gravitational pull) is 
              concentrated. This heating keeps Europa's ocean liquid and may create hydrothermal vents on the 
              ocean floor—environments that could support life.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implications for the Search for Life</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Understanding Europa's ice shell thickness is crucial for assessing its potential to harbor life:
            </p>

            <div className="bg-green-50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Habitability Factors:</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Liquid Water Access</p>
                    <p>18 miles is within range of future drilling/melting probes to directly sample the ocean</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Energy Sources</p>
                    <p>Tidal heating provides consistent energy; potential hydrothermal vents offer chemical energy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Organic Chemistry</p>
                    <p>Surface radiation creates organic compounds that may cycle into the ocean</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Stable Environment</p>
                    <p>Ocean has persisted for billions of years, providing time for life to evolve</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact on Europa Clipper Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Juno measurement directly informs NASA's <strong>Europa Clipper mission</strong>, currently 
              en route to Jupiter and scheduled to arrive in 2030:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Mission Planning Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Landing site selection:</strong> Identify regions where ice is thinner for potential future landers</li>
              <li><strong>Instrument targeting:</strong> Focus ice-penetrating radar on areas of interest</li>
              <li><strong>Plume sampling strategy:</strong> Predict where water plumes are most likely to erupt</li>
              <li><strong>Mission timeline:</strong> Optimize flyby sequences to maximize scientific return</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Clipper's Enhanced Investigation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Europa Clipper will build on Juno's findings by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Mapping ice thickness variations across the entire moon</li>
              <li>Analyzing surface composition for biosignatures</li>
              <li>Measuring magnetic field to confirm ocean salinity</li>
              <li>High-resolution imaging of surface features</li>
              <li>Sampling plume material if eruptions occur during mission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison to Other Ocean Worlds</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Europa's 18-mile ice shell can now be compared to other ocean worlds in our solar system:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 text-gray-900">Moon</th>
                    <th className="text-left py-2 text-gray-900">Parent Planet</th>
                    <th className="text-left py-2 text-gray-900">Ice Shell Thickness</th>
                    <th className="text-left py-2 text-gray-900">Ocean Depth</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">Europa</td>
                    <td className="py-2">Jupiter</td>
                    <td className="py-2 text-green-700 font-bold">18 miles (measured)</td>
                    <td className="py-2">40-100 miles</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">Enceladus</td>
                    <td className="py-2">Saturn</td>
                    <td className="py-2">12-16 miles (estimated)</td>
                    <td className="py-2">~6 miles</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">Ganymede</td>
                    <td className="py-2">Jupiter</td>
                    <td className="py-2">95 miles (estimated)</td>
                    <td className="py-2">60+ miles</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Titan</td>
                    <td className="py-2">Saturn</td>
                    <td className="py-2">55-125 miles (estimated)</td>
                    <td className="py-2">35-190 miles</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              Europa's relatively thin ice shell makes it one of the most accessible ocean worlds for future exploration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Exploration Possibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 18-mile ice thickness measurement makes several future mission concepts more feasible:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Near-Term (2030s)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Europa Lander:</strong> Surface mission to analyze composition and search for biosignatures</li>
              <li><strong>Plume sampling:</strong> Spacecraft flying through water plumes to collect ocean material</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Long-Term (2040s-2050s)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Cryobot mission:</strong> Nuclear-heated probe to melt through 18 miles of ice</li>
              <li><strong>Autonomous submarine:</strong> Explore Europa's ocean directly</li>
              <li><strong>Sample return:</strong> Bring Europa material back to Earth for detailed analysis</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-2">Bottom Line:</p>
              <p className="text-gray-700">
                Juno's precise measurement of Europa's 18-mile ice shell represents a major milestone in understanding 
                this ocean world. The data confirms Europa's ocean is accessible for future missions while providing 
                critical information about its potential habitability. As Europa Clipper arrives in 2030, it will build 
                on this discovery to determine whether Jupiter's mysterious moon could harbor life—making this one of 
                the most important measurements in the search for life beyond Earth.
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Coverage</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <Link 
                href="/nasa/europa"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">← Europa: Jupiter's Ocean Moon</h4>
                <p className="text-sm text-gray-600">Complete overview of Europa and its potential for life</p>
              </Link>
              <Link 
                href="/nasa"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">← NASA Overview</h4>
                <p className="text-sm text-gray-600">All NASA missions and discoveries</p>
              </Link>
              <a 
                href="https://www.jpl.nasa.gov/missions/juno"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Juno Mission →</h4>
                <p className="text-sm text-gray-600">Official Juno spacecraft mission page</p>
              </a>
              <a 
                href="https://europa.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Europa Clipper →</h4>
                <p className="text-sm text-gray-600">Mission to explore Europa in detail starting 2030</p>
              </a>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
