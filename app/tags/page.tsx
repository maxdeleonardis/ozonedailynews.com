import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTags } from '@/lib/content-registry';

export const metadata: Metadata = {
  title: 'All Topics & Tags | ObjectWire',
  description:
    'Browse all topics covered by ObjectWire — technology, gaming, finance, entertainment, sports, and more.',
  alternates: { canonical: 'https://www.objectwire.org/tags' },
  openGraph: {
    title: 'All Topics & Tags | ObjectWire',
    description: 'Browse every topic covered by ObjectWire.',
    url: 'https://www.objectwire.org/tags',
    siteName: 'ObjectWire',
    type: 'website',
  },
};

export default function TagsIndexPage() {
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Header */}
      <header
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e293b 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-14 text-center">
          <p className="text-white/60 text-xs font-bold tracking-[0.12em] uppercase mb-3">
            ObjectWire
          </p>
          <h1 className="text-white font-black text-4xl md:text-5xl mb-4">
            Topics &amp; Tags
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Every subject ObjectWire covers — click a tag to see all related
            articles.
          </p>
        </div>
      </header>

      {/* Tag cloud */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="flex flex-wrap gap-3 justify-center">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-gray-400 transition-all"
            >
              <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700">
                {tag}
              </span>
              <span className="text-xs font-bold text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
                {count}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'All Topics & Tags',
            description:
              'Index of all topics covered by ObjectWire.',
            url: 'https://www.objectwire.org/tags',
            publisher: {
              '@type': 'Organization',
              name: 'ObjectWire',
              url: 'https://www.objectwire.org',
            },
          }),
        }}
      />
    </div>
  );
}
