import type { Metadata } from 'next';
import Link from 'next/link';
import { AUTHORS } from '@/lib/authors';
import type { AuthorEntity } from '@/lib/authors';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Authors',
  description: 'Meet the scientists, editors, and reporters behind OzoneNews. Named authorship is a core part of our editorial standards.',
  alternates: { canonical: `${SITE_CONFIG.url}/authors` },
};

export default function AuthorsIndexPage() {
  // Order: owner/CEO first, then the rest alphabetically.
  const authors: AuthorEntity[] = Object.values(AUTHORS).sort((a, b) => {
    if (a.isOwner && !b.isOwner) return -1;
    if (!a.isOwner && b.isOwner) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Authors</h1>
        <p className="mt-2 text-slate-600">
          Every article on {SITE_CONFIG.name} carries a named byline. Meet the scientists,
          editors, and reporters who research, verify, and write our coverage.
        </p>
      </header>

      <div className="space-y-6">
        {authors.map((author) => (
          <Link
            key={author.slug}
            href={`/authors/${author.slug}`}
            className="block rounded-lg border border-slate-200 bg-white p-6 transition hover:border-blue-400 hover:shadow-sm"
          >
            <div className="flex items-start gap-5">
              {/* Avatar / initials */}
              {author.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={author.avatarUrl}
                  alt={author.name}
                  className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-white">
                  {author.initials}
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-lg font-bold text-slate-900">{author.name}</h2>
                  {author.isOwner && (
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                      Founder & Editor-in-Chief
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm font-medium text-slate-500">{author.jobTitle}</p>
                {author.since && (
                  <p className="mt-0.5 text-xs text-slate-400">
                    Reporting since {author.since}
                  </p>
                )}

                {author.beats.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {author.beats.slice(0, 6).map((beat) => (
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

              <span className="text-slate-300 text-xl flex-shrink-0 self-center" aria-hidden>
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <footer className="mt-10 rounded-lg bg-slate-50 border border-slate-200 px-5 py-4">
        <p className="text-sm text-slate-600">
          Named authorship is a core part of our{' '}
          <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
            editorial standards
          </Link>
          . Each author is accountable for the accuracy of their work and follows our{' '}
          <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">
            corrections policy
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}