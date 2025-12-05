import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

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
  try {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Invalid messages format" },
        { status: 400 }
      )
    }

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      system: `You are StriveSync, a helpful medical AI assistant. Provide general health information but always recommend consulting healthcare professionals for medical decisions.`,
      messages,
    })

    return Response.json({ content: text })
  } catch (error) {
    console.error("API Error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return Response.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
