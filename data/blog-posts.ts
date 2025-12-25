import { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-surveillance-implications-2024',
    title: 'AI Surveillance: Strategic Implications for 2024',
    description: 'An analysis of emerging AI surveillance technologies and their geopolitical ramifications.',
    content: `# AI Surveillance: Strategic Implications for 2024

The landscape of artificial intelligence surveillance is rapidly evolving...

## Key Developments

1. **Facial Recognition Advances**
   - New algorithms achieving 99.7% accuracy
   - Real-time processing capabilities
   
2. **Behavioral Analysis**
   - Predictive movement patterns
   - Anomaly detection systems

## Strategic Considerations

The implications for national security and privacy are profound...`,
    publishedAt: '2024-10-15T10:00:00Z',
    category: 'intelligence',
    tags: ['AI', 'surveillance', 'technology', 'security'],
    author: {
      name: 'ObjectWire Analysis Team',
      email: 'analysis@objectwire.org'
    },
    status: 'published',
    featured: true,
    readingTime: 8,
    metadata: {
      sources: ['Pentagon AI Initiative Report', 'MIT Technology Review'],
      verificationLevel: 'high',
      strategicRelevance: 9
    }
  },
  // Add more posts here...
];