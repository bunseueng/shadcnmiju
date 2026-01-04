"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Settings, Bell, Shield } from "lucide-react";

const TabsWithIcons = () => {
  return (
    <Tabs defaultValue="profile" className="w-full max-w-lg">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile" className="gap-2">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Profile</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="gap-2">
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline">Settings</span>
        </TabsTrigger>
        <TabsTrigger value="notifications" className="gap-2">
          <Bell className="h-4 w-4" />
          <span className="hidden sm:inline">Alerts</span>
        </TabsTrigger>
        <TabsTrigger value="security" className="gap-2">
          <Shield className="h-4 w-4" />
          <span className="hidden sm:inline">Security</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="mt-4 p-4 rounded-lg border border-border">
        <h3 className="font-semibold text-foreground mb-2">Profile Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your public profile information and how others see you.
        </p>
      </TabsContent>
      <TabsContent value="settings" className="mt-4 p-4 rounded-lg border border-border">
        <h3 className="font-semibold text-foreground mb-2">General Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure your app preferences and display options.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="mt-4 p-4 rounded-lg border border-border">
        <h3 className="font-semibold text-foreground mb-2">Notification Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Choose which notifications you want to receive.
        </p>
      </TabsContent>
      <TabsContent value="security" className="mt-4 p-4 rounded-lg border border-border">
        <h3 className="font-semibold text-foreground mb-2">Security Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your password and two-factor authentication.
        </p>
      </TabsContent>
    </Tabs>
  );
};

export default TabsWithIcons;
