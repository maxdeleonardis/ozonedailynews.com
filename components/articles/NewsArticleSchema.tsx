// NewsArticle Schema Component for Google News, Perplexity, and MSN
// Add this to your article pages for proper indexing.
// IMPORTANT: All URLs must use https://www.ozonenetwork.news (canonical www domain).
//
// Google Top Stories image requirement: minimum 1200x675 (16:9 ratio).
// 1200x630 fails the Top Stories eligibility check.
//
// March 2026 Core Update compliance:
//  - NewsMediaOrganization publisher block carries publishingPrinciples,
//    correctionsPolicy, actionableFeedbackPolicy, and ethicsPolicy URLs.
//  - Article-level author is a Person object with a sameAs array (Twitter/LinkedIn)
//    sourced from `lib/author-profiles.ts`. Bylines with no external footprint must
//    use the "OzoneNews Editorial Team" house byline.

import { getAuthorSameAs, getAuthorUrl } from "@/lib/author-profiles";

const SITE_URL = "https://www.ozonenetwork.news";
const SITE_NAME = "OzoneNews";
const PUBLISHER_NAME = "Ozone Network News";
const LEGAL_NAME = "Ozone Network News LLC";
const LOGO_URL = `${SITE_URL}/ozonenews-logo.png`;
const PUBLISHER_SAME_AS = [
  "https://twitter.com/ozonenetwork",
  "https://www.linkedin.com/company/ozonenetwork",
];

const POLICY_URLS = {
  publishingPrinciples: `${SITE_URL}/editorial-standards`,
  ethicsPolicy: `${SITE_URL}/editorial-standards`,
  correctionsPolicy: `${SITE_URL}/corrections`,
  actionableFeedbackPolicy: `${SITE_URL}/corrections`,
  verificationFactCheckingPolicy: `${SITE_URL}/editorial-standards`,
  diversityPolicy: `${SITE_URL}/editorial-standards`,
  unnamedSourcesPolicy: `${SITE_URL}/editorial-standards`,
  masthead: `${SITE_URL}/authors`,
  ownershipFundingInfo: `${SITE_URL}/about`,
};

function publisherBlock() {
  return {
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}#publisher`,
    name: PUBLISHER_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 600,
      height: 60,
    },
    sameAs: PUBLISHER_SAME_AS,
    ...POLICY_URLS,
  };
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
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
      "url": authorUrl || getAuthorUrl(author, SITE_URL),
      "sameAs": getAuthorSameAs(author),
    },
    "publisher": publisherBlock(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": section,
    "keywords": keywords.join(", "),
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "copyrightYear": new Date(publishedTime).getFullYear(),
    "copyrightHolder": { "@type": "Organization", "name": PUBLISHER_NAME, "url": SITE_URL },
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

// Organization Schema for the main site
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}#publisher`,
    "additionalType": "https://schema.org/Organization",
    "name": PUBLISHER_NAME,
    "alternateName": [SITE_NAME, "Ozone Network", "OzoneNews News Network"],
    "legalName": LEGAL_NAME,
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
      "width": 600,
      "height": 60
    },
    "description": "OzoneNews is an independent newsroom delivering verified, source-cited reporting on technology, finance, politics, gaming, and global affairs.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "OzoneNews Editorial Team",
        "url": `${SITE_URL}/about`
      }
    ],
    "sameAs": PUBLISHER_SAME_AS,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "editorial",
        "email": "editorial@ozonenetwork.news",
        "url": `${SITE_URL}/contact`,
        "availableLanguage": ["en"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "corrections",
        "email": "corrections@ozonenetwork.news",
        "url": `${SITE_URL}/corrections`,
        "availableLanguage": ["en"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2921 E 17th St Bldg 3",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78702",
      "addressCountry": "US"
    },
    ...POLICY_URLS,
    "funder": {
      "@type": "Organization",
      "name": `${LEGAL_NAME} (self-funded)`,
      "description": "Self-funded by the OzoneNews editorial team. No advertising, sponsored content, or political donations accepted."
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
    "@id": `${SITE_URL}#website`,
    "name": SITE_NAME,
    "alternateName": PUBLISHER_NAME,
    "url": SITE_URL,
    "publisher": { "@id": `${SITE_URL}#publisher` },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
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

