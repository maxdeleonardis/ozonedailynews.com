// Global Article/Wiki Page Components
// Import these to create standardized Wikipedia-style pages
//
// Usage:
// import { ArticlePage, Section, InfoBox, Quote, DataTable } from "@/components/ArticlePage";

export {
  // Main Layout
  ArticlePage,
  PageHeader, // Standalone header for any page
  
  // Content Components
  Section,
  InfoBox,
  TableOfContents,
  Quote,
  DataTable,
  Notice,
  Figure,
  
  // Footer Components
  RelatedLinks,
  References,
  ExternalLinks,
  
  // Types
  type ArticlePageProps,
  type PageHeaderProps,
  type InfoBoxProps,
  type InfoBoxItem,
  type TableOfContentsItem,
  type ArticleSection,
  type RelatedLink,
} from "../ArticlePage";
