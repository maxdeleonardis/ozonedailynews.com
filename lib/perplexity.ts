// =============================================================================
// PERPLEXITY RESEARCH API — lib/perplexity.ts
// Wrapper for the Perplexity Sonar API with typed responses
// =============================================================================

export type PerplexityModel =
  | 'sonar'
  | 'sonar-pro'
  | 'sonar-reasoning'
  | 'sonar-reasoning-pro';

export interface PerplexityMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface PerplexityCitation {
  url: string;
  title?: string;
}

export interface PerplexityResponse {
  id: string;
  model: string;
  choices: {
    index: number;
    finish_reason: string;
    message: {
      role: string;
      content: string;
    };
    delta?: {
      role: string;
      content: string;
    };
  }[];
  citations?: string[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface ResearchResult {
  content: string;
  citations: string[];
  model: string;
  tokensUsed: number;
  query: string;
  timestamp: string;
}

export interface ResearchOptions {
  model?: PerplexityModel;
  systemPrompt?: string;
  maxTokens?: number;
  temperature?: number;
}

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

const DEFAULT_SYSTEM_PROMPT = `You are an expert research assistant for ObjectWire, a digital news and media organization. 
Your job is to provide thorough, accurate, well-structured research on any topic requested.

When researching athletes, public figures, or events:
- Provide detailed biographical information
- Include career statistics and achievements
- Cite specific dates, records, and milestones
- Note any recent news or developments
- Structure your response with clear sections

Always be factual, cite sources where possible, and present information in a way that can be used to write professional news articles or Wikipedia-style profiles.`;

/**
 * Run a research query against the Perplexity Sonar API
 */
export async function runResearch(
  query: string,
  options: ResearchOptions = {}
): Promise<ResearchResult> {
  const apiKey = process.env.PERPLEXITY_API_KEY;

  if (!apiKey) {
    throw new Error('PERPLEXITY_API_KEY is not set in environment variables');
  }

  const {
    model = 'sonar-pro',
    systemPrompt = DEFAULT_SYSTEM_PROMPT,
    maxTokens = 4000,
    temperature = 0.2,
  } = options;

  const messages: PerplexityMessage[] = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: query },
  ];

  const response = await fetch(PERPLEXITY_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      max_tokens: maxTokens,
      temperature,
      return_citations: true,
      return_images: false,
      search_recency_filter: 'month',
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Perplexity API error ${response.status}: ${errorText}`
    );
  }

  const data: PerplexityResponse = await response.json();
  const choice = data.choices[0];

  return {
    content: choice.message.content,
    citations: data.citations ?? [],
    model: data.model,
    tokensUsed: data.usage.total_tokens,
    query,
    timestamp: new Date().toISOString(),
  };
}
