"use client";

import { Separator } from "@/components/ui/separator";
import { User, Settings, CreditCard, LogOut, HelpCircle, MessageSquare } from "lucide-react";

const SeparatorMenu = () => {
  const menuItems = [
    { icon: User, label: "Profile", shortcut: "⌘P" },
    { icon: Settings, label: "Settings", shortcut: "⌘S" },
    { icon: CreditCard, label: "Billing", shortcut: "⌘B" },
  ];

  const supportItems = [
    { icon: HelpCircle, label: "Help Center" },
    { icon: MessageSquare, label: "Feedback" },
  ];

  return (
    <div className="w-full max-w-[200px] rounded-lg border p-1">
      {menuItems.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-sm px-2 py-1.5 text-sm hover:bg-accent cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <item.icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{item.label}</span>
          </div>
          <span className="text-xs text-muted-foreground">{item.shortcut}</span>
        </div>
      ))}
      <Separator className="my-1" />
      {supportItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent cursor-pointer"
        >
          <item.icon className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground">{item.label}</span>
        </div>
      ))}
      <Separator className="my-1" />
      <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent cursor-pointer text-red-500">
        <LogOut className="h-4 w-4" />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default SeparatorMenu;
