"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Search, Settings, Users, FileText, BarChart, Bell, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const SidebarWithSearch = () => {
  return (
    <div className="flex h-full w-full min-h-[600px]">
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarHeader className="border-b p-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8 h-9"
              />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Users className="h-4 w-4" />
                      <span>Team</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText className="h-4 w-4" />
                      <span>Documents</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BarChart className="h-4 w-4" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Other</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Bell className="h-4 w-4" />
                      <span>Notifications</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Mail className="h-4 w-4" />
                      <span>Messages</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
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
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </header>
          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">Total Users</h3>
                <p className="text-3xl font-bold">2,543</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">Revenue</h3>
                <p className="text-3xl font-bold">$45,231</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">Active Projects</h3>
                <p className="text-3xl font-bold">12</p>
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default SidebarWithSearch;
