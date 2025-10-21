"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Watch,
  Heart, 
  Activity, 
  MessageCircle, 
  Bell,
  Brain,
  Shield,
  Sparkles,
  Zap,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function WatchDemoPage() {
  const [activeDemo, setActiveDemo] = useState("home")

  const demos = {
    home: "Quick Stats",
    alerts: "Health Alerts",
    vitals: "Heart Monitor",
    sos: "Emergency SOS"
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
                  <Watch className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold">Smartwatch Demo</span>
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
          <div className="lg:col-span-2 flex justify-center items-center">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl p-16 shadow-lg">
              <WatchDemo activeDemo={activeDemo} />
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
              <Link href="/demo/mobile">
                <Button variant="outline" className="w-full">
                  Try Mobile Demo →
                </Button>
              </Link>
              <Link href="/demo/web">
                <Button variant="outline" className="w-full">
                  Try Web Demo →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WatchDemo({ activeDemo }: { activeDemo: string }) {
  return (
    <div className="w-64 h-64 bg-black rounded-full p-6 shadow-2xl">
      <div className="w-full h-full bg-gray-900 rounded-full relative overflow-hidden">
        {activeDemo === "home" && <WatchHomeDemo />}
        {activeDemo === "alerts" && <WatchAlertsDemo />}
        {activeDemo === "vitals" && <WatchVitalsDemo />}
        {activeDemo === "sos" && <WatchSOSDemo />}
      </div>
    </div>
  )
}

function WatchHomeDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="text-xs mb-2">12:34</div>
      <div className="w-16 h-16 border-4 border-green-500 rounded-full flex items-center justify-center mb-2">
        <Heart className="w-6 h-6 text-green-500" />
      </div>
      <div className="text-lg font-bold">72</div>
      <div className="text-xs text-gray-400">BPM</div>
    </div>
  )
}

function WatchAlertsDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <Bell className="w-8 h-8 text-yellow-500 mb-2 animate-bounce" />
      <div className="text-xs mb-1">Medication</div>
      <div className="text-xs text-gray-400">Take evening pills</div>
      <div className="flex gap-2 mt-2">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
      </div>
    </div>
  )
}

function WatchVitalsDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="w-20 h-20 relative">
        <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 border-2 border-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-xs mt-2 text-gray-400">Monitoring...</div>
    </div>
  )
}

function WatchSOSDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse mb-2">
        <span className="text-white text-sm font-bold">SOS</span>
      </div>
      <div className="text-xs text-red-400">Emergency</div>
      <div className="text-xs text-gray-400 mt-1">Hold to call</div>
    </div>
  )
}

