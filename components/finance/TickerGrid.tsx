"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface TickerData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  change_percent: number;
  is_up: boolean;
}

export default function TickerGrid() {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchMarketData = async () => {
    try {
      // Placeholder - will integrate real financial data source later
      const mockData: TickerData[] = [];
      
      setTickers(mockData);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching market data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (loading && tickers.length === 0) {
    return (
      <div className="w-full bg-black text-white py-4 px-4 overflow-hidden border-b border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 italic">Market ticker data coming soon...</p>
        </div>
      </div>
    );
  }

  if (tickers.length === 0) {
    return (
      <div className="w-full bg-black text-white py-4 px-4 overflow-hidden border-b border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 italic">Market ticker data coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Activity className="h-3 w-3 text-blue-500" />
            <span className="uppercase tracking-wider font-semibold">Live Market Look</span>
          </div>
          {lastUpdated && (
             <div className="text-[10px] text-gray-500 font-mono">
               Refreshed: {lastUpdated.toLocaleTimeString()}
             </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {tickers.map((ticker) => (
            <div 
              key={ticker.symbol} 
              className="flex flex-col p-3 rounded bg-zinc-900/50 hover:bg-zinc-900 transition-colors border border-zinc-800/50"
            >
              <div className="flex justify-between items-start mb-0.5">
                <span className="font-bold text-xs text-zinc-300">{ticker.symbol}</span>
                <span className={cn(
                  "flex items-center text-[10px] font-bold",
                  ticker.is_up ? "text-green-400" : "text-red-400"
                )}>
                  {ticker.is_up ? <ArrowUpRight className="h-2 w-2 mr-0.5" /> : <ArrowDownRight className="h-2 w-2 mr-0.5" />}
                  {Math.abs(ticker.change_percent).toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] text-zinc-500 truncate max-w-[80px]">{ticker.name}</span>
                <span className="font-mono text-sm font-semibold tracking-tight">
                  {ticker.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
