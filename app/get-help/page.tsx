import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Austin Private Detective + Investigative Journalism Services - ObjectWire.org",
  description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
};

export default function GetHelpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Help
          </h1>
          <p className="text-xl text-gray-600">
            Austin Private Detective + Investigative Journalism Services
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Investigation Services
            </h2>
            <p className="text-gray-700 mb-4">
              Based in Austin, Texas, we provide discreet, results-driven private detective services 
              for individuals, businesses, and legal professionals. Whether you're dealing with a 
              personal matter or require corporate investigation, our team delivers thorough, 
              professional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Private Detective Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Background investigations</li>
                <li>• Surveillance operations</li>
                <li>• Missing persons</li>
                <li>• Fraud investigations</li>
                <li>• Asset searches</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investigative Journalism</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Deep-dive reporting</li>
                <li>• Document analysis</li>
                <li>• Source development</li>
                <li>• Public records research</li>
                <li>• Fact verification</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Request Assistance
            </h2>
            <p className="text-gray-700 mb-6">
              Contact us for a confidential consultation. We'll discuss your needs and develop 
              a strategic approach to your investigation.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Call Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose ObjectWire
            </h2>
            <p className="text-gray-700 mb-4">
              Our unique combination of investigative journalism experience and private detective 
              expertise allows us to approach cases from multiple angles, ensuring comprehensive 
              results.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Licensed and experienced investigators</li>
              <li>• Journalist-level research capabilities</li>
              <li>• Strict confidentiality protocols</li>
              <li>• Court-admissible documentation</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
