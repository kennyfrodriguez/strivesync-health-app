import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Brain, Smartphone, Watch, Monitor, Activity, Users, Star, Key, Sparkles, Zap, Eye, Palette, Layers } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">StriveSync</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#platforms" className="text-muted-foreground hover:text-foreground transition-colors">
                Platforms
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>NEW: Get instant AI answers to 60+ health questions with one click!</span>
            <Link href="/health-questions" className="underline hover:no-underline ml-2">
              Try it now →
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Healthcare
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Your Personal <span className="text-primary">AI Health</span> Companion
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Get personalized medical advice, monitor your health metrics, and access reliable medical information with
            our advanced AI assistant. Available on web, mobile, and smartwatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90" asChild>
              <Link href="/health-questions">
                <Brain className="w-5 h-5 mr-2" />
                Ask AI Health Questions
              </Link>
            </Button>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/medical-advice">
                <Activity className="w-5 h-5 mr-2" />
                Full AI Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/demo/web">
                <Monitor className="w-5 h-5 mr-2" />
                View Interactive Demo
              </Link>
            </Button>
          </div>
          
          {/* AI Integration CTA */}
          <div className="mt-8 flex justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg" asChild>
              <Link href="/ai-integration">
                <Key className="w-4 h-4 mr-2" />
                Import Your AI Tokens
                <Sparkles className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Health Management</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets healthcare to provide you with personalized, reliable medical guidance and
              health monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/50 shadow-xl bg-gradient-to-br from-primary/5 to-blue-500/5">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>One-Click Health Questions</CardTitle>
                  <Badge className="bg-gradient-to-r from-primary to-blue-600">NEW</Badge>
                </div>
                <CardDescription>
                  Get instant answers to 60+ pre-formulated health questions covering all aspects of wellness, symptoms, medications, and emergency care.
                </CardDescription>
                <Button className="mt-4 w-full" asChild>
                  <Link href="/health-questions">
                    Try Now →
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI Medical Consultation</CardTitle>
                <CardDescription>
                  Have detailed conversations with our AI for personalized medical guidance and in-depth symptom analysis.
                </CardDescription>
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
                  All AI recommendations are validated by licensed healthcare professionals and medical experts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Round-the-clock access to health guidance and emergency support when you need it most.
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
                        <span className="ml-2">→</span>
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
                        <span className="ml-2">→</span>
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
                        <span className="ml-2">→</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Why UI Beats AI Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
              <Sparkles className="w-4 h-4 mr-2" />
              The Perfect Synergy
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Intelligent UI</span> Beats Pure AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While AI provides the intelligence, our thoughtfully designed interface transforms complex health data into 
              intuitive, actionable insights that reduce anxiety and improve outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visual Health Context</h3>
                  <p className="text-muted-foreground">
                    Charts, trends, and color-coded indicators provide instant understanding that pure text cannot match. 
                    Your brain processes visual information 60,000x faster than text.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Instant Action</h3>
                  <p className="text-muted-foreground">
                    One-tap emergency calls, medication reminders, and health tracking. No need to describe what you want - 
                    just tap and it's done.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Emotional Design</h3>
                  <p className="text-muted-foreground">
                    Calming colors, smooth animations, and intuitive layouts reduce health anxiety. 
                    Good design literally lowers stress hormones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Modal Intelligence</h3>
                  <p className="text-muted-foreground">
                    Voice, touch, camera, and sensors work together seamlessly. The interface adapts to your preferred 
                    interaction method in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-2xl border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg">Health Overview</h4>
                    <Badge className="bg-green-500">Excellent</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="font-medium">Heart</span>
                      </div>
                      <div className="text-2xl font-bold text-red-600">72</div>
                      <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                        <div className="bg-red-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">Steps</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">8.5K</div>
                      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-purple-500" />
                      <span className="font-medium">AI Insight</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your sleep quality improved 15% this week. Great job maintaining your bedtime routine! 🌙
                    </p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-blue-600">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Personalized Recommendations
                  </Button>
                </div>
              </div>
              
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/10 dark:to-orange-950/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                  <Brain className="w-6 h-6" />
                  Pure AI Chatbot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Text-only responses require interpretation
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  No visual context for complex health data
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Requires typing detailed questions
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Can increase anxiety with medical jargon
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  No emergency action buttons
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <Sparkles className="w-6 h-6" />
                  StriveSync AI + UI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Visual charts show trends instantly
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Color-coded health indicators reduce confusion
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  One-tap actions for common tasks
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Calming design reduces health anxiety
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Emergency SOS with location sharing
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced AI Integration Section */}
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
            <p className="text-sm text-muted-foreground mt-4">
              Free setup • 2-minute integration • Works with existing AI subscriptions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/50 dark:from-primary/5 dark:via-blue-950/10 dark:to-purple-950/10">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Join 50,000+ Health-Conscious Users</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the perfect fusion of AI intelligence and intuitive design. 
              Start your journey to better health outcomes today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              <Activity className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent hover:bg-muted/50" asChild>
              <Link href="/demo/mobile">
                <Eye className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2 min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">HIPAA</div>
              <div className="text-sm text-muted-foreground">Compliant</div>
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
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">StriveSync</span>
              </div>
              <p className="text-muted-foreground">Your trusted AI health companion for better healthcare decisions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    HIPAA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 StriveSync. All rights reserved. This is a demo application.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
