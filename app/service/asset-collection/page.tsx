import type { Metadata } from "next";
import ServiceInterlinks from "@/components/ServiceInterlinks";

export const metadata: Metadata = {
  title: "Photography and Videography as a Service - ObjectWire.org",
  description: "At Objective Wire, we specialize in professional photography and videography services designed for investigative, legal, and private documentation purposes.",
  alternates: {
    canonical: 'https://www.objectwire.org/asset-collection',
  },
};

export default function AssetCollectionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photography & Videography as a Service
          </h1>
          <p className="text-xl text-gray-600">
            Professional visual documentation for investigative, legal, and private purposes
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Documentation Services
            </h2>
            <p className="text-gray-700 mb-4">
              At Objective Wire, we specialize in professional photography and videography services 
              designed for investigative, legal, and private documentation purposes. Our experienced 
              team delivers court-admissible, high-quality visual evidence and documentation that 
              meets the highest professional standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Photography Services</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Evidence documentation</li>
                <li>• Scene photography</li>
                <li>• Surveillance photography</li>
                <li>• Property documentation</li>
                <li>• Accident reconstruction</li>
                <li>• Time-stamped photography</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Videography Services</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Surveillance video</li>
                <li>• Witness interviews</li>
                <li>• Scene walk-throughs</li>
                <li>• Activity documentation</li>
                <li>• Event recording</li>
                <li>• Video depositions</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Asset Collection & Documentation
            </h2>
            <p className="text-gray-700 mb-4">
              Our asset collection services provide comprehensive visual documentation of property, 
              equipment, and assets for various purposes:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Legal Proceedings</h3>
                <p className="text-gray-700 text-sm">
                  Document assets for divorce settlements, estate disputes, business valuations, 
                  and litigation support
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Insurance Claims</h3>
                <p className="text-gray-700 text-sm">
                  Pre-loss documentation, damage assessment, and claim verification photography
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Business Documentation</h3>
                <p className="text-gray-700 text-sm">
                  Inventory documentation, equipment records, and asset tracking for businesses
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Real Estate</h3>
                <p className="text-gray-700 text-sm">
                  Property condition reports, construction progress, and facility documentation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Court-Admissible Standards
            </h2>
            <p className="text-gray-700 mb-4">
              All of our visual documentation is created following legal standards for evidence 
              collection and preservation:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Proper chain of custody documentation</li>
              <li>• Accurate time and date stamping</li>
              <li>• Metadata preservation and verification</li>
              <li>• Professional equipment calibration</li>
              <li>• Detailed documentation logs</li>
              <li>• Expert witness testimony available</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Equipment</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Professional DSLR and mirrorless cameras</li>
                  <li>• 4K and HD video recording</li>
                  <li>• Low-light and infrared capability</li>
                  <li>• Aerial drone photography/video</li>
                  <li>• Specialized forensic equipment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• On-site and mobile services</li>
                  <li>• Emergency 24/7 availability</li>
                  <li>• Multi-day documentation projects</li>
                  <li>• Secure file delivery and storage</li>
                  <li>• Professional editing and enhancement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Request Documentation Services
            </h2>
            <p className="text-gray-700 mb-6">
              Whether you need evidence photography, asset documentation, or video recording for 
              legal purposes, our team is ready to assist. Contact us for a consultation.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Quote
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                24/7 Emergency
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Objective Wire
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Licensed & Insured:</strong> Fully licensed private investigators with 
                comprehensive insurance coverage
              </li>
              <li>
                <strong>Legal Expertise:</strong> Understanding of evidentiary requirements and 
                court procedures
              </li>
              <li>
                <strong>Confidentiality:</strong> Strict privacy protocols for all client 
                documentation
              </li>
              <li>
                <strong>Professional Quality:</strong> High-resolution, professional-grade 
                equipment and techniques
              </li>
              <li>
                <strong>Austin-Based:</strong> Serving the greater Austin area and available 
                for travel
              </li>
            </ul>
          </div>

          <ServiceInterlinks currentPath="/service/asset-collection" />
        </section>
      </div>
    </main>
  );
}
