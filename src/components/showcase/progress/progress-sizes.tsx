"use client";

import { Progress } from "@/components/ui/progress";

const ProgressSizes = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="space-y-2">
        <span className="text-sm text-muted-foreground">Small (h-1)</span>
        <Progress value={60} className="h-1" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-muted-foreground">Default (h-2)</span>
        <Progress value={60} className="h-2" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-muted-foreground">Medium (h-3)</span>
        <Progress value={60} className="h-3" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-muted-foreground">Large (h-4)</span>
        <Progress value={60} className="h-4" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-muted-foreground">Extra Large (h-6)</span>
        <Progress value={60} className="h-6" />
      </div>
    </div>
  );
};

export default ProgressSizes;
