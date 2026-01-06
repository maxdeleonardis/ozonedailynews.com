import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cognyte Software Ltd (CGNT): Investigative Analytics Platform - ObjectWire.org",
  description: "Cognyte develops advanced software solutions for investigative analytics, focusing on data fusion, analysis, and visualization to deliver actionable intelligence.",
};

export default function CognyteSoftwarePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">August 26, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cognyte Software Ltd (CGNT): Investigative Analytics Platform
          </h1>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Company Overview
            </h2>
            <p className="text-gray-700 mb-4">
              Cognyte Software Ltd. (NASDAQ: CGNT) is a global leader in investigative analytics 
              software, helping government agencies and enterprises worldwide accelerate 
              investigations and produce actionable intelligence.
            </p>
            <p className="text-gray-700">
              The company's platform combines data fusion, advanced analytics, and visualization 
              tools to help security and intelligence organizations solve complex challenges.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Core Products and Solutions
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Investigative Analytics:</strong> Data fusion and analysis platforms</li>
              <li>• <strong>Security Analytics:</strong> Threat detection and monitoring systems</li>
              <li>• <strong>Cyber Intelligence:</strong> Digital forensics and investigation tools</li>
              <li>• <strong>Location Intelligence:</strong> Geospatial analytics solutions</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Market Position
            </h2>
            <p className="text-gray-700 mb-4">
              Cognyte serves over 1,000 government and enterprise customers in more than 100 
              countries. The company spun off from Verint Systems in 2021 and has established 
              itself as an independent provider of security analytics solutions.
            </p>
            <p className="text-gray-700">
              Key markets include law enforcement, intelligence agencies, financial institutions, 
              and enterprise security teams requiring advanced investigative capabilities.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Investment Considerations
            </h3>
            <p className="text-gray-700">
              CGNT stock trades on NASDAQ with a focus on recurring revenue from enterprise 
              software subscriptions. The company competes in the growing security analytics 
              market valued at billions globally. Investors should evaluate the company's 
              customer retention, revenue growth, and market expansion strategies.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
