"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TextareaDisabled = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid gap-1.5">
        <Label htmlFor="enabled">Enabled</Label>
        <Textarea id="enabled" placeholder="You can type here..." />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="disabled" className="text-muted-foreground">
          Disabled
        </Label>
        <Textarea id="disabled" placeholder="Cannot type here" disabled />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="readonly">Read Only</Label>
        <Textarea
          id="readonly"
          readOnly
          defaultValue="This content is read-only and cannot be modified by the user."
        />
      </div>
    </div>
  );
};

export default TextareaDisabled;
