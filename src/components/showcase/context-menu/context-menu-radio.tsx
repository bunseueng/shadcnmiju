"use client";

import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const ContextMenuRadio = () => {
  const [theme, setTheme] = useState("system");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground bg-gradient-to-br from-primary/5 to-primary/10">
        Right click for theme options
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48 animate-in zoom-in-90 fade-in-0 duration-200">
        <ContextMenuLabel>Theme</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
          <ContextMenuRadioItem value="light" className="cursor-pointer">
            Light
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark" className="cursor-pointer">
            Dark
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="system" className="cursor-pointer">
            System
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuRadio;
