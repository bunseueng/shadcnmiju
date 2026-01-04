"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { applyTheme, themes } from "@/configs/themes";
import { useTheme } from "next-themes";

export function SelectTheme() {
  const [open, setOpen] = React.useState(false);
  const [selectedThemeId, setSelectedThemeId] = React.useState("");
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
    const localTheme = localStorage.getItem("theme-id");
    if (localTheme) {
      setSelectedThemeId(localTheme);
    }
  }, []);

  // Listen to theme changes and re-apply the custom theme
  React.useEffect(() => {
    if (theme && (theme === "light" || theme === "dark") && selectedThemeId) {
      applyTheme(selectedThemeId, theme);
      localStorage.setItem("theme-id", selectedThemeId);
    }
  }, [selectedThemeId, theme]);

  // Return null on server and first render to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="outline" className="w-50 justify-between" disabled>
        Select theme...
        <ChevronsUpDown className="opacity-50" />
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-50 justify-between"
        >
          {themes.find((t) => t.id === selectedThemeId)?.name ||
            "Select theme..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <Command>
          <CommandInput placeholder="Search theme..." className="h-9" />
          <CommandList>
            <CommandEmpty>No theme found.</CommandEmpty>
            <CommandGroup>
              {themes.map((t) => (
                <CommandItem
                  key={t.id}
                  value={t.name}
                  onSelect={() => {
                    setSelectedThemeId(t.id);
                    applyTheme(t.id, theme as "light" | "dark");
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between",
                    selectedThemeId === t.id ? "bg-secondary" : "bg-transparent"
                  )}
                >
                  {t.name}
                  <span className="text-xs text-end">by tweakcn</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
