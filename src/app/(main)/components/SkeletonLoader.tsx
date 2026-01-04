"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Masonry from "react-masonry-css";

export function SkeletonComponentPreview() {
  const breakpointColumns = {
    default: 3,
    1280: 3,
    1024: 2,
    768: 2,
    640: 2,
    480: 1,
  };

  return (
    <div className="flex-1 w-full">
      {/* Header */}
      <div className="flex items-start sm:items-center justify-between gap-3 p-3 md:p-4 sticky top-0 lg:top-18 bg-background z-30 shrink-0 border-b border-dashed">
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-24" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-24" />
          <div className="flex items-center gap-1 rounded-md">
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-7" />
          </div>
        </div>
      </div>

      {/* Grid View Skeleton */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto px-4 py-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {Array.from({ length: 12 }).map((_, idx) => (
          <div className="flex flex-col gap-3 mb-4" key={idx}>
            <div className="flex flex-col gap-3 w-full rounded-lg border overflow-hidden bg-card p-0">
              {/* Header */}
              <div className="flex items-center justify-between gap-2 p-2 border-b bg-muted/30">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-12 rounded-sm" />
                </div>
                <Skeleton className="h-6 w-6" />
              </div>

              {/* Preview Thumbnail */}
              <div className="w-full bg-muted/20 min-h-40 flex items-center justify-center relative overflow-hidden">
                <Skeleton className="w-full h-40" />
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export function SkeletonComponentList() {
  return (
    <aside className="w-full border-b lg:border-b-0 lg:border-r border-dashed bg-background lg:sticky lg:top-18 lg:h-[calc(100vh-64px)] lg:overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Search Bar */}
        <div className="flex w-full flex-col gap-4 lg:gap-6 py-3 lg:py-4 border-b border-dashed px-3 lg:px-4 shrink-0">
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Components List */}
        <div className="flex flex-col gap-2 py-3 lg:py-4 px-3 lg:px-4">
          <Skeleton className="h-6 w-24" />
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 rounded-lg border p-2"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function SkeletonComponentShowcase() {
  return (
    <div className="border rounded-md lg:grid lg:grid-cols-[300px_1fr]">
      <SkeletonComponentList />
      <SkeletonComponentPreview />
    </div>
  );
}
