import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30

// Test endpoint - visit /api/medical-advice in browser to check if API is working
export async function GET() {
  const hasKey = !!process.env.OPENAI_API_KEY
  return Response.json({ 
    status: "ok", 
    hasApiKey: hasKey,
    keyPreview: hasKey ? `${process.env.OPENAI_API_KEY?.slice(0, 7)}...` : "NOT SET"
  })
}

export async function POST(req: Request) {
  // Check if API key is configured
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "OpenAI API key is not configured" },
      { status: 500 }
    )
  }

  const { messages } = await req.json()

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: `You are StriveSync, a helpful medical AI assistant. Provide general health information but always recommend consulting healthcare professionals for medical decisions.`,
    messages,
  })

  return result.toDataStreamResponse()
}
