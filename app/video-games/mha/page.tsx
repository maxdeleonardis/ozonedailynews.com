"use client";

import { useState } from "react";
import Link from "next/link";
import { Hub } from "@/components/Hub";

// ─── Google News JSON-LD (inline since page is "use client") ───────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "My Hero Academia Hub, Final Season, Vigilantes & Ultra Rumble",
  description:
    "Complete guide to the My Hero Academia universe: final season analysis, Vigilantes spin-off, and My Hero Ultra Rumble battle royale game coverage.",
  url: "https://www.objectwire.org/video-games/mha",
  datePublished: "2024-09-01T10:00:00Z",
  dateModified: "2026-02-24T10:00:00Z",
  author: {
    "@type": "Person",
    name: "Alfansa",
    url: "https://www.objectwire.org/authors/alfansa",
  },
  publisher: {
    "@type": "Organization",
    name: "ObjectWire",
    url: "https://www.objectwire.org",
    logo: {
      "@type": "ImageObject",
      url: "https://www.objectwire.org/logo.png",
    },
  },
  image: "https://www.objectwire.org/images/mha-hub-og.jpg",
  articleSection: "Video Games & Anime",
  keywords:
    "My Hero Academia, MHA, Ultra Rumble, MHA Vigilantes, final season, Deku, Bakugo",
};

