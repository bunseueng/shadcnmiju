"use client";

import { Toggle } from "@/components/ui/toggle";
import { Star, Heart, Bookmark, Pin } from "lucide-react";

const ToggleVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Toggle variant="default" aria-label="Toggle star">
          <Star className="h-4 w-4" />
        </Toggle>
        <span className="text-sm text-muted-foreground">Default</span>
      </div>
      <div className="flex items-center gap-2">
        <Toggle variant="outline" aria-label="Toggle heart">
          <Heart className="h-4 w-4" />
        </Toggle>
        <span className="text-sm text-muted-foreground">Outline</span>
      </div>
      <div className="flex items-center gap-2">
        <Toggle size="sm" aria-label="Toggle bookmark">
          <Bookmark className="h-3 w-3" />
        </Toggle>
        <span className="text-sm text-muted-foreground">Small</span>
      </div>
      <div className="flex items-center gap-2">
        <Toggle size="lg" aria-label="Toggle pin">
          <Pin className="h-5 w-5" />
        </Toggle>
        <span className="text-sm text-muted-foreground">Large</span>
      </div>
    </div>
  );
};

export default ToggleVariants;
