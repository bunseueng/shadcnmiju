"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Share2,
  Mail,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  Link2,
} from "lucide-react";

const ContextMenuSubmenu = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click to share
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56 animate-in fade-in-0 slide-in-from-left-2 duration-200">
        <ContextMenuSub>
          <ContextMenuSubTrigger className="cursor-pointer">
            <Share2 className="mr-2 h-4 w-4" />
            Share via
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48 animate-in slide-in-from-left-1 fade-in-0 duration-150">
            <ContextMenuItem className="cursor-pointer">
              <Mail className="mr-2 h-4 w-4 text-orange-500" />
              Email
            </ContextMenuItem>
            <ContextMenuItem className="cursor-pointer">
              <MessageCircle className="mr-2 h-4 w-4 text-green-500" />
              Messages
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="cursor-pointer">
              <Twitter className="mr-2 h-4 w-4 text-sky-500" />
              Twitter
            </ContextMenuItem>
            <ContextMenuItem className="cursor-pointer">
              <Facebook className="mr-2 h-4 w-4 text-blue-600" />
              Facebook
            </ContextMenuItem>
            <ContextMenuItem className="cursor-pointer">
              <Linkedin className="mr-2 h-4 w-4 text-blue-700" />
              LinkedIn
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem className="cursor-pointer">
          <Link2 className="mr-2 h-4 w-4" />
          Copy Link
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuSubmenu;
