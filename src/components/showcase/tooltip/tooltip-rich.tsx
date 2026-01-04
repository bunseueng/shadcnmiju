"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle, CheckCircle2, Clock, Zap } from "lucide-react";

const TooltipRich = () => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button variant="outline" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Pro Features
          </Button>
        </TooltipTrigger>
        <TooltipContent className="w-64 p-0">
          <div className="p-3 border-b border-border">
            <h4 className="font-semibold text-foreground">Pro Plan Benefits</h4>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Unlimited projects</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>Priority support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>24/7 availability</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipRich;
