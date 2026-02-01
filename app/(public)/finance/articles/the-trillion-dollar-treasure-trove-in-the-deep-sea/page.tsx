import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "The Trillion-Dollar Treasure: Polymetallic Nodules and the Deep-Sea Frontier | ObjectWire",
  description: "Analysis of the Clarion-Clipperton Zone (CCZ) and the macroeconomic impact of deep-sea mining on critical metal supply chains including nickel, cobalt, and manganese.",
  keywords: [
    "deep sea mining economics 2026",
    "polymetallic nodules CCZ",
    "critical metals supply chain",
    "nickel cobalt deep sea mining",
    "The Metals Company TMC stock analysis",
    "ocean floor mining regulation ISA",
    "battery metal scarcity 2030",
    "terrestrial vs deep sea mining"
  ],
  openGraph: {
    title: "The Trillion-Dollar Treasure: Polymetallic Nodules and the Deep-Sea Frontier",
    description: "Financial Intelligence: Assessing the industrial potential and regulatory hurdles of the $1 trillion deep-sea metal reserve.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea",
    publishedTime: "2025-06-17T08:00:00Z",
    section: "Resource Intelligence",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
};

/* pinned: false */
// 20 min read

export default function PolymetallicNodulesPage() {
  const publishedDate = new Date("2025-06-17T08:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white pb-32">
      <NewsArticleSchema
        title="Industrial Report: Polymetallic Nodules & The Deep-Sea Frontier"
        description="Analysis of the Clarion-Clipperton Zone (CCZ) and the macroeconomic impact of deep-sea mining on critical metal supply chains including nickel, cobalt, and manganese."
        author="ObjectWire Financial Desk"
        publishedTime={publishedDate}
        section="Resource Intelligence"
        articleUrl="https://www.objectwire.org/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { name: "Finance", item: "/finance" },
            { name: "Research Archive", item: "/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea" }
          ]} 
        />
        
        <article className="mt-12">
          <header className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-gray-100 text-gray-900 text-[10px] font-black px-4 py-1.5 uppercase tracking-[0.2em] rounded-sm border border-gray-200">
                Research Archive: RESOURCE INTELLIGENCE
              </span>
              <span className="text-gray-400 text-xs font-mono tracking-tighter uppercase">• TRANSMISSION DATE: JUNE 17, 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8 tracking-tighter uppercase">
              The Trillion-Dollar Treasure:<br/>
              Polymetallic Nodules & The Deep-Sea Frontier
            </h1>

            <div className="bg-gray-50 p-8 border-l-[12px] border-gray-900 mt-12 text-sm text-gray-500 uppercase tracking-widest font-black">
              Subject: Clarion-Clipperton Zone (CCZ), Critical Minerals, and Global Supply Autonomy
            </div>
          </header>

          <div className="prose prose-xl prose-slate max-w-none font-serif text-gray-800">
            <section className="mb-24">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-2 border-gray-900 pb-4 tracking-tight uppercase">
                I. Abstract: The Seafloor Paradigm
              </h2>
              <p className="mb-8 leading-relaxed">
                Thousands of meters below the ocean's surface lie potato-sized mineral concretions colloquially known as "Polymetallic Nodules." As terrestrial mines face declining ore grades and increasing geopolitical instability, the **Clarion-Clipperton Zone (CCZ)** has emerged as the most valuable untapped resource on the planet. Containing billions of tons of nickel, cobalt, copper, and manganese, these nodules represent a trillion-dollar frontier that could determine the success or failure of the global energy transition.
              </p>
            </section>

            <section className="mb-24">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-2 border-gray-900 pb-4 tracking-tight uppercase">
                II. Resource Composition: The "Battery in a Rock"
              </h2>
              <p className="mb-12 leading-relaxed">
                Unlike terrestrial deposits where metals are often bound in complex ores, polymetallic nodules are effectively "unattached" on the seafloor. They contain high-grade concentrations of metals essential for high-capacity EV batteries and grid storage.
              </p>
              
              <div className="bg-gray-50 p-10 border-l-[12px] border-gray-900 my-12">
                <h4 className="text-[10px] font-black text-gray-400 mb-6 uppercase tracking-widest font-sans">Strategic Mineral Breakdown (CCZ Avg.)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <span className="block text-2xl font-black text-gray-900">30%</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">Manganese</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-black text-gray-900">1.5%</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">Nickel</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-black text-gray-900">1.1%</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">Copper</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-black text-gray-900">0.3%</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">Cobalt</span>
                    </div>
                </div>
                <p className="mt-8 text-sm text-gray-500 italic">Significance: The CCZ alone contains more nickel than all known terrestrial deposits combined.</p>
              </div>
            </section>

            <section className="mb-24">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-2 border-gray-900 pb-4 tracking-tight uppercase">
                III. Macro-Economic Catalyst: Supply Chain Autonomy
              </h2>
              <p className="mb-8 leading-relaxed">
                In 2026, the primary driver for deep-sea mining is no longer just "profit"; it is **Sovereignty**. With over 70% of cobalt processing and 60% of lithium refining geographically concentrated, Western economies are seeking a "Neutral Zone" for resource extraction.
              </p>
              <div className="bg-gray-50 p-8 border border-gray-100 flex flex-col md:flex-row gap-8 items-center italic">
                <div className="text-4xl font-serif text-gray-200">"</div>
                <p className="text-xl text-gray-700 leading-relaxed">
                    The ocean floor represents the only remaining large-scale mineral resource that does not require the displacement of human populations or the destruction of tropical rainforests.
                </p>
              </div>
            </section>

            <section className="mb-24">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-2 border-gray-900 pb-4 tracking-tight uppercase">
                IV. Regulatory Landscape: The ISA Mandate
              </h2>
              <p className="mb-8 leading-relaxed">
                The International Seabed Authority (ISA) is currently finalizing the "Mining Code." For investors, the risk remains binary: either a global regulatory framework is established, allowing for multi-billion dollar CapEx cycles, or the industry remains stalled in legal limbo.
              </p>
            </section>

            <section className="mb-24">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-2 border-gray-900 pb-4 tracking-tight uppercase">
                V. Conclusion: The Blue Economy
              </h2>
              <p className="mb-8 leading-relaxed">
                We estimate that the first commercial production of polymetallic nodules will reach the global market by late 2026 or early 2027. Companies like **The Metals Company (TMC)** are the "early movers" in a sector that will likely be dominated by sovereign wealth funds and heavy industrial conglomerates by the end of the decade.
              </p>
            </section>

            {/* Bibliography / Appendix */}
            <section className="border-t-[1px] border-black pt-20 pb-32 not-prose">
              <h3 className="text-xs uppercase font-black tracking-[0.3em] mb-12">Institutional References & Geological Surveys</h3>
              <div className="space-y-8 max-w-4xl">
                {[
                  { ref: "GEO-CCZ-01", author: "International Seabed Authority (2024)", title: "Mineral Reserves and Geological Consistency of the Clarion-Clipperton Zone", source: "Technical Report Vol. 12" },
                  { ref: "ENV-2025", author: "Blue-Science Foundation", title: "Comparative Impact Analysis: Terrestrial vs. Deep-Sea Mining", source: "Environmental Policy Review" },
                  { ref: "FIN-RESOURCE", author: "ObjectWire Intelligence", title: "The Blue Gold: Financing the Seafloor Extraction Cycle", source: "Market Report #882" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-[10px] font-black text-gray-300 group-hover:text-black transition-colors shrink-0 font-mono mt-1">[{item.ref}]</span>
                    <div>
                      <p className="text-base font-serif text-gray-800 leading-tight">
                        <span className="font-bold">{item.author}</span>. <span className="italic">"{item.title}"</span>. {item.source}.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-4">ObjectWire Research & Intelligence</p>
          <div className="text-2xl font-serif italic mb-8">Resource Sovereignty for the High-Velocity Era.</div>
          <div className="flex justify-center gap-12 font-mono text-[10px] text-gray-500 underline underline-offset-4">
            <Link href="/finance">Research Archive</Link>
            <Link href="/contact">Inquiries</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
