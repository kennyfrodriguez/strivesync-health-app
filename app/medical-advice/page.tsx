"use client"

import type React from "react"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Brain, AlertTriangle, Send, Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MedicalAdvicePage() {
  const [input, setInput] = useState("")

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/medical-advice" }),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && status !== "in_progress") {
      sendMessage({ text: input })
      setInput("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">AI Medical Advice</span>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              <Heart className="w-4 h-4 mr-2" />
              Professional Guidance
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Enhanced Legal Disclaimer */}
        <Card className="mb-6 border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <CardTitle className="text-red-800 dark:text-red-200 font-bold">⚠️ CRITICAL MEDICAL DISCLAIMER</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-red-800 dark:text-red-300 space-y-3">
            <p className="font-bold">
              THIS IS NOT MEDICAL ADVICE. FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.
            </p>
            <div className="space-y-2">
              <p>
                • <strong>NOT A SUBSTITUTE:</strong> This AI tool is NOT a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                • <strong>NO DOCTOR-PATIENT RELATIONSHIP:</strong> Use of this service does not create a doctor-patient relationship.
              </p>
              <p>
                • <strong>EMERGENCIES:</strong> If experiencing a medical emergency, <strong className="text-base">CALL 911 IMMEDIATELY</strong>. Do not rely on this AI for emergencies.
              </p>
              <p>
                • <strong>ACCURACY NOT GUARANTEED:</strong> AI may provide inaccurate or incomplete information. Always verify with healthcare providers.
              </p>
              <p>
                • <strong>NO LIABILITY:</strong> Creators assume no liability for consequences arising from use of this AI tool.
              </p>
            </div>
            <p className="font-bold text-center pt-2 border-t border-red-300">
              ALWAYS CONSULT WITH QUALIFIED HEALTHCARE PROFESSIONALS
            </p>
          </CardContent>
        </Card>

        {/* Quick Start Options */}
        {messages.length === 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How can I help you today?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow border-0 shadow-sm"
                onClick={() =>
                  setInput("I'm experiencing headaches and fatigue for the past few days. What could be causing this?")
                }
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Symptom Assessment</CardTitle>
                  <CardDescription>Describe your symptoms for personalized guidance</CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow border-0 shadow-sm"
                onClick={() => setInput("Can you provide general wellness tips for maintaining good health?")}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Wellness Tips</CardTitle>
                  <CardDescription>Get advice on healthy lifestyle practices</CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow border-0 shadow-sm"
                onClick={() => setInput("I need help understanding my medication side effects and interactions.")}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Medication Info</CardTitle>
                  <CardDescription>Learn about medications and their effects</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="space-y-4 mb-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-4`}
              >
                {message.parts.map((part, index) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <div key={index} className="whitespace-pre-wrap">
                          {part.text}
                        </div>
                      )

                    case "tool-medicalAssessment":
                      if (part.state === "output-available") {
                        return (
                          <div key={index} className="mt-3 p-3 bg-background/10 rounded border">
                            <h4 className="font-semibold mb-2">Medical Assessment</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <strong>Urgency Level:</strong>
                                <Badge
                                  variant={
                                    part.output.urgencyLevel === "high"
                                      ? "destructive"
                                      : part.output.urgencyLevel === "medium"
                                        ? "secondary"
                                        : "outline"
                                  }
                                  className="ml-2"
                                >
                                  {part.output.urgencyLevel}
                                </Badge>
                              </div>
                              <div>
                                <strong>Recommendations:</strong>
                                <ul className="list-disc list-inside mt-1">
                                  {part.output.recommendations.map((rec: string, i: number) => (
                                    <li key={i}>{rec}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <strong>Follow-up:</strong> {part.output.followUpAdvice}
                              </div>
                            </div>
                          </div>
                        )
                      }
                      break

                    case "tool-emergencyCheck":
                      if (part.state === "output-available") {
                        return (
                          <div
                            key={index}
                            className={`mt-3 p-3 rounded border ${part.output.isEmergency ? "bg-destructive/10 border-destructive" : "bg-background/10"}`}
                          >
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              {part.output.isEmergency && <AlertTriangle className="w-4 h-4 text-destructive" />}
                              Emergency Assessment
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <strong>Urgency Score:</strong> {part.output.urgencyScore}/10
                              </div>
                              {part.output.isEmergency && (
                                <div className="text-destructive font-semibold">⚠️ {part.output.emergencyAdvice}</div>
                              )}
                            </div>
                          </div>
                        )
                      }
                      break
                  }
                  return null
                })}
              </div>
            </div>
          ))}

          {status === "in_progress" && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg p-4 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm text-muted-foreground">StriveSync is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your symptoms, ask about health conditions, or request wellness advice..."
                className="min-h-[100px] resize-none"
                disabled={status === "in_progress"}
              />
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">
                  Be specific about your symptoms, their duration, and severity for better guidance.
                </p>
                <Button
                  type="submit"
                  disabled={!input.trim() || status === "in_progress"}
                  className="flex items-center gap-2"
                >
                  {status === "in_progress" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
