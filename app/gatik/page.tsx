import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gatik: Autonomous Trucking Company Profile & History | ObjectWire',
  description: 'Complete profile of Gatik, the first U.S. company to operate fully autonomous commercial trucks. Founded 2017, pioneering middle-mile logistics automation with Walmart and Kroger partnerships.',
  keywords: [
    'Gatik',
    'Gatik AI',
    'autonomous trucking',
    'middle-mile delivery',
    'self-driving trucks',
    'Gautam Narang',
    'driverless logistics',
    'Walmart autonomous delivery',
    'commercial autonomous vehicles',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/gatik',
  },
  openGraph: {
    title: 'Gatik: Autonomous Trucking Company Profile & History',
    description: 'Complete profile of Gatik, the first U.S. company to operate fully autonomous commercial trucks.',
    type: 'article',
    url: 'https://www.objectwire.org/gatik',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gatik: Autonomous Trucking Company Profile & History',
    description: 'First U.S. company operating fully driverless commercial trucks.',
  },
};

export default function GatikPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <NewsArticleSchema
        title="Gatik: Autonomous Trucking Company Profile & History"
        description="Complete profile of Gatik, the first U.S. company to operate fully autonomous commercial trucks. Founded 2017, pioneering middle-mile logistics automation."
        publishedTime="2024-08-15T00:00:00Z"
        modifiedTime="2026-01-27T16:00:00Z"
        author="ObjectWire Editorial Team"
        imageUrl="https://www.objectwire.org/gatik-company.jpg"
        articleUrl="https://www.objectwire.org/gatik"
        section="Technology"
        keywords={["Gatik", "autonomous trucks", "self-driving", "logistics", "middle-mile delivery"]}
      />

      <Breadcrumb
        items={[
          { name: 'Home', item: '/' },
          { name: 'Gatik', item: '/gatik' },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
            Gatik
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering Autonomous Middle-Mile Logistics Technology
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Overview */}
          <section className="mb-12 bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Company Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Gatik AI Inc.</strong> is an autonomous vehicle technology company specializing in middle-mile logistics—the critical transportation segment between distribution centers and retail locations. Founded in 2017 and headquartered in Mountain View, California, Gatik became the first company in the United States to operate fully autonomous commercial trucks on public roads without safety drivers in January 2026.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-5 border border-blue-500/30">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Company Information</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><strong>Founded:</strong> 2017</li>
                  <li><strong>Headquarters:</strong> Mountain View, California</li>
                  <li><strong>Founders:</strong> Gautam Narang, Arjun Narang</li>
                  <li><strong>CEO:</strong> Gautam Narang</li>
                  <li><strong>Employees:</strong> ~200 (2026)</li>
                  <li><strong>Valuation:</strong> $700M (Series C, 2025)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-lg p-5 border border-green-500/30">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Industry Focus</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><strong>Sector:</strong> Autonomous Vehicles, Logistics</li>
                  <li><strong>Specialization:</strong> Middle-Mile Delivery</li>
                  <li><strong>Technology:</strong> Level 4 Autonomous Driving</li>
                  <li><strong>Vehicle Type:</strong> Class 3-6 Box Trucks</li>
                  <li><strong>Business Model:</strong> B2B Logistics-as-a-Service</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Unlike companies pursuing fully autonomous passenger vehicles or long-haul trucking, Gatik's strategic focus on short, repetitive routes between known locations has proven more immediately viable commercially and regulatorily. The company operates autonomous box trucks for major retailers including Walmart and Kroger, completing thousands of deliveries monthly without human drivers.
            </p>
          </section>

          {/* Company History */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Company History</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">2017: Foundation</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Gatik was founded by brothers Gautam Narang and Arjun Narang, both veterans of Ford Motor Company's autonomous vehicle division. Recognizing that full autonomous capability across all driving scenarios remained decades away, the Narangs identified middle-mile logistics as an ideal constrained domain where autonomous technology could deliver immediate commercial value.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The company's name derives from the Hindi word for "movement" or "motion," reflecting its focus on freight transportation rather than passenger mobility.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-green-400 mb-3">2019: First Commercial Partnership</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Gatik announced its first major commercial partnership with Walmart, launching autonomous delivery operations between a Walmart distribution center and retail stores in Bentonville, Arkansas. The initial deployment used safety drivers monitoring autonomous systems on a fixed 2-mile route.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This partnership validated Gatik's business model and provided critical real-world data to refine its autonomous driving stack. The Bentonville route became the company's testing ground for driverless operations.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">2021: Series Funding & Expansion</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Gatik raised $85 million in Series B funding led by Koch Industries, with participation from existing investors including Walmart and Innovation Endeavors. The capital funded expansion to Texas (partnership with Kroger), Louisiana, and Canada (Toronto operations with Loblaw Companies).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By year-end 2021, Gatik was operating on six fixed routes across four locations, completing over 30,000 commercial deliveries with safety drivers aboard all vehicles.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-yellow-500">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">2022: Technology Milestones</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Gatik achieved several technical milestones including successful navigation of construction zones, adverse weather operations (heavy rain, fog), and complex urban intersections. The company's vehicles demonstrated the ability to handle emergency vehicle interactions and unexpected road closures autonomously.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The company also launched its proprietary fleet management platform, enabling remote monitoring and coordination of multiple autonomous vehicles simultaneously.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-red-400 mb-3">2023-2024: Regulatory Push</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Gatik began formal engagement with state transportation departments in Arkansas and Texas to secure permits for fully driverless operations. The company submitted extensive safety documentation including 500,000+ miles of autonomous driving data, third-party safety audits, and emergency response protocols.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  In late 2024, Gatik raised $125 million in Series C funding at a $700 million valuation, with new investors including Goodyear Ventures and Ryder System, Inc. The funding supported fleet expansion and regulatory compliance efforts.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-pink-500">
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">2026: Driverless Approval</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  On January 27, 2026, Gatik received regulatory approval from Arkansas and Texas authorities to operate fully autonomous commercial trucks without safety drivers on designated routes. This <Link href="/news/gatik-first-us-driverless-trucks-commercially" className="text-blue-400 hover:text-blue-300 underline">historic milestone</Link> made Gatik the first company in the United States to achieve commercial driverless trucking operations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The approval covers Class 6 box trucks (26,000 lbs GVWR) operating on fixed routes with speeds up to 65 mph, marking a breakthrough for autonomous vehicle commercialization.
                </p>
              </div>
            </div>
          </section>

          {/* Technology & Approach */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Technology & Approach</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Autonomous Driving Stack</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Gatik's autonomous system is purpose-built for middle-mile logistics rather than adapted from passenger vehicle technology. The company's approach emphasizes reliability and safety over flexibility, with vehicles operating exclusively on pre-mapped, geofenced routes.
              </p>

              <h4 className="text-xl font-semibold text-green-400 mb-3">Sensor Suite</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>LiDAR:</strong> Four Velodyne Alpha Prime units providing 360-degree point cloud coverage at 300-meter range</li>
                <li><strong>Cameras:</strong> 12 high-resolution cameras for object detection, classification, and traffic signal recognition</li>
                <li><strong>Radar:</strong> Long-range and short-range radar arrays for velocity measurement and redundant object detection</li>
                <li><strong>IMU & GPS:</strong> Inertial measurement units and RTK-GPS for centimeter-level localization</li>
                <li><strong>V2X Communication:</strong> Vehicle-to-everything connectivity for infrastructure interaction</li>
              </ul>

              <h4 className="text-xl font-semibold text-purple-400 mb-3">Software Architecture</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Gatik's software stack includes proprietary perception, prediction, and planning algorithms optimized for commercial vehicle dynamics. Key differentiators include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>HD Mapping:</strong> Centimeter-accurate maps updated continuously via fleet learning</li>
                <li><strong>Behavior Prediction:</strong> Machine learning models trained on millions of miles of commercial driving data</li>
                <li><strong>Path Planning:</strong> Optimization algorithms balancing safety, efficiency, and comfort</li>
                <li><strong>Redundancy:</strong> Multiple independent systems for critical functions (steering, braking, perception)</li>
                <li><strong>Remote Assistance:</strong> Teleoperation capabilities for edge-case scenarios</li>
              </ul>

              <h4 className="text-xl font-semibold text-yellow-400 mb-3">Geofenced Operating Domain</h4>
              <p className="text-gray-300 leading-relaxed">
                Unlike competitors pursuing "autonomous everywhere" approaches, Gatik vehicles operate only on routes they have extensively mapped and validated. This constrained operational design domain (ODD) enables:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Higher reliability and safety through predictability</li>
                <li>Faster regulatory approval with clearly defined boundaries</li>
                <li>More efficient validation and testing processes</li>
                <li>Immediate commercial viability without waiting for full Level 5 autonomy</li>
              </ul>
            </div>
          </section>

          {/* Business Model */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Business Model & Market Strategy</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Middle-Mile Focus</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Gatik's business centers on "middle-mile" logistics—the transportation segment between large distribution centers and local fulfillment centers or retail stores. This 5-50 mile segment represents a $50 billion annual market in the U.S. characterized by:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-900/30 rounded-lg p-5 border border-blue-500/30">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Market Characteristics</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Repetitive, predictable routes</li>
                    <li>• High frequency (multiple trips daily)</li>
                    <li>• Consistent cargo types</li>
                    <li>• Fixed pickup/delivery locations</li>
                    <li>• Lower complexity than long-haul or last-mile</li>
                  </ul>
                </div>

                <div className="bg-green-900/30 rounded-lg p-5 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Competitive Advantages</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Easier regulatory approval vs. urban robotaxis</li>
                    <li>• Simpler technical requirements vs. highway trucking</li>
                    <li>• Immediate labor shortage solution</li>
                    <li>• Scalable to new routes/customers</li>
                    <li>• Clear ROI calculations for customers</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Revenue Model</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Gatik operates on a logistics-as-a-service (LaaS) model, charging customers per delivery or per mile for autonomous transportation services. The company owns and operates the autonomous vehicles, maintaining full control over:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Vehicle acquisition and maintenance</li>
                <li>Autonomous system development and updates</li>
                <li>Remote monitoring infrastructure</li>
                <li>Insurance and regulatory compliance</li>
                <li>Route planning and optimization</li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                This vertically integrated approach enables Gatik to capture the full value of autonomous operations while providing customers with predictable, per-trip pricing that undercuts traditional driver-based delivery by 30-40%.
              </p>
            </div>
          </section>

          {/* Partnerships */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Major Partnerships</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-500/30">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">Walmart</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    <strong>Partnership Since:</strong> 2019
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Gatik's flagship partnership involves autonomous deliveries between Walmart's distribution centers and Supercenter locations in Bentonville, Arkansas. The route expanded to a 12-mile loop in 2023, with plans for additional routes in Louisiana and Texas.
                  </p>
                  <p className="text-gray-300 text-sm">
                    Walmart Strategic Investments participated in Gatik's Series B and Series C funding rounds, demonstrating the retailer's confidence in autonomous middle-mile logistics.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-6 border border-green-500/30">
                  <h3 className="text-2xl font-semibold text-green-400 mb-3">Kroger</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    <strong>Partnership Since:</strong> 2021
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Gatik operates autonomous deliveries for America's largest supermarket chain between distribution hubs and stores in the Dallas-Fort Worth metropolitan area. The partnership focuses on refrigerated and frozen goods requiring temperature-controlled transportation.
                  </p>
                  <p className="text-gray-300 text-sm">
                    This partnership demonstrated Gatik's ability to handle more complex cargo requirements beyond dry goods.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/30">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">Georgia-Pacific</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    <strong>Partnership Since:</strong> 2022
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Koch Industries subsidiary Georgia-Pacific (manufacturer of paper products including Brawny and Quilted Northern) partnered with Gatik for autonomous transportation between manufacturing facilities and distribution centers in Louisiana.
                  </p>
                  <p className="text-gray-300 text-sm">
                    This B2B manufacturing partnership expanded Gatik's addressable market beyond retail logistics.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-6 border border-yellow-500/30">
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Loblaw Companies (Canada)</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    <strong>Partnership Since:</strong> 2021
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Canada's largest food retailer partnered with Gatik for autonomous deliveries in Toronto, marking Gatik's first international expansion. Operations include both grocery and pharmacy deliveries on fixed urban routes.
                  </p>
                  <p className="text-gray-300 text-sm">
                    Canadian operations face different regulatory frameworks but have progressed similarly to U.S. deployments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Landscape */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Competitive Landscape</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                Gatik operates in the autonomous trucking sector but occupies a unique niche focused on middle-mile rather than long-haul transportation. Key competitors and adjacent players include:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Aurora Innovation (NASDAQ: AUR)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Focus:</strong> Long-haul Class 8 trucking</p>
                  <p className="text-gray-300 text-sm">
                    Developing autonomous technology for highway tractor-trailers. Partnerships with FedEx and Uber Freight. Still operating with safety drivers; commercial driverless operations targeted for 2027.
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Waymo Via (Alphabet)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Focus:</strong> Long-haul autonomous trucking</p>
                  <p className="text-gray-300 text-sm">
                    Alphabet's freight division operates pilot programs in Arizona and Texas. Massive R&D budget but still in testing phase with safety operators. No clear path to driverless commercialization announced.
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Kodiak Robotics</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Focus:</strong> Long-haul trucking + defense contracts</p>
                  <p className="text-gray-300 text-sm">
                    Autonomous trucking startup with U.S. Department of Defense partnerships. Operates test fleets in Texas and Georgia with safety drivers. Targeting 2027 for commercial driverless operations.
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-pink-400 mb-2">Einride (Sweden)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Focus:</strong> Electric autonomous freight</p>
                  <p className="text-gray-300 text-sm">
                    Swedish company combining electric and autonomous technology for short-haul freight. Operating in Europe with some U.S. pilots. Focuses on private roads and controlled environments.
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Traditional Logistics Providers</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Competition:</strong> Human-driven middle-mile services</p>
                  <p className="text-gray-300 text-sm">
                    Companies like Ryder, Penske, and regional carriers provide traditional middle-mile logistics. Gatik competes on cost (30-40% savings), reliability, and driver shortage solutions.
                  </p>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Competitive Differentiation</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Gatik's strategic focus on middle-mile logistics rather than long-haul trucking provides significant advantages: simpler technical requirements, faster regulatory approval, immediate commercial viability, and a large addressable market underserved by competitors focused on highway automation.
                </p>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Leadership Team</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">Gautam Narang</h3>
                  <p className="text-gray-400 text-sm mb-3">Co-Founder & CEO</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Prior to founding Gatik, Gautam served as Director of Product for Autonomous Vehicles at Ford Motor Company, where he led development of Ford's self-driving delivery vehicle program. He holds a Master's degree in Robotics from Carnegie Mellon University and has published extensively on autonomous vehicle safety validation.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-400 mb-2">Arjun Narang</h3>
                  <p className="text-gray-400 text-sm mb-3">Co-Founder & CTO</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Arjun previously worked as Principal Engineer at Ford's Autonomous Vehicle division, specializing in perception systems and sensor fusion. He earned his Ph.D. in Computer Vision from the University of Michigan and has filed over 20 patents related to autonomous driving technology.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-2">Richard Steiner</h3>
                  <p className="text-gray-400 text-sm mb-3">VP of Commercialization</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Former executive at UPS and FedEx with 25+ years in logistics operations. Richard leads Gatik's customer partnerships and route expansion strategy, bringing deep industry relationships and supply chain expertise to the autonomous logistics business.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Funding & Investors */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Funding & Investors</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                Gatik has raised over $200 million across multiple funding rounds:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-5 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Series C (2025) — $125 Million</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Valuation:</strong> $700 million</p>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>Lead Investors:</strong> Koch Industries, Walmart Strategic Investments
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong>New Investors:</strong> Goodyear Ventures, Ryder System Inc., Woven Capital (Toyota)
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-5 border border-blue-500/30">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Series B (2021) — $85 Million</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Valuation:</strong> $400 million</p>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>Lead Investor:</strong> Koch Industries
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong>Participants:</strong> Walmart, Innovation Endeavors, Dynamo Ventures
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-5 border border-purple-500/30">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Series A (2019) — $25 Million</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>Lead Investor:</strong> Innovation Endeavors (Eric Schmidt's VC firm)
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong>Participants:</strong> Walmart Strategic Investments, Intact Ventures
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The presence of strategic investors including Walmart (customer), Koch Industries (customer parent company), Goodyear (tire supplier), and Ryder (logistics incumbent) demonstrates industry validation of Gatik's business model and technology.
              </p>
            </div>
          </section>

          {/* Future Outlook */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Future Outlook & Expansion Plans</h2>
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg p-8 border border-indigo-500/30">
              <p className="text-gray-300 leading-relaxed mb-6">
                Following its historic achievement as the first company to operate fully driverless commercial trucks in the U.S., Gatik has outlined aggressive expansion plans:
              </p>

              <h3 className="text-2xl font-semibold text-blue-400 mb-4">2026-2027 Roadmap</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Scale to 50 driverless trucks across Arkansas and Texas by Q3 2026</li>
                <li>Seek driverless approval in Georgia and Arizona by Q4 2026</li>
                <li>Expand Canadian operations with driverless permits in Ontario</li>
                <li>Add 3-5 new Fortune 500 retail and logistics customers</li>
                <li>Launch pilot programs for pharmaceutical cold-chain logistics</li>
                <li>Explore expansion into e-commerce fulfillment partnerships</li>
              </ul>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Strategic Priorities</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Gatik's leadership has emphasized that the company will maintain its focus on middle-mile logistics rather than expanding into long-haul or last-mile segments. This disciplined approach prioritizes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Operational excellence and safety record maintenance</li>
                <li>Route density in existing markets before geographic expansion</li>
                <li>Partnership deepening with current customers</li>
                <li>Regulatory relationship building in new states</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mb-4">
                Industry analysts expect Gatik to pursue an IPO in 2027-2028 once the company demonstrates consistent profitability across multiple markets. Morgan Stanley estimates the middle-mile autonomous logistics market could exceed $100 billion annually by 2035, with Gatik positioned as the early category leader.
              </p>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Read More</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  For the latest news on Gatik's driverless trucking achievement, see our article: <Link href="/news/gatik-first-us-driverless-trucks-commercially" className="text-blue-400 hover:text-blue-300 underline">Gatik Becomes First U.S. Firm Running Driverless Trucks Commercially</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Related Coverage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Related Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/news/gatik-first-us-driverless-trucks-commercially"
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-6 hover:from-blue-800/50 hover:to-purple-800/50 transition-all border border-blue-500/30"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Gatik Driverless Trucks News</h3>
                <p className="text-gray-300 text-sm">
                  Breaking coverage of Gatik's historic achievement as first U.S. company operating autonomous commercial trucks.
                </p>
              </Link>

              <Link 
                href="/news"
                className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-lg p-6 hover:from-green-800/50 hover:to-blue-800/50 transition-all border border-green-500/30"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-2">Autonomous Vehicle News</h3>
                <p className="text-gray-300 text-sm">
                  Latest developments in self-driving technology, regulations, and commercial deployment.
                </p>
              </Link>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">External Resources</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://gatik.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Official Gatik Website
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/gatik-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Gatik on LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/gatikAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Gatik on Twitter/X
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
