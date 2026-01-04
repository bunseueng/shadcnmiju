"use client";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

import { useState } from "react";

const BasicCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full max-w-lg mx-auto text-start"
    >
      <CollapsibleTrigger className="flex items-center gap-2 font-semibold text-foreground hover:text-foreground/80 transition-colors">
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        Click to expand
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 text-muted-foreground">
        This is the hidden content that appears when you click the trigger.
      </CollapsibleContent>
    </Collapsible>
  );
};
export default BasicCollapsible;
