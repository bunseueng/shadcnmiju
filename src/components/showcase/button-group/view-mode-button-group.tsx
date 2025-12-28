"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Grid, List } from "lucide-react";

import { useState } from "react";

const ViewModeButtonGroup = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ButtonGroup>
        <Button
          variant={viewMode === "grid" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode("grid")}
          className="flex-1"
        >
          <Grid className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === "list" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode("list")}
          className="flex-1"
        >
          <List className="h-4 w-4" />
        </Button>
      </ButtonGroup>
      <p className="mt-3 text-xs text-slate-400">
        Mode:{" "}
        <span className="text-slate-200 font-medium">
          {viewMode.slice(0, 1).toUpperCase() + viewMode.slice(1)}
        </span>
      </p>
    </div>
  );
};

export default ViewModeButtonGroup;
