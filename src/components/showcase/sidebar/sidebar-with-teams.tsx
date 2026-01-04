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
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Home,
  Inbox,
  Calendar,
  Settings,
  Users,
  FolderKanban,
  ChevronDown,
  Plus
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SidebarWithTeams = () => {
  return (
    <div className="flex h-full w-full min-h-[600px]">
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarHeader className="border-b p-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-accent">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium">Acme Inc</p>
                  <p className="truncate text-xs text-muted-foreground">Free Plan</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[240px]">
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Acme Corp</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Create team</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox className="h-4 w-4" />
                      <span>Inbox</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Calendar className="h-4 w-4" />
                      <span>Calendar</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FolderKanban className="h-4 w-4" />
                      <span>Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      <span>General</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Users className="h-4 w-4" />
                      <span>Team</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                JD
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium">John Doe</p>
                <p className="truncate text-xs text-muted-foreground">john@example.com</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 overflow-auto">
          <header className="flex h-16 items-center gap-4 border-b px-6">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Team Dashboard</h1>
          </header>
          <div className="p-6">
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-4">Team Overview</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your team members, projects, and workspace settings from this dashboard.
                </p>
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default SidebarWithTeams;
