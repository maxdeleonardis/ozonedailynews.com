import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Waymo - Autonomous Vehicle News & Updates | ObjectWire",
  description: "Complete coverage of Waymo's self-driving technology, safety investigations, robotaxi operations, and the future of autonomous transportation.",
  keywords: ["Waymo", "autonomous vehicles", "self-driving cars", "robotaxi", "Alphabet", "Google", "NTSB", "safety", "autonomous driving"],
  openGraph: {
    title: "Waymo Coverage | ObjectWire",
    description: "In-depth reporting on Waymo's autonomous vehicle technology and operations.",
    type: "website",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/google/waymo',
  },
};

const latestNews = [
  {
    title: "NTSB Opens Investigation into Waymo Over School Bus Violations",
    excerpt: "Federal safety board launches first-ever probe into Waymo after robotaxis illegally passed stopped school buses more than 20 times.",
    date: "January 23, 2026",
    slug: "google/waymo/ntsb-investigation-school-bus-violations",
    urgent: true,
    category: "Safety Investigation"
  },
];

const keyStats = [
  { label: "Total Miles Driven", value: "20+ Million", sublabel: "Autonomous miles" },
  { label: "Cities Operating", value: "7", sublabel: "Major metro areas" },
  { label: "Daily Rides", value: "100,000+", sublabel: "Passengers served" },
  { label: "Fleet Size", value: "700+", sublabel: "Jaguar I-PACE vehicles" },
];

const timeline = [
  { year: "2009", event: "Google launches self-driving car project" },
  { year: "2016", event: "Waymo spun out as separate Alphabet company" },
  { year: "2018", event: "Waymo One commercial robotaxi service launches in Phoenix" },
  { year: "2020", event: "First fully driverless rides without safety driver" },
  { year: "2023", event: "Expansion to San Francisco and Los Angeles" },
  { year: "2024", event: "Austin and Atlanta markets launch" },
  { year: "2025", event: "NHTSA opens investigation into school bus incidents" },
  { year: "2026", event: "NTSB opens federal investigation" },
];

export default function WaymoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-blue-100">
              <Link href="/google" className="hover:text-white">Google & Alphabet</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-semibold">Waymo</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🚗</span>
              <h1 className="text-5xl md:text-6xl font-bold">
                Waymo
              </h1>
            </div>
            <p className="text-xl text-gray-100 leading-relaxed mb-6">
              Comprehensive coverage of Waymo's autonomous vehicle technology, robotaxi operations, safety investigations, 
              and the evolution of self-driving transportation.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Autonomous Driving</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Safety & Regulation</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Technology</span>
              <span className="bg-red-500/80 px-4 py-2 rounded-full font-semibold animate-pulse">Under Investigation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News Alert */}
      <div className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center gap-4">
            <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 animate-pulse shrink-0">
              BREAKING
            </span>
            <p className="font-semibold">
              NTSB opens federal investigation into Waymo over school bus safety violations in Austin and Atlanta
            </p>
            <Link 
              href="/google/waymo/ntsb-investigation-school-bus-violations"
              className="ml-auto shrink-0 bg-white text-red-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Read Full Story →
            </Link>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Latest News */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
              View all news →
            </Link>
          </div>

          <div className="space-y-6">
            {latestNews.map((article) => (
              <article 
                key={article.slug}
                className="border-2 border-red-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-red-50/30"
              >
                <Link href={`/${article.slug}`} className="block">
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        BREAKING
                      </span>
                      <span className="text-xs font-bold text-red-700 uppercase">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <span className="text-red-600 font-semibold">Read full investigation →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* About Waymo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Waymo</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Waymo, formerly known as the Google Self-Driving Car Project, is an autonomous driving technology 
                company and a subsidiary of Alphabet Inc. Founded in 2009 and spun out as a separate company in 2016, 
                Waymo is widely considered the global leader in autonomous vehicle development.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                The company operates commercial robotaxi services under the brand "Waymo One" in several major U.S. 
                cities, providing fully autonomous rides without human drivers. Waymo has logged over 20 million 
                autonomous miles on public roads and serves more than 100,000 rides per day.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Despite its technological leadership, Waymo has faced increasing scrutiny over safety incidents, 
                including recent federal investigations into its vehicles illegally passing stopped school buses—a 
                serious violation that puts children at risk.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Operations</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🌆 Operating Cities:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Phoenix, Arizona (Waymo One)</li>
                    <li>• San Francisco, California (Waymo One)</li>
                    <li>• Los Angeles, California (Waymo One)</li>
                    <li>• Austin, Texas (Testing & Limited Service)</li>
                    <li>• Atlanta, Georgia (Testing)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🚙 Fleet:</h4>
                  <p className="text-sm text-gray-700">
                    Primary: Jaguar I-PACE electric SUVs equipped with Waymo's 5th generation autonomous driving system
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🔬 Technology:</h4>
                  <p className="text-sm text-gray-700">
                    LiDAR, radar, cameras, AI/ML systems, proprietary mapping and sensor fusion technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Waymo Timeline</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                    {item.year.slice(-2)}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="font-bold text-blue-600 mb-1">{item.year}</div>
                    <div className="text-gray-900">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Investigations */}
        <section className="mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚠️ Safety Investigations</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-red-300">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm shrink-0">
                  ACTIVE
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">NTSB Investigation (January 2026)</h3>
                  <p className="text-gray-700 mb-3">
                    National Transportation Safety Board opens federal investigation after 20+ incidents of Waymo 
                    vehicles illegally passing stopped school buses with deployed stop arms in Austin, TX and Atlanta, GA.
                  </p>
                  <Link 
                    href="/google/waymo/ntsb-investigation-school-bus-violations"
                    className="text-red-600 font-semibold hover:text-red-800"
                  >
                    Read full report →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-orange-300">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 text-white px-3 py-1 rounded font-bold text-sm shrink-0">
                  ACTIVE
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">NHTSA Investigation (October 2025)</h3>
                  <p className="text-gray-700">
                    National Highway Traffic Safety Administration opens preliminary evaluation after Waymo vehicle 
                    in Atlanta failed to stop for school bus with flashing red lights and deployed stop arm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> These investigations represent the first federal safety probes into Waymo's 
              operations since the company began commercial service. The outcomes could significantly impact autonomous 
              vehicle regulation nationwide.
            </p>
          </div>
        </section>

        {/* Coverage Categories */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Waymo Coverage</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚠️ Safety & Regulation</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Federal investigations, safety incidents, regulatory compliance, and public safety concerns.
              </p>
              <Link href="/google/waymo/ntsb-investigation-school-bus-violations" className="text-red-600 font-medium hover:text-red-800 text-sm">
                View safety coverage →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔬 Technology</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Autonomous driving systems, AI/ML developments, sensor technology, and innovation updates.
              </p>
              <Link href="/google" className="text-blue-600 font-medium hover:text-blue-800 text-sm">
                View tech coverage →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Business</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Market expansion, partnerships, financial performance, and competitive analysis.
              </p>
              <Link href="/analyst" className="text-green-600 font-medium hover:text-green-800 text-sm">
                View business coverage →
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Waymo</h2>
          <p className="text-xl text-gray-100 mb-6">
            Get breaking news on autonomous vehicle safety, investigations, and technology developments.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/google/waymo/ntsb-investigation-school-bus-violations"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Read NTSB Investigation
            </Link>
            <Link
              href="/news"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              All News
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
