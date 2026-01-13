import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$2.5 Billion Federal Reserve Headquarters Renovation Sparks Controversy - ObjectWire.org",
  description: "$2.5 Billion Headquarters Renovation of FED | Trump Disproves - Examining the debate over the Federal Reserve's massive renovation project.",
};

export default function FederalReserveHQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">July 26, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            $2.5 Billion Federal Reserve Headquarters Renovation Sparks Political Controversy
          </h1>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Renovation Project
            </h2>
            <p className="text-gray-700 mb-4">
              The Federal Reserve has embarked on a massive $2.5 billion renovation of its 
              headquarters complex on Constitution Avenue in Washington, D.C. The Eccles Building, 
              constructed in 1937, requires significant modernization to meet current security, 
              technology, and infrastructure standards.
            </p>
            <p className="text-gray-700">
              The multi-year project includes upgrading mechanical systems, enhancing security 
              features, modernizing workspaces, and addressing structural issues in the nearly 
              90-year-old building.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Political Pushback
            </h2>
            <p className="text-gray-700 mb-4">
              Former President Donald Trump and several Republican lawmakers have criticized the 
              renovation's price tag, calling it excessive government spending. Critics argue the 
              Federal Reserve, despite being financially independent, should exercise greater 
              fiscal restraint.
            </p>
            <p className="text-gray-700">
              "The Fed is spending $2.5 billion on their headquarters while Americans struggle with 
              inflation," Trump stated in a social media post. "This is exactly the kind of wasteful 
              spending that needs to stop."
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Federal Reserve's Defense
            </h2>
            <p className="text-gray-700 mb-4">
              Fed officials maintain the renovation is necessary and prudent:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Critical infrastructure:</strong> Aging systems pose operational and safety risks</li>
              <li>• <strong>Security requirements:</strong> Post-9/11 security standards require significant upgrades</li>
              <li>• <strong>Energy efficiency:</strong> Modern systems will reduce long-term operating costs</li>
              <li>• <strong>Self-funded:</strong> The Fed generates its own revenue and doesn't use taxpayer money</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Key Facts About the Federal Reserve's Finances
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• The Federal Reserve is self-funded through interest on government securities</li>
              <li>• The Fed remits profits to the U.S. Treasury (over $100 billion in recent years)</li>
              <li>• The renovation is paid from the Fed's operating budget, not taxpayer dollars</li>
              <li>• Construction costs have risen significantly due to inflation and supply chain issues</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Broader Context
            </h2>
            <p className="text-gray-700 mb-4">
              The controversy reflects ongoing tensions between political leaders and the Federal 
              Reserve's independence. While the Fed operates independently to shield monetary policy 
              from political pressure, major expenditures like this renovation attract scrutiny.
            </p>
            <p className="text-gray-700">
              Supporters argue the building's condition necessitates action, while critics question 
              whether a more modest renovation could achieve the same goals. The project timeline 
              extends through 2030, meaning the debate will likely continue for years.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
