"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { AlertTriangle, ArrowDown, ArrowUp, Minus } from "lucide-react";
import { useState } from "react";

const PrioritySelectorButtonGroup = () => {
  const [priority, setPriority] = useState<
    "low" | "medium" | "high" | "urgent"
  >("medium");

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <ButtonGroup>
        <Button
          variant={priority === "low" ? "default" : "outline"}
          size="sm"
          onClick={() => setPriority("low")}
        >
          <ArrowDown className="h-4 w-4" />
          Low
        </Button>
        <Button
          variant={priority === "medium" ? "default" : "outline"}
          size="sm"
          onClick={() => setPriority("medium")}
        >
          <Minus className="h-4 w-4" />
          Medium
        </Button>
        <Button
          variant={priority === "high" ? "default" : "outline"}
          size="sm"
          onClick={() => setPriority("high")}
        >
          <ArrowUp className="h-4 w-4" />
          High
        </Button>
        <Button
          variant={priority === "urgent" ? "default" : "outline"}
          size="sm"
          onClick={() => setPriority("urgent")}
        >
          <AlertTriangle className="h-4 w-4" />
          Urgent
        </Button>
      </ButtonGroup>

      <p className="text-xs text-slate-400">
        Priority:{" "}
        <span
          className={`font-medium ${
            priority === "low"
              ? "text-green-500"
              : priority === "medium"
                ? "text-blue-500"
                : priority === "high"
                  ? "text-orange-500"
                  : "text-red-500"
          }`}
        >
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </span>
      </p>
    </div>
  );
};

export default PrioritySelectorButtonGroup;
