import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog-service';
import type { BlogPostFull } from '@/lib/blog-service';

export const metadata: Metadata = {
  title: 'ObjectWire | Independent Investigative Journalism & Tech News',
  description:
    'ObjectWire delivers independent investigative journalism, technology news, finance analysis, and verified reporting. Trusted source for in-depth coverage of business, politics, and innovation.',
  alternates: { canonical: 'https://www.objectwire.org' },
  openGraph: {
    title: 'ObjectWire | Independent Investigative Journalism',
    description: 'Independent news source delivering verified investigative journalism and technology coverage.',
    url: 'https://www.objectwire.org',
    siteName: 'ObjectWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ObjectWire | Independent Investigative Journalism',
    description: 'Independent news source delivering verified investigative journalism and technology coverage.',
  },
};

export const revalidate = 60;

// ── Helpers ───────────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, string> = {
  news:           'bg-red-600 text-white',
  tech:           'bg-blue-600 text-white',
  technology:     'bg-blue-600 text-white',
  finance:        'bg-emerald-600 text-white',
  entertainment:  'bg-purple-600 text-white',
  sports:         'bg-orange-600 text-white',
  investigations: 'bg-yellow-500 text-black',
  gaming:         'bg-violet-600 text-white',
  'video-games':  'bg-violet-600 text-white',
  politics:       'bg-red-700 text-white',
};

function catColor(category?: string): string {
  if (!category) return 'bg-gray-700 text-white';
  const key = category.toLowerCase();
  return CATEGORY_COLORS[key] ?? 'bg-gray-700 text-white';
}

