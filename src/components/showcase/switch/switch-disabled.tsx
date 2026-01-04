"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchDisabled = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="enabled" />
        <Label htmlFor="enabled">Enabled</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off" className="text-muted-foreground">
          Disabled (Off)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on" className="text-muted-foreground">
          Disabled (On)
        </Label>
      </div>
    </div>
  );
};

export default SwitchDisabled;
