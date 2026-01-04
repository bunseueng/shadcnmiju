"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchBasic = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="wifi" defaultChecked />
        <Label htmlFor="wifi">WiFi</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="bluetooth" />
        <Label htmlFor="bluetooth">Bluetooth</Label>
      </div>
    </div>
  );
};

export default SwitchBasic;
