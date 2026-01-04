"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelLeft, Home, User, Settings, Mail, Bell, HelpCircle, LogOut } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: User, label: "Profile", active: false },
  { icon: Mail, label: "Messages", active: false, badge: 3 },
  { icon: Bell, label: "Notifications", active: false, badge: 12 },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help", active: false },
];

const SheetLeft = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <PanelLeft className="h-4 w-4" />
          Left Navigation
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle className="text-foreground flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              M
            </div>
            Menu
          </SheetTitle>
          <SheetDescription>Navigate through the app</SheetDescription>
        </SheetHeader>
        <nav className="mt-6 space-y-1">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  item.active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary text-primary-foreground"
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetLeft;
