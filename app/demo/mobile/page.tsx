"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Smartphone,
  Heart, 
  Activity, 
  MessageCircle, 
  Bell,
  Camera,
  Mic,
  MapPin,
  Brain,
  Shield,
  Sparkles,
  Zap,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function MobileDemoPage() {
  const [activeDemo, setActiveDemo] = useState("home")

  const demos = {
    home: "AI Health Hub",
    chat: "Smart Consultation",
    vitals: "Live Monitoring",
    emergency: "Emergency Mode"
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
                Back to Home
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold">Mobile App Demo</span>
              </div>
            </div>
            <Badge variant="secondary">
              <Sparkles className="w-4 h-4 mr-1" />
              Interactive Demo
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Display - Main Area */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl p-12 shadow-lg">
              <MobileDemo activeDemo={activeDemo} />
            </div>
          </div>

          {/* Controls & Features - Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Interactive Features</h3>
              <Tabs value={activeDemo} onValueChange={setActiveDemo}>
                <TabsList className="grid grid-cols-2 w-full h-auto p-1">
                  {Object.entries(demos).map(([key, label]) => (
                    <TabsTrigger key={key} value={key} className="text-sm py-3 px-4">
                      {label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-blue-50 dark:to-blue-950/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-primary" />
                  AI-Powered Intelligence
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time health analysis with predictive insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Privacy-first AI that learns your patterns securely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Natural conversation with medical-grade accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Proactive health alerts before symptoms appear</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Link href="/demo/web">
                <Button variant="outline" className="w-full">
                  Try Web Demo →
                </Button>
              </Link>
              <Link href="/demo/watch">
                <Button variant="outline" className="w-full">
                  Try Watch Demo →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileDemo({ activeDemo }: { activeDemo: string }) {
  return (
    <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl w-[340px]">
      <div className="bg-white dark:bg-gray-900 rounded-[2rem] h-[680px] overflow-hidden relative">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 py-2 text-xs bg-gray-50 dark:bg-gray-800">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
            <span>100%</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 h-full overflow-y-auto">
          {activeDemo === "home" && <MobileHomeDemo />}
          {activeDemo === "chat" && <MobileChatDemo />}
          {activeDemo === "vitals" && <MobileVitalsDemo />}
          {activeDemo === "emergency" && <MobileEmergencyDemo />}
        </div>
      </div>
    </div>
  )
}

function MobileHomeDemo() {
  return (
    <div className="space-y-4">
      <div className="text-center py-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-bold">Good Morning, Alex</h2>
        <p className="text-sm text-muted-foreground">Your health looks great today</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xl">
          <Heart className="w-6 h-6 text-red-500 mb-2" />
          <div className="text-lg font-bold">72</div>
          <div className="text-xs text-muted-foreground">BPM</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-xl">
          <Activity className="w-6 h-6 text-blue-500 mb-2" />
          <div className="text-lg font-bold">8.5K</div>
          <div className="text-xs text-muted-foreground">Steps</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-xl">
        <div className="flex items-center gap-3 mb-2">
          <Brain className="w-5 h-5 text-purple-500" />
          <span className="font-medium">AI Health Insight</span>
        </div>
        <p className="text-sm text-muted-foreground">Your sleep quality improved 15% this week. Consider maintaining your current bedtime routine.</p>
      </div>

      <Button className="w-full bg-gradient-to-r from-primary to-blue-600">
        <MessageCircle className="w-4 h-4 mr-2" />
        Ask Your AI Health Assistant
      </Button>
    </div>
  )
}

function MobileChatDemo() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 pb-4 border-b">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-medium">Dr. StriveSync AI</div>
          <div className="text-xs text-green-500 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Online & Learning
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-3 py-4 overflow-y-auto">
        <div className="bg-muted/50 p-3 rounded-2xl rounded-bl-md max-w-[80%]">
          <p className="text-sm">I've analyzed your recent vitals. Your heart rate variability suggests excellent recovery from yesterday's workout. How are you feeling?</p>
        </div>
        
        <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-br-md max-w-[80%] ml-auto">
          <p className="text-sm">Feeling great! Any suggestions for today?</p>
        </div>

        <div className="bg-muted/50 p-3 rounded-2xl rounded-bl-md max-w-[80%]">
          <p className="text-sm">Based on your sleep data and stress levels, I recommend a 20-minute meditation session. I can guide you through it.</p>
          <div className="flex gap-2 mt-2">
            <Button size="sm" variant="secondary" className="text-xs">Start Meditation</Button>
            <Button size="sm" variant="outline" className="text-xs">Maybe Later</Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t">
        <Button size="sm" variant="outline" className="p-2">
          <Camera className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" className="p-2">
          <Mic className="w-4 h-4" />
        </Button>
        <div className="flex-1 bg-muted rounded-full px-3 py-2 text-sm text-muted-foreground">
          Ask anything about your health...
        </div>
      </div>
    </div>
  )
}

function MobileVitalsDemo() {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-bold mb-2">Live Health Monitoring</h3>
        <Badge variant="secondary" className="bg-green-100 text-green-700">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          All Systems Normal
        </Badge>
      </div>

      <div className="space-y-3">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-4 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="font-medium">Heart Rate</span>
            </div>
            <span className="text-2xl font-bold text-red-600">72</span>
          </div>
          <div className="w-full bg-red-200 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full w-3/4 animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Resting • Normal range</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-4 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Blood Oxygen</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">98%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-[98%]"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Excellent • Above average</p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-purple-500" />
            <span className="font-medium">AI Health Score</span>
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-1">94/100</div>
          <p className="text-xs text-muted-foreground">Excellent health trajectory</p>
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600">
        <Zap className="w-4 h-4 mr-2" />
        Get AI Health Insights
      </Button>
    </div>
  )
}

function MobileEmergencyDemo() {
  return (
    <div className="space-y-4 text-center">
      <div className="w-20 h-20 bg-red-500 rounded-full mx-auto flex items-center justify-center animate-pulse">
        <span className="text-white text-2xl font-bold">SOS</span>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-red-600 mb-2">Emergency Mode Active</h3>
        <p className="text-sm text-muted-foreground">AI detected potential emergency situation</p>
      </div>

      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xl border border-red-200">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium">Location Shared</span>
        </div>
        <p className="text-xs text-muted-foreground">Emergency contacts notified with your precise location</p>
      </div>

      <div className="space-y-2">
        <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
          Call 911 Now
        </Button>
        <Button variant="outline" className="w-full border-red-200">
          Contact Emergency Contact
        </Button>
        <Button variant="ghost" className="w-full text-red-600">
          False Alarm - Cancel
        </Button>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg">
        <p className="text-xs text-amber-700 dark:text-amber-300">
          AI is monitoring your vitals and will automatically escalate if needed
        </p>
      </div>
    </div>
  )
}

