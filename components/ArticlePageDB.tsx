// components/ArticlePageDB.tsx
// Evergreen / wiki-style article component.
// Reads from content/static/article_pages/{slug}.json.

import { notFound } from 'next/navigation';
import { getArticlePageBySlug } from '@/lib/article-service';
import { getRelatedArticles } from '@/lib/registry-service';
import { getAuthor } from '@/lib/authors';
import { extractAndInjectToc } from '@/lib/toc-utils';
import { AuthorCard, TocNav, type AuthorCardData } from '@/components/articles/SidebarWidgets';
import { SEOWrapper } from './SEOWrapper';

interface ArticlePageDBProps {
  slug: string;
}

export async function ArticlePageDB({ slug }: ArticlePageDBProps) {
  const article = await getArticlePageBySlug(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article.url, 5);

  const { processedHtml, tocHeadings } = extractAndInjectToc(article.content_html ?? '');

  const authorEntity = getAuthor(article.author_slug);
  const authorCardData: AuthorCardData = {
    slug:      article.author_slug ?? 'ozonedailynews-editorial-team',
    name:      article.author_name ?? 'OzoneNews Editorial Team',
    jobTitle:  authorEntity?.jobTitle,
    initials:  authorEntity?.initials,
    avatarUrl: authorEntity?.avatarUrl,
  };

  return (
    <SEOWrapper slug={article.url}>
      <article className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2 mb-4">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="text-xl text-gray-600 leading-relaxed">{article.subtitle}</p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <time dateTime={article.published_at}>{article.publish_date}</time>
            {article.read_time && <span>{article.read_time}</span>}
          </div>
        </header>

        {article.thumbnail_src && (
          <figure className="mb-8">
            <img
              src={article.thumbnail_src}
              alt={article.thumbnail_alt ?? article.title}
              className="w-full rounded-xl object-cover max-h-96"
            />
          </figure>
        )}

        {/* 2-column grid: article body + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Main body */}
          <div>
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:underline prose-a:hover:text-blue-800"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            {article.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 self-start">
            <AuthorCard author={authorCardData} />
            <TocNav headings={tocHeadings} />

            {related.length > 0 && (
              <div className="border border-gray-200">
                <div className="bg-black text-white px-4 py-2">
                  <h3 className="font-bold text-sm tracking-wider">RELATED ARTICLES</h3>
                </div>
                <ul className="p-4 space-y-3">
                  {related.map((entry) => (
                    <li key={entry.slug}>
                      <a href={entry.slug} className="text-blue-600 hover:text-blue-800 underline text-sm leading-snug block">
                        {entry.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>
    </SEOWrapper>
  );
}
