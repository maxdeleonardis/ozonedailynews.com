import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How much does DoorDash make from SNAP - ObjectWire.org",
  description: "Well for one Doordash will lose lots of revenue. The same is the case for big soda. See article how SNAP pays Big Soda, millions per year.",
};

export default function DoorDashSnapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">October 28, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Much Does DoorDash Make from SNAP?
          </h1>
          <p className="text-xl text-gray-600">
            Examining the revenue impact of SNAP benefits on food delivery platforms
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Revenue at Stake
            </h2>
            <p className="text-gray-700 mb-4">
              Well for one, Doordash will lose lots of revenue. The same is the case for big soda. 
              SNAP benefits have become a significant revenue stream for both food delivery platforms 
              and beverage companies.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              SNAP and Big Soda
            </h2>
            <p className="text-gray-700 mb-4">
              SNAP pays Big Soda millions per year. The program's structure allows for the purchase 
              of sugary beverages, creating a substantial revenue stream for beverage manufacturers 
              and retailers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Impact on Delivery Platforms
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• SNAP-eligible purchases through delivery apps</li>
              <li>• Transaction fees on government-funded purchases</li>
              <li>• Market expansion through benefit acceptance</li>
              <li>• Revenue vulnerability to policy changes</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Policy Implications
            </h2>
            <p className="text-gray-700">
              Changes to SNAP eligibility or restrictions on approved purchases could significantly 
              impact the business models of both food delivery platforms and food/beverage manufacturers 
              who currently benefit from the program.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
