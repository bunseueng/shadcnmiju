"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar, ExternalLink } from "lucide-react";

const PopoverProfile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="gap-2 h-auto py-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <span className="text-foreground">View Profile</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-foreground">shadcn</h4>
              <p className="text-sm text-muted-foreground">@shadcn</p>
              <Badge variant="secondary" className="mt-1">Pro</Badge>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <p className="text-sm text-muted-foreground">
            Building beautiful, accessible components for the modern web.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              hello@shadcn.com
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              San Francisco, CA
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Joined January 2021
            </div>
          </div>
          <Button className="w-full gap-2" size="sm">
            <ExternalLink className="h-4 w-4" />
            View Full Profile
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverProfile;
