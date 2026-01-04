"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchWithDescription = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products and features.
          </p>
        </div>
        <Switch id="marketing" />
      </div>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label htmlFor="security">Security emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive alerts about your account security.
          </p>
        </div>
        <Switch id="security" defaultChecked />
      </div>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label htmlFor="newsletter">Newsletter</Label>
          <p className="text-sm text-muted-foreground">
            Weekly digest of trending topics.
          </p>
        </div>
        <Switch id="newsletter" />
      </div>
    </div>
  );
};

export default SwitchWithDescription;
