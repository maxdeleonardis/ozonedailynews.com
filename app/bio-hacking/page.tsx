import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import Hub from '@/components/Hub';
import fs from 'fs';
import path from 'path';

const SLUG = '/bio-hacking';

export const metadata: Metadata = {
  title: "Bio-Hacking Hub: Human Enhancement, Longevity & Performance Optimization | ObjectWire",
  description:
    "Complete coverage of the bio-hacking movement — from Bryan Johnson's Blueprint protocol to looksmaxxing, peptides, nootropics, and the extreme measures people take to optimize performance, appearance, and lifespan.",
  keywords: [
    'bio-hacking biohacking 2026',
    'Bryan Johnson Blueprint longevity protocol',
    'looksmaxxing cosmetic surgery enhancement',
    'Clavicular looksmaxxing founder',
    'human performance optimization biohacking',
    'longevity hacking anti-aging protocols',
    'peptides nootropics cognitive enhancement',
    'biohacking supplements longevity stack',
    'cosmetic surgery optimization trends',
    'Bryan Johnson reverse aging protocol',
    'human enhancement technology biohacking',
    'looksmaxxing surgery optimization 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Bio-Hacking Hub: Human Enhancement, Longevity & Performance Optimization",
    description:
      "From Bryan Johnson's $2M/year longevity protocol to the looksmaxxing movement pushing cosmetic surgery to extremes — comprehensive coverage of the bio-hacking revolution.",
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bio-Hacking Hub: From Bryan Johnson to Looksmaxxing",
    description:
      "The complete guide to human optimization — longevity protocols, performance enhancement, and the extreme cosmetic procedures reshaping modern self-improvement.",
  },
};

/**
 * Dynamically scan the /bio-hacking folder for article pages
 */
function getBioHackingArticles() {
  const bioHackingDir = path.join(process.cwd(), 'app', 'bio-hacking');
  
  try {
    if (!fs.existsSync(bioHackingDir)) {
      return [];
    }

    const entries = fs.readdirSync(bioHackingDir, { withFileTypes: true });
    const articles: Array<{ title: string; href: string; description: string; badge?: string }> = [];

    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('_')) {
        const pagePath = path.join(bioHackingDir, entry.name, 'page.tsx');
        
        if (fs.existsSync(pagePath)) {
          const content = fs.readFileSync(pagePath, 'utf-8');
          
          // Extract title from metadata
          const titleMatch = content.match(/title:\s*["']([^"']+?)(?:\s*\|[^"']+)?["']/);
          const descMatch = content.match(/description:\s*["']([^"']+)["']/);
          
          if (titleMatch) {
            articles.push({
              title: titleMatch[1],
              href: `${SLUG}/${entry.name}`,
              description: descMatch ? descMatch[1] : '',
              badge: content.includes('breaking={true}') ? 'Breaking' : undefined,
            });
          }
        }
      }
    }

    return articles;
  } catch (error) {
    console.error('Error scanning bio-hacking articles:', error);
    return [];
  }
}

