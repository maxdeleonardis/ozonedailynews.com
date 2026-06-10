// components/ArticlePageDB.tsx
// Evergreen / wiki-style article component — Wikipedia-style layout.
// Reads from content/static/article_pages/{slug}.json.

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticlePageBySlug } from '@/lib/article-service';
import { getRelatedArticles } from '@/lib/registry-service';
import { getAuthor } from '@/lib/authors';
import { extractAndInjectToc } from '@/lib/toc-utils';
import { ContentRenderer } from '@/components/articles/ContentRenderer';
import { SEOWrapper } from './SEOWrapper';

interface ArticlePageDBProps {
  slug: string;
}

export async function ArticlePageDB({ slug }: ArticlePageDBProps) {
  const article = await getArticlePageBySlug(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article.url, 6);
  const { processedHtml, tocHeadings } = extractAndInjectToc(article.content_html ?? '');
  const authorEntity = getAuthor(article.author_slug);

  const authorName  = article.author_name ?? 'OzoneNews Editorial Team';
  const authorSlug  = article.author_slug ?? 'ozonedailynews-editorial-team';
  const authorTitle = authorEntity?.jobTitle ?? 'Editorial';
  const authorInit  = authorEntity?.initials ?? authorName.slice(0, 2).toUpperCase();

  return (
    <SEOWrapper slug={article.url}>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="text-blue-600 hover:text-blue-800 underline">Home</Link>
            <span>/</span>
            <Link href={`/${article.category.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 underline">
              {article.category}
            </Link>
            <span>/</span>
            <span className="text-gray-700 truncate max-w-xs">{article.title}</span>
          </nav>

          {/* Page title */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight border-b border-gray-300 pb-3 mb-6">
            {article.title}
          </h1>

          {/* Wikipedia-style 2-column: prose left, sidebar right */}
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 items-start">

            {/* ── LEFT COLUMN ── */}
            <div>
              {/* Lead / description paragraph */}
              {article.subtitle && (
                <p className="text-lg text-gray-700 leading-relaxed bg-gray-50 border-l-4 border-gray-400 px-4 py-3 mb-6 rounded-r">
                  {article.subtitle}
                </p>
              )}

              {/* Wikipedia-style TOC (inline, before body) */}
              {tocHeadings.length >= 2 && (
                <div className="inline-block bg-gray-50 border border-gray-300 rounded px-5 py-4 mb-8 min-w-[220px] max-w-xs">
                  <p className="text-sm font-bold text-gray-800 mb-2 text-center">Contents</p>
                  <ol className="list-none space-y-1">
                    {tocHeadings.map((h, i) => (
                      <li key={h.id} className="text-sm">
                        <span className="text-gray-400 mr-1.5 tabular-nums">{i + 1}</span>
                        <a href={`#${h.id}`} className="text-blue-600 hover:text-blue-800 underline">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Hero image (inside prose column, like Wikipedia) */}
              {article.thumbnail_src && (
                <figure className="mb-6">
                  <img
                    src={article.thumbnail_src}
                    alt={article.thumbnail_alt ?? article.title}
                    className="w-full rounded object-cover max-h-80 border border-gray-200"
                  />
                </figure>
              )}

              {/* Article prose */}
              <div className="prose prose-gray max-w-none prose-headings:font-serif prose-h2:text-xl prose-h2:border-b prose-h2:border-gray-300 prose-h2:pb-1">
                <ContentRenderer html={processedHtml} />
              </div>

              {/* Tags footer */}
              {article.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mr-3">Topics:</span>
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/search?q=${encodeURIComponent(tag)}`}
                      className="inline-block mr-2 mb-2 px-3 py-1 rounded text-xs bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 underline"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <aside className="lg:sticky lg:top-6 self-start mt-8 lg:mt-0 space-y-5">

              {/* Wikipedia-style infobox with rich data structure */}
              {(article as any).info_box ? (
                <div className="border border-gray-300 rounded overflow-hidden text-sm bg-gray-50">
                  {/* Infobox header */}
                  <div className="bg-gray-700 px-4 py-2.5">
                    <p className="text-white font-semibold text-xs uppercase tracking-wider truncate">
                      {(article as any).info_box.title ?? article.title}
                    </p>
                  </div>

                  {/* Infobox image */}
                  {(article as any).info_box.image && (
                    <div className="bg-white p-3 border-b border-gray-200 text-center">
                      <img
                        src={(article as any).info_box.image.src}
                        alt={(article as any).info_box.image.alt}
                        className="mx-auto rounded object-cover max-h-48 w-full"
                      />
                      {(article as any).info_box.image.caption && (
                        <p className="text-xs text-gray-500 mt-2 italic">
                          {(article as any).info_box.image.caption}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Infobox sections */}
                  {(article as any).info_box.sections && (article as any).info_box.sections.map((section: any, idx: number) => (
                    <div key={idx} className="px-4 py-3 border-b border-gray-200 last:border-b-0">
                      <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">
                        {section.heading}
                      </h3>

                      {/* Key/value items */}
                      {section.items && section.items.length > 0 && (
                        <dl className="space-y-1.5">
                          {section.items.map((item: any, i: number) => (
                            <div key={i} className="grid grid-cols-[1fr_1.2fr] gap-2">
                              <dt className="text-gray-600 text-xs">{item.label}</dt>
                              <dd className="text-gray-900 text-xs font-medium">{item.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}

                      {/* Links */}
                      {section.links && section.links.length > 0 && (
                        <ul className="space-y-1.5">
                          {section.links.map((link: any, i: number) => (
                            <li key={i}>
                              <Link href={link.href} className="text-blue-600 hover:text-blue-800 underline text-xs block">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                /* Fallback simple infobox */
                <div className="border border-gray-300 rounded overflow-hidden text-sm">
                  <div className="bg-gray-700 px-4 py-2.5">
                    <p className="text-white font-semibold text-xs uppercase tracking-wider truncate">
                      {article.title}
                    </p>
                  </div>

                  {/* Thumbnail inside infobox */}
                  {article.thumbnail_src && (
                    <div className="bg-gray-50 p-3 border-b border-gray-200 text-center">
                      <img
                        src={article.thumbnail_src}
                        alt={article.thumbnail_alt ?? article.title}
                        className="mx-auto rounded object-cover max-h-36 w-full"
                      />
                    </div>
                  )}

                  <table className="w-full text-xs">
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-3 py-2 font-semibold text-gray-500 w-24 align-top">Category</td>
                        <td className="px-3 py-2 text-gray-800">
                          <Link href={`/${article.category.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 underline">
                            {article.category}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold text-gray-500 align-top">Published</td>
                        <td className="px-3 py-2 text-gray-800">
                          <time dateTime={article.published_at}>{article.publish_date}</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold text-gray-500 align-top">Author</td>
                        <td className="px-3 py-2">
                          <Link href={`/authors/${authorSlug}`} className="text-blue-600 hover:text-blue-800 underline">
                            {authorName}
                          </Link>
                          {authorTitle && (
                            <span className="block text-gray-400 text-xs mt-0.5">{authorTitle}</span>
                          )}
                        </td>
                      </tr>
                      {article.read_time && (
                        <tr>
                          <td className="px-3 py-2 font-semibold text-gray-500 align-top">Read time</td>
                          <td className="px-3 py-2 text-gray-800">{article.read_time}</td>
                        </tr>
                      )}
                      {article.tags.length > 0 && (
                        <tr>
                          <td className="px-3 py-2 font-semibold text-gray-500 align-top">Tags</td>
                          <td className="px-3 py-2 text-gray-700 leading-relaxed">
                            {article.tags.slice(0, 5).join(', ')}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Author card (compact, Wikipedia-style) */}
              <div className="border border-gray-200 rounded overflow-hidden text-sm">
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Written by</p>
                </div>
                <Link href={`/authors/${authorSlug}`} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs font-bold">
                    {authorEntity?.avatarUrl ? (
                      <img src={authorEntity.avatarUrl} alt={authorName} className="w-9 h-9 rounded-full object-cover" />
                    ) : authorInit}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-700 text-sm">{authorName}</p>
                    {authorTitle && <p className="text-gray-500 text-xs">{authorTitle}</p>}
                  </div>
                </Link>
                {authorEntity?.beats && authorEntity.beats.length > 0 && (
                  <div className="px-4 pb-3 flex flex-wrap gap-1">
                    {authorEntity.beats.slice(0, 3).map((b) => (
                      <span key={b} className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-xs uppercase tracking-wide border border-gray-200">
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="bg-gray-700 px-4 py-2">
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Related Articles</p>
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {related.map((entry) => (
                      <li key={entry.slug}>
                        <Link
                          href={entry.slug}
                          className="block px-4 py-3 text-sm text-blue-600 hover:text-blue-800 underline hover:bg-gray-50 leading-snug"
                        >
                          {entry.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
