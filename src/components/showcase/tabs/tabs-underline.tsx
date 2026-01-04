"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const TabsUnderline = () => {
  return (
    <Tabs defaultValue="all" className="w-full max-w-lg">
      <TabsList className="h-auto p-0 bg-transparent border-b border-border rounded-none w-full justify-start gap-4">
        <TabsTrigger
          value="all"
          className="relative rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 px-0"
        >
          All Items
        </TabsTrigger>
        <TabsTrigger
          value="active"
          className="relative rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 px-0 gap-2"
        >
          Active
          <Badge variant="secondary" className="h-5 px-1.5">12</Badge>
        </TabsTrigger>
        <TabsTrigger
          value="completed"
          className="relative rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 px-0 gap-2"
        >
          Completed
          <Badge variant="secondary" className="h-5 px-1.5">48</Badge>
        </TabsTrigger>
        <TabsTrigger
          value="archived"
          className="relative rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 px-0"
        >
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-4">
        <div className="p-4 rounded-lg bg-muted/30 text-foreground">
          Showing all 60 items in your collection.
        </div>
      </TabsContent>
      <TabsContent value="active" className="mt-4">
        <div className="p-4 rounded-lg bg-green-500/10 text-green-700 dark:text-green-400">
          12 active items that need your attention.
        </div>
      </TabsContent>
      <TabsContent value="completed" className="mt-4">
        <div className="p-4 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400">
          48 completed items. Great job!
        </div>
      </TabsContent>
      <TabsContent value="archived" className="mt-4">
        <div className="p-4 rounded-lg bg-muted/30 text-muted-foreground">
          No archived items yet.
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsUnderline;
