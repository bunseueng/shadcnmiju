"use client";

import { Spinner } from "@/components/ui/spinner";

const SpinnerPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <Spinner className="size-8" />
      <div className="text-center">
        <h3 className="text-lg font-medium text-foreground">Loading</h3>
        <p className="text-sm text-muted-foreground">Please wait while we fetch your data</p>
      </div>
    </div>
  );
};

export default SpinnerPage;
