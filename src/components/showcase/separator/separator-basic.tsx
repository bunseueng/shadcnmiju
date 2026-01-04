"use client";

import { Separator } from "@/components/ui/separator";

const SeparatorBasic = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none text-foreground">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div className="text-foreground">Blog</div>
        <Separator orientation="vertical" />
        <div className="text-foreground">Docs</div>
        <Separator orientation="vertical" />
        <div className="text-foreground">Source</div>
      </div>
    </div>
  );
};

export default SeparatorBasic;
