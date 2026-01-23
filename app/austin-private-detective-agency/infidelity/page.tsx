import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Infidelity Investigations Austin TX | Private Detective - ObjectWire",
  description: "Discreet infidelity investigations in Austin, Texas. Professional surveillance, digital forensics, and relationship verification services. Licensed private investigators providing court-admissible evidence.",
  keywords: ["infidelity investigation Austin", "cheating spouse detective Texas", "private investigator infidelity", "Austin PI surveillance", "marriage investigation"],
  alternates: {
    canonical: 'https://www.objectwire.org/austin-private-detective-agency/infidelity',
  },
};

export default function AustinInfidelityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 max-w-6xl relative">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/austin-private-detective-agency" className="hover:text-white transition-colors">
              Austin Private Detective Agency
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Infidelity Investigations</span>
          </nav>
          
          <header className="mb-12">
            <p className="text-red-400 text-sm font-mono tracking-wider mb-4">CONFIDENTIAL INVESTIGATIONS</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Infidelity<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Investigations
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discreet, professional investigations to uncover the truth in suspected infidelity cases. 
              We provide clarity during difficult times with court-admissible evidence.
            </p>
          </header>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/get-help" 
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Confidential Consultation
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
        
        {/* Understanding Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">We Understand What You're Going Through</h2>
            <p className="text-gray-300 text-lg mb-6">
              Suspecting a partner of infidelity is emotionally devastating. The uncertainty, anxiety, 
              and sleepless nights can be overwhelming. Our experienced investigators approach every 
              case with compassion, discretion, and professionalism—helping you find the truth so you 
              can make informed decisions about your future.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="font-semibold text-white mb-2">100% Confidential</h3>
                <p className="text-sm text-gray-400">Complete discretion guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Court-Admissible</h3>
                <p className="text-sm text-gray-400">Evidence that holds up in court</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Compassionate</h3>
                <p className="text-sm text-gray-400">Sensitive to your emotional state</p>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Common Signs of Infidelity</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Behavioral Changes</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Increased secrecy about phone, email, or social media</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Unexplained absences or late nights "at work"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Sudden changes in appearance or grooming habits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Defensive or evasive when questioned about whereabouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Emotional distance or decreased intimacy</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Financial & Digital Red Flags</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Unexplained expenses or secret credit cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>New passwords on devices or accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Deleting call logs, texts, or browser history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Receiving calls/texts at odd hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Sudden interest in privacy or new apps</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investigation Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Our Infidelity Investigation Services</h2>
          
          <div className="space-y-6">
            {/* Surveillance */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-red-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📷</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Spousal Surveillance</h3>
                  <p className="text-gray-400 mb-4">
                    Discreet monitoring to document activities, establish patterns of behavior, and 
                    gather photographic/video evidence of suspected infidelity.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Mobile surveillance operations</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Fixed-location monitoring</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Time-stamped photo/video documentation</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Activity logs and reports</li>
              </ul>
            </div>

            {/* Digital Forensics */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Digital Forensics</h3>
                  <p className="text-gray-400 mb-4">
                    Uncover hidden digital communications, social media activity, dating app usage, 
                    and online behavior that may indicate infidelity.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Email and messaging analysis</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Social media investigation</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Dating app detection</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Hidden account discovery</li>
              </ul>
            </div>

            {/* Background Checks */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-purple-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔍</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Background Investigations</h3>
                  <p className="text-gray-400 mb-4">
                    Investigate suspected third parties, verify identities, and uncover hidden 
                    relationships or connections.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Third-party identification</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Employment verification</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Address history searches</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Social connections mapping</li>
              </ul>
            </div>

            {/* Asset Searches */}
            <div className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Financial & Asset Investigation</h3>
                  <p className="text-gray-400 mb-4">
                    Uncover hidden assets, secret accounts, and unexplained expenditures that may 
                    indicate infidelity or financial deception.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm ml-16">
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Bank account searches</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Credit card analysis</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Property ownership checks</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Hidden asset discovery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">How Our Investigation Process Works</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                1
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-2">Confidential Consultation</h3>
                <p className="text-gray-400">
                  We meet in person or virtually to discuss your concerns, suspicions, and what you've 
                  observed. Everything is completely confidential.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                2
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-2">Investigation Plan Development</h3>
                <p className="text-gray-400">
                  We create a customized investigation strategy based on your specific situation, 
                  timeline, and budget.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                3
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-2">Discreet Investigation</h3>
                <p className="text-gray-400">
                  Our investigators conduct surveillance and gather evidence without detection, 
                  documenting all activities professionally.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                4
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-2">Evidence Documentation</h3>
                <p className="text-gray-400">
                  All findings are documented with time-stamped photos, videos, and detailed reports 
                  that are admissible in court proceedings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                5
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-2">Private Presentation of Findings</h3>
                <p className="text-gray-400">
                  We meet with you to review all evidence and discuss next steps, providing guidance 
                  and support during this difficult time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Why Choose Our Infidelity Investigation Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Licensed & Experienced</h3>
              <p className="text-gray-300">
                Texas-licensed private investigators with years of experience in domestic cases. 
                We know the law and ensure all evidence is legally obtained and admissible in court.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">100% Confidential</h3>
              <p className="text-gray-300">
                Your privacy is our priority. We never disclose client information and conduct all 
                investigations with absolute discretion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Compassionate Approach</h3>
              <p className="text-gray-300">
                We understand the emotional toll of infidelity investigations. Our team treats every 
                client with empathy, respect, and sensitivity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Court-Ready Evidence</h3>
              <p className="text-gray-300">
                All documentation meets legal standards for divorce proceedings, custody cases, and 
                prenuptial agreement disputes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get the Truth. Find Peace of Mind.
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't let uncertainty control your life. Contact us for a confidential consultation 
            and take the first step toward clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/get-help" 
              className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-lg"
            >
              Schedule Confidential Consultation
            </Link>
            <a 
              href="tel:+15125551234" 
              className="px-8 py-4 border-2 border-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors text-lg"
            >
              Call 24/7: (512) 555-1234
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            All consultations are 100% confidential. We're available 24/7 for urgent cases.
          </p>
        </section>

        {/* Related Services */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/austin-private-detective-agency/surveillance" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Surveillance Operations</h3>
              <p className="text-sm text-gray-400">Professional monitoring and documentation services</p>
            </Link>
            <Link 
              href="/fact-finding-and-evidence-collection" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Evidence Collection</h3>
              <p className="text-sm text-gray-400">Comprehensive fact-finding services</p>
            </Link>
            <Link 
              href="/case" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Case Investigation</h3>
              <p className="text-sm text-gray-400">Full investigative services for all case types</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
