"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const SelectBasic = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid w-full items-center gap-1.5">
        <Label>Favorite Fruit</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
            <SelectItem value="mango">Mango</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectBasic;
