"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User,
  Bell,
  Star,
} from "lucide-react";

const SidebarMinimal = () => {
  return (
    <div className="flex h-full w-full min-h-[600px]">
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Home className="h-5 w-5" />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Search className="h-5 w-5" />
                      <span>Search</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Inbox className="h-5 w-5" />
                      <span>Inbox</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Calendar className="h-5 w-5" />
                      <span>Calendar</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Star className="h-5 w-5" />
                      <span>Favorites</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Bell className="h-5 w-5" />
                      <span>Notifications</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-auto">
          <header className="flex h-16 items-center gap-4 border-b px-6">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">Home</h1>
            </div>
          </header>
          <div className="p-6">
            <div className="max-w-4xl space-y-4">
              <div className="rounded-lg border bg-card p-8 text-center">
                <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
                <p className="text-muted-foreground">
                  This is a minimal sidebar layout with clean navigation.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-card p-6">
                  <Inbox className="h-8 w-8 mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">Inbox</h3>
                  <p className="text-sm text-muted-foreground">
                    12 new messages
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <Calendar className="h-8 w-8 mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">Calendar</h3>
                  <p className="text-sm text-muted-foreground">
                    5 events today
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <Bell className="h-8 w-8 mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">Notifications</h3>
                  <p className="text-sm text-muted-foreground">3 unread</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default SidebarMinimal;
