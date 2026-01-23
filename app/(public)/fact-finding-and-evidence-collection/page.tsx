import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fact-finding and Evidence Collection - ObjectWire.org",
  description: "We investigate personal injury incidents, insurance fraud, property disputes, harassment allegations, and more. In criminal cases, we locate and interview witnesses.",
  alternates: {
    canonical: 'https://www.objectwire.org/fact-finding-and-evidence-collection',
  },
};

export default function FactFindingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fact-finding and Evidence Collection
          </h1>
          <p className="text-xl text-gray-600">
            Professional investigative services for legal, civil, and criminal matters
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Comprehensive Investigation Services
            </h2>
            <p className="text-gray-700 mb-4">
              We investigate personal injury incidents, insurance fraud, property disputes, harassment 
              allegations, and more. In criminal cases, we locate and interview witnesses, gather 
              physical evidence, and compile detailed reports for legal proceedings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Civil Investigations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Personal injury incidents</li>
                <li>• Insurance fraud cases</li>
                <li>• Property disputes</li>
                <li>• Harassment allegations</li>
                <li>• Employment matters</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Criminal Investigations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Witness location and interviews</li>
                <li>• Physical evidence collection</li>
                <li>• Scene documentation</li>
                <li>• Background research</li>
                <li>• Surveillance operations</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Evidence Collection Methodology
            </h2>
            <p className="text-gray-700 mb-4">
              Our evidence collection follows strict legal protocols to ensure admissibility in court:
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Proper chain of custody documentation</li>
              <li>Detailed photographic and video evidence</li>
              <li>Witness statement recording and transcription</li>
              <li>Digital evidence preservation</li>
              <li>Expert consultation and analysis</li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Witness Interviews
            </h2>
            <p className="text-gray-700 mb-4">
              We locate and interview witnesses with professionalism and sensitivity. Our investigators 
              are trained in proper interview techniques that elicit accurate information while 
              maintaining legal and ethical standards.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Request Investigation Services
            </h2>
            <p className="text-gray-700 mb-6">
              Whether you're preparing for litigation, investigating insurance claims, or gathering 
              evidence for a criminal defense, our team provides thorough, professional fact-finding 
              services.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Investigation
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Consultation
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Standards
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Licensed private investigators</li>
              <li>• Court-admissible documentation</li>
              <li>• Strict confidentiality protocols</li>
              <li>• Detailed written reports</li>
              <li>• Expert testimony available</li>
              <li>• 24/7 emergency response</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
