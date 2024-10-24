// import { google } from '@ai-sdk/google';
import { anthropic } from '@ai-sdk/anthropic'
import { streamObject } from 'ai';
import { breachImpactSchemaObject } from '@/lib/schema';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const prompt = await req.text();

    const response = await streamObject({
      model: anthropic("claude-3-5-sonnet-20241022"),
      prompt: `Analyze this security breach scenario and calculate detailed impacts: ${prompt}.
      Consider financial implications, affected systems, recovery time, and provide specific 
      mitigation steps. The analysis should be thorough and actionable for security teams.`,
      schema: breachImpactSchemaObject
    });

    return response.toTextStreamResponse();
  } catch (error) {
    console.error('Breach Impact Calculation Error:', error);
    return NextResponse.json({ error: 'Failed to calculate impact' }, { status: 500 });
  }
}
