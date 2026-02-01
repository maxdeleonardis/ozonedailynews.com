import Link from 'next/link';
import { scanFinanceArticles } from '@/lib/finance-scanner';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User } from "lucide-react";

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
        <Card key={`${article.slug}-${index}`} className="border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <Link href={`/finance/articles/${article.slug}`} className="group block p-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-3 pt-4 text-xs text-gray-500 border-t border-gray-100 mt-2">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span className="font-medium text-gray-700">{article.author}</span>
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
