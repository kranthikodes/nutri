import Anthropic from '@anthropic-ai/sdk';
import { buildSystemPrompt } from '@/lib/system-prompt';
import type { UserProfile } from '@/types';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { userProfile } = (await request.json()) as { userProfile: UserProfile };

    const systemPrompt = buildSystemPrompt(userProfile);

    const stream = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content:
            'Please generate my personalized nutrition plan based on my profile data.',
        },
      ],
      stream: true,
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate nutrition plan' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
