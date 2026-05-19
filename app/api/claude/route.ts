import { NextRequest, NextResponse } from "next/server";
import { anthropic, CLAUDE_MODEL, CLAUDE_MAX_TOKENS } from "@/lib/claude";
import type { MessageParam } from "@anthropic-ai/sdk/resources/messages";

export interface ClaudeRequestBody {
  messages: MessageParam[];
  system?: string;
  model?: string;
  max_tokens?: number;
}

export interface ClaudeSuccessResponse {
  content: string;
  model: string;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

export interface ClaudeErrorResponse {
  error: string;
}

/**
 * POST /api/claude
 *
 * Send messages to Claude and receive a text response.
 *
 * Request body:
 *   messages    — array of { role: "user" | "assistant", content: string }
 *   system      — (optional) system prompt string
 *   model       — (optional) override the default model
 *   max_tokens  — (optional) override the default token limit
 *
 * Example:
 *   fetch("/api/claude", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({
 *       messages: [{ role: "user", content: "Hello!" }],
 *       system: "You are a helpful spiritual life coach.",
 *     }),
 *   })
 */
export async function POST(
  req: NextRequest
): Promise<NextResponse<ClaudeSuccessResponse | ClaudeErrorResponse>> {
  try {
    const body = (await req.json()) as ClaudeRequestBody;

    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "Request body must include a non-empty `messages` array." },
        { status: 400 }
      );
    }

    const response = await anthropic.messages.create({
      model: body.model ?? CLAUDE_MODEL,
      max_tokens: body.max_tokens ?? CLAUDE_MAX_TOKENS,
      system: body.system,
      messages: body.messages,
    });

    const textContent = response.content.find((block) => block.type === "text");
    if (!textContent || textContent.type !== "text") {
      return NextResponse.json(
        { error: "Claude returned no text content." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      content: textContent.text,
      model: response.model,
      usage: {
        input_tokens: response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
      },
    });
  } catch (err) {
    console.error("[/api/claude] Error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
