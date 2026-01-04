"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SpinnerOverlay = () => {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card className="relative">
        {loading && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-8" />
              <p className="text-sm text-muted-foreground">Loading data...</p>
            </div>
          </div>
        )}
        <CardHeader>
          <CardTitle>Data Dashboard</CardTitle>
          <CardDescription>
            View your analytics and metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Revenue</p>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Users</p>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <Button onClick={handleLoad} className="w-full">
            Refresh Data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpinnerOverlay;
