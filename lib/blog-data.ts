import { BlogPost, BlogCategory } from './types';

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-semiconductor-supply-chain-analysis',
    title: 'AI Semiconductor Supply Chain: Strategic Dependencies and Risk Vectors',
    description: 'Comprehensive analysis of critical chokepoints in AI semiconductor manufacturing, examining geopolitical risk factors and strategic implications for technological sovereignty.',
    hero: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22400%22%3E%3Crect fill=%22%230f3460%22 width=%22800%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2232%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22Arial%22%3ESemiconductor Supply Chain%3C/text%3E%3C/svg%3E',
    content: `# AI Semiconductor Supply Chain: Strategic Dependencies and Risk Vectors

## Executive Summary

The global AI semiconductor supply chain exhibits concentrated vulnerabilities across three critical nodes: advanced lithography equipment, specialized materials sourcing, and fabrication capacity. This analysis maps dependency relationships and evaluates strategic risks for continued AI development.

## Key Findings

### 1. Lithography Bottleneck
- ASML maintains 100% market share for EUV lithography systems
- 18-month lead times for new equipment orders
- Single point of failure for sub-7nm manufacturing

### 2. Material Dependencies
- 90% of high-purity polysilicon sourced from three regions
- Rare earth elements concentrated in single-geography mining operations
- Photoresist chemicals limited to five global suppliers

### 3. Manufacturing Concentration
- TSMC controls 63% of advanced node capacity
- Samsung represents 17% market share
- Intel transitioning to foundry model creates uncertainty

## Strategic Implications

The current configuration creates systemic vulnerabilities that could disrupt AI development across multiple threat vectors:

1. **Geopolitical Disruption**: Trade restrictions could eliminate access to critical components
2. **Natural Disasters**: Concentrated manufacturing increases catastrophic risk exposure
3. **Technical Failures**: Limited supplier diversity reduces resilience to quality issues

## Recommended Monitoring

- ASML quarterly delivery schedules and backlog reports
- Taiwan Strait tension indicators and military positioning
- Alternative lithography technology development timelines
- Government semiconductor independence initiatives

---

*Analysis based on verified industry data and supply chain mapping. Strategic relevance: High. Verification level: High.*`,
    publishedAt: '2025-01-10T08:00:00Z',
    category: 'supply-chain',
    tags: ['semiconductors', 'ai', 'geopolitics', 'supply-chain'],
    author: {
      name: 'ObjectWire Analysis Team',
      email: 'analysis@objectwire.org',
    },
    status: 'published',
    featured: true,
    readingTime: 8,
    metadata: {
      sources: ['SEMI Industry Reports', 'ASML Financial Statements', 'TSMC Earnings Calls'],
      verificationLevel: 'high',
      strategicRelevance: 9,
    },
  },
  {
    id: '2',
    slug: 'quantum-computing-commercial-timeline',
    title: 'Quantum Computing: Commercial Viability Timeline Assessment',
    description: 'Data-driven analysis of quantum computing development milestones, examining when quantum advantage will transition from research demonstrations to commercial applications.',
    hero: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22400%22%3E%3Crect fill=%22%23440055%22 width=%22800%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2232%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22Arial%22%3EQuantum Computing Timeline%3C/text%3E%3C/svg%3E',
    content: `# Quantum Computing: Commercial Viability Timeline Assessment

## Current State Assessment

Quantum computing progress exhibits clear technical milestones across multiple development vectors. This analysis synthesizes verified performance data to project commercial viability timelines.

## Progress Indicators

### Hardware Development
- IBM achieved 433-qubit Osprey processor (2022)
- Google demonstrated quantum supremacy with 70-qubit Sycamore (2019)
- IonQ commercialized 32-qubit trapped-ion systems (2021)

### Error Correction Progress
- Surface code implementations showing 2-3x improvement in logical qubit lifetimes
- Error rates declining from 1% to 0.1% across leading platforms
- Projected threshold for fault-tolerant computing: 2027-2029

### Commercial Applications
- Optimization problems showing quantum advantage in logistics (D-Wave, Volkswagen)
- Financial modeling demonstrations (JP Morgan, Goldman Sachs partnerships)
- Drug discovery applications in molecular simulation (Roche, Merck collaborations)

## Timeline Projections

### Near-term (2025-2027)
- Specialized optimization applications reach commercial deployment
- Hybrid quantum-classical algorithms demonstrate clear ROI
- 1000+ qubit systems become available for research

### Medium-term (2028-2032)
- Fault-tolerant quantum computers enter limited commercial use
- Cryptographic implications force security protocol updates
- Machine learning applications show measurable advantages

### Long-term (2033+)
- General-purpose quantum computing achieves broad commercial viability
- Classical encryption methods require complete replacement
- Scientific simulation capabilities transform R&D processes

---

*Assessment based on peer-reviewed research and industry milestone tracking. Strategic relevance: Medium-High. Verification level: High.*`,
    publishedAt: '2025-01-08T14:30:00Z',
    category: 'technology',
    tags: ['quantum-computing', 'timeline-analysis', 'commercial-applications'],
    author: {
      name: 'Dr. Sarah Chen',
      email: 'schen@objectwire.org',
    },
    status: 'published',
    featured: false,
    readingTime: 6,
    metadata: {
      sources: ['Nature Quantum Information', 'IBM Quantum Network Reports', 'Industry Partnership Announcements'],
      verificationLevel: 'high',
      strategicRelevance: 7,
    },
  },
  {
    id: '3',
    slug: 'cryptocurrency-regulatory-convergence',
    title: 'Cryptocurrency Regulatory Convergence: Policy Alignment Patterns',
    description: 'Analysis of emerging regulatory frameworks across major jurisdictions, identifying convergence patterns and divergence risks in cryptocurrency policy development.',
    hero: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22400%22%3E%3Crect fill=%22%23005580%22 width=%22800%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2232%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22Arial%22%3EBlockchain Evolution%3C/text%3E%3C/svg%3E',
    content: `# Cryptocurrency Regulatory Convergence: Policy Alignment Patterns

## Regulatory Landscape Analysis

Major jurisdictions are developing cryptocurrency regulations along converging policy vectors, with notable alignment on core principles despite implementation differences.

## Convergence Areas

### 1. Anti-Money Laundering (AML) Standards
- FATF Travel Rule adoption across G20 countries
- KYC requirements standardizing at $1,000-$3,000 thresholds
- Cross-border information sharing protocols implemented

### 2. Stablecoin Regulation
- Reserve backing requirements (100% liquid assets)
- Regular attestations and auditing mandates
- Redemption guarantee mechanisms

### 3. Market Infrastructure
- Custody standards for digital asset service providers
- Trading venue licensing requirements
- Segregation of customer funds from operational assets

## Divergence Points

### Tax Treatment
- Capital gains vs. ordinary income classifications vary
- Mining income recognition inconsistent across jurisdictions
- DeFi transaction reporting requirements differ significantly

### Central Bank Digital Currencies (CBDCs)
- Implementation timelines range from 2025 (China) to 2030+ (US)
- Privacy preservation approaches show fundamental disagreements
- Cross-border settlement mechanisms remain uncoordinated

## Strategic Implications

Regulatory convergence creates opportunities for:
- Standardized compliance frameworks reducing operational costs
- Cross-border business model scaling
- Institutional adoption acceleration

Divergence risks include:
- Regulatory arbitrage encouraging jurisdiction shopping
- Fragmented market liquidity
- Compliance complexity for multinational operators

---

*Analysis covers G20 jurisdictions and major financial centers. Strategic relevance: High. Verification level: Medium-High.*`,
    publishedAt: '2025-01-05T11:15:00Z',
    category: 'regulation',
    tags: ['cryptocurrency', 'regulation', 'policy-analysis', 'compliance'],
    author: {
      name: 'Michael Rodriguez',
      email: 'mrodriguez@objectwire.org',
    },
    status: 'published',
    featured: false,
    readingTime: 7,
    metadata: {
      sources: ['FATF Guidelines', 'Central Bank Policy Statements', 'Regulatory Filing Database'],
      verificationLevel: 'medium',
      strategicRelevance: 8,
    },
  },
];

export const blogCategories: BlogCategory[] = [
  {
    id: 'supply-chain',
    name: 'Supply Chain Intelligence',
    description: 'Strategic analysis of critical supply networks and dependencies',
    color: '#3B82F6',
  },
  {
    id: 'technology',
    name: 'Technology Assessment',
    description: 'Evaluation of emerging technologies and development timelines',
    color: '#10B981',
  },
  {
    id: 'regulation',
    name: 'Regulatory Analysis',
    description: 'Policy development tracking and compliance implications',
    color: '#F59E0B',
  },
  {
    id: 'geopolitics',
    name: 'Geopolitical Intelligence',
    description: 'Strategic relationship analysis and risk assessment',
    color: '#EF4444',
  },
];

// Utility functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.status === 'published');
}

export function getBlogPostsByCategory(categoryId: string): BlogPost[] {
  return blogPosts
    .filter(post => post.category === categoryId && post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts
    .filter(post => post.featured && post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogCategoryById(id: string): BlogCategory | undefined {
  return blogCategories.find(category => category.id === id);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
// Get related blog posts by category
export function getRelatedBlogPosts(currentPostId: string, category: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category && post.status === 'published')
    .slice(0, limit);
}