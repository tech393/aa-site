import Anthropic from "@anthropic-ai/sdk";

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("Missing ANTHROPIC_API_KEY environment variable");
}

// Singleton Anthropic client — import this in any API route or server action
export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Default model — change here to update across all routes
export const CLAUDE_MODEL = "claude-sonnet-4-5" as const;

// Default token limit
export const CLAUDE_MAX_TOKENS = 1024 as const;
