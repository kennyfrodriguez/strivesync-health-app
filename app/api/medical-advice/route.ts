import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "OpenAI API key is not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    const { messages } = await req.json()

    const systemPrompt = `You are StriveSync, a professional medical AI assistant. You provide helpful medical information and guidance, but you are not a replacement for professional medical care.

IMPORTANT GUIDELINES:
- Always emphasize that you are not a substitute for professional medical advice
- For serious symptoms, always recommend consulting a healthcare provider
- Be empathetic and supportive in your responses
- Ask clarifying questions to better understand the user's condition
- Provide general health information and wellness tips
- If emergency symptoms are mentioned, immediately recommend emergency care

Remember: You provide information and guidance, but users should always consult with qualified healthcare professionals for medical decisions.`

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Medical advice API error:", error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
