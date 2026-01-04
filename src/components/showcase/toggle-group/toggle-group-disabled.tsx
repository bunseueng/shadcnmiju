"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline, Strikethrough } from "lucide-react";

const ToggleGroupDisabled = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <ToggleGroup type="multiple" disabled>
        <ToggleGroupItem value="bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough">
          <Strikethrough className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-sm text-muted-foreground">All items disabled</p>
    </div>
  );
};

export default ToggleGroupDisabled;
