"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, ChevronDown, Clock, TrendingUp } from "lucide-react";

const recentSearches = ["React components", "Tailwind CSS", "Next.js", "TypeScript"];
const trendingSearches = ["shadcn/ui", "Radix UI", "Framer Motion", "Zustand"];

const SheetTop = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" className="gap-2">
          <Search className="h-4 w-4" />
          Search
          <ChevronDown className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-[400px]">
        <SheetHeader className="text-center">
          <SheetTitle className="text-foreground">Search</SheetTitle>
          <SheetDescription>Find anything in your workspace</SheetDescription>
        </SheetHeader>
        <div className="mt-6 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Type to search..."
              className="pl-10 h-12 text-lg"
              autoFocus
            />
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4" />
                Recent Searches
              </h4>
              <div className="space-y-2">
                {recentSearches.map((search, i) => (
                  <button
                    key={i}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent text-foreground transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4" />
                Trending
              </h4>
              <div className="space-y-2">
                {trendingSearches.map((search, i) => (
                  <button
                    key={i}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent text-foreground transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetTop;
