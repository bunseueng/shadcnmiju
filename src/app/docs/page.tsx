"use client";

import { BookOpen, Copy, Palette, Download, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Documentation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started with shadcnmiju
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn how to use our collection of 1,100+ shadcn UI component
              patterns with 100+ beautiful themes. Copy, paste, and customize.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Quick Start</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get up and running in minutes with our easy installation guide.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Theming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Choose from 100+ pre-built themes or create your own custom
                theme.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Copy className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Browse and copy 1,100+ component patterns ready for production.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">CLI Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use the shadcn CLI to add components directly to your project.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Documentation Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Installation Section */}
          <section id="installation" className="scroll-mt-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Installation</h2>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <p className="text-muted-foreground mb-4">
                Before you begin, make sure you have:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Node.js 18+ installed</li>
                <li>A Next.js 14+ project with App Router</li>
                <li>Tailwind CSS configured</li>
                <li>shadcn/ui initialized in your project</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Step 1: Initialize shadcn/ui
              </h3>
              <p className="text-muted-foreground mb-4">
                If you haven&apos;t already, initialize shadcn/ui in your
                project:
              </p>
              <div className="relative rounded-lg bg-zinc-950 p-4 font-mono text-sm mb-6">
                <code className="text-zinc-100">npx shadcn@latest init</code>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 text-zinc-400 hover:text-zinc-100"
                  onClick={() =>
                    navigator.clipboard.writeText("npx shadcn@latest init")
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Step 2: Browse Components
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit the{" "}
                <a
                  href="/components"
                  className="text-primary hover:underline font-medium"
                >
                  Components page
                </a>{" "}
                to explore our collection of 1,100+ component patterns.
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Step 3: Copy Component Code
              </h3>
              <p className="text-muted-foreground mb-4">
                Each component has three action buttons:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  <strong>Code icon</strong> - Copy the component code
                </li>
                <li>
                  <strong>Command icon</strong> - Copy the CLI install command
                </li>
                <li>
                  <strong>Download icon</strong> - Download the component file
                </li>
              </ul>
            </div>
          </section>

          {/* Theming Section */}
          <section id="theming" className="scroll-mt-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Theming System</h2>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">
                100+ Pre-built Themes
              </h3>
              <p className="text-muted-foreground mb-4">
                We offer over 100 carefully crafted themes that you can apply
                instantly to your components.
              </p>

              <h3 className="text-xl font-semibold mb-4">How to Use Themes</h3>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
                <li>
                  Navigate to the{" "}
                  <a
                    href="/components"
                    className="text-primary hover:underline font-medium"
                  >
                    Components page
                  </a>
                </li>
                <li>Click on the theme selector in the top navigation</li>
                <li>Choose from 100+ available themes</li>
                <li>
                  Click &quot;Copy Theme&quot; to get the CSS variables for your
                  theme
                </li>
                <li>
                  Paste the theme variables into your{" "}
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    globals.css
                  </code>{" "}
                  file
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4">
                Copying Theme Variables
              </h3>
              <p className="text-muted-foreground mb-4">
                Click the &quot;Copy Theme&quot; button to get both light and
                dark mode CSS variables:
              </p>
              <div className="relative rounded-lg bg-zinc-950 p-4 font-mono text-xs mb-6 overflow-x-auto">
                <pre className="text-zinc-100">
                  {`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    /* ... more variables */
  }
}`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Toggle Light/Dark Mode
              </h3>
              <p className="text-muted-foreground mb-4">
                Use the theme toggle in the navigation to switch between light
                and dark modes. Themes are automatically applied to both modes.
              </p>
            </div>
          </section>

          {/* Components Section */}
          <section id="components" className="scroll-mt-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Using Components</h2>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">
                Component Categories
              </h3>
              <p className="text-muted-foreground mb-4">
                Our components are organized into the following categories:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Accordion - Collapsible content sections</li>
                <li>Alert Dialog - Modal dialogs for important actions</li>
                <li>Badge - Status and label indicators</li>
                <li>Button - Interactive action triggers</li>
                <li>Card - Content containers</li>
                <li>And many more...</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Viewing Component Previews
              </h3>
              <p className="text-muted-foreground mb-4">
                Each component includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  <strong>Live Preview</strong> - See the component in action
                </li>
                <li>
                  <strong>Code View</strong> - View the full TypeScript/React
                  code
                </li>
                <li>
                  <strong>Responsive Preview</strong> - Test on
                  desktop/tablet/mobile sizes
                </li>
                <li>
                  <strong>Theme Support</strong> - Apply any theme instantly
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Installing with CLI
              </h3>
              <p className="text-muted-foreground mb-4">
                Click the Command icon on any component to copy the install
                command:
              </p>
              <div className="relative rounded-lg bg-zinc-950 p-4 font-mono text-sm mb-6">
                <code className="text-zinc-100">
                  npx shadcn@latest add accordion
                </code>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 text-zinc-400 hover:text-zinc-100"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "npx shadcn@latest add accordion"
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Manual Installation
              </h3>
              <p className="text-muted-foreground mb-4">
                Alternatively, copy the component code and paste it into your
                project:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
                <li>Click the Code icon to copy the component source</li>
                <li>
                  Create a new file in your{" "}
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    components
                  </code>{" "}
                  directory
                </li>
                <li>Paste the code and save</li>
                <li>Import and use in your application</li>
              </ol>
            </div>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="scroll-mt-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Best Practices</h2>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">Customization</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  All components are fully customizable - they&apos;re yours to
                  modify
                </li>
                <li>
                  Use Tailwind classes to adjust spacing, colors, and sizing
                </li>
                <li>Modify CSS variables in your theme for global changes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  Components are built with Radix UI primitives for
                  accessibility
                </li>
                <li>Keyboard navigation is supported out of the box</li>
                <li>Screen reader friendly with proper ARIA attributes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">TypeScript</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>All components are written in TypeScript</li>
                <li>Full type safety and IntelliSense support</li>
                <li>Prop types are clearly defined</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Is this free to use?
                </h3>
                <p className="text-muted-foreground">
                  Yes! All components and themes are completely free and
                  open-source. Use them in personal and commercial projects.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Do I need to install shadcn/ui first?
                </h3>
                <p className="text-muted-foreground">
                  Yes, this is a collection of component patterns built on top
                  of shadcn/ui. You&apos;ll need to have shadcn/ui initialized
                  in your project first.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Can I modify the components?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! The code is yours. Modify, extend, and customize
                  as needed for your project.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">
                  How do I create a custom theme?
                </h3>
                <p className="text-muted-foreground">
                  Choose any existing theme as a starting point, copy the CSS
                  variables, and modify the HSL color values to match your brand
                  colors.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Are the components production-ready?
                </h3>
                <p className="text-muted-foreground">
                  Yes! All components are built with production-quality code,
                  accessibility in mind, and are fully tested.
                </p>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section id="support" className="scroll-mt-20 pb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Need Help?</h2>
            </div>

            <div className="bg-muted/50 border rounded-lg p-8 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                For detailed information about shadcn/ui components, visit the
                official documentation. For theme-specific questions, explore
                our component examples.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild>
                  <a
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit shadcn/ui Docs
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/components">Browse Components</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
