"use client";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const CollapsibleSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex w-full flex-col items-start gap-1 rounded-lg border border-border p-4 hover:bg-accent/5 transition-colors">
        <div className="flex items-center gap-2">
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <h3 className="font-semibold text-foreground">Advanced Settings</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-6">
          Configure your preferences
        </p>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 space-y-2 text-sm text-muted-foreground">
        <div className="rounded-lg border border-border p-3">
          Setting 1: Option A
        </div>
        <div className="rounded-lg border border-border p-3">
          Setting 2: Option B
        </div>
        <div className="rounded-lg border border-border p-3">
          Setting 3: Option C
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleSettings;
