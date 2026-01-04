"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Paintbrush } from "lucide-react";

const colors = [
  "#ef4444", "#f97316", "#eab308", "#22c55e", "#14b8a6",
  "#3b82f6", "#6366f1", "#a855f7", "#ec4899", "#f43f5e",
  "#000000", "#71717a", "#a1a1aa", "#d4d4d8", "#ffffff",
];

const PopoverColorPicker = () => {
  const [color, setColor] = useState("#3b82f6");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <div
            className="h-4 w-4 rounded-full border border-border"
            style={{ backgroundColor: color }}
          />
          Pick Color
          <Paintbrush className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Color Picker</h4>
          <div className="grid grid-cols-5 gap-2">
            {colors.map((c) => (
              <button
                key={c}
                className={`h-8 w-8 rounded-md border-2 transition-all hover:scale-110 ${
                  color === c ? "border-primary ring-2 ring-primary/30" : "border-border"
                }`}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-10 w-10 rounded-md border border-border shrink-0"
              style={{ backgroundColor: color }}
            />
            <Input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-10 font-mono uppercase"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverColorPicker;