export default function BioHackingHubPage() {
  const articles = getBioHackingArticles();

  return (
    <SEOWrapper slug={SLUG}>

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Bio-Hacking Hub', item: SLUG },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="BIO-HACKING HUB"
        badgeColor="from-green-600 to-emerald-600"
        title="Human Enhancement & Performance Optimization"
        subtitle="From Bryan Johnson's $2M/year reverse-aging protocol to the looksmaxxing movement pushing cosmetic surgery to extremes — comprehensive coverage of the bio-hacking revolution transforming human potential."
      >

        {/* Quick Overview */}
        <Hub.InfoGrid
          title="The Bio-Hacking Movement"
          icon="🧬"
          items={[
            { label: 'Pioneer', value: 'Bryan Johnson' },
            { label: 'Investment', value: '$2M+/year' },
            { label: 'Looksmaxxing Founder', value: 'Clavicular' },
            { label: 'Global Market', value: '$50B+ projected 2026' },
          ]}
          columns={4}
        />

        {/* Key Figures Section */}
        <Hub.Section title="Key Figures in Bio-Hacking" icon="👤" variant="card">
          <Hub.Prose>
            <p>
              <strong>Bryan Johnson</strong> — the 46-year-old tech entrepreneur spending over <strong>$2 million annually</strong> to reverse his biological age — is widely considered the father of modern bio-hacking. His <strong>Blueprint protocol</strong> involves 100+ daily supplements, cutting-edge gene therapy, plasma exchanges, and a team of 30+ doctors monitoring every biomarker. Johnson claims his organs now function at the biological age of an 18-year-old. Critics call it extreme. Followers call it the future.
            </p>
            <p>
              On the other end of the spectrum is <strong>Clavicular</strong> — the pseudonymous founder of the <strong>looksmaxxing movement</strong>, which focuses on extreme cosmetic optimization through surgery, orthodontics, skincare, and appearance-focused lifestyle changes. What started as an online subculture has exploded into a multi-billion dollar industry driving record demand for jaw surgery, hair transplants, and facial restructuring procedures. Clavicular&apos;s philosophy: genetic lottery doesn&apos;t have to be destiny — modern medicine can rewrite it.
            </p>
            <p>
              Together, these figures represent the two dominant currents in bio-hacking: <em>internal optimization</em> (longevity, cognition, performance) and <em>external optimization</em> (appearance, aesthetics, social advantage). Both are controversial. Both are accelerating.
            </p>
          </Hub.Prose>
        </Hub.Section>

        {/* What is Bio-Hacking */}
        <Hub.Section title="What Is Bio-Hacking?" icon="🔬">
          <Hub.Prose>
            <p>
              Bio-hacking is the practice of using science, technology, and self-experimentation to optimize human biology beyond natural baselines. It spans:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Longevity hacking:</strong> protocols to extend lifespan and reverse biological aging (peptides, NAD+ infusions, caloric restriction mimetics)</li>
              <li><strong>Cognitive enhancement:</strong> nootropics, neurofeedback, transcranial stimulation to boost focus, memory, and processing speed</li>
              <li><strong>Performance optimization:</strong> hormones, adaptogens, sleep tracking, genetic testing for athletic and mental peak performance</li>
              <li><strong>Looksmaxxing:</strong> surgical and non-surgical cosmetic procedures to maximize physical appearance and facial symmetry</li>
              <li><strong>Biometric tracking:</strong> continuous glucose monitors, sleep sensors, HRV tracking, and AI-driven health optimization</li>
            </ul>
            <p>
              The movement sits at the intersection of Silicon Valley transhumanism, self-improvement culture, and medical innovation. It is unregulated, highly experimental, and — depending on the practice — either the future of human enhancement or a dangerous pseudoscience rabbit hole.
            </p>
          </Hub.Prose>
        </Hub.Section>

        {/* Latest Coverage */}
        {articles.length > 0 && (
          <Hub.Section title="Latest Coverage" icon="📰" variant="highlight">
            <div className="space-y-4">
              {articles.map((article) => (
                <Hub.Card
                  key={article.href}
                  href={article.href}
                  title={article.title}
                  description={article.description}
                  badge={article.badge}
                  badgeStyle={article.badge === 'Breaking' ? 'breaking' : 'default'}
                  emoji="💉"
                />
              ))}
            </div>
          </Hub.Section>
        )}

        {/* Topic Areas */}
        <Hub.Section title="Explore by Topic" icon="🗂️">
          <Hub.LinkGrid
            columns={3}
            items={[
              { href: `${SLUG}#longevity`, emoji: '⏳', label: 'Longevity Protocols', sub: 'Bryan Johnson, reverse aging, peptides' },
              { href: `${SLUG}#looksmaxxing`, emoji: '✨', label: 'Looksmaxxing', sub: 'Clavicular, cosmetic surgery, optimization' },
              { href: `${SLUG}#nootropics`, emoji: '🧠', label: 'Cognitive Enhancement', sub: 'Nootropics, focus, brain optimization' },
              { href: `${SLUG}#performance`, emoji: '🏃', label: 'Performance Hacking', sub: 'Hormones, fitness, peak performance' },
              { href: `${SLUG}#biometrics`, emoji: '📊', label: 'Biometric Tracking', sub: 'Wearables, CGMs, data-driven health' },
              { href: `${SLUG}#controversial`, emoji: '⚠️', label: 'Controversial Practices', sub: 'Experimental procedures, ethics, risks' },
            ]}
          />
        </Hub.Section>

        {/* Controversies */}
        <Hub.Section title="The Dark Side: Ethics, Risk & Regulation" icon="⚖️" variant="card">
          <Hub.Prose>
            <p>
              Bio-hacking operates in a regulatory grey zone. Many of the peptides, compounds, and procedures used by practitioners are off-label, not FDA-approved for the claimed use, or available only through international suppliers. Bryan Johnson&apos;s protocol involves experimental gene therapy. Looksmaxxing procedures like <strong>bi-maxillary osteotomy</strong> (jaw advancement surgery) and <strong>limb lengthening</strong> are medically legitimate but increasingly pursued by patients in their teens and twenties for aesthetic reasons alone — raising questions about informed consent, psychological screening, and long-term health consequences.
            </p>
            <p>
              There is also the accessibility problem: bio-hacking at the level Johnson practices it costs millions. Cosmetic optimization surgery is increasingly normalized but available only to the affluent. Critics argue the movement is creating a <strong>biological class divide</strong> — a future where longevity, appearance, and cognitive performance are determined not by genetics or effort, but by who can afford the intervention.
            </p>
            <p>
              ObjectWire covers the science, the stories, and the ethical reckoning — because bio-hacking is not a fringe movement anymore. It is reshaping medicine, self-improvement culture, and what it means to be human.
            </p>
          </Hub.Prose>
        </Hub.Section>

        {/* Related Hubs */}
        <Hub.Section title="Related Coverage" icon="🔗">
          <Hub.LinkGrid
            columns={4}
            items={[
              { href: '/tech', emoji: '💻', label: 'Technology', sub: 'AI, wearables, health tech' },
              { href: '/news', emoji: '📰', label: 'News Hub', sub: 'Breaking stories' },
              { href: '/influencer', emoji: '👥', label: 'Influencers', sub: 'Personalities & creators' },
              { href: '/research', emoji: '🔬', label: 'Research', sub: 'Scientific studies' },
            ]}
          />
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}
