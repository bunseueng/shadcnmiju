"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Bell, BellOff, Clock, Trash } from "lucide-react";

import { useState } from "react";

const NotificationButtonGroup = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notificationCount, setNotificationCount] = useState(5);
  const [isSnoozed, setIsSnoozed] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    if (notificationsEnabled) {
      setIsSnoozed(false);
    }
  };

  const snoozeNotifications = () => {
    setIsSnoozed(true);
    setNotificationsEnabled(false);
  };

  const clearNotifications = () => {
    setNotificationCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <ButtonGroup>
        <Button
          variant={notificationsEnabled ? "default" : "outline"}
          size="sm"
          onClick={toggleNotifications}
        >
          {notificationsEnabled ? (
            <Bell className="h-4 w-4" />
          ) : (
            <BellOff className="h-4 w-4" />
          )}
          {notificationsEnabled ? "On" : "Off"}
        </Button>
        <Button
          variant={isSnoozed ? "default" : "outline"}
          size="sm"
          onClick={snoozeNotifications}
          disabled={!notificationsEnabled && !isSnoozed}
        >
          <Clock className="h-4 w-4" /> Snooze
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={clearNotifications}
          disabled={notificationCount === 0}
        >
          <Trash className="h-4 w-4" /> Clear ({notificationCount})
        </Button>
      </ButtonGroup>

      <p className="text-xs text-slate-400">
        Status:{" "}
        <span className="text-slate-200 font-medium">
          {isSnoozed
            ? "Snoozed"
            : notificationsEnabled
              ? `${notificationCount} notification${notificationCount !== 1 ? "s" : ""}`
              : "Disabled"}
        </span>
      </p>
    </div>
  );
};

export default NotificationButtonGroup;
