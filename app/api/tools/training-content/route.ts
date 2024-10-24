import { anthropic } from '@ai-sdk/anthropic'
import { streamObject } from 'ai';
import { trainingModuleSchemaObject } from '@/lib/schema';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const prompt = await req.text();

    const response = await streamObject({
      model: anthropic("claude-3-5-sonnet-20241022"),
      prompt: `Generate comprehensive security training content based on these requirements: ${prompt}.
      Include clear learning objectives, appropriate difficulty level, and engaging delivery format.
      The content should be practical and help improve the organization's security posture.`,
      schema: trainingModuleSchemaObject
    });

    return response.toTextStreamResponse();
  } catch (error) {
    console.error('Training Content Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate training content' }, { status: 500 });
  }
}