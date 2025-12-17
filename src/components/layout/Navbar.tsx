import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-linear-to-br from-purple-600 to-blue-600" />
            <span className="text-xl font-bold">shadcnmiju</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/components"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Components
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button asChild>
              <Link href="/components">Browse Components</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
