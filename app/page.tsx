import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Brain, Smartphone, Watch, Monitor, Activity, Users, Star } from "lucide-react"
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
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/medical-advice">
                <Activity className="w-5 h-5 mr-2" />
                Start Health Check
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Monitor className="w-5 h-5 mr-2" />
              View Demo
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
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI Medical Advice</CardTitle>
                <CardDescription>
                  Get instant, personalized medical guidance powered by advanced AI algorithms trained on medical
                  literature.
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
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Web Platform</CardTitle>
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
              </CardContent>
            </Card>

            {/* Mobile Platform */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Mobile App</CardTitle>
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
              </CardContent>
            </Card>

            {/* Watch Platform */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Watch className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Smartwatch</CardTitle>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who trust StriveSync for their health management. Start your journey to better
            health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Schedule Demo
            </Button>
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
