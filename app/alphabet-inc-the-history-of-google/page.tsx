import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alphabet Inc– The History of Google - ObjectWire.org",
  description: "Founded by two Stanford students in the late 1990s, Google has transformed from a simple search engine project into a multinational conglomerate controlling vast swaths of the internet.",
  alternates: {
    canonical: 'https://www.objectwire.org/alphabet-inc-the-history-of-google',
  },
};

export default function AlphabetHistoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">November 14, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alphabet Inc: The History of Google
          </h1>
          <p className="text-xl text-gray-600">
            From Stanford dorm room to tech giant controlling the internet
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Beginning: A Stanford Research Project
            </h2>
            <p className="text-gray-700 mb-4">
              Founded by two Stanford students in the late 1990s, Google has transformed from a 
              simple search engine project into a multinational conglomerate controlling vast swaths 
              of the internet. Larry Page and Sergey Brin's creation revolutionized how humanity 
              accesses and organizes information.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Timeline of Google's Evolution
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">1996: BackRub</h3>
                <p className="text-gray-700 text-sm">
                  Larry Page and Sergey Brin begin collaborating on a search engine called "BackRub" 
                  that analyzed web backlinks to determine site importance.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">1998: Google Founded</h3>
                <p className="text-gray-700 text-sm">
                  The company officially incorporates as Google Inc. on September 4, 1998, in a 
                  friend's garage in Menlo Park, California. The name comes from "googol" 
                  (10^100), reflecting their mission to organize infinite information.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">2000: AdWords Launch</h3>
                <p className="text-gray-700 text-sm">
                  Google introduces AdWords, revolutionizing online advertising and establishing 
                  the business model that would make it one of the world's most profitable companies.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">2004: IPO</h3>
                <p className="text-gray-700 text-sm">
                  Google goes public at $85 per share, raising $1.67 billion and valuing the 
                  company at $23 billion. The unconventional Dutch auction IPO breaks Wall Street norms.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">2006: YouTube Acquisition</h3>
                <p className="text-gray-700 text-sm">
                  Google acquires YouTube for $1.65 billion, securing dominance in online video 
                  and creating what would become the world's second-largest search engine.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">2008: Android & Chrome</h3>
                <p className="text-gray-700 text-sm">
                  Google releases Android mobile OS and Chrome browser, both of which become 
                  market leaders and cement Google's control over internet access points.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">2015: Alphabet Inc. Created</h3>
                <p className="text-gray-700 text-sm">
                  Google restructures under a new parent company, Alphabet Inc., allowing Google 
                  to focus on internet products while other ventures (Waymo, Verily, etc.) operate 
                  as separate subsidiaries.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">2019: Sundar Pichai becomes Alphabet CEO</h3>
                <p className="text-gray-700 text-sm">
                  Sundar Pichai, who had been Google's CEO since 2015, becomes CEO of Alphabet 
                  as Larry Page and Sergey Brin step back from daily operations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Alphabet's Major Products & Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Core Google Products</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Google Search (90%+ market share)</li>
                  <li>• YouTube (2B+ users)</li>
                  <li>• Android (70%+ mobile OS share)</li>
                  <li>• Chrome Browser (65%+ market share)</li>
                  <li>• Gmail (1.8B+ users)</li>
                  <li>• Google Maps</li>
                  <li>• Google Cloud Platform</li>
                  <li>• Google Workspace (Docs, Sheets, etc.)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Other Alphabet Ventures</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Waymo (autonomous vehicles)</li>
                  <li>• Verily (life sciences)</li>
                  <li>• Calico (aging research)</li>
                  <li>• Wing (drone delivery)</li>
                  <li>• X (moonshot factory)</li>
                  <li>• GV (venture capital)</li>
                  <li>• CapitalG (growth equity)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Business Model & Revenue
            </h2>
            <p className="text-gray-700 mb-4">
              Alphabet generates over $280 billion in annual revenue (2023), with the vast majority 
              coming from advertising across Google Search, YouTube, and partner sites.
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Advertising: ~80% of Revenue</h3>
                <p className="text-gray-700 text-sm">
                  Search ads, display ads, YouTube ads, and Google Ad Network
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Google Cloud: ~10% of Revenue</h3>
                <p className="text-gray-700 text-sm">
                  Cloud computing, infrastructure, and enterprise services
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Other: ~10% of Revenue</h3>
                <p className="text-gray-700 text-sm">
                  Google Play, Pixel hardware, YouTube Premium, subscriptions
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Controversies & Challenges
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Antitrust lawsuits in US, EU, and other jurisdictions</li>
              <li>• Privacy concerns over data collection practices</li>
              <li>• Market dominance and anti-competitive behavior allegations</li>
              <li>• Content moderation challenges on YouTube</li>
              <li>• Employee activism over military contracts and ethics</li>
              <li>• Tax avoidance strategies criticized globally</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Future of Alphabet
            </h2>
            <p className="text-gray-700 mb-4">
              As of 2025, Alphabet faces both opportunities and threats:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>AI Revolution:</strong> Competing with OpenAI, Microsoft, and others in 
                generative AI while defending search dominance
              </li>
              <li>
                <strong>Regulatory Pressure:</strong> Ongoing antitrust cases could force 
                structural changes
              </li>
              <li>
                <strong>Cloud Growth:</strong> Google Cloud continues expanding, though trailing 
                AWS and Azure
              </li>
              <li>
                <strong>New Frontiers:</strong> Quantum computing, autonomous vehicles, and 
                healthcare innovations
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}
