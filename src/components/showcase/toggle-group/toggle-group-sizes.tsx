"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

const ToggleGroupSizes = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="flex flex-col items-center gap-2">
        <ToggleGroup type="multiple" size="sm">
          <ToggleGroupItem value="bold">
            <Bold className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="text-xs text-muted-foreground">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleGroup type="multiple" size="lg">
          <ToggleGroupItem value="bold">
            <Bold className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
    </div>
  );
};

export default ToggleGroupSizes;
