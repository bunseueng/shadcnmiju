"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Bell, MessageSquare, UserPlus, Heart, Settings } from "lucide-react";

const notifications = [
  { icon: MessageSquare, title: "New message", desc: "John sent you a message", time: "2m ago", color: "text-blue-500" },
  { icon: UserPlus, title: "New follower", desc: "Sarah started following you", time: "1h ago", color: "text-green-500" },
  { icon: Heart, title: "New like", desc: "Your post received 50 likes", time: "3h ago", color: "text-red-500" },
];

const PopoverNotifications = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
            3
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h4 className="font-semibold text-foreground">Notifications</h4>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.map((notif, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 hover:bg-accent cursor-pointer transition-colors border-b border-border last:border-0"
            >
              <div className={`p-2 rounded-full bg-muted ${notif.color}`}>
                <notif.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{notif.title}</p>
                <p className="text-sm text-muted-foreground truncate">{notif.desc}</p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">{notif.time}</span>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-border">
          <Button variant="ghost" className="w-full text-primary">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverNotifications;
