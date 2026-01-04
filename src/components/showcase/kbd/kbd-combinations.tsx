"use client";

import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdCombinations() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[120px]">
            Save
          </span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>S</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[120px]">
            Copy
          </span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>C</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[120px]">
            Paste
          </span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>V</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[120px]">
            Undo
          </span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>Z</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[120px]">
            Redo
          </span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>Shift</Kbd>
            <span>+</span>
            <Kbd>Z</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[120px]">
            Find
          </span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>F</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-sm text-muted-foreground min-w-[120px]">
            Select All
          </span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>A</Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  );
}
