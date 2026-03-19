// NewsArticle Schema Component for Google News, Perplexity, and MSN
// Add this to your article pages for proper indexing

export interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
  publishedTime: string;
  modifiedTime?: string;
  imageUrl?: string;
  articleUrl: string;
  section?: string;
  keywords?: string[];
}

export function NewsArticleSchema({
  title,
  description,
  author,
  authorUrl,
  publishedTime,
  modifiedTime,
  imageUrl,
  articleUrl,
  section = "Technology",
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "image": imageUrl
      ? [{ "@type": "ImageObject", "url": imageUrl, "width": 1200, "height": 630 }]
      : undefined,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Person",
      "name": author,
      "url": authorUrl || `https://objectwire.org/team/${author.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "ObjectWire",
      "logo": {
        "@type": "ImageObject",
        "url": "https://objectwire.org/logo.png",
        "width": 600,
        "height": 60
      },
      "url": "https://objectwire.org",
      "sameAs": [
        "https://twitter.com/objectwire",
        "https://www.facebook.com/objectwire",
        "https://www.linkedin.com/company/objectwire"
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
    "copyrightHolder": { "@type": "Organization", "name": "ObjectWire", "url": "https://objectwire.org" },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "article"]
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
    "name": "ObjectWire",
    "alternateName": "ObjectWire News Network",
    "url": "https://objectwire.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://objectwire.org/logo.png",
      "width": 600,
      "height": 60
    },
    "description": "ObjectWire delivers verified, source-cited intelligence on business, technology, and policy.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "ObjectWire Editorial Team"
      }
    ],
    "sameAs": [
      "https://twitter.com/objectwire",
      "https://www.facebook.com/objectwire",
      "https://www.linkedin.com/company/objectwire"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "editorial",
      "email": "editorial@objectwire.org"
    },
    "ethicsPolicy": "https://objectwire.org/editorial-standards",
    "correctionsPolicy": "https://objectwire.org/corrections",
    "verificationFactCheckingPolicy": "https://objectwire.org/editorial-standards",
    "masthead": "https://objectwire.org/team",
    "ownershipFundingInfo": "https://objectwire.org/about"
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
    "url": "https://objectwire.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://objectwire.org/search?q={search_term_string}"
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
