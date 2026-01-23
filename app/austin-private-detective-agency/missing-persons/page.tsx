import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Missing Persons Investigation Austin TX | Private Detective - ObjectWire",
  description: "Professional missing persons locate services in Austin, Texas. Family reunification, runaway recovery, skip tracing, and debtor location. Licensed private investigators with nationwide reach.",
  keywords: ["missing persons Austin", "locate people Texas", "find missing person", "skip tracing Austin", "private investigator locate"],
  alternates: {
    canonical: 'https://www.objectwire.org/austin-private-detective-agency/missing-persons',
  },
};

export default function AustinMissingPersonsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 py-20 max-w-6xl relative">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/austin-private-detective-agency" className="hover:text-white transition-colors">
              Austin Private Detective Agency
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Missing Persons</span>
          </nav>
          
          <header className="mb-12">
            <p className="text-blue-400 text-sm font-mono tracking-wider mb-4">LOCATE SERVICES</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Missing Persons<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Investigation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Experienced private investigators helping families reunite, locate debtors, and find 
              missing individuals throughout Texas and nationwide.
            </p>
          </header>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/get-help" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Investigation
            </Link>
            <Link 
              href="/austin-private-detective-agency" 
              className="px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Professional Missing Persons Services</h2>
            <p className="text-gray-300 text-lg mb-6">
              Whether you're searching for a long-lost family member, a runaway teenager, a debtor who 
              has disappeared, or someone who has simply lost touch, our experienced investigators combine 
              traditional detective work with modern technology to locate missing persons.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Expert Investigators</h3>
                <p className="text-sm text-gray-400">Years of locate experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌎</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Nationwide Reach</h3>
                <p className="text-sm text-gray-400">All 50 states coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Advanced Tools</h3>
                <p className="text-sm text-gray-400">Modern database access</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Compassionate</h3>
                <p className="text-sm text-gray-400">Sensitive to your needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Types of Missing Persons Cases We Handle</h2>
          
          <div className="space-y-6">
            {/* Family Reunification */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Family Reunification</h3>
                  <p className="text-gray-400 mb-4">
                    Helping families reconnect with biological parents, adopted siblings, estranged 
                    relatives, or long-lost family members for emotional closure and connection.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Birth parent searches</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Adoption reunion assistance</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Estranged family member location</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Long-lost relative finding</li>
              </ul>
            </div>

            {/* Runaway Minors */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-red-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚨</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Runaway Minors & Missing Children</h3>
                  <p className="text-gray-400 mb-4">
                    Urgent, time-sensitive searches for missing teenagers and children. We coordinate 
                    with law enforcement and use all available resources to ensure safe recovery.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> 24/7 rapid response service</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Law enforcement coordination</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Social media monitoring</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Friend/peer network investigation</li>
              </ul>
            </div>

            {/* Skip Tracing */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💼</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Skip Tracing & Debtor Location</h3>
                  <p className="text-gray-400 mb-4">
                    Locate individuals who have "skipped town" to avoid financial obligations, legal 
                    proceedings, or business disputes.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Debtor location services</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Asset searches and recovery</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Witness location for legal cases</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Business partner tracking</li>
              </ul>
            </div>

            {/* Missing Adults */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-purple-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Missing Adults & Elderly</h3>
                  <p className="text-gray-400 mb-4">
                    Locate missing adults including elderly individuals with dementia, adults who have 
                    voluntarily disappeared, or those who have lost contact.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Elderly/dementia wandering cases</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Voluntary missing person searches</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Lost contact individual location</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Health/welfare checks</li>
              </ul>
            </div>

            {/* Lost Friends */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-orange-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Lost Friends & Old Contacts</h3>
                  <p className="text-gray-400 mb-4">
                    Reconnect with old friends, military buddies, former classmates, or people who 
                    have simply moved and lost touch over the years.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> High school/college friend searches</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Military service buddy location</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Former neighbor/coworker finding</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Reunion planning assistance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investigation Methods */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Our Investigation Methods</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Database Research</h3>
              <p className="text-gray-300 mb-4">
                Access to comprehensive databases including:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Public records and court documents</li>
                <li>• DMV and vehicle registration</li>
                <li>• Property ownership records</li>
                <li>• Utility and service connections</li>
                <li>• Professional licensing databases</li>
                <li>• Social media and online presence</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Field Investigation</h3>
              <p className="text-gray-300 mb-4">
                Traditional detective work including:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Interviews with family, friends, associates</li>
                <li>• Neighborhood canvassing</li>
                <li>• Workplace inquiries</li>
                <li>• Known associate surveillance</li>
                <li>• Location verification</li>
                <li>• Discreet contact when appropriate</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Digital Investigation</h3>
              <p className="text-gray-300 mb-4">
                Modern technology-based searches:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Social media platform searches</li>
                <li>• Online profile identification</li>
                <li>• Digital footprint analysis</li>
                <li>• Email address tracing</li>
                <li>• Phone number lookups</li>
                <li>• Online activity monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Network Collaboration</h3>
              <p className="text-gray-300 mb-4">
                Leveraging professional networks:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Nationwide investigator network</li>
                <li>• Law enforcement coordination</li>
                <li>• Skip tracing specialist referrals</li>
                <li>• International investigator partners</li>
                <li>• Legal professional collaboration</li>
                <li>• Community resource utilization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Our Investigation Process</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500 hidden md:block" />
            
            <div className="space-y-8">
              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Initial Consultation</h3>
                  <p className="text-gray-400">
                    Share all available information about the missing person: last known location, 
                    physical description, relationships, habits, and circumstances of disappearance.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Information Gathering</h3>
                  <p className="text-gray-400">
                    We compile all identifying information, photographs, known associates, previous 
                    addresses, and develop a comprehensive subject profile.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Database Research</h3>
                  <p className="text-gray-400">
                    Comprehensive searches of public records, databases, and online resources to 
                    identify current or recent locations and activities.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Field Investigation</h3>
                  <p className="text-gray-400">
                    Conduct interviews, surveillance, and on-the-ground investigation to verify 
                    leads and locate the missing person.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Contact & Reunification</h3>
                  <p className="text-gray-400">
                    Once located, we handle initial contact sensitively and facilitate reunification 
                    or provide you with verified location information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">What Helps Us Succeed</h2>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12 border border-gray-700">
            <p className="text-gray-300 text-lg mb-6">
              The more information you can provide, the faster and more successful the investigation. 
              Helpful information includes:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-white mb-3">Basic Information</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>✓ Full legal name (and aliases)</li>
                  <li>✓ Date of birth or approximate age</li>
                  <li>✓ Social Security Number (if available)</li>
                  <li>✓ Recent photographs</li>
                  <li>✓ Physical description</li>
                  <li>✓ Last known address</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-3">Additional Details</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>✓ Known associates and relatives</li>
                  <li>✓ Employment history</li>
                  <li>✓ Vehicle information</li>
                  <li>✓ Phone numbers and email addresses</li>
                  <li>✓ Social media usernames</li>
                  <li>✓ Circumstances of disappearance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Why Choose Our Missing Persons Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Proven Success Rate</h3>
              <p className="text-gray-300">
                Years of experience locating missing persons with access to comprehensive databases 
                and investigative resources not available to the general public.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Nationwide Network</h3>
              <p className="text-gray-300">
                Our investigator network covers all 50 states, allowing us to conduct investigations 
                anywhere in the country with local expertise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Compassionate Approach</h3>
              <p className="text-gray-300">
                We understand the emotional difficulty of missing persons cases and provide regular 
                updates, support, and guidance throughout the process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Legal Compliance</h3>
              <p className="text-gray-300">
                All investigations conducted within legal boundaries with full licensing and adherence 
                to privacy laws and ethical standards.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let Us Help You Find Who You're Looking For
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Every day matters in missing persons cases. Contact us today for a free consultation 
            and let our experienced investigators start the search.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/get-help" 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Start Your Search Today
            </Link>
            <a 
              href="tel:+15125551234" 
              className="px-8 py-4 border-2 border-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              Call 24/7: (512) 555-1234
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Free consultation. No obligation. Nationwide service available.
          </p>
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
              <p className="text-sm text-gray-400">Professional monitoring and documentation</p>
            </Link>
            <Link 
              href="/fact-finding-and-evidence-collection" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Evidence Collection</h3>
              <p className="text-sm text-gray-400">Comprehensive fact-finding services</p>
            </Link>
            <Link 
              href="/case" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Case Investigation</h3>
              <p className="text-sm text-gray-400">Full investigative services</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
