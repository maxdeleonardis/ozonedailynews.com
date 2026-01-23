import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Surveillance Services | Austin Private Detective Agency - ObjectWire",
  description: "Professional covert surveillance operations in Austin, Texas. Infidelity investigations, child custody verification, worker's compensation claims, corporate surveillance, and insurance fraud investigation.",
  keywords: ["Austin surveillance", "private investigator surveillance", "Texas PI", "covert surveillance Austin", "infidelity investigation Texas"],
  alternates: {
    canonical: 'https://www.objectwire.org/austin-private-detective-agency/surveillance',
  },
};

export default function AustinSurveillancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 max-w-5xl relative">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/austin-private-detective-agency" className="hover:text-white transition-colors">
              Austin Private Detective Agency
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Surveillance</span>
          </nav>
          
          <header className="mb-12">
            <p className="text-blue-400 text-sm font-mono tracking-wider mb-4">INVESTIGATIVE SERVICES</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Covert Surveillance <br/>
              <span className="text-blue-400">Operations</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Professional, discreet surveillance services for legal, domestic, and corporate 
              investigations throughout Austin and Central Texas.
            </p>
          </header>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/get-help" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
            >
              Request Consultation
            </Link>
            <Link 
              href="/austin-private-detective-agency" 
              className="px-6 py-3 border border-gray-600 text-white font-medium rounded hover:bg-gray-800 transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Why Surveillance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">
            When Surveillance Is Necessary
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentation of Activity</h3>
              <p className="text-gray-400">
                When verbal accounts aren't enough, visual documentation provides irrefutable 
                evidence for legal proceedings, custody disputes, or corporate decisions.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pattern Verification</h3>
              <p className="text-gray-400">
                Establish behavioral patterns over time to support or refute claims made 
                in legal filings, insurance claims, or employment disputes.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Court-Admissible Evidence</h3>
              <p className="text-gray-400">
                All surveillance is conducted within legal boundaries and documented to 
                meet evidentiary standards for Texas courts.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
              <p className="text-gray-400">
                Sometimes you need to know the truth. Our professional surveillance provides 
                clarity when suspicions arise in personal or business relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">
            Surveillance Services
          </h2>
          
          <div className="space-y-6">
            {/* Infidelity */}
            <div className="bg-gray-800/30 rounded-lg p-8 border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-3">Infidelity & Domestic Investigations</h3>
              <p className="text-gray-400 mb-4">
                Discreet monitoring to document spousal activities, establish patterns of behavior, 
                and provide evidence for domestic matters including divorce proceedings.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-red-400">•</span> Suspected infidelity documentation</li>
                <li className="flex items-center gap-2"><span className="text-red-400">•</span> Activity and location tracking</li>
                <li className="flex items-center gap-2"><span className="text-red-400">•</span> Relationship verification</li>
                <li className="flex items-center gap-2"><span className="text-red-400">•</span> Photographic/video evidence</li>
              </ul>
            </div>

            {/* Child Custody */}
            <div className="bg-gray-800/30 rounded-lg p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3">Child Custody & Cohabitation Verification</h3>
              <p className="text-gray-400 mb-4">
                Document living arrangements, parenting practices, and household environments for 
                custody proceedings and child support modifications.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-green-400">•</span> Parenting behavior documentation</li>
                <li className="flex items-center gap-2"><span className="text-green-400">•</span> Cohabitation verification</li>
                <li className="flex items-center gap-2"><span className="text-green-400">•</span> Environment assessment</li>
                <li className="flex items-center gap-2"><span className="text-green-400">•</span> Visitation compliance</li>
              </ul>
            </div>

            {/* Workers Comp */}
            <div className="bg-gray-800/30 rounded-lg p-8 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-3">Worker's Compensation Claims</h3>
              <p className="text-gray-400 mb-4">
                Verify the legitimacy of injury claims by documenting daily activities and physical 
                capabilities of claimants for employers and insurance companies.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Physical activity documentation</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Secondary employment checks</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Lifestyle monitoring</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Claim verification</li>
              </ul>
            </div>

            {/* Corporate */}
            <div className="bg-gray-800/30 rounded-lg p-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3">Corporate & Employee Surveillance</h3>
              <p className="text-gray-400 mb-4">
                Monitor employee activities, investigate fraud, document policy violations, and 
                protect company assets from internal and external threats.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Employee misconduct investigation</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Non-compete violation monitoring</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Time theft documentation</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Asset protection surveillance</li>
              </ul>
            </div>

            {/* Insurance Fraud */}
            <div className="bg-gray-800/30 rounded-lg p-8 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-3">Insurance Fraud Investigation</h3>
              <p className="text-gray-400 mb-4">
                Document activities that contradict insurance claims, providing evidence for 
                liability cases, disability fraud, and property claim investigations.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Disability claim verification</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Auto accident investigation</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Property claim review</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Fraud documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">
            Surveillance Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">Mobile Surveillance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Multi-vehicle operations for extended tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Discreet subject following in urban and rural environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Long-distance travel surveillance capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Real-time reporting and updates</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-green-400">Stationary Surveillance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Fixed-location monitoring and observation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Extended surveillance periods (days/weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Visitor and activity logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Pattern and behavior analysis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-3">Documentation & Reporting</h3>
            <p className="text-gray-400 mb-4">
              All surveillance operations include comprehensive documentation:
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-gray-900/50 rounded">
                <p className="text-2xl mb-2">📷</p>
                <p className="text-sm text-gray-300">High-Resolution Photography</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded">
                <p className="text-2xl mb-2">🎥</p>
                <p className="text-sm text-gray-300">HD Video Documentation</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded">
                <p className="text-2xl mb-2">📝</p>
                <p className="text-sm text-gray-300">Detailed Written Reports</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded">
                <p className="text-2xl mb-2">⏰</p>
                <p className="text-sm text-gray-300">Time-Stamped Activity Logs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">
            Service Area
          </h2>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Central Texas Coverage</h3>
            <p className="text-gray-300 mb-6">
              Based in Austin, our surveillance team operates throughout Central Texas and beyond:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Austin Metro</p>
                <ul className="space-y-1 text-sm">
                  <li>• Downtown Austin</li>
                  <li>• Round Rock</li>
                  <li>• Cedar Park</li>
                  <li>• Pflugerville</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Surrounding Areas</p>
                <ul className="space-y-1 text-sm">
                  <li>• San Antonio</li>
                  <li>• Georgetown</li>
                  <li>• Kyle / Buda</li>
                  <li>• Bastrop</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Extended Coverage</p>
                <ul className="space-y-1 text-sm">
                  <li>• Houston</li>
                  <li>• Dallas / Fort Worth</li>
                  <li>• Statewide as needed</li>
                  <li>• Interstate operations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Request a Confidential Consultation</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every surveillance case is unique. Contact us for a free, confidential consultation 
            to discuss your specific situation and how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/get-help" 
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/austin-private-detective-agency" 
              className="px-8 py-4 border border-gray-500 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </section>

        {/* Related Services */}
        <section className="mt-16">
          <h2 className="text-xl font-bold mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/infidelity" 
              className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">Infidelity Investigations</h3>
              <p className="text-sm text-gray-400">Specialized marital surveillance and investigation</p>
            </Link>
            <Link 
              href="/case" 
              className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">Case Investigation</h3>
              <p className="text-sm text-gray-400">Comprehensive investigative services</p>
            </Link>
            <Link 
              href="/fact-finding-and-evidence-collection" 
              className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">Evidence Collection</h3>
              <p className="text-sm text-gray-400">Professional fact-finding and documentation</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