function timeAgo(dateStr?: string | null): string {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function strip(title: string) {
  return title.replace(/\s*[|—–\-]\s*ObjectWire.*$/i, '');
}

// ── Coverage beats ────────────────────────────────────────────────────────────

const BEATS = [
  { label: 'Breaking News',   href: '/news',           icon: '📰', desc: 'Verified breaking stories & investigations' },
  { label: 'Finance',         href: '/finance',         icon: '💰', desc: 'Markets, crypto & macro intelligence' },
  { label: 'AI & Tech',       href: '/tech',            icon: '🤖', desc: 'OpenAI, Nvidia, Google & the AI race' },
  { label: 'Winter Olympics', href: '/winter-olympics', icon: '🏅', desc: 'Milan Cortina 2026 medal coverage' },
  { label: 'World Cup',       href: '/world-cup',       icon: '⚽', desc: 'FIFA coverage, boycotts & host cities' },
  { label: 'Formula 1',       href: '/formula-1',       icon: '🏎️', desc: 'F1 2026 season, teams & Apple TV deal' },
  { label: 'Entertainment',   href: '/entertainment',   icon: '🎬', desc: 'Netflix, Disney, YouTube & culture' },
  { label: 'Investigations',  href: '/investigations',  icon: '🔬', desc: 'Long-form investigative journalism' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function CategoryBadge({ category, breaking }: { category?: string; breaking?: boolean }) {
  if (breaking) {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 tracking-widest uppercase bg-red-600 text-white">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
        Breaking
      </span>
    );
  }
  return (
    <span className={`inline-block text-[10px] font-black px-2 py-0.5 tracking-widest uppercase ${catColor(category)}`}>
      {(category ?? 'News').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
    </span>
  );
}

// ── Article card components ───────────────────────────────────────────────────

function HeroCard({ post }: { post: BlogPostFull }) {
  const href = `/blog/${post.slug}`;
  return (
    <Link href={href} className="group block h-full">
      {post.image_url && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
          <Image
            src={post.image_url}
            alt={post.image_alt ?? strip(post.title)}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={post.category} breaking={post.breaking} />
          {post.exclusive && (
            <span className="text-[10px] font-black px-2 py-0.5 tracking-widest uppercase border border-black text-black">
              Exclusive
            </span>
          )}
        </div>
        <h2 className="text-2xl md:text-3xl font-black leading-tight mb-3 group-hover:underline">
          {strip(post.title)}
        </h2>
        {post.excerpt && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-3 text-xs text-gray-500 font-mono pt-3 border-t border-gray-100">
          <span className="font-semibold text-black">{post.author_name ?? 'ObjectWire'}</span>
          <span>·</span>
          <span>{timeAgo(post.published_at ?? post.publishedAt)}</span>
          {post.read_time && (
            <>
              <span>·</span>
              <span>{post.read_time} min read</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

function SidebarCard({ post }: { post: BlogPostFull }) {
  const href = `/blog/${post.slug}`;
  return (
    <Link
      href={href}
      className="group flex gap-3 py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors -mx-4 px-4"
    >
      {post.thumbnail_url && (
        <div className="relative w-16 h-16 shrink-0 bg-gray-100 overflow-hidden rounded">
          <Image
            src={post.thumbnail_url}
            alt={post.thumbnail_alt ?? strip(post.title)}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <CategoryBadge category={post.category} breaking={post.breaking} />
        <h3 className="text-sm font-black leading-snug mt-1.5 group-hover:underline line-clamp-2">
          {strip(post.title)}
        </h3>
        <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-1.5 font-mono">
          <span>{post.author_name ?? 'ObjectWire'}</span>
          <span>·</span>
          <span>{timeAgo(post.published_at ?? post.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}

function GridCard({ post }: { post: BlogPostFull }) {
  const href = `/blog/${post.slug}`;
  return (
    <Link href={href} className="group block bg-white border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all overflow-hidden">
      {post.image_url && (
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
          <Image
            src={post.image_url}
            alt={post.image_alt ?? strip(post.title)}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <CategoryBadge category={post.category} breaking={post.breaking} />
        <h3 className="text-base font-black leading-snug mt-2 mb-2 group-hover:underline line-clamp-3">
          {strip(post.title)}
        </h3>
        {post.excerpt && (
          <p className="text-xs text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
        )}
        <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono">
          <span>{post.author_name ?? 'ObjectWire'}</span>
          <span>·</span>
          <span>{timeAgo(post.published_at ?? post.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}

function ListCard({ post, rank }: { post: BlogPostFull; rank: number }) {
  const href = `/blog/${post.slug}`;
  return (
    <Link
      href={href}
      className="group flex gap-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-4 px-4 transition-colors"
    >
      <span className="text-3xl font-black text-gray-200 tabular-nums leading-none w-8 shrink-0 pt-0.5">
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <CategoryBadge category={post.category} breaking={post.breaking} />
        <h3 className="text-sm font-black leading-snug mt-1 group-hover:underline line-clamp-2">
          {strip(post.title)}
        </h3>
        <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-1 font-mono">
          <span>{post.author_name ?? 'ObjectWire'}</span>
          <span>·</span>
          <span>{timeAgo(post.published_at ?? post.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const allPosts = await getAllBlogPosts();
  const published = allPosts.filter((p) => p.status === 'published');

  // Prioritise featured posts for the hero, fall back to latest
  const featured = published.find((p) => p.featured) ?? published[0];
  const breaking = published.filter((p) => p.breaking).slice(0, 3);
  const rest = published.filter((p) => p.id !== featured?.id);
  const sidebarPosts = rest.slice(0, 5);
  const gridPosts = rest.slice(5, 11);
  const listPosts = rest.slice(11, 21);

  const hasContent = published.length > 0;

  return (
    <div className="min-h-screen">

      {/* ── Breaking alert bar ── */}
      {breaking.length > 0 && (
        <div className="bg-red-600 text-white">
          <div className="container mx-auto px-4 py-2 flex items-center gap-3 overflow-hidden">
            <span className="text-[10px] font-black tracking-widest uppercase shrink-0 bg-white text-red-600 px-2 py-0.5">
              Breaking
            </span>
            <div className="overflow-hidden flex-1">
              <p className="text-xs font-medium whitespace-nowrap animate-marquee">
                {breaking.map((p) => strip(p.title)).join('  ·  ')}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 md:py-12">

        {!hasContent ? (
          /* ── Empty state ── */
          <div className="text-center py-24 text-gray-400">
            <p className="text-4xl mb-4">📰</p>
            <h2 className="text-xl font-black mb-2">No articles published yet</h2>
            <p className="text-sm">Check back soon — stories are on their way.</p>
          </div>
        ) : (
          <>
            {/* ── Hero + sidebar ── */}
            <section className="grid lg:grid-cols-5 gap-0 border border-gray-200 bg-white mb-10 overflow-hidden">
              {/* Hero */}
              <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-gray-200">
                {featured && <HeroCard post={featured as BlogPostFull} />}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 px-4 py-4">
                <p className="text-[9px] font-black tracking-[.3em] text-gray-400 uppercase mb-1 pb-3 border-b border-gray-100">
                  Latest Stories
                </p>
                {sidebarPosts.map((post) => (
                  <SidebarCard key={post.id} post={post as BlogPostFull} />
                ))}
              </div>
            </section>

            {/* ── Article grid ── */}
            {gridPosts.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xs font-black tracking-[.3em] uppercase">From the Library</h2>
                  <div className="h-px flex-1 bg-gray-200" />
                  <Link href="/blog" className="text-[10px] font-bold tracking-wider uppercase text-gray-500 hover:text-black hover:underline transition-colors">
                    All Articles →
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {gridPosts.map((post) => (
                    <GridCard key={post.id} post={post as BlogPostFull} />
                  ))}
                </div>
              </section>
            )}

            {/* ── Latest list + coverage beats ── */}
            <div className="grid lg:grid-cols-3 gap-8 mb-14">

              {/* Latest ranked list */}
              {listPosts.length > 0 && (
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xs font-black tracking-[.3em] uppercase">Latest Headlines</h2>
                    <div className="h-px flex-1 bg-gray-200" />
                    <Link href="/blog" className="text-[10px] font-bold tracking-wider uppercase hover:underline text-gray-500">
                      View all →
                    </Link>
                  </div>
                  <div className="bg-white border border-gray-200 px-4">
                    {listPosts.map((post, i) => (
                      <ListCard key={post.id} post={post as BlogPostFull} rank={i + 1} />
                    ))}
                  </div>
                </div>
              )}

              {/* Coverage beats */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xs font-black tracking-[.3em] uppercase">Coverage Beats</h2>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="space-y-1.5">
                  {BEATS.map((beat) => (
                    <Link
                      key={beat.href}
                      href={beat.href}
                      className="flex items-center gap-3 bg-white border border-gray-200 hover:border-black hover:bg-gray-50 px-4 py-3 transition-all group"
                    >
                      <span className="text-lg shrink-0">{beat.icon}</span>
                      <div>
                        <p className="text-sm font-black group-hover:underline leading-none">{beat.label}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{beat.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── About strip ── */}
        <section className="border-t border-b border-gray-200 py-8 text-center">
          <h2 className="text-sm font-black tracking-[.2em] uppercase mb-3">About ObjectWire</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm leading-relaxed">
            ObjectWire is an independent news organization committed to investigative journalism,
            verified reporting, and editorial integrity. Every article is source-cited, fact-checked,
            and written with depth and accuracy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
            {[
              { href: '/about', label: 'Our Story' },
              { href: '/editorial-standards', label: 'Editorial Standards' },
              { href: '/team', label: 'Our Team' },
              { href: '/get-help/contact', label: 'Contact' },
              { href: '/rss.xml', label: 'RSS Feed' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="font-semibold hover:text-black hover:underline transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
