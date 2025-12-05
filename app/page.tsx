"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Shield, Brain, Smartphone, Watch, Monitor, Activity, Users, Star, Key, Sparkles, Zap, Eye, Palette, Layers, Dumbbell, Flame, Apple, Target, Send, Loader2, ArrowRight, Moon, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [chatInput, setChatInput] = useState("")
  const [chatMessages, setChatMessages] = useState<{role: string, content: string}[]>([
    { role: "assistant", content: "Hey! 👋 I'm Strive, your AI fitness & wellness companion. Whether you need workout advice, nutrition tips, calorie tracking, or just some motivation — I've got your back. What can I help you with today?" }
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
    "Create a workout for me",
    "How many calories should I eat?",
    "Tips for staying motivated",
    "Best post-workout meal?"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">Strive</span>
                <span className="text-xs text-muted-foreground ml-1">by StriveSync</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/health-questions" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Fitness
              </Link>
              <Link href="#health" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Health
              </Link>
              <Link href="#platforms" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Platforms
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Fitness Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 via-background to-background dark:from-orange-950/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 dark:from-orange-900/30 dark:to-red-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800">
                <Zap className="w-3 h-3 mr-1" />
                Your AI Fitness Companion
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Meet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Strive
                </span>
                <br />
                <span className="text-3xl md:text-5xl text-muted-foreground">Your Body&apos;s Best Friend</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Like having a personal trainer, nutritionist, and wellness coach in your pocket. 
                Strive gives you real-time fitness advice, calorie tracking, workout plans, and the motivation to crush your goals.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl">
                  <Dumbbell className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Workouts</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl">
                  <Apple className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">1000+</div>
                  <div className="text-xs text-muted-foreground">Meal Plans</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
                  <Brain className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">AI Coach</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8" asChild>
                  <Link href="/health-questions">
                    <Dumbbell className="w-5 h-5 mr-2" />
                    Start Training
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="font-semibold px-8" asChild>
                  <Link href="/medical-advice">
                    <Brain className="w-5 h-5 mr-2" />
                    Chat with Strive
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right - Chat Interface */}
            <div className="relative">
              <div className="bg-card border-2 border-orange-200 dark:border-orange-800/50 rounded-2xl shadow-2xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="font-semibold flex items-center gap-2">
                      Strive
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </div>
                    <div className="text-sm text-white/80">Your AI Fitness Coach • Online</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 h-[280px] overflow-y-auto space-y-3 bg-muted/30">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                        msg.role === "user" 
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" 
                          : "bg-card border shadow-sm"
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-card border shadow-sm rounded-2xl px-4 py-2.5">
                        <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Prompts */}
                <div className="px-4 py-2 border-t flex gap-2 overflow-x-auto">
                  {quickPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => setChatInput(prompt)}
                      className="text-xs bg-orange-50 dark:bg-orange-950/30 hover:bg-orange-100 dark:hover:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-full px-3 py-1.5 text-orange-700 dark:text-orange-300 whitespace-nowrap transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t flex gap-2">
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleChat()}
                    placeholder="Ask Strive anything about fitness..."
                    className="flex-1"
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

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-3 shadow-lg hidden lg:block">
                <Flame className="w-5 h-5 mb-1" />
                <div className="text-xs font-bold">1,850 cal</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-3 shadow-lg hidden lg:block">
                <Target className="w-5 h-5 mb-1" />
                <div className="text-xs font-bold">On Track!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Categories Quick Access */}
      <section className="py-12 px-4 border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Dumbbell, label: "Workouts", color: "from-orange-500 to-red-500" },
              { icon: Flame, label: "Fat Burn", color: "from-red-500 to-pink-500" },
              { icon: Apple, label: "Nutrition", color: "from-green-500 to-emerald-500" },
              { icon: Brain, label: "Mind", color: "from-purple-500 to-indigo-500" },
              { icon: Moon, label: "Recovery", color: "from-blue-500 to-cyan-500" },
              { icon: TrendingUp, label: "Progress", color: "from-amber-500 to-orange-500" },
            ].map((item, i) => (
              <Link href="/health-questions" key={i}>
                <Card className="border-0 shadow-md hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Transition to Health Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-blue-50 dark:to-blue-950/20">
        <div className="container mx-auto text-center max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Complete Wellness Solution
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fitness is Just the Beginning
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Strive isn&apos;t just about workouts — it&apos;s your complete health companion. 
            Get guidance on symptoms, medications, preventive care, and more. 
            All powered by advanced AI, available 24/7.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" variant="outline" asChild>
              <Link href="/medical-advice">
                <Activity className="w-5 h-5 mr-2" />
                Health Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">
                <Monitor className="w-5 h-5 mr-2" />
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Health Features Section */}
      <section id="health" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Health Management</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets healthcare to provide you with personalized, reliable guidance and
              health monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-300 dark:border-orange-700 shadow-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>AI Fitness Coach</CardTitle>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">HOT</Badge>
                </div>
                <CardDescription>
                  Get personalized workout plans, calorie tracking, nutrition advice, and real-time motivation from Strive, your AI fitness companion.
                </CardDescription>
                <Button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" asChild>
                  <Link href="/health-questions">
                    Start Training →
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/50 shadow-xl bg-gradient-to-br from-primary/5 to-blue-500/5">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>Health Q&A</CardTitle>
                  <Badge className="bg-gradient-to-r from-primary to-blue-600">NEW</Badge>
                </div>
                <CardDescription>
                  Get instant answers to health questions about symptoms, medications, wellness, and preventive care. Educational purposes only.
                </CardDescription>
                <Button className="mt-4 w-full" asChild>
                  <Link href="/medical-advice">
                    Ask Questions →
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Health Monitoring</CardTitle>
                <CardDescription>
                  Track vital signs, symptoms, and health metrics with intelligent analysis and trend detection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your health data is encrypted and protected with enterprise-grade security and HIPAA compliance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Family Care</CardTitle>
                <CardDescription>
                  Manage health information for your entire family with shared access and coordinated care plans.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Expert Verified</CardTitle>
                <CardDescription>
                  All AI recommendations are based on current health guidelines and best practices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Demos Section */}
      <section id="platforms" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Everywhere You Are</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access your health companion on any device - web, mobile, or smartwatch. Seamless synchronization keeps
              your data up-to-date across all platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Web Platform */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Web Platform
                      <Badge variant="secondary" className="text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        Interactive
                      </Badge>
                    </CardTitle>
                    <CardDescription>Full-featured dashboard</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-6 mb-4">
                  <div className="bg-background rounded border p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                      <div className="h-2 bg-muted rounded w-1/2"></div>
                      <div className="h-8 bg-primary/10 rounded flex items-center px-2">
                        <div className="w-4 h-4 bg-primary rounded mr-2"></div>
                        <div className="h-1 bg-muted rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete health dashboard</li>
                  <li>• Advanced AI consultations</li>
                  <li>• Detailed health analytics</li>
                  <li>• Family account management</li>
                </ul>
                <div className="mt-6 text-center">
                  <Button size="lg" className="px-6" asChild>
                    <Link href="/demo/web">
                      Explore Web Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Platform */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Mobile App
                      <Badge variant="secondary" className="text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        Interactive
                      </Badge>
                    </CardTitle>
                    <CardDescription>Health on-the-go</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-6 mb-4 flex justify-center">
                  <div className="bg-background rounded-2xl border p-3 shadow-sm w-32">
                    <div className="bg-muted rounded-full w-8 h-1 mx-auto mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-muted rounded w-full"></div>
                      <div className="h-1.5 bg-muted rounded w-2/3"></div>
                      <div className="h-6 bg-primary/10 rounded flex items-center px-1 mt-3">
                        <div className="w-3 h-3 bg-primary rounded mr-1"></div>
                        <div className="h-0.5 bg-muted rounded flex-1"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-1 mt-2">
                        <div className="h-4 bg-muted/50 rounded"></div>
                        <div className="h-4 bg-muted/50 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quick symptom checker</li>
                  <li>• Medication reminders</li>
                  <li>• Emergency contacts</li>
                  <li>• Offline health records</li>
                </ul>
                <div className="mt-6 text-center">
                  <Button size="lg" className="px-6" asChild>
                    <Link href="/demo/mobile">
                      Explore Mobile Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Watch Platform */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Watch className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Smartwatch
                      <Badge variant="secondary" className="text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        Interactive
                      </Badge>
                    </CardTitle>
                    <CardDescription>Continuous monitoring</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-6 mb-4 flex justify-center">
                  <div className="bg-background rounded-xl border p-2 shadow-sm w-20 h-20 flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <div className="w-1 h-1 bg-muted rounded-full"></div>
                      <div className="text-xs font-mono">12:34</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-xs text-center">72 BPM</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time vital signs</li>
                  <li>• Activity tracking</li>
                  <li>• Health alerts</li>
                  <li>• Quick AI consultations</li>
                </ul>
                <div className="mt-6 text-center">
                  <Button size="lg" className="px-6" asChild>
                    <Link href="/demo/watch">
                      Explore Watch Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supercharge with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Already have AI assistants? Import your tokens and create the ultimate health intelligence network.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  Multi-AI Consensus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get second opinions from multiple AI models. OpenAI for reasoning, Claude for analysis, Gemini for multimodal processing.
                </p>
                <Badge variant="outline" className="text-xs">
                  <Zap className="w-3 h-3 mr-1" />
                  3x More Accurate
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Key className="w-4 h-4 text-white" />
                  </div>
                  Seamless Import
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Import API tokens from your existing AI tools. We support OpenAI, Anthropic, Google AI, and custom endpoints.
                </p>
                <Badge variant="outline" className="text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure & Encrypted
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  Enhanced Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Your AI gets smarter with health-specific training, medical knowledge graphs, and personalized learning.
                </p>
                <Badge variant="outline" className="text-xs">
                  <Brain className="w-3 h-3 mr-1" />
                  Learns Your Patterns
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <Link href="/ai-integration">
                <Key className="w-5 h-5 mr-2" />
                Import Your AI Tokens Now
                <Sparkles className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-background to-blue-50 dark:from-orange-950/10 dark:via-background dark:to-blue-950/10">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Join 50,000+ Health-Conscious Users</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Health & Fitness?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Meet Strive, your AI companion for fitness, nutrition, and complete wellness. 
              Start your journey to a healthier you today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" asChild>
              <Link href="/health-questions">
                <Dumbbell className="w-5 h-5 mr-2" />
                Start Free Today
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link href="/demo/mobile">
                <Eye className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">2 min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">AI Coach</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">Free</div>
              <div className="text-sm text-muted-foreground">To Start</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Strive</span>
                  <p className="text-xs text-muted-foreground">by StriveSync</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Your AI fitness & health companion for better wellness decisions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link href="/health-questions" className="hover:text-foreground transition-colors">Fitness Coach</Link></li>
                <li><Link href="/medical-advice" className="hover:text-foreground transition-colors">Health Chat</Link></li>
                <li><Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">HIPAA</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6 max-w-4xl mx-auto">
              <p className="text-sm text-amber-800 dark:text-amber-300 font-semibold mb-1">
                ⚠️ DISCLAIMER
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-400">
                Strive provides general fitness and health information for educational purposes only. It is NOT medical advice and does NOT create a doctor-patient relationship. 
                Always consult healthcare professionals before starting new exercise or diet programs. For emergencies, call 911.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">&copy; 2024 StriveSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
