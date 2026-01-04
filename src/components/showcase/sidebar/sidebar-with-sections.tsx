"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  FileText,
  Tag,
  TrendingUp,
} from "lucide-react";

const SidebarWithSections = () => {
  return (
    <div className="flex h-full w-full min-h-[600px]">
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarContent className="overflow-hidden">
            <SidebarGroup>
              <SidebarGroupLabel>Overview</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <TrendingUp className="h-4 w-4" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BarChart3 className="h-4 w-4" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Commerce</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ShoppingCart className="h-4 w-4" />
                      <span>Orders</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Package className="h-4 w-4" />
                      <span>Products</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Tag className="h-4 w-4" />
                      <span>Categories</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Users className="h-4 w-4" />
                      <span>Customers</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>System</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText className="h-4 w-4" />
                      <span>Documentation</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <HelpCircle className="h-4 w-4" />
                      <span>Help & Support</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-auto">
          <header className="flex h-16 items-center gap-4 border-b px-6 bg-muted/20">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">E-Commerce Dashboard</h1>
          </header>
          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Total Orders
                  </h3>
                </div>
                <p className="text-2xl font-bold">1,234</p>
                <p className="text-xs text-muted-foreground mt-1">
                  +12% from last month
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Products
                  </h3>
                </div>
                <p className="text-2xl font-bold">567</p>
                <p className="text-xs text-muted-foreground mt-1">
                  +5 new this week
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Customers
                  </h3>
                </div>
                <p className="text-2xl font-bold">8,432</p>
                <p className="text-xs text-muted-foreground mt-1">
                  +234 this month
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Revenue
                  </h3>
                </div>
                <p className="text-2xl font-bold">$89,432</p>
                <p className="text-xs text-muted-foreground mt-1">
                  +18% from last month
                </p>
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default SidebarWithSections;
