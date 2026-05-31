import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AUTHORS, getAuthor, authorUrl, authorPersonSchema } from '@/lib/authors';
import { getAllEntries } from '@/lib/registry-service';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return { title: 'Author Not Found' };

  const title = `${author.name} | ${author.jobTitle}, ${SITE_CONFIG.name}`;
  const description = author.bio[0];
  const url = authorUrl(author.slug);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'profile' },
  };
}

export default async function AuthorPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const allEntries = await getAllEntries();
  const recent = allEntries
    .filter((e) => e.authorSlug === author.slug && e.lifecycle !== 'pruned')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 12);

  const schema = authorPersonSchema(author);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="mx-auto max-w-3xl px-4 py-12">
        {/* Header */}
        <div className="mb-8 flex items-start gap-6">
          {author.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={author.avatarUrl}
              alt={author.name}
              className="h-20 w-20 flex-shrink-0 rounded-full object-cover"
            />
          ) : (
            <div className="h-20 w-20 flex-shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-2xl font-bold text-white">
              {author.initials}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{author.name}</h1>
            <p className="mt-1 text-lg text-slate-500">{author.jobTitle}</p>
            <p className="mt-1 text-sm text-slate-400">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                {SITE_CONFIG.name}
              </Link>
              {author.since ? ` · Reporting since ${author.since}` : ''}
            </p>
            {author.beats.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {author.beats.map((beat) => (
                  <span
                    key={beat}
                    className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-600"
                  >
                    {beat}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-slate-800 border-b pb-2">About</h2>
          {author.bio.map((para, i) => (
            <p key={i} className={`text-slate-700 leading-relaxed${i > 0 ? ' mt-3' : ''}`}>
              {para}
            </p>
          ))}
        </section>

        {/* Expertise */}
        {author.knowsAbout.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-slate-800 border-b pb-2">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {author.knowsAbout.map((topic) => (
                <span
                  key={topic}
                  className="rounded border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* External profiles */}
        {author.sameAs.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-slate-800 border-b pb-2">Verified Profiles</h2>
            <ul className="space-y-1">
              {author.sameAs.map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-blue-600 hover:text-blue-800 underline text-sm break-all"
                  >
                    {href}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Recent articles (from the content registry) */}
        {recent.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-slate-800 border-b pb-2">Recent Articles</h2>
            <ul className="space-y-2">
              {recent.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={a.slug}
                    className="text-blue-600 hover:text-blue-800 underline text-sm leading-relaxed"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Editorial note */}
        <section className="rounded-lg bg-slate-50 border border-slate-200 px-5 py-4">
          <p className="text-sm text-slate-600">
            All articles published under this byline follow the{' '}
            <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
              {SITE_CONFIG.name} editorial standards
            </Link>
            , including source attribution, independent verification, and the{' '}
            <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">
              corrections policy
            </Link>
            .{' '}
            {author.isOwner ? (
              <>{SITE_CONFIG.publisherName} is owned and operated by {author.name}.</>
            ) : (
              <>
                {SITE_CONFIG.publisherName} is owned and operated by{' '}
                <Link href="/authors/max-deleonardis" className="text-blue-600 hover:text-blue-800 underline">
                  Max DeLeonardis
                </Link>
                .
              </>
            )}
          </p>
        </section>
      </main>
    </>
  );
}
