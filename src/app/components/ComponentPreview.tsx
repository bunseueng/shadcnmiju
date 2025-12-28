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
  Eye,
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
import Masonry from "react-masonry-css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [dialogTab, setDialogTab] = useState<"preview" | "code">("preview");

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

  // Responsive breakpoints for masonry columns
  const breakpointColumns = {
    default: 3, // 6 columns on very large screens
    1280: 3, // 4 columns on xl screens
    1024: 2, // 3 columns on lg screens
    768: 2, // 2 columns on md screens
    640: 2, // 2 columns on sm screens
    480: 1, // 1 column on xs screens
  };
  return (
    <div className="flex-1 w-full">
      <div className="flex  items-start sm:items-center justify-between gap-3 p-3 md:p-4 sticky top-0 lg:top-0 bg-background z-30 shrink-0 border-b border-dashed">
        <div className="flex items-center gap-2">
          <ModeToggle />
          <SelectTheme />
        </div>
        <div className="flex items-center gap-2">
          <CopyTheme />
          <div className="flex items-center gap-1 rounded-md">
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
      {viewMode === "grid" ? (
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto px-4 py-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {selectedComponent?.variants.map((variant) => {
            return (
              <div className="flex flex-col gap-3 mb-4" key={variant.id}>
                <div
                  className="w-full rounded-lg border overflow-hidden relative bg-card group hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => {
                    setSelectedVariant(variant);
                    setDialogTab("preview");
                    setDialogOpen(true);
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 p-2 border-b bg-muted/30">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <h3 className="text-sm font-medium truncate">
                        {variant.name}
                      </h3>
                      <Badge className="rounded-sm shrink-0">Free</Badge>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVariant(variant);
                        setDialogTab("preview");
                        setDialogOpen(true);
                      }}
                    >
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* Preview Thumbnail */}
                  <div className="w-full bg-muted/20 min-h-40 flex items-center justify-center relative overflow-hidden">
                    <DynamicComponentPreview
                      componentPath={`${selectedComponent.type}/${variant.id}`}
                      variantId={variant.id}
                      size={size}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedVariant(variant);
                            setDialogTab("preview");
                            setDialogOpen(true);
                          }}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedVariant(variant);
                            setDialogTab("code");
                            setDialogOpen(true);
                          }}
                        >
                          <Code className="h-3 w-3 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>
      ) : (
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
                        setActiveTab((prev) => ({
                          ...prev,
                          [variant.id]: value,
                        }))
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
                        <TabsTrigger
                          value="code"
                          className="text-xs md:text-sm"
                        >
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
                            handleCopy(
                              currentComponent?.installCommand as string
                            )
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
                        setScreenTab((prev) => ({
                          ...prev,
                          [variant.id]: value,
                        }))
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
      )}

      {/* Dialog for Grid View */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] max-w-375! h-[95vh] sm:h-[90vh] p-0 flex flex-col gap-0">
          <DialogHeader className="p-3 sm:p-4 border-b shrink-0">
            <div className="flex flex-col gap-3">
              {/* First Row: Title and Badge */}
              <div className="flex items-center gap-2 sm:gap-3 justify-between pr-8">
                <DialogTitle className="text-sm sm:text-base md:text-lg truncate flex-1">
                  {selectedVariant?.name}
                </DialogTitle>
                <Badge className="shrink-0 text-xs">Free</Badge>
              </div>

              {/* Second Row: Controls */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Screen Size Tabs - Desktop Only */}
                {!isMobile && (
                  <Tabs
                    value={screenTab[selectedVariant?.id] || "desktop"}
                    onValueChange={(value: any) =>
                      setScreenTab((prev) => ({
                        ...prev,
                        [selectedVariant?.id]: value,
                      }))
                    }
                  >
                    <TabsList className="h-8 p-0.5">
                      <TabsTrigger
                        value="desktop"
                        className="h-7 px-2 sm:px-3"
                        onClick={() => setItemWidth(selectedVariant?.id, null)}
                      >
                        <TvMinimal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="tablet"
                        className="h-7 px-2 sm:px-3"
                        onClick={() => setItemWidth(selectedVariant?.id, 768)}
                      >
                        <Tablet className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="mobile"
                        className="h-7 px-2 sm:px-3"
                        onClick={() => setItemWidth(selectedVariant?.id, 375)}
                      >
                        <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                )}

                {/* Preview/Code Tabs */}
                <Tabs
                  value={dialogTab}
                  onValueChange={(v: any) => setDialogTab(v)}
                  className="flex-1 sm:flex-initial"
                >
                  <TabsList className="h-8 w-full sm:w-auto">
                    <TabsTrigger
                      value="preview"
                      className="h-7 flex-1 sm:flex-initial text-xs sm:text-sm"
                    >
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Preview</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="code"
                      className="h-7 flex-1 sm:flex-initial text-xs sm:text-sm"
                    >
                      <Code className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Code</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                {/* Copy Button - Icon only on mobile, with text on desktop */}
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-2 sm:px-3"
                  onClick={() => handleCopy(selectedVariant?.code as string)}
                >
                  {isCopy[selectedVariant?.id] ? (
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-2" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-2" />
                  )}
                  <span className="hidden sm:inline">Copy</span>
                </Button>

                {/* Download Button - Icon only on mobile, with text on desktop */}
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-2 sm:px-3"
                  onClick={() =>
                    handleDownload(
                      selectedVariant?.code as string,
                      `${selectedComponent?.type}-${selectedVariant?.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                >
                  <CloudDownload className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              </div>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-6">
            {dialogTab === "preview" ? (
              <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-lg border p-2 sm:p-4">
                {selectedVariant && selectedComponent && (
                  <DynamicComponentPreview
                    componentPath={`${selectedComponent.type}/${selectedVariant.id}`}
                    variantId={selectedVariant.id}
                    size={size}
                  />
                )}
              </div>
            ) : (
              <div className="w-full h-full">
                <pre className="relative bg-gray-900 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm h-full overflow-auto">
                  <code
                    className="language-ts"
                    dangerouslySetInnerHTML={{
                      __html: selectedVariant?.code
                        ? Prism.highlight(
                            selectedVariant.code,
                            Prism.languages.typescript,
                            "typescript"
                          )
                        : "",
                    }}
                  />
                  <button
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white bg-gray-800 hover:bg-gray-700 rounded p-1.5 transition-colors"
                    onClick={() =>
                      handleCopy(
                        selectedVariant?.code as string,
                        selectedVariant?.id
                      )
                    }
                  >
                    {isCopy[selectedVariant?.id] ? (
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                  </button>
                </pre>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ComponentPreview;
