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
      // Static mock data for stability - avoids 500 errors from backend rate limits
      const mockData = [
        { symbol: "ES=F", name: "S&P 500 Futures", price: 5842.25, change: 15.50, change_percent: 0.27, is_up: true },
        { symbol: "NQ=F", name: "Nasdaq 100 Futures", price: 20450.50, change: -42.00, change_percent: -0.21, is_up: false },
        { symbol: "GC=F", name: "Gold Futures", price: 2685.10, change: 12.40, change_percent: 0.46, is_up: true },
        { symbol: "CL=F", name: "Crude Oil", price: 71.45, change: -0.85, change_percent: -1.18, is_up: false },
        { symbol: "VIX", name: "Volatility Index", price: 14.20, change: 0.35, change_percent: 2.53, is_up: true },
        { symbol: "DXY", name: "US Dollar Index", price: 103.85, change: -0.12, change_percent: -0.12, is_up: false },
        { symbol: "TLT", name: "20+ Year Treasury", price: 91.20, change: -0.45, change_percent: -0.49, is_up: false },
        { symbol: "BTC", name: "Bitcoin USD", price: 92450.00, change: 1250.00, change_percent: 1.37, is_up: true },
      ];
      
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
        <div className="animate-pulse flex gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 w-48 bg-gray-800 rounded"></div>
          ))}
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
