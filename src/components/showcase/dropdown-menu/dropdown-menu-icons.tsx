"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette, Copy, Scissors, ClipboardPaste, Trash2, FileEdit, Download, Share2 } from "lucide-react";

const DropdownMenuIcons = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
          <Palette className="h-4 w-4" />
          Edit Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 animate-in slide-in-from-bottom-2 zoom-in-95 duration-200">
        <DropdownMenuLabel>Edit</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <Scissors className="mr-2 h-4 w-4 text-orange-500" />
            <span>Cut</span>
            <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Copy className="mr-2 h-4 w-4 text-blue-500" />
            <span>Copy</span>
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <ClipboardPaste className="mr-2 h-4 w-4 text-green-500" />
            <span>Paste</span>
            <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <FileEdit className="mr-2 h-4 w-4 text-purple-500" />
            <span>Rename</span>
            <DropdownMenuShortcut>F2</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Download className="mr-2 h-4 w-4 text-cyan-500" />
            <span>Download</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Share2 className="mr-2 h-4 w-4 text-indigo-500" />
            <span>Share</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
          <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuIcons;
