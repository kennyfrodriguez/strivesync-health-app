"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  Heart, 
  Brain, 
  AlertTriangle, 
  ArrowLeft, 
  Activity, 
  Dumbbell,
  Target,
  Flame,
  Timer,
  TrendingUp,
  Zap,
  Trophy,
  Users,
  Moon,
  Apple,
  Loader2,
  Sparkles,
  X
} from "lucide-react"
import Link from "next/link"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function HealthQuestionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const askQuestion = async (question: string) => {
    setCurrentQuestion(question)
    setIsModalOpen(true)
    setIsLoading(true)
    setError(null)
    setResponse("")

    try {
      const res = await fetch("/api/medical-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: question }],
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || `API error: ${res.status}`)
      }

      setResponse(data.content)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const fitnessCategories = [
    {
      title: "Workout Planning",
      icon: Dumbbell,
      color: "from-orange-500 to-red-500",
      questions: [
        "Create a beginner-friendly full body workout routine I can do at home",
        "What's the best workout split for building muscle as a beginner?",
        "How do I create an effective HIIT workout routine?",
        "What exercises should I do to strengthen my core?",
        "Design a 30-minute workout I can do with no equipment"
      ]
    },
    {
      title: "Goal Setting & Progress",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      questions: [
        "How do I set realistic fitness goals for weight loss?",
        "What metrics should I track to measure my fitness progress?",
        "How long does it take to see results from working out?",
        "What's a healthy rate of weight loss per week?",
        "How do I break through a fitness plateau?"
      ]
    },
    {
      title: "Fat Burning & Weight Loss",
      icon: Flame,
      color: "from-red-500 to-orange-500",
      questions: [
        "What are the most effective exercises for burning fat?",
        "How does cardio compare to weight training for fat loss?",
        "What's the best time of day to exercise for weight loss?",
        "How many calories should I burn per workout to lose weight?",
        "What's the truth about the 'fat burning zone'?"
      ]
    },
    {
      title: "Workout Optimization",
      icon: Timer,
      color: "from-purple-500 to-pink-500",
      questions: [
        "How long should my workouts be for optimal results?",
        "What's the ideal rest time between sets?",
        "How many days per week should I work out?",
        "Should I do cardio before or after weight training?",
        "How do I warm up properly before a workout?"
      ]
    },
    {
      title: "Strength & Muscle Building",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
      questions: [
        "How do I build muscle without getting bulky?",
        "What's the best rep range for building strength?",
        "How important is progressive overload for muscle growth?",
        "What compound exercises give the best results?",
        "How do I prevent muscle loss while losing weight?"
      ]
    },
    {
      title: "Energy & Performance",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      questions: [
        "How can I boost my energy levels for workouts?",
        "What should I eat before and after working out?",
        "How do I improve my endurance and stamina?",
        "What supplements actually help with performance?",
        "How does sleep affect my workout performance?"
      ]
    },
    {
      title: "Motivation & Consistency",
      icon: Trophy,
      color: "from-amber-500 to-yellow-500",
      questions: [
        "How do I stay motivated to exercise regularly?",
        "What are strategies to build a consistent workout habit?",
        "How do I overcome workout burnout?",
        "What should I do on days when I don't feel like exercising?",
        "How do I make fitness a sustainable lifestyle?"
      ]
    },
    {
      title: "Recovery & Rest",
      icon: Moon,
      color: "from-indigo-500 to-purple-500",
      questions: [
        "How important are rest days for fitness progress?",
        "What's the best way to recover after an intense workout?",
        "How do I reduce muscle soreness after exercise?",
        "Should I work out when I'm sore?",
        "What's active recovery and should I do it?"
      ]
    },
    {
      title: "Nutrition for Fitness",
      icon: Apple,
      color: "from-green-500 to-emerald-500",
      questions: [
        "How much protein do I need to build muscle?",
        "What should my macros be for losing fat and gaining muscle?",
        "How important is meal timing for fitness results?",
        "What are the best foods to eat for workout recovery?",
        "How do I calculate my calorie needs for my fitness goals?"
      ]
    },
    {
      title: "Cardio & Endurance",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      questions: [
        "How can I improve my running endurance?",
        "What's better: steady-state cardio or interval training?",
        "How do I train for my first 5K run?",
        "What's the best cardio for someone who hates running?",
        "How often should I do cardio for heart health?"
      ]
    },
    {
      title: "Group & Social Fitness",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      questions: [
        "What are the benefits of group fitness classes?",
        "How do I find a good workout partner?",
        "What are fun ways to exercise with friends or family?",
        "How can I make my workouts more social and enjoyable?",
        "What fitness communities or apps can help me stay accountable?"
      ]
    },
    {
      title: "Fitness Tracking & Tech",
      icon: Activity,
      color: "from-violet-500 to-indigo-500",
      questions: [
        "What fitness metrics should I track with a smartwatch?",
        "How accurate are fitness trackers for calorie counting?",
        "What's the best way to use fitness apps effectively?",
        "How do I interpret my heart rate zones during exercise?",
        "What technology can help optimize my workouts?"
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
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">AI Fitness Coach</span>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:flex bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30">
              <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
              Instant AI Guidance
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section - Fitness Focused */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Your Personal AI Fitness Coach</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Transform Your Fitness with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              AI-Powered Guidance
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant, personalized workout advice, nutrition tips, and motivation from your AI fitness coach. 
            Click any question below to start your fitness journey.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold">Personalized Plans</h3>
                <p className="text-sm text-muted-foreground">Workouts tailored to your goals</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardContent className="p-4 text-center">
                <Brain className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold">Expert Knowledge</h3>
                <p className="text-sm text-muted-foreground">Science-backed fitness advice</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold">Instant Answers</h3>
                <p className="text-sm text-muted-foreground">No waiting, get help now</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Disclaimer - Condensed */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-800 dark:text-amber-300">
                <p className="font-semibold mb-1">Fitness Disclaimer</p>
                <p>This AI provides general fitness guidance only. Consult a healthcare provider before starting any new exercise program, especially if you have health conditions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Question Categories */}
        <div className="space-y-8">
          {fitnessCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <Card key={categoryIndex} className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/30">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription>Click any question for instant AI coaching</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.questions.map((question, questionIndex) => (
                      <Button
                        key={questionIndex}
                        onClick={() => askQuestion(question)}
                        variant="outline"
                        className="h-auto py-4 px-4 text-left justify-start whitespace-normal hover:shadow-md transition-all hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 group"
                      >
                        <div className="flex items-start gap-2 w-full">
                          <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500 group-hover:text-orange-600" />
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
        <Card className="mt-12 border-0 shadow-xl bg-gradient-to-br from-orange-500 to-red-500 text-white overflow-hidden">
          <CardContent className="p-8 text-center relative">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
            <div className="relative">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-3xl font-bold mb-4">Ready for a Deeper Consultation?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
                Get personalized workout plans, detailed nutrition advice, and comprehensive fitness coaching with our full AI consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100">
                  <Link href="/medical-advice">
                    <Brain className="w-5 h-5 mr-2" />
                    Full AI Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <Link href="/dashboard">
                    <Activity className="w-5 h-5 mr-2" />
                    View Fitness Dashboard
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Response Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 pr-8">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              AI Fitness Coach
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto space-y-4 py-4">
            {/* User Question */}
            <div className="flex justify-end">
              <div className="max-w-[85%] bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-4">
                <p className="text-sm">{currentQuestion}</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start">
              <div className="max-w-[85%] bg-muted rounded-lg p-4">
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">Your AI coach is thinking...</span>
                  </div>
                ) : error ? (
                  <div className="text-destructive">
                    <p className="font-semibold">Error</p>
                    <p className="text-sm">{error}</p>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {response}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t pt-4">
            <p className="text-xs text-muted-foreground text-center">
              ⚠️ This is AI-generated fitness guidance. Always consult healthcare professionals before starting new exercise programs.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
