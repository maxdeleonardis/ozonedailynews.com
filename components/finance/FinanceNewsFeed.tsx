import Link from 'next/link';
import { scanFinanceArticles } from '@/lib/finance-scanner';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, Pin } from "lucide-react";

export default async function FinanceNewsFeed() {
  // Fetch articles from the finance folder only
  const financeArticles = await scanFinanceArticles();

  if (financeArticles.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500 bg-white rounded-lg border border-gray-100">
        <p>No finance articles published yet. Articles will appear here as they're added to the finance folder.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {financeArticles.map((article, index) => (
        <Card key={`${article.slug}-${index}`} className={`border-0 border-b border-gray-100 rounded-none shadow-none hover:bg-gray-50 transition-colors ${article.isPinned ? 'bg-gray-50/50' : ''}`}>
          <CardContent className="p-0">
            <Link href={`/finance/articles/${article.slug}`} className="group block p-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                      {article.category}
                    </span>
                    {article.isPinned && (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase text-gray-900 border-l border-gray-300 pl-4 tracking-widest">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                    {article.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-gray-600 transition-colors tracking-tighter uppercase leading-tight">
                  {article.title}
                </h2>
                
                <p className="text-gray-500 font-serif leading-relaxed line-clamp-2 text-lg">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-6 pt-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900">{article.author}</span>
                  </div>
                  <span>•</span>
                  <time>{article.date}</time>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
