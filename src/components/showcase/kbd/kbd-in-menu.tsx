"use client";

import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function KbdInMenu() {
  return (
    <div className="flex items-center justify-center p-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Actions
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="flex-1">New File</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>N</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="flex-1">Open File</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>O</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="flex-1">Save</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>S</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="flex-1">Find</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>F</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="flex-1">Replace</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>H</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="flex-1">Settings</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>,</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
