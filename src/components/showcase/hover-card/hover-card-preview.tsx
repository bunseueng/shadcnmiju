"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ExternalLink, Globe, Lock } from "lucide-react";

const HoverCardPreview = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
        >
          <ExternalLink className="h-4 w-4" />
          View Website Preview
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-[320px] p-0 animate-in slide-in-from-bottom-2 fade-in-0 duration-300">
        <div className="relative">
          <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-md flex items-center justify-center">
            <Globe className="h-12 w-12 text-primary/50" />
          </div>
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs">
            <Lock className="h-3 w-3 text-green-500" />
            <span className="text-muted-foreground">Secure</span>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h4 className="font-semibold text-foreground">Example Website</h4>
          <p className="text-sm text-muted-foreground">
            A beautiful website built with Next.js and shadcn/ui components.
          </p>
          <div className="text-xs text-muted-foreground">https://example.com</div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardPreview;
