"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Monitor, 
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

export default function WebDemoPage() {
  const [activeDemo, setActiveDemo] = useState("dashboard")

  const demos = {
    dashboard: "Analytics Hub",
    ai: "AI Insights",
    family: "Family Care",
    reports: "Health Reports"
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
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold">Web Dashboard Demo</span>
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
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 shadow-lg">
              <div className="w-full max-w-4xl mx-auto">
                <WebDemo activeDemo={activeDemo} />
              </div>
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

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Why UI Beats Pure AI</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="p-4 bg-muted/50 rounded-lg border border-muted">
                  <div className="text-base font-semibold mb-1">Visual Context</div>
                  <div className="text-sm text-muted-foreground">Charts, trends, and patterns at a glance</div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border border-muted">
                  <div className="text-base font-semibold mb-1">Instant Action</div>
                  <div className="text-sm text-muted-foreground">One-tap emergency, medication, tracking</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/demo/mobile">
                <Button variant="outline" className="w-full">
                  Try Mobile Demo →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WebDemo({ activeDemo }: { activeDemo: string }) {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-lg border shadow-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-muted-foreground ml-2">strivesync.health/dashboard</div>
      </div>
      
      <div className="p-6 min-h-[500px]">
        {activeDemo === "dashboard" && <WebDashboardDemo />}
        {activeDemo === "ai" && <WebAIDemo />}
        {activeDemo === "family" && <WebFamilyDemo />}
        {activeDemo === "reports" && <WebReportsDemo />}
      </div>
    </div>
  )
}

function WebDashboardDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Health Analytics</h3>
        <Badge variant="secondary">Live Data</Badge>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
          <Heart className="w-5 h-5 text-red-500 mb-1" />
          <div className="text-lg font-bold">72</div>
          <div className="text-xs text-muted-foreground">Heart Rate</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
          <Activity className="w-5 h-5 text-blue-500 mb-1" />
          <div className="text-lg font-bold">8.5K</div>
          <div className="text-xs text-muted-foreground">Steps</div>
        </div>
        <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
          <Brain className="w-5 h-5 text-green-500 mb-1" />
          <div className="text-lg font-bold">94</div>
          <div className="text-xs text-muted-foreground">AI Score</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span className="text-sm font-medium">AI Insights</span>
        </div>
        <p className="text-xs text-muted-foreground">Your health patterns suggest optimal recovery. Consider increasing cardio intensity by 10%.</p>
      </div>
    </div>
  )
}

function WebAIDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
          <Brain className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-medium">AI Health Assistant</div>
          <div className="text-xs text-green-500">Analyzing your data...</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-muted/50 p-3 rounded-lg text-sm">
          I've detected an improvement in your sleep quality. Your REM cycles are 23% more consistent this week.
        </div>
        <div className="bg-primary text-primary-foreground p-3 rounded-lg text-sm ml-auto max-w-[80%]">
          What's causing the improvement?
        </div>
        <div className="bg-muted/50 p-3 rounded-lg text-sm">
          Analysis shows correlation with your new evening routine and reduced screen time after 9 PM.
        </div>
      </div>
    </div>
  )
}

function WebFamilyDemo() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Family Health Overview</h3>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">A</div>
            <div>
              <div className="text-sm font-medium">Alex (You)</div>
              <div className="text-xs text-muted-foreground">All metrics normal</div>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">Excellent</Badge>
        </div>

        <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">S</div>
            <div>
              <div className="text-sm font-medium">Sarah</div>
              <div className="text-xs text-muted-foreground">Medication reminder due</div>
            </div>
          </div>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Attention</Badge>
        </div>
      </div>
    </div>
  )
}

function WebReportsDemo() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Health Reports</h3>
      
      <div className="space-y-2">
        <div className="p-3 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Weekly Health Summary</span>
            <Badge variant="outline">Ready</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Comprehensive analysis of your health metrics and AI recommendations</p>
        </div>

        <div className="p-3 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Sleep Analysis Report</span>
            <Badge variant="outline">Generating</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Deep dive into your sleep patterns and optimization suggestions</p>
        </div>
      </div>
    </div>
  )
}

