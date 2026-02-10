import Link from "next/link";
import { scanTechnologyArticles } from "@/lib/technology-scanner";

export default async function TechNewsFeed() {
  const articles = await scanTechnologyArticles();

  if (articles.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500 bg-white rounded-lg border border-gray-100 font-mono">
        SYSTEM READY // NO NEW INTEL FOUND
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {articles.map((article, index) => {
        const isFirst = index === 0;
        return (
          <div 
            key={`${article.slug}-${index}`}
            className={`group bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 ${isFirst ? 'p-8 md:p-12' : 'p-6 md:p-8'}`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-[9px] font-mono uppercase tracking-tighter">
                    REF: {article.slug.substring(0, 8).toUpperCase()}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                  {article.readTime}
                </span>
              </div>
              
              <Link href={`/technology/articles/${article.slug}`}>
                <h2 className={`${isFirst ? 'text-2xl md:text-5xl lg:text-6xl' : 'text-xl md:text-2xl'} font-black text-gray-900 group-hover:text-blue-600 transition-colors tracking-tighter uppercase leading-tight mb-4`}>
                  {article.title}
                </h2>
              </Link>
              
              <p className={`text-gray-600 font-serif leading-relaxed line-clamp-2 ${isFirst ? 'text-lg' : 'text-sm'}`}>
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-6 pt-6 text-[9px] font-black uppercase tracking-widest text-gray-400 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900">{article.author}</span>
                </div>
                <span>•</span>
                <time>{article.date}</time>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
