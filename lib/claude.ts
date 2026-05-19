import Anthropic from "@anthropic-ai/sdk";

export function getAnthropicClient() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("Missing ANTHROPIC_API_KEY environment variable");
  }

  return new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });
}

export const CLAUDE_MODEL = "claude-sonnet-4-5" as const;
export const CLAUDE_MAX_TOKENS = 1024 as const;
