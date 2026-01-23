import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "the intercept sues doge - ObjectWire.org",
  description: "The lawsuits allege that DOGE',
  alternates: {
    canonical: 'https://www.objectwire.org/the-intercept-sues-doge',
  },s structure and actions violate federal transparency laws, raising questions about its authority and potential conflicts of interest.",
};

export default function InterceptSuesDogePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">June 12, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Intercept Sues DOGE
          </h1>
          <p className="text-xl text-gray-600">
            Legal action challenges Department of Government Efficiency over transparency violations
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Transparency Concerns
            </h2>
            <p className="text-gray-700 mb-4">
              The lawsuits allege that DOGE's structure and actions violate federal transparency laws, 
              raising questions about its authority and potential conflicts of interest. The legal 
              challenge focuses on the department's operations and decision-making processes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Allegations
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Violations of federal transparency requirements</li>
              <li>• Unclear authority and mandate</li>
              <li>• Potential conflicts of interest</li>
              <li>• Lack of public accountability mechanisms</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Legal Framework
            </h2>
            <p className="text-gray-700">
              The lawsuit invokes federal transparency laws, including the Freedom of Information Act 
              and Federal Advisory Committee Act, arguing that DOGE's operations must comply with 
              established legal frameworks for government agencies.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Broader Implications
            </h2>
            <p className="text-gray-700">
              This legal challenge could set precedents for how new government entities are structured 
              and held accountable, with implications for transparency and oversight across federal 
              operations.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
