import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-1">
            Free & Open Source
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Beautiful React Components for Your Next Project
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Copy and paste beautiful components built with Tailwind CSS and shadcn/ui.
            No dependencies. Fully customizable. Open source.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/components">Browse Components</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">20+</div>
              <div className="text-muted-foreground mt-2">Components</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="text-muted-foreground mt-2">Free</div>
            </div>
            <div>
              <div className="text-4xl font-bold">6</div>
              <div className="text-muted-foreground mt-2">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why shadcnmiju?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-lg bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold">Copy & Paste</h3>
            <p className="text-muted-foreground">
              Simply copy the component code and paste it into your project. No installation required.
            </p>
          </div>

          <div className="space-y-3">
            <div className="h-12 w-12 rounded-lg bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold">Fully Customizable</h3>
            <p className="text-muted-foreground">
              Built with Tailwind CSS. Customize colors, spacing, and styles to match your brand.
            </p>
          </div>

          <div className="space-y-3">
            <div className="h-12 w-12 rounded-lg bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold">Production Ready</h3>
            <p className="text-muted-foreground">
              All components are tested, accessible, and ready to use in production applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
