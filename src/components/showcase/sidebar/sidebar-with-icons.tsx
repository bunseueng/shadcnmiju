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
  Search,
  Library,
  Music,
  Radio,
  ListMusic,
  Heart,
  Clock
} from "lucide-react";

const SidebarWithIcons = () => {
  return (
    <div className="flex h-full w-full min-h-[600px]">
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg" className="mb-1">
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Music className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold">Music App</span>
                        <span className="text-xs text-muted-foreground">v1.0.0</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
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
                      <Search className="h-4 w-4" />
                      <span>Search</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Library className="h-4 w-4" />
                      <span>Your Library</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ListMusic className="h-4 w-4" />
                      <span>Playlists</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Radio className="h-4 w-4" />
                      <span>Radio</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Heart className="h-4 w-4" />
                      <span>Liked Songs</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Clock className="h-4 w-4" />
                      <span>Recently Played</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-auto bg-gradient-to-b from-primary/10 to-background">
          <header className="flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-6">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Discover</h1>
          </header>
          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-lg border bg-card p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="aspect-square rounded-md bg-muted mb-3 flex items-center justify-center">
                    <Music className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1">Playlist {i}</h3>
                  <p className="text-xs text-muted-foreground">50 songs</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default SidebarWithIcons;
