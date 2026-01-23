// =============================================================================
// SEO COMPONENTS - React components for structured data and SEO
// =============================================================================

import React from 'react';
import { 
  generateNewsArticleSchema, 
  generateArticleSchema,
  generateBreadcrumbSchema,
  generatePersonSchema,
  generateFAQSchema,
  ArticleSchemaData,
  BreadcrumbItem 
} from '@/lib/seo';

// =============================================================================
// JSON-LD SCRIPT COMPONENT
// =============================================================================

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// =============================================================================
// NEWS ARTICLE SCHEMA COMPONENT
// =============================================================================

interface NewsArticleSchemaProps extends ArticleSchemaData {}

export function NewsArticleJsonLd(props: NewsArticleSchemaProps) {
  const schema = generateNewsArticleSchema(props);
  return <JsonLd data={schema} />;
}

// =============================================================================
// ARTICLE SCHEMA COMPONENT
// =============================================================================

interface ArticleSchemaProps extends ArticleSchemaData {}

export function ArticleJsonLd(props: ArticleSchemaProps) {
  const schema = generateArticleSchema(props);
  return <JsonLd data={schema} />;
}

// =============================================================================
// BREADCRUMB SCHEMA COMPONENT
// =============================================================================

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = generateBreadcrumbSchema(items);
  return <JsonLd data={schema} />;
}

// =============================================================================
// PERSON SCHEMA COMPONENT (for wiki/biography pages)
// =============================================================================

interface PersonJsonLdProps {
  name: string;
  description: string;
  image?: string;
  jobTitle?: string;
  birthDate?: string;
  birthPlace?: string;
  nationality?: string;
  url: string;
  sameAs?: string[];
}

export function PersonJsonLd(props: PersonJsonLdProps) {
  const schema = generatePersonSchema(props);
  return <JsonLd data={schema} />;
}

// =============================================================================
// FAQ SCHEMA COMPONENT
// =============================================================================

interface FAQJsonLdProps {
  faqs: { question: string; answer: string }[];
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  const schema = generateFAQSchema(faqs);
  return <JsonLd data={schema} />;
}

// =============================================================================
// COMBINED SEO HEAD COMPONENT
// For pages that need multiple schema types
// =============================================================================

interface SEOHeadProps {
  article?: ArticleSchemaData;
  newsArticle?: ArticleSchemaData;
  breadcrumbs?: BreadcrumbItem[];
  person?: PersonJsonLdProps;
  faqs?: { question: string; answer: string }[];
  organization?: boolean;
}

export function SEOHead({ 
  article, 
  newsArticle, 
  breadcrumbs, 
  person, 
  faqs,
  organization = false 
}: SEOHeadProps) {
  return (
    <>
      {newsArticle && <NewsArticleJsonLd {...newsArticle} />}
      {article && !newsArticle && <ArticleJsonLd {...article} />}
      {breadcrumbs && breadcrumbs.length > 0 && <BreadcrumbJsonLd items={breadcrumbs} />}
      {person && <PersonJsonLd {...person} />}
      {faqs && faqs.length > 0 && <FAQJsonLd faqs={faqs} />}
      {organization && <OrganizationJsonLd />}
    </>
  );
}

// =============================================================================
// ORGANIZATION SCHEMA (for the site)
// =============================================================================

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'ObjectWire',
    alternateName: 'ObjectWire News Network',
    url: 'https://objectwire.org',
    logo: {
      '@type': 'ImageObject',
      url: 'https://objectwire.org/logo.png',
      width: 600,
      height: 60,
    },
    description: 'ObjectWire delivers verified, source-cited intelligence on business, technology, and policy.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/objectwire',
      'https://www.linkedin.com/company/objectwire',
    ],
    // Google News Publisher Center requirements
    publishingPrinciples: 'https://objectwire.org/editorial-standards',
    actionableFeedbackPolicy: 'https://objectwire.org/corrections',
    correctionsPolicy: 'https://objectwire.org/corrections',
    ethicsPolicy: 'https://objectwire.org/editorial-standards',
    masthead: 'https://objectwire.org/about',
    ownershipFundingInfo: 'https://objectwire.org/about',
  };
  
  return <JsonLd data={schema} />;
}

// =============================================================================
// WEBSITE SCHEMA
// =============================================================================

export function WebsiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ObjectWire',
    url: 'https://objectwire.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://objectwire.org/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
  
  return <JsonLd data={schema} />;
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  JsonLd,
  NewsArticleJsonLd,
  ArticleJsonLd,
  BreadcrumbJsonLd,
  PersonJsonLd,
  FAQJsonLd,
  SEOHead,
  OrganizationJsonLd,
  WebsiteJsonLd,
};
