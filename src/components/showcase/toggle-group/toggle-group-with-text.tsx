"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { List, Grid3x3, Rows3 } from "lucide-react";

const ToggleGroupWithText = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <ToggleGroup type="single" defaultValue="list">
        <ToggleGroupItem value="list">
          <List className="h-4 w-4 mr-2" />
          List
        </ToggleGroupItem>
        <ToggleGroupItem value="grid">
          <Grid3x3 className="h-4 w-4 mr-2" />
          Grid
        </ToggleGroupItem>
        <ToggleGroupItem value="table">
          <Rows3 className="h-4 w-4 mr-2" />
          Table
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ToggleGroupWithText;
