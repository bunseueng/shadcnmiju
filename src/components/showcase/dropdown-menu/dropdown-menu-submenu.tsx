"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, UserPlus, Mail, MessageSquare, PlusCircle, Cloud, Github, LifeBuoy, Keyboard } from "lucide-react";

const DropdownMenuSubmenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="gap-2">
          <MoreHorizontal className="h-4 w-4" />
          More Options
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 animate-in slide-in-from-left-2 fade-in-0 duration-200">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="animate-in slide-in-from-left-1 fade-in-0 duration-150">
              <DropdownMenuItem className="cursor-pointer">
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem className="cursor-pointer">
          <Cloud className="mr-2 h-4 w-4" />
          <span>Cloud</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" disabled>
          <Keyboard className="mr-2 h-4 w-4" />
          <span>Shortcuts</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuSubmenu;
