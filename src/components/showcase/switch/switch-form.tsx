"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SwitchForm = () => {
  const [settings, setSettings] = useState({
    publicProfile: true,
    showEmail: false,
    showActivity: true,
    allowMessages: true,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="space-y-4 rounded-lg border p-4">
        <h3 className="text-lg font-medium text-foreground">Privacy Settings</h3>

        <div className="flex items-center justify-between">
          <Label htmlFor="public-profile">Public Profile</Label>
          <Switch
            id="public-profile"
            checked={settings.publicProfile}
            onCheckedChange={() => handleToggle('publicProfile')}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="show-email">Show Email</Label>
          <Switch
            id="show-email"
            checked={settings.showEmail}
            onCheckedChange={() => handleToggle('showEmail')}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="show-activity">Show Activity Status</Label>
          <Switch
            id="show-activity"
            checked={settings.showActivity}
            onCheckedChange={() => handleToggle('showActivity')}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="allow-messages">Allow Direct Messages</Label>
          <Switch
            id="allow-messages"
            checked={settings.allowMessages}
            onCheckedChange={() => handleToggle('allowMessages')}
          />
        </div>
      </div>

      <Button className="w-full">Save Settings</Button>
    </div>
  );
};

export default SwitchForm;
