import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infidelity Investigations | The Objective Wire - Texas Business & Tech News",
  description: "As a licensed private detective agency based in Austin, Texas, we provide confidential infidelity and domestic investigations designed to bring clarity to difficult situations.",
};

export default function InfidelityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Infidelity Investigations
          </h1>
          <p className="text-xl text-gray-600">
            Confidential investigations to bring clarity to difficult situations
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional & Discreet Service
            </h2>
            <p className="text-gray-700 mb-4">
              As a licensed private detective agency based in Austin, Texas, we provide confidential 
              infidelity and domestic investigations designed to bring clarity to difficult situations. 
              We understand the emotional toll of relationship concerns and approach every case with 
              sensitivity and professionalism.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Investigation Services
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Spousal Surveillance</h3>
                <p className="text-gray-700 text-sm">
                  Discreet monitoring to document activities, establish patterns, and gather evidence 
                  of suspected infidelity
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Digital Investigations</h3>
                <p className="text-gray-700 text-sm">
                  Analysis of digital communications, social media activity, and online behavior 
                  patterns
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Background Checks</h3>
                <p className="text-gray-700 text-sm">
                  Comprehensive background investigations on suspected third parties
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Photo & Video Documentation</h3>
                <p className="text-gray-700 text-sm">
                  Court-admissible photographic and video evidence with time-stamped documentation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Licensed Investigators:</strong> Fully licensed private detectives with 
                years of experience in domestic investigations
              </li>
              <li>
                <strong>Strict Confidentiality:</strong> Your privacy is paramount. All investigations 
                are conducted with complete discretion
              </li>
              <li>
                <strong>Court-Admissible Evidence:</strong> Professional documentation that meets 
                legal standards for use in divorce proceedings
              </li>
              <li>
                <strong>Compassionate Approach:</strong> We understand the emotional difficulty of 
                these situations and treat clients with respect and empathy
              </li>
              <li>
                <strong>Local Expertise:</strong> Based in Austin with knowledge of the Texas legal 
                system and local area
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Process
            </h2>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li><strong>Confidential Consultation:</strong> Discuss your concerns and situation in a private meeting</li>
              <li><strong>Investigation Plan:</strong> Develop a customized strategy based on your specific needs</li>
              <li><strong>Evidence Gathering:</strong> Conduct professional surveillance and documentation</li>
              <li><strong>Detailed Reporting:</strong> Provide comprehensive reports with photographic evidence</li>
              <li><strong>Legal Support:</strong> Available for testimony if case proceeds to court</li>
            </ol>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Schedule a Confidential Consultation
            </h2>
            <p className="text-gray-700 mb-6">
              If you suspect infidelity and need answers, we're here to help. Contact us for a 
              confidential consultation to discuss your situation and how we can assist.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Call Now: 24/7
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Complete Discretion Guaranteed
            </h2>
            <p className="text-gray-700">
              We understand that infidelity investigations require the utmost sensitivity and 
              discretion. Our team maintains strict confidentiality throughout the entire process, 
              ensuring your privacy is protected at every step.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
