"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Heart, 
  Brain, 
  Dumbbell, 
  Flame,
  Moon,
  Apple,
  Activity,
  Zap,
  Target,
  TrendingUp,
  Sparkles,
  Send,
  ArrowRight,
  Play,
  ChevronRight,
  User,
  Loader2
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [chatInput, setChatInput] = useState("")
  const [chatMessages, setChatMessages] = useState<{role: string, content: string}[]>([
    { role: "assistant", content: "Hey! I'm Strive, your AI fitness companion. 💪 Ask me anything about workouts, nutrition, calories, or mental wellness. I'm here to help you crush your goals!" }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleChat = async () => {
    if (!chatInput.trim() || isLoading) return
    
    const userMessage = chatInput.trim()
    setChatMessages(prev => [...prev, { role: "user", content: userMessage }])
    setChatInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/medical-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: userMessage }],
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setChatMessages(prev => [...prev, { role: "assistant", content: data.content }])
      }
    } catch {
      // Silently fail
    } finally {
      setIsLoading(false)
    }
  }

  const quickPrompts = [
    "How many calories should I eat to lose weight?",
    "Give me a quick 15-min home workout",
    "What should I eat after a workout?",
    "Help me stay motivated today"
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/5 backdrop-blur-xl bg-black/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">Strive</span>
                <p className="text-xs text-white/50">AI Fitness Coach</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/health-questions" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                Workouts
              </Link>
              <Link href="/health-questions" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                Nutrition
              </Link>
              <Link href="/dashboard" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                Dashboard
              </Link>
              <Button size="sm" className="bg-white text-black hover:bg-white/90 font-semibold">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-white/70">Your AI fitness friend is online</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                Meet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                  Strive
                </span>
                <br />
                <span className="text-white/90">Your Body's</span>
                <br />
                <span className="text-white/70">Best Friend</span>
              </h1>

              <p className="text-xl text-white/60 max-w-lg leading-relaxed">
                Like having a personal trainer, nutritionist, and wellness coach in your pocket. 
                Strive understands your goals and guides you with real-time, personalized advice.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 h-14 text-lg" asChild>
                  <Link href="/health-questions">
                    <Play className="w-5 h-5 mr-2" />
                    Start Training
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 h-14 text-lg" asChild>
                  <Link href="/medical-advice">
                    <Brain className="w-5 h-5 mr-2" />
                    Chat with Strive
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-12 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-orange-400">50K+</div>
                  <div className="text-sm text-white/50">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">2M+</div>
                  <div className="text-sm text-white/50">Workouts Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">4.9★</div>
                  <div className="text-sm text-white/50">User Rating</div>
                </div>
              </div>
            </div>

            {/* Right - Interactive Chat Preview */}
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full border border-white/5" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-orange-500/20" />
                <div className="absolute w-[300px] h-[300px] rounded-full border border-red-500/20" />
              </div>

              {/* Chat Interface */}
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl">
                {/* Chat Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      Strive
                      <Badge className="bg-green-500/20 text-green-400 text-xs">Online</Badge>
                    </div>
                    <div className="text-xs text-white/50">Your AI Fitness Coach</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-4 h-[300px] overflow-y-auto mb-4 pr-2">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        msg.role === "user" 
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" 
                          : "bg-white/10 text-white/90"
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/10 rounded-2xl px-4 py-3">
                        <Loader2 className="w-5 h-5 animate-spin text-orange-400" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Prompts */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => setChatInput(prompt)}
                      className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-white/70 hover:text-white transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleChat()}
                    placeholder="Ask Strive anything..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-orange-500"
                  />
                  <Button 
                    onClick={handleChat}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 shadow-xl animate-float">
                <Apple className="w-6 h-6 text-white mb-1" />
                <div className="text-xs font-semibold">1,850 cal</div>
                <div className="text-[10px] text-white/70">Daily Goal</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl animate-float-delayed">
                <Moon className="w-6 h-6 text-white mb-1" />
                <div className="text-xs font-semibold">7.5 hrs</div>
                <div className="text-[10px] text-white/70">Sleep Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Focus Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-white/5 text-white/70 border-white/10 mb-4">
              <Target className="w-3 h-3 mr-1" />
              Personalized Training
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Train Every Part of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">You</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Strive understands your body and mind. Get targeted advice for any muscle group, dietary need, or mental challenge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Dumbbell, label: "Strength", color: "from-orange-500 to-red-500", desc: "Build muscle & power" },
              { icon: Flame, label: "Fat Burn", color: "from-red-500 to-pink-500", desc: "Torch calories fast" },
              { icon: Heart, label: "Cardio", color: "from-pink-500 to-purple-500", desc: "Heart health focus" },
              { icon: Brain, label: "Mind", color: "from-purple-500 to-indigo-500", desc: "Mental strength" },
              { icon: Apple, label: "Nutrition", color: "from-green-500 to-emerald-500", desc: "Fuel your body" },
              { icon: Moon, label: "Recovery", color: "from-blue-500 to-cyan-500", desc: "Rest & restore" },
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-xs text-white/50">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calorie Tracking */}
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-green-500/20 overflow-hidden group hover:border-green-500/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="bg-green-500/20 text-green-400 mb-3">Nutrition AI</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">Smart Calorie Tracking</h3>
                    <p className="text-white/60">Strive calculates your perfect calorie intake based on your goals, activity level, and body composition.</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Apple className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Calorie Ring Visualization */}
                <div className="flex items-center gap-8 mt-8">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="40" stroke="url(#gradient)" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white">1,420</span>
                      <span className="text-xs text-white/50">of 2,000</span>
                    </div>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/70">Protein</span>
                      <span className="text-sm font-medium text-white">85g / 120g</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/70">Carbs</span>
                      <span className="text-sm font-medium text-white">180g / 250g</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mental Strength */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="bg-purple-500/20 text-purple-400 mb-3">Mindset Coach</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">Mental Strength Training</h3>
                    <p className="text-white/60">Your mind is your strongest muscle. Strive helps you build resilience, focus, and motivation.</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: "Focus Score", value: "92%", icon: Target },
                    { label: "Motivation", value: "High", icon: TrendingUp },
                    { label: "Stress Level", value: "Low", icon: Activity },
                    { label: "Mindfulness", value: "45 min", icon: Moon },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4">
                      <stat.icon className="w-5 h-5 text-purple-400 mb-2" />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workout Preview */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Workouts That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Adapt to You</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Whether you have 10 minutes or an hour, Strive creates the perfect workout for your schedule and energy level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quick Burn", duration: "15 min", calories: "180", level: "Beginner", color: "from-orange-500 to-red-500" },
              { title: "Full Body Power", duration: "45 min", calories: "450", level: "Intermediate", color: "from-red-500 to-pink-500" },
              { title: "HIIT Extreme", duration: "30 min", calories: "380", level: "Advanced", color: "from-pink-500 to-purple-500" },
            ].map((workout, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:border-white/20 transition-all group cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-br ${workout.color} flex items-center justify-center`}>
                    <Dumbbell className="w-12 h-12 text-white/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-white text-lg">{workout.title}</h3>
                      <Badge className="bg-white/10 text-white/70">{workout.level}</Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-white/50">
                      <span className="flex items-center gap-1">
                        <Activity className="w-4 h-4" />
                        {workout.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        {workout.calories} cal
                      </span>
                    </div>
                    <Button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white" asChild>
                      <Link href="/health-questions">
                        Start Workout
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-3xl border border-white/10 p-12 md:p-16 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-8">
                <Zap className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Meet Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Fitness Best Friend?
                </span>
              </h2>
              
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                Join thousands who've transformed their health with Strive. 
                Your personalized AI coach is waiting to help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 h-14 text-lg" asChild>
                  <Link href="/health-questions">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Free Today
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 h-14 text-lg" asChild>
                  <Link href="/medical-advice">
                    Talk to Strive
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Strive</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-white/50">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-white/30 max-w-2xl mx-auto">
              ⚠️ Strive provides general fitness and wellness guidance only. Not medical advice. 
              Consult healthcare professionals before starting new exercise or diet programs.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  )
}
