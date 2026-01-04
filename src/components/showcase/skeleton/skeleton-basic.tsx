"use client";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonBasic = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
};

export default SkeletonBasic;
