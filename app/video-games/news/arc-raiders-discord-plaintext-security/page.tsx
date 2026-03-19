import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/news/arc-raiders-discord-plaintext-security';
const AUTHOR_NAME = 'Alfansa';
const PUBLISH_ISO = '2026-03-06T22:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Arc Raiders Logged Discord DMs and Tokens in Plaintext — Embark Says Hotfix Coming | ObjectWire',
  description:
    'Security researcher Timothy Meadows disclosed that Arc Raiders logged private Discord DMs and authentication tokens to plaintext files when Discord integration was enabled. Embark Studios announced an emergency hotfix.',
  keywords: [
    'Arc Raiders security',
    'Arc Raiders Discord DMs',
    'Arc Raiders plaintext tokens',
    'Embark Studios Arc Raiders',
    'Arc Raiders hotfix',
    'Arc Raiders Discord integration',
    'gaming security vulnerability',
    'Discord authentication token leak',
    'Timothy Meadows Arc Raiders',
    'Arc Raiders privacy',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Arc Raiders Logged Discord DMs and Tokens in Plaintext',
    description:
      'Embark Studios\' extraction shooter was writing private Discord messages and auth tokens to unencrypted local files. Emergency hotfix announced.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arc Raiders Logged Discord DMs in Plaintext — Hotfix Incoming',
    description:
      'Private Discord messages and auth tokens stored unencrypted on player PCs. Embark Studios responds with emergency patch.',
  },
};

export default function ArcRaidersDiscordSecurityPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Arc Raiders Logged Discord DMs and Tokens in Plaintext — Embark Says Hotfix Coming"
        description="Security researcher Timothy Meadows disclosed that Arc Raiders logged private Discord DMs and authentication tokens to plaintext files when Discord integration was enabled."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/authors/alfansa"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Gaming"
        keywords={['Arc Raiders', 'Discord', 'security', 'plaintext', 'Embark Studios', 'hotfix']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'News', item: '/video-games/news' },
              { name: 'Arc Raiders Security', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title='Arc Raiders Logged Discord DMs and Tokens in Plaintext, Embark Says Hotfix Coming'
        subtitle="A security researcher discovered that Embark Studios' extraction shooter was writing private Discord messages and authentication tokens to unencrypted local files — putting player accounts at risk."
        category="GAMING"
        categoryColor="pink"
        topicTag="gaming"
        publishDate="March 6, 2026"
        readTime="3 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming & Entertainment',
        }}
        tags={['Arc Raiders', 'Embark Studios', 'Discord', 'Security', 'Privacy', 'Hotfix']}
        slug="arc-raiders-discord-plaintext-security"
        url={SLUG}
      >
        {/* ── THE DISCLOSURE ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Security researcher <strong>Timothy Meadows</strong> disclosed this week that <strong>Arc Raiders</strong>, the multiplayer extraction shooter from <strong>Embark Studios</strong>, was logging players&apos; private Discord direct messages and authentication tokens to <strong>plaintext files</strong> on their computers when Discord integration was enabled.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The discovery sent ripples through the game&apos;s community and prompted the developer to announce an emergency hotfix. The plaintext logs were stored locally in an easily accessible directory — meaning any application, malware, or person with access to the machine could read private conversations and, critically, Discord auth tokens that could be used to hijack accounts.
          </p>

          <HighlightBox type="stat" color="pink">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-pink-400">DMs</div>
                <div className="text-sm text-gray-300">Logged in Plaintext</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">Auth Tokens</div>
                <div className="text-sm text-gray-300">Stored Unencrypted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">Hotfix</div>
                <div className="text-sm text-gray-300">Emergency Patch Incoming</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── WHAT WAS EXPOSED ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Was Exposed
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            According to Meadows&apos; findings, the logging occurred whenever a player had Discord&apos;s Rich Presence or overlay integration active while running Arc Raiders. The game&apos;s integration layer captured data from Discord&apos;s API — including message content and session tokens — and wrote it to local log files without any encryption or obfuscation.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-700">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="text-left p-3 border-b border-gray-700">Data Type</th>
                  <th className="text-left p-3 border-b border-gray-700">Risk</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700 bg-gray-900">
                  <td className="p-3 font-semibold text-pink-400">Private DMs</td>
                  <td className="p-3">Personal conversations readable by any local process or user</td>
                </tr>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <td className="p-3 font-semibold text-orange-400">Auth Tokens</td>
                  <td className="p-3">Could be used to hijack Discord accounts without a password</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="p-3 font-semibold text-blue-400">Log File Location</td>
                  <td className="p-3">Stored in an easily accessible local directory — no admin rights needed to read</td>
                </tr>
              </tbody>
            </table>
          </div>

          <HighlightBox type="key-point" color="orange">
            <strong>Critical risk:</strong> Discord auth tokens stored in plaintext can be used to fully access a user&apos;s Discord account — read messages, join servers, and send messages as that user — without needing their password or 2FA code.
          </HighlightBox>
        </section>

        {/* ── EMBARK RESPONDS ──────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Embark&apos;s Response
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Embark Studios acknowledged the issue and announced an emergency hotfix is in development. The studio described the logging as &quot;unintentional debug behaviour&quot; that should have been stripped before the public build shipped. They advised players to <strong>disable Discord integration</strong> in Arc Raiders&apos; settings until the patch is live, and to <strong>delete any local log files</strong> in the game&apos;s installation directory.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Players who suspect their tokens may have been exposed were also advised to reset their Discord passwords and enable two-factor authentication if they have not already done so.
          </p>
        </section>

        {/* ── WHAT TO WATCH ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The incident highlights how deeply third-party integrations — even common ones like Discord Rich Presence — can create attack surfaces when implemented carelessly. Embark has not yet confirmed a timeline for the hotfix, but community pressure makes a rapid turnaround likely. Players should disable Discord integration and purge local logs immediately.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/video-games/news/epic-games-sues-fortnite-leaks-contractor" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-blue-600 uppercase">Legal</span>
              <h3 className="font-semibold text-gray-900 mt-1">Epic Games Sues Fortnite Leaks Contractor</h3>
              <p className="text-sm text-gray-600 mt-1">Former contractor allegedly ran leaks account &quot;for clout&quot; while inside the company.</p>
            </Link>
            <Link href="/video-games/news/rockstar-gta6-psn-profile-exploit" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">GTA 6</span>
              <h3 className="font-semibold text-gray-900 mt-1">Rockstar Pulls GTA 6 IDs from PS Store</h3>
              <p className="text-sm text-gray-600 mt-1">Title IDs removed after fans exploited a profile glitch to fake &quot;Recently Played.&quot;</p>
            </Link>
            <Link href="/video-games/news/slay-the-spire-2" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Indie</span>
              <h3 className="font-semibold text-gray-900 mt-1">Slay the Spire 2 — 430K Peak</h3>
              <p className="text-sm text-gray-600 mt-1">Mega Crit&apos;s sequel crashed Steam and set the roguelike record.</p>
            </Link>
          </div>
        </section>
      </NewsArticle>
    </SEOWrapper>
  );
}
