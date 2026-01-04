"use client";

import { Spinner } from "@/components/ui/spinner";

const SpinnerBasic = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <Spinner className="size-4" />
          <span className="text-xs text-muted-foreground">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner className="size-6" />
          <span className="text-xs text-muted-foreground">Medium</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner className="size-8" />
          <span className="text-xs text-muted-foreground">Large</span>
        </div>
      </div>
    </div>
  );
};

export default SpinnerBasic;
