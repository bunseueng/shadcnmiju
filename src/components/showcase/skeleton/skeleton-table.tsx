"use client";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTable = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-8 w-[100px]" />
      </div>
      <div className="rounded-lg border">
        <div className="border-b p-4 flex gap-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 flex gap-4 border-b last:border-0">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonTable;
