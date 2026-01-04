"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyError() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-md">
        <div className="rounded-full bg-destructive/10 p-6">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Something went wrong</h3>
          <p className="text-sm text-muted-foreground">
            We encountered an error while loading your data. Please try again.
          </p>
        </div>
        <div className="flex gap-2">
          <Button>Retry</Button>
          <Button variant="outline">Go Back</Button>
        </div>
      </div>
    </div>
  );
}
