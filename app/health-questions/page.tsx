"use client"

import type React from "react"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  Heart, 
  Brain, 
  AlertTriangle, 
  ArrowLeft, 
  Activity, 
  Pill,
  Users,
  Moon,
  Apple,
  Stethoscope,
  Dumbbell,
  Baby,
  HeartPulse,
  Shield,
  Loader2,
  Sparkles
} from "lucide-react"
import Link from "next/link"

export default function HealthQuestionsPage() {
  const { messages, append, isLoading, error } = useChat({
    api: "/api/medical-advice",
  })

  const askQuestion = (question: string) => {
    append({ role: "user", content: question })
  }

  const healthCategories = [
    {
      title: "Symptom Assessment",
      icon: Stethoscope,
      color: "from-blue-500 to-cyan-500",
      questions: [
        "I have a persistent headache and feel dizzy. What could be causing this?",
        "I'm experiencing chest discomfort and shortness of breath. Should I be concerned?",
        "I have a fever of 101°F, body aches, and fatigue. What should I do?",
        "I've been having stomach pain and nausea for 2 days. What could this be?",
        "I have a sore throat, runny nose, and cough. Is this a cold or something else?"
      ]
    },
    {
      title: "Vital Signs Monitoring",
      icon: HeartPulse,
      color: "from-red-500 to-pink-500",
      questions: [
        "My resting heart rate is 95 bpm. Is this normal?",
        "My blood pressure reading is 140/90. Should I be worried?",
        "My temperature is 99.5°F. Is this a low-grade fever?",
        "My oxygen saturation is 94%. Is this concerning?",
        "How do I properly monitor my vital signs at home?"
      ]
    },
    {
      title: "Medication Guidance",
      icon: Pill,
      color: "from-purple-500 to-indigo-500",
      questions: [
        "What are the common side effects of blood pressure medications?",
        "Can I take ibuprofen with acetaminophen together?",
        "What should I know about antibiotic interactions with food?",
        "How do I manage medication side effects safely?",
        "What are the risks of suddenly stopping my prescribed medication?"
      ]
    },
    {
      title: "Wellness & Prevention",
      icon: Apple,
      color: "from-green-500 to-emerald-500",
      questions: [
        "What are the best practices for maintaining heart health?",
        "How can I boost my immune system naturally?",
        "What diet changes can help prevent diabetes?",
        "How much sleep do I need for optimal health?",
        "What are the key health screenings I should have at my age?"
      ]
    },
    {
      title: "Fitness & Activity",
      icon: Dumbbell,
      color: "from-orange-500 to-amber-500",
      questions: [
        "How much exercise should I get per week?",
        "What exercises are safe for someone with joint pain?",
        "How do I create an effective workout routine for beginners?",
        "What are the signs of overtraining?",
        "How can I improve my cardiovascular fitness?"
      ]
    },
    {
      title: "Mental Health & Sleep",
      icon: Moon,
      color: "from-violet-500 to-purple-500",
      questions: [
        "What are healthy strategies for managing stress and anxiety?",
        "How can I improve my sleep quality?",
        "What are the signs of depression I should watch for?",
        "How does exercise impact mental health?",
        "What are effective relaxation techniques for better sleep?"
      ]
    },
    {
      title: "Family Care",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      questions: [
        "What are the essential vaccinations my child needs?",
        "How do I care for a family member with chronic illness?",
        "What are healthy nutrition guidelines for children?",
        "How can I support an elderly parent's health?",
        "What should I include in a family first aid kit?"
      ]
    },
    {
      title: "Women's Health",
      icon: Heart,
      color: "from-fuchsia-500 to-pink-500",
      questions: [
        "What are normal menstrual cycle variations?",
        "How can I manage menopause symptoms naturally?",
        "What prenatal vitamins should I consider during pregnancy?",
        "What are the warning signs during pregnancy I shouldn't ignore?",
        "How can I maintain bone health after menopause?"
      ]
    },
    {
      title: "Pediatric Health",
      icon: Baby,
      color: "from-cyan-500 to-blue-500",
      questions: [
        "What are normal developmental milestones for my toddler?",
        "How do I know if my baby's fever requires urgent care?",
        "What are healthy sleep patterns for infants?",
        "How much water should my child drink daily?",
        "What are signs of common childhood illnesses?"
      ]
    },
    {
      title: "Emergency Situations",
      icon: AlertTriangle,
      color: "from-red-600 to-orange-600",
      questions: [
        "What are the warning signs of a heart attack?",
        "How do I recognize the symptoms of a stroke?",
        "What should I do if someone is choking?",
        "When should chest pain be considered an emergency?",
        "What are signs of severe allergic reactions?"
      ]
    },
    {
      title: "Chronic Conditions",
      icon: Shield,
      color: "from-teal-500 to-cyan-500",
      questions: [
        "How can I effectively manage diabetes through lifestyle?",
        "What are the best practices for living with hypertension?",
        "How do I manage asthma triggers effectively?",
        "What dietary changes help with high cholesterol?",
        "How can I reduce arthritis pain naturally?"
      ]
    },
    {
      title: "Preventive Care",
      icon: Activity,
      color: "from-lime-500 to-green-500",
      questions: [
        "What cancer screenings should I get at my age?",
        "How often should I have a physical examination?",
        "What are the most important health habits to develop?",
        "How can I prevent common health problems as I age?",
        "What lifestyle changes reduce my disease risk?"
      ]
    }
  ]

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
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">AI Health Questions</span>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              <Sparkles className="w-4 h-4 mr-2" />
              Instant AI Answers
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Instant AI Answers</span> to Your Health Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Click any button below to get immediate, personalized health guidance powered by advanced AI. 
            All features from the home page, now just one click away.
          </p>
          
          {/* Enhanced Legal Disclaimer */}
          <Card className="border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/20 text-left">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <CardTitle className="text-red-800 dark:text-red-200 text-lg font-bold">⚠️ CRITICAL MEDICAL DISCLAIMER</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-red-800 dark:text-red-300 space-y-3">
              <p className="font-bold text-base">
                THIS IS NOT MEDICAL ADVICE. FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.
              </p>
              <div className="space-y-2">
                <p>
                  • <strong>NOT A SUBSTITUTE:</strong> This AI tool is NOT a substitute for professional medical advice, diagnosis, or treatment. 
                  Never disregard or delay seeking professional medical advice because of information provided by this AI.
                </p>
                <p>
                  • <strong>NO DOCTOR-PATIENT RELATIONSHIP:</strong> Use of this service does not create a doctor-patient relationship. 
                  AI responses are not reviewed by licensed medical professionals.
                </p>
                <p>
                  • <strong>EMERGENCIES:</strong> If you are experiencing a medical emergency, <strong className="text-lg">CALL 911 IMMEDIATELY</strong> or 
                  go to the nearest emergency room. Do not rely on this AI for emergency medical situations.
                </p>
                <p>
                  • <strong>ACCURACY NOT GUARANTEED:</strong> AI may provide inaccurate, incomplete, or outdated information. 
                  Always verify with qualified healthcare providers.
                </p>
                <p>
                  • <strong>NO LIABILITY:</strong> By using this service, you acknowledge that the creators, developers, and operators 
                  assume no liability for any consequences arising from the use of this AI tool.
                </p>
              </div>
              <p className="font-bold text-center text-base pt-2 border-t border-red-300">
                ALWAYS CONSULT WITH QUALIFIED HEALTHCARE PROFESSIONALS FOR MEDICAL DECISIONS
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mb-8 max-w-3xl mx-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error.message || "An error occurred while communicating with the AI. Please try again."}
            </AlertDescription>
          </Alert>
        )}

        {/* Response Section */}
        {messages.length > 0 && (
          <Card className="mb-8 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI Health Assistant Response
              </CardTitle>
              <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-md">
                <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold">
                  ⚠️ REMINDER: This is AI-generated information only, NOT medical advice. Always consult healthcare professionals for actual medical decisions. Call 911 for emergencies.
                </p>
              </div>
            </CardHeader>
            <CardContent className="max-h-[500px] overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] ${
                        message.role === "user" 
                          ? "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground" 
                          : "bg-muted"
                      } rounded-lg p-4`}
                    >
                      <div className="whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </div>
                      {/* Tool invocations rendering */}
                      {message.toolInvocations?.map((toolInvocation, index) => {
                        if (toolInvocation.state !== "result") return null
                        
                        if (toolInvocation.toolName === "medicalAssessment") {
                          const result = toolInvocation.result as {
                            urgencyLevel: string
                            recommendations: string[]
                            followUpAdvice: string
                          }
                          return (
                            <div key={index} className="mt-3 p-3 bg-background/10 rounded border">
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Stethoscope className="w-4 h-4" />
                                Medical Assessment
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <strong>Urgency Level:</strong>
                                  <Badge
                                    variant={
                                      result.urgencyLevel === "high"
                                        ? "destructive"
                                        : result.urgencyLevel === "medium"
                                          ? "secondary"
                                          : "outline"
                                    }
                                    className="ml-2"
                                  >
                                    {result.urgencyLevel}
                                  </Badge>
                                </div>
                                <div>
                                  <strong>Recommendations:</strong>
                                  <ul className="list-disc list-inside mt-1">
                                    {result.recommendations.map((rec: string, i: number) => (
                                      <li key={i}>{rec}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <strong>Follow-up:</strong> {result.followUpAdvice}
                                </div>
                              </div>
                            </div>
                          )
                        }
                        
                        if (toolInvocation.toolName === "emergencyCheck") {
                          const result = toolInvocation.result as {
                            isEmergency: boolean
                            emergencyAdvice: string | null
                            urgencyScore: number
                          }
                          return (
                            <div
                              key={index}
                              className={`mt-3 p-3 rounded border ${
                                result.isEmergency 
                                  ? "bg-destructive/10 border-destructive" 
                                  : "bg-background/10"
                              }`}
                            >
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                {result.isEmergency && <AlertTriangle className="w-4 h-4 text-destructive" />}
                                Emergency Assessment
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <strong>Urgency Score:</strong> {result.urgencyScore}/10
                                </div>
                                {result.isEmergency && (
                                  <div className="text-destructive font-semibold">
                                    ⚠️ {result.emergencyAdvice}
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        }
                        
                        return null
                      })}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-4 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm text-muted-foreground">StriveSync AI is analyzing...</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Question Categories */}
        <div className="space-y-8">
          {healthCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription>Click any question to get instant AI guidance</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.questions.map((question, questionIndex) => (
                      <Button
                        key={questionIndex}
                        onClick={() => askQuestion(question)}
                        disabled={isLoading}
                        variant="outline"
                        className="h-auto py-4 px-4 text-left justify-start whitespace-normal hover:shadow-md transition-all hover:border-primary/50"
                      >
                        <div className="flex items-start gap-2 w-full">
                          <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed">{question}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 border-0 shadow-xl bg-gradient-to-br from-primary/5 to-blue-500/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need More Personalized Guidance?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For detailed symptom analysis and personalized health advice, visit our full AI Medical Advice page 
              where you can have an in-depth consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-blue-600">
                <Link href="/medical-advice">
                  <Brain className="w-5 h-5 mr-2" />
                  Full AI Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">
                  <Activity className="w-5 h-5 mr-2" />
                  View Health Dashboard
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

