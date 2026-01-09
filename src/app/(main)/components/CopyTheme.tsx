"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import ThemeData from "@/configs/themes.json";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, Copy, Palette } from "lucide-react";
import Link from "next/link";

function getThemeData(themeId: string) {
  const filteredTheme = ThemeData.find((data) => data.id === themeId);
  if (!filteredTheme) return { light: [], dark: [] };

  return {
    light: Object.entries(filteredTheme.light).map(([key, value]) => ({
      key,
      value: String(value),
    })),
    dark: Object.entries(filteredTheme.dark).map(([key, value]) => ({
      key,
      value: String(value),
    })),
  };
}

export function CopyTheme() {
  const [themeData, setThemeData] = useState<{
    light: { key: string; value: string }[];
    dark: { key: string; value: string }[];
  }>({ light: [], dark: [] });
  const [currentThemeName, setCurrentThemeName] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (open && typeof window !== "undefined") {
      const localThemeId = localStorage.getItem("theme-id") || "default";
      const theme = ThemeData.find((data) => data.id === localThemeId);
      setCurrentThemeName(theme?.name || "Default");
      setThemeData(getThemeData(localThemeId));
    }
    if (!open) {
      setCopied(false);
    }
  };

  const generateCssVariables = (
    data: { key: string; value: string }[],
    selector: string
  ) => {
    const cssVariables = data
      .map((item) => {
        const cssVar = item.key.replace(/([A-Z])/g, "-$1").toLowerCase();
        return `  --${cssVar}: ${item.value};`;
      })
      .join("\n");
    return `${selector} {\n${cssVariables}\n}`;
  };

  const generateThemeInline = (data: { key: string; value: string }[]) => {
    const themeInlineVariables = data
      .filter((item) => {
        const key = item.key.toLowerCase();
        return (
          !key.includes("font") &&
          !key.includes("radius") &&
          !key.includes("shadow") &&
          !key.includes("spacing") &&
          !key.includes("tracking")
        );
      })
      .map((item) => {
        const cssVar = item.key.replace(/([A-Z])/g, "-$1").toLowerCase();
        return `  --color-${cssVar}: var(--${cssVar});`;
      })
      .join("\n");

    return `@theme inline {
${themeInlineVariables}

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}`;
  };

  const handleCopyAll = () => {
    const lightCss = generateCssVariables(themeData.light, ":root");
    const darkCss = generateCssVariables(themeData.dark, ".dark");
    const themeInline = generateThemeInline(themeData.light);

    const fullCss = `${lightCss}\n\n${darkCss}\n\n${themeInline}`;

    navigator.clipboard.writeText(fullCss.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Copy Theme</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl z-100">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {currentThemeName} Theme
          </DialogTitle>
          <DialogDescription className="text-base">
            Copy CSS variables for light and dark mode. All of these themes are
            from{" "}
            <Link
              href="https://tweakcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary border-b border-b-primary"
            >
              https://tweakcn.com/
            </Link>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {themeData.light.length + themeData.dark.length} variables (Light
              + Dark)
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyAll}
              className="gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy All
                </>
              )}
            </Button>
          </div>

          <ScrollArea className="h-100 rounded-lg border bg-muted/30 p-4">
            <div className="space-y-4 font-mono text-sm">
              {/* Light Mode Section */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 sticky top-0 bg-muted/30 py-1">
                  :root (Light Mode)
                </h3>
                <div className="space-y-2">
                  {themeData.light.map((theme, index) => {
                    const cssVar = theme.key
                      .replace(/([A-Z])/g, "-$1")
                      .toLowerCase();
                    return (
                      <div
                        key={`light-${index}`}
                        className="flex items-start justify-between gap-4 rounded-md border border-border/40 bg-background px-3 py-2 hover:border-primary/40 hover:bg-accent/50 transition-colors"
                      >
                        <span className="font-semibold text-primary shrink-0">
                          {`--${cssVar}`}
                        </span>
                        <span className="text-muted-foreground text-right break-all">
                          {theme.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dark Mode Section */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 sticky top-0 bg-muted/30 py-1">
                  .dark (Dark Mode)
                </h3>
                <div className="space-y-2">
                  {themeData.dark.map((theme, index) => {
                    const cssVar = theme.key
                      .replace(/([A-Z])/g, "-$1")
                      .toLowerCase();
                    return (
                      <div
                        key={`dark-${index}`}
                        className="flex items-start justify-between gap-4 rounded-md border border-border/40 bg-background px-3 py-2 hover:border-primary/40 hover:bg-accent/50 transition-colors"
                      >
                        <span className="font-semibold text-primary shrink-0">
                          {`--${cssVar}`}
                        </span>
                        <span className="text-muted-foreground text-right break-all">
                          {theme.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        <div className="flex justify-end mt-4">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
