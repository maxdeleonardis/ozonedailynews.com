import TickerGrid from "@/components/finance/TickerGrid";
import FinanceHeader from "@/components/finance/FinanceHeader";
import FinanceNewsFeed from "@/components/finance/FinanceNewsFeed";
import FinanceSidebar from "@/components/finance/FinanceSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance | ObjectWire",
  description: "Real-time market look, financial news, and investigative economic reporting.",
};

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <TickerGrid />
      <FinanceHeader />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-1.5 bg-blue-600 rounded-full"></div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter">
                        Financial News
                    </h1>
                </div>
                <FinanceNewsFeed />
            </div>
            
            <div className="lg:col-span-4">
                <div className="sticky top-4 space-y-6">
                  <FinanceSidebar />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
