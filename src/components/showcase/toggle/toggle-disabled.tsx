"use client";

import { Toggle } from "@/components/ui/toggle";
import { Lock, Unlock, Shield, ShieldOff } from "lucide-react";

const ToggleDisabled = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle aria-label="Toggle lock">
          <Lock className="h-4 w-4" />
        </Toggle>
        <span className="text-sm text-foreground">Enabled toggle</span>
      </div>
      <div className="flex items-center gap-4">
        <Toggle disabled aria-label="Toggle lock disabled">
          <Lock className="h-4 w-4" />
        </Toggle>
        <span className="text-sm text-muted-foreground">Disabled toggle</span>
      </div>
      <div className="flex items-center gap-4">
        <Toggle defaultPressed disabled aria-label="Toggle shield disabled pressed">
          <Shield className="h-4 w-4" />
        </Toggle>
        <span className="text-sm text-muted-foreground">Disabled pressed</span>
      </div>
    </div>
  );
};

export default ToggleDisabled;
