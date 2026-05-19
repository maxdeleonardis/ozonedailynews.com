// NewsArticle Schema Component for Google News, Perplexity, and MSN
// Add this to your article pages for proper indexing
// IMPORTANT: All URLs must use https://www.ozonenetwork.news (canonical www domain)
//
// Google Top Stories image requirement: minimum 1200x675 (16:9 ratio).
// 1200x630 fails the Top Stories eligibility check.

/**
 * Author → external profile sameAs lookup map.
 *
 * When `authorSameAs` is NOT passed to NewsArticleSchema, the component
 * falls back to this map keyed by `author` display name. This means all
 * existing article pages get correct Person sameAs in schema automatically.
 *
 * Rules (post-March-2026 Core Update):
 *  - Only list verified, live external profiles (Twitter, LinkedIn, Facebook).
 *  - Entries with no real external footprint get an empty array.
 *  - An empty array means the sameAs key is omitted from the Person object.
 *  - Update this map when a real external profile is created for any author.
 */
const AUTHOR_SAME_AS: Record<string, string[]> = {
  // Max DeLeonardis — 70% founding member. Real verified profiles:
  'Max DeLeonardis': [
    'https://x.com/ozonedailynews',
    'https://www.linkedin.com/in/maximillion-deleonardis',
    'https://www.facebook.com/don.deleonardis/',
  ],
  // Jack Sterling — 30% founding member. Profiles pending account creation.
  // TODO: add https://x.com/[handle] and https://www.linkedin.com/in/[slug] once created.
  'Jack Sterling': [],
  // Tina Boyle — Investigations Reporter. Public Facebook profile:
  'Tina Boyle': [
    'https://www.facebook.com/tina.b.deleonardis',
  ],
  // Alfasa Chillingsworth — Finance & Markets / Anime & Gaming. Profiles pending.
  // TODO: add social profiles once created.
  'Alfasa Chillingsworth': [],
  // Legacy byline still referenced in some article JSON files:
  'Alfansa': [],
  // Jack Brennan — Creator & Influencer Reporter. Profiles pending.
  // TODO: add social profiles once created.
  'Jack Brennan': [],
};

export interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
  /**
   * Author's external profile URLs (Twitter, LinkedIn, Medium, prior outlet bylines).
   * Required by the post-March-2026 Core Update author footprint rule.
   * If an author has no external sameAs entries, use the "OzoneNews Editorial Team" house byline instead.
   */
  authorSameAs?: string[];
  publishedTime: string;
  modifiedTime?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  articleUrl: string;
  section?: string;
  keywords?: string[];
  wordCount?: number;
}

export function NewsArticleSchema({
  title,
  description,
  author,
  authorUrl,
  authorSameAs,
  publishedTime,
  modifiedTime,
  imageUrl,
  imageWidth = 1200,
  imageHeight = 675,
  articleUrl,
  section = "Technology",
  keywords = [],
  wordCount,
}: ArticleSchemaProps) {
  // Resolve sameAs: prefer explicitly-passed prop, fall back to the lookup
  // map so all existing articles get correct Person sameAs without page edits.
  const resolvedSameAs = (authorSameAs && authorSameAs.length > 0)
    ? authorSameAs
    : (AUTHOR_SAME_AS[author] ?? []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "image": imageUrl
      ? [{
          "@type": "ImageObject",
          "url": imageUrl,
          // Google Top Stories requires minimum 1200x675 (16:9).
          // Never use 1200x630 — it fails the eligibility check silently.
          "width": imageWidth,
          "height": imageHeight,
        }]
      : undefined,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    ...(wordCount ? { "wordCount": wordCount } : {}),
    "author": {
      "@type": "Person",
      "name": author,
      "url": authorUrl || `https://www.ozonenetwork.news/authors/${author.toLowerCase().replace(/\s+/g, '-')}`,
      ...(resolvedSameAs.length > 0 ? { "sameAs": resolvedSameAs } : {}),
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "OzoneNews",
      "legalName": "Ozone Network News LLC",
      "logo": {
        "@type": "ImageObject",
        // objectwire-logo.png is the current live logo in /public.
        // Replace with /ozonenetwork-logo.png once the OzoneNews brand asset is ready.
        "url": "https://www.ozonenetwork.news/objectwire-logo.png",
        "width": 600,
        "height": 60
      },
      "url": "https://www.ozonenetwork.news",
      "sameAs": [
        "https://x.com/ozonedailynews",
        "https://www.linkedin.com/company/ozonenetworknews"
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": section,
    "keywords": keywords.join(", "),
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "copyrightYear": new Date(publishedTime).getFullYear(),
    "copyrightHolder": { "@type": "Organization", "name": "Ozone Network News LLC", "url": "https://www.ozonenetwork.news" },
    // speakable — voice assistants (Google Assistant, Siri) and AI systems read these selectors.
    // Using specific selectors targets the actual answer content, not nav/footer noise.
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        ".direct-answer",
        ".key-takeaways",
        "article p:first-of-type",
        ".article-body p:first-of-type"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// NewsMediaOrganization schema for the main site
// Post-March-2026 Core Update: this is the entity footprint Google and Bing use to
// verify OzoneNews is a real newsroom, not a blog. Every policy URL must resolve
// to a real, populated trust page, missing pages cause schema validation failures.
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "OzoneNews",
    "legalName": "Ozone Network News LLC",
    "alternateName": ["The Ozone Network", "Ozone Network News", "ONN"],
    "url": "https://www.ozonenetwork.news",
    "logo": {
      "@type": "ImageObject",
      // objectwire-logo.png is the current live logo in /public.
      // Replace with /ozonenetwork-logo.png once the OzoneNews brand asset is ready.
      "url": "https://www.ozonenetwork.news/objectwire-logo.png",
      "width": 600,
      "height": 60
    },
    "description": "OzoneNews is an independent newsroom delivering verified, source-cited reporting on technology, finance, gaming, and digital culture. We do not accept advertising, sponsored content, or political donations.",
    "foundingDate": "2026",
    "founders": [
      {
        "@type": "Person",
        "name": "OzoneNews Editorial Team"
      }
    ],
    "sameAs": [
      "https://x.com/ozonedailynews",
      "https://www.linkedin.com/company/ozonenetworknews"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "editorial",
        "email": "editorial@ozonenetwork.news"
      },
      {
        "@type": "ContactPoint",
        "contactType": "corrections",
        "email": "corrections@ozonenetwork.news"
      },
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "contact@ozonenetwork.news"
      }
    ],
    "publishingPrinciples": "https://www.ozonenetwork.news/editorial-standards",
    "ethicsPolicy": "https://www.ozonenetwork.news/editorial-standards",
    "correctionsPolicy": "https://www.ozonenetwork.news/corrections",
    "actionableFeedbackPolicy": "https://www.ozonenetwork.news/contact",
    "verificationFactCheckingPolicy": "https://www.ozonenetwork.news/editorial-standards",
    "diversityPolicy": "https://www.ozonenetwork.news/editorial-standards",
    "unnamedSourcesPolicy": "https://www.ozonenetwork.news/editorial-standards",
    "masthead": "https://www.ozonenetwork.news/authors",
    "ownershipFundingInfo": "https://www.ozonenetwork.news/about",
    "funder": {
      "@type": "Organization",
      "name": "Ozone Network News LLC (self-funded)",
      "description": "Self-funded by the founders of Ozone Network News LLC. No advertising, sponsored content, or political donations accepted."
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema with SearchAction for Google
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OzoneNews",
    "url": "https://www.ozonenetwork.news",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.ozonenetwork.news/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
