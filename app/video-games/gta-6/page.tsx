import type { Metadata } from "next";
import Link from "next/link";
import {
  ObjectDesign,
  ObjSection,
  ObjHighlight,
  ObjQuote,
  ObjCallout,
  ObjTimeline,
  ObjStatGrid,
} from "@/components/ObjectDesign";
import { DataTable } from "@/components/ArticlePage";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Grand Theft Auto VI — Release Date, Price, & Everything We Know | ObjectWire",
  description:
    "Complete guide to Grand Theft Auto VI: confirmed November 19, 2026 release date, global pricing speculation including India ₹5,999–₹6,999 and US $89.99–$124.19 retailer leaks, platforms, protagonists Lucia & Jason, gameplay, and Rockstar's development timeline.",
  keywords: [
    "GTA 6",
    "Grand Theft Auto VI",
    "GTA 6 release date",
    "GTA 6 price",
    "GTA 6 India price",
    "GTA 6 UK price",
    "GTA 6 November 2026",
    "Rockstar Games GTA 6",
    "GTA 6 Vice City",
    "GTA 6 Lucia",
    "GTA 6 PC",
    "GTA 6 PS5",
    "GTA 6 Xbox Series X",
    "GTA 6 gameplay",
    "Take-Two Interactive",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/video-games/gta-6",
  },
  openGraph: {
    title: "Grand Theft Auto VI — Release Date, Price & Full Guide",
    description:
      "November 19, 2026 confirmed. Global price speculation reaches £89.99 in the UK and ₹6,999 in India. Everything known about GTA 6.",
    type: "article",
    url: "https://www.objectwire.org/video-games/gta-6",
    siteName: "ObjectWire",
    section: "Video Games",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA 6 — Release Date, Price & Full Guide | ObjectWire",
    description:
      "Confirmed: November 19, 2026. UK retailer posts £89.99 listing. India brace for ₹5,999–₹6,999. Complete GTA VI encyclopedia.",
  },
};

