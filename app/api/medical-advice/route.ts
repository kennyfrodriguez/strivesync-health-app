import { openai } from "@ai-sdk/openai"
import { convertToModelMessages, streamText, type UIMessage, tool } from "ai"
import { z } from "zod"

export const maxDuration = 30

const medicalAssessmentTool = tool({
  description: "Assess symptoms and provide medical guidance",
  inputSchema: z.object({
    symptoms: z.array(z.string()).describe("List of symptoms reported by the user"),
    severity: z.enum(["mild", "moderate", "severe"]).describe("Severity level of symptoms"),
    duration: z.string().describe("How long symptoms have been present"),
  }),
  async execute({ symptoms, severity, duration }) {
    // Simulate medical assessment logic
    const urgencyLevel = severity === "severe" ? "high" : severity === "moderate" ? "medium" : "low"

    return {
      urgencyLevel,
      recommendations: [
        "Monitor symptoms closely",
        "Stay hydrated and get adequate rest",
        "Consider over-the-counter remedies if appropriate",
        urgencyLevel === "high"
          ? "Seek immediate medical attention"
          : "Consult with a healthcare provider if symptoms persist",
      ],
      followUpAdvice: "Schedule a follow-up if symptoms worsen or persist beyond expected timeframe",
    }
  },
})

const emergencyCheckTool = tool({
  description: "Check if symptoms require emergency medical attention",
  inputSchema: z.object({
    symptoms: z.array(z.string()),
    vitalSigns: z
      .object({
        heartRate: z.number().optional(),
        bloodPressure: z.string().optional(),
        temperature: z.number().optional(),
      })
      .optional(),
  }),
  async execute({ symptoms, vitalSigns }) {
    // Emergency symptom keywords
    const emergencyKeywords = [
      "chest pain",
      "difficulty breathing",
      "severe bleeding",
      "unconscious",
      "stroke",
      "heart attack",
    ]
    const hasEmergencySymptoms = symptoms.some((symptom) =>
      emergencyKeywords.some((keyword) => symptom.toLowerCase().includes(keyword)),
    )

    return {
      isEmergency: hasEmergencySymptoms,
      emergencyAdvice: hasEmergencySymptoms ? "Call 911 or go to the nearest emergency room immediately" : null,
      urgencyScore: hasEmergencySymptoms ? 10 : Math.floor(Math.random() * 5) + 1,
    }
  },
})

const tools = {
  medicalAssessment: medicalAssessmentTool,
  emergencyCheck: emergencyCheckTool,
} as const

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const systemPrompt = `You are StriveSync, a professional medical AI assistant. You provide helpful medical information and guidance, but you are not a replacement for professional medical care.

IMPORTANT GUIDELINES:
- Always emphasize that you are not a substitute for professional medical advice
- For serious symptoms, always recommend consulting a healthcare provider
- Be empathetic and supportive in your responses
- Ask clarifying questions to better understand the user's condition
- Provide general health information and wellness tips
- Use the available tools to assess symptoms when appropriate
- If emergency symptoms are mentioned, immediately recommend emergency care

Remember: You provide information and guidance, but users should always consult with qualified healthcare professionals for medical decisions.`

  const result = streamText({
    model: openai("gpt-4"),
    messages: [{ role: "system", content: systemPrompt }, ...convertToModelMessages(messages)],
    tools,
    maxSteps: 3,
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    onFinish: async ({ isAborted }) => {
      if (isAborted) {
        console.log("Medical consultation aborted")
      }
    },
  })
}
