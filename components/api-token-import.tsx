"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Key, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Brain, 
  Zap, 
  Shield, 
  Sparkles,
  Download,
  Copy,
  Eye,
  EyeOff,
  RefreshCw
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface APITokenImportProps {
  children: React.ReactNode
}

export function APITokenImport({ children }: APITokenImportProps) {
  const [activeTab, setActiveTab] = useState("import")
  const [showTokens, setShowTokens] = useState(false)
  const [importMethod, setImportMethod] = useState("manual")
  const [tokens, setTokens] = useState({
    openai: "",
    anthropic: "",
    google: "",
    custom: ""
  })
  const [isImporting, setIsImporting] = useState(false)
  const { toast } = useToast()

  const aiProviders = [
    {
      id: "openai",
      name: "OpenAI",
      description: "GPT-4, GPT-3.5 Turbo for medical consultations",
      icon: "🤖",
      status: tokens.openai ? "connected" : "disconnected",
      capabilities: ["Medical Q&A", "Symptom Analysis", "Health Insights"]
    },
    {
      id: "anthropic",
      name: "Anthropic Claude",
      description: "Advanced reasoning for complex health scenarios",
      icon: "🧠",
      status: tokens.anthropic ? "connected" : "disconnected",
      capabilities: ["Complex Diagnosis", "Treatment Planning", "Research Analysis"]
    },
    {
      id: "google",
      name: "Google AI",
      description: "Gemini for multimodal health analysis",
      icon: "🔍",
      status: tokens.google ? "connected" : "disconnected",
      capabilities: ["Image Analysis", "Lab Results", "Medical Imaging"]
    },
    {
      id: "custom",
      name: "Custom AI",
      description: "Your existing AI assistant integration",
      icon: "⚡",
      status: tokens.custom ? "connected" : "disconnected",
      capabilities: ["Personalized", "Domain-Specific", "Custom Training"]
    }
  ]

  const handleTokenImport = async () => {
    setIsImporting(true)
    
    // Simulate API token validation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Tokens Imported Successfully!",
      description: "Your AI assistants are now integrated with StriveSync.",
    })
    
    setIsImporting(false)
  }

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const config = JSON.parse(e.target?.result as string)
          setTokens(prev => ({ ...prev, ...config }))
          toast({
            title: "Configuration Imported",
            description: "AI tokens loaded from configuration file.",
          })
        } catch (error) {
          toast({
            title: "Import Error",
            description: "Invalid configuration file format.",
            variant: "destructive"
          })
        }
      }
      reader.readAsText(file)
    }
  }

  const exportConfig = () => {
    const config = {
      ...tokens,
      exportDate: new Date().toISOString(),
      version: "1.0"
    }
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'strivesync-ai-config.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[98vw] h-[95vh] max-w-none overflow-y-auto">
        <div className="p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Key className="w-6 h-6 text-white" />
            </div>
            AI Assistant Integration
            <Badge variant="secondary" className="ml-auto">
              <Sparkles className="w-4 h-4 mr-1" />
              Enhanced Intelligence
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="import">Import Tokens</TabsTrigger>
            <TabsTrigger value="providers">AI Providers</TabsTrigger>
            <TabsTrigger value="benefits">Why Integrate?</TabsTrigger>
          </TabsList>

          <TabsContent value="import" className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-blue-500" />
                  Import Your AI Tokens
                </CardTitle>
                <CardDescription>
                  Seamlessly integrate your existing AI assistants with StriveSync for enhanced health intelligence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Label htmlFor="import-method">Import Method:</Label>
                  <Select value={importMethod} onValueChange={setImportMethod}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manual">Manual Entry</SelectItem>
                      <SelectItem value="file">Configuration File</SelectItem>
                      <SelectItem value="env">Environment Variables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {importMethod === "manual" && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {aiProviders.map((provider) => (
                      <div key={provider.id} className="space-y-2">
                        <Label htmlFor={provider.id} className="flex items-center gap-2">
                          <span className="text-lg">{provider.icon}</span>
                          {provider.name} API Key
                        </Label>
                        <div className="relative">
                          <Input
                            id={provider.id}
                            type={showTokens ? "text" : "password"}
                            placeholder={`Enter ${provider.name} API key...`}
                            value={tokens[provider.id as keyof typeof tokens]}
                            onChange={(e) => setTokens(prev => ({ ...prev, [provider.id]: e.target.value }))}
                            className="pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowTokens(!showTokens)}
                          >
                            {showTokens ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {importMethod === "file" && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Upload Configuration File</p>
                        <p className="text-xs text-muted-foreground">JSON file with your AI API tokens</p>
                        <Input
                          type="file"
                          accept=".json"
                          onChange={handleFileImport}
                          className="max-w-xs mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {importMethod === "env" && (
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Environment Variables</h4>
                      <Textarea
                        placeholder="OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_AI_KEY=AIza...
CUSTOM_AI_ENDPOINT=https://..."
                        className="font-mono text-sm"
                        rows={6}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={exportConfig}>
                      <Download className="w-4 h-4 mr-2" />
                      Export Config
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Tokens
                    </Button>
                  </div>
                  <Button 
                    onClick={handleTokenImport} 
                    disabled={isImporting}
                    className="bg-gradient-to-r from-blue-500 to-purple-600"
                  >
                    {isImporting ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Importing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Import & Activate
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="providers" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {aiProviders.map((provider) => (
                <Card key={provider.id} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{provider.icon}</span>
                        <div>
                          <CardTitle className="text-lg">{provider.name}</CardTitle>
                          <CardDescription>{provider.description}</CardDescription>
                        </div>
                      </div>
                      <Badge 
                        variant={provider.status === "connected" ? "default" : "secondary"}
                        className={provider.status === "connected" ? "bg-green-500" : ""}
                      >
                        {provider.status === "connected" ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertCircle className="w-3 h-3 mr-1" />
                        )}
                        {provider.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Capabilities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {provider.capabilities.map((capability) => (
                          <Badge key={capability} variant="outline" className="text-xs">
                            {capability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-green-500" />
                    Enhanced Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Multi-AI Consensus</p>
                      <p className="text-xs text-muted-foreground">Get opinions from multiple AI models for more accurate health insights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Specialized Expertise</p>
                      <p className="text-xs text-muted-foreground">Each AI brings unique strengths - reasoning, analysis, multimodal processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Redundancy & Reliability</p>
                      <p className="text-xs text-muted-foreground">Backup AI systems ensure continuous health monitoring</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-6 h-6 text-purple-500" />
                    Why UI > Pure AI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Visual Health Context</p>
                    <p className="text-xs text-muted-foreground">Charts, trends, and patterns provide instant understanding that text cannot match</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Emotional Design</p>
                    <p className="text-xs text-muted-foreground">Calming colors, intuitive layouts reduce health anxiety and improve user experience</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Multi-Modal Interaction</p>
                    <p className="text-xs text-muted-foreground">Voice, touch, camera, sensors work together for comprehensive health monitoring</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Instant Action</p>
                    <p className="text-xs text-muted-foreground">One-tap emergency calls, medication tracking, appointment scheduling</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader>
                <CardTitle>The Perfect Synergy: AI + UI</CardTitle>
                <CardDescription>
                  StriveSync combines the intelligence of AI with the intuition of great design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium mb-2">AI Processes</h4>
                    <p className="text-xs text-muted-foreground">Complex health data analysis, pattern recognition, predictive insights</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium mb-2">UI Presents</h4>
                    <p className="text-xs text-muted-foreground">Beautiful visualizations, intuitive interactions, emotional comfort</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium mb-2">You Benefit</h4>
                    <p className="text-xs text-muted-foreground">Faster decisions, reduced anxiety, better health outcomes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}