import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography Videography Austin Tx - ObjectWire.org",
  description: "At Objective Wire, we specialize in professional photography and videography services designed for investigative, legal, and private documentation purposes.",
};

export default function PhotographyVideographyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photography & Videography Services
          </h1>
          <p className="text-xl text-gray-600">
            Professional documentation for investigative, legal, and private purposes
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Specialized Documentation Services
            </h2>
            <p className="text-gray-700 mb-4">
              At Objective Wire, we specialize in professional photography and videography services 
              designed for investigative, legal, and private documentation purposes. Our team delivers 
              court-admissible, high-quality visual documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Photography Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Surveillance photography</li>
                <li>• Scene documentation</li>
                <li>• Evidence photography</li>
                <li>• Property documentation</li>
                <li>• Accident reconstruction</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Videography Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Surveillance video</li>
                <li>• Witness interviews</li>
                <li>• Scene walk-throughs</li>
                <li>• Activity documentation</li>
                <li>• Time-stamped recordings</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Court-Admissible Documentation
            </h2>
            <p className="text-gray-700 mb-4">
              All of our visual documentation is created following legal standards for evidence 
              collection. We maintain proper chain of custody, time-stamping, and metadata 
              preservation to ensure admissibility in legal proceedings.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Austin, Texas Based
            </h2>
            <p className="text-gray-700 mb-6">
              Serving the greater Austin area and beyond. Our team is available for on-site 
              documentation and consultation.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Request Quote
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Standards
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Licensed and insured professionals</li>
              <li>• Professional-grade equipment</li>
              <li>• Strict confidentiality protocols</li>
              <li>• Detailed documentation reports</li>
              <li>• 24/7 emergency services available</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
