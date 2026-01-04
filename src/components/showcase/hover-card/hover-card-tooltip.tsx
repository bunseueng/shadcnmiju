"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Info, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const HoverCardTooltip = () => {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="outline" className="gap-1">
        Pro Plan
        <HoverCard>
          <HoverCardTrigger asChild>
            <Info className="h-3 w-3 cursor-help text-muted-foreground hover:text-primary transition-colors" />
          </HoverCardTrigger>
          <HoverCardContent className="w-72 animate-in fade-in-0 slide-in-from-top-1 duration-200" side="top">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2 text-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Pro Plan Features
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-yellow-500" />
                  Coming soon: AI features
                </li>
              </ul>
              <div className="pt-2 border-t border-border">
                <div className="flex items-center gap-1 text-xs text-amber-600">
                  <AlertCircle className="h-3 w-3" />
                  Renews on Jan 15, 2025
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Badge>
    </div>
  );
};

export default HoverCardTooltip;
