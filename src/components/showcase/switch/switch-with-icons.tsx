"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Moon, Sun, Bell, BellOff, Wifi, WifiOff } from "lucide-react";
import { useState } from "react";

const SwitchWithIcons = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [wifi, setWifi] = useState(true);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {darkMode ? (
            <Moon className="h-4 w-4 text-foreground" />
          ) : (
            <Sun className="h-4 w-4 text-foreground" />
          )}
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
        <Switch
          id="dark-mode"
          checked={darkMode}
          onCheckedChange={setDarkMode}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {notifications ? (
            <Bell className="h-4 w-4 text-foreground" />
          ) : (
            <BellOff className="h-4 w-4 text-muted-foreground" />
          )}
          <Label htmlFor="notifications">Notifications</Label>
        </div>
        <Switch
          id="notifications"
          checked={notifications}
          onCheckedChange={setNotifications}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {wifi ? (
            <Wifi className="h-4 w-4 text-foreground" />
          ) : (
            <WifiOff className="h-4 w-4 text-muted-foreground" />
          )}
          <Label htmlFor="wifi-toggle">WiFi</Label>
        </div>
        <Switch
          id="wifi-toggle"
          checked={wifi}
          onCheckedChange={setWifi}
        />
      </div>
    </div>
  );
};

export default SwitchWithIcons;
