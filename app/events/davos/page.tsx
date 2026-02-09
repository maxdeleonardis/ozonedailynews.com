import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Davos 2026: World Economic Forum Annual Meeting - Key Highlights and Outcomes | ObjectWire",
  description: "Complete coverage of the 2026 World Economic Forum in Davos, Switzerland. AI governance, climate action, global economic outlook, and tech industry presence at the annual gathering of world leaders.",
  keywords: [
    "Davos 2026",
    "World Economic Forum",
    "WEF 2026",
    "Davos Switzerland",
    "global leaders summit",
    "AI regulation",
    "climate change",
    "economic forum",
    "Klaus Schwab",
    "Great Reset",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/davos',
  },
  openGraph: {
    title: "Davos 2026: World Economic Forum Annual Meeting Coverage",
    description: "Inside the 2026 World Economic Forum in Davos - AI governance, tech leaders, and global economic policy discussions.",
    type: "article",
    url: "https://www.objectwire.org/davos",
    images: [
      {
        url: "https://www.objectwire.org/images/davos-2026-og.jpg",
        width: 1200,
        height: 630,
        alt: "Davos 2026 World Economic Forum",
      },
    ],
  },
};

export default function DavosPage() {
  const publishedDate = new Date("2026-01-27T10:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Davos 2026: World Economic Forum Annual Meeting - Key Highlights and Outcomes"
        description="Complete coverage of the 2026 World Economic Forum in Davos, Switzerland, including AI governance debates, climate commitments, and major tech industry announcements."
        author="ObjectWire Editorial Team"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/davos-2026-hero.jpg"
        articleUrl="https://www.objectwire.org/davos"
        section="Global Events"
        keywords={["Davos", "World Economic Forum", "WEF 2026", "AI governance", "climate policy"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">
              GLOBAL EVENTS • JANUARY 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Davos 2026: Inside the World Economic Forum Annual Meeting
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>January 27, 2026</span>
              <span>•</span>
              <span>Davos, Switzerland</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "News", item: "/news" },
            { name: "Davos 2026", item: "/davos" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
            The 2026 World Economic Forum Annual Meeting in Davos, Switzerland brought together over 3,000 
            global leaders, CEOs, policymakers, and influencers from January 20-24, 2026. This year's forum 
            focused heavily on artificial intelligence governance, climate resilience, and the restructuring 
            of global economic systems in an era of rapid technological change.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Theme: "Rebuilding Trust in a Fragmented World"</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 2026 WEF theme addressed the growing disconnect between global institutions, national governments, 
              and their citizens. Against a backdrop of geopolitical tensions, AI disruption, and climate urgency, 
              Davos sought to bridge divides between:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Public and private sectors</strong> on AI regulation frameworks</li>
              <li><strong>Developed and developing nations</strong> on climate finance</li>
              <li><strong>Tech companies and governments</strong> on data sovereignty</li>
              <li><strong>Traditional finance and crypto advocates</strong> on digital currencies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Announcements and Outcomes</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">1. Global AI Governance Framework</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most significant outcome was the <strong>"Davos AI Accord"</strong> — a voluntary framework 
              signed by 47 nations and major AI companies including OpenAI, Google DeepMind, Anthropic, and Meta. 
              Key provisions include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Mandatory safety testing for frontier AI models above 10²⁶ FLOPS</li>
              <li>International AI incident reporting system (modeled after aviation safety)</li>
              <li>Red-teaming requirements before public deployment</li>
              <li>Funding for AI safety research institutions in developing nations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Critics note the framework lacks enforcement mechanisms, relying on corporate self-governance 
              and peer pressure rather than binding regulations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">2. $500 Billion Climate Adaptation Fund</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Developed nations committed to a new <strong>Climate Resilience Partnership</strong> with $500 billion 
              in funding over 10 years to help vulnerable nations adapt to climate change impacts. The fund will focus on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Infrastructure hardening in coastal regions</li>
              <li>Agricultural adaptation for drought-prone areas</li>
              <li>Clean energy transition support</li>
              <li>Climate migration planning</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The commitment came after pressure from African and Asian nations who have contributed least to 
              emissions but face the most severe climate impacts.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">3. Tech Industry Presence</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Silicon Valley and global tech leaders dominated Davos 2026 discussions:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Sam Altman (OpenAI)</strong> - Announced GPT-5 safety protocols and commitment to 
                  international AI governance</li>
              <li><strong>Sundar Pichai (Google)</strong> - Revealed new carbon-negative data center initiative</li>
              <li><strong>Elon Musk</strong> - Made controversial remarks about AI regulation being "innovation 
                  theater" (did not sign the Davos AI Accord)</li>
              <li><strong>Jensen Huang (NVIDIA)</strong> - Discussed compute accessibility for developing nations</li>
              <li><strong>Satya Nadella (Microsoft)</strong> - Proposed "AI for Good" global fund</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">4. The All-In Podcast at Davos</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The influential <Link href="/davos/all-in-podcast" className="text-blue-600 hover:underline font-semibold">
              All-In Podcast attended Davos 2026</Link>, hosting live episodes and private dinners with world leaders. 
              Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg brought their signature blend 
              of tech optimism and policy skepticism to the global stage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Economic Outlook</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The WEF released its annual Global Risks Report, highlighting:
            </p>
            <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 my-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Top 5 Global Risks for 2026-2028:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>AI misalignment and misuse</strong> - Uncontrolled AGI development</li>
                <li><strong>Climate tipping points</strong> - Irreversible environmental changes</li>
                <li><strong>Cyber warfare escalation</strong> - Critical infrastructure attacks</li>
                <li><strong>Economic fragmentation</strong> - Breakdown of global trade systems</li>
                <li><strong>Social polarization</strong> - Democratic backsliding worldwide</li>
              </ol>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Global economic growth projections were revised down to 2.8% for 2026 (from 3.1% in 2025), 
              citing persistent inflation, geopolitical tensions, and AI-driven job displacement concerns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notable Attendees</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Government Leaders</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Emmanuel Macron (France)</li>
                  <li>• Olaf Scholz (Germany)</li>
                  <li>• Volodymyr Zelenskyy (Ukraine - virtual)</li>
                  <li>• Pedro Sánchez (Spain)</li>
                  <li>• 60+ heads of state/government</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Business Leaders</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Larry Fink (BlackRock)</li>
                  <li>• Jamie Dimon (JPMorgan Chase)</li>
                  <li>• Marc Benioff (Salesforce)</li>
                  <li>• 1,600+ CEOs from Fortune 500</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Tech Visionaries</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sam Altman (OpenAI)</li>
                  <li>• Demis Hassabis (Google DeepMind)</li>
                  <li>• Dario Amodei (Anthropic)</li>
                  <li>• Yann LeCun (Meta AI)</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Media & Influencers</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• All-In Podcast hosts</li>
                  <li>• Lex Fridman</li>
                  <li>• Fareed Zakaria</li>
                  <li>• 200+ international journalists</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Controversies and Criticism</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Davos 2026 faced familiar criticisms:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Private jet hypocrisy</strong> - Over 1,000 private jets landed in Zurich for climate 
                  discussions</li>
              <li><strong>Elite disconnect</strong> - $50,000 tickets and luxury accommodations while discussing 
                  poverty</li>
              <li><strong>Corporate capture</strong> - Business interests overshadowing policy discussions</li>
              <li><strong>Lack of enforcement</strong> - Voluntary commitments with no accountability mechanisms</li>
              <li><strong>Western dominance</strong> - Limited representation from Global South perspectives</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Protests outside the venue highlighted economic inequality and questioned whether Davos truly 
              serves global interests or reinforces existing power structures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>AI regulation is coming</strong> - Whether voluntary or mandatory, expect increased 
                    governance in 2026-2027</li>
                <li><strong>Climate finance is shifting</strong> - From mitigation to adaptation as impacts 
                    become unavoidable</li>
                <li><strong>Tech giants are policy players</strong> - Silicon Valley now has a seat at the 
                    global governance table</li>
                <li><strong>Economic fragmentation continues</strong> - De-globalization accelerates despite 
                    calls for cooperation</li>
                <li><strong>Trust remains elusive</strong> - The forum's theme reflects ongoing challenges in 
                    building consensus</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The commitments made at Davos 2026 will be tested throughout the year:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>June 2026</strong> - First Davos AI Accord compliance review</li>
              <li><strong>September 2026</strong> - UN Climate Adaptation Summit to operationalize funding</li>
              <li><strong>November 2026</strong> - G20 meeting will test economic cooperation pledges</li>
              <li><strong>January 2027</strong> - Davos returns to assess progress on 2026 commitments</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Skeptics note that many Davos commitments fade after attendees return home to domestic political 
              realities. The true test will be whether voluntary frameworks evolve into binding treaties.
            </p>
          </section>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Coverage</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/davos/all-in-podcast"
                className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">All-In Podcast at Davos 2026</h4>
                <p className="text-sm text-gray-600">How tech's most influential podcast brought Silicon Valley 
                   perspective to the World Economic Forum</p>
              </Link>
              <Link 
                href="/podcasts/all-in-podcast"
                className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">All-In Podcast Profile</h4>
                <p className="text-sm text-gray-600">Complete guide to the All-In Podcast, its hosts, and 
                   influence on tech policy</p>
              </Link>
              <Link 
                href="/news"
                className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Latest Global News</h4>
                <p className="text-sm text-gray-600">Breaking news and analysis from around the world</p>
              </Link>
              <Link 
                href="/team"
                className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Our Editorial Team</h4>
                <p className="text-sm text-gray-600">Meet the ObjectWire journalists covering global events</p>
              </Link>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
