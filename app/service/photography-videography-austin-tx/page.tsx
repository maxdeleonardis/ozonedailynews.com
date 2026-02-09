import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photography & Videography Services Austin TX | ObjectWire",
  description: "Professional investigative photography and videography in Austin, Texas. Surveillance documentation, legal evidence, scene photography, witness interviews, and court-admissible video/photo services.",
  keywords: ["Austin photography", "Austin videography", "surveillance photography Austin", "legal documentation Texas", "evidence photography"],
  alternates: {
    canonical: 'https://www.objectwire.org/service/photography-videography-austin-tx',
  },
};

export default function PhotographyVideographyAustinPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 py-20 max-w-6xl relative">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Photography & Videography</span>
          </nav>
          
          <header className="mb-12">
            <p className="text-blue-400 text-sm font-mono tracking-wider mb-4">VISUAL DOCUMENTATION SERVICES</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Photography<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                & Videography
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Court-admissible visual documentation for investigative, legal, and corporate purposes 
              throughout Austin and Central Texas.
            </p>
          </header>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/get-help" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Quote
            </Link>
            <a 
              href="tel:+15125551234" 
              className="px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Call (512) 555-1234
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Specialized Visual Documentation</h2>
            <p className="text-gray-300 text-lg mb-6">
              At ObjectWire, we provide professional photography and videography services specifically 
              designed for investigative, legal, and corporate documentation. Our visual evidence meets 
              the highest standards for court admissibility and professional use.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📸</span>
                </div>
                <h3 className="font-semibold text-white mb-2">High-Resolution</h3>
                <p className="text-sm text-gray-400">Professional-grade equipment for crystal-clear documentation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Court-Admissible</h3>
                <p className="text-sm text-gray-400">Meets all legal standards for evidence documentation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Confidential</h3>
                <p className="text-sm text-gray-400">Strict discretion and privacy protocols</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Photography Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Surveillance Photography</h3>
                  <p className="text-gray-400 mb-3">
                    Covert and overt surveillance photography for legal cases, insurance claims, 
                    and corporate investigations.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Long-range telephoto capabilities</li>
                    <li>• Low-light and night photography</li>
                    <li>• Time-stamped documentation</li>
                    <li>• Discreet operations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Scene Documentation</h3>
                  <p className="text-gray-400 mb-3">
                    Comprehensive photography of accident scenes, crime scenes, property conditions, 
                    and workplace environments.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• 360° panoramic photography</li>
                    <li>• Detailed close-up shots</li>
                    <li>• Scale reference markers</li>
                    <li>• GPS coordinate tagging</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Evidence Photography</h3>
                  <p className="text-gray-400 mb-3">
                    Forensic-quality photography of physical evidence, documents, and exhibits 
                    for legal proceedings.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Macro photography for details</li>
                    <li>• Document reproduction</li>
                    <li>• Chain of custody maintenance</li>
                    <li>• Professional lighting setup</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Property Documentation</h3>
                  <p className="text-gray-400 mb-3">
                    Real estate, vehicle, and asset photography for insurance, legal, and 
                    commercial purposes.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Pre/post-condition documentation</li>
                    <li>• Damage assessment photography</li>
                    <li>• Asset inventory imaging</li>
                    <li>• Interior/exterior coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videography Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Videography Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎥</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Surveillance Video</h3>
                  <p className="text-gray-400 mb-3">
                    Extended surveillance videography with continuous or triggered recording 
                    for legal and investigative cases.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• 4K high-definition recording</li>
                    <li>• Continuous time-code stamping</li>
                    <li>• Audio capture (when legal)</li>
                    <li>• Multi-angle coverage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎤</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Witness Interviews</h3>
                  <p className="text-gray-400 mb-3">
                    Professional video recording of witness statements, depositions, and 
                    expert testimonials.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Multi-camera setups</li>
                    <li>• Professional audio recording</li>
                    <li>• Transcript synchronization</li>
                    <li>• Secure file delivery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚶</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Scene Walk-Throughs</h3>
                  <p className="text-gray-400 mb-3">
                    Comprehensive video documentation of locations with narration and 
                    detailed visual coverage.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Stabilized camera movement</li>
                    <li>• Live narration recording</li>
                    <li>• 360° environment capture</li>
                    <li>• Point-of-view perspectives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏱️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Activity Documentation</h3>
                  <p className="text-gray-400 mb-3">
                    Time-lapse and continuous recording of activities, construction progress, 
                    and behavioral patterns.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Long-duration recording</li>
                    <li>• Time-lapse compilation</li>
                    <li>• Motion-triggered capture</li>
                    <li>• Date/time overlay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Standards */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Court-Admissible Documentation</h2>
            <p className="text-gray-300 mb-8 text-lg">
              All visual documentation follows strict legal standards to ensure admissibility 
              in Texas courts and beyond. Our processes meet Federal Rules of Evidence requirements.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Legal Compliance</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Chain of custody documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Metadata preservation and verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Time/date stamping on all media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Certified authentication process</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Professional Standards</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Licensed and insured operators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Professional-grade equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Detailed documentation reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Expert witness testimony available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Technology */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Professional Equipment</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="font-semibold text-white mb-2">Cameras</h3>
              <p className="text-sm text-gray-400">Full-frame DSLRs, mirrorless, and cinema cameras</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="font-semibold text-white mb-2">Lenses</h3>
              <p className="text-sm text-gray-400">Wide-angle to 600mm telephoto range</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="font-semibold text-white mb-2">Stabilization</h3>
              <p className="text-sm text-gray-400">Gimbals, tripods, and motion control</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-semibold text-white mb-2">Lighting</h3>
              <p className="text-sm text-gray-400">Portable and studio lighting kits</p>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Service Area</h2>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Austin & Central Texas</h3>
                <p className="text-gray-300 mb-6">
                  Based in Austin, we provide photography and videography services throughout 
                  Central Texas with rapid response capabilities.
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>📍 <strong>Primary Area:</strong> Austin Metro, Travis County</p>
                  <p>📍 <strong>Extended Coverage:</strong> San Antonio, Houston, Dallas</p>
                  <p>📍 <strong>Statewide:</strong> All of Texas by arrangement</p>
                  <p>📍 <strong>24/7 Emergency:</strong> Available for urgent cases</p>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">Coverage Areas Include:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                  <div>• Austin</div>
                  <div>• Round Rock</div>
                  <div>• Cedar Park</div>
                  <div>• Georgetown</div>
                  <div>• Pflugerville</div>
                  <div>• Leander</div>
                  <div>• Kyle / Buda</div>
                  <div>• San Marcos</div>
                  <div>• Bastrop</div>
                  <div>• Manor</div>
                  <div>• Dripping Springs</div>
                  <div>• Lakeway</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional Visual Documentation<br/>When You Need It
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation to discuss your photography or videography needs. 
            Available 24/7 for emergency documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/get-help" 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Request Free Quote
            </Link>
            <a 
              href="tel:+15125551234" 
              className="px-8 py-4 border-2 border-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              Call (512) 555-1234
            </a>
          </div>
        </section>

        {/* Related Services */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/austin-private-detective-agency/surveillance" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Surveillance Operations</h3>
              <p className="text-sm text-gray-400">Complete surveillance with photo/video documentation</p>
            </Link>
            <Link 
              href="/fact-finding-and-evidence-collection" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Evidence Collection</h3>
              <p className="text-sm text-gray-400">Professional fact-finding and documentation services</p>
            </Link>
            <Link 
              href="/case" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Case Investigation</h3>
              <p className="text-sm text-gray-400">Comprehensive investigative services</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