export default function GTA6Page() {
  return (
    <>
      <NewsArticleSchema
        title="Grand Theft Auto VI — Release Date, Price Controversy & Complete Guide"
        description="Complete guide to GTA 6: confirmed November 19, 2026 release, global pricing speculation, protagonists, Vice City setting, gameplay mechanics, and Rockstar's development timeline."
        publishedTime="2026-02-24T10:00:00Z"
        modifiedTime="2026-02-24T10:00:00Z"
        author="ObjectWire Gaming Desk"
        articleUrl="https://www.objectwire.org/video-games/gta-6"
        section="Video Games"
        keywords={["GTA 6", "Grand Theft Auto VI", "Rockstar Games", "GTA 6 price", "GTA 6 release date", "Vice City"]}
      />

      <ObjectDesign
        title="Grand Theft Auto VI"
        subtitle="Rockstar's most anticipated release heads to a modern Vice City — November 19, 2026."
        category="Video Games"
        categoryColor="orange"
        publishDate="February 24, 2026"
        lastUpdated="February 24, 2026"
        trending
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/video-games", label: "Video Games" },
          { href: "/video-games/gta-6", label: "GTA VI" },
        ]}
        infoBox={{
          title: "Grand Theft Auto VI",
          accentColor: "orange",
          items: [
            { label: "Developer", value: "Rockstar Games" },
            { label: "Publisher", value: "Take-Two Interactive" },
            { label: "Release Date", value: "November 19, 2026" },
            { label: "Platforms", value: "PS5 · Xbox Series X/S · PC (TBA)" },
            { label: "Series", value: "Grand Theft Auto" },
            { label: "Setting", value: "Leonida (Vice City), Florida" },
            { label: "Protagonists", value: "Lucia (primary) · Jason (secondary)" },
            { label: "Mode", value: "Single-player · GTA Online" },
            { label: "Engine", value: "RAGE (Rockstar Advanced Game Engine)" },
            { label: "US Price (speculated)", value: "$89.99 – $124.19" },
            { label: "UK Price (speculated)", value: "£60.99 – £89.99" },
            { label: "India Price (speculated)", value: "₹5,999 – ₹12,000+" },
            { label: "Age Rating", value: "ESRB M (Mature 17+) — expected" },
          ],
        }}
        tableOfContents={[
          { id: "overview", label: "Overview" },
          { id: "release", label: "Release Date & Platforms" },
          { id: "pricing", label: "Pricing Controversy" },
          { id: "global-pricing", label: "Global Price Breakdown", level: 2 },
          { id: "setting", label: "Setting — Leonida & Vice City" },
          { id: "protagonists", label: "Protagonists" },
          { id: "gameplay", label: "Gameplay" },
          { id: "development", label: "Development History" },
          { id: "trailer", label: "Trailers & Marketing" },
          { id: "reception", label: "Anticipation & Reception" },
          { id: "references", label: "References" },
        ]}
        tags={["GTA6", "RockstarGames", "VideoGames", "GrandTheftAuto", "ViceCity", "PS5", "Xbox", "Gaming2026"]}
        relatedLinks={[
          { href: "/video-games", label: "Video Games Hub", description: "ObjectWire's full video games coverage", category: "Hub" },
          { href: "/tech", label: "Tech Coverage", description: "Gaming hardware, GPUs, and tech news", category: "Technology" },
          { href: "/finance", label: "Finance", description: "Take-Two Interactive stock and gaming industry analysis", category: "Finance" },
          { href: "/entertainment", label: "Entertainment", description: "Film, TV, and pop culture coverage", category: "Entertainment" },
        ]}
        externalLinks={[
          { href: "https://www.rockstargames.com/VI", label: "Grand Theft Auto VI — Official Rockstar Games Site" },
          { href: "https://www.youtube.com/watch?v=QdBZExpgErs", label: "GTA VI Official Trailer 1 (YouTube)" },
          { href: "https://www.insider-gaming.com/", label: "Insider Gaming — Original pricing leak report" },
          { href: "https://beebom.com/", label: "Beebom — India pricing analysis" },
          { href: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_VI", label: "Grand Theft Auto VI — Wikipedia" },
        ]}
      >

        {/* ── KEY STATS ────────────────────────────── */}
        <ObjStatGrid
          accentColor="orange"
          columns={4}
          stats={[
            { value: "Nov 19", label: "Release Date", description: "2026 — PS5 & Xbox Series X/S" },
            { value: "$89.99+", label: "Speculated US Price", description: "Up to $124.19 per leaked listings" },
            { value: "200M+", label: "Trailer 1 Views", description: "Fastest gaming trailer in YouTube history" },
            { value: "~$2B", label: "Est. Budget", description: "Most expensive game ever produced" },
          ]}
        />

        {/* ── OVERVIEW ─────────────────────────────── */}
        <ObjSection id="overview" title="Overview" accentColor="orange">
          <p>
            <strong>Grand Theft Auto VI</strong> (stylised as <em>GTA VI</em>) is an upcoming
            open-world action-adventure game developed by{" "}
            <a href="https://www.rockstargames.com/" target="_blank" rel="noopener noreferrer">
              Rockstar Games
            </a>{" "}
            and published by{" "}
            <a href="https://www.take2games.com/" target="_blank" rel="noopener noreferrer">
              Take-Two Interactive
            </a>
            . Announced via a landmark first trailer in December 2023, the game is the eighth main
            entry and direct successor to the all-time best-selling{" "}
            <em>Grand Theft Auto V</em> (2013). It is scheduled for release on{" "}
            <strong>November 19, 2026</strong>, for PlayStation 5 and{" "}
            <Link href="/microsoft/xbox" className="text-blue-400 hover:underline">Xbox Series X/S</Link>.
          </p>
          <p>
            The game introduces <strong>Lucia</strong> as the franchise&apos;s first playable female
            protagonist in the mainline series, accompanied by a male co-protagonist named{" "}
            <strong>Jason</strong>. Set in a fictionalised version of Miami and surrounding Florida,
            the game world — called <em>Leonida</em> — is the largest environment Rockstar has
            ever constructed.
          </p>
          <p>
            As of February 2026, GTA VI is generating one of the largest pre-release conversations
            in gaming history. The primary topic is pricing: retailer leaks have placed the base
            edition between <strong>$89.99 and $124.19</strong> in the US,{" "}
            <strong>£60.99 and £89.99</strong> in the UK, and as high as{" "}
            <strong>₹12,000</strong> in India — none confirmed by Rockstar or Take-Two.
          </p>
          <ObjCallout type="warning" title="Pricing Not Yet Confirmed">
            All price figures cited in this article are sourced from unverified retailer listings
            and leaks. Rockstar Games and Take-Two Interactive have not announced official pricing
            as of February 24, 2026.
          </ObjCallout>
        </ObjSection>

        {/* ── RELEASE DATE & PLATFORMS ─────────────────────── */}
        <ObjSection id="release" title="Release Date & Platforms" accentColor="orange">
          <p>
            Rockstar confirmed <strong>November 19, 2026</strong> for PlayStation 5 and{" "}
            <Link href="/microsoft/xbox" className="text-blue-600 hover:underline">Xbox Series X/S</Link>{" "}
            in the second official trailer (May 2025). The date makes GTA VI a major holiday
            season title positioned to dominate the 2026 Q4 gaming market.
          </p>
          <p>
            A PC version has not been dated. Rockstar historically releases PC editions of GTA
            games 12–24 months after console launches; a PC release could arrive in late 2027 or
            early 2028.
          </p>
          <DataTable
            headers={["Platform", "Release Date", "Distribution", "Notes"]}
            rows={[
              ["PlayStation 5", "November 19, 2026", "PlayStation Store + Physical", "Native PS5 — no PS4 version"],
              ["Xbox Series X/S", "November 19, 2026", "Xbox / Microsoft Store + Physical", "Xbox One not supported"],
              ["PC (Windows)", "TBA (2027–2028 est.)", "Rockstar Games Launcher / Steam", "No date confirmed"],
            ]}
          />
          <ObjCallout type="note" title="Current-Gen Exclusive">
            GTA VI is a current-gen exclusive. PlayStation 4 and{" "}
            <Link href="/microsoft/xbox" className="text-blue-600 hover:underline">Xbox One</Link>{" "}
            versions have been ruled out entirely.
          </ObjCallout>
        </ObjSection>

        {/* ── PRICING CONTROVERSY ────────────────────────── */}
        <ObjSection id="pricing" title="Pricing Controversy" accentColor="orange">
          <p>
            A wave of unverified retailer listings has ignited a global conversation about whether
            the industry is on the cusp of a permanent step-up from the $70/£70 standard
            established in 2020.
          </p>
          <p>
            Digital storefront <strong>Loaded</strong> (formerly CDKeys) briefly listed the{" "}
            <Link href="/microsoft/xbox" className="text-blue-600 hover:underline">Xbox Series X/S</Link>{" "}
            version at <strong>£89.99</strong> in the UK and{" "}
            <strong>$124.19</strong> in the US, as reported by{" "}
            <a href="https://www.insider-gaming.com/" target="_blank" rel="noopener noreferrer">
              Insider Gaming
            </a>. A separate PC listing appeared at <strong>£60.99</strong>.{" "}
            <a href="https://beebom.com/" target="_blank" rel="noopener noreferrer">Beebom</a>{" "}
            reported the US listing initially showed $89.99 before being lowered.
          </p>
          <ObjQuote source="Insider Gaming" sourceRole="February 2026">
            Loaded (formerly CDKeys) briefly listed the{" "}
            <Link href="/microsoft/xbox" className="text-blue-600 hover:underline">Xbox Series X/S</Link>{" "}
            version of GTA 6 at £89.99 for the UK, with a US listing showing $124.19.
          </ObjQuote>
          <ObjHighlight type="key-point" color="orange">
            Take-Two CEO <strong>Strauss Zelnick</strong> has described GTA VI as “the most
            captivating entertainment experience ever created” and signalled pricing above $69.99 —
            though no official price has been announced.
          </ObjHighlight>
          <ObjCallout type="insight" title="Analyst Consensus">
            Most analysts project a US base price of <strong>$79.99</strong>, with premium editions
            reaching $99.99+. The $124.19 Loaded listing is considered an outlier likely reflecting
            a premium bundle rather than a standard edition.
          </ObjCallout>
        </ObjSection>

        {/* ── GLOBAL PRICING ──────────────────────────────── */}
        <ObjSection id="global-pricing" title="Global Price Speculation — By Region" level={3} accentColor="orange">
          <DataTable
            headers={["Region", "Currency", "Current Gen Standard", "Speculated Base", "Speculated Premium", "Source"]}
            rows={[
              ["United States", "USD", "$69.99", "$79.99 – $89.99", "$99.99 – $124.19", "Loaded / Insider Gaming"],
              ["United Kingdom", "GBP", "£69.99", "£60.99 (PC) – £79.99", "£89.99", "Loaded UK listing"],
              ["European Union", "EUR", "€69.99", "€79.99 – €89.99", "€99.99+", "Analyst estimates"],
              ["India", "INR", "₹3,999 – ₹4,999", "₹5,999 – ₹6,999", "₹12,000+", "Retailer speculation / Beebom"],
              ["Australia", "AUD", "A$109.99", "A$119.99 – A$129.99", "A$149.99+", "Analyst estimates"],
              ["Canada", "CAD", "C$89.99", "C$99.99 – C$109.99", "C$129.99+", "Analyst estimates"],
            ]}
          />
          <ObjQuote source="Beebom" sourceRole="February 2026">
            A wave of unverified pricing leaks has Indian gamers bracing for what could be the most
            expensive mainstream game launch in the country&apos;s history.
          </ObjQuote>
          <ObjHighlight type="stat" color="orange">
            Premium editions above ₹12,000 would make GTA VI the most expensive mainstream game
            launch in India if confirmed — the base ₹5,999–₹6,999 alone represents a 20–75%
            increase over current AAA standards.
          </ObjHighlight>
        </ObjSection>

        {/* ── SETTING ────────────────────────────────── */}
        <ObjSection id="setting" title="Setting — Leonida & Vice City" accentColor="orange">
          <p>
            GTA VI is set in <strong>Leonida</strong>, a fictional US state inspired by Florida,
            encompassing <strong>Vice City</strong> — a modern reimagining of the Miami-inspired
            city from{" "}
            <a href="https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City" target="_blank" rel="noopener noreferrer">
              Grand Theft Auto: Vice City
            </a>{" "}
            (2002) — alongside surrounding regions and coastal areas.
          </p>
          <ul>
            <li><strong>Vice City metro area</strong> — dense urban environment, neon-lit beachfront, luxury real estate</li>
            <li><strong>Port Leonida</strong> — industrial docklands and shipping facilities</li>
            <li><strong>Rural Leonida</strong> — Everglades-style swamplands, trailer parks, small towns</li>
            <li><strong>Keys-inspired islands</strong> — coastal archipelago accessible by boat and aircraft</li>
          </ul>
          <p>
            The setting is designed to explore contemporary American excess, social media culture,
            and economic inequality — themes signalled in the first trailer through viral video
            aesthetics and commentary on content creation.
          </p>
        </ObjSection>

        {/* ── PROTAGONISTS ─────────────────────────────── */}
        <ObjSection id="protagonists" title="Protagonists" accentColor="orange">
          <p>
            GTA VI marks a historic first: <strong>Lucia</strong> is the franchise&apos;s first
            female protagonist, appearing alongside male co-protagonist <strong>Jason</strong>
            in what the trailer frames as a Bonnie-and-Clyde dynamic.
          </p>
          <DataTable
            headers={["Character", "Role", "Status", "Details"]}
            rows={[
              ["Lucia", "Primary protagonist", "Confirmed", "First female protagonist in mainline GTA; Hispanic heritage implied"],
              ["Jason", "Secondary protagonist", "Confirmed", "Male co-lead; Bonnie-and-Clyde dynamic with Lucia"],
            ]}
          />
          <ObjHighlight type="key-point" color="orange">
            Lucia is the first woman to lead a mainline GTA game in the series’ 28-year history.
          </ObjHighlight>
        </ObjSection>

        {/* ── GAMEPLAY ────────────────────────────────── */}
        <ObjSection id="gameplay" title="Gameplay" accentColor="orange">
          <p>Based on official trailers and the 2022 development leaks, GTA VI is expected to feature:</p>
          <ul>
            <li><strong>Open world</strong> — Leonida state with dynamic weather, traffic, and NPC routines</li>
            <li><strong>Dual-protagonist switching</strong> — Seamless transitions between Lucia and Jason</li>
            <li><strong>Evolved combat</strong> — Refined shooting and cover mechanics building on Red Dead Redemption II</li>
            <li><strong>Heists and missions</strong> — Multi-stage criminal operations</li>
            <li><strong>Vehicle customisation</strong> — Cars, boats, and aircraft with expanded options</li>
            <li><strong>GTA Online successor</strong> — New multiplayer experience evolving the GTA V model</li>
          </ul>
          <ObjCallout type="note" title="2022 Gameplay Leak">
            90+ early gameplay videos were released by a hacker — considered credible by the gaming
            press. Rockstar acknowledged the breach but stated footage did not represent the final product.
          </ObjCallout>
        </ObjSection>

        {/* ── DEVELOPMENT HISTORY ─────────────────────────── */}
        <ObjSection id="development" title="Development History" accentColor="orange">
          <p>
            GTA VI entered full production around 2018–2019 following{" "}
            <em>Red Dead Redemption II</em>. Development spans approximately 8 years with an
            estimated budget exceeding <strong>$2 billion</strong> in development and marketing.
          </p>
          <ObjTimeline
            accentColor="orange"
            events={[
              { time: "2013", title: "GTA V Released", description: "Development seeds for the sequel begin immediately after launch." },
              { time: "2018–2019", title: "Full Production Begins", description: "GTA VI enters full production following completion of Red Dead Redemption II." },
              { time: "September 2022", title: "Massive Development Leak", description: "90+ early gameplay videos released by hacker — largest gaming leak in history. Rockstar confirms the breach." },
              { time: "December 5, 2023", title: "Official Trailer 1", description: "Confirms Vice City, Lucia protagonist, Florida world. Reaches 200M+ YouTube views." },
              { time: "May 2024", title: "Release Window Confirmed", description: "Take-Two confirms fiscal year 2025 release window during earnings call." },
              { time: "May 2025", title: "Trailer 2 — Date Locked", description: "November 19, 2026 confirmed for PS5 and Xbox Series X/S." },
              { time: "February 2026", title: "Retail Pricing Leaks", description: "Loaded / CDKeys lists £89.99 (UK) and $124.19 (US). Global markets react." },
              { time: "November 19, 2026", title: "Console Launch", description: "Confirmed release for PlayStation 5 and Xbox Series X/S." },
            ]}
          />
        </ObjSection>

        {/* ── TRAILERS ────────────────────────────────── */}
        <ObjSection id="trailer" title="Trailers & Marketing" accentColor="orange">
          <DataTable
            headers={["Trailer", "Release Date", "Views (YouTube)", "Key Reveals"]}
            rows={[
              ["Trailer 1", "December 5, 2023", "200M+ (fastest gaming trailer)", "Lucia protagonist, Vice City setting, social media themes"],
              ["Trailer 2", "May 2025", "TBA", "November 19, 2026 date, Jason confirmed, extended world showcase"],
            ]}
          />
          <ObjHighlight type="stat" color="orange">
            Trailer 1 set a YouTube record for fastest gaming video to 100M views, surpassing
            Cyberpunk 2077. It accumulated 90M+ views within the first 24 hours.
          </ObjHighlight>
        </ObjSection>

        {/* ── RECEPTION ───────────────────────────────── */}
        <ObjSection id="reception" title="Anticipation & Critical Reception" accentColor="orange">
          <p>
            GTA VI holds the top spot on Metacritic&apos;s “Most Anticipated” charts since Trailer 1.
            Pre-order interest across all major platforms is significant, with analysts predicting
            record-breaking day-one sales.
          </p>
          <p>
            However, the pricing controversy has tempered the excitement in price-sensitive markets
            including India, Brazil, and Southeast Asia, where consumers fear a price above
            $69.99/£69.99 would represent a serious accessibility barrier.
          </p>
          <ObjQuote source="Analyst Consensus" sourceRole="Q4 2025">
            GTA VI will be the defining commercial event of 2026 in entertainment. The pricing
            question is secondary to the certainty that it will break every sales record.
          </ObjQuote>
        </ObjSection>

        {/* ── REFERENCES ───────────────────────────────── */}
        <ObjSection id="references" title="References" accentColor="orange">
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Insider Gaming —{" "}
              <a href="https://www.insider-gaming.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Loaded / CDKeys lists GTA 6 at £89.99 and $124.19
              </a>, February 2026
            </li>
            <li>
              Beebom —{" "}
              <a href="https://beebom.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GTA 6 pricing speculation for India reaches ₹6,999
              </a>, February 2026
            </li>
            <li>Rockstar Games — Official GTA VI Trailer 1, December 5, 2023</li>
            <li>Rockstar Games — Official GTA VI Trailer 2, May 2025</li>
            <li>Take-Two Interactive — Earnings Call Q2 FY2026, Strauss Zelnick pricing comments</li>
          </ol>
        </ObjSection>

      </ObjectDesign>
    </>
  );
}
