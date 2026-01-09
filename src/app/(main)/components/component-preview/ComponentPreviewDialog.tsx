import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  CloudDownload,
  Copy,
  Check,
  Tablet,
  Smartphone,
  TvMinimal,
  Eye,
  Command,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DynamicComponentPreview } from "../DynamicComponentPreview";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import { ComponentPreviewType, ComponentVariant } from "@/types/ComponentType";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import CLICommand from "../CLICommand";

interface ComponentPreviewDialogProps {
  selectedVariant: ComponentVariant | null;
  selectedComponent: ComponentPreviewType;
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  isMobile: boolean;
  screenTab: Record<string, "desktop" | "tablet" | "mobile">;
  setScreenTab: Dispatch<
    SetStateAction<Record<string, "desktop" | "tablet" | "mobile">>
  >;
  setItemWidth: (id: string, width: number | null) => void;
  dialogTab: string;
  setDialogTab: Dispatch<SetStateAction<"preview" | "code">>;
  handleCopy: (value: string, id?: string) => void;
  handleDownload: (code: string, fileName: string) => void;
  actionState: Record<string, "loading" | "success" | "idle">;
  size: Record<string, { width: number | null }>;
}

const ComponentPreviewDialog = ({
  selectedVariant,
  selectedComponent,
  dialogOpen,
  setDialogOpen,
  isMobile,
  screenTab,
  setScreenTab,
  setItemWidth,
  dialogTab,
  setDialogTab,
  handleCopy,
  handleDownload,
  actionState,
  size,
}: ComponentPreviewDialogProps) => {
  if (!selectedVariant) {
    return null;
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] max-w-375! h-[85vh] sm:h-[90vh] p-0 flex flex-col gap-0 my-10">
        <DialogHeader className="p-3 sm:p-4 border-b shrink-0">
          <div className="flex flex-col gap-3">
            {/* First Row: Title and Badge */}
            <div className="flex items-center gap-2 sm:gap-3 justify-between pr-8">
              <DialogTitle className="text-sm sm:text-base md:text-lg truncate flex-1">
                {selectedVariant.name}
              </DialogTitle>
              <Badge className="shrink-0 text-xs">Free</Badge>
            </div>

            {/* Second Row: Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              {/* Screen Size Tabs - Desktop Only */}
              {!isMobile && (
                <Tabs
                  value={screenTab[selectedVariant.id] || "desktop"}
                  onValueChange={(value: string) =>
                    setScreenTab((prev) => ({
                      ...prev,
                      [selectedVariant.id]: value as "desktop" | "tablet" | "mobile",
                    }))
                  }
                >
                  <TabsList className="h-8 p-0.5">
                    <TabsTrigger
                      value="desktop"
                      className="h-7 px-2 sm:px-3"
                      onClick={() => setItemWidth(selectedVariant.id, null)}
                    >
                      <TvMinimal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </TabsTrigger>
                    <TabsTrigger
                      value="tablet"
                      className="h-7 px-2 sm:px-3"
                      onClick={() => setItemWidth(selectedVariant.id, 768)}
                    >
                      <Tablet className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </TabsTrigger>
                    <TabsTrigger
                      value="mobile"
                      className="h-7 px-2 sm:px-3"
                      onClick={() => setItemWidth(selectedVariant.id, 375)}
                    >
                      <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              )}

              {/* Preview/Code Tabs */}
              <Tabs
                value={dialogTab}
                onValueChange={(v: string) => setDialogTab(v as "preview" | "code")}
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

              {/* CLI Command */}
              <div className="block">
                <CLICommand variant={selectedVariant} />
              </div>
              <div className="space-x-2">
                {/* Copy Button - Icon only on mobile, with text on desktop */}
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-2 sm:px-3"
                  onClick={() =>
                    handleCopy(
                      selectedVariant.code ?? "",
                      `${selectedVariant.id}-copy`
                    )
                  }
                >
                  {actionState[`${selectedVariant.id}-copy`] === "loading" ? (
                    <Spinner className="h-3.5 w-3.5" />
                  ) : actionState[`${selectedVariant.id}-copy`] ===
                    "success" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Code className="h-3.5 w-3.5" />
                  )}
                  <span className="hidden sm:inline">Copy</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 sm:w-auto px-0 sm:px-3"
                  onClick={() =>
                    handleCopy(
                      selectedVariant.installCommand ?? "",
                      `${selectedVariant.id}-command`
                    )
                  }
                  title="Copy Command"
                >
                  {actionState[`${selectedVariant.id}-command`] ===
                  "loading" ? (
                    <Spinner className="h-3.5 w-3.5" />
                  ) : actionState[`${selectedVariant.id}-command`] ===
                    "success" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Command className="h-3.5 w-3.5" />
                  )}
                  <span className="hidden sm:inline">Copy</span>
                </Button>

                {/* Download Button - Icon only on mobile, with text on desktop */}
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 sm:w-auto px-0 sm:px-3"
                  onClick={() =>
                    handleDownload(
                      selectedVariant.code ?? "",
                      `${selectedComponent.type}-${selectedVariant.name
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
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-6">
          {dialogTab === "preview" ? (
            <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-lg border p-2 sm:p-4">
              <DynamicComponentPreview
                componentPath={`${selectedComponent.type}/${selectedVariant.id}`}
                variantId={selectedVariant.id}
                size={size}
              />
            </div>
          ) : (
            <div className="w-full h-full">
              <pre className="relative bg-gray-900 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm h-full overflow-auto">
                <code
                  className="language-ts"
                  dangerouslySetInnerHTML={{
                    __html: selectedVariant.code
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
                      selectedVariant.code ?? "",
                      selectedVariant.id
                    )
                  }
                >
                  {actionState[`${selectedVariant.id}-copy`] ? (
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
  );
};

export default ComponentPreviewDialog;
