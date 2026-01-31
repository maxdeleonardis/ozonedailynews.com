import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  ProcessDiagram,
  KeyFigures,
  StatisticsBox,
  ArticleQuote,
  VideoEmbed,
  ArticleImage,
} from '@/components/DynamicNewsArticle';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Example Investigation Article | ObjectWire',
  description: 'This is a template demonstrating how to use the DynamicNewsArticle component for creating SEO-optimized investigative journalism articles.',
  keywords: ['example', 'template', 'investigation', 'objectwire'],
  alternates: {
    canonical: 'https://www.objectwire.org/example-investigation',
  },
  openGraph: {
    type: 'article',
    title: 'Example Investigation Article',
    description: 'Template for creating investigative journalism articles.',
    publishedTime: '2026-01-30T10:00:00Z',
    section: 'Investigation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Example Investigation Article',
    description: 'Template for creating investigative journalism articles.',
  },
};

export default function ExampleInvestigationPage() {
  return (
    <>
      <NewsArticleSchema
        title="Example Investigation: Template Article"
        description="This is a template demonstrating the DynamicNewsArticle component."
        author="ObjectWire Investigations"
        authorUrl="https://objectwire.org/team"
        publishedTime="2026-01-30T10:00:00Z"
        modifiedTime="2026-01-30T12:00:00Z"
        articleUrl="https://objectwire.org/example-investigation"
        section="Investigation"
        keywords={['example', 'template', 'investigation']}
      />

      <DynamicNewsArticle
        // Header configuration
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
          { href: '/investigations', label: 'Investigations' },
        ]}
        categories={[
          { label: 'INVESTIGATION', color: 'red' },
          { label: 'BREAKING NEWS', color: 'black' },
        ]}
        readTime="8 min read"
        title="Example Investigation: How to Use the DynamicNewsArticle Component"
        subtitle="A comprehensive template demonstrating all features of the reusable article component for SEO-optimized investigative journalism."
        author={{
          name: 'ObjectWire Investigations',
          department: 'Editorial Team',
          initials: 'OW',
        }}
        publishDate="January 30, 2026"
        updatedDate="January 30, 2026"
        
        // Sidebar configuration
        relatedArticles={[
          {
            href: '/minnesota-feeding-our-future-fraud',
            category: 'INVESTIGATION',
            categoryColor: 'text-red-600',
            title: 'Feeding Our Future: $250M Minnesota Fraud Scheme',
          },
          {
            href: '/news',
            category: 'NEWS',
            categoryColor: 'text-blue-600',
            title: 'Latest ObjectWire Coverage',
          },
          {
            href: '/editorial-standards',
            category: 'STANDARDS',
            categoryColor: 'text-purple-600',
            title: 'Editorial Standards & Ethics',
          },
        ]}
        timeline={[
          { date: '2026-01', description: 'Component development begins' },
          { date: '2026-01-15', description: 'Feature analysis complete' },
          { date: '2026-01-30', description: 'Component released', highlight: true },
        ]}
        documents={[
          {
            href: 'https://github.com',
            label: 'Component Documentation',
            icon: '📄',
          },
          {
            href: '#',
            label: 'Usage Examples',
            icon: '📝',
          },
        ]}
        newsletterTitle="Get Latest Updates"
        newsletterDescription="Subscribe to receive notifications about new articles and investigations."
        showNewsletter={true}
        
        // Footer configuration
        sources={[
          {
            number: 1,
            url: 'https://www.objectwire.org',
            title: 'ObjectWire',
            description: 'Official website',
          },
          {
            number: 2,
            url: 'https://nextjs.org',
            title: 'Next.js Documentation',
            description: 'Framework documentation',
          },
        ]}
        showCorrections={true}
        showEditorialStandards={true}
      >
        {/* Article Content */}
        
        {/* Case Overview Box */}
        <CaseOverview
          title="COMPONENT OVERVIEW"
          color="blue"
          items={[
            { label: 'Fully reusable', value: 'component for all article types' },
            { label: 'SEO optimized', value: 'with proper semantic HTML and metadata' },
            { label: 'Responsive design', value: 'works on all devices' },
            { label: 'Sidebar widgets', value: 'timeline, related articles, documents' },
          ]}
        />

        {/* Lead Paragraph */}
        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          The <strong>DynamicNewsArticle</strong> component is a comprehensive, reusable template designed for 
          creating SEO-optimized investigative journalism articles. This component was built by analyzing the 
          structure of ObjectWire's{' '}
          <Link href="/minnesota-feeding-our-future-fraud" className="text-blue-600 hover:underline">
            Minnesota Feeding Our Future fraud article
          </Link>
          , which serves as the gold standard for investigative journalism layout and functionality.
        </p>

        <p>
          This template provides everything you need to create professional, engaging articles with proper 
          structure, navigation, related content, and SEO optimization. It includes sidebar widgets for 
          timelines, related articles, and document links, as well as specialized content components like 
          case overviews, process diagrams, and statistics boxes.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Key Features
        </h2>

        <p>
          The component system consists of a main <code>DynamicNewsArticle</code> wrapper and several 
          specialized sub-components that can be used within the article content:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Header with breadcrumbs</strong> - Proper navigation hierarchy</li>
          <li><strong>Category badges</strong> - Customizable colored labels</li>
          <li><strong>Author information</strong> - With optional avatar and department</li>
          <li><strong>Responsive sidebar</strong> - Timeline, related articles, documents</li>
          <li><strong>SEO footer</strong> - Publication dates and editorial links</li>
          <li><strong>Source citations</strong> - Properly formatted references</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Sub-Components
        </h2>

        <p>
          The following specialized components can be used within your article content to create 
          visually distinct sections:
        </p>

        {/* Process Diagram Example */}
        <ProcessDiagram
          title="HOW TO USE THE COMPONENT"
          color="blue"
          steps={[
            {
              title: 'Import Components',
              description: 'Import DynamicNewsArticle and any sub-components you need.',
            },
            {
              title: 'Configure Props',
              description: 'Set up metadata, categories, author info, and sidebar content.',
            },
            {
              title: 'Add Content',
              description: 'Write your article using standard HTML/JSX and sub-components.',
            },
            {
              title: 'Deploy',
              description: 'Build and deploy your article with full SEO optimization.',
            },
          ]}
        />

        {/* Statistics Box Example */}
        <StatisticsBox
          title="COMPONENT FEATURES"
          color="blue"
          stats={[
            { value: '100%', label: 'Reusable' },
            { value: '9+', label: 'Sub-Components' },
            { value: 'A+', label: 'SEO Score' },
            { value: '∞', label: 'Use Cases' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Available Sub-Components
        </h2>

        {/* Key Figures Example */}
        <KeyFigures
          figures={[
            {
              name: 'CaseOverview',
              role: 'Highlight Box',
              description: 'Creates a colored sidebar box with bullet points for highlighting key facts or case details.',
            },
            {
              name: 'ProcessDiagram',
              role: 'Numbered Steps',
              description: 'Displays a process or structure with numbered steps in a clean, visual layout.',
            },
            {
              name: 'KeyFigures',
              role: 'Person Grid',
              description: 'Grid layout for displaying key people involved in a story with their roles and status.',
            },
            {
              name: 'StatisticsBox',
              role: 'Numbers Display',
              description: 'Eye-catching box for displaying important statistics and metrics in a grid format.',
            },
            {
              name: 'ArticleQuote',
              role: 'Blockquote',
              description: 'Stylized blockquote component with optional attribution for quotes.',
            },
            {
              name: 'VideoEmbed',
              role: 'Media Embed',
              description: 'Responsive video embed for YouTube or Vimeo with caption support.',
            },
            {
              name: 'ArticleImage',
              role: 'Image Display',
              description: 'Image component with optional caption and credit information.',
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Quote Example
        </h2>

        <ArticleQuote
          quote="This component system makes it incredibly easy to create professional, SEO-optimized articles with a consistent look and feel across the entire site."
          author="ObjectWire Editorial Team"
          title="Component Documentation"
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Video Embed Example
        </h2>

        <VideoEmbed
          videoId="dQw4w9WgXcQ"
          title="Example Video"
          caption="Video: Example of the VideoEmbed component (replace with your video ID)"
          provider="youtube"
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Image Example
        </h2>

        <ArticleImage
          src="https://via.placeholder.com/800x400/000000/FFFFFF?text=Example+Article+Image"
          alt="Example article image"
          caption="Example of the ArticleImage component with caption"
          credit="ObjectWire"
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Implementation Notes
        </h2>

        <p>
          When using this component system, keep these best practices in mind:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Always include breadcrumbs for better navigation and SEO</li>
          <li>Use appropriate category colors that match your content type</li>
          <li>Fill out the sidebar with relevant timeline events and related articles</li>
          <li>Include proper source citations at the end of articles</li>
          <li>Use sub-components strategically to break up long text sections</li>
          <li>Ensure all dates are in proper datetime format for SEO</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Customization Options
        </h2>

        <p>
          The component supports extensive customization through props:
        </p>

        <CaseOverview
          title="CUSTOMIZATION OPTIONS"
          color="purple"
          items={[
            { label: 'Colors:', value: 'red, blue, green, purple, orange, yellow, black' },
            { label: 'Newsletter:', value: 'optional, with custom title and description' },
            { label: 'Sidebar widgets:', value: 'all optional, show/hide as needed' },
            { label: 'Footer links:', value: 'configurable corrections and standards links' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Getting Started
        </h2>

        <p>
          To use this component in your project, simply import it and configure the props to match 
          your article's needs. The component handles all the layout, styling, and responsive behavior 
          automatically. Check the source code of this page to see a complete implementation example.
        </p>

        <p>
          For more information, refer to the component source code at{' '}
          <code>components/DynamicNewsArticle.tsx</code> or visit the{' '}
          <Link href="/editorial-standards" className="text-blue-600 hover:underline">
            editorial standards page
          </Link>
          .
        </p>
      </DynamicNewsArticle>
    </>
  );
}
