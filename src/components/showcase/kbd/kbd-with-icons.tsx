"use client";

import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Command, Option, Delete, ArrowUp, ArrowDown } from "lucide-react";

export default function KbdWithIcons() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[140px]">
            Command Palette
          </span>
          <KbdGroup>
            <Kbd>
              <Command className="h-3 w-3" />
            </Kbd>
            <span>+</span>
            <Kbd>K</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[140px]">
            Quick Actions
          </span>
          <KbdGroup>
            <Kbd>
              Shift
              {/* <Shift className="h-3 w-3" /> */}
            </Kbd>
            <span>+</span>
            <Kbd>
              <Command className="h-3 w-3" />
            </Kbd>
            <span>+</span>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[140px]">
            Delete Line
          </span>
          <KbdGroup>
            <Kbd>
              <Command className="h-3 w-3" />
            </Kbd>
            <span>+</span>
            <Kbd>
              <Delete className="h-3 w-3" />
            </Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[140px]">
            Move Line Up
          </span>
          <KbdGroup>
            <Kbd>
              <Option className="h-3 w-3" />
            </Kbd>
            <span>+</span>
            <Kbd>
              <ArrowUp className="h-3 w-3" />
            </Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[140px]">
            Move Line Down
          </span>
          <KbdGroup>
            <Kbd>
              <Option className="h-3 w-3" />
            </Kbd>
            <span>+</span>
            <Kbd>
              <ArrowDown className="h-3 w-3" />
            </Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  );
}
