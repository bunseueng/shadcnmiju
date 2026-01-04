"use client";

import { Bell } from "lucide-react";

export default function EmptyNoNotifications() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-md">
        <div className="rounded-full bg-muted p-6">
          <Bell className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">No notifications</h3>
          <p className="text-sm text-muted-foreground">
            You're all caught up! Check back later for new updates.
          </p>
        </div>
      </div>
    </div>
  );
}
