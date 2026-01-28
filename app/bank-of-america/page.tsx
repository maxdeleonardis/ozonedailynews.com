import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Bank of America: Global Banking, Financial Services & Investment Management | ObjectWire",
  description: "Comprehensive overview of Bank of America Corporation, one of America's largest banks providing consumer banking, wealth management, corporate banking, and investment services to millions worldwide.",
  keywords: [
    "Bank of America",
    "BofA",
    "banking",
    "financial services",
    "investment banking",
    "wealth management",
    "consumer banking",
    "Brian Moynihan",
    "commercial banking",
    "Merrill Lynch",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/bank-of-america',
  },
  openGraph: {
    title: "Bank of America: Global Banking & Financial Services",
    description: "Complete guide to Bank of America, covering banking services, market position, history, and financial technology initiatives.",
    type: "article",
    url: "https://www.objectwire.org/bank-of-america",
    images: [
      {
        url: "https://www.objectwire.org/images/bank-of-america-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bank of America",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank of America: Global Banking Leader",
    description: "Comprehensive overview of Bank of America financial services.",
    images: ["https://www.objectwire.org/images/bank-of-america-twitter.jpg"],
  },
};

export default function BankOfAmericaPage() {
  const publishedDate = new Date("2026-01-27T23:30:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Bank of America: Global Banking, Financial Services & Investment Management"
        description="Encyclopedia article covering Bank of America's history, banking services, market position, digital transformation, and role in global financial system."
        author="ObjectWire Finance Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/bank-of-america.jpg"
        articleUrl="https://www.objectwire.org/bank-of-america"
        section="Finance & Banking"
        keywords={["Bank of America", "banking", "financial services", "wealth management"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-blue-100 text-sm font-mono tracking-wider mb-4">
              FINANCE ENCYCLOPEDIA
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bank of America Corporation
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              One of the world's largest financial institutions providing consumer banking, wealth management, 
              and investment services across the globe
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "Bank of America", item: "/bank-of-america" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Quick Facts Box */}
          <div className="not-prose bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8 float-right ml-6 w-full md:w-96">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-300 pb-2">
              Quick Facts
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-700">Founded</p>
                <p className="text-gray-900">October 17, 1904 (as Bank of Italy)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Headquarters</p>
                <p className="text-gray-900">Charlotte, North Carolina, USA</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">CEO</p>
                <p className="text-gray-900">Brian Moynihan (2010-present)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Employees</p>
                <p className="text-gray-900">~213,000 (2024)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Total Assets</p>
                <p className="text-gray-900">$3.25 trillion (2024)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Annual Revenue</p>
                <p className="text-gray-900">$99.1B (2024)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Stock Symbol</p>
                <p className="text-gray-900">NYSE: BAC</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Customers</p>
                <p className="text-gray-900">69 million consumer/small business</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Branch Locations</p>
                <p className="text-gray-900">~4,000 banking centers in US</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Bank of America Corporation</strong> (often abbreviated as <strong>BofA</strong> or 
            <strong>BoA</strong>) is one of the world's largest financial institutions and the second-largest 
            bank in the United States by assets. Serving approximately 69 million consumer and small business 
            clients across retail banking, wealth management, corporate banking, and investment services, 
            Bank of America is a systemically important financial institution central to the U.S. and global 
            economy.
          </p>

          <section className="mb-8 clear-both">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">History</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Origins as Bank of Italy (1904-1930)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bank of America traces its origins to the <strong>Bank of Italy</strong>, founded on October 17, 1904, 
              in San Francisco by Amadeo Giannini. Giannini pioneered "branch banking" and focused on serving 
              immigrants and working-class customers often ignored by established banks. After the 1906 San Francisco 
              earthquake, Giannini famously set up operations on the waterfront using a plank across two barrels, 
              lending to rebuild the city.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The bank was renamed <strong>Bank of America</strong> in 1930 and grew rapidly through California, 
              becoming the largest bank in the United States by the 1940s.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">National Expansion (1950-1990)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bank of America pioneered consumer banking innovations including the BankAmericard in 1958 (which 
              became Visa in 1976). The bank expanded nationally through acquisitions after interstate banking 
              restrictions were lifted in the 1980s-90s.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">NationsBank Merger and Modern Era (1998-Present)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 1998, Bank of America merged with NationsBank of Charlotte, North Carolina, in what was then 
              the largest bank merger in U.S. history. The combined company took the Bank of America name but 
              moved headquarters to Charlotte, where it remains today.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Major subsequent acquisitions included:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>FleetBoston Financial (2004):</strong> $48 billion acquisition expanding Northeast presence</li>
              <li><strong>MBNA (2006):</strong> $35 billion credit card company acquisition</li>
              <li><strong>Countrywide Financial (2008):</strong> Troubled mortgage lender acquired during financial crisis</li>
              <li><strong>Merrill Lynch (2009):</strong> $50 billion acquisition of investment bank and wealth manager</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Segments</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Consumer Banking</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bank of America's consumer banking division serves 69 million clients through approximately 4,000 
              banking centers and 16,000 ATMs across the United States. Services include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Checking and savings accounts</li>
              <li>Credit cards (third-largest U.S. card issuer)</li>
              <li>Home mortgages and home equity lines</li>
              <li>Auto loans and personal loans</li>
              <li>Small business banking</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Wealth Management (Merrill)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Operating under the Merrill brand (acquired 2009), this division manages $3.3 trillion in client 
              assets through 17,000+ financial advisors. Services span investment management, retirement planning, 
              estate planning, and private banking for affluent clients.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Global Banking</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Provides commercial banking, corporate banking, and treasury services to middle-market and large 
              corporate clients. This includes lending, cash management, trade finance, and risk management solutions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Global Markets</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Investment banking and trading operations including mergers & acquisitions advisory, debt and equity 
              underwriting, and market-making in fixed income, currencies, and commodities. BofA Securities ranks 
              among the top global investment banks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Position</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6 overflow-x-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Largest U.S. Banks by Assets (2024)</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 text-gray-900">Rank</th>
                    <th className="text-left py-2 text-gray-900">Bank</th>
                    <th className="text-left py-2 text-gray-900">Total Assets</th>
                    <th className="text-left py-2 text-gray-900">Headquarters</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-2">1</td>
                    <td className="py-2 font-semibold">JPMorgan Chase</td>
                    <td className="py-2">$3.88T</td>
                    <td className="py-2">New York, NY</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="py-2">2</td>
                    <td className="py-2 font-semibold text-blue-700">Bank of America</td>
                    <td className="py-2 font-bold text-blue-700">$3.25T</td>
                    <td className="py-2 text-blue-700">Charlotte, NC</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">3</td>
                    <td className="py-2 font-semibold">Citigroup</td>
                    <td className="py-2">$2.40T</td>
                    <td className="py-2">New York, NY</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">4</td>
                    <td className="py-2 font-semibold">Wells Fargo</td>
                    <td className="py-2">$1.93T</td>
                    <td className="py-2">San Francisco, CA</td>
                  </tr>
                  <tr>
                    <td className="py-2">5</td>
                    <td className="py-2 font-semibold">Goldman Sachs</td>
                    <td className="py-2">$1.59T</td>
                    <td className="py-2">New York, NY</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital Banking and Technology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bank of America has invested heavily in digital banking technology:
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Digital Initiatives:</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold mb-1">Mobile Banking App</p>
                  <p className="text-xs">43 million active digital users; mobile app handles 2 billion+ logins annually</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold mb-1">Erica Virtual Assistant</p>
                  <p className="text-xs">AI-powered chatbot with over 1.5 billion client interactions since 2018 launch</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold mb-1">Zelle Integration</p>
                  <p className="text-xs">Peer-to-peer payment network embedded in banking app</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold mb-1">Cardless ATM Access</p>
                  <p className="text-xs">Withdraw cash using mobile app without physical card</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold mb-1">CashPro Platform</p>
                  <p className="text-xs">Enterprise treasury management and payment processing for corporate clients</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The bank spends approximately $3.5 billion annually on technology and employs over 50,000 
              technology and operations professionals. However, enterprise clients have reported challenges 
              with the complexity of some platforms, particularly around AI and data analytics tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Crisis and Recovery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bank of America was significantly impacted by the 2008 financial crisis, particularly through its 
              acquisition of Countrywide Financial (2008) and Merrill Lynch (2009). The Countrywide deal brought 
              billions in mortgage-related losses and legal liabilities that took years to resolve.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The bank received $45 billion in TARP (Troubled Asset Relief Program) funds from the U.S. government 
              during the crisis, which it fully repaid by 2009. Subsequent years involved extensive legal settlements 
              totaling over $60 billion for mortgage-related misconduct and other regulatory violations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under CEO Brian Moynihan (appointed 2010), the bank underwent major restructuring, exiting non-core 
              businesses, strengthening capital positions, and improving compliance and risk management. By the 
              mid-2010s, Bank of America had returned to consistent profitability and shareholder returns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental and Social Initiatives</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bank of America has made significant environmental and social commitments:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>$1 trillion commitment:</strong> Environmental business initiative by 2030 for climate transition</li>
              <li><strong>Net zero target:</strong> Operational carbon neutrality by 2050</li>
              <li><strong>$1.25 billion commitment:</strong> Racial equity and economic opportunity programs</li>
              <li><strong>Community development:</strong> $5+ billion annual lending to affordable housing and community development</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges and Controversies</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Regulatory Issues</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a systemically important financial institution (SIFI), Bank of America faces extensive regulatory 
              oversight and must maintain higher capital reserves than smaller banks. The bank has paid over $80 billion 
              in fines and settlements since the financial crisis for various violations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Technology Complexity</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some corporate clients have expressed frustration with the complexity of Bank of America's enterprise 
              software platforms, particularly around AI-powered analytics and data management tools. The bank has 
              acknowledged these concerns and is working to simplify user experiences.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Branch Closures</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Like competitors, Bank of America has closed hundreds of branches as customers shift to digital banking, 
              raising concerns about access in underserved communities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Brian Moynihan</strong> has served as CEO since January 2010, guiding the bank through 
              post-crisis recovery and transformation. Under his leadership, the bank has improved profitability, 
              strengthened capital positions, and invested heavily in digital banking while maintaining one of 
              the largest physical branch networks in the U.S.
            </p>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <p className="font-semibold text-gray-900 mb-2">Summary:</p>
            <p className="text-gray-700">
              Bank of America stands as one of the world's largest and most influential financial institutions, 
              serving 69 million clients across consumer banking, wealth management, and corporate/investment 
              banking. From its origins serving immigrant communities in San Francisco to becoming a $3.25 trillion 
              asset behemoth, the bank has shaped American finance for over a century. While its scale provides 
              comprehensive financial services and global reach, it also brings challenges including regulatory 
              complexity, technology integration issues, and the constant balance between digital transformation 
              and maintaining physical presence. Bank of America remains central to the U.S. financial system and 
              a bellwether for the broader banking industry.
            </p>
          </div>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">External Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <a 
                href="https://www.bankofamerica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">BankofAmerica.com →</h4>
                <p className="text-sm text-gray-600">Official Bank of America website</p>
              </a>
              <a 
                href="https://investor.bankofamerica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Investor Relations →</h4>
                <p className="text-sm text-gray-600">Financial reports and earnings</p>
              </a>
              <a 
                href="https://about.bankofamerica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">About Bank of America →</h4>
                <p className="text-sm text-gray-600">Company information and initiatives</p>
              </a>
              <a 
                href="https://newsroom.bankofamerica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Newsroom →</h4>
                <p className="text-sm text-gray-600">Latest news and press releases</p>
              </a>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
