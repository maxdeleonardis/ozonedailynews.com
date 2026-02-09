import TechStatsBar from "@/components/technology/TechStatsBar";
import TechHeader from "@/components/technology/TechHeader";
import TechNewsFeed from "@/components/technology/TechNewsFeed";
import TechSidebar from "@/components/technology/TechSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology | ObjectWire",
  description: "Latest technology news covering AI, blockchain, computing, software development, and cybersecurity.",
  alternates: {
    canonical: 'https://www.objectwire.org/technology',
  },
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <TechStatsBar />
      <TechHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* SEO-Rich Introduction Section */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology News & Analysis</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            ObjectWire's Technology division provides cutting-edge coverage of artificial intelligence, blockchain, quantum computing, cybersecurity, and enterprise software development. We deliver in-depth reporting on tech industry disruption, including AI breakthroughs, open-source innovations, semiconductor advancements, and the geopolitical implications of technology leadership.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our technology reporters cover major tech companies including Apple, Google, Microsoft, Amazon, Meta, Tesla, and emerging startups. We analyze product launches, regulatory challenges, data privacy concerns, computational breakthroughs, and how technology reshapes industries from healthcare to finance to national security. From Artificial General Intelligence (AGI) discussions to quantum supremacy claims, we provide verified reporting with technical depth and source documentation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Focus Areas</div>
              <div className="text-sm font-semibold text-gray-900">AI, Crypto, Semiconductors</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Coverage Style</div>
              <div className="text-sm font-semibold text-gray-900">Technical Deep-Dives</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Industry Focus</div>
              <div className="text-sm font-semibold text-gray-900">Enterprise & Startup</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Audience</div>
              <div className="text-sm font-semibold text-gray-900">Tech Professionals</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Main Content Area - 8 Columns */}
          <div className="lg:col-span-8">
             {/* Divider */}
            <div className="h-px bg-gray-100 mb-12"></div>
            <TechNewsFeed />
          </div>
          
          {/* Sidebar Area - 4 Columns */}
          <div className="lg:col-span-4 pl-4 lg:pl-0">
             {/* Divider */}
            <div className="h-px bg-gray-100 mb-12 lg:hidden"></div>
            <div className="sticky top-12">
              <TechSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
