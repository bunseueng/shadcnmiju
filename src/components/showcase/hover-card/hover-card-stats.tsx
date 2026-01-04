"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TrendingUp, TrendingDown, Users, DollarSign, BarChart3 } from "lucide-react";

const HoverCardStats = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" className="gap-2">
          <BarChart3 className="h-4 w-4" />
          View Stats
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 animate-in zoom-in-90 fade-in-0 duration-200">
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Quick Statistics</h4>
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-2 rounded-lg bg-green-500/10">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-500" />
                <span className="text-sm text-foreground">Users</span>
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                <TrendingUp className="h-3 w-3" />
                12,543
              </div>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-blue-500/10">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-foreground">Revenue</span>
              </div>
              <div className="flex items-center gap-1 text-blue-500 text-sm font-medium">
                <TrendingUp className="h-3 w-3" />
                $45.2K
              </div>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-red-500/10">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-red-500" />
                <span className="text-sm text-foreground">Bounce Rate</span>
              </div>
              <div className="flex items-center gap-1 text-red-500 text-sm font-medium">
                <TrendingDown className="h-3 w-3" />
                2.4%
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardStats;
