"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Activity,
  Thermometer,
  Droplets,
  Weight,
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Calendar,
  Plus,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock data for demonstration
const heartRateData = [
  { time: "6:00", rate: 65 },
  { time: "9:00", rate: 72 },
  { time: "12:00", rate: 78 },
  { time: "15:00", rate: 85 },
  { time: "18:00", rate: 74 },
  { time: "21:00", rate: 68 },
]

const bloodPressureData = [
  { date: "Mon", systolic: 120, diastolic: 80 },
  { date: "Tue", systolic: 118, diastolic: 78 },
  { date: "Wed", systolic: 122, diastolic: 82 },
  { date: "Thu", systolic: 119, diastolic: 79 },
  { date: "Fri", systolic: 121, diastolic: 81 },
  { date: "Sat", systolic: 117, diastolic: 77 },
  { date: "Sun", systolic: 120, diastolic: 80 },
]

const sleepData = [
  { name: "Deep Sleep", value: 2.5, color: "#059669" },
  { name: "Light Sleep", value: 4.2, color: "#10b981" },
  { name: "REM Sleep", value: 1.8, color: "#34d399" },
  { name: "Awake", value: 0.5, color: "#f3f4f6" },
]

const activityData = [
  { day: "Mon", steps: 8500, calories: 320 },
  { day: "Tue", steps: 9200, calories: 380 },
  { day: "Wed", steps: 7800, calories: 290 },
  { day: "Thu", steps: 10500, calories: 420 },
  { day: "Fri", steps: 9800, calories: 390 },
  { day: "Sat", steps: 12000, calories: 480 },
  { day: "Sun", steps: 6500, calories: 250 },
]

export default function HealthDashboard() {
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
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Health Dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="hidden sm:flex">
                <CheckCircle className="w-4 h-4 mr-2" />
                All Systems Normal
              </Badge>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Reading
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
              <Heart className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72 BPM</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                +2 from yesterday
              </div>
              <Progress value={72} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
              <Droplets className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120/80</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                Normal range
              </div>
              <div className="mt-2 text-xs text-muted-foreground">Last reading: 2 hours ago</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.6°F</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                Normal
              </div>
              <div className="mt-2 text-xs text-muted-foreground">Last reading: 6 hours ago</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weight</CardTitle>
              <Weight className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">165 lbs</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingDown className="w-3 h-3 mr-1 text-green-500" />
                -2 lbs this month
              </div>
              <div className="mt-2 text-xs text-muted-foreground">Goal: 160 lbs</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="vitals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="vitals">Vital Signs</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="sleep">Sleep</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="vitals" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Heart Rate Chart */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    Heart Rate Today
                  </CardTitle>
                  <CardDescription>Real-time heart rate monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={heartRateData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[60, 90]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Blood Pressure Chart */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    Blood Pressure This Week
                  </CardTitle>
                  <CardDescription>Systolic and diastolic readings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={bloodPressureData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[70, 130]} />
                      <Tooltip />
                      <Bar dataKey="systolic" fill="#3b82f6" name="Systolic" />
                      <Bar dataKey="diastolic" fill="#10b981" name="Diastolic" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Health Alerts */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  Health Alerts & Reminders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800 dark:text-green-200">All vitals within normal range</p>
                        <p className="text-sm text-green-600 dark:text-green-400">Last updated 2 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="font-medium text-amber-800 dark:text-amber-200">Medication reminder</p>
                        <p className="text-sm text-amber-600 dark:text-amber-400">Take evening medication in 2 hours</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Mark Taken
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Steps Chart */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Daily Steps</CardTitle>
                  <CardDescription>Your activity this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="steps" fill="#059669" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Activity Summary */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Activity Summary</CardTitle>
                  <CardDescription>Today's achievements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Steps Goal</span>
                      <span className="text-sm text-muted-foreground">8,500 / 10,000</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Calories Burned</span>
                      <span className="text-sm text-muted-foreground">320 / 400</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Active Minutes</span>
                      <span className="text-sm text-muted-foreground">45 / 60</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Achievements</h4>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2">
                        🏃 5K Steps
                      </Badge>
                      <Badge variant="secondary" className="mr-2">
                        🔥 300 Calories
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sleep" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Sleep Chart */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Sleep Analysis</CardTitle>
                  <CardDescription>Last night's sleep breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sleepData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {sleepData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}h`, "Duration"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Sleep Summary */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Sleep Summary</CardTitle>
                  <CardDescription>Quality metrics for last night</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">9h 0m</div>
                      <div className="text-sm text-muted-foreground">Total Sleep</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-sm text-muted-foreground">Sleep Efficiency</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {sleepData.map((phase, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phase.color }}></div>
                          <span className="text-sm">{phase.name}</span>
                        </div>
                        <span className="text-sm font-medium">{phase.value}h</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Good sleep quality</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Health Trends</CardTitle>
                <CardDescription>Long-term health patterns and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">+5%</div>
                    <div className="text-sm text-muted-foreground">Activity Level</div>
                    <div className="text-xs text-muted-foreground mt-1">vs last month</div>
                  </div>

                  <div className="text-center p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">Stable</div>
                    <div className="text-sm text-muted-foreground">Heart Rate</div>
                    <div className="text-xs text-muted-foreground mt-1">Consistent range</div>
                  </div>

                  <div className="text-center p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <TrendingDown className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">-3 lbs</div>
                    <div className="text-sm text-muted-foreground">Weight</div>
                    <div className="text-xs text-muted-foreground mt-1">This month</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
