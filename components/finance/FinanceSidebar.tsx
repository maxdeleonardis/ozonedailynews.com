import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  BarChart3, 
  Search, 
  ShieldAlert, 
  Zap, 
  FileText 
} from "lucide-react";

export default function FinanceSidebar() {
  const sections = [
    {
      title: "Market Intelligence",
      items: [
        { name: "Prediction Markets", icon: Zap, href: "/finance/predictions" },
        { name: "Whale Tracking", icon: TrendingUp, href: "/finance/whales" },
        { name: "Exchange Audits", icon: ShieldAlert, href: "/finance/audits" },
      ]
    },
    {
      title: "Investigative Reports",
      items: [
        { name: "Central Bank Policy", icon: Search, href: "/finance/fed" },
        { name: "Corporate Transparency", icon: FileText, href: "/finance/corporate" },
        { name: "Economic Data", icon: BarChart3, href: "/finance/data" },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {sections.map((section, idx) => (
        <Card key={idx} className="border-0 shadow-sm">
          <CardHeader className="pb-2 px-6 pt-6">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-gray-500">
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-2 pb-4">
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <Link
                  key={itemIdx}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="bg-blue-600 border-0 text-white overflow-hidden">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Objectwire Insider</h3>
          <p className="text-blue-100 text-sm mb-4">
            Get investigative financial reports delivered to your inbox before they hit the wire.
          </p>
          <button className="w-full bg-white text-blue-600 font-bold py-2 rounded-md hover:bg-blue-50 transition-colors">
            Subscribe Now
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
