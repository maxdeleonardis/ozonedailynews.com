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
