import { anthropic } from '@ai-sdk/anthropic'
import { streamObject } from 'ai';
import { phishingCampaignSchemaObject } from '@/lib/schema';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const prompt = await req.text();

    const response = await streamObject({
      model: anthropic("claude-3-5-sonnet-20241022"),
      prompt: `Generate a detailed phishing awareness campaign based on these requirements: ${prompt}. 
      The campaign should include specific goals, target audience, budget considerations, and key messages 
      that will help improve security awareness in the organization.`,
      schema: phishingCampaignSchemaObject
    });

    return response.toTextStreamResponse();
  } catch (error) {
    console.error('Phishing Campaign Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate campaign' }, { status: 500 });
  }
}