// ─── Interactive character poll (client-side only) ─────────────────────────
function CharacterPoll() {
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({ deku: 28, bakugo: 35, todoroki: 22, allmight: 15 });
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { key: "deku", label: "Izuku Midoriya (Deku)", icon: "💚" },
    { key: "bakugo", label: "Katsuki Bakugo", icon: "💥" },
    { key: "todoroki", label: "Shoto Todoroki", icon: "🧊" },
    { key: "allmight", label: "All Might", icon: "💪" },
  ];

  const total = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-3">
      <p className="text-gray-600 text-sm mb-4">
        Who&apos;s your #1 hero from My Hero Academia?
      </p>
      {options.map(({ key, label, icon }) => {
        const pct = Math.round(
          (votes[key as keyof typeof votes] / total) * 100
        );
        return (
          <button
            key={key}
            onClick={() => {
              if (voted) return;
              setVotes((p) => ({
                ...p,
                [key]: p[key as keyof typeof p] + 1,
              }));
              setSelected(key);
              setVoted(true);
            }}
            disabled={voted}
            className={`w-full text-left p-3 rounded-lg border relative overflow-hidden transition-all ${
              selected === key
                ? "border-green-400 bg-green-100"
                : voted
                ? "border-gray-200 bg-gray-50"
                : "border-gray-200 bg-gray-50 hover:border-green-400 hover:bg-green-50"
            }`}
          >
            {voted && (
              <div
                className="absolute inset-0 bg-green-500/20 transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            )}
            <div className="relative flex justify-between items-center">
              <span className="flex items-center gap-2 text-gray-900">
                <span>{icon}</span>
                <span className="font-medium">{label}</span>
              </span>
              {voted && (
                <span className="text-green-300 font-bold">{pct}%</span>
              )}
            </div>
          </button>
        );
      })}
      {voted && (
        <p className="text-xs text-gray-400 text-center mt-2">
          {total} total votes
        </p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function MHAPage() {
  return (
    <>
      {/* Google News / schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Hub
        badge="ANIME & GAMING HUB"
        badgeColor="from-green-600 to-emerald-500"
        title="My Hero Academia"
        subtitle="Complete guide to the MHA universe, Final Season, Vigilantes spin-off, and Ultra Rumble battle royale."
        meta={
          <>
            <span className="flex items-center gap-2">
              ✍️{" "}
              <Link
                href="/authors/alfansa"
                className="hover:text-gray-900 underline underline-offset-2"
              >
                Alfansa
              </Link>
            </span>
            <span>🗓 Updated February 24, 2026</span>
            <span>📚 38 volumes published</span>
            <span>🎮 2.1M+ Ultra Rumble players</span>
          </>
        }
      >
        {/* ── Quick Stats ────────────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="MHA at a Glance"
          icon="📊"
          items={[
            { label: "Creator", value: "Kohei Horikoshi" },
            { label: "First Published", value: "July 7, 2014" },
            { label: "Total Volumes", value: "38 (completed)" },
            { label: "Anime Seasons", value: "7 seasons" },
            { label: "Films", value: "4 theatrical films" },
            { label: "Weekly Viewers", value: "25M (final season)" },
            { label: "MyAnimeList Rating", value: "9.2 / 10" },
            { label: "Satisfaction Rate", value: "97%" },
          ]}
          columns={4}
        />

        {/* ── Coverage index ─────────────────────────────────────────────── */}
        <Hub.Section title="Coverage Index" icon="🗂" variant="card">
          <div className="grid md:grid-cols-3 gap-4">
            <Hub.Card
              href="/video-games/mha/ultra-rumble"
              emoji="🎮"
              title="Ultra Rumble"
              description="Full game hub, season updates, character tier lists, and esports coverage."
              badge="Game Coverage"
            />
            <Hub.Card
              href="/video-games/mha/ultra-rumble/season-15"
              emoji="🔥"
              title="Season 15"
              description="Overhaul arrives, the Blighted Precipice map drops, and new mechanics shake the meta."
              badge="Latest Season"
              badgeStyle="breaking"
            />
            <Hub.Card
              href="/video-games/mha/alls-justice"
              emoji="💪"
              title="All's Justice"
              description="Full guide to the All's Justice mode, abilities, strategy, and unlockables."
            />
          </div>
        </Hub.Section>

        {/* ── Final Season ────────────────────────────────────────────────── */}
        <Hub.Section title="Final Season: Conclusion of a Legend" icon="🎬">
          <Hub.Prose>
            <p>
              The seventh and final season of{" "}
              <a
                href="https://myheroacademia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:underline"
              >
                My Hero Academia
              </a>{" "}
              concluded in spectacular fashion, delivering on years of buildup and character
              development. Creator{" "}
              <a
                href="https://en.wikipedia.org/wiki/Kohei_Horikoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:underline"
              >
                Kohei Horikoshi
              </a>
              &apos;s masterpiece reached its climactic conclusion with the Final War Arc.
            </p>
            <p>
              The final episodes delivered some of the most intense moments in anime history. The
              confrontation between Deku and Shigaraki/All For One reached unprecedented heights,
              with{" "}
              <a
                href="https://www.bones.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:underline"
              >
                Studio Bones
              </a>{" "}
              delivering animation quality that surpassed their own previous records. The series
              finale trended worldwide across social media, with fan events held in Japan, the US,
              and Europe.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.Table
              columns={[
                { key: "metric", label: "Final Season Metric", bold: true },
                { key: "value", label: "Result", align: "center" },
              ]}
              rows={[
                { metric: "MyAnimeList Rating", value: "9.2 / 10" },
                { metric: "Weekly Viewers (peak)", value: "25 million" },
                { metric: "Social Media Views", value: "4.8 billion" },
                { metric: "Audience Satisfaction", value: "97%" },
                { metric: "Countries Trending #1", value: "47" },
              ]}
            />
          </div>

          <blockquote className="mt-6 border-l-4 border-green-400 pl-6 italic text-gray-600">
            &ldquo;My Hero Academia&apos;s final season proves that when a series knows its
            destination, every step of the journey becomes more meaningful.&rdquo;
            <footer className="text-sm text-gray-400 mt-2 not-italic">
             , Anime News Network
            </footer>
          </blockquote>
        </Hub.Section>

        {/* ── Character Development ──────────────────────────────────────── */}
        <Hub.Section title="Character Development, Final Arcs" icon="🦸">
          <Hub.Table
            columns={[
              { key: "character", label: "Character", bold: true },
              { key: "arc", label: "Final Arc" },
              { key: "outcome", label: "Outcome" },
            ]}
            rows={[
              {
                character: "💚 Deku (Izuku Midoriya)",
                arc: "Inheritor of One For All",
                outcome: "Becomes the greatest hero",
              },
              {
                character: "💥 Bakugo (Katsuki Bakugo)",
                arc: "Rival → true companion",
                outcome: "Redemptive heroic sacrifice",
              },
              {
                character: "🧊 Todoroki (Shoto)",
                arc: "Family trauma & reconciliation",
                outcome: "Confronts Dabi / Touya Todoroki",
              },
              {
                character: "💪 All Might",
                arc: "Symbol of Peace → human mentor",
                outcome: "Final combat; passes the torch",
              },
              {
                character: "💀 Shigaraki / All For One",
                arc: "Successor corrupted by the past",
                outcome: "Defeated in the Final War Arc",
              },
            ]}
          />
        </Hub.Section>

        {/* ── Vigilantes ──────────────────────────────────────────────────── */}
        <Hub.Section title="My Hero Vigilantes, The Hidden Side" icon="🌃">
          <Hub.Prose>
            <p>
              <a
                href="https://vigilantes.fandom.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                My Hero Vigilantes
              </a>{" "}
              (Vigilante: Boku no Hero Academia Illegals) is a completed 15-volume spin-off written
              by Hideyuki Furuhashi, drawn by Betten Court, and supervised by Horikoshi himself.
              It serves as both prequel and companion, exploring the darker side of hero society
              through underground vigilante activity.
            </p>
            <p>
              The series provides backstories for All Might, Eraserhead, and Present Mic, and
              introduces Trigger, the Quirk-enhancing drug that appears in the main series. Critics
              have praised Vigilantes for its mature storytelling and worldbuilding depth, calling it
              essential reading for serious MHA fans.
            </p>
          </Hub.Prose>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Publication Details</h3>
              <Hub.Table
                columns={[
                  { key: "field", label: "Field", bold: true },
                  { key: "value", label: "Detail" },
                ]}
                rows={[
                  { field: "Volumes", value: "15 (completed)" },
                  { field: "Writer", value: "Hideyuki Furuhashi" },
                  { field: "Artist", value: "Betten Court" },
                  { field: "Supervisor", value: "Kohei Horikoshi" },
                  {
                    field: "Read online",
                    value: (
                      <a
                        href="https://shonenjumpplus.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:underline"
                      >
                        Shonen Jump+
                      </a>
                    ),
                  },
                ]}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Main Cast</h3>
              <Hub.Table
                columns={[
                  { key: "hero", label: "Hero Name", bold: true },
                  { key: "real", label: "Real Name" },
                ]}
                rows={[
                  { hero: "The Crawler", real: "Koichi Haimawari" },
                  { hero: "Pop☆Step", real: "Kazuho Haneyama" },
                  { hero: "Knuckleduster", real: "Iwao Oguro" },
                  { hero: "Captain Celebrity", real: "Christopher Skyline" },
                ]}
              />
            </div>
          </div>
        </Hub.Section>

        {/* ── Ultra Rumble ────────────────────────────────────────────────── */}
        <Hub.Section
          title="My Hero Ultra Rumble, Game Hub"
          icon="🎮"
          variant="highlight"
        >
          <Hub.Prose>
            <p>
              <a
                href="https://mhur.bn-ent.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                My Hero Ultra Rumble
              </a>{" "}
              has become one of the most successful free-to-play battle royale games of 2025–2026.
              Developed by{" "}
              <a
                href="https://www.bandainamcoent.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                Bandai Namco
              </a>{" "}
              and Byking, it features 24-player battles (8 teams of 3) across iconic MHA locations,
              with Quirk-based gameplay, civilian rescue objectives, and structured hero vs. villain
              victory conditions.
            </p>
          </Hub.Prose>

          <Hub.InfoGrid
            items={[
              { label: "Active Players", value: "2.1M" },
              { label: "Peak Concurrent", value: "450K" },
              { label: "Matches Played", value: "85M+" },
              { label: "User Rating", value: "4.2 / 5" },
            ]}
            columns={4}
          />

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Character Win Rates</h3>
            <Hub.Table
              columns={[
                { key: "char", label: "Character", bold: true },
                { key: "wr", label: "Win Rate", align: "center" },
                { key: "role", label: "Role" },
              ]}
              rows={[
                { char: "💀 Shigaraki", wr: "74%", role: "Villain, Area denial" },
                { char: "💪 All Might", wr: "73%", role: "Hero, Power striker" },
                { char: "💥 Bakugo", wr: "71%", role: "Hero, Aggressive DPS" },
                { char: "🧊 Todoroki", wr: "69%", role: "Hero, Zone control" },
                { char: "💚 Deku", wr: "68%", role: "Hero, Mobility & burst" },
                { char: "🌸 Uraraka", wr: "65%", role: "Hero, Support / disrupt" },
              ]}
            />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Platform Distribution</h3>
              <Hub.Table
                columns={[
                  { key: "platform", label: "Platform", bold: true },
                  { key: "share", label: "Player Share", align: "right" },
                ]}
                rows={[
                  { platform: "PlayStation 5", share: "42%" },
                  { platform: "PC (Steam)", share: "31%" },
                  { platform: "Xbox Series X/S", share: "18%" },
                  { platform: "Nintendo Switch", share: "9%" },
                ]}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2026 Roadmap</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>
                    <strong className="text-gray-900">Season 15</strong>, Overhaul +
                    Blighted Precipice map
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">→</span>
                  <span>
                    <strong className="text-gray-900">Movie Characters</strong>, MHA film
                    trilogy roster additions
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">→</span>
                  <span>
                    <strong className="text-gray-900">Ranked Mode</strong>, Competitive
                    ladder system
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-400">→</span>
                  <span>
                    <strong className="text-gray-900">Custom Matches</strong>, Private
                    tournament lobbies
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <blockquote className="mt-6 border-l-4 border-cyan-400 pl-6 italic text-gray-600">
            &ldquo;Ultra Rumble succeeds where many licensed games fail, it&apos;s a faithful
            translation of MHA&apos;s core themes into interactive entertainment, not just a battle
            royale dressed in anime skins.&rdquo;
            <footer className="text-sm text-gray-400 mt-2 not-italic">
             , IGN Review (9/10)
            </footer>
          </blockquote>
        </Hub.Section>

        {/* ── Deep Dive links ──────────────────────────────────────────────── */}
        <Hub.Section title="Deep Dive Coverage" icon="🔍" variant="card">
          <div className="grid md:grid-cols-2 gap-4">
            <Hub.Card
              href="/video-games/mha/ultra-rumble/season-15"
              emoji="🔥"
              title="Ultra Rumble Season 15, Full Breakdown"
              description="Overhaul joins the roster. Blighted Precipice map. Full meta analysis."
              badge="Latest"
              badgeStyle="breaking"
              meta="February 2026"
            />
            <Hub.Card
              href="/video-games/mha/ultra-rumble/season-15/strike-overhaul"
              emoji="⚡"
              title="Overhaul Quick Strike Build Guide"
              description="Optimised build for Overhaul's Blighted Precipice Quick Skill in Season 15."
              badge="Guide"
            />
            <Hub.Card
              href="/video-games/mha/ultra-rumble"
              emoji="🎮"
              title="Ultra Rumble Full Hub"
              description="All seasons, patch notes, character guides, and competitive coverage."
            />
            <Hub.Card
              href="/video-games/mha/alls-justice"
              emoji="💪"
              title="All's Justice Mode Guide"
              description="Ability breakdowns, strategy, and unlock requirements."
            />
          </div>
        </Hub.Section>

        {/* ── Fan Poll + External Links ──────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8">
          <Hub.Section title="Fan Poll, Favourite Character" icon="🗳">
            <CharacterPoll />
          </Hub.Section>

          <Hub.Section title="Official & External Links" icon="🔗">
            <Hub.LinkGrid
              columns={2}
              items={[
                {
                  href: "https://myheroacademia.com/",
                  emoji: "🌐",
                  label: "Official MHA Site",
                  sub: "myheroacademia.com",
                },
                {
                  href: "https://mhur.bn-ent.net/",
                  emoji: "🎮",
                  label: "Ultra Rumble",
                  sub: "Official game site",
                },
                {
                  href: "https://www.crunchyroll.com/my-hero-academia",
                  emoji: "📺",
                  label: "Watch on Crunchyroll",
                  sub: "Stream all seasons",
                },
                {
                  href: "https://shonenjumpplus.com/",
                  emoji: "📖",
                  label: "Read Vigilantes",
                  sub: "Shonen Jump+",
                },
              ]}
            />
          </Hub.Section>
        </div>

        {/* ── Author byline ───────────────────────────────────────────────── */}
        <div className="mt-4 border-t border-gray-200 pt-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
            A
          </div>
          <div>
            <Link
              href="/authors/alfansa"
              className="text-gray-900 font-semibold hover:text-green-600"
            >
              Alfansa
            </Link>
            <p className="text-gray-400 text-sm">
              Anime &amp; Gaming Editor at ObjectWire · Covering MHA, Ultra Rumble, and
              the broader anime gaming landscape.
            </p>
          </div>
        </div>
      </Hub>
    </>
  );
}
