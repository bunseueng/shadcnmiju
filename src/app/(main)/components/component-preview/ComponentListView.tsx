import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  CloudDownload,
  Code,
  Command,
  Copy,
  Eye,
  Smartphone,
  Tablet,
  TvMinimal,
  ZoomIn,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import CLICommand from "../CLICommand";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { DynamicComponentPreview } from "../DynamicComponentPreview";
import { ComponentPreviewType } from "@/types/ComponentType";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";

interface ComponentListViewProps {
  selectedComponent: ComponentPreviewType;
  activeTab: Record<string, "preview" | "code">;
  setActiveTab: Dispatch<SetStateAction<Record<string, "preview" | "code">>>;
  actionState: Record<string, "loading" | "success" | "idle">;
  handleCopy: (value: string, id?: string) => void;
  handleDownload: (code: string, fileName: string) => void;
  isMobile: boolean;
  screenTab: Record<string, "desktop" | "tablet" | "mobile">;
  setScreenTab: Dispatch<
    SetStateAction<Record<string, "desktop" | "tablet" | "mobile">>
  >;
  setItemWidth: (id: string, width: number | null) => void;
  size: Record<string, { width: number | null }>;
}

const ComponentListView = ({
  selectedComponent,
  activeTab,
  setActiveTab,
  actionState,
  handleCopy,
  handleDownload,
  isMobile,
  screenTab,
  setScreenTab,
  setItemWidth,
  size,
}: ComponentListViewProps) => {
  return (
    <div className="p-3 md:p-4 overflow-hidden">
      {selectedComponent?.variants.map((variant) => {
        const currentTab = activeTab[variant.id] || "preview";
        return (
          <div
            className="w-auto flex flex-col items-center justify-between gap-3 py-3 md:py-4 border-b border-dashed last:border-b-0"
            key={variant.id}
            id={variant.id}
          >
            {/* Header Row - Title & Badge */}
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl truncate">
                  {variant.name}
                </h1>
                <Badge className="rounded-xs! shrink-0">Free</Badge>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex flex-wrap items-center gap-2 w-full">
              <div className="flex items-center gap-2 flex-none shrink-0 w-fit">
                {/* Preview/Code Tabs */}
                <Tabs
                  value={currentTab}
                  onValueChange={(value: string) =>
                    setActiveTab((prev) => ({
                      ...prev,
                      [variant.id]: value as "preview" | "code",
                    }))
                  }
                  className="shrink-0"
                >
                  <TabsList className="h-8 p-0.5">
                    <TabsTrigger
                      value="preview"
                      className="h-7 text-xs px-2 sm:px-3"
                    >
                      <Eye className="h-3 w-3 sm:mr-1" />
                      <span className="hidden sm:inline">Preview</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="code"
                      className="h-7 text-xs px-2 sm:px-3"
                    >
                      <Code className="h-3 w-3 sm:mr-1" />
                      <span className="hidden sm:inline">Code</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                {/* CLI Command */}
                <div className="hidden sm:block w-fit shrink-0">
                  <CLICommand variant={variant} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 flex-1 min-w-0 justify-end">
                {/* Copy Code */}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() =>
                    handleCopy(variant.code as string, `${variant.id}-copy`)
                  }
                  title="Copy Code"
                >
                  {actionState[`${variant.id}-copy`] === "loading" ? (
                    <Spinner className="h-3.5 w-3.5" />
                  ) : actionState[`${variant.id}-copy`] === "success" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Code className="h-3.5 w-3.5" />
                  )}
                </Button>

                {/* Copy Command */}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() =>
                    handleCopy(
                      variant.installCommand as string,
                      `${variant.id}-command`
                    )
                  }
                  title="Copy Command"
                >
                  {actionState[`${variant.id}-command`] === "loading" ? (
                    <Spinner className="h-3.5 w-3.5" />
                  ) : actionState[`${variant.id}-command`] === "success" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Command className="h-3.5 w-3.5" />
                  )}
                </Button>

                {/* Download */}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() =>
                    handleDownload(
                      variant.code as string,
                      `${selectedComponent.type}-${variant.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                  title="Download File"
                >
                  <CloudDownload className="h-3.5 w-3.5" />
                </Button>

                {/* Screen Size Tabs - Desktop Only */}
                {!isMobile && (
                  <Tabs
                    value={screenTab[variant.id] || "desktop"}
                    onValueChange={(value: string) =>
                      setScreenTab((prev) => ({
                        ...prev,
                        [variant.id]: value as "desktop" | "tablet" | "mobile",
                      }))
                    }
                  >
                    <TabsList className="h-8 p-0.5">
                      <TabsTrigger
                        value="desktop"
                        className="h-7 px-2"
                        onClick={() => setItemWidth(variant.id, null)}
                      >
                        <TvMinimal className="h-3.5 w-3.5" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="tablet"
                        className="h-7 px-2"
                        onClick={() => setItemWidth(variant.id, 768)}
                      >
                        <Tablet className="h-3.5 w-3.5" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="mobile"
                        className="h-7 px-2"
                        onClick={() => setItemWidth(variant.id, 375)}
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                )}

                {/* Full Screen Preview */}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  asChild
                  title="Preview Full Screen"
                >
                  <Link href={`/preview/${variant.id}`}>
                    <ZoomIn className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile CLI Command */}
            <div className="sm:hidden w-full">
              <CLICommand variant={variant} />
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
                    data-prismjs-copy="Copy the code snippet!"
                  />
                  <button
                    className="absolute top-4 right-4 text-white cursor-pointer"
                    onClick={() =>
                      handleCopy(variant.code as string, variant.id)
                    }
                  >
                    {actionState[`${variant.id}-copy`] ? (
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
  );
};

export default ComponentListView;
