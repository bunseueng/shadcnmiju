"use client";

import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyNoData() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-md">
        <div className="rounded-full bg-muted p-6">
          <Database className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">No data available</h3>
          <p className="text-sm text-muted-foreground">
            Get started by adding your first item to the database.
          </p>
        </div>
        <div className="flex gap-2">
          <Button>Add Item</Button>
          <Button variant="outline">Import Data</Button>
        </div>
      </div>
    </div>
  );
}
