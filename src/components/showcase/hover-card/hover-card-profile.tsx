"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarDays, MapPin, Link2 } from "lucide-react";

const HoverCardProfile = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-primary">
          @shadcn
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex-1">
            <h4 className="text-sm font-semibold text-foreground">@shadcn</h4>
            <p className="text-sm text-muted-foreground">
              The creator of shadcn/ui. Building beautiful, accessible components.
            </p>
            <div className="flex items-center pt-2 gap-4">
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarDays className="mr-1 h-3 w-3" />
                Joined Dec 2021
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                Global
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardProfile;
