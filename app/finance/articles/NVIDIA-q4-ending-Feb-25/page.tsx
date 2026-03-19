import type { Metadata } from "next";
import Link from "next/link";
import JackArticle, {
  JackSection,
  JackStats,
  JackCaseOverview,
  JackIndicatorGrid,
  JackQuote,
} from "@/components/JackArticle";

export const metadata: Metadata = {
  title: "NVIDIA Reports Record $68.1 Billion Revenue in Fiscal Q4 2026 | ObjectWire",
  description:
    "NVIDIA posted record Q4 FY2026 revenue of $68.1 billion, up 73% year-over-year, driven by $62.3 billion in Data Center sales. Full-year revenue hit $215.9 billion.",
  openGraph: {
    title: "NVIDIA Reports Record $68.1 Billion Revenue in Fiscal Q4 2026",
    description:
      "Data Center revenue hit $62.3 billion. Non-GAAP EPS of $1.62 beat analyst estimates. Q1 FY2027 guidance set at $78.0 billion.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/NVIDIA-q4-ending-Feb-25",
    publishedTime: "2026-02-25T22:00:00Z",
    section: "Finance",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: "https://www.objectwire.org/finance/articles/NVIDIA-q4-ending-Feb-25",
  },
};

export default function NvidiaQ4FY2026Page() {
  return (
    <JackArticle
      layout="report"
      categoryLabel="Financial Intelligence: Earnings Report"
      publishDate="February 25, 2026"
      publishDateISO="2026-02-25T22:00:00Z"
      title='NVIDIA Reports Record $68.1 Billion Revenue in Fiscal Q4 2026'
      subject="Subject: Q4 FY2026 Earnings — Data Center Dominance, Record EPS, and Q1 FY2027 Guidance"
      author={{ name: "ObjectWire Financial Desk" }}
      articleUrl="https://www.objectwire.org/finance/articles/NVIDIA-q4-ending-Feb-25"
      description="NVIDIA posted record Q4 FY2026 revenue of $68.1 billion, up 73% year-over-year, driven by $62.3 billion in Data Center sales."
      section="Finance"
      keywords={["NVIDIA", "NVDA", "Q4 2026", "earnings", "Data Center", "Blackwell", "AI infrastructure"]}
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/finance", label: "Finance" },
        { href: "/nvidia", label: "NVIDIA" },
      ]}
      footerLinks={[
        { href: "/finance", label: "Research Archive" },
        { href: "/nvidia", label: "NVIDIA Coverage" },
        { href: "/contact", label: "Inquiries" },
      ]}
      accentColor="green"
      readTime="3 min read"
    >
      <p className="text-xl font-semibold leading-relaxed mb-6">
        <Link href="/nvidia" className="underline underline-offset-2 hover:text-green-700">
          NVIDIA Corporation
        </Link>{" "}
        reported record quarterly revenue of{" "}
        <strong>$68.1 billion</strong> for Q4 fiscal 2026, ended January 25, 2026 — a 73% jump
        year-over-year and a 20% sequential climb from Q3. Results were announced after market
        close on February 25, 2026, with shares rising in after-hours trading.
      </p>

      <JackStats
        title="Q4 FY2026 Headline Numbers"
        accentColor="green"
        stats={[
          { value: "$68.1B", label: "Q4 Revenue" },
          { value: "+73%", label: "Year-over-Year" },
          { value: "$1.62", label: "Non-GAAP EPS" },
          { value: "75.2%", label: "Non-GAAP Gross Margin" },
        ]}
      />

      <JackSection number={1} title="Data Center: The Core Engine" accentColor="green">
        <p className="mb-6 leading-relaxed">
          Data Center revenue accounted for <strong>$62.3 billion</strong> of total Q4 revenue,
          up 22% sequentially and 75% year-over-year. Compute revenue alone reached $51.3 billion
          (up 58% YoY), while networking revenue hit $11.0 billion — a 263% annual surge.
          Demand for <strong>Blackwell architecture</strong> AI infrastructure drove both
          subcategories to quarterly records.
        </p>
        <JackCaseOverview
          title="Segment Breakdown — Q4 FY2026"
          accentColor="green"
          items={[
            { label: "Data Center:", value: "$62.3 billion (+75% YoY)" },
            { label: "Gaming:", value: "$3.7 billion (below $4.0B consensus)" },
            { label: "Automotive:", value: "$604 million (+6% YoY)" },
            { label: "Compute Revenue:", value: "$51.3 billion (+58% YoY)" },
            { label: "Networking Revenue:", value: "$11.0 billion (+263% YoY)" },
          ]}
        />
      </JackSection>

      <JackSection number={2} title="Full Year FY2026 & Shareholder Returns" accentColor="green">
        <p className="mb-6 leading-relaxed">
          Full fiscal year 2026 revenue totaled <strong>$215.9 billion</strong>, up 65% from
          fiscal 2025. GAAP diluted EPS for the year was $4.90; non-GAAP was $4.77.{" "}
          <Link href="/nvidia" className="underline underline-offset-2 hover:text-green-700">
            NVIDIA
          </Link>{" "}
          returned <strong>$41.1 billion</strong> to shareholders through buybacks and dividends
          and closed the year with $58.5 billion in cash and equivalents.
        </p>
        <JackQuote
          quote="When quarterly revenue climbs from $57 billion to $68 billion in one period, the sequential math sometimes speaks louder than the annual percentage."
          author="ObjectWire Financial Desk"
          accentColor="green"
        />
      </JackSection>

      <JackSection number={3} title="Q1 FY2027 Guidance" accentColor="green">
        <p className="mb-6 leading-relaxed">
          NVIDIA guided Q1 FY2027 revenue at <strong>$78.0 billion ± 2%</strong>, implying
          continued sequential growth and sustained expansion in AI-driven infrastructure
          spending. Non-GAAP EPS of $1.62 beat analyst consensus estimates of $1.53–$1.54,
          while revenue exceeded forecasts by approximately 3.87%.
        </p>
      </JackSection>

      <JackIndicatorGrid
        title="Strategic Indicators — FY2026 Closing Snapshot"
        items={[
          { label: "Full-Year Revenue", description: "$215.9 billion — up 65% from FY2025." },
          { label: "Q1 FY2027 Guidance", description: "$78.0 billion ± 2%, signaling continued AI capex momentum." },
          { label: "Shareholder Returns", description: "$41.1 billion returned in FY2026 via buybacks and dividends." },
        ]}
      />
    </JackArticle>
  );
}
