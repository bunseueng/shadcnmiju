"use client";

import { Spinner } from "@/components/ui/spinner";

const SpinnerColors = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6 text-primary" />
        <span className="text-xs text-muted-foreground">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6 text-destructive" />
        <span className="text-xs text-muted-foreground">Destructive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6 text-green-500" />
        <span className="text-xs text-muted-foreground">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6 text-yellow-500" />
        <span className="text-xs text-muted-foreground">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6 text-blue-500" />
        <span className="text-xs text-muted-foreground">Info</span>
      </div>
    </div>
  );
};

export default SpinnerColors;
