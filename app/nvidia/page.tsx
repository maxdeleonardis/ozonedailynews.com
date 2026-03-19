import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Nvidia Corporation: AI Computing, Graphics Processing & Data Center Technology | ObjectWire",
  description: "Comprehensive overview of Nvidia Corporation, world leader in graphics processing units (GPUs), artificial intelligence computing, data centers, and accelerated computing technology.",
  keywords: [
    "Nvidia",
    "GPU",
    "artificial intelligence",
    "data center",
    "Jensen Huang",
    "CUDA",
    "GeForce",
    "AI computing",
    "graphics cards",
    "semiconductor",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nvidia',
  },
  openGraph: {
    title: "Nvidia Corporation: AI Computing & Graphics Processing Leader",
    description: "Complete guide to Nvidia, covering GPU technology, AI computing platforms, market dominance, and data center solutions.",
    type: "article",
    url: "https://www.objectwire.org/nvidia",
    images: [
      {
        url: "https://www.objectwire.org/images/nvidia-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nvidia Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nvidia Corporation: AI Computing Leader",
    description: "Comprehensive overview of Nvidia GPU and AI technology.",
    images: ["https://www.objectwire.org/images/nvidia-twitter.jpg"],
  },
};

export default function NvidiaPage() {
  const publishedDate = new Date("2026-01-27T23:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Nvidia Corporation: AI Computing, Graphics Processing & Data Center Technology"
        description="Encyclopedia article covering Nvidia's history, GPU technology, AI computing platforms, market position, and transformation into AI industry leader."
        author="ObjectWire Technology Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/nvidia.jpg"
        articleUrl="https://www.objectwire.org/nvidia"
        section="Technology & Computing"
        keywords={["Nvidia", "GPU", "AI computing", "data center", "Jensen Huang"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-green-100 text-sm font-mono tracking-wider mb-4">
              TECHNOLOGY ENCYCLOPEDIA
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Nvidia Corporation
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Global leader in graphics processing units (GPUs), artificial intelligence computing, 
              and accelerated computing technology
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
            { name: "Nvidia", item: "/nvidia" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Quick Facts Box */}
          <div className="not-prose bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8 float-right ml-6 w-full md:w-96">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-green-300 pb-2">
              Quick Facts
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-700">Founded</p>
                <p className="text-gray-900">April 5, 1993</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Headquarters</p>
                <p className="text-gray-900">Santa Clara, California, USA</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">CEO & Co-Founder</p>
                <p className="text-gray-900">Jensen Huang</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Employees</p>
                <p className="text-gray-900">~29,600 (2024)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Market Cap</p>
                <p className="text-gray-900">~$3.0 trillion (Jan 2026)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Annual Revenue</p>
                <p className="text-gray-900">$79.8B (FY 2025)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Stock Symbol</p>
                <p className="text-gray-900">NASDAQ: NVDA</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Key Products</p>
                <p className="text-gray-900">GeForce GPUs, Data Center GPUs, AI platforms</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Industry Position</p>
                <p className="text-gray-900">80%+ AI chip market share</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Nvidia Corporation</strong> is an American multinational technology company specializing in 
            graphics processing units (GPUs), artificial intelligence computing, and accelerated computing platforms. 
            Founded in 1993, Nvidia has evolved from a gaming graphics card manufacturer into the dominant provider 
            of AI computing infrastructure, with its chips powering most of the world's AI systems including 
            ChatGPT, <Link href="/google/agentic-vision/gemini-3-flash" className="text-blue-600 hover:underline">
            Google's Gemini</Link>, and autonomous vehicles.
          </p>

          <section className="mb-8 clear-both">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">History</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Founding and Early Years (1993-1999)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nvidia was founded on April 5, 1993, by <strong>Jensen Huang</strong> (CEO), Chris Malachowsky, 
              and Curtis Priem. The company name is a play on "invidia," the Latin word for envy, and "NV" 
              for "next version." Nvidia's mission was to bring 3D graphics to the gaming and multimedia markets.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The company's breakthrough came in 1999 with the <strong>GeForce 256</strong>, marketed as the 
              world's first GPU (Graphics Processing Unit)—a term Nvidia coined. This chip revolutionized gaming 
              by offloading graphics processing from CPUs to specialized parallel processors.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Gaming Dominance (2000-2015)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Throughout the 2000s and early 2010s, Nvidia competed fiercely with ATI (later acquired by AMD) 
              for gaming GPU market share. The GeForce brand became synonymous with high-performance PC gaming, 
              while Nvidia also supplied graphics for Microsoft's Xbox and Sony's PlayStation 3.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2006, Nvidia introduced <strong>CUDA (Compute Unified Device Architecture)</strong>, a parallel 
              computing platform that allowed developers to use GPUs for general-purpose computing beyond graphics. 
              This seemingly niche technology would become foundational to Nvidia's AI dominance a decade later.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">AI Transformation (2016-Present)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The deep learning revolution transformed Nvidia from a gaming company into an AI infrastructure 
              powerhouse. Researchers discovered that GPUs' parallel processing capabilities made them ideal for 
              training neural networks—processing that would take CPUs weeks could be done in days on GPUs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nvidia's data center revenue exploded from $339 million in 2016 to over $47 billion in 2024, 
              overtaking gaming as the company's primary business. The company's market capitalization surged 
              from $30 billion in 2016 to over $3 trillion in 2026, briefly making it the world's most valuable 
              company.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Products and Technology</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Data Center / AI Computing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nvidia's data center business has become its largest revenue driver, accounting for over 60% of 
              total revenue:
            </p>

            <div className="bg-green-50 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Key AI Products:</h4>
              <div className="space-y-4 text-gray-700 text-sm">
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold mb-1">H100 & H200 Tensor Core GPUs</p>
                  <p className="text-xs">Flagship AI training chips using Hopper architecture; H100 costs ~$25,000-40,000 per chip</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold mb-1">A100 Tensor Core GPU</p>
                  <p className="text-xs">Previous generation workhorse for AI training and inference; still widely deployed</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold mb-1">GH200 Grace Hopper Superchip</p>
                  <p className="text-xs">Combines Nvidia GPU with Arm-based CPU for massive memory bandwidth</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold mb-1">DGX Systems</p>
                  <p className="text-xs">Pre-configured AI supercomputers with 8 GPUs; DGX H100 costs ~$300,000</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold mb-1">NVLink & NVSwitch</p>
                  <p className="text-xs">High-bandwidth interconnects allowing GPUs to work together at unprecedented scale</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">GeForce Gaming GPUs</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nvidia's GeForce brand remains the dominant consumer gaming GPU line, with the RTX 40-series 
              (based on Ada Lovelace architecture) offering ray tracing and DLSS (Deep Learning Super Sampling) 
              AI upscaling technology. Gaming still generates ~25-30% of Nvidia's revenue.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Professional Visualization (Quadro/RTX)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Professional GPUs for content creation, 3D modeling, and scientific visualization, used by designers, 
              architects, and engineers. Now branded under the RTX umbrella.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Automotive</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nvidia Drive platform powers autonomous vehicle systems for companies including Mercedes-Benz, 
              Volvo, Jaguar Land Rover, and Chinese EV manufacturers. This segment generates ~5% of revenue 
              but is considered a major growth opportunity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Position and Competition</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6 overflow-x-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Chip Market Share (2026)</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 text-gray-900">Company</th>
                    <th className="text-left py-2 text-gray-900">Market Share</th>
                    <th className="text-left py-2 text-gray-900">Key Products</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200 bg-green-50">
                    <td className="py-2 font-semibold text-green-700">Nvidia</td>
                    <td className="py-2 font-bold text-green-700">~80-85%</td>
                    <td className="py-2">H100, H200, A100</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">AMD</td>
                    <td className="py-2">~5-8%</td>
                    <td className="py-2">MI300X Instinct</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">Google (TPU)</td>
                    <td className="py-2">~3-5%</td>
                    <td className="py-2">TPU v5e (internal use)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">Intel</td>
                    <td className="py-2">~2-3%</td>
                    <td className="py-2">Gaudi 2/3</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Others</td>
                    <td className="py-2">~2-5%</td>
                    <td className="py-2">AWS Trainium, custom chips</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Nvidia's dominance stems from several advantages:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>CUDA ecosystem:</strong> 15+ years of developer tools and libraries</li>
              <li><strong>Software stack:</strong> Comprehensive AI frameworks optimized for Nvidia hardware</li>
              <li><strong>Performance leadership:</strong> Chips consistently outperform competitors</li>
              <li><strong>Supply constraints:</strong> Multi-month waiting periods create moat</li>
              <li><strong>Network effects:</strong> Most AI models trained on Nvidia, creating compatibility lock-in</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges and Controversies</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Export Controls</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              U.S. government export restrictions limit sales of advanced AI chips to China, impacting Nvidia's 
              revenue in one of its largest markets. The company has developed China-specific chips (A800, H800) 
              with reduced capabilities to comply with regulations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Supply Constraints and Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Overwhelming demand for H100 chips has created multi-month backlogs and accusations of preferential 
              allocation to favored customers. Some enterprises report 6-12 month wait times for large orders.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Software Complexity</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enterprise customers have reported that Nvidia's AI software stack is difficult to deploy and 
              optimize, requiring specialized expertise. This complexity has created opportunities for startups 
              offering simplified AI infrastructure.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Antitrust Scrutiny</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nvidia's market dominance has attracted regulatory attention in the U.S., EU, and China, with 
              investigations examining whether the company engages in anti-competitive bundling or licensing practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Performance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nvidia has experienced explosive growth driven by AI demand:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>FY 2025 Revenue:</strong> $79.8 billion (up 125% YoY)</li>
              <li><strong>Data Center Revenue:</strong> $47.5 billion (up 217% YoY)</li>
              <li><strong>Net Income:</strong> $32.4 billion (40.6% profit margin)</li>
              <li><strong>Stock Performance:</strong> Up ~240% in 2024, ~3,500% since 2019</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The company's market capitalization briefly exceeded $3 trillion in 2024, making it one of the 
              world's most valuable companies alongside Apple and Microsoft.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Jensen Huang</strong> has served as CEO since founding Nvidia in 1993, making him one of 
              the longest-tenured tech CEOs. Known for his signature leather jacket and animated product 
              presentations, Huang has become the public face of the AI revolution. Under his leadership, Nvidia's 
              value has grown from zero to over $3 trillion in 31 years.
            </p>
          </section>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <p className="font-semibold text-gray-900 mb-2">Summary:</p>
            <p className="text-gray-700">
              Nvidia has transformed from a gaming graphics company into the infrastructure backbone of the AI 
              revolution. Its GPUs power the training and deployment of most large language models, autonomous 
              systems, and advanced AI applications. With 80%+ market share in AI computing and explosive revenue 
              growth, Nvidia has become one of the world's most valuable companies. However, the company faces 
              challenges including export restrictions, supply constraints, increasing competition from AMD and 
              custom chips, and regulatory scrutiny over its market dominance. Nvidia's future depends on 
              maintaining its technological lead while navigating geopolitical tensions and an evolving competitive 
              landscape.
            </p>
          </div>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">External Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <a 
                href="https://www.nvidia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Nvidia.com →</h4>
                <p className="text-sm text-gray-600">Official Nvidia website</p>
              </a>
              <a 
                href="https://investor.nvidia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Investor Relations →</h4>
                <p className="text-sm text-gray-600">Financial reports and earnings</p>
              </a>
              <a 
                href="https://developer.nvidia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Developer Resources →</h4>
                <p className="text-sm text-gray-600">CUDA, SDKs, and documentation</p>
              </a>
              <a 
                href="https://blogs.nvidia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Nvidia Blog →</h4>
                <p className="text-sm text-gray-600">Latest news and technical insights</p>
              </a>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
