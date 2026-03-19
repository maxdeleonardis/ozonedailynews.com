import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline, TagsSection } from '@/components/NewsArticle';

const SLUG = '/apple/news/apple-video-podcasts-youtube';

export const metadata: Metadata = {
  title: 'Apple Launches Full Video Podcasts to Challenge YouTube Dominance | ObjectWire',
  description:
    'Apple is integrating a native video experience into Apple Podcasts this spring, blending audio and video in one seamless app. The move is a direct challenge to YouTube\'s grip on video podcasting and puts new pressure on Spotify.',
  keywords: [
    'Apple Podcasts video',
    'Apple video podcasts',
    'Apple vs YouTube',
    'Apple Podcasts spring 2026',
    'video podcast platform',
    'Apple Podcasts update',
    'YouTube competitor',
    'Spotify competitor',
    'podcast video streaming',
    'Apple streaming',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Apple Launches Full Video Podcasts to Challenge YouTube Industry Dominance',
    description:
      'Apple Podcasts is going full video this spring — a native watch-and-listen experience designed to pull creators and audiences away from YouTube and Spotify.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    publishedTime: '2026-02-18T10:00:00Z',
    modifiedTime: '2026-02-18T10:00:00Z',
    section: 'Technology',
    tags: ['Apple', 'Apple Podcasts', 'YouTube', 'Video Podcasts', 'Streaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Launches Full Video Podcasts — A Direct Shot at YouTube',
    description:
      'Apple Podcasts is getting a native video experience this spring. Here\'s what it means for YouTube, Spotify, and the future of podcasting.',
  },
};

const timelineEvents = [
  {
    time: 'Late 2025',
    title: 'Video Podcast Beta Begins',
    description: 'Apple quietly rolls out limited beta access to video podcasting within Apple Podcasts for select creators and devices.',
  },
  {
    time: 'Early 2026',
    title: 'Creator Outreach Expands',
    description: 'Apple begins actively recruiting top podcast creators and networks to publish video-enabled episodes natively in Apple Podcasts.',
  },
  {
    time: 'Spring 2026',
    title: 'Full Public Launch',
    description: 'Native video playback fully integrated into Apple Podcasts. Seamless switch between audio-only and full video for all users on iPhone, iPad, Mac, and Apple TV.',
  },
];

export default function AppleVideoPodcastsPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Apple Launches Full Video Podcasts to Challenge YouTube Industry Dominance"
        description="Apple is integrating a native video experience into Apple Podcasts this spring, blending audio and video seamlessly. The move is a direct challenge to YouTube's grip on video podcasting and Spotify."
        author="ObjectWire Technology Desk"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Technology"
        keywords={['Apple Podcasts', 'video podcasts', 'YouTube competitor', 'Apple streaming', 'Spotify']}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Apple', item: '/apple' },
              { name: 'News', item: '/apple/news' },
              { name: 'Apple Video Podcasts', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Apple Launches Full Video Podcasts to Challenge YouTube Industry Dominance"
        subtitle="Native video is coming to Apple Podcasts this spring — a seamless watch-or-listen experience that puts Apple on a direct collision course with YouTube and Spotify."
        category="Apple"
        categoryColor="blue"
        topicTag="technology"
        publishDate="February 18, 2026"
        readTime="5 min read"
        breaking={true}
        author={{
          name: 'ObjectWire Technology Desk',
          role: 'Tech Reporter',
        }}
        tags={['Apple', 'Apple Podcasts', 'Video Podcasts', 'YouTube', 'Spotify', 'Streaming', 'Podcasting', 'Spring 2026']}
      >

        {/* Lede */}
        <p>
          Apple is preparing to fundamentally reshape the podcasting landscape. The company is integrating a <strong>native video experience directly into the Apple Podcasts app</strong> this spring, already available in limited beta — positioning Apple as a serious competitor to <Link href="/youtube" className="text-blue-600 font-medium hover:underline">YouTube</Link>&apos;s dominance in video podcasting and adding pressure on Spotify in a market both companies have been fighting over for years.
        </p>
        <p>
          The move represents one of Apple&apos;s most aggressive strategic product pushes in the content space since launching Apple TV+. With over <strong>one billion active Apple devices worldwide</strong> and Apple Podcasts already pre-installed on every iPhone, iPad, and Mac, the distribution advantage Apple holds is enormous — and video is the next frontier it intends to conquer.
        </p>

        <HighlightBox type="key-point" color="blue">
          Apple Podcasts&apos; native video feature is currently in limited beta and targeting a <strong>spring 2026 public launch</strong>. Users will be able to seamlessly switch between audio-only and full video playback — without ever leaving the Podcasts app.
        </HighlightBox>

        {/* What Apple Is Building */}
        <h2>What Apple Is Actually Building</h2>
        <p>
          Unlike Spotify&apos;s video podcast feature — which requires creators to upload separately and renders inside what is still fundamentally a music app — Apple&apos;s approach is being built as a <strong>first-class, native experience</strong>. According to reports and early beta feedback, the new Apple Podcasts video feature includes:
        </p>
        <ul>
          <li><strong>Seamless audio/video switching</strong> — lock your screen and it becomes audio-only. Unlock, and the video resumes. No scrubbing, no reloading.</li>
          <li><strong>Full-screen video playback</strong> across iPhone, iPad, Mac, and Apple TV, with adaptive quality based on connection speed.</li>
          <li><strong>Chapter and timestamp navigation</strong> carried over from audio podcasts, now synced with video segments.</li>
          <li><strong>Background audio continuity</strong> — video pauses, audio keeps playing. The behavior podcast listeners expect, finally applied to video.</li>
          <li><strong>Integrated subscriptions</strong> — creators on Apple Podcasts Subscriptions can gate video content behind paid tiers, competing directly with YouTube&apos;s channel memberships.</li>
        </ul>

        <HighlightBox type="stat" color="blue">
          Apple Podcasts reaches over <strong>100+ million active listeners monthly</strong> across its installed base. It&apos;s one of the few apps guaranteed to be on every iPhone from day one — zero install friction for the video rollout.
        </HighlightBox>

        {/* YouTube Threat */}
        <h2>The YouTube Problem Apple Is Solving</h2>
        <p>
          <Link href="/youtube" className="text-blue-600 font-medium hover:underline">YouTube</Link> has quietly become the <strong>dominant platform for video podcast consumption</strong> over the past three years. The Joe Rogan Experience, Lex Fridman Podcast, All-In Podcast, and dozens of top-tier shows now generate as many or more views on YouTube as downloads on traditional platforms. For many listeners under 35, &quot;watching a podcast&quot; on YouTube <em>is</em> their podcast experience.
        </p>
        <p>
          The problem for Apple is structural: as creators shifted to video-first production, the engagement, the algorithmic discovery, and the advertising revenue all flowed to YouTube — not Apple Podcasts. Apple is now attempting to reverse that dynamic by making video a native, frictionless feature of an app that already has a billion-device headstart.
        </p>

        <blockquote>
          Apple Podcasts doesn&apos;t need to win on algorithm. It wins on default. Every iPhone ships with it installed, and every podcast listener already knows how to use it. Video is the missing piece.
        </blockquote>

        {/* Spotify Competition */}
        <h2>Spotify Is Also in the Crosshairs</h2>
        <p>
          Spotify has spent aggressively to own podcasting — acquiring Anchor, Gimlet, The Ringer, and exclusive deals with major creators — but its video podcast rollout has been inconsistent. Video shows on Spotify require separate uploads, remain locked to certain markets, and still feel like a secondary feature grafted onto a music app.
        </p>
        <p>
          Apple&apos;s native video integration — combined with <strong>Apple Podcasts Subscriptions</strong> (launched in 2021) and deep iOS integration for notifications and widgets — creates a more cohesive creator-to-listener pipeline than Spotify currently offers. For <Link href="/podcasts" className="text-blue-600 font-medium hover:underline">independent podcasters</Link> who distribute across multiple platforms, Apple&apos;s offer is increasingly competitive.
        </p>

        {/* Creator Angle */}
        <h2>What This Means for Creators</h2>
        <p>
          The video podcast race matters most to the creators who have to pick where to build their audience. Currently, the calculus looks like this:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="px-4 py-3 font-semibold">Platform</th>
                <th className="px-4 py-3 font-semibold">Video Podcasts</th>
                <th className="px-4 py-3 font-semibold">Discovery</th>
                <th className="px-4 py-3 font-semibold">Monetization</th>
                <th className="px-4 py-3 font-semibold">Distribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { platform: '🍎 Apple Podcasts', video: 'Native (Spring 2026)', discovery: 'Editorial + Search', monetization: 'Subscriptions, Ad Network', distribution: '1B+ devices pre-installed' },
                { platform: '▶️ YouTube', video: 'Full (Best-in-class)', discovery: 'Algorithmic (dominant)', monetization: 'AdSense, Memberships, Super Chat', distribution: '2B+ MAU' },
                { platform: '🟢 Spotify', video: 'Partial (select markets)', discovery: 'Algorithmic', monetization: 'SAI Ads, Paid Subscriptions', distribution: '600M+ MAU' },
              ].map((r) => (
                <tr key={r.platform} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900 text-xs">{r.platform}</td>
                  <td className="px-4 py-3 text-gray-700 text-xs">{r.video}</td>
                  <td className="px-4 py-3 text-gray-700 text-xs">{r.discovery}</td>
                  <td className="px-4 py-3 text-gray-700 text-xs">{r.monetization}</td>
                  <td className="px-4 py-3 text-gray-700 text-xs">{r.distribution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          For established <Link href="/podcasts" className="text-blue-600 font-medium hover:underline">podcast creators</Link> already publishing RSS feeds to Apple Podcasts, the video upgrade requires minimal additional work — just uploading a video track alongside the existing audio feed. That low-friction onboarding could accelerate adoption faster than Spotify&apos;s video rollout, which required separate manual uploads.
        </p>

        {/* Timeline */}
        <h2>Timeline: Apple Podcasts Video Rollout</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Analysis */}
        <h2>The Bigger Picture: Apple&apos;s Content Ambitions</h2>
        <p>
          Video podcasting isn&apos;t just a feature update — it&apos;s part of Apple&apos;s broader strategy to capture more of the attention economy it has long helped facilitate but not directly monetized. Apple TV+ showed the company could produce premium content. Apple Music showed it could compete in streaming. Apple Podcasts video is the next logical move: taking a platform with dominant pre-installed reach and adding the format that has the highest engagement.
        </p>
        <p>
          YouTube&apos;s response will be critical. The platform has the algorithmic discovery moat, the creator monetization infrastructure, and the cultural identity as &quot;where video podcasts live.&quot; But Apple has something YouTube cannot replicate overnight: <strong>the lock-in of the iPhone ecosystem</strong>, seamless cross-device continuity via Handoff and AirPlay, and the trust of audio-first podcast listeners who have never fully migrated to YouTube despite its video dominance.
        </p>

        <HighlightBox type="quote" color="blue">
          Apple doesn&apos;t need to beat YouTube at video. It just needs to be good enough that creators stop treating Apple Podcasts as a secondary distribution channel — and start treating it as their home base.
        </HighlightBox>

        {/* Related links */}
        <h2>Related Coverage</h2>
        <ul>
          <li><Link href="/youtube" className="text-blue-600 hover:underline font-medium">YouTube Hub — Full coverage of YouTube platform news →</Link></li>
          <li><Link href="/podcasts" className="text-blue-600 hover:underline font-medium">Podcasts — Creator profiles, show coverage &amp; industry news →</Link></li>
          <li><Link href="/apple" className="text-blue-600 hover:underline font-medium">Apple News Hub — All Apple coverage on ObjectWire →</Link></li>
          <li><Link href="/tech" className="text-blue-600 hover:underline font-medium">Tech News — Broader technology industry reporting →</Link></li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
