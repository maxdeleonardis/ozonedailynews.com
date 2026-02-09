import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nasdaq proposal for Extended trading hours in 2026 - ObjectWire.org",
  description: "In December 2025, Nasdaq filed a proposal with the U.S. Securities and Exchange Commission (SEC) to extend trading hours for U.S.-listed securities.",
  alternates: {
    canonical: 'https://www.objectwire.org/nasdaq-proposed-24-7-trading',
  },
};

export default function NasdaqExtendedHoursPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">3 days ago</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nasdaq Proposal for Extended Trading Hours in 2026
          </h1>
          <p className="text-xl text-gray-600">
            Exchange seeks SEC approval for longer trading sessions
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Historic Proposal Filed
            </h2>
            <p className="text-gray-700 mb-4">
              In December 2025, Nasdaq filed a proposal with the U.S. Securities and Exchange 
              Commission (SEC) to extend trading hours for U.S.-listed securities. The proposal 
              could fundamentally reshape how American markets operate, potentially moving toward 
              24/7 trading availability.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Proposed Changes
            </h2>
            <p className="text-gray-700 mb-4">
              While specific details vary by trading venue, the proposal generally includes:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Extended pre-market hours (potentially starting at midnight ET)</li>
              <li>• Extended after-hours trading (potentially until midnight ET)</li>
              <li>• Weekend trading sessions for select securities</li>
              <li>• Phased implementation starting in 2026</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Rationale Behind the Move
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Global Market Integration</h3>
                <p className="text-gray-700 text-sm">
                  Allow U.S. investors to react to international market events in real-time
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Retail Investor Access</h3>
                <p className="text-gray-700 text-sm">
                  Enable trading for investors who work during traditional market hours
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Competitive Pressure</h3>
                <p className="text-gray-700 text-sm">
                  Match cryptocurrency markets that already trade 24/7
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Potential Concerns
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Market Volatility:</strong> Extended hours could increase price swings 
                with lower liquidity
              </li>
              <li>
                <strong>Market Maker Stress:</strong> Firms would need to provide liquidity 
                around the clock
              </li>
              <li>
                <strong>Individual Investor Risk:</strong> Less sophisticated investors trading 
                during low-volume periods
              </li>
              <li>
                <strong>Work-Life Balance:</strong> Impact on traders, analysts, and market 
                professionals
              </li>
              <li>
                <strong>Regulatory Oversight:</strong> Challenges in monitoring expanded trading 
                sessions
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Industry Reactions
            </h2>
            <p className="text-gray-700 mb-4">
              The proposal has generated mixed reactions across the financial industry:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Retail brokerages generally supportive</li>
              <li>• Institutional investors expressing concerns about liquidity</li>
              <li>• Market makers evaluating operational implications</li>
              <li>• Labor groups concerned about worker impacts</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Happens Next
            </h2>
            <p className="text-gray-700 mb-4">
              The SEC will review the proposal through a public comment period, evaluating potential 
              benefits and risks. If approved, implementation would likely be phased over several 
              years, with pilot programs testing extended hours for select securities first.
            </p>
            <p className="text-gray-700">
              This represents one of the most significant potential changes to U.S. market structure 
              in decades, and the outcome could reshape how Americans invest for generations.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
