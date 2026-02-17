import TechHeader from "@/components/tech/TechHeader";
import TechSidebar from "@/components/tech/TechSidebar";
import TechStatsBar from "@/components/tech/TechStatsBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech | ObjectWire",
  description: "Investigative reporting on AI, orbital computing, and emerging industrial technologies.",
  alternates: {
    canonical: 'https://www.objectwire.org/tech',
  },
};

export default function TechPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumbs currentPage="Tech" />
      </div>
      
      <TechStatsBar />
      <TechHeader />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* SEO-Rich Introduction Section */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Intelligence & Systems Analysis</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            ObjectWire's Technology Desk provides deep-dive analysis into the systems shaping the 21st century. Our reporting goes beyond product reviews, focusing on the underlying infrastructure of global intelligence—from the shift toward sovereign AI models to the emergence of orbital computing architectures. We examine the intersection of hardware logistics, software sovereignty, and the physical limits of planetary scale engineering.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Focus Areas</div>
              <div className="text-sm font-semibold text-gray-900">AI, Space, Semiconductors</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Methodology</div>
              <div className="text-sm font-semibold text-gray-900">Systems Analysis</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Update Cadence</div>
              <div className="text-sm font-semibold text-gray-900">Weekly Research Papers</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Primary Goal</div>
              <div className="text-sm font-semibold text-gray-900">Infrastructural Literacy</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-12">
                    <div className="h-6 w-1.5 bg-blue-600"></div>
                    <h1 className="text-sm font-black uppercase tracking-[0.3em] text-gray-900">
                        Tech Intelligence Archive
                    </h1>
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <p className="text-gray-600">Tech articles will be displayed here.</p>
                </div>
            </div>
            
            <div className="lg:col-span-4">
                <div className="sticky top-4 space-y-6">
                  <TechSidebar />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
