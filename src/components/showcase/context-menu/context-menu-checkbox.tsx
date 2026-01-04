"use client";

import { useState } from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const ContextMenuCheckbox = () => {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(true);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground bg-muted/30">
        Right click for view options
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56 animate-in slide-in-from-bottom-2 fade-in-0 duration-200">
        <ContextMenuLabel>View Options</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
          className="cursor-pointer"
        >
          Show Bookmarks Bar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
          className="cursor-pointer"
        >
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
          className="cursor-pointer"
        >
          Show Status Bar
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuCheckbox;
