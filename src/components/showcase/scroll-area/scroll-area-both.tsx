"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ScrollAreaBoth = () => {
  return (
    <ScrollArea className="h-[200px] w-[300px] rounded-md border">
      <div className="p-4 min-w-[500px]">
        <h4 className="mb-4 text-sm font-medium leading-none text-foreground">
          Large Content Area
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          This scroll area demonstrates both horizontal and vertical scrolling.
          The content is wider and taller than the container.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="h-20 w-28 rounded-md border flex items-center justify-center text-sm text-foreground"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default ScrollAreaBoth;
