"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsPills = () => {
  return (
    <Tabs defaultValue="daily" className="w-full max-w-md">
      <TabsList className="h-auto p-1 bg-muted rounded-full w-full">
        <TabsTrigger
          value="daily"
          className="flex-1 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm py-2"
        >
          Daily
        </TabsTrigger>
        <TabsTrigger
          value="weekly"
          className="flex-1 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm py-2"
        >
          Weekly
        </TabsTrigger>
        <TabsTrigger
          value="monthly"
          className="flex-1 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm py-2"
        >
          Monthly
        </TabsTrigger>
        <TabsTrigger
          value="yearly"
          className="flex-1 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm py-2"
        >
          Yearly
        </TabsTrigger>
      </TabsList>
      <TabsContent value="daily" className="mt-6">
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-foreground">$12.99</div>
          <div className="text-sm text-muted-foreground">per day</div>
          <div className="text-xs text-green-500">Save 0%</div>
        </div>
      </TabsContent>
      <TabsContent value="weekly" className="mt-6">
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-foreground">$49.99</div>
          <div className="text-sm text-muted-foreground">per week</div>
          <div className="text-xs text-green-500">Save 45%</div>
        </div>
      </TabsContent>
      <TabsContent value="monthly" className="mt-6">
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-foreground">$99.99</div>
          <div className="text-sm text-muted-foreground">per month</div>
          <div className="text-xs text-green-500">Save 74%</div>
        </div>
      </TabsContent>
      <TabsContent value="yearly" className="mt-6">
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-foreground">$499.99</div>
          <div className="text-sm text-muted-foreground">per year</div>
          <div className="text-xs text-green-500">Save 89%</div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsPills;
