"use client";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonList = () => {
  return (
    <div className="w-full max-w-sm space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-8 w-8" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonList;
