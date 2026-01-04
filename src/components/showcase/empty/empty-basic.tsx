"use client";

import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyBasic() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-md">
        <div className="rounded-full bg-muted p-4">
          <FileQuestion className="h-10 w-10 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">No results found</h3>
          <p className="text-sm text-muted-foreground">
            We couldn't find any results matching your search.
          </p>
        </div>
        <Button variant="outline">Clear filters</Button>
      </div>
    </div>
  );
}
