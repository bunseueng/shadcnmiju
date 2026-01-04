"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";

const ToggleGroup = () => {
  const [alignment, setAlignment] = useState("left");

  return (
    <div className="space-y-4">
      <div className="flex items-center rounded-lg border border-border p-1 w-fit">
        <Toggle
          pressed={alignment === "left"}
          onPressedChange={() => setAlignment("left")}
          className="rounded-r-none"
          aria-label="Align left"
        >
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={alignment === "center"}
          onPressedChange={() => setAlignment("center")}
          className="rounded-none border-x-0"
          aria-label="Align center"
        >
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={alignment === "right"}
          onPressedChange={() => setAlignment("right")}
          className="rounded-none"
          aria-label="Align right"
        >
          <AlignRight className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={alignment === "justify"}
          onPressedChange={() => setAlignment("justify")}
          className="rounded-l-none"
          aria-label="Justify"
        >
          <AlignJustify className="h-4 w-4" />
        </Toggle>
      </div>
      <p className="text-sm text-muted-foreground">
        Selected: <span className="font-medium text-foreground capitalize">{alignment}</span>
      </p>
    </div>
  );
};

export default ToggleGroup;
