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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const handleCopy = (mode: "light" | "dark") => {
    const data = mode === "light" ? themeData.light : themeData.dark;
    const cssVariables = data
      .map((item) => {
        const cssVar = item.key.replace(/([A-Z])/g, "-$1").toLowerCase();
        return `  --${cssVar}: ${item.value};`;
      })
      .join("\n");
    const fullCss = `${
      mode === "light" ? ":root" : ".dark"
    } {\n${cssVariables}\n}`;

    navigator.clipboard.writeText(fullCss);
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
            Copy CSS variables for light or dark mode. All of these theme are
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

        <Tabs defaultValue="light" className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="grid w-60 grid-cols-2">
              <TabsTrigger value="light">Light Mode</TabsTrigger>
              <TabsTrigger value="dark">Dark Mode</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="light" className="mt-0 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {themeData.light.length} variables
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy("light")}
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
              <div className="space-y-2 font-mono text-sm">
                {themeData.light.map((theme, index) => {
                  const cssVar = theme.key
                    .replace(/([A-Z])/g, "-$1")
                    .toLowerCase();
                  return (
                    <div
                      key={index}
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
            </ScrollArea>
          </TabsContent>

          <TabsContent value="dark" className="mt-0 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {themeData.dark.length} variables
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy("dark")}
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
              <div className="space-y-2 font-mono text-sm">
                {themeData.dark.map((theme, index) => {
                  const cssVar = theme.key
                    .replace(/([A-Z])/g, "-$1")
                    .toLowerCase();
                  return (
                    <div
                      key={index}
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
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end mt-4">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
