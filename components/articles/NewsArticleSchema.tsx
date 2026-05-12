// NewsArticle Schema Component for Google News, Perplexity, and MSN
// Add this to your article pages for proper indexing
// IMPORTANT: All URLs must use https://www.objectwire.org (canonical www domain)
//
// Google Top Stories image requirement: minimum 1200x675 (16:9 ratio).
// 1200x630 fails the Top Stories eligibility check.

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
      "url": authorUrl || `https://www.objectwire.org/authors/${author.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "ObjectWire",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.objectwire.org/objectwire-logo.png",
        "width": 600,
        "height": 60
      },
      "url": "https://www.objectwire.org",
      "sameAs": [
        "https://twitter.com/object_wire",
        "https://www.facebook.com/objectwire",
        "https://www.tiktok.com/@object_wire"
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
    "copyrightHolder": { "@type": "Organization", "name": "ObjectWire", "url": "https://www.objectwire.org" },
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
    "additionalType": "https://schema.org/NGO",
    "name": "ObjectWire News",
    "alternateName": "ObjectWire News Network",
    "url": "https://www.objectwire.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.objectwire.org/objectwire-logo.png",
      "width": 600,
      "height": 60
    },
    "description": "ObjectWire is an independent, self-funded nonprofit newsroom delivering verified, source-cited reporting on business, technology, and policy.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "ObjectWire News Editorial Team"
      }
    ],
    "sameAs": [
      "https://twitter.com/object_wire",
      "https://www.facebook.com/objectwire",
      "https://www.tiktok.com/@object_wire"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "editorial",
      "email": "editorial@objectwire.org"
    },
    "ethicsPolicy": "https://www.objectwire.org/editorial-standards",
    "correctionsPolicy": "https://www.objectwire.org/corrections",
    "verificationFactCheckingPolicy": "https://www.objectwire.org/editorial-standards",
    "diversityPolicy": "https://www.objectwire.org/editorial-standards",
    "masthead": "https://www.objectwire.org/team",
    "ownershipFundingInfo": "https://www.objectwire.org/about",
    "funder": {
      "@type": "Organization",
      "name": "ObjectWire (self-funded)",
      "description": "Self-funded by the ObjectWire editorial team. No advertising, sponsored content, or political donations accepted."
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
    "name": "ObjectWire",
    "url": "https://www.objectwire.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.objectwire.org/search?q={search_term_string}"
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
