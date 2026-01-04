"use client";

import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdBasic() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-6">
      <div className="space-y-4 text-center">
        <div className="text-sm text-muted-foreground">Single Keys</div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Kbd>A</Kbd>
          <Kbd>Ctrl</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Space</Kbd>
        </div>
      </div>

      <div className="space-y-4 text-center">
        <div className="text-sm text-muted-foreground">Arrow Keys</div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </div>
      </div>

      <div className="space-y-4 text-center">
        <div className="text-sm text-muted-foreground">Function Keys</div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Kbd>F1</Kbd>
          <Kbd>F2</Kbd>
          <Kbd>F5</Kbd>
          <Kbd>F12</Kbd>
        </div>
      </div>
    </div>
  );
}
