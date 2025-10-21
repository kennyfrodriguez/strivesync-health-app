"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Smartphone, 
  Watch, 
  Monitor, 
  Heart, 
  Activity, 
  MessageCircle, 
  Bell, 
  Camera,
  Mic,
  MapPin,
  Zap,
  Brain,
  Shield,
  Sparkles
} from "lucide-react"

interface MobileDemoModalProps {
  platform: "mobile" | "watch" | "web"
  children: React.ReactNode
}

export function MobileDemoModal({ platform, children }: MobileDemoModalProps) {
  const [activeDemo, setActiveDemo] = useState("home")

  const platformConfig = {
    mobile: {
      title: "Mobile App Experience",
      icon: Smartphone,
      width: "w-[320px]",
      height: "h-[640px]",
      demos: {
        home: "AI Health Hub",
        chat: "Smart Consultation",
        vitals: "Live Monitoring",
        emergency: "Emergency Mode"
      }
    },
    watch: {
      title: "Smartwatch Interface",
      icon: Watch,
      width: "w-[240px]",
      height: "h-[240px]",
      demos: {
        home: "Quick Stats",
        alerts: "Health Alerts",
        vitals: "Heart Monitor",
        sos: "Emergency SOS"
      }
    },
    web: {
      title: "Web Dashboard",
      icon: Monitor,
      width: "w-full max-w-3xl",
      height: "h-[480px]",
      demos: {
        dashboard: "Analytics Hub",
        ai: "AI Insights",
        family: "Family Care",
        reports: "Health Reports"
      }
    }
  }

  const config = platformConfig[platform]
  const IconComponent = config.icon

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-hidden flex flex-col p-6">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex flex-wrap items-center gap-3 text-2xl">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <IconComponent className="w-7 h-7 text-primary" />
            </div>
            <span className="font-bold">{config.title}</span>
            <Badge variant="secondary" className="ml-auto">
              <Sparkles className="w-4 h-4 mr-1" />
              Interactive Demo
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-8 mt-8 flex-1 overflow-y-auto">
          {/* Demo Device - Now takes up more space */}
          <div className="lg:col-span-2 flex justify-center items-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl">
            <div className={`${config.width} ${config.height} relative transform scale-110 lg:scale-125`}>
              {platform === "mobile" && <MobileDemo activeDemo={activeDemo} />}
              {platform === "watch" && <WatchDemo activeDemo={activeDemo} />}
              {platform === "web" && <WebDemo activeDemo={activeDemo} />}
            </div>
          </div>

          {/* Controls & Features - Sidebar */}
          <div className="space-y-6 overflow-y-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Interactive Features</h3>
              <Tabs value={activeDemo} onValueChange={setActiveDemo}>
                <TabsList className="grid grid-cols-2 w-full h-auto p-1">
                  {Object.entries(config.demos).map(([key, label]) => (
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
                <div className="p-4 bg-muted/50 rounded-lg border border-muted">
                  <div className="text-base font-semibold mb-1">Multi-Modal</div>
                  <div className="text-sm text-muted-foreground">Voice, touch, camera, sensors combined</div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border border-muted">
                  <div className="text-base font-semibold mb-1">Emotional Design</div>
                  <div className="text-sm text-muted-foreground">Calming colors, intuitive flows</div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </DialogContent>
    </Dialog>
  )
}

function MobileDemo({ activeDemo }: { activeDemo: string }) {
  return (
    <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
      <div className="bg-white dark:bg-gray-900 rounded-[2rem] h-full overflow-hidden relative">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 py-2 text-xs bg-gray-50 dark:bg-gray-800">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
            <span>100%</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 h-full">
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

function WatchDemo({ activeDemo }: { activeDemo: string }) {
  return (
    <div className="w-48 h-48 bg-black rounded-full p-4 shadow-2xl">
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

function WebDemo({ activeDemo }: { activeDemo: string }) {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg border shadow-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-muted-foreground ml-2">strivesync.health/dashboard</div>
      </div>
      
      <div className="p-4 h-full">
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