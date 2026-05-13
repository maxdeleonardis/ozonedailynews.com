import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'College & University Profiles | ObjectWire Education Index',
  description: 'University and journalism school profiles connected to ObjectWire reporters. Browse schools by alumni, program, and location.',
  alternates: { canonical: 'https://www.objectwire.org/college' },
  openGraph: {
    title: 'College & University Profiles | ObjectWire',
    description: 'University and journalism school profiles connected to ObjectWire reporters.',
    type: 'website',
    url: 'https://www.objectwire.org/college',
    siteName: 'ObjectWire',
  },
};

const COLLEGES = [
  {
    slug: 'nyu',
    name: 'New York University',
    abbr: 'NYU',
    location: 'New York City, NY',
    type: 'Private Research University',
    program: 'Arthur L. Carter Journalism Institute',
    color: 'bg-purple-950',
    alumni: [{ name: 'Jack Sterling', slug: 'jack-sterling', role: 'Reporter' }],
  },
  {
    slug: 'ucla',
    name: 'University of California, Los Angeles',
    abbr: 'UCLA',
    location: 'Los Angeles, CA',
    type: 'Public Research University',
    program: 'Political Science & Communications',
    color: 'bg-blue-950',
    alumni: [{ name: 'Tina Boyle', slug: 'tina-boyle', role: 'Investigations Reporter' }],
  },
  {
    slug: 'north-carolina-state-university',
    name: 'North Carolina State University',
    abbr: 'NC State',
    location: 'Raleigh, NC',
    type: 'Public Land-Grant University',
    program: 'Journalism & Science Communication',
    color: 'bg-red-900',
    alumni: [{ name: 'Max DeLeonardis', slug: 'max-deleonardis', role: 'Science & Technology Writer' }],
  },
];

export default function CollegeIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-bold">College</span>
          </nav>
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-3 font-mono">
            ObjectWire Education Index
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-none mb-5">
            University<br />Profiles
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Journalism schools and universities connected to ObjectWire reporters. Each profile documents the program, its editorial philosophy, and the ObjectWire journalists it produced.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {COLLEGES.map((college) => (
            <Link
              key={college.slug}
              href={`/college/${college.slug}`}
              className="block group border border-gray-200 hover:border-gray-900 transition-colors"
            >
              <div className="flex flex-col md:flex-row">
                <div className={`${college.color} text-white px-6 py-5 md:w-40 flex items-center justify-center shrink-0`}>
                  <span className="text-2xl font-black tracking-tight text-center">{college.abbr}</span>
                </div>
                <div className="flex-1 px-6 py-5">
                  <p className="font-black text-gray-900 text-lg mb-1 group-hover:underline">{college.name}</p>
                  <p className="text-xs text-gray-500 font-mono mb-3">{college.location} &middot; {college.type}</p>
                  <p className="text-sm text-gray-600 mb-3">Program: {college.program}</p>
                  <div className="flex flex-wrap gap-2">
                    {college.alumni.map((a) => (
                      <span key={a.slug} className="text-xs bg-gray-100 border border-gray-200 px-3 py-1 text-gray-700 font-medium">
                        {a.name}, {a.role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
