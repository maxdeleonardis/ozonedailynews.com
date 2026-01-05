import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surveillance - The Objective Wire | Texas Business &Tech News",
  description: "Covert Surveillance for Legal, Domestic, and Corporate Cases. Infidelity investigations, child custody verification, worker's compensation claims, and more.",
};

export default function SurveillancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Surveillance Services
          </h1>
          <p className="text-xl text-gray-600">
            Covert Surveillance for Legal, Domestic, and Corporate Cases
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Surveillance Operations
            </h2>
            <p className="text-gray-700 mb-4">
              Our experienced surveillance team provides discreet, professional monitoring services 
              for legal, domestic, and corporate investigations. All operations are conducted within 
              legal boundaries and produce court-admissible documentation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Surveillance Services
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Infidelity and Domestic Disputes</h3>
                <p className="text-gray-700 text-sm">
                  Discreet monitoring to document spousal activities, establish patterns of behavior, 
                  and provide evidence for domestic matters.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Child Custody and Cohabitation Verification</h3>
                <p className="text-gray-700 text-sm">
                  Document living arrangements, parenting practices, and household environments for 
                  custody proceedings and support modifications.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Worker's Compensation Claims</h3>
                <p className="text-gray-700 text-sm">
                  Verify the legitimacy of injury claims by documenting daily activities and physical 
                  capabilities of claimants.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Corporate Surveillance</h3>
                <p className="text-gray-700 text-sm">
                  Monitor employee activities, investigate fraud, document policy violations, and 
                  protect company assets.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Insurance Fraud Investigation</h3>
                <p className="text-gray-700 text-sm">
                  Document activities that contradict insurance claims, providing evidence for 
                  liability and fraud cases.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Surveillance Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Surveillance</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Multi-vehicle operations</li>
                  <li>• Subject tracking and following</li>
                  <li>• Long-distance monitoring</li>
                  <li>• Traffic surveillance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Stationary Surveillance</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Location monitoring</li>
                  <li>• Activity documentation</li>
                  <li>• Pattern identification</li>
                  <li>• Extended observation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Documentation and Reporting
            </h2>
            <p className="text-gray-700 mb-4">
              All surveillance operations include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• High-quality photo and video evidence</li>
              <li>• Time-stamped activity logs</li>
              <li>• GPS tracking data (when applicable)</li>
              <li>• Detailed written reports</li>
              <li>• Court-ready documentation</li>
              <li>• Expert testimony availability</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Request Surveillance Services
            </h2>
            <p className="text-gray-700 mb-6">
              Contact us for a confidential consultation. We'll discuss your case, recommend 
              appropriate surveillance strategies, and provide transparent pricing.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Emergency Services
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Legal and Ethical Standards
            </h2>
            <p className="text-gray-700">
              All surveillance operations are conducted by licensed investigators following Texas 
              law and ethical standards. We maintain strict confidentiality and ensure all evidence 
              collection methods are legally admissible in court proceedings.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
