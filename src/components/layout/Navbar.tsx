import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/assets/logo.png" alt="Logo" className="w-auto  h-auto" />
            <span className="text-xl font-semibold text-black dark:text-white">
              shadcnmiju
            </span>
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
              href="/docs"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Docs
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button asChild>
              <Link href="/components">
                <Github />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
