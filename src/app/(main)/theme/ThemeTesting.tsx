"use client";

import { ModeToggle } from "@/components/ui/theme-toggle";
import { SelectTheme } from "../components/SelectTheme";
import { CopyTheme } from "../components/CopyTheme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Users,
  CheckCircle,
  AlertCircle,
  Info,
  Loader2,
  Plus,
  Minus,
  Bell,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const ThemeTesting = () => {
  const [count, setCount] = useState(1);
  const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [sameAddress, setSameAddress] = useState(false);
  const [wallpaperTinting, setWallpaperTinting] = useState(true);
  const [vmEnabled, setVmEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  useGSAP(() => {
    // Set initial states for all animated elements
    gsap.set("#payment", { opacity: 0, y: 20 });
    gsap.set("#status", { opacity: 0, y: 20 });
    gsap.set("#team-member", { opacity: 0, y: 20 });
    gsap.set("#progress", { opacity: 0, y: 20 });
    gsap.set("#notification", { opacity: 0, y: 20 });
    gsap.set("#two-factor", { opacity: 0, x: -15 });
    gsap.set("#profile-verify", { opacity: 0, x: -15 });
    gsap.set("#error", { opacity: 0, x: -15 });
    gsap.set("#settings", { opacity: 0, y: 20 });
    gsap.set("#action-btn", { opacity: 0, y: 20 });
    gsap.set("#navigation-tabs", { opacity: 0, y: 20 });
    gsap.set("#events", { opacity: 0, y: 20 });
    gsap.set("#survey", { opacity: 0, y: 20 });
    gsap.set("#progressing", { opacity: 0, scale: 0.95 });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate all columns in parallel with minimal delay
    tl.to("#payment", {
      opacity: 1,
      y: 0,
      duration: 0.4,
    })
      // Left column
      .to(
        "#status",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.3"
      )
      .to(
        "#team-member",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.3"
      )
      // Middle column - starts almost immediately
      .to(
        "#progress",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.1
      )
      .to(
        "#notification",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.2
      )
      // Alerts - rapid succession
      .to(
        "#two-factor",
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        },
        0.3
      )
      .to(
        "#profile-verify",
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        },
        0.35
      )
      .to(
        "#error",
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        },
        0.4
      )
      .to(
        "#settings",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.5
      )
      // Right column - starts early
      .to(
        "#action-btn",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.15
      )
      .to(
        "#navigation-tabs",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.25
      )
      .to(
        "#events",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.35
      )
      .to(
        "#survey",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0.45
      )
      .to(
        "#progressing",
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.2)",
        },
        0.55
      );
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ModeToggle />
              <SelectTheme />
            </div>
            <div className="gap-2">
              <CopyTheme />
            </div>
          </div>
        </div>
      </div>

      <section id="content" className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-3">Theme Testing Playground</h1>
          <p className="text-muted-foreground text-lg">
            Test and preview all shadcn/ui components with your selected theme
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Payment & Forms */}
          <div className="space-y-6">
            {/* Payment Method Card */}
            <form onSubmit={() => window.location.reload()}>
              <Card id="payment">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>
                    All transactions are secure and encrypted
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name on Card</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="card">Card Number</Label>
                      <Input
                        id="card"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter your 16-digit number.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="month">Month</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(
                            (month) => (
                              <SelectItem
                                key={month}
                                value={month.toString().padStart(2, "0")}
                              >
                                {month.toString().padStart(2, "0")}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => 2024 + i).map(
                            (year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Billing Address</Label>
                    <p className="text-sm text-muted-foreground">
                      The billing address associated with your payment method
                    </p>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="same"
                        checked={sameAddress}
                        onCheckedChange={(checked) =>
                          setSameAddress(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="same"
                        className="text-sm font-normal cursor-pointer"
                      >
                        Same as shipping address
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">Comments</Label>
                    <Input
                      id="comments"
                      placeholder="Add any additional comments"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">Submit</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            </form>

            {/* Stats Card */}
            <Card id="status">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Statistics Overview
                </CardTitle>
                <CardDescription>
                  Your account metrics at a glance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Users
                    </p>
                    <p className="text-2xl font-bold">1,234</p>
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      12% from last month
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                    <p className="text-sm text-muted-foreground mb-1">
                      Revenue
                    </p>
                    <p className="text-2xl font-bold">$45.2K</p>
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      8% from last month
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                    <p className="text-sm text-muted-foreground mb-1">
                      Active Now
                    </p>
                    <p className="text-2xl font-bold">89</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Users online
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                    <p className="text-sm text-muted-foreground mb-1">
                      Conversion
                    </p>
                    <p className="text-2xl font-bold">3.2%</p>
                    <p className="text-xs text-red-600 mt-1">
                      ↓ 2% from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Collaboration Card */}
            <Card id="team-member">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-2 border-background">
                      <Users className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">No Team Members</h3>
                    <p className="text-sm text-muted-foreground">
                      Invite your team to collaborate on this project.
                    </p>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Invite Members
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Status & Settings */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card id="progress">
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
                <CardDescription>Track your current milestone</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Design Phase</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Development</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/5 rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Testing</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[15%] rounded-full" />
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="default"
                    className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                  >
                    <Spinner />
                    Syncing
                  </Badge>
                  <Badge
                    variant="default"
                    className="bg-blue-500/10 text-blue-600 border-blue-500/20"
                  >
                    <Spinner />
                    Updating
                  </Badge>
                  <Badge
                    variant="default"
                    className="bg-green-500/10 text-green-600 border-green-500/20"
                  >
                    <Spinner />
                    Active
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Notifications Card */}
            <Card id="notification">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3 items-start p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        New deployment successful
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Sarah joined the team
                      </p>
                      <p className="text-xs text-muted-foreground">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        API usage limit reached
                      </p>
                      <p className="text-xs text-muted-foreground">
                        3 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Database backup completed
                      </p>
                      <p className="text-xs text-muted-foreground">
                        5 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search notifications..."
                    className="pl-9"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <div className="space-y-3">
              <Alert id="two-factor">
                <Info className="h-4 w-4" />
                <AlertTitle>Two-factor authentication</AlertTitle>
                <AlertDescription className="flex items-center justify-between">
                  Verify via email or phone number.
                  <Button size="sm" onClick={() => alert("Enabling 2FA...")}>
                    Enable
                  </Button>
                </AlertDescription>
              </Alert>

              <Alert id="profile-verify">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Your profile has been verified.</AlertTitle>
              </Alert>

              <Alert variant="destructive" id="error">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>

            {/* Settings Card */}
            <Card id="settings">
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Kubernetes</Label>
                      <p className="text-xs text-muted-foreground">
                        Run GPU workloads on a K8s configured cluster. This is
                        the default.
                      </p>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Virtual Machine</Label>
                      <p className="text-xs text-muted-foreground">
                        Access a VM configured cluster to run workloads. (Coming
                        soon)
                      </p>
                    </div>
                    <Switch
                      disabled
                      checked={vmEnabled}
                      onCheckedChange={setVmEnabled}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div>
                    <Label>Price Range</Label>
                    <p className="text-xs text-muted-foreground mb-3">
                      Set your budget range ($200 - 800).
                    </p>
                    <Slider
                      defaultValue={[400]}
                      max={800}
                      min={200}
                      step={50}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Number of GPUs</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 disabled:cursor-not-allowed"
                        onClick={() => setCount(count - 1)}
                        disabled={count <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{count}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => setCount(count + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Wallpaper Tinting</Label>
                      <p className="text-xs text-muted-foreground">
                        Allow the wallpaper to be tinted.
                      </p>
                    </div>
                    <Switch
                      checked={wallpaperTinting}
                      onCheckedChange={setWallpaperTinting}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Actions & Progress */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card id="action-btn">
              <CardContent className="p-4 space-y-3">
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Archive
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Report
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Snooze
                  </Button>
                  <Button variant="ghost" size="icon">
                    •••
                  </Button>
                </div>

                <div className="flex items-center border rounded-lg p-3">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) =>
                      setTermsAccepted(checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="terms"
                    className="ml-2 text-sm cursor-pointer"
                  >
                    I agree to the terms and conditions
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Tabs */}
            <Card id="navigation-tabs">
              <CardContent className="p-4">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full">
                    <TabsTrigger value="1" className="flex-1">
                      1
                    </TabsTrigger>
                    <TabsTrigger value="2" className="flex-1">
                      2
                    </TabsTrigger>
                    <TabsTrigger value="3" className="flex-1">
                      3
                    </TabsTrigger>
                    <div className="flex gap-1 ml-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => {
                          const current = parseInt(activeTab);
                          if (current > 1)
                            setActiveTab((current - 1).toString());
                        }}
                        disabled={activeTab === "1"}
                      >
                        ←
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => {
                          const current = parseInt(activeTab);
                          if (current < 3)
                            setActiveTab((current + 1).toString());
                        }}
                        disabled={activeTab === "3"}
                      >
                        →
                      </Button>
                    </div>
                  </TabsList>
                  <TabsContent value="1" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Content for tab 1
                    </p>
                  </TabsContent>
                  <TabsContent value="2" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Content for tab 2
                    </p>
                  </TabsContent>
                  <TabsContent value="3" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Content for tab 3
                    </p>
                  </TabsContent>
                </Tabs>

                <Button className="w-full mt-4">
                  <Spinner className="h-4 w-4 mr-2" />
                  Copilot
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events Card */}
            <Card id="events">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
                <CardDescription>Your schedule for this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-3 py-2 hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium">Team Standup</p>
                  <p className="text-xs text-muted-foreground">
                    Today at 10:00 AM
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3 py-2 hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium">Product Demo</p>
                  <p className="text-xs text-muted-foreground">
                    Tomorrow at 2:00 PM
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3 py-2 hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium">Sprint Planning</p>
                  <p className="text-xs text-muted-foreground">
                    Friday at 9:00 AM
                  </p>
                </div>
                <Separator />
                <Button variant="outline" className="w-full">
                  View Full Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Survey Card */}
            <Card id="survey">
              <CardHeader>
                <CardTitle>Quick Survey</CardTitle>
                <CardDescription>
                  Help us improve your experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-3">
                    How did you hear about us?
                  </p>
                </div>

                <div className="space-y-2">
                  <Button
                    variant={
                      selectedSurvey === "social" ? "default" : "outline"
                    }
                    className="w-full justify-start transition-all"
                    onClick={() => setSelectedSurvey("social")}
                  >
                    Social Media
                  </Button>
                  <Button
                    variant={
                      selectedSurvey === "search" ? "default" : "outline"
                    }
                    className="w-full justify-start transition-all"
                    onClick={() => setSelectedSurvey("search")}
                  >
                    Search Engine
                  </Button>
                  <Button
                    variant={
                      selectedSurvey === "referral" ? "default" : "outline"
                    }
                    className="w-full justify-start transition-all"
                    onClick={() => setSelectedSurvey("referral")}
                  >
                    Referral
                  </Button>
                  <Button
                    variant={selectedSurvey === "other" ? "default" : "outline"}
                    className="w-full justify-start transition-all"
                    onClick={() => setSelectedSurvey("other")}
                  >
                    Other
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Processing Card */}
            <Card id="progressing">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Processing your request
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Please wait while we process your request. Do not refresh
                      the page.
                    </p>
                  </div>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemeTesting;
