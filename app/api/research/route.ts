import { NextRequest, NextResponse } from 'next/server';
import { runResearch, PerplexityModel } from '@/lib/perplexity';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, model, systemPrompt, maxTokens, temperature } = body;

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'A research query is required.' },
        { status: 400 }
      );
    }

    const result = await runResearch(query.trim(), {
      model: (model as PerplexityModel) ?? 'sonar-pro',
      systemPrompt: systemPrompt ?? undefined,
      maxTokens: maxTokens ?? 4000,
      temperature: temperature ?? 0.2,
    });

    return NextResponse.json(result);
  } catch (error: unknown) {
    console.error('[Research API Error]', error);
    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
