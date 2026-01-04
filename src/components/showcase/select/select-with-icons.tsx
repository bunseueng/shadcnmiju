"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Moon, Sun, Monitor, Palette, Sparkles } from "lucide-react";

const SelectWithIcons = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Select defaultValue="system">
        <SelectTrigger>
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <span>Light</span>
            </div>
          </SelectItem>
          <SelectItem value="dark">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4" />
              <span>Dark</span>
            </div>
          </SelectItem>
          <SelectItem value="system">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <span>System</span>
            </div>
          </SelectItem>
          <SelectItem value="custom">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>Custom</span>
            </div>
          </SelectItem>
          <SelectItem value="auto">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>Auto</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectWithIcons;
