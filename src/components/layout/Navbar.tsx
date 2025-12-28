/* eslint-disable @next/next/no-html-link-for-pages */
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ModeToggle } from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-9999">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src="/assets/logo.png" alt="Logo" className="w-auto  h-auto" />
            <span className="text-xl font-semibold text-black dark:text-white">
              shadcnmiju
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/components"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Components
            </a>{" "}
            <a
              href="/theme"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Theme
            </a>
            <a
              href="/docs"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Docs
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button asChild>
              <a href="/components">
                <Github />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
