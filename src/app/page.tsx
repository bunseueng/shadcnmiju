"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  LayoutTemplate,
  Palette,
  Zap,
  Code2,
  Sparkles,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { showcase_components } from "@/constants/homepage";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

gsap.registerPlugin(useGSAP);
export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const showcaseRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    // Set initial state for all animated elements
    gsap.set(".hero-badge", { opacity: 0, y: 30 });
    gsap.set(".hero-title", { opacity: 0, y: 50 });
    gsap.set(".hero-description", { opacity: 0, y: 30 });
    gsap.set(".hero-buttons", { opacity: 0, y: 30 });
    gsap.set(".hero-code", { opacity: 0, x: 50 });
    gsap.set(".stat-item", { opacity: 0, y: 30 });
    gsap.set(".feature-card", { opacity: 0, y: 50 });
    gsap.set(".showcase-item", { opacity: 0, scale: 0.9 });
    gsap.set(".cta-content", { opacity: 0, y: 40 });

    // Hero Animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".hero-badge", {
      opacity: 1,
      y: 0,
      duration: 0.6,
    })
      .to(
        ".hero-title",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.5"
      )
      .to(
        ".hero-description",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.6"
      )
      .to(
        ".hero-buttons",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.6"
      )
      .to(
        ".hero-code",
        {
          opacity: 1,
          x: 0,
          duration: 1,
        },
        "-=1"
      );

    // Floating animation for hero code block
    gsap.to(".hero-code", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Stats Counter Animation
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(".stat-item", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
        });

        // Animate numbers
        document.querySelectorAll(".stat-number").forEach((el) => {
          const target = parseInt(el.getAttribute("data-value") || "0");
          gsap.to(el, {
            duration: 2,
            textContent: target,
            roundProps: "textContent",
            ease: "power1.out",
          });
        });
      },
    });

    // Features Animation
    ScrollTrigger.create({
      trigger: featuresRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.to(".feature-card", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        });
      },
    });

    // Showcase Animation
    ScrollTrigger.create({
      trigger: showcaseRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.to(".showcase-item", {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.4)",
        });
      },
    });

    // CTA Animation
    ScrollTrigger.create({
      trigger: ctaRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(".cta-content", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      },
    });
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-999 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Hero content */}
            <div className="flex flex-col gap-6 max-w-2xl">
              <Badge className="hero-badge w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Sparkles className="w-3 h-3 mr-2" />
                1,100+ Components & 100+ Themes
              </Badge>

              <div className="space-y-4">
                <h1 className="hero-title font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Build Stunning
                  </span>
                </h1>
                <h1 className="hero-title font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    UI Faster
                  </span>
                </h1>
              </div>

              <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Copy, paste, and customize beautifully crafted components.
                Production-ready, accessible, and fully responsive with 100+
                stunning themes.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="lg"
                  className="hero-buttons group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  asChild
                >
                  <Link href="/components">
                    Browse Components
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hero-buttons"
                  asChild
                >
                  <Link href="/docs">
                    <Code2 className="mr-2 h-4 w-4" />
                    Documentation
                  </Link>
                </Button>
              </div>

              {/* Quick features */}
              <div className="hero-buttons flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500" />
                  TypeScript
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500" />
                  Accessible
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500" />
                  Open Source
                </div>
              </div>
            </div>

            {/* Right column - Code Preview */}
            <div className="hero-code hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl" />
                <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-zinc-500">
                      component.tsx
                    </span>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <pre className="text-zinc-300">
                      <code>
                        <span className="text-purple-400">import</span>{" "}
                        <span className="text-zinc-300">
                          {"{"} Button {"}"}
                        </span>{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          &quot;@/components/ui/button&quot;
                        </span>
                        {"\n\n"}
                        <span className="text-purple-400">
                          export default
                        </span>{" "}
                        <span className="text-blue-400">function</span>{" "}
                        <span className="text-yellow-400">MyComponent</span>
                        <span className="text-zinc-300">() {"{"}</span>
                        {"\n  "}
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-zinc-300">(</span>
                        {"\n    "}
                        <span className="text-pink-400">&lt;Button</span>{" "}
                        <span className="text-blue-300">variant</span>
                        <span className="text-zinc-300">=</span>
                        <span className="text-green-400">
                          &quot;default&quot;
                        </span>
                        <span className="text-pink-400">&gt;</span>
                        {"\n      "}
                        <span className="text-zinc-300">Click me</span>
                        {"\n    "}
                        <span className="text-pink-400">&lt;/Button&gt;</span>
                        {"\n  "}
                        <span className="text-zinc-300">)</span>
                        {"\n"}
                        <span className="text-zinc-300">{"}"}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="border-y bg-linear-to-r from-muted/50 via-primary/5 to-muted/50"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <div
                className="stat-number text-5xl font-bold bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                data-value="1100"
              >
                0
              </div>
              <div className="text-muted-foreground mt-2">
                Component Patterns
              </div>
            </div>
            <div className="stat-item text-center">
              <div
                className="stat-number text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                data-value="100"
              >
                0
              </div>
              <div className="text-muted-foreground mt-2">Unique Themes</div>
            </div>
            <div className="stat-item text-center">
              <div
                className="stat-number text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent"
                data-value="20"
              >
                0
              </div>
              <div className="text-muted-foreground mt-2">
                Component Categories
              </div>
            </div>
            <div className="stat-item text-center opacity-0">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-muted-foreground mt-2">
                Free & Open Source
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose shadcnmiju?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Not just another component library. A complete design system you own
            and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="feature-card border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <LayoutTemplate className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Not a Dependency</h3>
              <p className="text-muted-foreground">
                Copy and paste the code. Customize to your needs. The code is
                yours to own and modify.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-2 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-500/50 flex items-center justify-center">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">100+ Themes</h3>
              <p className="text-muted-foreground">
                Choose from over 100 beautiful pre-built themes or create your
                own custom design system.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-2 hover:border-pink-500/50 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-500/50 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Built with Radix UI</h3>
              <p className="text-muted-foreground">
                Accessible components built on Radix UI primitives. WAI-ARIA
                compliant and keyboard navigable.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-2 hover:border-green-500/50 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-500/50 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">TypeScript First</h3>
              <p className="text-muted-foreground">
                Full TypeScript support with comprehensive type definitions for
                better DX and fewer bugs.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-2 hover:border-blue-500/50 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-500/50 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Dark Mode</h3>
              <p className="text-muted-foreground">
                Beautiful dark mode support out of the box. All themes work
                perfectly in both light and dark modes.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-2 hover:border-orange-500/50 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-500/50 flex items-center justify-center">
                <Github className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Open Source</h3>
              <p className="text-muted-foreground">
                Completely free and open source. Use in personal and commercial
                projects without attribution.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Showcase Section */}
      <section
        ref={showcaseRef}
        className="bg-gradient-to-b from-muted/30 to-background py-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Showcase</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Beautiful Components
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every component is crafted with attention to detail and designed
              to work seamlessly together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcase_components.map((i, index) => (
              <Card
                className="showcase-item overflow-hidden group hover:shadow-xl transition-all duration-300 pt-0"
                key={index}
              >
                <div className="relative border-b p-6 min-h-70 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300 rounded-t-lg bg-[url('/assets/preview-bg.png')]"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10 rounded-t-lg" />

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src={i.src}
                        alt="Feature 1"
                        width={500}
                        height={500}
                        className="rounded-lg border-2 border-border shadow-2xl shadow-primary/20 bg-background"
                      />
                      <div className="absolute inset-0 rounded-lg bg-linear-to-tr from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text">
                      {i.title}
                    </CardTitle>
                    <Badge className="shadow-sm">Badge</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {i.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24">
        <div className="container mx-auto px-4">
          <div className="cta-content max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/20 rounded-2xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of developers building beautiful applications
                  with shadcnmiju components.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    asChild
                  >
                    <Link href="/components">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
