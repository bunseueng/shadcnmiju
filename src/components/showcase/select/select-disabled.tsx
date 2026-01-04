"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const SelectDisabled = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid gap-1.5">
        <Label className="text-muted-foreground">Disabled Select</Label>
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Cannot select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label className="text-muted-foreground">With Disabled Options</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free Plan</SelectItem>
            <SelectItem value="basic">Basic Plan</SelectItem>
            <SelectItem value="pro" disabled>Pro Plan (Coming Soon)</SelectItem>
            <SelectItem value="enterprise" disabled>Enterprise (Contact Us)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label>Enabled Select</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectDisabled;
