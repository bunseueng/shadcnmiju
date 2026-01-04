"use client";

import { Toggle } from "@/components/ui/toggle";
import { Wifi, WifiOff, Bell, BellOff, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const ToggleWithText = () => {
  const [wifi, setWifi] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Toggle
        pressed={wifi}
        onPressedChange={setWifi}
        className="justify-start gap-2 w-full max-w-[200px]"
        aria-label="Toggle wifi"
      >
        {wifi ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
        <span>WiFi {wifi ? "On" : "Off"}</span>
      </Toggle>
      <Toggle
        pressed={notifications}
        onPressedChange={setNotifications}
        className="justify-start gap-2 w-full max-w-[200px]"
        aria-label="Toggle notifications"
      >
        {notifications ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
        <span>Notifications {notifications ? "On" : "Off"}</span>
      </Toggle>
      <Toggle
        pressed={visibility}
        onPressedChange={setVisibility}
        className="justify-start gap-2 w-full max-w-[200px]"
        aria-label="Toggle visibility"
      >
        {visibility ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        <span>{visibility ? "Visible" : "Hidden"}</span>
      </Toggle>
    </div>
  );
};

export default ToggleWithText;
