/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type ComponentPreviewType } from "@/types/ComponentType";
import { useEffect, useState } from "react";
import {
  Code,
  Command,
  CloudDownload,
  Copy,
  Check,
  Tablet,
  Smartphone,
  TvMinimal,
  LayoutList,
  Grid3x3,
} from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import { toast } from "sonner";
import { SelectTheme } from "./SelectTheme";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { CopyTheme } from "./CopyTheme";
import { DynamicComponentPreview } from "./DynamicComponentPreview";
import { Button } from "@/components/ui/button";

interface ComponentPreviewProps {
  selectedComponent: ComponentPreviewType | undefined;
  components: ComponentPreviewType[];
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

const ComponentPreview = ({
  components,
  selectedComponent,
  viewMode,
  setViewMode,
}: ComponentPreviewProps) => {
  const [activeTab, setActiveTab] = useState<
    Record<string, "preview" | "code">
  >({});
  const [isCopy, setIsCopy] = useState<Record<string, boolean>>({});
  const [size, setSize] = useState<Record<string, { width: number | null }>>(
    {}
  );
  const [screenTab, setScreenTab] = useState<
    Record<string, "desktop" | "tablet" | "mobile">
  >({});
  const [isMobile, setIsMobile] = useState(false);

  const handleCopy = (value: string, id?: string) => {
    navigator.clipboard.writeText(value);
    setIsCopy((prev) => ({ ...prev, [id || value]: true }));
    toast("Copied to clipboard");
    setTimeout(() => {
      setIsCopy((prev) => ({ ...prev, [id || value]: false }));
    }, 2000); // 2 seconds
  };

  const handleDownload = (code: string, fileName: string) => {
    // Create a blob from the code content
    const blob = new Blob([code], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.tsx`;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast("File downloaded");
  };

  const setItemWidth = (id: string, width: number | null) => {
    setSize((prev) => ({
      ...prev,
      [id]: { width },
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex-1 w-full">
      <div className="flex  items-start sm:items-center justify-between gap-3 p-3 md:p-4 sticky top-0 lg:top-0 bg-background z-30 shrink-0 border-b border-dashed">
        <div className="flex items-center gap-2">
          <ModeToggle />
          <SelectTheme />
        </div>
        <div className="flex items-center gap-2">
          <CopyTheme />
          <div className="flex items-center gap-1 rounded-md border border-border bg-primary">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              className="h-7 w-7"
              onClick={() => setViewMode("list")}
              title="List View"
            >
              <LayoutList className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="h-7 w-7"
              onClick={() => setViewMode("grid")}
              title="Grid View"
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
          </div>
        </div>{" "}
      </div>
      <div className="p-3 md:p-4">
        {selectedComponent?.variants.map((variant) => {
          const currentTab = activeTab[variant.id] || "preview";
          const currentComponent = components.find(
            (c) => c.type === variant.type
          );
          return (
            <div
              className="flex flex-col items-start justify-between gap-3 py-3 md:py-4"
              key={variant.id}
            >
              <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center justify-between w-full gap-3 lg:space-x-4">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full lg:w-auto">
                  <div className="flex items-center gap-2 shrink-0">
                    <h1 className="text-lg md:text-xl lg:text-2xl">
                      {variant.name}
                    </h1>
                    <Badge className="rounded-xs!">Free</Badge>
                  </div>
                  <div className="hidden md:block border h-8 border-muted-foreground opacity-50" />

                  <Tabs
                    value={currentTab}
                    onValueChange={(value: any) =>
                      setActiveTab((prev) => ({ ...prev, [variant.id]: value }))
                    }
                    className="shrink-0"
                  >
                    <TabsList className="p-1">
                      <TabsTrigger
                        value="preview"
                        className="text-xs md:text-sm"
                      >
                        Preview
                      </TabsTrigger>
                      <TabsTrigger value="code" className="text-xs md:text-sm">
                        Code
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="flex flex-col gap-2 shrink-0">
                    <div className="bg-muted text-muted-foreground inline-flex h-8 md:h-9 w-fit items-center justify-center rounded-lg p-1 gap-1 md:gap-2">
                      <div
                        className="bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring border-input dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1 md:gap-1.5 rounded-md border px-1.5 md:px-2 py-1 text-xs md:text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer"
                        onClick={() => handleCopy(variant.code as string)}
                      >
                        <Code className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </div>
                      <div
                        className="bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring border-input dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1 md:gap-1.5 rounded-md border px-1.5 md:px-2 py-1 text-xs md:text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer"
                        onClick={() =>
                          handleCopy(currentComponent?.installCommand as string)
                        }
                      >
                        <Command className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </div>
                      <div
                        className="bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring border-input dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1 md:gap-1.5 rounded-md border px-1.5 md:px-2 py-1 text-xs md:text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer"
                        onClick={() =>
                          handleDownload(
                            variant.code as string,
                            `${selectedComponent.type}-${variant.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`
                          )
                        }
                      >
                        <CloudDownload className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {!isMobile && (
                  <Tabs
                    value={screenTab[variant.id] || "desktop"}
                    onValueChange={(value: any) =>
                      setScreenTab((prev) => ({ ...prev, [variant.id]: value }))
                    }
                  >
                    <TabsList className="p-1">
                      <TabsTrigger
                        value="desktop"
                        className="text-xs md:text-sm px-2 md:px-3"
                        onClick={() => setItemWidth(variant.id, null)}
                      >
                        <TvMinimal className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="tablet"
                        className="text-xs md:text-sm px-2 md:px-3"
                        onClick={() => setItemWidth(variant.id, 768)}
                      >
                        <Tablet className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="mobile"
                        className="text-xs md:text-sm px-2 md:px-3"
                        onClick={() => setItemWidth(variant.id, 375)}
                      >
                        <Smartphone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                )}
              </div>
              {currentTab === "preview" && (
                <div className="w-full aspect-square sm:aspect-4/3 md:aspect-16/10 lg:aspect-video rounded-lg md:rounded-xl border overflow-hidden relative bg-muted/60">
                  <div className="w-full h-full">
                    <DynamicComponentPreview
                      componentPath={`${selectedComponent.type}/${variant.id}`}
                      variantId={variant.id}
                      size={size}
                    />
                  </div>
                </div>
              )}

              {currentTab === "code" && (
                <div className="w-full h-full">
                  <pre className="relative mt-2 overflow-x-auto rounded-lg bg-gray-900 p-3 md:p-4 font-mono text-xs">
                    <code
                      className="language-ts"
                      dangerouslySetInnerHTML={{
                        __html: Prism.highlight(
                          variant.code as string,
                          Prism.languages.typescript,
                          "typescript"
                        ),
                      }}
                      data-prismjs-copy="Copy the C snippet!"
                    />
                    <button
                      className="absolute top-4 right-4 text-white cursor-pointer"
                      onClick={() =>
                        handleCopy(variant.code as string, variant.id)
                      }
                    >
                      {isCopy[variant.id] ? (
                        <Check size={17} />
                      ) : (
                        <Copy size={17} />
                      )}
                    </button>
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentPreview;
