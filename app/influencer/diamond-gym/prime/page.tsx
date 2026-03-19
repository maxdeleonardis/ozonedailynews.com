import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/influencer/diamond-gym/prime';

export const metadata: Metadata = {
  title: 'PRIME x Diamond Gym: Logan Paul\'s Brand Becomes Official Hydration Sponsor of "The World\'s Most Dangerous Gym" | ObjectWire',
  description:
    'Logan Paul\'s PRIME Hydration has officially partnered with Diamond Gym in Maplewood, NJ — "The World\'s Most Dangerous Gym." The deal includes a Special Edition TTD Prime bottle and Prime Protein Shakes, marking a major strategic shift for the brand.',
  keywords: [
    'PRIME Diamond Gym',
    'Logan Paul PRIME partnership',
    'Diamond Gym PRIME sponsorship',
    'TTD Athletics PRIME',
    'Prime Hydration Diamond Gym',
    'Till The Death PRIME',
    'Haddy Abdelhady PRIME',
    'PRIME protein shakes',
    'Logan Paul PRIME bodybuilding',
    'Diamond Gym Maplewood NJ',
    'PRIME hydration 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/diamond-gym/prime',
  },
  openGraph: {
    title: 'PRIME x Diamond Gym: Logan Paul\'s Brand Becomes Official Hydration Sponsor of "The World\'s Most Dangerous Gym"',
    description:
      'Logan Paul\'s PRIME Hydration partners with Diamond Gym — a historic deal that includes a Special Edition TTD bottle and Prime Protein, repositioning PRIME as a serious athlete brand.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/diamond-gym/prime',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T10:00:00Z',
    section: 'Influencer',
    tags: ['PRIME', 'Diamond Gym', 'Logan Paul', 'TTD Athletics', 'Bodybuilding', 'Fitness', 'Sponsorship'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRIME x Diamond Gym — Logan Paul\'s Brand Partners with "The World\'s Most Dangerous Gym"',
    description:
      'Special Edition TTD Prime bottle, Prime Protein Shakes, and a major brand repositioning. Full breakdown on ObjectWire.',
  },
};

export default function PrimeDiamondGymPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="PRIME x Diamond Gym: Logan Paul's Brand Becomes Official Hydration Sponsor of The World's Most Dangerous Gym"
        description="Logan Paul's PRIME Hydration has officially partnered with Diamond Gym in Maplewood, NJ. The deal includes a Special Edition TTD Prime bottle and Prime Protein Shakes."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T10:00:00Z"
        modifiedTime="2026-02-20T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Influencer"
        keywords={['PRIME', 'Diamond Gym', 'Logan Paul', 'TTD Athletics', 'PRIME Hydration', 'bodybuilding sponsorship']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Influencer', item: '/influencer' },
                { name: 'Diamond Gym', item: '/influencer/diamond-gym' },
                { name: 'PRIME Partnership', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Article */}
        <div className="max-w-3xl mx-auto px-4 py-12">

          {/* Category + Date */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
              Influencer
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Fitness
            </span>
            <span className="text-xs text-gray-400 ml-1">February 20, 2026</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            PRIME x Diamond Gym: Logan Paul&apos;s Brand Becomes the Official Hydration Sponsor of &ldquo;The World&apos;s Most Dangerous Gym&rdquo;
          </h1>

          {/* Deck */}
          <p className="text-xl text-gray-600 leading-relaxed mb-6 border-l-4 border-purple-500 pl-4">
            The partnership pairs one of the internet&apos;s biggest beverage brands with one of the most
            culturally respected gyms in bodybuilding — and launches a Special Edition TTD Prime bottle
            that puts &ldquo;Till The Death&rdquo; branding on the shelves.
          </p>

          {/* Byline */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
            <span>By <span className="font-semibold text-gray-700">ObjectWire Editorial</span></span>
            <span>·</span>
            <span>Feb 20, 2026</span>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-md">
            <Image
              src="/influncer/prime.PNG"
              alt="PRIME x Diamond Gym Partnership"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Body */}
          <div className="prose prose-lg max-w-none">

            <p>
              <Link href="/youtube/logan-paul" className="font-bold text-gray-900 no-underline hover:underline hover:text-purple-700">
                Logan Paul
              </Link>
              &apos;s beverage brand <strong>PRIME</strong> has announced a landmark sponsorship deal with{' '}
              <Link href="/influencer/diamond-gym" className="font-bold text-gray-900 no-underline hover:underline hover:text-purple-700">
                Diamond Gym
              </Link>{' '}
              in Maplewood, New Jersey — widely known in hardcore bodybuilding circles as{' '}
              <em>&ldquo;The World&apos;s Most Dangerous Gym.&rdquo;</em> The deal makes PRIME the official
              hydration partner of both Diamond Gym and <strong>TTD Athletics</strong> (Till The Death),
              the brand built around the gym&apos;s iron-fisted training culture, led by figures
              <strong> Haddy Abdelhady</strong> and the viral personality known simply as <strong>&ldquo;UNC.&rdquo;</strong>
            </p>

            <p>
              The partnership is immediately significant for one reason anyone familiar with Diamond Gym
              will appreciate: the gym is notorious for its <strong>&ldquo;no drinking water while training&rdquo;</strong>{' '}
              rule — a badge of its brutal, old-school culture. The deal upends that tradition in the most
              on-brand way possible. As the new partnership puts it:{' '}
              <em>habibi doesn&apos;t drink water in the gym — he drinks PRIME.</em>
            </p>

            <h2>The Deal: What&apos;s Included</h2>

            <p>
              The centerpiece of the collaboration is a <strong>Special Edition TTD Prime Hydration Drink</strong>.
              The bottle retains the standard PRIME form factor but features the &ldquo;TTD&rdquo; branding and the
              <em> Till The Death</em> slogan — a direct representation of Diamond Gym&apos;s philosophy of
              uncompromising commitment to the training process. It is a collector&apos;s item for gym culture
              enthusiasts and a statement product for PRIME as it pivots toward a more hardcore athletic identity.
            </p>

            <p>
              Beyond the signature hydration bottle, the partnership also includes <strong>Prime Protein Shakes</strong>,
              extending PRIME&apos;s presence beyond its flagship electrolyte drink and into the broader
              performance nutrition space. The inclusion of a protein product signals that this is not
              simply a marketing collaboration — it is an attempt to position PRIME as a complete training
              fuel brand for serious lifters, not just a sideline sports drink.
            </p>

            <h2>Why This Partnership Matters for PRIME</h2>

            <p>
              Since its founding in 2022 by <Link href="/youtube/logan-paul">Logan Paul</Link> and KSI,
              PRIME has generated remarkable commercial success — reportedly surpassing <strong>$1.2 billion
              in revenue</strong> within its first two years. However, the brand has faced persistent
              criticism in the fitness community: it has often been labeled a <em>&ldquo;hype brand,&rdquo;</em>
              driven by influencer clout rather than genuine athletic performance credentials.
            </p>

            <p>
              The Diamond Gym deal is a calculated answer to that critique. Diamond Gym does not do
              commercial partnerships for optics. Associating with <em>The World&apos;s Most Dangerous Gym</em>
              — a place where{' '}
              <Link href="/influencer/tren-twins" className="font-semibold hover:underline">
                the Tren Twins
              </Link>{' '}
              and some of the most serious physique athletes in the country train — lends PRIME a layer of
              functional legitimacy that no mainstream sponsorship can manufacture. For Logan Paul,
              it is a statement: PRIME is not just for the bleachers. It belongs on the gym floor.
            </p>

            <h2>A Cultural Shift in Gym Sponsorship</h2>

            <p>
              The PRIME x Diamond Gym partnership reflects a broader trend in sports marketing — where
              niche, culture-rich communities carry disproportionate influence over consumer behavior.
              Diamond Gym&apos;s hardcore reputation gives PRIME credibility with the demographic that
              matters most to its long-term brand health: the serious lifter who is skeptical of anything
              that smells like hype.
            </p>

            <p>
              If it lands, the TTD x PRIME bottle could become one of the defining fitness collectibles
              of 2026 — a product that bridges internet culture and old-school gym mentality in a
              way that few collaborations ever manage.
            </p>

          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">More Coverage</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link href="/influencer/diamond-gym" className="block p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow group">
                <p className="font-bold text-gray-900 text-sm group-hover:text-purple-700">Diamond Gym</p>
                <p className="text-xs text-gray-500 mt-1">Full profile — Maplewood, NJ</p>
              </Link>
              <Link href="/youtube/logan-paul" className="block p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow group">
                <p className="font-bold text-gray-900 text-sm group-hover:text-indigo-700">Logan Paul</p>
                <p className="text-xs text-gray-500 mt-1">WWE · PRIME · Impaulsive</p>
              </Link>
              <Link href="/influencer/tren-twins" className="block p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow group">
                <p className="font-bold text-gray-900 text-sm group-hover:text-green-700">Tren Twins</p>
                <p className="text-xs text-gray-500 mt-1">Christian &amp; Michael Gaiera</p>
              </Link>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-8 text-xs text-gray-400 space-y-1">
            <p>Published: February 20, 2026 · Author: ObjectWire Editorial · Category: Influencer · Fitness</p>
          </div>

        </div>
      </div>
    </SEOWrapper>
  );
}
