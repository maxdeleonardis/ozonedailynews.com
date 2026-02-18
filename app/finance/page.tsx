import TickerGrid from "@/components/finance/TickerGrid";
import FinanceHeader from "@/components/finance/FinanceHeader";
import FinanceSidebar from "@/components/finance/FinanceSidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance | ObjectWire",
  description: "Real-time market look, financial news, and investigative economic reporting.",
  alternates: {
    canonical: 'https://www.objectwire.org/finance',
  },
};

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb items={[{ name: 'Home', item: '/' }, { name: 'Finance', item: '/finance' }]} />
      </div>
      <TickerGrid />
      <FinanceHeader />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* SEO-Rich Introduction Section */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Intelligence & Market Analysis</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            ObjectWire's Financial Research division provides comprehensive coverage of global markets, economic trends, and investigative economic reporting. Our team analyzes real-time market movements, corporate earnings, macroeconomic indicators, and the intersection of finance with geopolitical events. From cryptocurrency and blockchain disruption to traditional equity markets and commodities trading, we deliver data-driven insights for investors, traders, and financial professionals.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We cover major financial institutions, fintech innovations, central bank policies, trade dynamics, and the economic impact of emerging technologies including AI, quantum computing, and satellite communications. Our investigative reports examine corporate financial health, regulatory compliance, and market-moving business decisions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Coverage Areas</div>
              <div className="text-sm font-semibold text-gray-900">Markets, Crypto, Tech Finance</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Update Frequency</div>
              <div className="text-sm font-semibold text-gray-900">Real-Time Data Feeds</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Analysis Type</div>
              <div className="text-sm font-semibold text-gray-900">Investigative Reports</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Audience</div>
              <div className="text-sm font-semibold text-gray-900">Investors & Analysts</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-12">
                    <div className="h-6 w-1.5 bg-gray-900"></div>
                    <h1 className="text-sm font-black uppercase tracking-[0.3em] text-gray-900">
                        Financial Research Archive
                    </h1>
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <p className="text-gray-600">Finance articles will be displayed here.</p>
                </div>
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
