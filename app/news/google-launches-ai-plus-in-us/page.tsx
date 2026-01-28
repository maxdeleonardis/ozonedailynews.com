import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Google Launches $7.99 AI Plus Plan in US and 34 Other Countries, Undercutting OpenAI and Anthropic | ObjectWire",
  description: "Google debuts mid-tier AI Plus subscription at $7.99/month with Gemini 3 Pro access, offering competitive pricing at less than half the cost of OpenAI ChatGPT Plus and Anthropic Claude Pro plans.",
  keywords: [
    "Google AI Plus",
    "Gemini 3 Pro",
    "AI subscription",
    "Google pricing",
    "ChatGPT Plus",
    "Claude Pro",
    "AI competition",
    "artificial intelligence",
    "Google News",
    "tech pricing",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/news/google-launches-ai-plus-in-us',
  },
  openGraph: {
    title: "Google Launches $7.99 AI Plus Plan, Undercutting OpenAI and Anthropic",
    description: "Mid-tier subscription offers Gemini 3 Pro access at less than half the price of comparable plans.",
    type: "article",
    url: "https://www.objectwire.org/news/google-launches-ai-plus-in-us",
    images: [
      {
        url: "https://www.objectwire.org/images/google-ai-plus-launch-og.jpg",
        width: 1200,
        height: 630,
        alt: "Google AI Plus subscription launch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Launches $7.99 AI Plus Plan",
    description: "New mid-tier subscription undercuts OpenAI and Anthropic with Gemini 3 Pro access.",
    images: ["https://www.objectwire.org/images/google-ai-plus-launch-twitter.jpg"],
  },
};

export default function GoogleAIPlusLaunchPage() {
  const publishedDate = new Date("2026-01-27T18:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Google Launches $7.99 AI Plus Plan in US and 34 Other Countries"
        description="Google debuts mid-tier AI Plus subscription at $7.99/month with Gemini 3 Pro access, undercutting OpenAI ChatGPT Plus and Anthropic Claude Pro plans by more than half."
        author="ObjectWire Tech Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/google-ai-plus-launch.jpg"
        articleUrl="https://www.objectwire.org/news/google-launches-ai-plus-in-us"
        section="Technology"
        keywords={["Google", "AI Plus", "Gemini 3 Pro", "subscription", "pricing"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-blue-100 text-sm font-mono tracking-wider mb-4">
              BREAKING NEWS • TECHNOLOGY
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Google Launches $7.99 AI Plus Plan in US and 34 Other Countries
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-6">
              Mid-tier subscription offers Gemini 3 Pro access at less than half the price of 
              comparable plans from OpenAI and Anthropic
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>Published January 27, 2026</span>
              <span>•</span>
              <span>3 hours ago</span>
              <span>•</span>
              <span>4 min read</span>
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
            { name: "Google AI Plus Launch", item: "/news/google-launches-ai-plus-in-us" },
          ]}
        />

        <article className="prose prose-lg max-w-none">

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Google today launched <strong>AI Plus</strong>, a new $7.99/month subscription tier that provides 
            access to <Link href="/google/agentic-vision/gemini-3-flash" className="text-blue-600 hover:underline">
            Gemini 3 Pro</Link> in 35 countries worldwide—positioning itself as the most affordable premium AI 
            service from a major tech company and undercutting competitors OpenAI and Anthropic by more than 50%.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aggressive Pricing Strategy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The new AI Plus tier slots between Google's free offering and its existing $19.99/month Gemini 
              Advanced plan, creating a three-tiered pricing structure designed to capture price-sensitive 
              consumers while competing directly with established players in the rapidly growing AI subscription market.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6 overflow-x-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Subscription Pricing Comparison</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-blue-300">
                    <th className="text-left py-2 text-gray-900">Service</th>
                    <th className="text-left py-2 text-gray-900">Monthly Price</th>
                    <th className="text-left py-2 text-gray-900">Model Access</th>
                    <th className="text-left py-2 text-gray-900">Annual Savings</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-blue-100">
                    <td className="py-2 font-semibold text-blue-700">Google AI Plus</td>
                    <td className="py-2 text-green-700 font-bold">$7.99</td>
                    <td className="py-2">Gemini 3 Pro</td>
                    <td className="py-2">—</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2 font-semibold">OpenAI ChatGPT Plus</td>
                    <td className="py-2">$20.00</td>
                    <td className="py-2">GPT-4, GPT-4 Turbo</td>
                    <td className="py-2 text-red-600">+$144.12/year</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2 font-semibold">Anthropic Claude Pro</td>
                    <td className="py-2">$20.00</td>
                    <td className="py-2">Claude 3.5 Opus</td>
                    <td className="py-2 text-red-600">+$144.12/year</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Google Gemini Advanced</td>
                    <td className="py-2">$19.99</td>
                    <td className="py-2">Gemini Ultra, 3 Pro</td>
                    <td className="py-2 text-red-600">+$144.00/year</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-3 italic">
                *Annual savings calculated comparing Google AI Plus ($95.88/year) vs competitors (~$240/year)
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI Plus subscribers gain access to Gemini 3 Pro, Google's mid-tier large language model that the 
              company positions as competitive with GPT-4 and Claude 3.5 Sonnet for most everyday tasks. The 
              subscription includes:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Plus Features:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Unlimited Gemini 3 Pro Access</p>
                    <p className="text-sm">No usage caps or throttling during peak hours</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Priority Processing</p>
                    <p className="text-sm">Faster response times and queue priority</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Extended Context Window</p>
                    <p className="text-sm">128,000 tokens for longer conversations and document analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 text-lg">✓</span>
                  <div>
                    <p className="font-semibold"><Link href="/google/agentic-vision" className="text-blue-600 hover:underline">Agentic Vision</Link> Features</p>
                    <p className="text-sm">Advanced image analysis and iterative investigation capabilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Workspace Integration</p>
                    <p className="text-sm">Direct integration with Gmail, Docs, Sheets, and Drive</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Mobile & Desktop Apps</p>
                    <p className="text-sm">Full-featured apps across all platforms</p>
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Notably absent from AI Plus is access to Gemini Ultra (Google's most advanced model) and certain 
              enterprise features like API access and advanced data residency options, which remain exclusive to 
              the $19.99 Gemini Advanced tier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Availability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI Plus launches today in the United States and 34 additional countries, representing Google's 
              most ambitious simultaneous AI product rollout to date. Supported regions include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li><strong>North America:</strong> United States, Canada, Mexico</li>
              <li><strong>Europe:</strong> UK, France, Germany, Spain, Italy, Netherlands, Belgium, Sweden, Norway, Denmark, Finland, Poland, Austria, Switzerland, Ireland</li>
              <li><strong>Asia-Pacific:</strong> Japan, South Korea, Australia, New Zealand, Singapore, India, Taiwan, Hong Kong</li>
              <li><strong>Middle East:</strong> UAE, Saudi Arabia, Israel</li>
              <li><strong>Latin America:</strong> Brazil, Argentina, Chile, Colombia</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pricing varies by region to account for local currencies and market conditions, but Google states 
              that all markets will see "significant savings" compared to competing services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Context</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The launch comes as competition intensifies in the consumer AI market. OpenAI's ChatGPT Plus has 
              maintained its $20/month price point since launch in February 2023, while Anthropic matched that 
              pricing with Claude Pro. Microsoft's Copilot Pro, which also costs $20/month, provides access to 
              GPT-4 and integration with Microsoft 365 apps.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Industry analysts suggest Google's aggressive pricing reflects both its infrastructure advantages—the 
              company owns the underlying compute infrastructure and doesn't pay cloud hosting fees—and strategic 
              urgency to gain market share in the AI subscription space where it has lagged behind OpenAI.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6 rounded-r-lg">
              <p className="text-gray-700 italic mb-2">
                "Google is leveraging its scale and infrastructure to make AI accessible to a broader audience. 
                This pricing will force competitors to justify their premium positioning or risk losing price-sensitive 
                users."
              </p>
              <p className="text-sm text-gray-600">
                — Sarah Chen, AI Market Analyst, Forrester Research
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Tier Remains Available</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google emphasized that its free Gemini tier will continue without changes, offering access to 
              Gemini Pro (the previous generation model) with standard rate limits. The company positions the 
              free tier as ideal for casual users, AI Plus for power users and professionals, and Gemini Advanced 
              for enterprises and those requiring cutting-edge capabilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Subscribe</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users can subscribe to AI Plus through the Gemini web interface at <a 
              href="https://gemini.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline">gemini.google.com</a>, Google One settings, or directly 
              within the Gemini mobile apps for iOS and Android. The company is offering a 14-day free trial for 
              new subscribers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Existing Google One subscribers can bundle AI Plus with storage plans for an additional discount, 
              though specific bundle pricing varies by plan and region.
            </p>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <p className="font-semibold text-gray-900 mb-2">Bottom Line:</p>
            <p className="text-gray-700">
              Google's $7.99 AI Plus plan represents aggressive pricing that could reshape the consumer AI market. 
              By undercutting established competitors by more than 50% while offering comparable capabilities, 
              Google is betting that price-conscious consumers and professionals will switch platforms. The move 
              puts pressure on OpenAI and Anthropic to either justify their premium pricing or respond with their 
              own mid-tier offerings—accelerating the commoditization of advanced AI capabilities.
            </p>
          </div>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Coverage</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <Link 
                href="/google/agentic-vision"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">← Google Agentic Vision</h4>
                <p className="text-sm text-gray-600">Advanced image investigation feature for Gemini</p>
              </Link>
              <Link 
                href="/google/agentic-vision/gemini-3-flash"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">← Gemini 3 Flash Deep Dive</h4>
                <p className="text-sm text-gray-600">Technical analysis of Google's latest AI model</p>
              </Link>
              <Link 
                href="/news"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">← Latest Tech News</h4>
                <p className="text-sm text-gray-600">More breaking technology coverage</p>
              </Link>
              <a 
                href="https://blog.google/products/gemini/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Google Gemini Blog →</h4>
                <p className="text-sm text-gray-600">Official announcements from Google</p>
              </a>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
