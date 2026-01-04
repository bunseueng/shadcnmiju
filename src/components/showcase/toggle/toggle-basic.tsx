"use client";

import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

const ToggleBasic = () => {
  return (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default ToggleBasic;
