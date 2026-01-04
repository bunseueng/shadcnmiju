"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputDisabled = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="disabled-empty">Disabled (Empty)</Label>
        <Input id="disabled-empty" disabled placeholder="Cannot type here" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="disabled-value">Disabled (With Value)</Label>
        <Input id="disabled-value" disabled defaultValue="Read-only content" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="readonly">Read Only</Label>
        <Input id="readonly" readOnly defaultValue="This is read-only text" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="enabled">Enabled</Label>
        <Input id="enabled" placeholder="You can type here" />
      </div>
    </div>
  );
};

export default InputDisabled;
